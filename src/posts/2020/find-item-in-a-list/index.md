---
title: Find Item in a List
description: How to quickly find something in a collection of items, like a list or a range? When a generator expression is a great solution, and when it's not?
tags: ["Python", "Writing Faster Python"]
similar:
  - remove-duplicates
  - sorting-lists
  - easy-speedup-wins-with-numba
date: 2020-08-27
---

## Find a number

If you want to find the first number that matches some criteria, what do you do? The easiest way is to write a loop that checks numbers one by one and returns when it finds the correct one.

Let's say we want to get the first number divided by 42 and 43 (that's 1806). If we don't have a predefined set of elements (in this case, we want to check all the numbers starting from 1), we might use a "while loop".

```python
# find_item.py

def while_loop():
    item = 1
    # You don't need to use parentheses, but they improve readability
    while True:
        if (item % 42 == 0) and (item % 43 == 0):
            return item
        item += 1
```

It's pretty straightforward:

* Start from number 1
* Check if that number can be divided by 42 and 43.
  * If yes, return it (this stops the loop)
* Otherwise, check the next number

## Find a number in a list

If we have a list of items that we want to check, we will use a "for loop" instead. I know that the number I'm looking for is smaller than 10 000, so let's use that as the upper limit:

```python
# find_item.py

def for_loop():
    for item in range(1, 10000):
        if (item % 42 == 0) and (item % 43 == 0):
            return item
```

Let's compare both solutions (benchmarks are done with **Python 3.8** - I describe the whole setup in the [Introduction]({% postUrl "writing-faster-python-intro" %}) article):

```shell
$ python -m timeit -s "from find_item import while_loop" "while_loop()"
2000 loops, best of 5: 134 usec per loop

$ python -m timeit -s "from find_item import for_loop" "for_loop()"
2000 loops, best of 5: 103 usec per loop
```

"While loop" is around 30% slower than the "for loop" (134/103≈1.301).

Loops are optimized to iterate over a collection of elements. Trying to *manually* do the iteration (for example, by referencing elements in a list through an index variable) will be a slower and often over-engineered solution.

::: callout-warning

### Python 2 flashbacks

In Python 3, the `range()` function is lazy. It won't initialize an array of 10 000 elements, but it will generate them as needed. It doesn't matter if we say `range(1, 10000)` or `range(1, 1000000)` - there will be no difference in speed. But it was not the case in Python 2!

In Python 2, functions like `range`, `filter`, or `zip` were *eager*, so they would always create the whole collection when initialized. All those elements would be loaded to the memory, increasing the execution time of your code and its memory usage. To avoid this behavior, you had to use their lazy equivalents like `xrange`, `ifilter`, or `izip`.

Out of curiosity, let's see how slow is the `for_loop()` function if we run it with Python 2.7.18 (the latest and last version of Python 2):

```shell
$ pyenv shell 2.7.18
$ python -m timeit -s "from find_item import for_loop" "for_loop()"
10000 loops, best of 3: 151 usec per loop
```

That's almost 50% slower than running the same function in Python 3 (151/103≈1.4660). Updating Python version is *one of the easiest performance wins* you can get!

If you are wondering what's pyenv and how to use it to quickly switch Python versions, check out [this section of my PyCon 2020 workshop](https://youtu.be/WkUBx3g2QfQ?t=2531) on Python tools.
:::

Let's go back to our "while loop" vs. "for loop" comparison. Does it matter if the element we are looking for is at the beginning or at the end of the list?

```python
def while_loop2():
    item = 1
    while True:
        if (item % 98 == 0) and (item % 99 == 0):
            return item
        item += 1

def for_loop2():
    for item in range(1, 10000):
        if (item % 98 == 0) and (item % 99 == 0):
            return item
```

This time, we are looking for number 9702, which is at the very end of our list. Let's measure the performance:

```shell
$ python -m timeit -s "from find_item import while_loop2" "while_loop2()"
500 loops, best of 5: 710 usec per loop

$ python -m timeit -s "from find_item import for_loop2" "for_loop2()"
500 loops, best of 5: 578 usec per loop
```

There is almost no difference. "While loop" is around 22% slower this time (710/578≈1.223). I performed a few more tests (up to a number close to 100 000 000), and the difference was always similar (in the range of 20-30% slower).

## Find a number in an infinite list

So far, the collection of items we wanted to iterate over was limited to the first 10 000 numbers. But what if we don't know the upper limit? In this case, we can use the [count](https://docs.python.org/3/library/itertools.html#itertools.count) function from the `itertools` library.

```python
from itertools import count

def count_numbers():
    for item in count(1):
        if (item % 42 == 0) and (item % 43 == 0):
            return item
```

`count(start=0, step=1)` will start counting numbers from the `start` parameter, adding the `step` in each iteration. In my case, I need to change the start parameter to 1, so it works the same as the previous examples.

`count` works almost the same as the "while loop" that we made at the beginning. How about the speed?

```shell
$ python -m timeit -s "from find_item import count_numbers" "count_numbers()"
2000 loops, best of 5: 109 usec per loop
```

It's almost the same as the "for loop" version. So `count` is a good replacement if you need an **infinite counter**.

## What about a list comprehension?

A typical solution for iterating over a list of items is to use a list comprehension. But we want to exit the iteration as soon as we find our number, and that's not easy to do with a list comprehension. It's a great tool to go over the whole collection, but not in this case.

Let's see how bad it is:

```python
def list_comprehension():
    return [item for item in range(1, 10000) if (item % 42 == 0) and (item % 43 == 0)][0]
```

```shell
$ python -m timeit -s "from find_item import list_comprehension" "list_comprehension()"
500 loops, best of 5: 625 usec per loop
```

That's really bad - it's a few times slower than other solutions! It takes the same amount of time, no matter if we search for the first or last element. And we can't use `count` here.

But using a list comprehension points us in the right direction - we need something that returns the first element it finds and then stops iterating. And that thing is a **generator**! We can use a generator expression to grab the first element matching our criteria.

## Find item with a generator expression

```python
def generator():
    return next(item for item in count(1) if (item % 42 == 0) and (item % 43 == 0))
```

The whole code looks very similar to a list comprehension, but we can actually use `count`. Generator expression will execute only enough code to return the next element. Each time you call `next()`, it will resume work in the same place where it stopped the last time, grab the next item, return it, and stop again.

```shell
$ python -m timeit -s "from find_item import generator" "generator()"
2000 loops, best of 5: 110 usec per loop
```

It takes almost the same amount of time as the best solution we have found so far. And I find this syntax much easier to read - as long as we don't put too many `if`s there!

Generators have the additional benefit of being able to "suspend" and "resume" counting. We can call `next()` multiple times, and each time we get the next element matching our criteria. If we want to get the first three numbers that can be divided by 42 and 43 - here is how easily we can do this with a generator expression:

```python
def generator_3_items():
    gen = (item for item in count(1) if (item % 42 == 0) and (item % 43 == 0))
    return [next(gen), next(gen), next(gen)]
```

Compare it with the "for loop" version:

```python
def for_loop_3_items():
    items = []
    for item in count(1):
        if (item % 42 == 0) and (item % 43 == 0):
            items.append(item)
            if len(items) == 3:
                return items
```

Let's benchmark both versions:

```shell
$ python -m timeit -s "from find_item import for_loop_3_items" "for_loop_3_items()"
1000 loops, best of 5: 342 usec per loop

$ python -m timeit -s "from find_item import generator_3_items" "generator_3_items()"
1000 loops, best of 5: 349 usec per loop
```

Performance-wise, both functions are almost identical. So when would you use one over the other? "For loop" lets you write more complex code. You can't put nested "if" statements or multiline code with side effects inside a generator expression. But if you only do simple filtering, generators can be much easier to read.

::: callout-warning

### Be careful with nested ifs

Nesting too many "if" statements makes code difficult to follow and reason about. And it's easy to make mistakes.

In the last example, if we don't nest the second `if`, it will be checked in each iteration. But we only need to check it when we modify the `items` list. It might be tempting to write the following code:

```python
def for_loop_flat():
    items = []
    for item in count(1):
        if (item % 42 == 0) and (item % 43 == 0):
            items.append(item)
        if len(items) == 3:
            return items
```

This version is easier to follow, but it's also much slower!

```shell
$ python -m timeit -s "from find_item import for_loop_3_items" "for_loop_3_items()"
1000 loops, best of 5: 323 usec per loop

$ python -m timeit -s "from find_item import for_loop_flat" "for_loop_flat()"
500 loops, best of 5: 613 usec per loop
```

If you forget to nest `if`s, your code will be 90% slower (613/323≈1.898).
:::

## Conclusions

Generator expression combined with `next()` is a great way to grab one or more elements based on specific criteria. It's memory-efficient, fast, and easy to read - as long as you keep it simple. When the number of "if statements" in the generator expression grows, it becomes much harder to read (and write).

With complex filtering criteria or many `if`s, "for loop" is a more suitable choice that doesn't sacrifice the performance.
