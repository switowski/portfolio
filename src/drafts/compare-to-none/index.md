---
title: Compare to None
description: What's the best way to compare something to None in Python?
tags: ["Python", "Writing Faster Python"]
date: 2030-01-08
---

How do we check if something is `None`?

With the beauty of Python language - the code that you would write is literally the same as the above question:

```python
if something is None:
```

It reminds me of this joke:

> *- How do you turn pseudocode into Python?*  
> *- You add `.py` at the end of the file.*

There is another way that we could do this comparison:

```python
if something == None:
```

But it doesn't make sense to use it. `None` [is a singleton object](https://stackoverflow.com/questions/38288926/in-python-is-none-a-unique-object) - there can't be two different `None` objects in your code. Each time you assign `None` to a variable, you reference the same `None`:

```python
>>> a = None
>>> b = None
>>> c = None
>>> a is b is c
True
```

To compare identity, you should use `is`, not `==`, as I explained in the ["Checking for True or False"]({% postUrl "checking-for-true-or-false" %}) article. It's more clear, but also faster:

```shell
$ python -m timeit -s "a = 1" "a is None"
50000000 loops, best of 5: 8.2 nsec per loop

$ python -m timeit -s "a = 1" "a == None"
20000000 loops, best of 5: 13 nsec per loop
```

`==` is 60% slower than `is` (13 / 8.2 ≈ 1.59).
