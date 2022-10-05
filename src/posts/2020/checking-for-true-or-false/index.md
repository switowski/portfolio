---
title: Checking for True or False
description: How can we compare a variable to True or False, what's the difference between "is" and "==" operators, and what are truthy values?
tags: ["Python", "Writing Faster Python"]
similar:
    - remove-duplicates
    - type-vs-isinstance
    - str-vs-repr
date: 2020-10-01
featured: true
---

How do you check if something is `True` in Python? There are three ways:

* One *"bad"* way: `if variable == True:`
* Another *"bad"* way: `if variable is True:`
* And the good way, recommended even in the [Programming Recommendations of PEP8](https://www.python.org/dev/peps/pep-0008/#programming-recommendations): `if variable:`

The *"bad"* ways are not only frowned upon but also slower. Let's use a simple test:

```shell
$ python -m timeit -s "variable=False" "if variable == True: pass"
10000000 loops, best of 5: 24.9 nsec per loop

$ python -m timeit -s "variable=False" "if variable is True: pass"
10000000 loops, best of 5: 17.4 nsec per loop

$ python -m timeit -s "variable=False" "if variable: pass"
20000000 loops, best of 5: 10.9 nsec per loop
```

Using `is` is around 60% slower than `if variable` (17.4/10.9≈1.596), but using `==` is 120% slower (24.9/10.9≈2.284)! It doesn't matter if the `variable` is actually `True` or `False` - the differences in performance are similar (if the `variable` is `True`, all three scenarios will be slightly slower).

Similarly, we can check if a variable is not `True` using one of the following methods:

* `if variable != True:` (*"bad"*)
* `if variable is not True:` (*"bad"*)
* `if not variable:` (good)

```shell
$ python -m timeit -s "variable=False" "if variable != True: pass"
10000000 loops, best of 5: 26 nsec per loop

$ python -m timeit -s "variable=False" "if variable is not True: pass"
10000000 loops, best of 5: 18.8 nsec per loop

$ python -m timeit -s "variable=False" "if not variable: pass"
20000000 loops, best of 5: 12.4 nsec per loop
```

`if not variable` wins. `is not` is 50% slower (18.8/12.4≈1.516) and `!=` takes twice as long (26/12.4≈2.016).

The `if variable` and `if not variable` versions are faster to execute and faster to read. They are common idioms that you will often see in Python (or other programming languages).

{% include "components/WFPIntro.md" %}

## "truthy" and "falsy"

Why do I keep putting *"bad"* in quotes? That's because the *"bad"* way is not always bad (it's only wrong when you want to compare boolean values, as pointed in PEP8). Sometimes, you intentionally have to use one of those other comparisons.

In Python (and many other languages), there is `True`, and there are *truthy* values. That is, values interpreted as `True` if you run `bool(variable)`. Similarly, there is `False`, and there are *falsy* values (values that return `False` from `bool(variable)`). An empty list (`[]`), string (`""`), dictionary (`{}`), `None` and 0 are all *falsy* but they are not strictly `False`.

Sometimes you need to distinguish between `True`/`False` and *truthy*/*falsy* values. If your code should behave in one way when you pass an empty list, and in another, when you pass `False`, you can't use `if not value`.

Take a look at the following scenario:

```python
def process_orders(orders=None):
    if not orders:
        # There are no orders, return
        return
    else:
        # Process orders
        ...
```

We have a function to process some orders. If there are no orders, we want to return without doing anything. Otherwise, we want to process existing orders.

We assume that if there are no orders, then `orders` parameter is set to `None`. But, if the `orders` is an empty list, we also return without any action! And maybe it's possible to receive an empty list because someone is just updating the billing information of a past order? Or perhaps having an empty list means that there is a bug in the system. We should catch that bug before we fill up the database with empty orders! No matter what's the reason for an empty list, the above code will ignore it. We can fix it by investigating the `orders` parameter more carefully:

```python
def process_orders(orders=None):
    if orders is None:
        # orders is None, return
        return
    elif orders == []:
        # Process empty list of orders
        ...
    elif len(orders) > 0:
        # Process existing orders
        ...
```

The same applies to *truthy* values. If your code should work differently for `True` than for, let's say, value `1`, we can't use `if variable`. We should use `==` to compare the number (`if variable == 1`) and `is` to compare to `True` (`if variable is True`). Sounds confusing? Let's take a look at the difference between `is` and `==`.

### `is` checks the identity, `==` checks the value

The `is` operator compares the identity of objects. If two variables are identical, it means that they point to the same object (the same place in memory). They both have the same ID (that you can check with the [id()](https://docs.python.org/3/library/functions.html#id) function).

The `==` operator compares values. It checks if the value of one variable is equal to the value of some other variable.

Some objects in Python are unique, like `None`, `True` or `False`. Each time you assign a variable to `True`, it points to the same `True` object as other variables assigned to `True`. But each time you create a new list, Python creates a new object:

```python
>>> a = True
>>> b = True
>>> a is b
True
# Variables that are identical are always also equal!
>>> a == b
True

# But
>>> a = [1,2,3]
>>> b = [1,2,3]
>>> a is b
False  # Those lists are two different objects
>>> a == b
True  # Both lists are equal (contain the same elements)
```

It's important to know the difference between `is` and `==`. If you think that they work the same, you might end up with weird bugs in your code:

```python
a = 1
# This will print 'yes'
if a is 1:
    print('yes')

b = 1000
# This won't!
if b is 1000:
    print('yes')
```

In the above example, the first block of code will print "yes," but the second won't. That's because Python performs some tiny optimizations and small integers share the same ID (they point to the same object). Each time you assign `1` to a new variable, it points to the same `1` object. But when you assign `1000` to a variable, it creates a new object. If we use `b == 1000`, then everything will work as expected.

### Conclusions

To sum up:

* To check if a variable is equal to True/False (and you don't have to distinguish between `True`/`False` and *truthy* / *falsy* values), use `if variable` or `if not variable`. It's the simplest and fastest way to do this.
* If you want to check that a variable **is explicitly** True or False (and is not *truthy*/*falsy*), use `is` (`if variable is True`).
* If you want to check if a variable is equal to 0 or if a list is empty, use `if variable == 0` or `if variable == []`.
