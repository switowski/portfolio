---
title: Compare to None
description: What's the best way to compare something to None in Python?
tags: ["Python", "Writing Faster Python"]
date: 2023-02-23
---

How do we check if something is `None`?

With the beauty of the Python language - the code that you would write is literally the same as the above question:

```python
if something is None:
```

It reminds me of this joke:

> *- How do you turn pseudocode into Python?*  
> *- You add `.py` at the end of the file.*

There is another way in which we could make this comparison:

```python
if something == None:
```

However, it doesn't make sense to use the second variant. `None` [is a singleton object](https://stackoverflow.com/questions/38288926/in-python-is-none-a-unique-object) - there can't be two different `None` objects in your code. Each time you assign `None` to a variable, you reference the same `None`:

```python
>>> a = None
>>> b = None
>>> c = None
>>> a is b is c
True
```

To compare the identity, you should use `is`, rather than `==`, as I explained in the [Checking for True or False]({% postUrl "checking-for-true-or-false" %}) article. It's clearer and faster:

```shell
$ python -m timeit -s "a = 1" "a is None"
50000000 loops, best of 5: 8.2 nsec per loop

$ python -m timeit -s "a = 1" "a == None"
20000000 loops, best of 5: 13 nsec per loop
```

As you can see, `==` is 60% slower than `is` (13 / 8.2 ≈ 1.59).
