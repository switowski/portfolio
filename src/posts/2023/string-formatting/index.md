---
title: String Formatting
description: With four different ways of formatting strings in Python 3.6 and above, it's time to look at which one is the fastest.
tags: ["Python", "Writing Faster Python"]
date: 2023-03-02
---

One of the most well-received features introduced in Python 3.6 were the f-strings. Unlike the walrus operator (introduced in Python 3.8), f-strings quickly became popular - it's hard to find someone who doesn't love them! Officially named *literal string interpolation*, f-strings are much more readable and faster to write. And if you come from a language like JavaScript, you will feel at home using them because they work the same as [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) introduced in ES6.

If you follow the landscape of string formatting in Python, you've probably already noticed that this brings us a total of **four different ways** to format strings. Why do we need so many? Let’s quickly review them and find out.

## The *old* style of string formatting with the % operator

```python
name = "Sebastian"

# The standard "old" style
>>> "Hello %s" % name
"Hello Sebastian"

# Or a more verbose way (useful when you pass multiple variables)
>>> "Hello %(name)s" % {"name": name}
"Hello Sebastian"
```

This formatting style is sometimes called *printf-style* formatting or *%-formatting*. It used to be Python's default string formatting style and worked pretty fine. However, it was quite limited - you could only format strings, integers, or doubles (floats or decimal numbers). Each variable was converted to a string by default unless you specified a different output format (e.g., integers could be presented in a binary, octal, decimal, or hex format). If a variable could not be converted to a specific type, you got an error. If you wanted to pass more arguments inside a tuple, but you forgot to write your code in a specific way, you got an error too:

```python
fullname = ('Sebastian', 'Witowski')

# This fails
>>> "Hello %s" % fullname
TypeError: not all arguments converted during string formatting

# This works
>>> "Hello %s" % (fullname,)
"Hello ('Sebastian', 'Witowski')"
```

There is one interesting *feature* of the *old* style formatting that the other methods don't have. It allows you to do some "[lazy logging](https://stackoverflow.com/a/52012660)" by only evaluating the string formatting expression when needed. If you write your logging statement like this: `log.debug("Some message: a=%s", a)`, and your logging module is configured **not** to log out the debug messages, `a` will never be converted to a string. If for some reason, `a` takes very long to convert to a string, this might save you some time. But honestly, I can't think of any example of when this might happen. So think of this as a curiosity.

## Template strings

In Python 2.4, [PEP 292](https://www.python.org/dev/peps/pep-0292/) introduced the *template strings* formatting. It was added to solve some shortcomings of the *old* style - template strings were supposed to be simpler and less error-prone.

With template strings, you first create a template, and then you substitute placeholders with variables:

```python
>>> from string import Template
>>> s = Template("Hello ${first} ${last}")
>>> s.substitute(first="Sebastian", last="Witowski")
"Hello Sebastian Witowski"
>>> s.substitute(first="John", last="Doe")
"Hello John Doe"
```

When you call the `substitute` method, it returns a new string with all the placeholders (`${placeholder_name}`) replaced with the specified values. If you forget a mapping for any of the placeholders, you will get a `KeyError`:

```python
>>> s.substitute(first="Sebastian")
KeyError: 'last'
```

## The *new* style with str.format()

In Python 3, a *new* formatting style was introduced with [PEP 3101](https://www.python.org/dev/peps/pep-3101/) (and later, it was backported to Python 2.7). This new style was simply the `format()` function added to the `str` type. Since `format()` was a function call, there was no difference in how you would write your code, no matter if you wanted to format a string or a tuple:

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
# ...or use positions of arguments
>>> "Hello {1} {0}".format("Sebastian", "Witowski")
"Hello Witowski Sebastian"
```

Similarly to the *old* style, you could specify the presentation format and pass some additional flags. For example, if you wanted to print an integer and pad it to four digits, you could write it like this:

```python
>>> "The answer is: {answer:04d}".format(answer=42)
"The answer is: 0042"
```

The *new* formatting style is much more robust but also a bit more verbose. Even for the simplest situation, you always have to write the `.format`. And why do we have to repeat ourselves by typing "answer" twice in the above example? Why can't we just tell Python: "Listen, I have this `answer` variable already defined. Just take it and put it inside this string"?

So, similarly to what exists in other programming languages, *literal string interpolation* was introduced in Python 3.6 with [PEP 498](https://peps.python.org/pep-0498/).

## f-strings (*literal string interpolation*)

The newest way of formatting strings in Python is the most convenient one to use. Just prefix a string with the letter "f" (thus the name "f-strings"), and whatever code you put inside the curly brackets gets evaluated. It can be a variable or any kind of Python expression:

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
"Current year: 2023"
```

## Which string formatting method is the fastest?

Let's prepare some test functions to see which method is the fastest one.

```python
# string_formatting.py

from string import Template

FIRST = "Sebastian"
LAST = "Witowski"
AGE = 33


def old_style():
    return "Hello %s %s (%i)" % (FIRST, LAST, AGE)


def template_strings():
    return Template("Hello ${first} ${last} (${age})").substitute(first=FIRST, last=LAST, age=AGE)


def new_style():
    return "Hello {} {} ({})".format(FIRST, LAST, AGE)


def f_strings():
    return f"Hello {FIRST} {LAST} ({AGE})"
```

Here are the benchmark results:

```bash
$ python -m timeit -s "from string_formatting import old_style" "old_style()"
2000000 loops, best of 5: 165 nsec per loop

$ python -m timeit -s "from string_formatting import template_strings" "template_strings()"
200000 loops, best of 5: 1.49 usec per loop

$ python -m timeit -s "from string_formatting import new_style" "new_style()"
1000000 loops, best of 5: 200 nsec per loop

$ python -m timeit -s "from string_formatting import f_strings" "f_strings()"
2000000 loops, best of 5: 118 nsec per loop
```

f-strings are the fastest way of formatting a string. The *new* string formatting style is around 70% slower (200/118≈1.69), the *old* style is around 40% slower (165/118≈1.40), and template strings are over ten times slower (1490/118≈12.63).

:::callout-warning

Someone could argue that in the `old_style()` function, I'm referencing some global variables, which is not always necessary. Sometimes you might want to pass the variables directly:

```python
def old_style_inline():
    return "Hello %s %s (%i)" % ("Sebastian", "Witowski", 33)
```

But even in this case, while slightly faster, the *old* style doesn't beat the f-strings.

```bash
$ python -m timeit -s "from string_formatting import old_style_inline" "old_style_inline()"
2000000 loops, best of 5: 149 nsec per loop
```

:::

## Conclusions

Even if f-strings were slower than other formatting styles, I would still keep using them. They are so incredibly convenient that it's hard to justify using other ways of string formatting.

But still, let's try to find use cases for the other methods:

* Template strings, as the name suggests, are great when you're writing a template where readability and reusability are more important than performance. Imagine building a large block of text with multiple variables you want to fill in later. You might even want to apply different variables to the same template. This is the perfect use case for template strings. However, this formatting style doesn't make sense for creating small strings. Template strings are slower by an order of magnitude (compared to f-strings), take longer to write and read (the `template_strings()` example has over twice as many characters as the `f_strings()` equivalent), and don't have any benefit over the f-strings.
* The *new* style is a bit slower but much more flexible and error-proof compared to the *old* style. If I couldn't use f-strings, I would choose this option.
* Using the *old* style string formatting is really hard to justify. Of course, if I were to use some ancient Python version (even lower than Python 2.7), this would be my only viable option. The only other scenario where I would choose the old style is formatting a simple string with one variable using a Python version lower than 3.6.

In any other scenario, when the f-strings are available, I would choose them.

Of course, we only looked at formatting strings, that is, putting variables or expressions into a string. However, there are a lot more ways to construct a string. You can add strings together (`"answer is " + "42"`), join a list (`"".join(['answer', ' is', ' 42']`)), or probably come up with some even more creative solution. But creating strings effectively is a story for another article.

## Further reading

If you want to learn more about the *old* style vs. the *new* style, there is a great website called [pyformat.info](https://pyformat.info/) that shows what can be done with each style.
