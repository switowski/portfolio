---
title: 25 IPython Tips for Your Next Advent of Code
description: I don't always do the Advent of Code challenges. But when I do, I do them in IPython. Let me show you why.
tags: ['Python', 'IPython']
similar:
    - ipython-autoreload
    - creating-magic-functions-part1
    - ipython-extensions-guide
date: 2021-01-27
---

I've decided to skip last year's [Advent of Code](https://adventofcode.com/) edition. Mostly because I didn't have time, but I also knew that I probably wouldn't finish it. I've never finished any edition. I'm not very good at code katas, and I usually try to brute force them. With AoC, that works for the first ten days, but then the challenges start to get more and more complicated, and adding the @jit decorator to [speed up my ugly Python code](/blog/easy-speedup-wins-with-numba#how-did-i-find-numba) can only get me so far.

But one thing that helped me a lot with the previous editions was to use IPython. Solving those problems incrementally is what actually makes it fun. You start by hard-coding the simple example that comes with each task. Then you try to find a solution for this small-scale problem. You try different things, you wrangle with the input data, and after each step, you see the output, so you know if you are getting closer to solving it or not. Once you manage to solve the simple case, you load the actual input data, and you run it just to find out that there were a few corner cases that you missed. It wouldn't be fun if I had to use a compiled language and write a full program to see the first results.

This year, instead of doing the "Advent of Code," I've decided to do an "Advent of IPython" on Twitter - for 25 days, [I've shared tips](https://twitter.com/SebaWitowski/status/1334427973945012224) that can help you when you're solving problems like AoC using IPython. Here is a recap of what you can do.

## 1. Display the documentation

```python
In [1]: import re

In [2]: re.findall?
Signature: re.findall(pattern, string, flags=0)
Docstring:
Return a list of all non-overlapping matches in the string.

If one or more capturing groups are present in the pattern, return
a list of groups; this will be a list of tuples if the pattern
has more than one group.

Empty matches are included in the result.
File:      ~/.pyenv/versions/3.9.0/lib/python3.9/re.py
Type:      function
```

That's one of my favorite features. You can display the documentation of any function, module, and variable by adding the "?" at the beginning or at the end of it. It's called "dynamic object introspection," and I love it because I don't have to leave the terminal to get the documentation. You can use the built-in `help()` function to get this information with the standard Python REPL, but I find the "?" much more readable. It highlights the most important information like the signature and the docstring, and it comes with colors (even though you can't see them here because my syntax highlighting library doesn't support IPython).

## 2. Display the source code

```python
In [1]: import pandas

In [2]: pandas.DataFrame??

Init signature:
pandas.DataFrame(
    data=None,
    index: Optional[Collection] = None,
    columns: Optional[Collection] = None,
    dtype: Union[ForwardRef('ExtensionDtype'), str, numpy.dtype, Type[Union[str, float, int, complex, bool]], NoneType] = None,
    copy: bool = False,
)
Source:
class DataFrame(NDFrame):
    """
    Two-dimensional, size-mutable, potentially heterogeneous tabular data.

    Data structure also contains labeled axes (rows and columns).
    Arithmetic operations align on both row and column labels. Can be
    thought of as a dict-like container for Series objects. The primary
    pandas data structure.

    Parameters
    ----------

... and so on
```

And if you want to see the full source code of a function (or class/module), use two question marks instead (`function_name??` or `??function_name`).

## 3. %edit magic function

{% postImage "edit.gif", "%edit magic command" %}

If you want to write a long function, use the `%edit` magic command. It will open your favorite editor (or actually the one that you set with the $EDITOR environment variable) where you can edit your code. When you save and close this file, IPython will automatically execute it.

I use it with vim, and it works great when I want to write a bit longer function (with vim I have a lightweight linter, and moving around the code is faster). It's a nice middle ground when you are too lazy to switch to your code editor to write the whole code, but at the same time, the function that you are writing is a bit too big to write it comfortably in IPython.

## 4. Reopen last file with "%edit -p"

{% postImage "edit-p.gif", "%edit magic command with -p option" %}

And speaking of the %edit command, you can run `%edit -p` to reopen the same file that you edited the last time. This is useful if you made a mistake and you want to fix it without having to type everything again or if you want to add more code to the function that you just wrote.

## 5. Wildcard search

```python
In [1]: import os

In [2]: os.*dir*?
os.__dir__
os.chdir
os.curdir
os.fchdir
os.listdir
os.makedirs
os.mkdir
os.pardir
os.removedirs
os.rmdir
os.scandir
os.supports_dir_fd

In [3]: os.chdir("/some/other/dir")
```

If you forget the name of some function, you can combine the dynamic object introspection (the "?") and a wildcard (the "*") to perform a wildcard search. For example, I know that the `os` module has a function to change the current directory, but I don't remember its name. I can list all the functions from the `os` module, but I'm sure that a function like this must contain "dir" in its name. So I can limit the search and list all the functions from the `os` module that contain "dir" in their names.

## 6. post-mortem debugging

```python
In [1]: from solver import solve

In [2]: solve()
IndexError: list index out of range

In [3]: %debug
> /Users/switowski/workspace/iac/solver.py(11)count_trees()
      9         x = (x + dx) % mod
     10         y += dy
---> 11         if values[y][x] == "#":
     12             count += 1
     13     return count

ipdb>
```

Displaying the documentation is *one of* my favorite features, but post-mortem debugging is **my favorite** feature. After you get an exception, you can run `%debug`, and it will start a debugging session for that exception. That's right! You don't need to put any breakpoints or run IPython with any special parameters. You just start coding, and ~~if~~ when an exception happens, you run this command to start debugging.

## 7. Start the debugger automatically

```python
In [1]: %pdb
Automatic pdb calling has been turned ON

In [2]: from solver import solve

In [3]: solve()
IndexError: list index out of range

> /Users/switowski/workspace/iac/solver.py(11)count_trees()
      9         x = (x + dx) % mod
     10         y += dy
---> 11         if values[y][x] == "#":
     12             count += 1
     13     return count

ipdb> y
1
ipdb> x
3
ipdb>

```

And if you want to start a debugger on every exception automatically, you can run `%pdb` to enable the automatic debugger. Run `%pdb` again to disable it.

## 8. Run shell commands

```python
In [1]: !pwd
/Users/switowski/workspace/iac

In [2]: ls -al
total 8
drwxr-xr-x   5 switowski  staff   480 Dec 21 17:26 ./
drwxr-xr-x  55 switowski  staff  1760 Dec 22 14:47 ../
drwxr-xr-x   9 switowski  staff   384 Dec 21 17:27 .git/
drwxr-xr-x   4 switowski  staff   160 Jan 25 11:39 __pycache__/
-rw-r--r--   1 switowski  staff   344 Dec 21 17:26 solver.py

# Node REPL inside IPython? Sure!
In [3]: !node
Welcome to Node.js v12.8.0.
Type ".help" for more information.
> var x = "Hello world"
undefined
> x
'Hello world'
>
```

You can run shell commands without leaving IPython - you just need to prefix it with the exclamation mark. And the most common shell commands like `ls`, `pwd`, `cd` will work even without it (of course, unless you have a Python function with the same name).

I use it mostly to move between folders or to move files around. But you can do all sorts of crazy things - including starting a REPL for a different programming language inside IPython.

## 9. Move around the filesystem with %cd

```python
In [1]: !pwd
/Users/switowski/workspace/iac/input_files/wrong/folder

In [2]: %cd ../..
/Users/switowski/workspace/iac/input_files

In [3]: %cd right_folder/
/Users/switowski/workspace/iac/input_files/right_folder
```

Alternatively, you can also move around the filesystem using the `%cd` magic command (press Tab to get the autocompletion for the list of available folders). It comes with some additional features - you can bookmark a folder or move a few folders back in the history (run `%cd?` to see the list of options).

## 10. %autoreload

{% postImage "autoreload.gif", "%autoreload magic command" %}

Use `%autoreload` to automatically reload all the imported functions before running them. By default, when you import a function in Python, Python *"saves its source code in memory"* (ok, that's not what actually happens, but for illustration purposes, let's stick with that oversimplification). When you change the source code of that function, Python won't notice the change, and it will keep using the outdated version.

If you are building a function or a module and you want to keep testing the latest version without restarting the IPython (or using the [importlib.reload()](https://docs.python.org/3/library/importlib.html#importlib.reload)), you can use the `%autoreload` magic command. It will always reload the source code before running your functions. If you want to learn more - I wrote a [longer article about it]({% postUrl "ipython-autoreload" %}).

## 11. Change the verbosity of exceptions

By default, the amount of information in IPython's exceptions is just right - at least for me. But if you prefer to change that, you can use the `%xmode` magic command. It will switch between 4 levels of traceback's verbosity. Check it out - it's the same exception, but the traceback gets more and more detailed:

* Minimal

    ```python
    In [1]: %xmode
    Exception reporting mode: Minimal

    In [2]: solve()
    IndexError: list index out of range
    ```

* Plain

    ```python
    In [3]: %xmode
    Exception reporting mode: Plain

    In [4]: solve()
    Traceback (most recent call last):
    File "<ipython-input-6-6f300b4f5987>", line 1, in <module>
        solve()
    File "/Users/switowski/workspace/iac/solver.py", line 27, in solve
        sol_part1 = part1(vals)
    File "/Users/switowski/workspace/iac/solver.py", line 16, in part1
        return count_trees(vals, 3, 1)
    File "/Users/switowski/workspace/iac/solver.py", line 11, in count_trees
        if vals[y][x] == "#":
    IndexError: list index out of range
    ```

* Context (that's the default setting)

    ```python
    In [5]: %xmode
    Exception reporting mode: Context

    In [6]: solve()
    ---------------------------------------------------------------------------
    IndexError                                Traceback (most recent call last)
    <ipython-input-8-6f300b4f5987> in <module>
    ----> 1 solve()

    ~/workspace/iac/solver.py in solve()
        25 def solve():
        26     vals = getInput()
    ---> 27     sol_part1 = part1(vals)
        28     print(f"Part 1: {sol_part1}")
        29     print(f"Part 2: {part2(vals, sol_part1)}")

    ~/workspace/iac/solver.py in part1(vals)
        14
        15 def part1(vals: list) -> int:
    ---> 16     return count_trees(vals, 3, 1)
        17
        18 def part2(vals: list, sol_part1: int) -> int:

    ~/workspace/iac/solver.py in count_trees(vals, dx, dy)
        9         x = (x + dx) % mod
        10         y += dy
    ---> 11         if vals[y][x] == "#":
        12             cnt += 1
        13     return cnt

    IndexError: list index out of range
    ```

* Verbose (like "Context" but also shows the values of local and global variables)

    ```python
    In [7]: %xmode
    Exception reporting mode: Verbose

    In [8]: solve()
    ---------------------------------------------------------------------------
    IndexError                                Traceback (most recent call last)
    <ipython-input-10-6f300b4f5987> in <module>
    ----> 1 solve()
            global solve = <function solve at 0x109312b80>

    ~/workspace/iac/solver.py in solve()
        25 def solve():
        26     values = read_input()
    ---> 27     part1 = solve1(values)
            part1 = undefined
            global solve1 = <function solve1 at 0x109f363a0>
            values = [['..##.......', ..., '.#..#...#.#']]
        28     print(f"Part 1: {part1}")
        29     print(f"Part 2: {solve2(values, part1)}")

    ~/workspace/iac/solver.py in solve1(values=[['..##.......', ..., '.#..#...#.#']])
        14
        15 def solve1(values: list) -> int:
    ---> 16     return count_trees(values, 3, 1)
            global count_trees = <function count_trees at 0x109f364c0>
            values = [['..##.......', ..., '.#..#...#.#']]
        17
        18 def solve2(values: list, sol_part1: int) -> int:

    ... and so on

    IndexError: list index out of range
    ```

## 12. Rerun commands from the previous sessions

```python
In [1]: a = 10

In [2]: b = a + 20

In [3]: b
Out[3]: 30

# Restart IPython

In [1]: %rerun ~1/
=== Executing: ===
a = 10
b = a + 20
b
=== Output: ===
Out[1]: 30

In [2]: b
Out[2]: 30
```

You can use the `%rerun ~1/` to rerun all the commands from the previous session. That's a great way to get you back to the same place where you left IPython. But it has one huge downside - if you had any exception (and I'm pretty sure you did), the execution will stop there. So you have to remove the lines with exceptions manually. If you are using Jupyter Notebooks, there is [a workaround](https://github.com/jupyter/notebook/pull/2549) that allows you to tag a notebook cell as "raising an exception." If you rerun it, IPython will ignore this exception. It's not a perfect solution, and an option to ignore exceptions during the %rerun command would be much better.

## 13. Execute some code at startup

{% postImage "startup.gif", "Startup folder" %}

If you want to execute some code each time you start IPython, just create a new file inside the "startup" folder (`~/.ipython/profile_default/startup/`) and add your code there. IPython will automatically execute any files it finds in this folder. It's great if you want to import some modules that you use all the time, but if you put too much code there, the startup time of IPython will be slower.

## 14. Use different profiles

{% postImage "profile.gif", "Profiles" %}

Maybe you have a set of modules that you want to import and settings to set in a specific situation. For example, when debugging/profiling, you want to set the exceptions to the verbose mode and import some profiling libraries. Don't put that into the default profile because you don't debug or profile your code all the time. Create a new profile and put your debugging settings inside. Profiles are like different user accounts for IPython - each of them has its own configuration file and startup folder.

## 15. Output from the previous commands

```python
In [1]: sum(range(1000000))
Out[1]: 499999500000

In [2]: the_sum = _

In [3]: the_sum
Out[3]: 499999500000

In [4]: _1
Out[4]: 499999500000
```

If you forgot to assign an expression to a variable, use `var = _`. `_` stores the output of the last command (this also works in the standard Python REPL). The results of all the previous commands are stored in variables `_1` (output from the first command), `_2` (output from the second command), etc.

## 16. Edit any function or module

{% postImage "edit-any-function.gif", "Editing any function" %}

You can use `%edit` to edit any Python function. And I really mean **ANY** function - functions from your code, from packages installed with pip, or even the built-in ones. You don't even need to know in which file that function is located. Just specify the name (you have to import it first), and IPython will find it for you.

In the above example, I'm breaking the built-in `randint()` function by always returning 42.

## 17. Share your code

```python
In [1]: welcome = "Welcome to my gist"

In [2]: welcome
Out[2]: 'Welcome to my gist'

In [3]: a = 42

In [4]: b = 41

In [5]: a - b
Out[5]: 1

In [6]: %pastebin 1-5
Out[6]: 'http://dpaste.com/8QA86F776'
```

If you want to share your code with someone, use the `%pastebin` command and specify which lines you want to share. IPython will create a pastebin (something similar to [GitHub gist](https://gist.github.com/)), paste selected lines, and return a link that you can send to someone. Just keep in mind that this snippet will expire in 7 days.

## 18. Use IPython as your debugger

{% postImage "debugger.gif", "IPython as a debugger" %}

Maybe some of the tips that I've shared convinced you that IPython is actually pretty cool. If that's the case, you can use it not only as a REPL (the interactive Python shell) but also as a debugger. IPython comes with "ipdb" - it's like the built-in Python debugger "pdb", but with some IPython's features on top of it (syntax highlighting, autocompletion, etc.)

You can use ipdb with your breakpoint statements by setting the `PYTHONBREAKPOINT` environment variable - it controls what happens when you call `breakpoint()` in your code. This trick requires using Python 3.7 or higher (that's when the `breakpoint()` statement was introduced).

## 19. Execute code written in another language

```ruby
In [1]: %%ruby
   ...: 1.upto 16 do |i|
   ...:   out = ""
   ...:   out += "Fizz" if i % 3 == 0
   ...:   out += "Buzz" if i % 5 == 0
   ...:   puts out.empty? ? i : out
   ...: end
   ...:
   ...:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
```

Let's say you want to execute some code written in another language without leaving IPython. You might be surprised to see that IPython supports Ruby, Bash, or JavaScript out of the box. And even more languages can be supported when you install additional kernels!

Just type `%%ruby`, write some Ruby code, and press Enter twice, and IPython will run it with no problem. It also works with Python2 (`%%python2`).

## 20. Store variables between sessions

```python
In [1]: a = 100

In [2]: %store a
Stored 'a' (int)

# Restart IPython
In [1]: %store -r a

In [2]: a
Out[2]: 100
```

IPython uses SQLite for some lightweight storage between sessions. That's where it saves the history of your previous sessions. But you can use it to store your own data. For example, with the `%store` magic command, you can save variables in IPython's database and restore them in another session using `%store -r`. You can also set the `c.StoreMagics.autorestore = True` in the configuration file to automatically restore all the variables from the database when you start IPython.

## 21. Save session to a file

```python
In [1]: a = 100

In [2]: b = 200

In [3]: c = a + b

In [4]: c
Out[4]: 300

In [5]: %save filename.py 1-4
The following commands were written to file `filename.py`:
a = 100
b = 200
c = a + b
c
```

You can save your IPython session to a file with the `%save` command. That's quite useful when you have some working code and you want to continue editing it with your text editor. Instead of manually copying and pasting lines to your code editor, you can dump the whole IPython session and then remove unwanted lines.

## 22. Clean up ">" symbols and fix indentation

```python
# Clipboard content:
# >def greet(name):
# >    print(f"Hello {name}")

# Just pasting the code won't work
In [1]: >def greet(name):
   ...: >    print(f"Hello {name}")
  File "<ipython-input-1-a7538fc939af>", line 1
    >def greet(name):
    ^
SyntaxError: invalid syntax


# But using %paste works
In [2]: %paste
>def greet(name):
>    print(f"Hello {name}")

## -- End pasted text --

In [3]: greet("Sebastian")
Hello Sebastian
```

If you need to clean up incorrect indentation or ">" symbols (for example, when you copy the code from a git diff, docstring, or an email), instead of doing it manually, copy the code and run `%paste`. IPython will paste the code from your clipboard, fix the indentation, and remove the ">" symbols (although it sometimes doesn't work properly).

## 23. List all the variables

```python
In [1]: a = 100

In [2]: name = "Sebastian"

In [3]: squares = [x*x for x in range(100)]

In [4]: squares_sum = sum(squares)

In [5]: def say_hello():
   ...:     print("Hello!")
   ...:

In [6]: %whos
Variable      Type        Data/Info
-----------------------------------
a             int         100
name          str         Sebastian
say_hello     function    <function say_hello at 0x111b60a60>
squares       list        n=100
squares_sum   int         328350
```

You can get a list of all the variables from the current session (nicely formatted, with information about their type and the data they store) with the `%whos` command.

## 24. Use asynchronous functions

```python
In [1]: import asyncio

In [2]: async def worker():
   ...:     print("Hi")
   ...:     await asyncio.sleep(2)
   ...:     print("Bye")
   ...:

# The following code would fail in the standard Python REPL
# because we can't call await outside of an async function
In [3]: await asyncio.gather(worker(), worker(), worker())
Hi
Hi
Hi
Bye
Bye
Bye

```

You can speed up your code with asynchronous functions. But the thing about asynchronous code is that you need to start an event loop to call them. However, IPython comes with its own event loop! And with that, you can await asynchronous functions just like you would call a standard, synchronous one.

## 25. IPython scripts

```bash
$ ls
file1.py    file2.py    file3.py    file4.py    wishes.ipy

$ cat wishes.ipy
files = !ls
# Run all the files with .py suffix
for file in files:
    if file.endswith(".py"):
        %run $file

$ ipython wishes.ipy
Have a
Very Merry
Christmas!
🎄🎄🎄🎄🎄🎄
```

You can execute files containing IPython-specific code (shell commands prefixed with `!` or magic methods prefixed with `%`). Just save the file with the ".ipy" extension and then pass it to the `ipython` command.

## Conclusions

If you have been reading my blog for a bit, you probably already realize that IPython is one of my favorite Python tools. It's an excellent choice for solving code challenges like the Advent of Code, and it has a lot of cool tricks that can help you. Leave a comment if you know some other cool tricks that you want to share!
