---
title: Pathlib For Path Manipulations
description: pathlib is an interesting, object-oriented take on the filesystem paths. With plenty of functions to create, delete, move, rename, read, write, find or split files is an excellent replacement for the os module. But, is it faster?
tags: ['Python', 'Writing Faster Python']
date: 2024-02-19
image: False
---

If I were to name my top 10 modules from the standard library, `pathlib` would be high on that list. Probably it would even make it to the top 3.

Manipulating paths was always a tricky problem if your code was supposed to work on different operating systems. If you accidentally hardcoded the `./some/nested/folders` path in your Python package, Windows users would complain it doesn't work on their computers. And the other way around, so hardcoding `some\\nested\\folder` wouldn't work on a Mac or a Linux machine.

Even if you figured that one out, the functions to work with file paths are a bit scattered around different modules. Sure, most of them lives in the `os.path` module. But if you want to search for filenames matching a pattern, you need to use `glob()` function from the `glob` module. For moving files around there is `os.rename` but also `shutil.move` (which actually calls `os.rename` unless the destination is on a different disk). So when you search for all the places in the code where files are moved, you need to remember to check both versions. Unless, you know, someone used the third option: `os.replace`. Then you have to check all three.

Luckily, thanks to [PEP-428](https://peps.python.org/pep-0428/) since version 3.4 of CPython, we have a wonderful tool that makes working with paths much easier.
Just look at this piece of code:

```python
from pathlib import Path

p = Path('/')
q = p / 'some' / 'nested' / 'folder'
q.resolve() # PosixPath('/some/nested/folder')
```

Overloading the division operator is a bit unusual, but it's so smart and so perfectly suitable for path manipulation that I find this code simply beautiful.

`Path` object makes working with paths easier in a couple of other ways:

- It normalizes paths to platform defaults. `Path('some/path')` becomes `some\\path` on Windows and `Path('some\\path')` becomes `some/path` on Linux/Mac.
- It ignores extraneous "." path separators, so `Path('./some/./path')` becomes `PosixPath('some/path')`. And it tries to be smart about the front slashes. If you use too many (`Path('//////some/path')`) it will remove the redundant ones on Linux or Mac returning just `Path('/some/path')`.
- It unifies the API for various file manipulation operations that previously required using different Python modules. You no longer need the `glob` module to search for files matching a pattern and then `os` module to get their directories' names. All this functionality can now be found in the `pathlib` module (of course, without removing it from the `os` or `glob` modules for backward compatibility).

## But is it faster?

So yeah, all sunshine and rainbows, but we are here to answer one fundamental question: is it faster than `os.path`?

My guess before I try to run the benchmarks is that **it's not**. `Path()` is an object-oriented approach to path manipulation. Instantiating an object probably takes longer than calling, for example, `os.path.join` that simply spits out a string.

But even if it's slower, I'm curious by how much. And who knows, maybe my gut feeling is wrong?

This time I will have to use a different approach to benchmarking, because there is no one standard way to use `pathlib`. Sure, we can use it to create a path to some file, but we can also use it to print the current directory, list files with names matching some pattern or even quickly write text to a file.

So I will run a series of benchmarks for different tasks and see how much faster (or slower) it is to use `pathlib` instead of some other functions.

### Joining paths

First, let's benchmark probably the most common use case: joining some directory names to create a full path to a file.

```python
# pathlib_benchmarks.py

import os
from pathlib import Path

def os_path_join():
    return os.path.join("/", "some", "nested", "path", "to", "a", "file.txt")

def pathlib_join():
    return Path("/") / "some" / "nested" / "path" / "to" / "a" / "file.txt"
```

```shell
$ python -m timeit -s "from pathlib_benchmarks import os_path_join" "os_path_join()"
200000 loops, best of 5: 1.22 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import pathlib_join" "pathlib_join()"
50000 loops, best of 5: 5.74 usec per loop
```

Using `Path` is over 4 times as slow as using the `os.path.join` (5.74/1.22 ≈ 4.70). And no matter if I create a path from 2 folders or 20, the timings will change, but each time `Path`  will be around 4-5 times as slow as `os.path.join`. So the length of the path that we are constructing doesn't matter.

#### Using an existing `Path()` object

But maybe it's the `Path("/")` creation that takes a lot of time and the concatenation of folders' names is actually fast? To check this, I will extract `Path("/")` outside of the benchmarked function to a global variable. Then I can either reference the global variable directly or pass it as a parameter to the benchmarked function. No matter which solution I choose, they both take similar amount of time.

```python
ROOT = Path("/")

def pathlib_join_existing_object(root=ROOT):
    return root / "some" / "nested" / "path" / "to" / "a" / "file.txt"
```

```shell
$ python -m timeit -s "from pathlib_benchmarks import pathlib_join_existing_object" "pathlib_join_existing_object()"
50000 loops, best of 5: 4.85 usec per loop
```

It's slightly faster than the previous version, but still much slower than using the `os.path.join` (4.85/1.22≈3.98).

#### Starting from the home folder

One more test - what if we don't want to start from the root folder, but from the home folder of the current user? Both modules have functions that return the home folder, so let's combine them with some additional folders and benchmark that:

```python
def os_path_join_home():
    return os.path.join(os.path.expanduser("~"), "some", "nested", "path", "to", "a", "file.txt")


def pathlib_join_home():
    return Path.home() / "some" / "nested" / "path" / "to" / "a" / "file.txt"
```

```shell
$ python -m timeit -s "from pathlib_benchmarks import os_path_join_home" "os_path_join_home()"
100000 loops, best of 5: 2.12 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import pathlib_join_home" "pathlib_join_home()"
50000 loops, best of 5: 8.01 usec per loop
```

The difference is smaller (8.01/2.12≈3.78), but still `os` module wins this round. 1:0 for the `os` module.

Let's try to test some other common operations on file paths.

### Is it a file?

Time for a second round of benchmarks. Let's compare the performance of functions that checks if the object under a given path is a file (and not a directory):

```python
def os_isfile(name):
    return os.path.isfile(f"./{name}")


def pathlib_is_file(name):
    return Path(f"./{name}").is_file()
```

And to make my benchmarks more complete, I will look for a file that exists, but also for one that doesn't:

```shell
# First, a file that exists
$ python -m timeit -s "from pathlib_benchmarks import os_isfile" "os_isfile('pathlib_benchmarks.py')"
100000 loops, best of 5: 2.28 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import pathlib_is_file" "pathlib_is_file('pathlib_benchmarks.py')"
50000 loops, best of 5: 4.12 usec per loop

# And a file that doesn't
$ python -m timeit -s "from pathlib_benchmarks import os_isfile" "os_isfile('non-existing-file')"
200000 loops, best of 5: 1.02 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import pathlib_is_file" "pathlib_is_file('non-existing-file')"
100000 loops, best of 5: 2.82 usec per loop
```

In both scenarios `os.path` is still faster, although the difference is smaller than in the first set of benchmarks. `Path.is_file` is around twice as slow when the file exists (4.12/2.28≈1.81) and around 3 times as slow when it doesn't (2.82/1.02≈2.76).

2:0 for the `os.path`.

### Get the current directory

How about getting the current directory?

```shell
$ python -m timeit -s "import os" "os.getcwd()"
50000 loops, best of 5: 6.75 usec per loop

$ python -m timeit -s "from pathlib import Path" "Path.cwd()"
50000 loops, best of 5: 8.54 usec per loop
```

`os.getcwd()` is faster by around 30% this time (8.54/6.75≈1.27).

### Find all the files matching a pattern

Let's try something more complex. This time I want to recursively find all the Python files (that is, files with ".py" extensions).

If I really need to stick with the `os` module, I could write something like this:

```python
def os_walk_files():
    python_files = []
    for root, dirs, files in os.walk("."):
        for filename in files:
            if filename.endswith(".py"):
                python_files.append(root + filename)
    return python_files
```

But it's much easier to use the `glob` module instead. That way we just need one line of code:

```python
import glob

def glob_find_files():
    glob.glob("./**/*.py", recursive=True)
```

`pathlib` comes with a similar function called `rglob()`. But there are two important distinctions between this one and the `glob.glob()` or `os.walk()`:

- `Path().rglob()` returns Path objects, while the `os.walk()` and `glob.glob()` returns strings. I assume that we are fine with Path objects because they will work just fine if we want to open those files or print them out, so I don't see a reason to convert them to *inferior* strings (*inferior* in terms of what we can do with them). But if you really need strings, you would have to additionally call `str()` on each Path object.
- The `os_walk_files()` and `glob_find_files()` return lists, but `Path().rglob()` returns a generator. To make the results as similar as possible between all the examples, I will convert this generator to a list (and this will slow down my benchmarks). If I don't do this, `Path.glob` will have an unfair advantage, as creating a generator is **much** faster than building a list. But in general, if you want to iterate over those files then there is no point in converting a generator to a list first. Moreover, if the list of files is huge, generator will be much more memory-efficient.

Here is the `pathlib` version of a function to find all the Python files:

```python
def path_find_files():
    return list(Path().rglob("*.py"))
```

Let's run the benchmarks:

```shell
$ python -m timeit -s "from pathlib_benchmarks import os_walk_files" "os_walk_files()"
5000 loops, best of 5: 80.6 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import glob_find_files" "glob_find_files()"
2000 loops, best of 5: 152 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import path_find_files" "path_find_files()"
2000 loops, best of 5: 156 usec per loop
```

The most verbose version that includes 2 loops and an `if` statement still turns out to be almost twice as fast as using the `glob` (152/80.6≈1.89) or `pathlib` (156/80.6 ≈1.94) modules.

That puts our benchmarking score at *I-have-lost-track-long-time-ago* to 0 for the `os` module.

### Quickly write to a file

Another interesting feature of `pathlib` is that you can quickly write some text or bytes to a file.

Below is a comparison of the `Path().write_text()` and the classic `with open()` context manager. We open a file (or create it, if it doesn't exist) in a *write* mode and replace the previous content with some simple text:

```python
def classic_write():
    with open("a_file.txt", "w") as f:
        f.write("hello there")

def pathlib_write():
    Path('/a_file.txt').write_text("hello there")
```

```shell
$ python -m timeit -s "from pathlib_benchmarks import classic_write" "classic_write()"
5000 loops, best of 5: 55.3 usec per loop

$ python -m timeit -s "from pathlib_benchmarks import pathlib_write" "pathlib_write()"
5000 loops, best of 5: 55.8 usec per loop
```

They both take the same amount of time (no matter if the "a_file.txt" already exists or not). No wonder - `write_text()` is actually just a nice little wrapper around the `with open` code.

If you're curious, there is also a wrapper for reading the content from a file called `read_text()` that has a similar performance as its `with open(<file>, 'r')` equivalent.

## Conclusions

The list of various tasks that we can perform with `pathlib` can go on for much longer. Creating, deleting, reading, writing, finding, moving, copying, splitting, and whatever other operation you want to perform on a file path or a file itself - `pathlib` probably has a function for that. Sure, the `os.path` or some other module can do those things faster. But unless file manipulation is the main bottleneck of our programs (which I *really* doubt is a problem for anyone anymore when large-memory VMs are easily accessible in the cloud), I much more prefer to use the `pathlib`.

It's nice to finally have all the functionality related to paths and files gathered under one module. And I love this object-oriented approach to file paths. It makes writing scripts that does a lot of filesystem manipulations much more fun, making Python an even better replacement for bash scripts[^1].

You can find all the code examples from this article in my [blog-resources](https://github.com/switowski/blog-resources/tree/master/writing-faster-python) repository.

## Further reading

If you want to learn more about all the cool things you can do with `pathlib` module, I can recommend those two articles :

- [Should You Use Python pathlib or os?](https://betterprogramming.pub/should-you-be-using-pathlib-6f3a0fddec7e)
- [Don't Use Python OS Library Any More When Pathlib Can Do](https://towardsdatascience.com/dont-use-python-os-library-any-more-when-pathlib-can-do-141fefb6bdb5) (sorry for the paywall, just open this page in an incognito mode)

[^1]: I have absolutely nothing against bash or bash scripts. That's still my go-to tool if I need to glue together a few shell commands. But if you're not a bash expert (and neither are your colleagues) and you need a script that will run once per year (or even better - one that restores the database in case of an emergency, because there is nothing better than debugging a bash script when your production is on fire), do yourself a favor and write it in Python. Your future self will thank you when debugging this script 5 years later.
