---
title: f-strings
categories: ["Python", "Writing Faster Python"]
---

One of the most well-received features introduced in Python 3.6 was the f-strings formatting. Unlike with the walrus operator (introduced in Python 3.8), it's hard to find someone who doesn't love the f-strings. Officially named "literal string interpolation", f-strings are much more readable and faster to write. And if you come from a language like JavaScript, you will feel like home using them, because they work the same like the [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) introduced in ES6.

If you follow the landscape of string formatting in Python (and I don't blame you if you don't 😉), you probably noticed that this brings us a total of **four different ways** to format strings. Why so many? Let's quickly review all of them.

## The "old" style of string formatting with % operator

```python
name = "Sebastian"

# The standard "old" style
>>> "Hello %s" % name
"Hello Sebastian"

# Or a more verbose way (perfect when you pass multiple variables)
>>> "Hello %(name)s" % {"name": name}
"Hello Sebastian"
```

This was the default style of string formatting in Python. It's sometimes also called *printf-style formatting* or *%-formatting*. It worked fine but it was quite limited. You could only format strings, integers or doubles (floats or decimal numbers), and for each variable you had to specify a "conversion type" (see list of conversion types [in the documentation](https://docs.python.org/3/library/string.html#format-specification-mini-language)). If a variable could not be converted to a specific type - you got an error. If you wanted to pass more arguments inside a tuple, but you forgot to write your code in a specific way - you got an error too:

```python
fullname = ('Sebastian', 'Witowski')

# This fails
>>> "Hello %s" % fullname
TypeError: not all arguments converted during string formatting

# This works
>>> "Hello %s" % (fullname,)
"Hello ('Sebastian', 'Witowski')"
```

## Template strings

In Python 2.4 a "template strings" formatting was introduced with [PEP 292](https://www.python.org/dev/peps/pep-0292/). It was introduced as a way to solve some shortcomings of the "old" style - template strings were supposed to be simpler and less error-prone.

With template strings, you first create a template and then you substitute placeholders with variables:

```python
>>> from string import Template
>>> s = Template("Hello ${first} ${last}")
>>> s.substitute(first="Sebastian", last="Witowski")
"Hello Sebastian Witowski"
>>> s.substitute(first="John", last="Doe")
"Hello John Doe"
```

When you call the `substitute` method, it returns a new string with all the placeholders (`${placeholder_name}`) replaced with correct values. If you forget a mapping for any of the placeholders, you will get a `KeyError`:

```python
>>> s.substitute(first="Sebastian")
KeyError: 'last'
```

## The "new" style with str.format()

In Python 3, a "new" style of formatting was introduced (and later it was back-ported to Python 2.7) with [PEP 3101](https://www.python.org/dev/peps/pep-3101/). This new style was simply the `format()` function added to the `str` type. Since it was a function call, there was no difference in how you write your code, no matter if you want to display a string, a tuple:

```python
name = "Sebastian"
fullname = ('Sebastian', 'Witowski')

>>> "Hello {}".format(name)
"Hello Sebastian"
>>> "Hello {}".format(fullname)
"Hello ('Sebastian', 'Witowski')"

# You can name your arguments:
>>> "Hello {first} {last}".format({"first": "Sebastian", "last": "Witowski"})
"Hello Sebastian Witowski"
# ... or use indexes or arguments
>>> "Hello {1} {0}".format("Sebastian", "Witowski")
"Hello Witowski Sebastian"
```

Similarly to the old style, you could also pass the conversion types or some additional flags. For example, if you wanted to convert argument to an integer and pad it to four digits, you could write it like that:

```python
>>> "The answer is: {answer:04d}".format(answer=42)
"The answer is: 0042"
```

The new style of formatting is much more robust, but it's a bit more verbose. Even for the simplest situation, you always have to write the ".format". And why do we have to append what we want to print at the very end of a string? Why can we just put this variable or an expression exactly where it belongs in a string?

So, similarly to what exist in other programming languages, the f-strings or the *"literal string interpolation"* was introduced in Python 3.6.

## f-strings (literal string interpolation)

The latest way of formatting strings in Python is the most convenient to use. Just prefix a string with a letter 'f' (thus the name "f-strings") and whatever code you put inside curly braces, gets evaluated. It can be a variable or any kind of a Python expression:

```python
name = Sebastian

>>> "Hello {name}"
"Hello {name}" # Nothing happens because we forgot the 'f'!

>>> f"Hello {name}"
"Hello Sebastian"

>>> f"The answer is {40+2}"
"The answer is 42"

import datetime
>>> f"Current year: {datetime.datetime.now():%Y}"
"Current year: 2020"
```




<!-- So we have four ways of doing string formatting in Python. No one them is going to be removed from Python anytime soon, but also I don't think there will be any new way added. So whichever you prefer the most, you can stick with it. -->


## Conclusions

If you want to learn more about the "old style" vs. the "new style", there is a great website called [pyformat.info](https://pyformat.info/) that shows what can be done with each style.


## TODO:

* replace curly quotes (‘ , ’, “, ”)with straight quotes (https://typographyforlawyers.com/straight-and-curly-quotes.html)
* Add {% include "components/WFPIntro.md" %} (if applies)
* change filename (and date)
  * make sure no other file is referencing this one by filename (update it if needed!)
* capitalize title
* update title
* update categories
* update summary and description
* find hero image
* change the featured-img, image
* remove "published: false"

