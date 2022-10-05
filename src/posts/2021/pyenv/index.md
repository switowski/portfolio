---
title: Python Versions Management With pyenv
description: pyenv is a tool that lets you easily install new Python versions and switch between them.
tags: ['Python', 'Tools']
similar:
  - favorite-cli-tools
  - creating-magic-functions-part1
  - plugins-for-python-in-vscode
date: 2021-02-03
---

Using the latest version of Python is always a good idea. First of all - you get the new features like the f-strings (Python 3.6), ordered dictionaries (officially guaranteed from Python 3.7, but already present in Python 3.6), or the union operator (Python 3.9). But even if you don't use those features, you get plenty of smaller improvements and optimizations. Python is not the language that I would choose when the speed matters, but getting a free speedup here and there only because I updated Python's version is nice to have.

Problems start when you work on multiple projects. Maybe you have one Python project at work and some other side-projects or tutorials you do after work. You can use the same Python version for all of them, but the chances are that the Python version you use at work is not the most recent one. Or rather, it's not even close to the "recent Python version." A lot of projects only update Python when it's absolutely necessary. Or maybe, like me, you have multiple projects at work, and you need to switch between different Python versions.

You could install different Python versions and use the `python3.6`, `python3.7`, `python3.8`, `python3.9` commands. Or maybe even do some crazy setup with symlinks and change what the `python` command points to. But a much better idea is to use a tool called [pyenv](https://github.com/pyenv/pyenv).

## pyenv

[pyenv](https://github.com/pyenv/pyenv)  is a tool for managing Python versions. You can use it to install different Python versions and easily switch between them. Need to use Python 3.9? Run `pyenv global 3.9.0`. Want to use Python 3.6 in a specific folder? Sure, just type `pyenv local 3.6.0`, and you are all set.

What's really cool about pyenv is that it doesn't touch the Python version installed on your computer (the system Python). It installs every new Python version inside a separate folder. Then it modifies the $PATH environment variable and tells your computer to use those Python versions (and not the system Python). That way, even if you mess up something with pyenv, you can just remove it, and you are back to using whatever Python version you had before installing it. Trust me - you will appreciate this separation on the day when you mess up your Python installation while rushing to fix a bug in production .😉

## Installation

When you install pyenv, there are some prerequisites that you need to have. You can check out the [installation instructions](https://github.com/pyenv/pyenv#installation) on GitHub for details, but basically, you need to have all the dependencies for building Python. Otherwise, pyenv won't be able to install any version of Python.

::: callout-info

If you are using Windows, check out [pyenv-win](https://github.com/pyenv/pyenv-installer). It's a port of pyenv to Windows that contains most of its features. It might be missing some of the newest commands, but the most important ones (that I'm showing you here) are present.
:::

You can install pyenv with your package manager, clone it from GitHub or use [pyenv-installer](https://github.com/pyenv/pyenv-installer). I prefer to use pyenv-installer (even though it requires me to pipe a script from the internet right into bash, which is a big security "no-no"). It automates the whole installation process and installs some additional plugins like pyenv-doctor (to check that pyenv works correctly), pyenv-update (for easy updates), or pyenv-virtualenv (for managing virtual environments). After the installation, you just get short instructions on what code you need to put in your profile script (`.bashrc`, `.zshrc`, or `config.fish` - depending on what type of shell you are using).

Once you finish installing it, make sure you follow the post-installation instructions. You will need to add pyenv init command in the correct place (otherwise, pyenv won't work) and install [Python build dependencies](https://github.com/pyenv/pyenv/wiki#suggested-build-environment) (without them, you won't be able to install new Python versions). And you are ready to go!

You can check that pyenv was installed correctly by running `pyenv versions` (if you don't have any error message, then everything is fine). If you used the pyenv-installer script, you can also run `pyenv doctor` command. It will perform some checks and hopefully return a "success" message.

## pyenv in action

With pyenv installed, you basically do two things:

* Install a new Python version (`pyenv install <version-number>`)
* Select that Python version (`pyenv [global|local|shell] <version-number>`) - I will explain that global/local/shell a bit later.

So, which versions of Python we can install? To get a list, run `pyenv install --list`:

```bash
$ pyenv install --list
Available versions:
  2.1.3
  2.2.3
  2.3.7
  ...
  3.9.0
  3.9-dev
  3.10-dev
  activepython-2.7.14
  activepython-3.5.4
  activepython-3.6.0
  anaconda-1.4.0
  anaconda-1.5.0
  anaconda-1.5.1
  ...
  pypy3.6-7.3.0
  pypy3.6-7.3.1-src
  pypy3.6-7.3.1
  pyston-0.5.1
  pyston-0.6.0
  pyston-0.6.1
  stackless-dev
  stackless-2.7-dev
  stackless-2.7.2
  stackless-2.7.3
  stackless-2.7.4
  stackless-2.7.5
  ...
```

This list contains the standard CPython versions (those that have just numbers, like 2.1.3, 3.9.0, etc.) and other distributions like activepython, anaconda, or pypy. If you ever wanted to test different Python distributions, now you can easily do this.

You will also notice that some of the latest versions of Python might be missing. That's because they are added manually, so unless someone creates a pull request that adds them, you have to use an older version. If you want to stay on the bleeding edge and install the latest Python version on the day it was released, then pyenv is not a tool for you. But if you don't mind staying one or two minor versions away from the latest one, you should be good.

Let's say we want to install Python 3.9.0. We run `pyenv install 3.9.0`, and we wait a bit. It can be a slow process (sometimes it takes a few minutes on my computer). To speed it up, make sure you have all the prerequisites installed. For example, if I don't have the `openssl` and `readline` already installed on my macOS, each time I try to install a new Python version, pyenv will first download and set up those two packages. So to save yourself some time, go ahead and install all the [prerequisites](https://github.com/pyenv/pyenv/wiki#suggested-build-environment). Otherwise, just go grab a coffee, and after a few minutes, we should be done.

You can see what versions of Python you have installed with `pyenv versions` command:

```bash
$ pyenv versions
  system
  2.7.18
  3.6.9
  3.8.3
* 3.9.0 (set by /Users/switowski/.pyenv/version)
```

`system` version is the one that comes with my operating system (by default, macOS comes with Python 2.7), and the rest of them were installed using pyenv.

Once you have some other Python versions available, you can switch between them using `pyenv global <version-number>`:

```bash
$ python --version
Python 3.9.0

$ pyenv global 2.7.18

$ python --version
Python 2.7.18

$ pyenv global 3.6.9

$ python --version
Python 3.6.9
```

`pyenv global` changes the global Python version on your computer. In most cases, that's what you want. But there are some other options when you want to switch Python version for a specific case.

## local and shell Python versions

If you have a project that uses a specific version of Python (different from the global version), then each time you want to work on this project, you need to switch Python version and then switch it back when you are done. Luckily, pyenv comes with `pyenv local` command that can help us here:

```bash
$ cd python3.6-project/

$ pyenv local 3.6.9

$ python --version
Python 3.6.9

$ cd ..

$ python --version
Python 3.9.0

```

`pyenv local` changes the Python version only for the **current folder and all the subfolders**. That's exactly what you want for your project - you want to use a different Python version in this folder without changing the global one. `pyenv local` command creates a `.python-version` file in the current directory and puts the version number inside. When pyenv tries to determine what Python version it should use, it will search for that file in the current folder and all the parent folders. If it finds one, it uses the version specified in that file. And if it gets all the way up to your home folder without finding the `.python-version`, it will use the global version.

Let's take it one step further. What if you want to change the Python version only temporarily - just to run a few commands? Maybe you want to see how some command works with different Python versions. Or maybe you really miss the times when `print` was a statement, and you want to feel the nostalgia of Python 2 one more time? That's when you can use the `pyenv shell`:

```bash
$ pyenv shell 2.7.18

$ python --version
Python 2.7.18

$ python -c "print 'Good old times, right?'"
Good old times, right?
```

`pyenv shell` changes the Python version for the current session. You can use a different Python version, but when you close your terminal, it gets back to whatever global or local Python version you were using before.

And that's pretty much how you can use pyenv.

### A quick troubleshooting tip

It can happen that after you install a new Python version, pyenv won't detect it. So when you try to switch to that version, you will get an error message saying that it's not installed. To fix that, either restart your terminal or run `pyenv rehash`.

## asdf-vm

`pyenv` is based on [rbenv](https://github.com/rbenv/rbenv) - a version manager for Ruby that works in the same way. And there are similar tools for other languages: [nodenv](https://github.com/nodenv/nodenv), [goenv](https://github.com/syndbg/goenv), and so on.

If you use many different programming languages, installing and managing all those *env tools can be tedious. Luckily, there is a "one tool to rule them all" called [asdf-vm](https://asdf-vm.com/). Behind this weird name (after I've heard about it, it took me ages to find it back!), we have a program to manage different versions of programming languages or even tools (you can use it to change what version of `CMake`, `ImageMagic`, or `kubectl` you use).

It works similarly to `pyenv`. You first install a plugin (for example, for Python), then you install new versions (version 3.9.0 of Python), and you use a set of commands to select a global/local/shell version. It's a super useful tool, and I recommend it if you're tired of this mess with different versions of different programming languages on your computer.
