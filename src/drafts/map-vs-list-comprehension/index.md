---
title: Map() vs. List Comprehension
description: Is map() function faster than a corresponding list comprehension? That depends! Let's see how using lambda functions can affect the performance of map().
tags: ['Python', 'Writing Faster Python']
date: 2030-03-03
image: False
---

From the [For Loop vs. List Comprehension]({% postUrl 'for-loop-vs-list-comprehension' %}) we already know that list comprehension is usually faster than the equivalent `for` loop. In that article, I also compared list comprehension with the `filter()` function. I concluded that, while `filter()` has some use cases when it's better than the list comprehension (for example, when you want the more memory-efficient generator object that `filter()` function returns), usually the list comprehension is the faster one.

What about list comprehension vs. `map()` function? Is the `map()` function faster than list comprehension? And if not, does it make sense to use it?

I've devised a simple test that compares `map()` and list comprehension to generate a list of squares for the first 1 million numbers (it also sums them up - see the box below the code for the explanation):

```python
# map_vs_comprehension.py
NUMBERS = range(1_000_001)

def map_lambda():
    return sum(map(lambda x: x * x, NUMBERS))


def comprehension_lambda():
    return sum([x * x for x in NUMBERS])
```

:::callout-warning
**`map()` returns a generator**

In Python 2, functions like `map()` or `filter()` were returning list. But in Python 3 they return generators, so they finish much faster.

There is no free lunch, though. Time saved during the creation of a generator is *paid* back when we iterate over that generator.

Generators also offer more flexibility. For example, if you only need to grab the first element, creating a generator and calling `next()` will be much faster than creating a list and grabbing the first element with `a_list[0]`.

In my benchmarks, I needed to make sure that both functions do the same amount of work. I could call `list(map(...))` to convert a generator to a list, but that would adds additional work the `map_lambda()` function that the list comprehension doesn't have to do:

```python
def map_lambda():
    return list(map(lambda x: x * x, NUMBERS))


def comprehension_lambda():
    return [x * x for x in NUMBERS]
```

`map_lambda()` takes around 47.7 milliseconds to run and `comprehension_lambda()` takes around 29.8 milliseconds. With `list(map(...))` being 60% slower than the list comprehension I felt that those benchmarks would not be objective enough.

Instead I decided to simulate calling another function on the results of a list and a generator. That would force both functions to iterate over all the items. `sum()` seemed like a good, simple function to achieve that.
:::

Here are the benchmarks results:

```bash
$ python -m timeit -s "from map_vs_comprehension import map_lambda" "map_lambda()"
5 loops, best of 5: 44.3 msec per loop

$ python -m timeit -s "from map_vs_comprehension import comprehension_lambda" "comprehension_lambda()"
10 loops, best of 5: 36.2 msec per loop
```

`map_lambda()` is around 20% slower than `comprehension_lambda()` (44.3/36.2≈1.22).

## Named function

Could the lambda function in `map()` be the reason why this function is slow? Let's create another benchmark where we use the `math.sqrt()` function instead:

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

Interesting! If we use an existing function instead of lambda, `map()` becomes faster than a list comprehension. This time list comprehension is around 44% slower than map (45.4/31.5≈1.44).

## Conclusions

`map()` used with a lambda function is usually slower than the equivalent list comprehension. But if you use it with a named function instead, it becomes faster.

Which function should you use in your code? That really depends on your personal preference. Some people tend to call `map()` *unpythonic* and balk at using it under any circumstances. My rule of thumb is as follows:

* I use `map()` when I can pass an existing function. I find code like `map(str, some_text)` or `map(sqrt, numbers)` very readable.
* Otherwise I use list comprehension or a generator expression.

So I'm happy to see that my intuitive rule of thumb also coincidentally makes my code faster.

## Further reading

Here is an interesting [Stack Overflow thread](https://stackoverflow.com/questions/1247486/list-comprehension-vs-map) with different pros and cons of using `map()` vs. a list comprehension if you want to dig deeper into this topic.
