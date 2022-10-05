---
title: Sorting Lists
description: What's the fastest way to sort a list? When can you use sort() and when you need to use sorted() instead?
tags: ["Python", "Writing Faster Python"]
similar:
    - remove-duplicates
    - for-loop-vs-list-comprehension
    - easy-speedup-wins-with-numba
date: 2020-09-24
---

There are at least two common ways to sort lists in Python:

* With [sorted](https://docs.python.org/3/library/functions.html#sorted) function that returns a new list
* With [list.sort](https://docs.python.org/3/library/stdtypes.html#list.sort) method that modifies list in place

Which one is faster? Let's find out!

## sorted() vs list.sort()

I will start with a list of 1 000 000 randomly shuffled integers. Later on, I will also check if the order matters.

```python
# sorting.py
from random import sample

# List of 1 000 000 integers randomly shuffled
MILLION_RANDOM_NUMBERS = sample(range(1_000_000), 1_000_000)


def test_sort():
    return MILLION_RANDOM_NUMBERS.sort()

def test_sorted():
    return sorted(MILLION_RANDOM_NUMBERS)
```

```shell
$ python -m timeit -s "from sorting import test_sort" "test_sort()"
1 loop, best of 5: 6 msec per loop

$ python -m timeit -s "from sorting import test_sorted" "test_sorted()"
1 loop, best of 5: 373 msec per loop
```

~~When benchmarked with Python 3.8, `sort()` is around 60 times as fast as `sorted()` when sorting 1 000 000 numbers (373/6≈62.167).~~

**Update:** As pointed out by a vigilant reader in the comments section, I've made a terrible blunder in my benchmarks! `timeit` runs the code multiple times, which means that:

* The first time it runs, it sorts the random list **in place**.
* The second and next time, it runs on the same list (that is now **sorted**)! And sorting an already sorted list is much faster, as I show you in the next paragraph.

We get completely wrong results because we compare calling `list.sort()` on an ordered list with calling `sorted()` on a random list.

Let's fix my test functions and rerun benchmarks.

```python
# sorting.py
from random import sample

# List of 1 000 000 integers randomly shuffled
MILLION_RANDOM_NUMBERS = sample(range(1_000_000), 1_000_000)

def test_sort():
    random_list = MILLION_RANDOM_NUMBERS[:]
    return random_list.sort()

def test_sorted():
    random_list = MILLION_RANDOM_NUMBERS[:]
    return sorted(random_list)
```

This time, I’m explicitly making a copy of the initial shuffled list and then sort that copy (`new_list = old_list[:]` is a great little snippet to copy a list in Python). Copying a list adds a small overhead to our test functions, but as long as we call the same code in both functions, that’s acceptable.

Let's see the results:

```shell
$ python -m timeit -s "from sorting import test_sort" "test_sort()"
1 loop, best of 5: 352 msec per loop

$ python -m timeit -s "from sorting import test_sorted" "test_sorted()"
1 loop, best of 5: 385 msec per loop
```

Now, `sorted` is less than 10% slower (385/352≈1.094). Since we only run one loop, the exact numbers are not very reliable. I have rerun the same tests a couple more times, and the results were slightly different each time. `sort` took around 345-355 msec and `sorted` took around 379-394 msec (but it was always slower than `sort`). This difference comes mostly from the fact that `sorted` creates a new list (again, as kindly pointed out by a guest reader in the comments).

## Initial order matters

What happens when our initial list is already sorted?

```python
MILLION_NUMBERS = list(range(1_000_000))
```

```shell
$ python -m timeit -s "from sorting import test_sort" "test_sort()"
20 loops, best of 5: 12.1 msec per loop

$ python -m timeit -s "from sorting import test_sorted" "test_sorted()"
20 loops, best of 5: 16.6 msec per loop
```

Now, sorting takes much less time and the difference between `sort` and `sorted` grows to 37% (16.6/12.1≈1.372). Why is `sorted` 37% slower this time? Well, creating a new list takes the same amount of time as before. And since the time spent on sorting has shrunk, the impact of creating that new list got bigger.

::: callout-info
If you want to run the benchmarks on your computer, make sure to adjust the `test_sort` and `test_sorted` functions, so they use the new `MILLION_NUMBERS` variable (instead of the `MILLION_RANDOM_NUMBERS`). Make sure you do this update for each of the following tests.
:::

And if we try to sort a list of 1 000 000 numbers ordered in descending order:

```python
DESCENDING_MILLION_NUMBERS = list(range(1_000_000, 0, -1))
```

```shell
$ python -m timeit -s "from sorting import test_sort" "test_sort()"
20 loops, best of 5: 11.7 msec per loop

$ python -m timeit -s "from sorting import test_sorted" "test_sorted()"
20 loops, best of 5: 18.1 msec per loop
```

The results are almost identical as before. The sorting algorithm is clever enough to optimize the sorting process for a descending list.

For our last test, let’s try to sort 1 000 000 numbers where 100 000 elements are shuffled, and the rest are ordered:

```python
# 10% of numbers are random
MILLION_SLIGHTLY_RANDOM_NUMBERS = [*range(900_000), *sample(range(1_000_000), 100_000)]
```

```shell
$ python -m timeit -s "from sorting import test_sort" "test_sort()"
5 loops, best of 5: 61.2 msec per loop

$ python -m timeit -s "from sorting import test_sorted" "test_sorted()"
5 loops, best of 5: 71 msec per loop
```

Both functions get slower as the input list becomes more scrambled.

Using `list.sort()` is my preferred way of sorting lists - it saves some time (and memory) by not creating a new list. But that's a double-edged sword! Sometimes you might accidentally overwrite the initial list without realizing it (as I did with my initial benchmarks 😅). So, if you want to preserve the initial list's order, you have to use `sorted` instead. And `sorted` can be used with any iterable, while `sort` **only works with lists**. If you want to sort a set, then sorted is your only solution.

## Conclusions

`sort` is slightly faster than `sorted`, because it doesn't create a new list. But you might still stick with `sorted` if:

* You don't want to modify the original list. `sort` performs sorting in-place, so you can't use it here.
* You need to sort something else than a list. `sort` is only defined on lists, so if you want to sort a set or any other collection of items, you have to use `sorted` instead.

If you want to learn more, the [Sorting HOW TO](https://docs.python.org/3/howto/sorting.html) guide from Python documentation contains a lot of useful information.
