---
title: Automatically Reload Modules with %autoreload
description: Tired of having to reload a module each time you change it? %autoreload to the rescue!
tags: ['Python', 'IPython']
similar:
  - creating-magic-functions-part1
  - ipython-extensions-guide
  - ipython-startup-files
date: 2019-10-01
featured: true
---

Writing my first module in Python was a confusing experience. As it usually happens, when I was testing it in the interactive Python REPL, the first version turned out to have some bugs (the second and third ones also did 😉).

*That's fine* - I thought - *I will just fix the module and reimport it.*

But, to my surprise, calling `from my_module import my_function` didn't update the code! `my_function` still had the bug that I just fixed! I double-checked if I modified the correct file, reimported it again and still nothing. It turns out, as [StackOverflow kindly explained](https://stackoverflow.com/questions/4111640/how-to-reimport-module-to-python-then-code-be-changed-after-import), that you can't just **reimport** a module. If you already imported a module (`import a_module`) or a function (`from a_module import a_function`) in your Python session and you try to import it again, nothing will happen. It doesn't matter if you use the standard Python REPL or IPython.

## How does importing in Python work?

Turns out that, for efficiency reasons, when you import a module in an interactive Python session, Python interpreter does two steps:

1. First, it checks if the module is already cached in the `sys.module` dictionary.
2. And only if it's **not** there, it actually imports the module.

Which means that, if you already imported the module (or imported a different module that references this one) and you try to import it again, Python will ignore this request. You can read more about how importing works in the [documentation](https://docs.python.org/3/reference/import.html).

So, if I can't *reimport* a module, does it mean that I have to restart Python each time? Not really, that would be very inconvenient.

## How to *reimport* a module?

The easiest way is to quit your interactive session and start it again. It works fine if you don't care about preserving the data that you already have in your session, like the functions that you wrote and the variables that you calculated. But usually you don't want to restart the REPL, so there are better ways.

Since we know that the interpreter will first look for the module in the `sys.modules` dictionary, we can just delete our module from this dictionary. And it will work in most cases, but there are some caveats. If your module is referenced from another module, there is a chance that you still won't be able to reimport it. So don't do this. There is a better way.

The recommended solution is to use the `importlib.reload` function. This function is designed exactly for reimporting modules that have already been imported before. To reload your module, you need to run:

```python
import importlib
importlib.reload(my_module)
```

So that's how you can reimport a module in Python. And if you are not using IPython, this is where your options end. But IPython users have some other interesting solutions to this problem.

## %run

If you don't care about actually *"importing"* your module and all you need is to run some functions defined in a file, you can **execute** that file instead. It will run all the commands as if you would copy and paste them in your IPython session. You can rerun a file as many times as you want and it will always update all the functions. Running a file in IPython is extremely easy:

```python
%run my_file.py
# You can even skip the ".py" extension:
%run my_file
```

I cheated a bit when I said that this option is not available in standard Python REPL. It is, but it requires more typing:

```python
exec(open("./my_file.py").read())
```

To be honest, if I had to type all this, I might as well just use the `importlib.reload` instead.

All those options are great, but if you are as bad as me when it comes to writing code and you make a lot of mistakes, then it means a lot of reloading. And typing this `importlib.reload` / `%run` / `exec...` is annoying. Wouldn't it be great if there was a way to automatically reload a module? Well, IPython can actually do that!

## %autoreload to the rescue

Another one of the magic methods in IPython is related to reloading modules. It's called [%autoreload](https://ipython.readthedocs.io/en/stable/config/extensions/autoreload.html). It's not enabled by default, so you have to load it as an extension:

```python
%load_ext autoreload
```

Now, you can turn on auto-reloading:

```python
%autoreload 2
```

And each time you execute some code, IPython will reimport all the modules to make sure that you are using the latest possible versions.

There are 3 configuration options that you can set:

* `%autoreload 0` - disables the auto-reloading. This is the default setting.
* `%autoreload 1` - it will only auto-reload modules that were imported using the `%aimport` function (e.g `%aimport my_module`). It's a good option if you want to specifically auto-reload only a selected module.
* `%autoreload 2` - auto-reload all the modules. Great way to make writing and testing your modules much easier.

Great, any caveats? I found 3 minor ones:

* IPython with %autoreload enabled will be *slightly* slower. IPython is quite smart about what to reload. It will check the modification timestamps of the modules and compare them with the time when they are imported. But this checking (and eventually reimporting of the modified modules) will still take some time. It won't be so slow that you will feel it (unless you have modules that take seconds to import), but it will obviously run faster if you disable the auto-reloading.
* As pointed out in the documentation, %autoreload is not 100% reliable, and there might be some unexpected behaviors. I never noticed any problems, but some reddit users mentioned that it might not work correctly for the more *advanced* modules (with classes, etc.).
* You need to make sure that you don't have syntax errors in your modules when you are running IPython commands. I often start writing some code in a file and, in the middle of the command, I switch to IPython to quickly test something. And when I execute some code in IPython, it will try to reimport the file that I just modified (the one with the half-written command) and throw a SyntaxError. The good thing is - after the error, you will still get the output of the command that you ran. So for me, it's a minor annoyance, not a real problem. You can easily solve it by running two IPython sessions - one for testing the module (with %autoreload enabled) and the other for running some random commands and looking up things in the documentation.

Here is how `%autoreload` works in practice (this video is recorded with [asciinema](http://asciinema.org), and if you watch it on mobile phone, part of the final comment is cut - it says: #without autoreload, we would still see "hello !"):

{% from "macros.njk" import ascii %}
{{ ascii("272905") }}

So if you don't know `%autoreload` yet, give it a try the next time you're working on a module in Python!

&nbsp;

Image from: [Unsplash](https://unsplash.com/photos/bEY5NoCSQ8s)
