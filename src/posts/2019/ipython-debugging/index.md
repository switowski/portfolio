---
title: 5 Ways of Debugging with IPython
description: Tips and tricks on how to use IPython as your debugger.
tags: ['Python', 'IPython']
similar:
  - ipython-extensions-guide
  - ipython-startup-files
  - 25-ipython-tips-for-your-next-advent-of-code
date: 2019-12-23
featured: true
---

<!-- TODO: Updates
* Mention that debuggers can be ran as standard Python modules: python -m pdb filename.py
 -->
There is a great article from Tenderlove - one of the core Ruby and Rails developers - called ["I am a puts debuggerer"](https://tenderlovemaking.com/2016/02/05/i-am-a-puts-debuggerer.html), that I enjoyed when I played with Ruby. The gist of it is to show you that, in many cases, you don't need a full-fledged debugger. Don't get me (or Tenderlove) wrong - the debugger that comes with a good IDE is one of the most powerful tools that a programmer can have! You can easily put breakpoints in your code, move around the stack trace or inspect and modify variables on the fly. It makes working with large codebase much easier and helps newcomers get up to speed on a new project.

Yet, people still use `print` statements for debugging their code. I do this all the time. Printing a variable is fast and easy. *"I'm going to start a debugging session"* sounds **heavy**. *"I think there is a bug with this one variable. I'm going to print it!"* doesn't. Never mind that 5 minutes later our *one print statement* turns into:

```python
print(a_varible)

...

if foo:
    print(">>>>>>>>>>>>>>Inside 3rd IF")

...

    print(">>>>>>>>>>>>>>Inside 37th IF")

print(">>>>>>>>>> #@!?#!!!")
```

Sounds familiar? There is nothing wrong with using `print` for debugging. Quite often, it’s all you need to find the bug. And sometimes, it’s the only way that you can debug your code. You can't *easily* attach a debugger to your production code without impacting your users. But, adding some print statements and then looking at the logs should be fine.

And not everyone is using an IDE with a good debugger. According to the [Stack Overflow Developer Survey Results 2019](https://insights.stackoverflow.com/survey/2019#development-environments-and-tools), 30.5% of developers are using Notepad++, 25.4% Vim, and 23.4% Sublime Text. Those are text editors! And even though I have seen people being more productive in Vim than most of the PyCharm or VS Code users, text editors are not created with a powerful debugger in mind. You can always use the standard Python debugger [`pdb`](https://docs.python.org/3/library/pdb.html), but a much better alternative is to use IPython as your debugger.

I've been using VS Code for almost two years, but I don't remember when was the last time I used the built-in debugger. I do most of my debugging in IPython. Here is how I'm using it:

## Embedding IPython session in the code

The most common case for me is to embed an IPython session in the code. All you need to do is to put the following lines in your code:

```python
from IPython import embed
embed()
```

I like to put those two statements in the same line:

```python
from IPython import embed; embed()
```

so I can remove them with one keystroke. And, since putting multiple statements on the same line is a bad practice in Python, every code linter will complain about it. That way, I won't forget to remove it when I'm done 😉.

When you run your code and the interpreter gets to the line with the `embed()` function, it will open an IPython session. You can poke around and see what's going on in the code. When you are done, you just close the session (`Ctrl+d`) and the code execution will continue. One nice thing about this approach is that all the modifications done in IPython will persist when you close it. So you can modify some variables or functions (you can even decorate functions with some simple logging) and see how the rest of the code will behave.

Here is a short demo of `embed()` in action. Let's say we have the following file:

```python
a = 10
b = 15

from IPython import embed; embed()

print(f"a+b = {a+b}")
```

This is what happens when we run it:

{% from "macros.njk" import ascii %}
{{ ascii("272903") }}

As you can see, I changed the value of the `a` variable and the new value persisted after I closed the IPython session.

## Putting a breakpoint in your code

Embedding an IPython session in the code is fine if you want to see what's going on at a given line. But you can't execute the next lines of code, as a real debugger would do. So a better idea is to put a breakpoint in your code instead. Starting with version 3.7 of Python, there is a new built-in function called [breakpoint()](https://www.python.org/dev/peps/pep-0553/) that you can use for that. If you are using an older version of Python, you can achieve the same effect by running the following code:

```python
import pdb; pdb.set_trace()
```

The default debugger (`pdb`) is pretty rudimentary. Just like in the standard Python REPL, you won't get the syntax highlighting or automatic indentation. A much better alternative is the [ipdb](https://pypi.org/project/ipdb/). It will use IPython as the debugger. To enable it, use the **i**pdb instead of pdb:

```python
import ipdb; ipdb.set_trace()
```

There is also another interesting debugger called [PDB++](https://pypi.org/project/pdbpp/). It has a different set of features than ipdb, for example, a *sticky* mode that keeps showing you the current location in the code.

No matter which debugger you end up using, they have a pretty standard set of commands. You can execute the next line by calling the `next` command (or just `n`), step inside the function with `step` (or `s`), continue until the next breakpoint with `continue` (or `c`), display where you are in the code with `l` or `ll`, etc. If you are new to these CLI debuggers, the ["Python Debugging With Pdb" tutorial](https://realpython.com/python-debugging-pdb/) is a good resource to learn how to use them.

## %run -d filename.py

IPython has another way to start a debugger. You don't need to modify the source code of any file as we did before. If you run the `%run -d filename.py` magic command, IPython will execute the `filename.py` file and put a breakpoint on the first line there. It's just as if you would put the `import ipdb; ipdb.set_trace()` manually inside the `filename.py` file and run it with `python filename.py` command.

If you want to put the breakpoint somewhere else than the first line, you can use the `-b` parameter. The following code will put the breakpoint on line 42:

```python
%run -d -b42 filename.py
```

Keep in mind that the line that you specify has to contain code that actually does something. It can't be an empty line or a comment!

Finally, there might be a situation where you want to put a breakpoint in a different file than the one that you will run. For example, the bug might be hidden in one of the imported modules and you don't want to type `next` 100 times to get there. The `-b` option can accept a file name followed by a colon and a line number to specify where exactly you want to put the breakpoint:

```python
%run -d -b myotherfile.py:42 myscript.py
```

The above code will put a breakpoint on line 42 in a file called `myotherfile.py` and then start executing file `myscript.py`. Once the Python interpreter gets to `myotherfile.py`, it will stop at the breakpoint.

## Post-mortem debugging

IPython has 176 features[^1]. Post mortem debugging is the best one. At least for me. Imagine that you are running a script. A long-running script. And suddenly, after 15 minutes, it crashes. *Great* - you think - *now I have to put some breakpoints, rerun it and wait for another 15 minutes to see what's going on.* Well, if you are using IPython, then you don't have to wait. All you need to do now is to run the magic command `%debug`. It will load the stack trace of the last exception and start the debugger (Python stores the last unhandled exception inside the `sys.last_traceback` variable). It's a great feature that has already saved me hours of rerunning some commands just to start the debugger.

If you are using the standard `pdb` debugger, you can achieve the same behavior by running the `import pdb; pdb.pm()` command.

## Automatic debugger with %pdb

The only way to make debugging even more convenient is to automatically start a debugger if an exception is raised. And IPython has a magic command to enable this behavior - `%pdb`.

If you run `%pdb 1` (or `%pdb on`), a debugger will automatically start on each unhandled exception. You can turn this behavior off again with `%pdb 0` or `%pdb off`. Running `%pdb` without any argument will toggle the automatic debugger on and off.

&nbsp;

[^1]: This number is totally made up. I'm sorry my data-driven friends.

&nbsp;

Photo by Steinar Engeland on [Unsplash](https://unsplash.com/photos/drw6RtOKDiA)
