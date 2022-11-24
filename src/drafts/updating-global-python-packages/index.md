---
title: Updating Global Python Packages
description: How to update all global Python packages after you update Python version?
tags: ['Python', 'pipx']
---

I'm pretty happy with my setup for local Python development using pyenv, virtualfish, and pipx.

{% postImage "my_setup.jpg", "My current setup for Python development" %}

As I explained [here]({% postUrl "pyenv" %}), I use [pyenv](https://github.com/pyenv/pyenv) to quickly install different versions of Python and switch between them.

I use [virtualfish](https://github.com/justinmayer/virtualfish) to manage virtual environments - that's because I use [fish shell](https://fishshell.com/). When I was still using bash and Z shell, I used [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/), which works basically in the same way. Why am I not using the `venv` module that comes directly with Python? virtualfish is much faster to use ("workon some-virtual-env" instead of "source path-to-your-project/.venv/bin/activate") and comes with additional features, like the temporary virtual environments. Also, sometimes I create virtual environments that are not connected to any specific project, so I don't have to wonder where to store them (virtualfish stores all virtual environments in the `~/.virtualenvs` folder). For example, I have a "test" virtual environment to quickly install and test some random Python packages. Temporary virtual environments would be a much better choice here, but the muscle memory of running "workon test" is much stronger than my common sense.

To install packages globally, I use [pipx](https://github.com/pipxproject/pipx). Why do I even install things globally if it's much safer to install them inside virtual environments? Some tools have to work outside of any project. For example, I want to run [black](https://github.com/psf/black) or [flake8](https://flake8.pycqa.org/en/latest/) on single Python files that are not connected to any specific project. [cookiecutter](https://github.com/cookiecutter/cookiecutter) has to be used **before** starting a project - so there is no virtual environment I can use because there is no project yet.

But the more global packages I install, the higher the chance for **dependencies conflict**. If two packages require different versions of the same dependency, one will break because the other will install an incompatible version of that dependency. This problem can be incredibly frustrating but very easy to fix - just use pipx. pipx installs all the global packages in separate virtual environments, but at the same time, they act as if they were installed normally with pip. You don't have to activate or deactivate anything to use them.

The above setup works great for me on a Macbook and should work equally well on Linux. If I were using Windows, I would probably replace most of those tools with conda (if I wanted one tool to manage everything) or install Windows Subsystem for Linux ([WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)) and use the Linux tools.

Currently, I have only one package installed outside of any virtual environment and outside of pipx - the pipx itself (plus its dependencies). That makes my setup almost bulletproof when I update Python versions. Almost.

## Updating Python breaks global packages

Everything works nicely until I update Python. Updating Python is exciting - we get new features and some [performance improvements]({% postUrl "upgrade-your-python-version" %}). But at the same time, things can break. Usually, when I update Python, my global packages break. Or rather, that one global package I have, breaks:

```bash
$ pyenv global 3.11.0

$ pipx list
pyenv: pipx: command not found

The `pipx' command exists in these Python versions:
  3.10.7
```

After changing the global Python version, `pipx` command stopped working. pyenv is actually very helpful, and instead of saying "command not found," it tells me that pipx was installed but using an older Python version.

Luckily, since this is just one package, fixing this problem is easy. All I need to do is to run `pip install pipx`. Yes, this will install pipx again and I will have two (or more) different versions  - one for each version of Python. But that's fine, pipx doesn't take that much space. And don't try to uninstall pipx from the previous version of Python! This can actually break packages installed with pipx!

::: callout-success
**Another option is to install pipx using Homebrew.**

I wrote the draft of this article on my old laptop. But a few months ago, when reinstalling everything on a new MacBook, I decided to install pipx using Homebrew. The main benefit of this approach is that now pipx is completely independent from the current Python version set by pyenv. No matter what's my current Python version, pipx still works, using whatever Python version Homebrew provided during the installation. Plus, now I really have 0 packages installed globally outside of pip (`pip freeze` returns nothing on my laptop).

Unfortunately, if you're on Windows or Linux, you probably still have to use pip to install pipx (at least according to [the documentation](https://pypa.github.io/pipx/installation/)). This isn't really that much of a problem, so I decided to not change the whole article but just mention Homebrew as an option here.
:::

Global packages installed with pipx handle the change of the Python version very well. No matter what version I'm currently using, they will use whatever Python version they were installed with. Let's say you used Python 3.8.6 to install a bunch of Python packages:

```bash
$ pipx list
venvs are in /Users/switowski/.local/pipx/venvs
apps are exposed on your $PATH at /Users/switowski/.local/bin
   package black 20.8b1, Python 3.8.6
    - black
    - black-primer
    - blackd
   package cookiecutter 1.7.2, Python 3.8.6
    - cookiecutter
   package flake8 3.8.4, Python 3.8.6
    - flake8
   package glances 3.1.5, Python 3.8.6
    - glances
   package ipython 7.19.0, Python 3.8.6
    - iptest
    - iptest3
    - ipython
    - ipython3
   package poetry 1.1.4, Python 3.8.6
    - poetry
```

As long as Python 3.8.6 is installed on your computer, all those packages will keep working. It doesn't matter if you are now using Python 2.7 or 3.9. Pipx doesn't care.

## Reinstalling pipx packages

If you used some very old Python version to install pipx, you need to upgrade it at some point. That is - uninstall all the pipx packages and reinstall them using the newer Python version. Luckily, you don't have to reinstall them one by one. There is a command called `pipx reinstall-all` that will reinstall all pipx packages using the **current** Python version:

```bash
$ pipx reinstall-all
uninstalled ipython! ✨ 🌟 ✨
  installed package ipython 7.20.0, Python 3.9.0
  These apps are now globally available
    - iptest
    - iptest3
    - ipython
    - ipython3
done! ✨ 🌟 ✨
uninstalled cookiecutter! ✨ 🌟 ✨
  installed package cookiecutter 1.7.2, Python 3.9.0
  These apps are now globally available
    - cookiecutter
done! ✨ 🌟 ✨
uninstalled poetry! ✨ 🌟 ✨
  installed package poetry 1.1.4, Python 3.9.0
  These apps are now globally available
    - poetry
done! ✨ 🌟 ✨
...
```

Now, all the packages are using Python 3.9.0. Keep in mind that this will reinstall packages with the same parameters you provided initially. So if you installed IPython with `pipx install ipython`, then the same command will be executed this time, and pipx will install the latest version of IPython. But if you installed a specific version like `pipx install poetry==1.1.4`, then the same version of poetry will be reinstalled. This is great because it lowers the chance that, suddenly, global packages will start working differently than you expected. If you want to upgrade all your Python packages to their latest versions, just run `pipx upgrade-all`.

## Summary

If you use pyenv + pipx combination and you want to update Python version:

1. Install new Python version (e.g. `pyenv install 3.11.0`)
2. Reinstall pipx (`pip install pipx`)
3. Check that the packages installed with pipx still work. If they don't, run `pipx reinstall-all`.

And you should be ready to go. Keeping as few packages as possible outside of virtual environments and pipx can save you a lot of headaches in the future.

## TODO:

* change filename (and date)
  * make sure no other file is referencing this one by filename (update it if needed!)
* capitalize title (https://capitalizemytitle.com/)
* update title
* update categories
* update summary and description
* find hero image
* change the featured-img, image
* remove "published: false"
