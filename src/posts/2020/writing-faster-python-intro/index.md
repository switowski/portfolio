---
title: Writing Faster Python - Introduction
description: Introduction to the "Writing Faster Python" series. What it is about, how do I benchmark, frequently asked questions, and additional resources.
tags: ["Python", "Writing Faster Python"]
date: 2020-08-18
---

:::callout-warning

**2022 Update**: I started writing these articles in 2020 using Python 3.8 on a 2017 MacBook Pro with Intel CPU. In 2022, I switched to a new MacBook Pro with M1 CPU and decided to also switch to the latest Python 3.11 version as it offers some nice speed-up improvements.

So all the articles written after 2021 use a much faster CPython version and newer laptop than the initial ones.
:::

## Writing Faster Python

A few years ago, I made a presentation called "[Writing Faster Python](https://www.youtube.com/watch?v=YjHsOrOOSuI)," which got quite popular (as for a technical talk). But I made it for Python 2, and even though most advice applies to Python 3, I need to update it at some point. And I will, but first, I need some examples that I can use.

So, today I'm starting a series of articles where I take some common Python code structures and show how they can be improved. In many cases, simply writing idiomatic code and avoiding anti-patterns will result in better and faster code, and that's what I want to focus on. I will also show how you can significantly speed up your programs by using a different interpreter (like PyPy), just-in-time compilers like Numba and other tools. Some code examples are mere curiosities with a marginal impact on the execution time (like replacing `dict()` with `{}`), but I want to show you how they work and when I would use one over the other. Finally, there will be cases when the "improved" code is faster but less readable, and I wouldn't use it in my programs - I will clearly warn you when this happens.

::: callout-info
This article will be updated with new information as I continue writing the "Writing Faster Python" series.
I will answer some common questions, clarify my assumptions (they might change if something doesn't work well), and link to additional resources.
:::

I will try to publish a new article every week or two. Given that so far, I was posting very irregularly, that's a bold statement, and I might need to revalidate it pretty soon 😉.

You can find all the articles published so far in this series [here](/tags/writing-faster-python/).

The best way to get notifications about new articles is to subscribe to my newsletter (below), follow me on Twitter, or, if you are old fashioned like me, use the RSS (click the icon in the footer of this page).

{% include "components/newsletter.njk" %}

## Assumptions

Here are some assumptions about the code examples, benchmarks, and the overall setup:

* I will benchmark the code using the [timeit](https://docs.python.org/3/library/timeit.html) module from the standard library. If the code spans multiple lines, I will wrap it in a separate function. That way, I can import it in the "setup" statement and then benchmark everything easily (without semicolons or weird line breaks). Here is how the benchmarks will look like:

    ```shell
    $ python -m timeit -s "from my_module import version1" "version1()"
    2000000 loops, best of 5: 100 nsec per loop

    $ python -m timeit -s "from my_module import version2" "version2()"
    2000000 loops, best of 5: 200 nsec per loop
    ```

    The `-s` parameter specifies the "setup statement" (it's executed once and it's not benchmarked) and the final argument is the actual code to benchmark. `timeit` module will automatically determine how many times it should run the code to give reliable results.
* I will often initialize some setup variables at the beginning of the file and use them in my test functions. Those variables shared between different functions will be written in uppercase letters, for example:

    ```python
    MILLION_NUMBERS = range(1_000_000)

    def test_version1():
        for number in MILLION_NUMBERS:
            crunch_numbers(number)
    ```

  That's right - I'm using the *dreaded* global variables. Normally, I would pass those "global variables" as parameters to my functions, but I don't want to do this for two reasons:
  * It makes my simple examples harder to follow (now I have to pass arguments around)
  * I only wrap code inside functions to split the "setup statement" from the "actual code," so it's easier to benchmark only the relevant code. Usually, in my code "MILLION_NUMBERS" would be in the same scope as the for loop:

      ```python
      MILLION_NUMBERS = range(1_000_000)
      for number in MILLION_NUMBERS:
          crunch_numbers(number)
      ```

  If you are still not convinced, feel free to pass global variables as parameters in your head while reading the code examples 😉. That won't affect the benchmarks.
* I will use one of the latest versions of Python. I start with Python 3.8 and upgrade when the new **stable** version is released (so no beta or release candidates). Just by updating the Python version, both the "slow" and "fast" code will often run faster. But there is no way that a code example that was "slow" in one Python version will suddenly be "fast" in another.
* To ensure that the benchmarks were affected by some process "cutting in," I run them a few times interchangeably ("slow" function, "fast" function, "slow" function, "fast" function, etc.). If they return similar results, I assume that my benchmarks are fine.
* I will generally avoid code constructs that improve the speed but sacrifice the readability (so no "replace your Python code with C" advice 😜). Inlining code instead of using functions usually makes it faster, but it turns your programs into blobs of incomprehensible code. And, in most cases, **readability of your code is much more important than its speed**! I might mention some interesting tips that can be used in specific situations, but I will say explicitly if that's a code that I would use or not.

## Code conventions

Code that starts with `>>>` symbols is executed in an interactive Python shell (REPL). Next line contains the the output of a given command:

```python
>>> 1 + 1
2
>>> print('hello')
hello
```

Code that starts with `$` is executed in shell and results are printed in the next line (or lines):

```shell
$ python -m timeit -s "variable = 'hello'" "isinstance(variable, str)"
5000000 loops, best of 5: 72.8 nsec per loop
```

Code that doesn’t start with any of those is just a standard Python code. Usually, at the top of the file, I put a comment specifying its filename (it will be used when I import modules during the benchmarking):

```python
# my_file.py
def hello():
    return "Hello world!"
```

## Frequently Asked Questions

### *"What's the point of these small improvements? Those changes don't matter!"*

That’s a very good point. If we take all the code improvements together and apply it to a random Python project, the speed improvement will probably be a fraction of a speed boost that we would get by simply using a much faster computer. Does in mean we can write sloppy code and get away with it? Probably, but if you are reading those words, the chances are that **you care about the code that you write**. And, like me, you want to learn how to write better code - faster, cleaner, and simpler. So let me show you some ways how our code can be improved without sacrificing its readability.

Every time I'm coding, I keep thinking: *"how can I make it better?"*. I have to stop comparing different code patterns because I could easily waste a few hours every day doing just that. Luckily, at some point, you get a feeling of what will work better. In general, more *"Pythonic"* solutions will often be faster, so if you come to Python from a different programming language, you might need to adjust the way you write or think about the code.

The whole point of these articles is to learn something new. So if you know any cool tricks to improve Python code, I would love to take them for a spin and share with others! Just leave a comment, drop me [an email](/about#contact), or message me on [Twitter](https://twitter.com/SebaWitowski).

### *"If function A is 25% faster, then function B is 25% slower, right?"*

One of the hardest things in this series is to figure out what’s the least confusing way of saying how much something is faster/slower than something else. It’s easy to get confused about the difference between "faster than" and "as fast as." Does "1.0x faster" actually means "twice as fast" or "identical as"? How do you calculate the percentage for the time difference? Do you compare the difference between two values to the baseline [like here](https://math.stackexchange.com/questions/1227389/what-is-the-difference-between-faster-by-factor-and-faster-by-percent), or do you divide one value by the other [like here](https://stackoverflow.com/questions/31506554/is-70-ms-14-or-12-faster-than-80-ms)? Can something actually be [200% faster than something else](https://math.stackexchange.com/questions/1404234/what-does-200-faster-mean-how-can-something-be-more-than-100-faster)? And can we even say that *"something is x times slower than something else"* ([not really](https://timesless.com/), because ["one time less equals zero"](http://www.theslot.com/times.html))?

After going through a bunch of StackOverflow, *MathOverflow* ([1](https://math.stackexchange.com/questions/1227389/what-is-the-difference-between-faster-by-factor-and-faster-by-percent), [2](https://math.stackexchange.com/questions/186730/calculate-x-slower-faster)), *EnglishOverflow* ([1](https://english.stackexchange.com/questions/91241/meaning-of-x-is-35-times-less-than-y)) and even some [reddit](https://www.reddit.com/r/learnmath/comments/26f670/percentages_calculating_a_is_faster_than_b_by_c/) or [Hacker News](https://news.ycombinator.com/item?id=11203745) questions, I was just more confused. But luckily, we have Wikipedia explaining how we do [percentage increase/decrease](https://en.wikipedia.org/wiki/Percentage#Percentage_increase_and_decrease) and how we calculate [speedup in execution times](https://en.wikipedia.org/wiki/Speedup).

As you can see, calculating how many % something is **faster** is the most confusing. If the initial value is 100%, then the "faster" function can only be up to 100% faster because "faster" means a decrease in time, and we can’t decrease time by more than the initial 100%.

On the other hand, something can be slower by 10%, 100% or 1000% and we can calculate that easily. Take a look at this example. If a "slow" function takes 10 seconds and "fast" function takes 2 seconds, we can say that:

* "slow" function is 5 times **as slow as** "fast" function: 10s / 2s = 5
* "slow" function is 4 times **slower** than the "fast" function: (10s - 2s) / 2s = 4
* "slow function is 500% as slow as the "fast" function: 10s/2s * 100%
* "slow function is 400% slower than the "fast" function: (10s-2s) / 2s * 100 (alternatively, we can use "10s/2s * 100% - initial 100%" formula)

If I want to say that something is faster, I will avoid using a percentage value and use the speedup instead. The speedup can be defined as "improvement in speed of execution of a task." For example, if a "slow function" takes 2.25s and "fast function" takes 1.50s, we can say that the "fast function" has a 1.5x speedup (2.25 / 1.50 = 1.5).

#### Conventions that you can expect

* If function A takes 10s and function B takes 15s, I will usually say that "function B is 50% slower".
* If function A takes 10s and function B takes 30s, I will usually say that "function B is 3 times as slow as A" or that "function B has 3x speedup over the function A".

I hope this makes my calculations clear. In the end, even if I use some incorrect wording or if you think that percentage/speedup should be calculated differently, I provide the raw numbers of each comparison, so everyone can make their own calculations as they like.

### *"This one function can be improved even more!"*

Great, please tell me how! Almost every code can be improved, and there is a huge chance that you might know something that I didn’t think of. I’m always happy to hear how I can improve my code.

## Additional resources

Inspiration for the articles comes from my daily work and various parts of the internet, like the StackOverflow questions, PEPs (Python Enhancement Proposals), etc.

If you are looking for more articles about Python best practices, check out the following resources:

* [The Little Book of Python Anti-Patterns](https://docs.quantifiedcode.com/python-anti-patterns/index.html) - a free little online book with common Python anti-patterns and how to fix them. It was last updated in 2018, and some tips are specific to Python 2, but I still recommend it to any new Python programmer.
* *This list will be updated in the future.*

<!-- Number vs. repeat: https://stackoverflow.com/questions/48258008/n-and-r-arguments-to-ipythons-timeit-magic/59543135#59543135 -->
