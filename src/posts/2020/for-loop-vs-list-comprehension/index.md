---
title: For Loop vs. List Comprehension
description: Simple "for loops" can be replaced with a list comprehension. But is it going to make our code faster? And what limitations list comprehension has?
tags: ["Python", "Writing Faster Python"]
date: 2020-09-17
---

Many simple "for loops" in Python can be replaced with list comprehensions. You can often hear that list comprehension is *"more Pythonic"* (almost as if there was a scale for comparing how *Pythonic* something is 😉). In this article, I will compare their performance and discuss when a list comprehension is a good idea, and when it's not.

## Filter a list with a "for loop"

Let's use a simple scenario for a loop operation - we have a list of numbers, and we want to remove the odd ones. One important thing to keep in mind is that we can't remove items from a list as we iterate over it. Instead, we have to create a new one containing only the even numbers:

```python
# filter_list.py

MILLION_NUMBERS = list(range(1_000_000))

def for_loop():
    output = []
    for element in MILLION_NUMBERS:
        if not element % 2:
            output.append(element)
    return output
```

`if not element % 2` is equivalent to `if element % 2 == 0`, but it's slightly faster. I will write a separate article about comparing boolean values soon.

Let's measure the execution time of this function. I'm using **Python 3.8** for benchmarks (you can read about the whole setup in the [Introduction]({% postUrl "writing-faster-python-intro" %}) article):

```shell
$ python -m timeit -s "from filter_list import for_loop" "for_loop()"
5 loops, best of 5: 65.4 msec per loop
```

It takes 65 milliseconds to filter a list of one million elements. How fast will a list comprehension deal with the same task?

## Filter a list with list comprehension

```python
# filter_list.py

MILLION_NUMBERS = list(range(1_000_000))

def list_comprehension():
    return [number for number in MILLION_NUMBERS if not number % 2]
```

```shell
$ python -m timeit -s "from filter_list import list_comprehension" "list_comprehension()"
5 loops, best of 5: 44.5 msec per loop
```

"For loop" is around 50% slower than a list comprehension (65.4/44.5≈1.47). And we just **reduced five lines of code to one line**! Cleaner and faster code? Great!

Can we make it better?

## Filter a list with the "filter" function

Python has a built-in [filter](https://docs.python.org/3/library/functions.html#filter) function for filtering collections of elements. This sounds like a perfect use case for our problem, so let's see how fast it will be.

```python
# filter_list.py

MILLION_NUMBERS = list(range(1_000_000))

def filter_function():
    return filter(lambda x: not x % 2, MILLION_NUMBERS)
```

```shell
$ python -m timeit -s "from filter_list import filter_function" "filter_function()"
1000000 loops, best of 5: 284 nsec per loop
```

284 nanoseconds?! That's suspiciously fast! It turns out that the filter function returns an **iterator**. It doesn't immediately go over one million elements, but it will return the next value when we ask for it. To get all the results at once, we can convert this iterator to a list.

```python
# filter_list.py

MILLION_NUMBERS = list(range(1_000_000))

def filter_return_list():
    return list(filter(lambda x: not x % 2, MILLION_NUMBERS))
```

```shell
$ python -m timeit -s "from filter_list import filter_return_list" "filter_return_list()"
2 loops, best of 5: 104 msec per loop
```

Now, its performance is not so great anymore. It's 133% slower than the list comprehension (104/44.5≈2.337) and 60% slower than the "for loop" (104/65.4≈1.590).

While, in this case, it's not the best solution, an iterator is an excellent alternative to a list comprehension when we don't need to have all the results at once. If it turns out that we only need to get a few elements from the filtered list, an iterator will be a few orders of magnitude faster than other "non-lazy" solutions.

::: callout-warning

We could use the [filterfalse()](https://docs.python.org/3/library/itertools.html#itertools.filterfals) function from the itertools library to simplify the filtering condition. `filterfalse` returns the opposite elements than `filter`. It picks those elements that evaluate to False. Unfortunately, it doesn't make any difference when it comes to performance:

```python
from itertools import filterfalse

def filterfalse_list():
    return list(filterfalse(lambda x: x % 2, MILLION_NUMBERS))
```

```shell
$ python -m timeit -s "from filter_list import filterfalse_list" "filterfalse_list()"
2 loops, best of 5: 103 msec per loop
```

:::

## More than one operation in the loop

List comprehensions are often faster and easier to read, but they have one significant limitation. What happens if you want to execute more than one simple instruction? List comprehension can't accept multiple statements (without sacrificing readability). But in many cases, you can wrap those multiple statements in a function.

Let's use a slightly modified version of the famous "Fizz Buzz" program as an example. We want to iterate over a list of elements and for each of them return:

* "fizzbuzz" if the number can be divided by 3 and 5
* "fizz" if the number can be divided by 3
* "buzz" if the number can be divided by 5
* the number itself, if it can't be divided by 3 or 5

Here is a simple solution:

```python
# filter_list.py

def fizz_buzz():
    output = []
    for number in MILLION_NUMBERS:
        if number % 3 == 0 and number % 5 == 0:
            output.append('fizzbuzz')
        elif number % 3 == 0:
            output.append('fizz')
        elif number % 5 == 0:
            output.append('buzz')
        else:
            output.append(number)
    return output
```

Here is the list comprehension equivalent of the fizz_buzz():

```python
['fizzbuzz' if x % 3 == 0 and x % 5 == 0 else 'fizz' if x % 3 == 0 else 'buzz' if x % 5 == 0 else x for x in MILLION_NUMBERS]
```

It's not easy to read - at least for me. It gets better if we split it into multiple lines:

```python
[
    "fizzbuzz" if x % 3 == 0 and x % 5 == 0
    else "fizz" if x % 3 == 0
    else "buzz" if x % 5 == 0
    else x
    for x in MILLION_NUMBERS
]
```

But if I see a list comprehension that spans multiple lines, I try to refactor it. We can extract the "if" statements into a separate function:

```python
# filter_list.py

def transform(number):
    if number % 3 == 0 and number % 5 == 0:
        return 'fizzbuzz'
    elif number % 3 == 0:
        return 'fizz'
    elif number % 5 == 0:
        return 'buzz'
    return number

def fizz_buzz2():
    output = []
    for number in MILLION_NUMBERS:
        output.append(transform(number))
    return output
```

Now it's trivial to turn it into a list comprehension. And we get the additional benefit of a nice separation of logic into a function that does the "fizz buzz" check and a function that actually iterates over a list of numbers and applies the "fizz buzz" transformation.

Here is the improved list comprehension:

```python
def fizz_buzz2_comprehension():
    return [transform(number) for number in MILLION_NUMBERS]
```

Let's compare all three versions:

```shell
$ python -m timeit -s "from filter_list import fizz_buzz" "fizz_buzz()"
2 loops, best of 5: 191 msec per loop

$ python -m timeit -s "from filter_list import fizz_buzz2" "fizz_buzz2()"
1 loop, best of 5: 285 msec per loop

$ python -m timeit -s "from filter_list import fizz_buzz2_comprehension" "fizz_buzz2_comprehension()"
1 loop, best of 5: 224 msec per loop
```

Extracting a separate function adds some overhead. List comprehension with a separate `transform()` function is around 17% slower than the initial "for loop"-based version (224/191≈1.173). But it's much more readable, so I prefer it over the other solutions.

And, if you are curious, the one-line list comprehension mentioned before is the fastest solution:

```python
def fizz_buzz_comprehension():
    return [
        "fizzbuzz" if x % 3 == 0 and x % 5 == 0
        else "fizz" if x % 3 == 0
        else "buzz" if x % 5 == 0
        else x
        for x in MILLION_NUMBERS
    ]
```

```shell
$ python -m timeit -s "from filter_list import fizz_buzz_comprehension" "fizz_buzz_comprehension()"
2 loops, best of 5: 147 msec per loop
```

Fastest, but also harder to read. If you run this code through a code formatter like [black](https://github.com/psf/black) (which is a common practice in many projects), it will further *obfuscate* this function:

```python
[
    "fizzbuzz"
    if x % 3 == 0 and x % 5 == 0
    else "fizz"
    if x % 3 == 0
    else "buzz"
    if x % 5 == 0
    else x
    for x in MILLION_NUMBERS
]
```

There is nothing wrong with black here - we are simply putting too much logic inside the list comprehension. If I had to say what the above code does, it would take me much longer to figure it out than if I had two separate functions. Saving a few hundred milliseconds of execution time and adding a few seconds of reading time doesn't sound like a good trade-off 😉.

Clever one-liners can impress some recruiters during code interviews. But in real life, separating logic into different functions makes it much easier to read and document your code. And, [statistically](https://www.goodreads.com/quotes/835238-indeed-the-ratio-of-time-spent-reading-versus-writing-is), we read more code than we write.

## Conclusions

List comprehensions are often not only more readable but also faster than using "for loops." They can simplify your code, but if you put too much logic inside, they will instead become harder to read and understand.

Even though list comprehensions are popular in Python, they have a specific use case: when you want to perform some operations on a list and return another list. And they have limitations - you can't `break` out of a list comprehension or put comments inside. In many cases, "for loops" will be your only choice.

I only scratched the surface of how useful list comprehension (or any other type of "comprehension" in Python) can be. If you want to learn more, Trey Hunner has many excellent articles and talks on this subject (for example, [this one for beginners](https://treyhunner.com/2015/12/python-list-comprehensions-now-in-color/)).
