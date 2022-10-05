---
title: Ordered Dictionaries
description: Dictionaries in the latest Python versions preserve the insertion order. So, is there any reason to use the OrderedDict as we used to do in the past?
tags: ["Python", "Writing Faster Python"]
date: 2020-09-10
---

If you worked with Python 2 or an early version of Python 3, you probably remember that, in the past, dictionaries were not ordered. If you wanted to have a dictionary that preserved the insertion order, the go-to solution was to use [OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict) from the collections module.

In Python 3.6, dictionaries were redesigned to improve their performance (their memory usage was decreased by around 20-25%). This change had an interesting side-effect - **dictionaries became ordered** (although this order was [not officially guaranteed](https://docs.python.org/3/whatsnew/3.6.html#whatsnew36-compactdict)). "Not officially guaranteed" means that it was just an implementation detail that could be removed in the future Python releases.

But starting from Python 3.7, the insertion-order preservation has been guaranteed in the language specification. If you started your journey with Python 3.7 or a newer version, you probably don't know the world where you need a separate data structure to preserve the insertion order in a dictionary.

So if there is no need to use the OrderedDict, why is it still included in the collections module? Maybe it's more efficient? Let's find out!

## OrderedDict vs dict

For my benchmarks, I will perform some typical dictionary operations:

1. Create a dictionary of 100 elements
1. Add a new item
1. Check if an item exists in a dictionary
1. Grab an existing and nonexistent item with the `get` method

To simplify the code, I wrap steps 2-4 in a function that accepts a dictionary (or OrderedDictionary) as an argument.

```python
# dictionaries.py

from collections import OrderedDict

def perform_operations(dictionary):
    dictionary[200] = 'goodbye'
    is_50_included = 50 in dictionary
    item_20 = dictionary.get(20)
    nonexistent_item = dictionary.get('a')

def ordereddict():
    dictionary = OrderedDict.fromkeys(range(100), 'hello world')
    perform_operations(dictionary)

def standard_dict():
    dictionary = dict.fromkeys(range(100), 'hello world')
    perform_operations(dictionary)
```

Let's compare both functions. I run my benchmarks under **Python 3.8** (check out my testing setup in the [Introduction]({% postUrl "writing-faster-python-intro" %}) article):

```shell
$ python -m timeit -s "from dictionaries import ordereddict" "ordereddict()"
50000 loops, best of 5: 8.6 usec per loop

$ python -m timeit -s "from dictionaries import standard_dict" "standard_dict()"
50000 loops, best of 5: 4.7 usec per loop
```

OrderedDict is over 80% slower than the standard Python dictionary (8.6/4.7≈1.83).

What happens if the dictionary size grows to 10 000 elements?

```python
# dictionaries2.py

from collections import OrderedDict

def perform_operations(dictionary):
    dictionary[20000] = 'goodbye'
    is_5000_included = 5000 in dictionary
    item_2000 = dictionary.get(2000)
    nonexistent_item = dictionary.get('a')

def ordereddict():
    dictionary = OrderedDict.fromkeys(range(10000), 'hello world')
    perform_operations(dictionary)

def standard_dict():
    dictionary = dict.fromkeys(range(10000), 'hello world')
    perform_operations(dictionary)
```

```shell
$ python -m timeit -s "from dictionaries import ordereddict" "ordereddict()"
200 loops, best of 5: 1.07 msec per loop

$ python -m timeit -s "from dictionaries import standard_dict" "standard_dict()"
500 loops, best of 5: 547 usec per loop
```

After increasing the dictionary size by 100x times, the difference between both functions stays the same. OrderedDict still takes almost twice as long to perform the same operations as a standard Python dictionary.

There is no point in testing even bigger dictionaries. If you need a really big dictionary, you should use more efficient data structures from the Numpy or Pandas libraries.

## When to use OrderedDict?

If the OrderedDict is slower, why would you want to use it? I can think of at least two reasons:

* You are still using a Python version that doesn't guarantee the order in dictionaries (pre 3.6). In this case, you don't have a choice.
* You want to use additional features that OrderedDict offers. For example, it can be reversed. If you try to run [reversed()](https://docs.python.org/3/library/functions.html#reversed) function on a standard dictionary, you will get an error, but OrderedDict will nicely return a reversed version of itself.
* You actually care about the **ordering when comparing dictionaries**. As pointed out by Ned Batchelder in his ["Ordered dict surprises"](https://nedbatchelder.com/blog/202010/ordered_dict_surprises.html) article, when you compare two dictionaries with the same items, but in a different order, Python reports them as equal. But if you compare two OrderedDict objects with the same items in a different order, they are not equal. See this example:
    ```python
    >>> d1 = {'a':1, 'b':2}
    >>> d2 = {'b':2, 'a':1}
    >>> d1 == d2
    True

    >>> ord_d1 = OrderedDict(a=1, b=2)
    >>> ord_d2 = OrderedDict(b=2, a=1)
    >>> ord_d1 == ord_d2
    False
    ```

## How to stay up to date on Python changes?

If you are using one of the latest versions of Python, dictionaries are ordered by default. But it's easy to miss changes like this, especially if you upgrade Python version by a few releases at once, and you don't read the release notes carefully. I usually read some blog posts when there is a new version of Python coming out (there are plenty of blog posts around that time), so I catch the essential updates.

The best source of information is the official documentation. Unlike a lot of documentation that I have seen in my life, the ["What's New in Python 3"](https://docs.python.org/3/whatsnew/index.html) page is written in a very approachable language. It's easy to read and grasp the most significant changes. If you haven't done it yet, go check it out. I reread it a few days ago, and I was surprised how many features I forgot about!
