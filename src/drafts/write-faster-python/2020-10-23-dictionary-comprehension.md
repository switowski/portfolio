---
title: Dictionary Comprehension
categories: ["Python", "Writing Faster Python"]
---

Apart from the "list comprehension" in Python we also have "dictionary comprehension" - a little less known, but still very useful feature. It's a perfect tool for creating a dictionary from an iterable. Let's see how we can use it and if it's faster than other methods.

{% include "components/WFPIntro.md" %}

One way to create a dictionary in Python is to pass a list of tuples to a `dict()` function.

```python
# dict_comp.py

def tuples_to_dict():
    return dict([(i, i * i) for i in range(1_000)])
```

Before Python 2.7, this was the simplest way to build a dictionary from an iterable. It's not bad, but all those brackets and parentheses can be slightly confusing.

In Python 2.7, dictionary comprehension was introduced. Here is a link to the [PEP274 -- Dict Comprehensions](https://www.python.org/dev/peps/pep-0274/) if you are interested in the history. With dictionary comprehension we can simplify the above syntax:

```python
# dict_comp.py

def dict_comprehension():
    return {i: i * i for i in range(1_000)}
```

It looks much easier to ready, but is it faster? Let's see.

```shell
$ python -m timeit -s "from dict_comp import tuples_to_dict" "tuples_to_dict()"
2000 loops, best of 5: 133 usec per loop

$ python -m timeit -s "from dict_comp import dict_comprehension" "dict_comprehension()"
5000 loops, best of 5: 88.2 usec per loop
```

It is! The old style of creating a dictionary is around 50% slower (133/88.2≈1.508) in this specific case.

### Additional benchmarks

While the previous example was actually useful - we were building a list of squares for the first 1000 integers, the unnecessary computing operations (`i * i`) could slow down our benchmarks. So I've decided to run some more tests. This time, I'm just assigning letter "a" to each key in the dictionary.

```python
def tuples_to_dict():
    return dict([(i, 'a') for i in range(1_000)])

def dict_comprehension():
    return {i: 'a' for i in range(1_000)}
```

Let's see the benchmarks:

```shell
$ python -m timeit -s "from dict_comp import tuples_to_dict" "tuples_to_dict()"
5000 loops, best of 5: 97.4 usec per loop

$ python -m timeit -s "from dict_comp import dict_comprehension" "dict_comprehension()"
5000 loops, best of 5: 52.5 usec per loop
```

This time, converting tuples to dictionaries takes 85% longer (97.4/52.5≈1.855).

What if we have more iterations? Let's try one more time for 1 000 000.

```python
def tuples_to_dict():
    return dict([(i, 'a') for i in range(1_000_000)])

def dict_comprehension():
    return {i: 'a' for i in range(1_000_000)}
```

Let's see the benchmarks:

```shell
$ python -m timeit -s "from dict_comp import tuples_to_dict" "tuples_to_dict()"
1 loop, best of 5: 204 msec per loop

$ python -m timeit -s "from dict_comp import dict_comprehension" "dict_comprehension()"
5 loops, best of 5: 91.6 msec per loop
```

Dictionary comprehension *seems* to be even faster, but notice that in the first benchmark we run only one test: `1 loop`. `timeit` module automatically selects how many iterations should be run based on how long it takes to run given function. It increases the number of loops until the **total time** is at least 0.2 seconds. In our case, running one iteration for one million numbers already takes above 0.2 seconds (203 milliseconds).

Benchmarks that are ran once are not reliable. So let's force `timeit` to run ten times by specifying `-n 10` argument:

```shell
$ python -m timeit -n 10 -s "from dict_comp import tuples_to_dict" "tuples_to_dict()"
10 loops, best of 5: 184 msec per loop

$ python -m timeit -n 10 -s "from dict_comp import dict_comprehension" "dict_comprehension()"
10 loops, best of 5: 91.3 msec per loop
```

The results for `tuples_to_dict` are around 10% different than when benchmarked only one run. So make sure you run your benchmarks at least a few times for the most reliable results.

Let's go back to our initial problem - how much faster is the dictionary comprehension? For 1 million iterations, we can see that it's twice as fast (204/91.6≈2.227).

I hope I convinced you that dictionary comprehension is the best way to built dictionaries from an iterable. They are faster than passing a list of tuples to a dict() function. But the biggest advantage is that they are much more readable. Once you understand the syntax, you can immediately see what's happening in that code.

## Creating a dictionary from two iterables

If you have two iterables and you want to use them as keys and values in a dictionary, you might be tempted to use a dictionary comprehension

```python
# dict_comp.py

NUMBERS = range(1_000)
SQUARES = [x * x for x in range(1_000)]

def comprehension():
    return {key: value for key in NUMBERS for value in SQUARES}
```

It looks like a clean solutions, except maybe for the slightly confusing two "for statements". We can simplify it by zipping together both iterables, that way we have only one "for statement":

```python
def comprehension_with_zip():
    return {key: value for key, value in zip(NUMBERS, SQUARES)}
```

However, we don't do anything special with the `key` or the `value`. In the first example, value for each key was computed as we were building a dictionary (`i: i * i`), but here, it's just `key: value`. In situations like this, you can simply pass zipped iterables to the dict() function directly.

```python
def just_zip():
    return dict(zip(NUMBERS, SQUARES))
```

Let's see the benchmarks.

```shell
$ python -m timeit -s "from dict_comp import comprehension" "comprehension()"
10 loops, best of 5: 32.9 msec per loop

$ python -m timeit -s "from dict_comp import comprehension_with_zip" "comprehension_with_zip()"
5000 loops, best of 5: 71.2 usec per loop

$ python -m timeit -s "from dict_comp import just_zip" "just_zip()"
5000 loops, best of 5: 54.4 usec per loop
```

We go from a very slow solution (dictionary comprehension), to a very fast one and then to an even faster one. Using dictionary comprehension is **over 600 times slower** than just using a `zip` function (32.9msec / 54.4usec ≈ 604.779). `zip()` function is **perfect for building dictionaries from two existing iterables**.

This is very similar to a list comprehension. When you need a list of 1 000 integers, you don't use a list comprehension, but you pass range directly to a list:

```python
# Bad
[x for x in range(1_000)]

# Good
list(range(1_000))
```

## Dictionary comprehension variations

Let me finish this article by showing you a different variations of dictionary comprehension, just in case you need one.

### Nested dictionary comprehension

We already saw before when we discussed the `zip` function:

```python
{key: value for key in iterable_1 for value in iterable_2}
```

We are not limited to one level of nesting!

```python
{
  key1: {key2: value2 for key2 in iterable_1 for value2 in iterable_2} for key1 in iterable_3
}
```

Looks confusing, right? That's why I try to avoid nesting dictionary comprehension in my code.

### Conditional dictionary comprehension

You can put `if` statements to filter out some elements. For example, if we want to build a dictionary with squares but only for the even numbers, we can use the following code:

```python
{i: i * i for i in range(1_000) if i % 2 == 0}
```

How about `else` statements? The following code throws a `SyntaxError`:

```python
{i: i * i for i in range(1_000) if i % 2 == 0 else 'even!' }
```

But if we want to use an `else` statement, we can use this *makeshift* ternary operator:

```python
{i: ('odd' if i % 2 == 1 else 'even') for i in range(1_000)}
```

In the above example, we are building a dictionary that tells us if a given number is odd or even. Notice that Python doesn't officially have a ternary operator, but has an equivalent of it (not officially called "ternary operator" but a ["conditional expression"](https://mail.python.org/pipermail/python-dev/2005-September/056846.html)).

## Conclusions

Dictionary comprehension is one of the cleanest ways to build a dictionary. Compared with the old way of passing a list of tuples (in Python 2.6 and below), it's not only faster but also more readable. But it only makes sense to use it when you compute the key or a value on the fly. If both, the key and the value are ready (for example, they come from two different iterables), simply passing `zip` function to `dict` results in a much faster and easier to read code:

```python
# Good use case for dictionary comprehension - we compute the value
{i: i * i for i in range(1_000)}

# Good use case for dictionary comprehension - we compute the key
{i * i: i for i in range(1_000)}

# Bad use case for dictionary comprehension
NUMBERS = range(1_000)
SQUARES = [x * x for x in range(1_000)]

{k: v for k in NUMBERS for v in SQUARES}

# Use a zip() instead
dict(zip(NUMBERS, SQUARES))
```


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

