---
title: Upgrade Your Python Version
description: Can we speed up our code examples by simply upgrading the Python version? And if yes, by how much?
tags: ['Python', 'Writing Faster Python']
date: 2030-11-14
---

Here is an idea for a completely free[^1] speed improvement for your code - upgrade your Python version!

I started this series of articles using Python 3.8, but today we already have version 3.11. Python 3.11 is the first version of Python that brings pretty significant speed improvements thanks to the [Faster CPython project](https://github.com/faster-cpython/ideas). If you have never heard about it, it started as Mark Shannon's idea to improve the overall performance of CPython, and now a dedicated team of developers (including Guido van Rossum) is working to bring some hefty speed improvements over the next few releases.

So I decided to benchmark some Python scripts to see how much faster they can get by simply updating the Python versions. I will check out some of the examples I described in this "Writing Faster Python" series, but also some random, computationally intensive programs.

## Setup

Here are the scripts I will take for a spin. Each link will take you to the corresponding article on that topic.

[Ask for Forgiveness or Look Before You Leap]({% postUrl "ask-for-permission-or-look-before-you-leap" %}) - example 2, where we check if all 3 attributes exist (and they do):

```python
# permission_vs_forgiveness.py

class BaseClass:
    hello = "world"
    bar = "world"
    baz = "world"

class Foo(BaseClass):
    pass

FOO = Foo()

# Look before you leap
def test_permission2():
    if hasattr(FOO, "hello") and hasattr(FOO, "bar") and hasattr(FOO, "baz"):
        FOO.hello
        FOO.bar
        FOO.baz

# Ask for forgiveness
def test_forgiveness2():
    try:
        FOO.hello
        FOO.bar
        FOO.baz
    except AttributeError:
        pass
```

[Ask for Forgiveness or Look Before You Leap]({% postUrl "ask-for-permission-or-look-before-you-leap" %}) - example 3, where we check for an attribute, but that attribute doesn't exist:

```python
# permission_vs_forgiveness2.py

class BaseClass:
    pass  # "hello" attribute is now removed

class Foo(BaseClass):
    pass

FOO = Foo()

# Look before you leap
def test_permission3():
    if hasattr(FOO, "hello"):
        FOO.hello

# Ask for forgiveness
def test_forgiveness3():
    try:
        FOO.hello
    except AttributeError:
        pass
```

[Find Item in a List]({% postUrl "find-item-in-a-list" %}) - for loop and a generator expression for finding the first number divisible by 42 and 43. They both use `count()` function inside:

```python
# find_item.py

from itertools import count

def count_numbers():
    for item in count(1):
        if (item % 42 == 0) and (item % 43 == 0):
            return item

def generator():
    return next(item for item in count(1) if (item % 42 == 0) and (item % 43 == 0))

```

[For Loop vs. List Comprehension]({% postUrl "for-loop-vs-list-comprehension" %}) - for loop and a list comprehension for creating a filtered list of numbers:

```python
# filter_list.py

MILLION_NUMBERS = list(range(1_000_000))

def for_loop():
    output = []
    for element in MILLION_NUMBERS:
        if not element % 2:
            output.append(element)
    return output

def list_comprehension():
    return [number for number in MILLION_NUMBERS if not number % 2]
```

[Sorting Lists]({% postUrl "sorting-lists" %}) - `list.sort()` and `sorted()` for sorting a list of random numbers:

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

[Remove Duplicates From a List]({% postUrl "remove-duplicates" %}) - removing duplicates from a list with a for loop and by converting list to a set and back to a list:

```python
# duplicates.py

from random import randrange

DUPLICATES = [randrange(100) for _ in range(1_000_000)]

def test_for_loop():
    unique = []
    for element in DUPLICATES:
        if element not in unique:
            unique.append(element)
    return unique

def test_set():
    return list(set(DUPLICATES))
```

### Slower scripts

With the examples from "Writing Faster Python" articles, we have a good variety of common operations. We do attribute lookups, handle exceptions, we test iterators, generators, loops and lists comprehensions, etc.

But all those examples are rather fast to run, so just for good measure, let's add two more functions that are intended to be more computational-heavy and run for at least a few seconds:

**Bubble sort** - a fairly slow sorting algorithm. Let's run it on a list of 10 000 numbers in descending order, which should take a couple of seconds on my computer:

```python
# bubble_sort.py

DESCENDING_10_000 = list(range(10_000, 0, -1))

def bubble_sort():
    numbers = DESCENDING_10_000[:]
    changed = True
    while changed:
        changed = False
        for i in range(len(numbers) - 1):
            if numbers[i] > numbers[i+1]:
                numbers[i], numbers[i+1] = numbers[i+1], numbers[i]
                changed = True
    return numbers
```

**Monte Carlo estimation of the π number**. This is a simple simulation where we draw a square with a side of 1, and inside we draw a circle (so it has a diameter of 1). Then we throw a bunch of darts (or generate random points in case we don't have a large pile of virtual darts) inside that square. This lets us estimate the area of both the square and the circle by simply counting the number of darts that landed inside each of them. By definition, all the darts will end up inside the square, but only some will land in the circle. Finally, we know from school that the circle's area divided by the square's area is equal to π/4. So we do that division, and we get the estimation of π. The more darts we throw, the better the estimation is. [Here](https://academo.org/demos/estimating-pi-monte-carlo/) is a visual explanation of this method.

Again, there are more efficient algorithms to do this simulation (e.g., using NumPy), but I want a slow version on purpose:

```python
# pi_estimation.py

from random import random
from math import sqrt

# Total number of darts to throw.
TOTAL = 100_000_000

def estimate_pi():
    # Number of darts that land inside the circle.
    inside = 0

    for _ in range(TOTAL):
        x2 = random()**2
        y2 = random()**2
        # Check if the x and y points lie inside the circle
        if sqrt(x2 + y2) < 1.0:
            inside += 1
    return (float(inside) / TOTAL) * 4
```

## Benchmarks

With 14 functions to check, we are ready to start our benchmarks. To run all of them at once, I've created a simple bash script to run all functions under different Python versions. I use pyenv to install the latest versions of Python, starting from 3.7, and then I use Python executables from each of those versions. Finally, I print the results in a nice table.

Here is the bash script I came up with. Don't worry if you don't understand how it works. I probably won't understand it one month from now, either.

{% raw %}

```bash
#!/usr/bin/env bash

# Python versions that we will test
PYENV_VERSIONS=(3.7.14 3.8.14 3.9.14 3.10.7 3.11.0)

# Setup code and the actual functions that we will benchmark
COMMANDS=(
    "-s 'from permission_vs_forgiveness import test_permission2' 'test_permission2()'"
    "-s 'from permission_vs_forgiveness import test_forgiveness2' 'test_forgiveness2()'"
    "-s 'from permission_vs_forgiveness2 import test_permission3' 'test_permission3()'"
    "-s 'from permission_vs_forgiveness2 import test_forgiveness3' 'test_forgiveness3()'"
    "-s 'from find_item import count_numbers' 'count_numbers()'"
    "-s 'from find_item import generator' 'generator()'"
    "-s 'from filter_list import for_loop' 'for_loop()'"
    "-s 'from filter_list import list_comprehension' 'list_comprehension()'"
    "-s 'from sorting import test_sort' 'test_sort()'"
    "-s 'from sorting import test_sorted' 'test_sorted()'"
    "-s 'from duplicates import test_for_loop' 'test_for_loop()'"
    "-s 'from duplicates import test_set' 'test_set()'"
    "-s 'from bubble_sort import bubble_sort' 'bubble_sort()'"
    "-s 'from pi_estimation import estimate_pi' 'estimate_pi()'"
)

OUTPUT="Function,"
# Create a header with version numbers
for v in ${PYENV_VERSIONS[@]}
do
    OUTPUT+="$v,"
done

# Last column will contain difference between 1st and last version of Python in the PYENV_VERSIONS
OUTPUT+="${PYENV_VERSIONS[0]}/${PYENV_VERSIONS[${#PYENV_VERSIONS[@]}-1]}"
OUTPUT+="\n"

for (( i = 0; i < ${#COMMANDS[@]} ; i++ ))
do
    # Remove the single quotes from function name
    OUTPUT+=$(echo ${COMMANDS[$i]##*\ } | tr -d "'")

    for v in ${PYENV_VERSIONS[@]}
    do
        OUTPUT+=","
        OUTPUT+=$(eval "/Users/switowski/.pyenv/versions/$v/bin/python -m timeit ${COMMANDS[$i]}" | sed -e 's/.*: \(.*\) per loop/\1/')
    done
    # Divide timings for the first and last Python version and add it in the last column
    v1=$(eval "/Users/switowski/.pyenv/versions/${PYENV_VERSIONS[0]}/bin/python -m timeit ${COMMANDS[$i]}" | sed -e 's/.*: \(.*\) per loop/\1/' -e 's/[^0-9\.]//g')
    v2=$(eval "/Users/switowski/.pyenv/versions/${PYENV_VERSIONS[${#PYENV_VERSIONS[@]}-1]}/bin/python -m timeit ${COMMANDS[$i]}" | sed -e 's/.*: \(.*\) per loop/\1/' -e 's/[^0-9\.]//g')
    difference=$(echo "scale=2; $v1 / $v2" | bc)
    OUTPUT+=",$difference"

    OUTPUT+="\n"
done

# Print in a table-like format
printf "$OUTPUT" | column -ts,
```

{% endraw %}

I've put all the code examples together with the benchmark script and the results in [this repository](https://github.com/switowski/blog-resources/tree/master/writing-faster-python/benchmarks). The actual benchmark script has one more version, in case you don't care about the table, but the raw output from the timeit functions.

## Results

Let's see the results. The lower the number, the faster a given code example runs. In the last column, we can see the comparison of how long it takes to run the code in Python 3.7 vs. Python 3.11. "1.68" means this example runs 68% slower in Python 3.7.

I did a bit of cleanup by moving the units next to the function name (instead of next to each number as in the [original output](https://github.com/switowski/blog-resources/blob/master/writing-faster-python/benchmarks/results.txt)).

| Function                    | 3.7.14 | 3.8.14 | 3.9.14 | 3.10.7 | 3.11.0 | 3.7/3.11 |
|-----------------------------|--------|--------|--------|--------|--------|--------------:|
| test_permission2()   [nsec] | 218    | 145    | 148    | 145    | 140    | 1.68          |
| test_forgiveness2()  [nsec] | 91.9   | 70.4   | 72     | 83.1   | 71.7   | 1.31          |
| test_permission3()   [nsec] | 77.4   | 60.9   | 61.9   | 57.1   | 40.5   | 1.88          |
| test_forgiveness3()  [µsec] | 256    | 251    | 239    | 283    | 307    | .83           |
| count_numbers()      [µsec] | 46.8   | 47.5   | 47.4   | 46.6   | 41     | 1.14          |
| generator()          [µsec] | 47.1   | 47.7   | 47.6   | 45.3   | 39.5   | 1.18          |
| for_loop()           [msec] | 27.2   | 26.5   | 26.8   | 25.6   | 19.4   | 1.39          |
| list_comprehension() [msec] | 18.3   | 18     | 18.6   | 17.7   | 17.3   | 1.04          |
| test_sort()          [msec] | 175    | 175    | 176    | 176    | 175    | .97           |
| test_sorted()        [msec] | 183    | 183    | 186    | 183    | 185    | 1.00          |
| test_for_loop()      [msec] | 360    | 364    | 316    | 305    | 308    | 1.17          |
| test_set()           [msec] | 5.59   | 5.57   | 5.83   | 6.09   | 6.08   | .91           |
| bubble_sort()         [sec] | 8.05   | 8.24   | 8.23   | 7.89   | 4.69   | 1.72          |
| estimate_pi()         [sec] | 17.1   | 17.9   | 18.1   | 17.4   | 14.3   | 1.21          |

We can see that in most cases, our examples run faster as we upgrade the Python version. And Python 3.11 gives us the best improvements. Upgrading your Python version now makes even more sense than before if you're looking for speed improvements.

But for some examples, we see a degradation of performance. The 0.97 for `test_sort()` and 0.91 for `test_set()` differences are so small that I assume it's the small randomness of the benchmark results. But the `test_forgiveness3()` with around 20% decrease in performance in Python 3.11 looked interesting. I checked the release notes for Python 3.11 to find what might be causing this and found nothing. So I decided to compare how Python handles exceptions for the most common example - division by zero:

```python
# division.py
def divide_by_zero():
    try:
        1/0
    except ZeroDivisionError:
        pass
```

Benchmarking the above code under different Python versions gave me the following results:

- Python 3.7.14: 161 nsec
- Python 3.8.14: 170 nsec
- Python 3.9.14: 165 nsec
- Python 3.10.7: 141 nsec
- Python 3.11.0: 169 nsec

In Python 3.11.0, it's almost as slow as in Python 3.7 or 3.8. So it seems like the slowdown for my `test_forgiveness3()` was specific to this one particular example and not something we should be worried about. And while this example is slower, all the other examples of testing permission and forgiveness got much faster in the newer Python versions. In Python 3.11, the "ask for permission" gets an additional speed boost from the "zero cost" exception handling.

### "Zero cost" exception handling

Python 3.11 introduced something called ["zero cost" exception handling](https://bugs.python.org/issue40222). This [Hacker News submission](https://news.ycombinator.com/item?id=28771931) explains how this works in Python and other languages. The gist of this feature is that everything inside the "try" block (the "happy path" of the exception) will now be faster - almost as fast as if there was no try/except block at all.

Let's see this in action!

I created one more short benchmarking script. I took 3 code examples (for loop for filtering a list, bubble sort, and the pi estimation) and wrapped their most inner instructions in a try/except block (so that this try/except block is executed as often as possible). At the same time, since there are no exceptions, the "except" block is never called, so I can just put `pass` inside.

So, for example, the first test case will compare those two variants:

```python
MILLION_NUMBERS = list(range(1_000_000))

def for_loop():
    output = []
    for element in MILLION_NUMBERS:
        if not element % 2:
            output.append(element)
    return output

def for_loop_with_try_except():
    output = []
    for element in MILLION_NUMBERS:
        if not element % 2:
            try:
                output.append(element)
            except Exception:
                pass
    return output
```

With zero cost exceptions handling, Python 3.11 should run those code examples faster than Python 3.10 or 3.9.

Let's see the results by running the [exceptions_benchmark.sh](https://github.com/switowski/blog-resources/blob/master/writing-faster-python/benchmarks/exceptions_benchmark.sh) script:

| Function      | 3.9.14      | 3.10.7      | 3.11.0      |
|---------------|:-----------:|:-----------:|:-----------:|
| Filter [msec] | 26.7 (28.4) | 26 (27.1)   | 19.6 (20.4) |
| Pi      [sec] | 18.4 (19.2) | 17.3 (17.5) | 14.1 (14.3) |
| Bubble  [sec] | 8.26 (8.46) | 7.96 (8.06) | 4.72 (4.75) |

The first number in each column is how long it takes to run the original version (**without** try/except blocks). The number in parenthesis is how long it takes to run the same function **with** the try/except blocks called multiple times.

The differences between both variants are tiny for all 3 Python versions. But for Python 3.11 they are even smaller! Take this simple benchmark with a grain of salt, but I hope it helped illustrate what's the benefit of "zero cost" exception handling.

## Conclusions

Upgrading Python version is one of a few ways to make your code a bit faster without changing it. And no matter if you upgrade from Python 3.7. to 3.8 or from Python 3.9 to Python 3.10, you will always get some improvements for a large codebase. But it's Python 3.11 where a dedicated effort was made to really speed it up. According to the [release notes](https://docs.python.org/3/whatsnew/3.11.html#summary-release-highlights), it should speed up your code by around 10-60%. So now is a good time to think about upgrading your Python projects.

If you want to run your own benchmarks with more advanced code examples, the [Python Performance Benchmark Suite](https://pyperformance.readthedocs.io/) is a good place to look for some inspiration.

[^1]: Completely free if you have good tests coverage (in case of some subtle bugs between minor Python versions), all the libraries you are using work with newer Python version, and you have a few moments to install new Python version.
