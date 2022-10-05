---
title: Let's Write an IPython Extension the Hard Way
description: How a 5-minute hack for %reload function turned into a rabbit hole of different Python tools and techniques.
tags: IPython
similar:
  - ipython-extensions-guide
  - creating-magic-functions-part1
  - ipython-debugging
date: 2020-07-16
---

I love IPython. I love using it, I love writing about it, I love taking pictures with its core contributors (Hi Paul!). If I ever get invited to the ["Talk Python To Me"](https://talkpython.fm/) podcast (not that I have anything interesting to talk about), and Michael Kennedy is going to ask me what my favorite Python package is, you know what I'm going to say? Yep, IPython.

So, when a friend of mine asked me what kind of lightning talk[^1] I want to prepare for one of the upcoming micro-conferences, my first thought was: *"Let's try to make something cool with IPython"*. Maybe I can improve the %rerun magic function?

## What's wrong with the `%rerun` function?

You can use `%rerun` to run commands from this or previous sessions of IPython. The most common use case for me is to get my IPython session to the same state when I left it last time. It usually happens when I close it because I think I'm done, and then I realize that I actually want to check one more thing **with all the previous data that I had**. Well, in standard Python REPL, to rerun all the previous commands, I would have to press "arrow up" + "enter" a lot. With IPython, I can just run this one command: `%rerun ~1/`, and it will execute all the commands from the previous session:

```python
In [1]: a = 5

In [2]: b = 10

# Close IPython and open a new session

In [1]: %rerun ~1/
=== Executing: ===
a = 5
b = 10
=== Output: ===

In [2]: a
Out[2]: 5

In [3]: b
Out[3]: 10
```

But, there is one problem. If one of the past commands throws an exception, IPython will stop. It executes all the commands up to the exception, fails on the exception, and that's it:

```python
In [1]: a = 5

In [2]: b = 1/0
-----------------
ZeroDivisionError
----> 1 b = 1/0

ZeroDivisionError: division by zero

In [3]: c = 10

# Close IPython and open a new session

In [1]: %rerun ~1/
=== Executing: ===
a = 5
b = 1/0
c = 10
=== Output: ===
-----------------
ZeroDivisionError
      1 a = 5
----> 2 b = 1/0
      3 c = 10

ZeroDivisionError: division by zero

In [2]: a
Out[2]: 5

In [3]: c
--------------
NameError
----> 1 c

NameError: name 'c' is not defined
```

So if I want to execute the code after the exception, I have to figure out which command fails and rerun all commands after that line. For example, I can call: `%rerun ~1/5-66`, and this will run all commands from 5th until 66th command.

This has some limitations. First of all, you need to say which commands you want to run explicitly. And for that, you need to know the total number of commands for a given session. It's no longer as convenient as just writing `%rerun ~1/` and letting IPython figure out the rest.

Second of all - I don't know about you, but I have plenty of exceptions in my IPython sessions. After all, that's why IPython is for - experimenting with the code to find out what works and then copying that. So for each of the failed commands, I would have to exclude this line from the `%rerun`. This can quickly turn into a monstrosity like this: `%rerun ~1/1-2 ~1/4-6 ~1/8-12 ~1/15-23 ...`

It would be much better to temporarily ignore all the exceptions.

*"Let's write an extension that does that!"* - I thought. *"It probably won't take longer than 5 minutes to explain everything, so it's a perfect material for a lightning talk".*

It took longer than 5 minutes. Much longer. But it was an exciting journey!

## Is there a plugin for that?

The first step was to check if someone already asked about this feature in the past. "Ignore exceptions" setting would be useful, so clearly someone must have thought about that before me.

And someone did - already in 2012: [Add an 'ignore exceptions' mode to run commands in notebook](https://github.com/ipython/ipython/issues/1977). Starting from version 5.1, you can tag a cell in IPython notebooks with "raises-exception" to indicate that an exception is expected. IPython will ignore it and continue the execution. Unfortunately, it works only for the notebooks (so Jupyter Notebook), not for IPython REPL.

## *"Fine, I will do it myself."*

Let's look inside the `%rerun` function and see how it works:

```python
# IPython/core/magics/history.py

def rerun(self, parameter_s=''):
    opts, args = self.parse_options(parameter_s, 'l:g:', mode='string')
    if "l" in opts:         # Last n lines
        n = int(opts['l'])
        hist = self.shell.history_manager.get_tail(n)
    elif "g" in opts:       # Search
        p = "*"+opts['g']+"*"
        hist = list(self.shell.history_manager.search(p))
        for l in reversed(hist):
            if "rerun" not in l[2]:
                hist = [l]     # The last match which isn't a %rerun
                break
        else:
            hist = []          # No matches except %rerun
    elif args:              # Specify history ranges
        hist = self.shell.history_manager.get_range_by_str(args)
    else:                   # Last line
        hist = self.shell.history_manager.get_tail(1)
    hist = [x[2] for x in hist]
    if not hist:
        print("No lines in history match specification")
        return
    histlines = "\n".join(hist)
    print("=== Executing: ===")
    print(histlines)
    print("=== Output: ===")
    self.shell.run_cell("\n".join(hist), store_history=False)
```

Basically, it reuses the `%history` magic command to grab a list of commands from history and executes them.

I could monkey-patch this function and check if a given command is successful before adding it to the `hist` list. But monkey-patching external libraries is a bad idea. I would have to fork IPython and take care of upgrading it, or I would be stuck on the current version. So I needed a better way.

My first idea was to use one of [IPython's events](https://ipython.readthedocs.io/en/stable/config/callbacks.html). You can register a callback function when a specific event happens, for example, before or after you run a cell. When this event happens, IPython calls your callback function. That looked like a perfect solution! I could check if a given cell throws an exception and, if it does, skip it.

## Writing a callback for IPython events

To register my custom callback, I needed to create an IPython extension (I wrote an article explaining [how extensions work and how to create one]({% postUrl "ipython-extensions-guide" %})):

```python
# ~/.ipython/extensions/ignore_exceptions.py

def clean_input(info):
    try:
        exec(info.raw_cell)
    except Exception:
        info.raw_cell = ''

def load_ipython_extension(ipython):
    ipython.events.register('pre_run_cell', clean_input)
```

The `load_ipython_extension` registers `clean_input` callback that will be run before executing every cell. And `clean_input` does the following steps:

* Takes an argument (`info`) containing various information about the cell we are about to run. This parameter is mandatory, and IPython will complain if we forget it.
* Extracts the content of the cell (`raw_cell`).
* Tries to run it.
* And if it raises an exception, replaces that cell with an empty string.

We save that file in the `~/.ipython/extensions/` directory as `ignore_exceptions.py` and enable it with:

```python
%load_ext ignore_exceptions
```

If we try it:

```python
In [1]: %load_ext ignore_exceptions

In [2]: 1/0
ZeroDivisionError
----> 1 1/0

ZeroDivisionError: division by zero
```

...it doesn't really work. There are multiple problems with this code:

1. First of all - we are using `exec`, which is not the best practice. But since the code we want to run is the same code we wrote before, I'm fine with that.
2. The `info` parameter can contain multiple commands. If we call `%rerun 1-10`, `info` will contain the first ten commands from the current session. If the exception happens, let's say in the 5th command, our current implementation will ignore all the commands. But we want to ignore only that 5th one and still execute the other nine commands. So that's not going to work.
3. And even if we didn't have all those problems, **overwriting the `info.raw_cell` doesn't actually change the code that will be executed**.

We need something better.

## Input transformation

If we want to modify the input cells before they get executed, there is a feature exactly for that called ["input transformation"](https://ipython.readthedocs.io/en/stable/config/inputtransforms.html). You write a function that takes the input, modifies it, and returns it. And you can register your input transformation as an extension, exactly as we did before.

::: callout-info
There are two types of input transformers:

* `input_transformers_cleanup` - they run first. At this point, the cell is not guaranteed to contain valid Python code (e.g., IPython-specific syntax, like the magic functions).
* `input_transformers_post` - they run last, and here the cell contains only the Python code. In most cases, you want to use this one.
:::

Input transformation solves all our problems (except for using the `exec`, but I will stick with it for simplicity). First of all, it's an *"input"* transformation, so we can use it to change the input cell's content. And since each line of the input is a separate element in a list, we can just execute them one by one and discard those that raise an exception. So this is what we are going to do:

```python
def clean_input(lines):
    new_lines = []
    for line in lines:
        try:
            exec(line)
            new_lines.append(line)
        except Exception:
            pass
    return new_lines

def load_ipython_extension(ipython):
    ipython.input_transformers_post.append(clean_input)
```

Let's load it and run it:

```python
In [1]: %load_ext ignore_exceptions

In [2]: 1/0

In [3]: 1+2
Out[3]: 3
In [4]: my_number = 10

In [5]: my_number + 5
# Nothing is returned!
```

It's working, but partially. If we assign a variable (`In [4]`) and then reference it (`In [5]`), you will notice that nothing is returned! That's because `my_number` variable was saved in the **local namespace** of IPython, and the `exec` function call is running without access to those variables. Our extension tries to reference variable `my_number`, gets a `NameError`, and since our code is supposed to ignore errors, it ignores that line. Thus - nothing is printed!

We need to tell `exec` about all the variables that have been defined so far. If you check the [signature of the exec() function](https://docs.python.org/3.8/library/functions.html#exec), you will see that apart from the code to execute, we can also pass global and local variables. Bingo! Let's grab the `user_ns` from the `ipython` object and pass it to the `exec` function. `user_ns` contains all the variables that were defined so far, but also all the imported modules, classes, etc.

We need to change this line:


```python
exec(line)
```

into this:

```python
exec(line, None, ipython.user_ns)
```

But the `clean_input` function doesn't have access to the `ipython` object! And we can't pass it as a parameter:
```python
def clean_input(lines, ipython):
```
because input transformer functions need to have a specific signature and they can accept only one parameter - the list of lines. We could solve this problem using a class, but I prefer to use a technique called [currying](https://en.wikipedia.org/wiki/Currying):

```python
def curry_clean(ipython):
    def clean_input(lines):
        new_lines = []
        for line in lines:
            try:
                exec(line, None, ipython.user_ns)
                new_lines.append(line)
            except Exception:
                pass
        return new_lines
    return clean_input


def load_ipython_extension(ipython):
    ipython.input_transformers_post.append(curry_clean(ipython))
```

Let's try again:

```python
In [1]: %load_ext ignore_exceptions

In [2]: 1/0

In [4]: my_number = 10

In [5]: my_number + 5
Out[5]: 10
```

It's working! Kind of... We can declare a variable and reference it later, so that's good. If the code throws an exception, it will be suppressed - that's also what we want. But if we call a `print()` function, we get the output three times!

```python
In [6]: print('hello world')
hello world
hello world
hello world
```

That's because our input transformation function is actually called twice! Once in the `should_run_async()` function and then in the `run_cell()` function. That's the behavior of version 7.15 of IPython - the latest one when I write this. And there is nothing you can do about it. If you ever decide to write some input transformations, keep in mind that **they can run multiple times**.

And when we actually execute the code, that's the third `print()`. This "triple printing" can be mildly annoying, but maybe it's not that bad? All we want to do is to rerun previous commands in one go, so we can live with duplicated output that happens only once.

But if printing happens multiple times, then every other command happens multiple times. And if we run a command that is not idempotent:

```shell
In [7]: my_number = 10

In [8]: my_number += 1

In [9]: my_number
Out[9]: 13
```

We get a bug. 10 incremented by 1 should give us 11, but instead, we get 13. Modifications that we do in `try/except` block get propagated back to our IPython session because we are accessing variables from that namespace. Remember the `ipython.user_ns`? It works both ways - for accessing and **assigning** variables.

If we don't want to modify the original namespace, let's make a copy and execute our code there! Except that we would need to do a [deep copy](https://docs.python.org/3.8/library/copy.html?#copy.deepcopy). Why a deep copy? Because if we have mutable variables (like a list) and do a shallow copy, modifying the mutable variable in the copied namespace will still affect the original namespace. We need to cut the connections between both namespaces completely, so we use the deep copy.

Deep copy basically pickles and un-pickles every object. Do you know what can't be pickled? Modules. And do you know what IPython's (or Python's) namespace contains, except for functions and variables? Modules! So deep copy is going to crash.

Unless we filter the namespace and only pickle things that can be pickled! In the end, I only need to copy variables. I won't be able to modify modules anyway, so it's fine to leave them in the namespace as they are. Let's add a new function for this:

```python
from copy import deepcopy

def copy_namespace(local_ns):
    copy_ns = {}
    for key, value in local_ns.items():
        try:
            copy_ns[key] = deepcopy(value)
        except TypeError:
            # TypeError is raised when an object can't be pickled
            copy_ns[key] = value
    return copy_ns
```

And here are two changes that we need to make in the `curry_clean` function:

```diff
def curry_clean(ipython):
    def clean_input(lines):
        new_lines = []
+       local_ns = copy_namespace(ipython.user_ns)
        for line in lines:
            try:
-               exec(line, None, ipython.user_ns)
+               exec(line, None, local_ns)
                new_lines.append(line)
            except Exception:
                pass
        return new_lines
    return clean_input
```

We are almost there, but there are two problems left:

* We still get a lot of duplicated output for `print` and similar commands.
* Our function doesn't work for multiline strings (so all `for-loops`, function definitions, and similar multiline statements will crash it).

Let's solve them now. First, the duplicated output. We can suppress it by redirecting the standard output to `/dev/null`:

```python
import os
import sys

sys.stdout = open(os.devnull, 'w')
print("I'm invisible")
```

If we run the above code, the output of a print statement won't be displayed. Actually, no other output will be displayed afterward, so we need to set the `stdout` back to the original value after the `try/except` check.

If we want to execute some code, run a function, and then execute more code, the best tool to use is a context manager. Let's write one:

```python
import os
import sys
from contextlib import contextmanager

@contextmanager
def no_output():
    original_stdout = sys.stdout
    sys.stdout = open(os.devnull, 'w')
    yield
    sys.stdout = original_stdout
```

I'm using the `contextmanager` decorator to turn my function into a context manager (it saves me from writing boilerplate code). Here is what my function does:

* Store the original stdout in a variable.
* Replace the `stdout` with `/dev/null` (whatever you write to `dev/null` is gone).
* Yield - so run the code inside the context manager.
* And, finally, restore stdout to the initial value.

Now, we wrap our `exec` function with this context manager:

```diff
for line in lines:
+   with no_output():
        try:
            exec(line, None, local_ns)
            new_lines.append(line)
        except Exception:
            pass
return new_lines
```

Uff, almost there! The last part is to enable running multiline code. For that, we just need to check if the line starts with a whitespace character. If it does, combine it with the previous line.

Let's write a helper to transform multiline strings into one-line strings:

```python
def combine_multiline(lines):
    new_lines = []
    for line in lines:
        if line.startswith(' ') and new_lines:
            new_lines[-1] += line
        else:
            new_lines.append(line)
    return new_lines
```

The second part of the `if line.startswith('') and new_lines` is just a sanity check to make sure that `new_lines` already contains items. Normally, we wouldn't bother with checking for this. If the first line starts with spaces, there is something wrong with it, and it will fail during the execution anyway.

Let's call our function in the correct place:

```diff
def clean_input(lines):
    new_lines = []
+   lines = combine_multiline(lines)
```

And finally, our hackish input transformation *seems to* be working!

*Seems to*, because there is an interesting bug. If we try to rerun a command that reloads our extension (`%reload ignore_exceptions`), IPython will get into an infinite loop. It will try to add `clean_input` callback again. This will run the callback itself. The callback will try to execute `%reload ignore_exceptions` that will register `clean_input` that will call the callback, and so on. Until it crashes.

We can solve this problem by adding the **"unload"** function that lets you disable an extension. In our case, we want to remove `clean_input` from the list of `input_transformers_post`:

```python
def unload_ipython_extension(ipython):
    ipython.input_transformers_post = [
        f for f in ipython.input_transformers_post if f.__name__ != 'clean_input'
    ]
```

The above code goes through the list of all input transformers and removes the one called "clean_input". We can't replace the `if f.__name__ != 'clean_input'` with `if f == curry_clean(ipython)` because each time we call `curry_clean(ipython)` it creates a different object. So the `curry_clean` function added to the input transformers list has a different id than `curry_clean` called in the comparison. We could use a singleton design pattern if we want, but we might just compare functions' names, which will work just fine.

With unload in place, our extension is finally ready. You can activate it, run some code, and notice that no exceptions are raised. You can also deactivate it with:

```python
%unload_ext ignore_exceptions
```

## Meet %rerunplus: %rerun that ignores exceptions

But how can we use it in combination with `%rerun`? 

The simplest way is to create a new magic function that wraps a call to `%rerun` in load/unload functions. Let's make a new file inside `~/.ipython/profile_default/startup/` directory and define our magic function there. During startup, IPython automatically executes files defined in this directory. It's a good place to put magic functions that we want to enable in each IPython session.

```python
from IPython.core.magic import register_line_magic


@register_line_magic
def rerunplus(line):
    get_ipython().run_line_magic('load_ext', 'ignore_exceptions')
    get_ipython().run_line_magic('rerun', line)
    get_ipython().run_line_magic('unload_ext', 'ignore_exceptions')


def load_ipython_extension(ipython):
    ipython.register_magics(rerunplus)
```

Your code editor will complain that the `get_ipython()` is not defined, but actually, that's a global function in IPython, so it's fine. If you restart IPython, you will now have access to a `%rerunplus` magic function. Let's give it a try.

First, run some code with exceptions:

```python
a = 1
b = 2
1/0
c = 3
myfile = open('beep')
d = 4
```

Next, close and reopen IPython. If you try to rerun all the commands using the standard `%rerun`, it will fail at `1/0` exception. `a` and `b` variables will be set, but `c` and `d` won't. But if we use our new, cool `%rerunplus`, it will ignore all the exceptions and set all variables correctly:

```python
In [1]: %rerunplus ~1/
=== Executing: ===
a = 1
b = 2
1/0
c = 3
myfile = open('beep')
d = 4
=== Output: ===

In [2]: a
Out[2]: 1

In [3]: b
Out[3]: 2

In [4]: c
Out[4]: 3

In [5]: d
Out[5]: 4
```

[Here is the complete code](https://gist.github.com/switowski/301320fb6388822a76644461219e4386) from this article.

## Conclusions

We have built an improved version of `%rerun` that ignores exceptions. Is it efficient? Nope. It's a hackish solution that you should use only with your own code, especially since we use `exec`. `exec` should never be used to run some code that you have no control over! But those 60 lines of code are good enough to fix one of the biggest shortcomings of the original `%rerun` command.

### Post Scriptum

What happens if we try to `%rerun` code that contains `%rerun` instruction? We get a `RecursionError`. This is a bug that both standard `%rerun` and my `%rerunplus` share. So if you got curious about digging into IPython, you can take my extension and try to fix it on your own.


[^1]: Lightning talk is a short presentation (usually around 5 minutes) (see [Lightning talk on Wikipedia](https://en.wikipedia.org/wiki/Lightning_talk))
