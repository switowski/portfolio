---
title: type() vs. isinstance()
description: What's the difference between type() and isinstance() methods, and which one is better for checking the type of an object?
tags: ["Python", "Writing Faster Python"]
date: 2020-10-15
---

Python is a dynamically typed language. A variable, initially created as a string, can be later reassigned to an integer or a float. And the interpreter won't complain:

```python
name = "Sebastian"
# Dynamically typed language lets you do this:
name = 42
name = None
name = Exception()
```

It's quite common to see code that checks variable's type. Maybe you want to accept both a single element and a list of items and act differently in each case. That's what the [SMTP.sendmail() from the smtplib](https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.sendmail) does. It checks if the `recipient` is a string or a list of strings and sends one or more emails.

{% include "components/WFPIntro.md" %}

To check the type of a variable, you can use either [type()](https://docs.python.org/3/library/functions.html#type) or [isinstance()](https://docs.python.org/3/library/functions.html#isinstance) built-in function. Let's see them in action:

```python
>>> variable = "hello"
>>> type(variable) is str
True
>>> isinstance(variable, str)
True
```

Let's compare both methods' performance:

```shell
$ python -m timeit -s "variable = 'hello'" "type(variable) is str"
5000000 loops, best of 5: 52.1 nsec per loop

$ python -m timeit -s "variable = 'hello'" "isinstance(variable, str)"
10000000 loops, best of 5: 35.5 nsec per loop
```

`type` is around 40% slower (52.1/35.5≈1.47).

We could use `type(variable) == str` instead, but it's a bad idea. `==` should be used when you want to check the value of a variable. We would use it to see if the value of `variable` is equal to `"hello"`. But when we want to check if `variable` **is** a string, `is` operator is more appropriate. For a more detailed explanation of when to use one or the other, check [this article]({% postUrl "checking-for-true-or-false" %}).

:::callout-info
**Python 3.11 update**

In Python 3.11, the difference between the two above code snippets becomes almost negligible:

```shell
# Python 3.11.0

$ python -m timeit -s "variable = 'hello'" "type(variable) is str"
20000000 loops, best of 5: 12.3 nsec per loop

$ python -m timeit -s "variable = 'hello'" "isinstance(variable, str)"
20000000 loops, best of 5: 12.7 nsec per loop
```

That's around a 3% difference. But the following recommendations are still valid no matter which version of Python you are using.
:::

## Difference between `isinstance` and `type`

Speed is not the only difference between these two functions. There is actually an important distinction between how they work:

* `type` only returns the type of an object (its class). We can use it to check if `variable` is of a type `str`.
* `isinstance` checks if a given object (first parameter) is:
  * an instance of a class specified as a second parameter. For example, is `variable` an instance of the `str` class?
  * or an instance of **a subclass** of a class specified as a second parameter. In other words - is `variable` an instance of a subclass of `str`?

What does it mean in practice? Let's say we want to have a custom class that acts like a list but has some additional methods. So we might subclass the `list` type and add custom functions inside:

```python
class MyAwesomeList(list):
    # Add additional functions here
```

But now the `type` and `isinstance` return different results if we compare this new class to a list!

```python
>>> my_list = MyAwesomeList()
>>> type(my_list) is list
False
>>> isinstance(my_list, list)
True
```

We get different results because `isinstance` checks if `my_list` is an instance of `list` (it's not) or a subclass of `list` (it is, because `MyAwesomeList` is a subclass of `list`). If you forget about this difference, it can lead to some subtle bugs in your code.

::: callout-success

### A better way to create a custom list-like class

If you really need to create a custom class that behaves like a list but has some additional features, check out the [collections](https://docs.python.org/3/library/collections.html) module. It contains classes like `UserList`, `UserString`, or `UserDictionary`. They are specifically designed to be subclassed when you want to create something that acts like a list, string, or a dictionary. If you try to subclass the `list` class, you might quickly fall into a rabbit hole of patching and reimplementing the existing methods just to make your subclass work as expected. Trey Hunner as a good article explaining this problem called ["The problem with inheriting from dict and list in Python"](https://treyhunner.com/2019/04/why-you-shouldnt-inherit-from-list-and-dict-in-python/).
:::

## Conclusions

`isinstance` is usually the preferred way to compare types. It's not only faster but also considers inheritance, which is often the desired behavior. In Python, you usually want to check if a given object behaves like a string or a list, not necessarily if **it's exactly a string**. So instead of checking for string and all it's custom subclasses, you can just use `isinstance`.

On the other hand, when you want to explicitly check that a given variable is of a specific type (and not its subclass) - use `type`. And when you use it, use it like this: `type(var) is some_type` not like this: `type(var) == some_type`.

And before you start checking types of your variables everywhere throughout your code, check out why ["Asking for Forgiveness" might be a better way]({% postUrl "ask-for-permission-or-look-before-you-leap" %}).
