---
title: Ask for Forgiveness or Look Before You Leap?
description: Is it faster to "ask for forgiveness" or "look before you leap" in Python? And when it's better to use one over the other?
tags: ["Python", "Writing Faster Python"]
# Social cards tags
date: 2020-08-19
---


"Ask for forgiveness" and "look before you leap" (sometimes also called "ask for permission") are two opposite approaches to writing code. If you "look before you leap", you first check if everything is set correctly, then you perform an action. For example, you want to read text from a file. What could go wrong with that? Well, the file might not be in the location where you expect it to be. So, you first check if the file exists:

```python
import os
if os.path.exists("path/to/file.txt"):
    ...

# Or from Python 3.4
from pathlib import Path
if Path("/path/to/file").exists():
    ...
```

Even if the file exists, maybe you don't have permission to open it? So let's check if you can read it:

```python
import os
if os.access("path/to/file.txt", os.R_OK):
    ...
```

But what if the file is corrupted? Or if you don't have enough memory to read it? This list could go on. Finally, when you think that you checked every possible corner-case, you can open and read it:

```python
with open("path/to/file.txt") as input_file:
    return input_file.read()
```

Depending on what you want to do, there might be quite a lot of checks to perform. And even when you think you covered everything, there is no guarantee that some unexpected problems won't prevent you from reading this file. So, instead of doing all the checks, you can "ask for forgiveness."

With "ask for forgiveness," you don't check anything. You perform whatever action you want, but you wrap it in a `try/catch` block. If an exception happens, you handle it. You don't have to think about all the things that can go wrong, your code is much simpler (no more nested ifs), and you will usually catch more errors that way. That's why the Python community, in general, prefers this approach, often called ["EAFP"](https://docs.python.org/3/glossary.html#term-eafp) - "Easier to ask for forgiveness than permission."

Here is a simple example of reading a file with the "ask for forgiveness" approach:

```python
try:
    with open("path/to/file.txt", "r") as input_file:
        return input_file.read()
except IOError:
    # Handle the error or just ignore it
```

Here we are catching the `IOError`. If you are not sure what kind of exception can be raised, you could catch all of them with the `BaseException` class, but in general, it's a bad practice. It will catch every possible exception (including, for example, `KeyboardInterrupt` when you want to stop the process), so try to be more specific.

"Ask for forgiveness" is cleaner. But which one is faster?

## "Ask For Forgiveness" vs "Look Before You Leap" - speed

Time for a simple test. Let's say that I have a class, and I want to read an attribute from this class. But I'm using inheritance, so I'm not sure if the attribute is defined or not. I need to protect myself, by either checking if it exists ("look before you leap") or catching the `AttributeError` ("ask for forgiveness"):

```python
# permission_vs_forgiveness.py

class BaseClass:
    hello = "world"

class Foo(BaseClass):
    pass

FOO = Foo()

# Look before you leap
def test_lbyl():
    if hasattr(FOO, "hello"):
        FOO.hello

# Ask for forgiveness
def test_aff():
    try:
        FOO.hello
    except AttributeError:
        pass
```

Let's measure the speed of both functions.

::: callout-info
For benchmarking, I'm using the standard [timeit](https://docs.python.org/3/library/timeit.html) module and *Python 3.8*. I describe my setup and some assumptions in the [Introduction to the Writing Faster Python]({% postUrl "writing-faster-python-intro" %}).
:::

```shell
$ python -m timeit -s "from permission_vs_forgiveness import test_lbyl" "test_lbyl()"
2000000 loops, best of 5: 155 nsec per loop

$ python -m timeit -s "from permission_vs_forgiveness import test_aff" "test_aff()"
2000000 loops, best of 5: 118 nsec per loop
```

"Look before you leap" is around **30% slower** (155/118≈1.314).

What happens if we increase the number of checks? Let's say that this time we want to check for three attributes, not just one:

```python
# permission_vs_forgiveness.py

class BaseClass:
    hello = "world"
    bar = "world"
    baz = "world"

class Foo(BaseClass):
    pass

FOO = Foo()

# Look before you leap
def test_lbyl2():
    if hasattr(FOO, "hello") and hasattr(FOO, "bar") and hasattr(FOO, "baz"):
        FOO.hello
        FOO.bar
        FOO.baz

# Ask for forgiveness
def test_aff2():
    try:
        FOO.hello
        FOO.bar
        FOO.baz
    except AttributeError:
        pass
```

```shell
$ python -m timeit -s "from permission_vs_forgiveness import test_lbyl2" "test_lbyl2()"
500000 loops, best of 5: 326 nsec per loop

$ python -m timeit -s "from permission_vs_forgiveness import test_aff2" "test_aff2()"
2000000 loops, best of 5: 176 nsec per loop
```

"Look before you leap" is now around **85% slower** (326/176≈1.852). So the "ask for forgiveness" is not only much easier to read and robust but, in many cases, also faster. Yes, you read it right, "in **many** cases," not "in **every** case!"

## The main difference between "EAFP" and "LBYL"

What happens if the attribute is actually not defined? Take a look at this example:

```python
# permission_vs_forgiveness.py

class BaseClass:
    pass  # "hello" attribute is now removed

class Foo(BaseClass):
    pass

FOO = Foo()

# Look before you leap
def test_lbyl3():
    if hasattr(FOO, "hello"):
        FOO.hello

# Ask for forgiveness
def test_aff3():
    try:
        FOO.hello
    except AttributeError:
        pass
```

```shell
$ python -m timeit -s "from permission_vs_forgiveness import test_lbyl3" "test_lbyl3()"
2000000 loops, best of 5: 135 nsec per loop

$ python -m timeit -s "from permission_vs_forgiveness import test_aff3" "test_aff3()"
500000 loops, best of 5: 562 nsec per loop
```

The tables have turned. "Ask for forgiveness" is now over **four times** as slow as "Look before you leap" (562/135≈4.163). That's because this time, our code throws an exception. And **handling exceptions is expensive**.

If you expect your code to fail often, then "Look before you leap" might be much faster.

## Verdict

"Ask for forgiveness" results in much cleaner code, makes it easier to catch errors, and in most cases, it's much faster. No wonder that [EAFP](https://docs.python.org/3/glossary.html#term-eafp) (*"Easier to ask for forgiveness than permission"*) is such a ubiquitous pattern in Python. Even in the example from the beginning of this article (checking if a file exists with `os.path.exists`) - if you look at the source code of the `exists` method, you will see that it's simply using a `try/except`. "Look before you leap" often results in a longer code that is less readable (with nested `if` statements) and slower. And following this pattern, you will probably sometimes miss a corner-case or two.

Just keep in mind that handling exceptions is slow. Ask yourself: *"Is it more common that this code will throw an exception or not?"* If the answer is *"yes,"* and you can fix those problems with a well-placed "if," that's great! But in many cases, you won't be able to predict what problems you will encounter. And using "ask for forgiveness" is perfectly fine - your code should be "correct" before you start making it faster.
