---
title: dict() vs. {}
description: Is using {} faster than dict()? If yes, then why? And when would you use one version over the other?
tags: ['Python', 'Writing Faster Python']
date: 2022-01-12
similar:
    - find-item-in-a-list
    - for-loop-vs-list-comprehension
    - membership-testing
---

There are two different ways to create a dictionary. You can call the `dict()` function or use the literal syntax: `{}`. And in many cases, these are equivalent choices, so you might give it little thought and assume they both take the same amount of time.

But they don't!

:::callout-info
Starting with this article, in my benchmarks, I have switched from Python 3.8 to 3.11. So if you're following the [Writing Faster Python]({% postUrl "writing-faster-python-intro" %}) series and you're wondering why my code examples suddenly got a bit faster - that's the reason.

Check out the [Upgrade Your Python Version]({% postUrl "upgrade-your-python-version" %}) article for a comparison of how much faster we can get by simply upgrading the CPython version.
:::

```bash
# Python 3.11.0
$ python -m timeit "dict()"
10000000 loops, best of 5: 29.8 nsec per loop

$ python -m timeit "{}"
20000000 loops, best of 5: 14.2 nsec per loop
```

Benchmarking both versions shows that calling `{}` is twice as fast as calling `dict()`. And that's for Python 3.11. If you run the same examples with an older version of Python, `dict()` is even slower:

```bash
# Python 3.8.13
$ python -m timeit "dict()"
5000000 loops, best of 5: 57.2 nsec per loop

$ python -m timeit "{}"
20000000 loops, best of 5: 14.2 nsec per loop
```

Here `dict()` is almost four times as slow as `{}`.

## Looking under the hood with the `dis` module

Let's use the disassembler module to compare what's happening when we call `dict()` and `{}`:

```python
>>> from dis import dis
>>> dis("dict()")
  0           0 RESUME                   0

  1           2 PUSH_NULL
              4 LOAD_NAME                0 (dict)
              6 PRECALL                  0
             10 CALL                     0
             20 RETURN_VALUE
>>> dis("{}")
  0           0 RESUME                   0

  1           2 BUILD_MAP                0
              4 RETURN_VALUE
```

The [dis](https://docs.python.org/3/library/dis.html) module returns the bytecode instructions from a code snippet. It's an excellent way to see what's happening under the hood of your programs. Don't worry if all those cryptic names seem unfamiliar (if you're curious, check out the [Python Bytecode Instructions](https://docs.python.org/3/library/dis.html#python-bytecode-instructions)). For us, the important instructions are `BUILD_MAP` and `CALL`.

When we call `{}`, we execute a Python statement, so Python immediately knows what to do - build a dictionary. In comparison, when we call `dict()`, Python has to find the `dict()` function and call it. That's because nothing stops you from overriding the `dict()` function. You can make it do something completely different than creating a dictionary, for example:

```python
def dict(*args, **kwargs):
    # Happy debugging ;)
    return list([1, 2, 3])
```

Python doesn't stop you from overriding the built-in functions. So when you call `dict()`, the interpreter has to find this function and call it.

## Is there any other difference?

I tried to think of any other reason why you might use `dict()` over `{}`, and the only one that came to my mind was for creating a dictionary from an iterator.

Take a look at this example:

```python
>>> iter = zip(['a', 'b', 'c'], [1,2,3])
>>> {iter}
{<zip at 0x102d57b40>}  # This is not really what we want
>>> dict(iter)
{'a': 1, 'b': 2, 'c': 3}  # Much better
```

We can't use the literal syntax to create a dictionary. We would have to use a dictionary comprehension: `{k: v for k, v in iter}`. But a simple `dict(iter)` looks much cleaner. Apart from this use case, I think it's mostly up to your preference which version you use. 

There are also some interesting quirks that I found. For example, in CPython 3.6 and below, if you wanted to pass more than 255 arguments to a function, [you would get a SyntaxError](https://stackoverflow.com/questions/6610606/is-there-a-difference-between-using-a-dict-literal-and-a-dict-constructor/35156174#35156174). So, in this case, `dict()` is a no-go, but `{}` should work. However, if you're passing over 255 parameters to a function, you probably have bigger problems in your code than wondering if the literal syntax is a few nanoseconds faster.

## [] vs. list(), () vs. tuple, {'x', } vs. set(['x'])

The same rule applies to using `[]` vs. `list()`, `()` vs. `tuple()`, or `{'x',}` vs. `set(['x'])`. Using the literal syntax is faster than calling the corresponding function:

```bash
$ python -m timeit "list()"
10000000 loops, best of 5: 28.5 nsec per loop

$ python -m timeit "[]"
20000000 loops, best of 5: 12.7 nsec per loop

$ python -m timeit "tuple()"
50000000 loops, best of 5: 9.93 nsec per loop

$ python -m timeit "()"
50000000 loops, best of 5: 4.45 nsec per loop

$ python -m timeit "set(['x'])"
5000000 loops, best of 5: 72.7 nsec per loop

$ python -m timeit "{'x',}"
10000000 loops, best of 5: 29.5 nsec per loop
```

Of course, if you construct a large data structure, the difference between the two versions becomes unnoticeable:

```bash
$ python -m timeit "list(range(1_000_000))"
20 loops, best of 5: 14 msec per loop

$ python -m timeit "[*range(1_000_000)]"
20 loops, best of 5: 14 msec per loop
```
