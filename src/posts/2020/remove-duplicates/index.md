---
title: Remove Duplicates From a List
description: What's the fastest way to remove duplicates from a list?
tags: ["Python", "Writing Faster Python"]
similar:
    - find-item-in-a-list
    - type-vs-isinstance
    - 25-ipython-tips-for-your-next-advent-of-code
date: 2020-10-22
---

How do we remove duplicates from a list? One way is to go through the original list, pick up unique values, and append them to a new list.

{% include "components/WFPIntro.md" %}

Let's prepare a simple test. I will use the [randrange](https://docs.python.org/3/library/random.html#random.randrange) to generate 1 million random numbers between 0 and 99 (this will guarantee some duplicates):

```python
# duplicates.py

from random import randrange

DUPLICATES = [randrange(100) for _ in range(1_000_000)]
```

::: callout-info

### Throwaway variable

If you are wondering what's this `_` variable - that's a convention used in Python code when you need to declare a variable, but you are not planning to use it (a throwaway variable). In the above code, I want to call `randrange(100)` 1 million times. I can't omit the variable and just write `randrange(100) for range(1_000_000)` - I would get a syntax error. Since I need to specify a variable, I name it `_` to indicate that I won't use it. I could use any other name, but `_` is a common convention.

Keep in mind that in a Python REPL, `_` actually stores the value of the last executed expression. Check out [this StackOverflow answer](https://stackoverflow.com/a/5893186/2707311) for a more detailed explanation.
:::

We have 1 million numbers. Now, let's remove duplicates using a "for loop."

```python
# duplicates.py

def test_for_loop():
    unique = []
    for element in DUPLICATES:
        if element not in unique:
            unique.append(element)
    return unique
```

Since we are operating on a list, you might be tempted to use list comprehension instead:

```python
>>> unique = []
>>> [unique.append(num) for num in DUPLICATES if num not in unique]
```

In general, [this is not a good way to use a list comprehension](https://stackoverflow.com/questions/5753597/is-it-pythonic-to-use-list-comprehensions-for-just-side-effects) because we use it only for the side effects. We don't do anything with the list that we get out of the comprehension. It looks like a nice one-liner (and I might use it in a throwaway code), but:

* It hides the intention of the code. List comprehension creates a list. But in our case, we actually hide a "for loop" inside!
* It's wasteful - we create a list (because list comprehension always creates a list) just to discard it immediately.

I try to avoid using list comprehension just for the side effects. "For loop" is much more explicit about the intentions of my code.

## Remove duplicates with `set()`

There is a much simpler way to remove duplicates - by converting our list to a set. Set, [by definition](https://en.wikipedia.org/wiki/Set_(mathematics)), is a *"collection of distinct (unique) items."* Converting a list to a set automatically removes duplicates. Then you just need to convert this set back to a list:

```python
# duplicates.py

def test_set():
    return list(set(DUPLICATES))
```

Which one is faster?

```shell
$ python -m timeit -s "from duplicates import test_for_loop" "test_for_loop()"
1 loop, best of 5: 634 msec per loop

$ python -m timeit -s "from duplicates import test_set" "test_set()"
20 loops, best of 5: 11 msec per loop
```

Converting our list to a set is over 50 times faster (634/11≈57.63) than using a "for loop." And a hundred times cleaner and easier to read 😉.

::: callout-warning

### Unhashable items

This above method of converting a list to a set only works if a list is **hashable**. So it's fine for strings, numbers, tuples, and any immutable objects. But it won't work for unhashable elements like lists, sets, or dictionaries. So if you have a list of nested lists, your only choice is to use that "bad" for loop. That's why "bad" is in quotes - it's not always bad.

To learn more about the difference between hashable and unhashable objects in Python, check out this StackOverflow question: [What does "hashable" mean in Python?](https://stackoverflow.com/questions/14535730/what-does-hashable-mean-in-python)
:::

## Remove duplicates while preserving the insertion order

There is one problem with sets - they are unordered. When you convert a list to a set, there is no guarantee that it will keep the insertion order. If you need to preserve the original order, you can use [this dictionary trick](https://stackoverflow.com/questions/480214/how-do-you-remove-duplicates-from-a-list-whilst-preserving-order/39835527#39835527):

```python
# duplicates.py

def test_dict():
    return list(dict.fromkeys(DUPLICATES))
```

Here is what the above code does:

* It creates a dictionary using [fromkeys()](https://docs.python.org/3/library/stdtypes.html#dict.fromkeys) method. Each element from `DUPLICATES` is a key with a value of `None`. Dictionaries in Python 3.6 and above are ordered, so the keys are created in the same order as they appeared on the list. Duplicated items from a list are ignored (since dictionaries can't have duplicated keys).
* Then it converts a dictionary to a list - this returns a list of keys. Again, we get those keys in the same order as we inserted into the dictionary in the previous step.

What about the performance?

```shell
$ python -m timeit -s "from duplicates import test_dict" "test_dict()"
20 loops, best of 5: 17.9 msec per loop
```

It's 62% slower than using a set (17.9/11≈1.627), but still over 30 times faster than the "for loop" (634/17.3≈35.419).

The above method only works with Python 3.6 and above. If you are using an older version of Python, replace `dict` with `OrderedDict`:

```python
# duplicates.py
from collections import OrderedDict

def test_ordereddict():
    return list(OrderedDict.fromkeys(DUPLICATES))
```

```shell
$ python -m timeit -s "from duplicates import test_ordereddict" "test_ordereddict()"
10 loops, best of 5: 32.8 msec per loop
```

It's around 3 times as slow as a set (32.8/11≈2.982) and 83% slower than a dictionary (32.8/17.9≈1.832), but it's still much faster than a "for loop" (634/32.8≈19.329). And `OrderedDict` will work with Python 2.7 and any Python 3 version.

## Conclusions

When you need to remove duplicates from a collection of items, the best way to do this is to convert that collection to a set. By definition, the set contains unique items (among other features, like the [constant membership testing time]({% postUrl "membership-testing" %})). This will make your code faster and more readable.

Downsides? Sets are unordered, so if you need to make sure you don't lose the insertion order, you need to use something else. For example - [a dictionary](https://stackoverflow.com/questions/480214/how-do-you-remove-duplicates-from-a-list-whilst-preserving-order/39835527#39835527)!
