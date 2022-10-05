---
title: IPython Extensions Guide
description: What are IPython extensions, how to install them, and how to write and publish your own extension?
tags: ['Python', 'IPython']
similar:
  - creating-magic-functions-part1
  - ipython-debugging
  - ipython-autoreload
date: 2019-10-15
---

Modifying IPython is very easy. Need to execute some code at the startup? Add it to the [startup directory]({% postUrl "ipython-startup-files" %}). Need to change the caching behavior, exceptions verbosity level or the color theme? Open the `.ipython_config.py` file and modify everything there. But if you switch to a different computer, you will have to do all the changes again. Or maybe your colleague asks you how to customize his IPython, so it will look *"as cool as yours"*. There is a better way than asking him to modify some configurations files. You can share your modifications as an extension!

## What are IPython extensions?

IPython extensions are a great way to solve both problems. Any configuration change can be turned into an extension and shared with others (or simply installed on your second computer). Also, the magic functions that you create can be turned into extensions. Think of extensions as IPython **plugins** - you can write them yourself or install them from PyPI and, after you enable them, they will modify the behavior of IPython or add some new features.

You can keep the extensions for yourself, by storing them in the `~/.ipython/extensions` folder or publish them on PyPI. In this article, I will show you how to install an existing extension and how to write and publish your own.

## How to use IPython extensions?

To use an extension, you first need to load it with `%load_ext` command. IPython comes with [2 extensions](https://ipython.readthedocs.io/en/stable/config/extensions/#extensions-bundled-with-ipython) bundled by default: `%autoreload` and `%storemagic`. There were more in the past, but they were moved to different packages. `%autoreload`, described in [another post]({% postUrl "ipython-autoreload" %}), can be used to automatically reload imported modules before executing code. It can be a helpful tool when writing a module. `%storemagic` is loaded by default and it lets you store variables, macros, and aliases in the SQLite database that comes with IPython. IPython doesn't store those objects between sessions, so unless you want to write and read your variables from a file, using the `%storemagic` is your best option to preserve and reuse them.

To enable an extension, you just need one command:

```python
%load_ext my_extension
```

Extensions can have different effects:

* Some will work immediately. For example, those that modify the IPython configuration.
* Others need to be turned on first. For example, the `%autoreload` extension by default doesn't do anything. You need to turn on auto-reloading by running `%autoreload 1` or `%autoreload 2`.
* And some will add new features to IPython, for example, new magic functions.

## Installing extensions from PyPI

Let's see how we can extend the functionality of IPython by adding some new extensions. There are two good ones that I'm using for profiling Python code: **line_profiler** and **memory_profiler**. The first one can be used to generate a line-by-line report about the execution time of your code (when you want to pinpoint which line of your code is slow). The second works similar, but this time it shows you a memory usage of your application.

Let's install the line_profiler:

```bash
pip install line_profiler
```

Now we can use this profiler in IPython:

```python
%load_ext line_profiler
```

Loading the extension will add the `%lprun` magic function. To use it, we need to provide the names of the functions/modules that we want to profile and then a statement that we want to run.

Let's say we have some slow code that we want to check. I will use the following, pretty useless code, as an example:

```python
def crunch_numbers():
    result = 0
    for x in range(1000):
        result += a_function(x)
        result += b_function(x)
    return result


def a_function(number):
    return number * number


def b_function(number):
    result = 0
    for i in range(number):
        result += i + 5
        if i % 10:
            result += 100 * i
    return result
```

We can use our newly installed extension to profile this script:

```python
In [1]: from slow_module import crunch_numbers, a_function, b_function

In [2]: %load_ext line_profiler

In [3]: %lprun -f a_function -f b_function crunch_numbers()
Timer unit: 1e-06 s

Total time: 0.000503 s
File: /Users/switowski/workspace/slow_module.py
Function: a_function at line 9

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
     9                                           def a_function(number):
    10      1000        503.0      0.5    100.0      return number * number

Total time: 0.698784 s
File: /Users/switowski/workspace/slow_module.py
Function: b_function at line 13

Line #      Hits         Time  Per Hit   % Time  Line Contents
==============================================================
    13                                           def b_function(number):
    14      1000        412.0      0.4      0.1      result = 0
    15    500500     159589.0      0.3     22.8      for i in range(number):
    16    499500     191225.0      0.4     27.4          result += i + 5
    17    499500     169746.0      0.3     24.3          if i % 10:
    18    449100     177483.0      0.4     25.4              result += 100 * i
    19      1000        329.0      0.3      0.0      return result
```

The output from the `%lprun` command will give you detailed information about each line of the function that you specified. You can see how many times this line was executed, what was the total time and "per hit" time, and what percentage of the total time spent in this function was spent on that particular line. If you think there is a problem with a particular line, line_profiler will also show you in which file this function is located, so you don't have to search for it.

In my case, you can see that the whole script was rather fast - it took around 0.6 seconds to finish. Most of the time was spent running this instruction: `result += i + 5` on line 16 of `slow_module.py` file, inside the `b_function` function.

If you want to look for more IPython extensions, there are 2 good places to find them:

* [IPython Extensions Index](https://github.com/ipython/ipython/wiki/Extensions-Index) - a wiki page in IPython's GitHub repository that contains a huge list of available extensions. All the entries here are manually curated. Some of them might be outdated, and they won't work anymore since the IPython's API for extensions has changed between major versions. But it's a great place to search for a specific extension, as each entry has a short description of what it's supposed to do. If you find an extension that you want to use and it fails to install or load, try to copy and paste the code of the extension into IPython - it might work that way. And if it does, try turning this code into an extension and submit a Pull Request to update the original version (more on how to create your own extensions below).
* [Framework::IPython filter on PyPI](https://pypi.org/search/?c=Framework+::+IPython) - sharing extensions on PyPI is now the recommended way. It makes installing extensions much easier. But sometimes the extensions are not properly tagged, so you might also find some by searching for "IPython" or "IPython magic" on PyPI.

## Writing an extension

If you can't find an extension that you like, writing your own is very easy. All you need to do is:

* Create a file with `load_ipython_extension` function. This function will be called when you run `%load_ext my_extension`. Inside this function, you should put all the code that you want to make available after your extension is loaded. For example, if your extension is creating a magic function, put this magic function here.
* [*Optional*] If you want to be able to **unload** your extension, you can add the `unload_ipython_extension` function as well. Loading an extension turns it on and unloading - turns it off. It doesn't make sense to unload an extension that adds new magic functions unless you want to disable them for some reason. But it can be useful if your extension is altering the behavior of IPython. For example, if you have an extension that automatically measures the execution of each command that you run, and at some point, you want to get rid of this behavior, you can unload it.
* Finally, you need to save the file in a place where IPython can access it. There is a folder inside the `.ipython` config directory called `extensions` where you can store your extensions.

Let's say we want to write an extension that will add a new magic function to IPython. Here is all the code that we need:

```python
from IPython.core.magic import register_line_magic


def load_ipython_extension(ipython):
    @register_line_magic("reverse")
    def lmagic(line):
        "Line magic that reverses any string that is passed"
        return line[::-1]
```

The `register_line_magic` function will turn our `lmagic` function into IPython's magic function. Keep in mind that `load_ipython_extension` has a specific signature that you need to use - it should accept `ipython` argument. If you don't provide this argument, your extension won't work.

Save this code inside the `~/.ipython/extensions/reverser.py` file. The name of the file that you use will be the name of your extension in IPython. You can rename it if you don't like the name `reverser`, but remember to pass this new name to the `%load_ext` function.

Now, we can load and test our extension in IPython:

```bash
In [1]: %load_ext reverser
Loading extensions from ~/.ipython/extensions is deprecated.
We recommend managing extensions like any other Python packages, in site-packages.

In [2]: %reverse hello world!
Out[2]: '!dlrow olleh'
```

Great, it works! If we add the `unload_ipython_extension`, we could also run the `%unload_ext reverser`, but it doesn't make much sense for an extension that is creating a magic function.

So this is how you can write your own IPython extensions. You might be wondering - what's with this deprecation warning that we saw when we imported our extension:

*Loading extensions from ~/.ipython/extensions is deprecated. We recommend managing extensions like any other Python packages, in site-packages.*

Does it mean that we did something wrong by putting our extension in the `extensions` folder? Don't worry, it's the correct folder. This deprecation warning is a suggestion that you should share your extension with others by publishing in on PyPI. If you think that your extension can be useful to others, you should definitely do this! I don't think that my reverser is, but for the illustration purpose, I'm going to publish it anyway 😉.

## Publishing extension on PyPI

To publish my extension, I need to turn it into a Python package. There are many great tutorials on how to create Python packages. But to keep my example simple, I will just do the **absolutely necessary** steps to create a Python package by following the guidelines from the [Python Packaging Authority](https://packaging.python.org/tutorials/packaging-projects/). So please, don't take this article as an example of how to create Python packages 😅.

Here is the structure of the package:

```bash
ipython-reverser/
├── LICENSE
├── README.rst
├── ipython_reverser
│   └── __init__.py
└── setup.py
```

And here is what's inside each of the files:

* `LICENSE` - this is an optional file, but it's a good practice to specify a license for each of your projects. If you don't add a license, [no one can actually use it](https://opensource.stackexchange.com/questions/1720/what-can-i-assume-if-a-publicly-published-project-has-no-license#targetText=Generally%20speaking%2C%20the%20absence%20of,not%20be%20what%20you%20intend.)! So don't think that projects without a license are free to copy and reuse!
* `README.rst` - another optional file, but it's good to explain what this project does. The content of this file will be displayed on GitHub.
* `setup.py` containing the following code:

    ```python
    # setup.py
    from setuptools import setup

    setup(
        name="IPythonReverser",
        version="0.1",
        packages=["ipython_reverser"],
        license="MIT",
        author="Sebastian Witowski",
        author_email="sebastian@switowski.com",
        url="http://www.github.com/switowski/ipython-reverser",
        description="IPython magic to reverse a string",
        long_description=open("README.rst").read(),
        keywords="ipython reverser reverse",
        install_requires = ['ipython'],
        classifiers=[
            "Development Status :: 3 - Alpha",
            "Intended Audience :: Developers",
            "Framework :: IPython",
            "Programming Language :: Python",
            "Topic :: Utilities",
        ],
    )
    ```

* `ipython_reverser/__init__.py` - in older versions of Python (before Python 3.3), you had to have an `__init__.py` file in each of the subdirectories of your package. Without it, you wouldn't be able to import functions from the subdirectories. In the newer versions of Python, they are [no longer necessary](https://stackoverflow.com/questions/448271/what-is-init-py-for/448311), but there is a benefit of using them - if you create such a file, it will be automatically executed when you import a module. So, I'm putting the code of my extension inside:

    ```python
    # ipython_reverser/__init__.py
    from IPython.core.magic import register_line_magic


    def load_ipython_extension(ipython):
        @register_line_magic("reverse")
        def lmagic(line):
            "Line magic to reverse a string"
            return line[::-1]
    ```

You can find the source code of the package on [GitHub](https://github.com/switowski/ipython-reverser).

### Generating the package

Now, I need to install some tools that I will use in the next step (if you are using a virtual environment, you can skip the `python3 -m` part of the following commands):

```bash
python3 -m pip install --user --upgrade setuptools wheel
```

Next, I generate the distribution package:

```bash
python3 setup.py sdist bdist_wheel
```

This will create the package inside the `dist/` directory.

To publish my package to PyPI, I need to install yet another tool called [twine](https://github.com/pypa/twine):

```bash
python3 -m pip install --user --upgrade twine
```

::: callout-info
[OPTIONAL STEP] If it's the first time you are publishing a package to PyPI, you can do a test run and publish it to [TestPyPI](https://packaging.python.org/guides/using-testpypi). That way you can check if everything is working, without affecting the real PyPI. To publish your package to PyPI, run the following command:

```bash
python3 -m twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```

The first time you interact with twine, it will ask you for your username and password. So make sure to [create an account](https://pypi.org/account/register/) on PyPI.
To install a package from TestPyPI, you need to pass `--index-url` parameter to pip:

```bash
python3 -m pip install --index-url https://test.pypi.org/simple/ --no-deps your-package
```

:::

Finally, I can publish the package to PyPI with the following command:

```bash
python3 -m twine upload dist/*
```

Twine will ask you for your username and password, and then you should see a progress bar indicating that everything worked fine.

Now, anyone can install my IPythonReverser package using pip:

```bash
python3 -m pip install IPythonReverser
```

and use it in IPython:

```python
In [1]: %load_ext ipython_reverser

In [2]: %reverse 'hello world from PyPI!'
Out[2]: "'!IPyP morf dlrow olleh'"
```

One thing to remember - this time we have to use the **name of the module** when we load our extension. So we use `%load_ext ipython_reverser` instead of `%load_ext reverser`.

## Conclusions

Extensions are one of the most powerful features of IPython. They are very easy to create and to publish on PyPI, so if you come up with a great extension (something more useful than reversing strings), make sure you share it!

&nbsp;

Image from: [Unsplash](https://unsplash.com/photos/5siQcvSxCP8)
