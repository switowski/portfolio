---
title: Easy Speedup Wins With Numba
description: Numba library has plenty of tools to speed up your mathematical-heavy programs. From a simple @jit decorator, all the way to running your code on a CUDA GPU.
tags: ["Python", "Writing Faster Python"]
similar:
  - checking-for-true-or-false
  - for-loop-vs-list-comprehension
  - 25-ipython-tips-for-your-next-advent-of-code
date: 2020-09-03
---

If you have functions that do a lot of mathematical operations, use NumPy or rely heavily on loops, then there is a way to speed them up significantly with one line of code. Ok, two lines if you count the import.

## Numba and the @jit decorator

Meet [Numba](https://numba.pydata.org/) and its [@jit](https://numba.pydata.org/numba-doc/dev/user/jit.html) decorator. It changes how your code is compiled, often improving its performance. You don't have to install any special tools (just the `numba` pip package), you don't have to tweak any parameters. All you have to do is:

* Add the `@jit` decorator to a function
* Check if it's faster

Let's see an example of code before and after applying `Numba`'s optimization.

```python
# numba_testing.py

import math

def compute():
    # Bunch of dummy math operations
    result = 0
    for number in range(1_000_000):
        double = number * 2
        result += math.sqrt(double) + double
    return result
```

The only purpose of this code is to do some calculations and to "be slow." Let's see how slow (benchmarks are done with **Python 3.8** - I describe the whole setup in the [Introduction]({% postUrl "writing-faster-python-intro" %}) article):

```shell
$ python -m timeit -s "from numba_testing import compute" "compute()"
1 loop, best of 5: 217 msec per loop
```

Now, we add `@jit` to our code. The body of the function stays the same, and the only difference is the decorator. Don't forget to install Numba package with pip (`pip install numba`).

```python
# numba_testing.py

import math

from numba import jit

@jit
def compute_jit():
    # Bunch of dummy math operations
    result = 0
    for number in range(1_000_000):
        double = number * 2
        result += math.sqrt(double) + double
    return result
```

Let's measure the execution time once more:

```shell
$ python -m timeit -s "from numba_testing import compute_jit" "compute_jit()"
200 loops, best of 5: 1.76 msec per loop
```

Using @jit decorator gave us a **120x speedup** (217 / 1.76 = 123.295)! That's a huge improvement for such a simple change!

::: callout-warning

### How did I discover Numba?

I first learned about Numba when I was doing code challenges from the [Advent of Code](https://adventofcode.com/) a few years ago. I wrote a pretty terrible algorithm, left it running, and went for lunch. When I came back after one hour, my program wasn't even 10% done. I stopped it, added the `>@jit` decorator to the main function, rerun it, and I had the results in under one minute! Fantastic improvement with almost no work!

This story doesn't mean that it's ok to write sloppy code, and then use hacks to speed it up. But sometimes you just need to make some one-off calculations. You don't want to spend too much time writing the perfect algorithm. Or maybe you can't think of a better algorithm, and the one you have is too slow. Using tools like Numba can be one of the fastest and easiest to apply improvements!
:::

## Other features of Numba

@jit is the most common decorator from the Numba library, but there are others that you can use:

* @njit - alias for @jit(nopython=True). In `nopython` mode, Numba tries to run your code without using the Python interpreter at all. It can lead to even bigger speed improvements, but it's also possible that the compilation will fail in this mode.
* @vectorize and @guvectorize - produces `ufunc` and generalized `ufunc` used in NumPy.
* @jitclass - can be used to decorate the whole class.
* @cfunc - declares a function to be used as a native callback (from C or C++ code).

There are also advanced features that let you, for example, run your code on GPU with @cuda.jit. This doesn't work out of the box, but it might be worth the effort for some very computational-heavy operations.

Numba has plenty of configuration options that will further improve your code's execution time if you know what you are doing. You can:

* Disable GIL ([Global Interpreter Lock](https://docs.python.org/3/glossary.html#term-global-interpreter-lock)) with `nogil`
* Cache results with `cache`
* Automatically parallelize functions with `parallel`.

Check out the [documentation](https://numba.pydata.org/numba-doc/latest/index.html) to see what you can do. And to see more real-life examples (like computing the Black-Scholes model or the Lennard-Jones potential), visit the [Numba Examples](https://numba.pydata.org/numba-examples/index.html) page.

## Conclusions

`Numba` is a great library that can significantly speed up your programs with minimal effort. Given that it takes less than a minute to install and decorate some slow functions, it's one of the first solutions that you can check when you want to quickly improve your code (without rewriting it).

It works best if your code:

* Uses NumPy a lot
* Performs plenty of mathematical operations
* Performs operations is a loop
