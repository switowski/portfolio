---
title: Dictionary Comprehension
description: 
tags: ['Python', 'Writing Faster Python']
date: 2030-01-05
---

Apart from [list comprehension]({% postUrl "for-loop-vs-list-comprehension" %}) in Python we also have "dictionary comprehension" - a little less known, but still very useful feature. It's a perfect tool for creating a dictionary from an iterable. Let's see how we can use it and if it's faster than other methods.

{% include "components/WFPIntro.md" %}

The simplest way to create a dictionary is to use a "for loop":

```python
powers = {}
for n in range(1000):
    powers[n] = n * n
```

That's not super elegant. We can simplify our code by passing a list of key-value tuples directly to the `dict()` function:

```python
dict([(n, n * n) for n in range(1000)])
```

Before Python 2.7, this was the simplest way to build a dictionary from an iterable. It's not bad, but all those brackets and parentheses can be slightly confusing.

With the release of Python 2.7.3, [PEP 274](https://www.python.org/dev/peps/pep-0274/) introduced dictionary comprehension. This lets us further simplify our code:

```python
{n: n * n for n in range(1000)}
```

It's much easier to ready, but is it faster? Let's see.

## Dictionary comprehension vs. dict() vs. for loop

Here are the functions that I will benchmark.

```python
# dictionary_comprehension.py

NUMBERS = list(range(1000))

def for_loop():
    powers = {}
    for number in NUMBERS:
        powers[number] = number * number
    return powers


def dict_from_tuples():
    return dict([(n, n * n) for n in NUMBERS])


def dict_comprehension():
    return {i: i * i for i in NUMBERS}
```

And here are the results for Python 3.11.0:

```shell
# Python 3.11.0
$ python -m timeit -s "from dictionary_comprehension import for_loop" "for_loop()"
10000 loops, best of 5: 32.1 usec per loop

$ python -m timeit -s "from dictionary_comprehension import dict_from_tuples" "dict_from_tuples()"
5000 loops, best of 5: 51.3 usec per loop

$ python -m timeit -s "from dictionary_comprehension import dict_comprehension" "dict_comprehension()"
10000 loops, best of 5: 31.2 usec per loop
```

Interesting! Two things surprised me:

* "For loop" is as fast as a dictionary comprehension! I was expecting it to be the slowest version.
* Creating a dictionary from a list comprehension is around 60% slower (51.3/31.2≈1.64) than other versions. I was expecting it to be a bit slower, but not that much.

What happens if we increase the benchmarks to run for more numbers?

```python
# dictionary_comprehension.py

MORE_NUMBERS = list(range(1_000_000))

def for_loop2():
    powers = {}
    for number in MORE_NUMBERS:
        powers[number] = number * number
    return powers


def dict_from_tuples2():
    return dict([(n, n * n) for n in MORE_NUMBERS])


def dict_comprehension2():
    return {i: i * i for i in MORE_NUMBERS}
```

```bash
$ python -m timeit -s "from dictionary_comprehension import for_loop2" "for_loop2()"
5 loops, best of 5: 44.9 msec per loop

$ python -m timeit -s "from dictionary_comprehension import dict_from_tuples2" "dict_from_tuples2()"
5 loops, best of 5: 77.9 msec per loop

$ python -m timeit -s "from dictionary_comprehension import dict_comprehension2" "dict_comprehension2()"
5 loops, best of 5: 43.5 msec per loop
```

Dictionary comprehension and a "for loop" are still equally fast and dict() is now slightly slower than before (77.9/43/5≈1.79).

I hope I convinced you that dictionary comprehension is one of the best ways to built dictionaries from an iterable. They are faster than passing a list of tuples to a dict() function. And while they are not really much faster than a simple "for loop", they are much more readable. Once you understand the syntax, you can immediately see what's happening in that code.

## Creating a dictionary from two iterables

What if we want to combine two iterables together?

```python
KEYS = list(range(1_000_000))
VALUES = [x * x for x in range(1_000_000)]
```

We have two iterables and we want to use them as keys and values in a dictionary. We need to zip them together and then we can use dictionary comprehension:

```python
def comprehension_with_zip():
    return {key: value for key, value in zip(KEYS, VALUES)}
```

However, we don't do anything special with the `key` or the `value` here. In the initial examples, value for each key was computed as we were building a dictionary: `n: n * n`. But now, it's just `key: value`. In a situation like this, you can pass zipped iterables directly to the dict() function.

```python
def just_zip():
    return dict(zip(KEYS, VALUES))
```

Let's see the benchmarks.

```shell
$ python -m timeit -s "from dictionary_comprehension import comprehension_with_zip" "comprehension_with_zip()"
10 loops, best of 5: 34 msec per loop

$ python -m timeit -s "from dictionary_comprehension import just_zip" "just_zip()"
10 loops, best of 5: 31.4 msec per loop
```

Calling dict() on zip() directly is slightly faster (34/31.4≈1.08) than using dictionary comprehension. At the same time it's a bit more concise.

It's a very similar situation to passing iterable to a list comprehension. In many cases, list comprehension is the best way to create a list, but sometimes you can use an even shorter version if you don't do any processing on the iterable:

```python
# Bad
[x for x in range(1000)]

# Good
list(range(1000))
```

## Conclusions

Dictionary comprehension is one of the cleanest ways to build a dictionary. Compared with the old way of passing a list of tuples (in Python 2.6 and below), it's not only faster but also more readable.

But it only makes sense to use it when you compute the key or a value on the fly or if you want to do some filtering. If both, the key and the value are ready (for example, they come from two different iterables), simply passing `zip` function to `dict` results in a much faster and easier to read code:

```python
# Good use case for dictionary comprehension - we compute the value
{i: i * i for i in range(1000)}

# Good use case for dictionary comprehension - we compute the key
{i * i: i for i in range(1000)}

# Good use case for dictionary comprehension - we filter values
{i: i * i for i in range(1000) if i > 50}

# Bad use case for dictionary comprehension
NUMBERS = range(1000)
SQUARES = [x * x for x in range(1000)]

{key: value for key, value in zip(KEYS, VALUES)}

# Use a zip() instead
dict(zip(NUMBERS, SQUARES))
```

---

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
