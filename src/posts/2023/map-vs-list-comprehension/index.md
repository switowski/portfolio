---
title: map() vs. List Comprehension
description: Is the map() function faster than a corresponding list comprehension? That depends! Let's see how using lambda functions can affect the performance of map().
tags: ['Python', 'Writing Faster Python']
similar:
  - for-loop-vs-list-comprehension
  - upgrade-your-python-version
  - type-vs-isinstance
date: 2023-07-31
---

From *[For Loop vs. List Comprehension]({% postUrl 'for-loop-vs-list-comprehension' %})*, we already know that list comprehension is usually faster than the equivalent `for` loop. In the article, I also compared list comprehension with the `filter()` function. I concluded that, while `filter()` has some justified use cases where it's better than list comprehension (for example, when you want the more memory-efficient generator object that the `filter()` function returns), list comprehension is usually the faster choice.

{% include "components/WFPIntro.md" %}

What about list comprehension vs. `map()`? Is the `map()` function faster than list comprehension? And if not, does it make any sense to use it?

I've devised a simple test that compares how `map()` and list comprehension generate a list of squares for the first million numbers (it also sums up the squares - see the box below the benchmarks for the explanation):

```python
# map_vs_comprehension.py
NUMBERS = range(1_000_001)

def map_lambda():
    return sum(map(lambda x: x * x, NUMBERS))


def comprehension_lambda():
    return sum([x * x for x in NUMBERS])
```

Here are the benchmarks results:

```bash
$ python -m timeit -s "from map_vs_comprehension import map_lambda" "map_lambda()"
5 loops, best of 5: 44.3 msec per loop

$ python -m timeit -s "from map_vs_comprehension import comprehension_lambda" "comprehension_lambda()"
10 loops, best of 5: 36.2 msec per loop
```

As you can see, `map_lambda()` is around 20% slower than `comprehension_lambda()` (44.3/36.2≈1.22).

:::callout-warning
**`map()` returns a generator**

In Python 2, functions like `map()` or `filter()` returned lists. But in Python 3, they return generators, so they finish much faster.

There is no free lunch, though. Time saved during the creation of a generator is *paid back* when we iterate over that generator.

Generators also offer more flexibility. For example, if you only need to grab the first element, creating a generator and calling `next()` is much faster than creating a list and grabbing the first element with `a_list[0]`.

In my benchmarks, I needed to make sure that both functions did the same amount of work. I could call `list(map(...))` to convert a generator to a list, but that would add additional work to the `map_lambda()` function that the list comprehension doesn't have to do:

```python
def map_lambda():
    return list(map(lambda x: x * x, NUMBERS))


def comprehension_lambda():
    return [x * x for x in NUMBERS]
```

`map_lambda()` takes around 47.7 milliseconds to run and `comprehension_lambda()` takes around 29.8 milliseconds. With `list(map(...))` being 60% slower than list comprehension, I felt those benchmarks would not be objective enough.

Instead, I decided to simulate calling another function on the results of a list and a generator. That would force both functions to iterate over all the items. `sum()` seemed like a good, simple function to achieve that.
:::

## Named function

Could the lambda function in `map()` be the reason why this function is so slow? Let's create another benchmark where we use the `math.sqrt()` function instead:

```python
from math import sqrt

NUMBERS = range(1_000_001)

def map_sqrt():
    return sum(map(sqrt, NUMBERS))

def comprehension_sqrt():
    return sum([sqrt(x) for x in NUMBERS])
```

And the results are surprising:

```bash
$ python -m timeit -s "from map_vs_comprehension import map_sqrt" "map_sqrt()"
10 loops, best of 5: 31.5 msec per loop

$ python -m timeit -s "from map_vs_comprehension import comprehension_sqrt" "comprehension_sqrt()"
5 loops, best of 5: 45.4 msec per loop
```

Interesting! If we use an existing function instead of a lambda, `map()` is faster than list comprehension. This time list comprehension is around 44% slower than `map()` (45.4/31.5≈1.44).

## Conclusions

`map()` used with a lambda function is usually slower than the equivalent list comprehension. But if you use it with a named function instead, it gets faster.

So which function should you use in your code? That really depends on your personal preference. Some people tend to call `map()` *unpythonic* and balk at using it under any circumstances. My rule of thumb is as follows:

* I use `map()` when I can pass an existing function. I find code like `map(str, some_text)` or `map(sqrt, numbers)` very readable.
* In all other cases, I use list comprehension or a generator expression.

I'm happy to see that my intuitive rule of thumb also coincidentally makes my code faster.

## Further reading

If you want to dig deeper into this topic, here's an interesting [Stack Overflow thread](https://stackoverflow.com/questions/1247486/list-comprehension-vs-map) with different pros and cons of using `map()` vs. list comprehension.
