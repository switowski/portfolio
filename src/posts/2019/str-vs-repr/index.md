---
title: __str__ vs. __repr__
description: How to easily remember the difference between __str__ and __repr__ functions in Python?
tags: ['Python']
similar:
  - type-vs-isinstance
  - ask-for-permission-or-look-before-you-leap
  - checking-for-true-or-false
date: 2019-01-25
---

Every now and then, when I go back to writing Python code after a break, a question comes to mind:

> *What message should I put into the \_\_str\_\_ and the \_\_repr\_\_ functions?*

When you search for the difference between them, you will find out that `__str__` should be **human readable** and `__repr__` should be **unambiguous** (as explained in [this StackOverflow question](https://stackoverflow.com/questions/1436703/difference-between-str-and-repr)). It's a great, detailed answer. But for some reason, it never really stuck with me. I'm not the smartest developer and sometimes to remember something, I need a very simple example. What I actually found helpful was written straight in the [documentation of the *repr()*](https://docs.python.org/3/library/functions.html#repr) function:

> *For many types, this function makes an attempt to return a string that would yield an object with the same value when passed to eval()*

An excellent example of what it means, is the `datetime` module:

```python
>>> import datetime
>>> now = datetime.datetime.now()
>>> str(now)
'2019-01-21 19:26:40.820153'
>>> repr(now)
'datetime.datetime(2019, 1, 21, 19, 26, 40, 820153)'
```

As you can see, the `repr` function returns a string that can be used to create an object with **the same properties** as `now` (not **the same** as `now`, but with **the same properties**). You can verify it by using the following code:

```python
>>> timestamp = datetime.datetime(2019, 1, 21, 19, 26, 40, 820153)
>>> now == timestamp
True
# But!
>>> id(now) == id(timestamp)
False
```

So how can you use it in your own classes? For instance, if you are writing a class `Car` that has the attributes `color` and `brand` and is initialized in the following way:

```python
red_volvo = Car(brand='volvo', color='red')
```

then this is what the `__repr__` function for the car should return:

```python
>>> repr(red_volvo)
"Car(brand='volvo', color='red')"
```

It's not always possible to write the `__repr__` function that can recreate a given object, but simply keeping in mind those examples with `datetime` and `Car` has helped me to remember the difference between the `__repr__` and `__str__`.

I found out about this trick in "[Python Tricks](https://www.google.com/search?q=Python+Tricks:+A+Buffet+of+Awesome+Python+Features)" book, by Dan Bader. If you haven't heard of it, it's a great source of intermediate-level pieces of knowledge about Python. I'm in no way associated with Dan, but his book was one of the most enjoyable Python technical reads I've had in a long time.

<!-- 
Update:
By default __str__ relies on __repr__, so if you were to implement only one, go with __repr__.
 -->
