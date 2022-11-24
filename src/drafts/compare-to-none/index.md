---
layout: post
title: Compare to None
categories: ["Python", "Writing Faster Python"]
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

For comparing identity you should use `is`, not `==`, as I explained in one of the [previous articles]({% postUrl "checking-for-true-or-false" %}). It's more clear, but also faster:

```shell
$ python -m timeit -s "a = 1" "a is None"
20000000 loops, best of 5: 18.8 nsec per loop

$ python -m timeit -s "a = 1" "a == None"
10000000 loops, best of 5: 30.6 nsec per loop
```

`==` is 60% slower than `is` (30.6 / 18.8 ≈ 1.628)


## TODO:

* replace curly quotes (‘ , ’, “, ”)with straight quotes (https://typographyforlawyers.com/straight-and-curly-quotes.html)
* change filename (and date)
  * make sure no other file is referencing this one by filename (update it if needed!)
* capitalize title
* update title
* update categories
* update summary and description
* find hero image
* change the featured-img, image
* remove "published: false"
* Add link to initial post where I explain the basic assumption of this series (and answer stupid questions like: "but those difference was too small to matter")
* double check timings
