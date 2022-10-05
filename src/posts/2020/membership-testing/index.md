---
title: Membership Testing
description: Why iterating over the whole list is a bad idea, what data structure is best for membership testing, and when it makes sense to use it?
tag: ["Python", "Writing Faster Python"]
date: 2020-10-08
---

Membership testing means checking if a collection of items (a list, a set, a dictionary, etc.) contains a specific item. For example, checking if a list of even numbers contains number 42. It's a quite common operation, so let's see how to do it properly.

{% include "components/WFPIntro.md" %}

How can we check if a list contains a specific item? There is a terrible way of doing this - iterating through the list in a "for loop":

```python
# membership.py

MILLION_NUMBERS = list(range(1_000_000))

def test_for_loop(number):
    for item in MILLION_NUMBERS:
        if item == number:
            return True
    return False
```

Here we compare every element of the list with the number we are looking for. If we have a match, we return `True`. If we get to the end of the list without finding anything, we return `False`. This algorithm is, to put it mildly, inefficient.

## Membership testing operator

Python has a membership testing operator called `in`. We can simplify our check to one line:

```python
def test_in(number):
    return number in MILLION_NUMBERS
```

It looks much cleaner and easier to read. But is it faster? Let's check.

We will run two sets of tests - one for a number at the beginning of the list and one for a number at the end:

```shell
# Look for the second element in the list
$ python -m timeit -s "from membership import test_for_loop" "test_for_loop(1)"
2000000 loops, best of 5: 180 nsec per loop

$ python -m timeit -s "from membership import test_in" "test_in(1)"
2000000 loops, best of 5: 117 nsec per loop


# Look for the last element in the list
$ python -m timeit -s "from membership import test_for_loop" "test_for_loop(999_999)"
10 loops, best of 5: 26.6 msec per loop

$ python -m timeit -s "from membership import test_in" "test_in(999_999)"
20 loops, best of 5: 13 msec per loop
```

If we search for the second element in the list, "for loop" is 54% slower (180/117≈1.538). If we search for the last element, it's 105% slower (26.6/13≈2.046).

What if we try to look for an item not included in the list?

```shell
$ python -m timeit -s "from membership import test_for_loop" "test_for_loop(-1)"
10 loops, best of 5: 25 msec per loop

$ python -m timeit -s "from membership import test_in" "test_in(-1)"
20 loops, best of 5: 11.4 msec per loop
```

The results are similar to what we got when the element was at the end of the list. In both cases, Python will check the whole list. Using a "for loop" is 119% slower (25/11.4≈2.193).

## List vs. set

Using `in` is a great idea, but it's still slow because **lookup time in a list has O(n) time complexity**. The bigger the list, the longer it takes to check all the elements.

There is a better solution - we can use a data structure with a constant average lookup time, such as **a set**!

```python
# membership.py
MILLION_NUMBERS = set(range(1_000_000))

def test_in_set(number):
    return number in MILLION_NUMBERS
```

```shell
$ python -m timeit -s "from membership import test_in_set" "test_in_set(1)"
2000000 loops, best of 5: 102 nsec per loop

$ python -m timeit -s "from membership import test_in_set" "test_in_set(999_999)"
2000000 loops, best of 5: 121 nsec per loop

$ python -m timeit -s "from membership import test_in_set" "test_in_set(-1)"
2000000 loops, best of 5: 107 nsec per loop
```

When the element we are looking for is at the beginning of the set, the performance is only slightly better. But if it's at the end of the set (or doesn't belong to the set at all) - the difference is enormous! Using `in` with a list instead of a set is **over 100&nbsp;000** times slower if the element doesn't exist (11.4ms / 107ns≈106542.056). That's a huge difference, so does it mean that we should always use a set? Not so fast!

## Converting a list to a set is not "free"

Set is a perfect solution if we start with a set of numbers. But if we have a list, we first have to convert it to a set. And that takes time.

```shell
$ python -m timeit -s "MILLION_NUMBERS = list(range(1_000_000))" "set(MILLION_NUMBERS)"
10 loops, best of 5: 25.9 msec per loop
```

Converting our list to a set takes more time than a lookup in a list. Even if the element is at the end of the list, lookup takes around 13 msec, while a list-to-set conversion takes 25.9 msec - twice as slow.

If we want to check one element in a list, converting it to a set doesn't make sense. Also, don't forget that sets are **unordered**, so you may lose the initial ordering by converting a list to a set and back to a list. But if we want to check more than one element and we don't care about the order, this conversion overhead quickly pays off.

Quick lookup time is not the only special power of sets. You can also use them to [remove duplicates]({% postUrl "remove-duplicates" %}).

## Conclusions

To sum up:

* Using a "for loop" to test membership is never a good idea.
* Python has a membership testing operator `in` that you should use instead.
* Membership testing in a set is much faster than membership testing in a list. But converting a list to a set also costs you some time!

Selecting an appropriate data structure can sometimes give you a significant speedup. If you want to learn more about the time complexity of various operations in different data structures, the [wiki.python.org](https://wiki.python.org/moin/TimeComplexity) is a great resource. If you are not sure what the "get slice" or "extend" means in terms of code - [here](https://www.ics.uci.edu/~pattis/ICS-33/lectures/complexitypython.txt) is the same list with code examples.
