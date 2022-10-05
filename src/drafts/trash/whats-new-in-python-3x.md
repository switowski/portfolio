---
title: What's new in Python 3.x
description: Cheat sheet of new features in each release of Python 3.
categories: IPython
---

## TODO:

* replace curly quotes (‘ , ’, “, ”)with straight quotes (https://typographyforlawyers.com/straight-and-curly-quotes.html)
* change filename (and date)
  * make sure no other file is referencing this one by filename (update it if needed!)
* capitalize title
* update title
* update categories
* update summary and description
* find hero image
* change the featured-img, image
* remove "published: false"
* add EOL for each version

<!-- https://github.com/jugmac00/python-version-cheat-sheet/blob/master/README.md  -->

This is a cheat sheet listing important features added in every Python 3.x version. It's like the ["What's New in Python"](https://docs.python.org/3/whatsnew/index.html) page of the official documentation, but it contains all the features on one page.

I work with different Python versions all the time. You would think that by now I should memorize which version lets me use f-strings or where I can relay on dictionaries being ordered. Nope, I still struggle with that. So I've decided to make myself a cheat sheet where I can quickly look for that information. This list will be updated with each new version of Python, when it comes out.

This is not an exhaustive list. I only mention things that I found interesting and relevant to my work. Also, if you have never read the "What's New in Python" part of the official documentation - go check it out. It's very detailed but at the same time it's written in a an accessible way, so it's easy to read. Whenever a new version of Python comes out, you only hear about the most popular features, like new syntax. But "What's New" contains much more information and I found a lot of things that I didn't know about before.

## What's new in Python 3.8

### Assignment expressions ("the walrus operator"):

```python
if (n := len(a)) > 10:
    print(f"List is too long ({n} elements, expected <= 10)")
```
See: [python-docs](https://docs.python.org/3/whatsnew/3.8.html#assignment-expressions) and [PEP-572](https://www.python.org/dev/peps/pep-0572/)

### Positional only arguments (indicated with `/`)

```python
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)
```
See: [python-docs](https://docs.python.org/3/whatsnew/3.8.html#positional-only-parameters) and [PEP-570](https://www.python.org/dev/peps/pep-0570/)

### Other

* `continue` statement can now be used in `finally` clause [python-docs](https://docs.python.org/3/whatsnew/3.8.html#other-language-changes)
* f-strings support `=` for self-documenting expressions and debugging ([python-docs](https://docs.python.org/3/whatsnew/3.8.html#f-strings-support-for-self-documenting-expressions-and-debugging)):

    ```python
    user = "Sebastian"
    >>> f"Current {user=}"
    "Current user='Sebastian'"
    ```
* `bool`, `int`, and `fractions.Fraction` types now have an `as_integer_ratio()` method (like `float` and `decimal.Decimal` have)
* Parallel filesystem cache for compiled bytecode files (`PYTHONPYCACHEPREFIX`) - in case you don't want to use the default `__pycache__` subdirectory [python-docs](https://docs.python.org/3/whatsnew/3.8.html#parallel-filesystem-cache-for-compiled-bytecode-files)
* Debug build uses the same ABI (Application Binary Interface) as release build [python-docs](https://docs.python.org/3/whatsnew/3.8.html#debug-build-uses-the-same-abi-as-release-build)
* [PEP-578](https://www.python.org/dev/peps/pep-0578/) adds Audit Hook and Verified Open Hook [python-docs](https://docs.python.org/3/whatsnew/3.8.html#positional-only-parameters) 
* [PEP-587](https://www.python.org/dev/peps/pep-0587/) adds a new C API to configure Python initialization [python-docs](https://docs.python.org/3/whatsnew/3.8.html#pep-587-python-initialization-configuration) 
* [PEP-590](https://www.python.org/dev/peps/pep-0590/) adds the "vectorcall" - a fast calling protocol for CPython (it will be fully public in Python 3.9) [python-docs](https://docs.python.org/3/whatsnew/3.8.html#vectorcall-a-fast-calling-protocol-for-cpython) 
* [PEP-574](https://www.python.org/dev/peps/pep-0574/) adds pickle protocol 5 with out-of-band data buffers that optimize transfer between Python processes [python-docs](https://docs.python.org/3/whatsnew/3.8.html#pickle-protocol-5-with-out-of-band-data-buffers) 



## What's new in Python 3.7

### Built-in `breakpoint()`

You can now use `breakpoint()` to insert breakpoint. It will call `import pdb; pdb.set_trace()`, but you can change its behavior by setting the `PYTHONBREAKPOINT` environment variable.

See: [python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-553-built-in-breakpoint) and [PEP-553](https://www.python.org/dev/peps/pep-0553/)


### Postponed Evaluation of Annotations (optional)

Before, annotations were resolved at compilation time. This caused two issues:

* You couldn't use a name that was not in the current scope as the annotation source. In other words - if a class "A" was referencing class "B" that was below in a given file, you would get an error (see code below)
* It had negative impact on the startup time

Now a new behavior can be enabled with the following import:

```python
from __future__ import annotations
```

It will store annotations as strings and evaluated at runtime. This makes the following code valid:

```python
class C:
    @classmethod
    def from_string(cls, source: str) -> C:
        ...

    def validate_b(self, obj: B) -> bool:
        ...

class B:
    ...
```

This will be the default behavior in Python 4.0.

See: [python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-563-postponed-evaluation-of-annotations) and [PEP-563](https://www.python.org/dev/peps/pep-0563)

### Legacy C Locale Coercion

"7-bit ASCII" text encoding is now coerced to an available UTF-8 based locale.

See: [python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-538-legacy-c-locale-coercion) and [PEP-538](https://www.python.org/dev/peps/pep-0538/)

### Forced UTF-8 Runtime Mode

With the new `-X utf8` command line option and `PYTHONUTF8` environment variable, you can now enable CPython *"UTF-8 mode"*. This mode ignores locale settings and uses UTF-8 encoding by default.

See: [python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-540-forced-utf-8-runtime-mode) and [PEP-540](https://www.python.org/dev/peps/pep-0540/)

### Other

* New C API for Thread-Local Storage ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-539-new-c-api-for-thread-local-storage) and [PEP-539](https://www.python.org/dev/peps/pep-0539/))
* Customization of Access to Module Attributes - you can now write a `__getattr__()` for modules ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-562-customization-of-access-to-module-attributes) and [PEP-562](https://www.python.org/dev/peps/pep-0562/))
* New Time Functions With Nanosecond Resolution - `time` module now has functions that use nanoseconds ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-564-new-time-functions-with-nanosecond-resolution) and [PEP-564](https://www.python.org/dev/peps/pep-0564/))
* Show DeprecationWarning in `__main__` - `DeprecationWarning` warnings triggered by the code running in the `__main__` module are now displayed ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-565-show-deprecationwarning-in-main) and [PEP-565](https://www.python.org/dev/peps/pep-0565/))
* Core Support for typing module and Generic Types - adds new functions to the core CPython interpreter that improve the `typing` module ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-560-core-support-for-typing-module-and-generic-types) and [PEP-560](https://www.python.org/dev/peps/pep-0560/))
* Hash-based .pyc Files - adds an option to include the hash of the source file in the .pyc header instead of just the timestamp; helps with the invalidation ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-552-hash-based-pyc-files) and [PEP-552](https://www.python.org/dev/peps/pep-0552/))
* Python Documentation Translations - adds new translations to Python documentation ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#pep-545-python-documentation-translations) and [PEP-545](https://www.python.org/dev/peps/pep-0545/))
* Development Runtime Mode: `-X dev` - when enabled, CPython performs [additional checks](https://docs.python.org/3/using/cmdline.html#id5) at runtime ([python-docs](https://docs.python.org/3/whatsnew/3.7.html#development-runtime-mode-x-dev)
* An `await` expression and comprehensions containing an `async for` clause can now be used in formatted string literals
* More than 255 arguments can now be passed to a function, and a function can now have more than 255 parameters


See: [python-docs]() and [PEP-XXX](https://www.python.org/dev/peps/pep-0XXX/)
See: [python-docs]() and [PEP-XXX](https://www.python.org/dev/peps/pep-0XXX/)
See: [python-docs]() and [PEP-XXX](https://www.python.org/dev/peps/pep-0XXX/)
See: [python-docs]() and [PEP-XXX](https://www.python.org/dev/peps/pep-0XXX/)
See: [python-docs]() and [PEP-XXX](https://www.python.org/dev/peps/pep-0XXX/)


## What's new in Python 3.6
## What's new in Python 3.5
## What's new in Python 3.4
## What's new in Python 3.3

