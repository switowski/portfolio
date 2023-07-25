---
title: Inlining Functions
description: Running one big blob of code is often faster than splitting your code into well-separated functions. But there are other ways you can improve the speed of your code without sacrificing its readability.
tags: ['Python', 'Writing Faster Python']
similar:
  - easy-speedup-wins-with-numba
  - for-loop-vs-list-comprehension
  - dictionary-comprehension
date: 2023-07-24
---

In this episode of [Writing Faster Python]({% postUrl "writing-faster-python-intro" %}), we will check if we can make the code faster by doing exactly the opposite of what every good programming book suggests – that is, keeping all the code in one, massive function instead of smaller, more manageable functions.

:::callout-warning
Inlining a function just to make it faster is usually a **bad idea** and will make your code harder to understand. And for applications that process large amounts of data, it can actually bring the performance down by increasing the memory consumption (thanks Harvey for pointing out this downside!)

I don't recommend doing that unless this small speed improvement of the inlined function is somehow more important to you than a well-designed, readable, and testable code. Proceed with caution.
:::

Let's start by writing a bunch of dummy functions whose only purpose is to call each other multiple times:

```python
# inline_functions.py

def calculate_a():
    return 1


def calculate_b():
    return sum([calculate_a() for _ in range(100)])


def calculate_c():
    return sum([calculate_b() for _ in range(100)])


def calculate_d():
    return sum([calculate_c() for _ in range(100)])
```

Calling `calculate_d()` calls `calculate_c()` 100 times. Each call of `calculate_c()` calls `calculate_b()` 100 times. And so on.

In total, the above code performs 1,000,000 function calls. I'm intentionally using a list comprehension (`sum([...])`) instead of a generator expression (`sum(...)`) because, as you might know from my *[Writing Faster Python 3](https://www.youtube.com/watch?v=6P68IBou_cg)* talk, list comprehension is slightly faster (albeit, at the price of consuming more memory). In this case, the speed difference is tiny (~2%), so it doesn't matter if I stick with the list comprehension or use a generator expression.

Now, let's create two functions. One that calls `calculate_d()` and another that simply takes the bodies of all those functions and glues them together into a deeply nested list comprehension abomination:

```python
def separate_functions():
    return calculate_d()


def inline_functions():
    return sum([sum([sum([1 for _ in range(100)]) for _ in range(100)]) for _ in range(100)])
```

Benchmarking time:

```shell
$ python -m timeit -s "from inline_functions import separate_functions" "separate_functions()"
10 loops, best of 5: 35.2 msec per loop

$ python -m timeit -s "from inline_functions import inline_functions" "inline_functions()"
20 loops, best of 5: 17.6 msec per loop
```

If we inline the body of each function, our code will run twice as fast (35.2/17.6=2). And it will be *at least* twice as hard to read. Maybe more.

In the above examples, the overhead of using a few functions is quite large because the bodies of those functions are small. It takes time to look up a function, but running it is rather fast since each has just one instruction inside. If the functions had much longer bodies, the difference between the above examples would probably be much smaller.

Also, according to [this StackOverflow answer](https://softwareengineering.stackexchange.com/a/441673) to the "is code written inline faster than using function calls?" question, function calls got much faster in CPython 3.10. Before, if your function was accepting positional arguments, CPython had to create dictionaries to handle them for function calls. So there are many factors that can affect the speed of calling a function. But in general, executing a function is slower than executing the code from this function directly.

## Using temporary variables

`inline_functions()` is hard to read with all those nested functions and list comprehensions. And this is still a simple example! I've seen people write code this way but with much more complex functions.

We can make this code easier to follow by assigning the output of each function to a variable (this type of refactoring is called *using a temporary variable*):

```python
def inline_variables():
    a = 1
    b = sum([a for _ in range(100)])
    c = sum([b for _ in range(100)])
    d = sum([c for _ in range(100)])
    return d
```

```shell
$ python -m timeit -s "from inline_functions import inline_variables" "inline_variables()"
50000 loops, best of 5: 5.43 usec per loop
```

Using temporary variables takes the execution time down from milliseconds to microseconds (that "u" in "usec" stands for "µ"). So assigning the result of a function call to a variable is a good idea if you know that you will need to reuse that result multiple times. Of course, as long as the function is idempotent (i.e., it always returns the same results).

## Conclusions

The fastest code to run is the one that doesn't use variables or functions and contains just one large blob of code. Coincidentally, the most difficult-to-understand code is also the one that doesn't use variables or functions.

Sacrificing the readability of the code just to make it *slightly* faster is a terrible idea. You should instead consider using a better library (like NumPy), a better algorithm (parallelization or vectorization), or even a faster programming language. The choice depends on how much speed improvement you need to gain.

Still, it was an interesting exercise to see how much the speed varies between inlining code and extracting helpful functions or variables.
