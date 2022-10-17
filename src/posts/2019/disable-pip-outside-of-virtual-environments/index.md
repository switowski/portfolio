---
title: Disable pip Outside of Virtual Environments
description: How to stop pip from running outside of a virtual environment and messing up your dependencies?
tags: ["Python"]
similar:
    - easy-speedup-wins-with-numba
    - ipython-debugging
    - ipython-autoreload
date: 2019-11-28
---

## Python packages everywhere

I'm a huge fan of virtual environments in Python. They are a convenient way to manage dependencies if you are working on more than one Python project at a time. Well, they are the *only* way to manage dependencies between projects. In the JavaScript world, if you run `npm install` it will create a local folder with all the packages and use it in your project (falling back to global packages if a dependency is missing). In Python, all your packages are installed in the same place. And if you want to install a different version of a package, the previous one will be uninstalled:

```bash
$ pip install pygments==2.2
Collecting pygments==2.2
  Using cached https://files.pythonhosted.org(...).whl
Installing collected packages: pygments
  Found existing installation: Pygments 2.4.2
    Uninstalling Pygments-2.4.2:
      Successfully uninstalled Pygments-2.4.2
Successfully installed pygments-2.2.0
```

The best you can do in this situation is to install packages into your user directory (with `pip install --user`), but that doesn't really solve the problem.

Plenty of tools have been created to solve the dependencies management problem. From the most popular ones like the [pipenv](https://pipenv.kennethreitz.org/en/latest/) or [poetry](https://poetry.eustace.io/) to less popular like [hatch](https://github.com/ofek/hatch) (I have yet to meet someone using it) or [dephell](https://github.com/dephell/dephell) (that I have heard about at one of the Python conferences). Still, most of the people I know use the same setup as I do - the virtualenv package (with an optional wrapper like [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) or [virtualenv burrito](https://github.com/brainsik/virtualenv-burrito)). For a long time I didn't even know that since Python 3.3, the virtualenv is baked into Python through the [venv module](https://docs.python.org/3/library/venv.html). You can create virtual environments without any external tools by simply running `python3 -m venv`.

There is even a [PEP 582](https://www.python.org/dev/peps/pep-0582/) suggesting to use local packages directory (à la `node_modules`). So the landscape of Python dependencies managers might change in the future.

::: callout-info
I can talk for hours about how to set up the most efficient workflow for Python. In fact, I did - at PyCon 2020! Check out [my tutorial](https://www.youtube.com/watch?v=WkUBx3g2QfQ) on how to set up a Python development environment, which tools to use, and finally - how to make a TODO application from scratch (with tests and documentation).

[{% postImage "pycon.jpg", "PyCon 2020 video" %}](https://www.youtube.com/watch?v=WkUBx3g2QfQ)
:::

In my current setup, I'm using `virtualenv` with [virtualfish](https://github.com/excitedleigh/virtualfish). I've used `virtualenvwrapper` and I enjoyed being able to just run `workon name-of-environment` instead of looking where the `activate` script is placed. `virtualfish` is like `virtualenvwrapper`, but it adds even more short commands like `vf ls` or `vf cd` (as for a programmer, I really don't like typing).

And, especially at the beginning, I kept forgetting to activate the virtual environment before I cheerfully ran `pip install a-package`. Or even worse: `pip install -r requirements.txt`. Which cluttered my *global* pip directory with one more package (or hundreds of them in case of `requirements.txt` file). What's even worse, sometimes it also uninstalled the previous versions of packages. So other projects that I was building stopped working. And if you have the same package installed in a virtual env and globally - it can get messy sometimes.

There had to be a better way!

## Make sure that pip only runs in a virtual environment

So one day I said *"That's it! There has to be a way to at least get a warning that pip is running outside of a virtual environment!"*. It turns out that of course there is a way. And it's even built-in into pip! You can set the **PIP_REQUIRE_VIRTUALENV** environment variable to `true` and pip will never run outside of a virtual env! Simply add `export PIP_REQUIRE_VIRTUALENV=true` to your .bashrc or .zshrc (or `set -gx PIP_REQUIRE_VIRTUALENV true` in `config.fish` if you use fish shell). Now, each time you try to run pip outside of a virtual env, it will simply refuse to do so:

```bash
$ pip install requests
ERROR: Could not find an activated virtualenv (required).
```

If you want to actually install something **outside** of a virtual environment, you can temporarily clear that env variable: `env PIP_REQUIRE_VIRTUALENV='' pip install request`. Why would you ever want to do that? For example, to install the great [pipx](https://github.com/pipxproject/pipx) tool that lets you further isolate your command line Python packages.

You can also create a bash command to install pip packages that ignores this setting:

```bash
gpip() {
  PIP_REQUIRE_VIRTUALENV="" pip "$@"
}
```

Now I no longer have to worry about installing dependencies outside of a virtual environment!

Photo by Tim Evans on [Unsplash](https://unsplash.com/photos/Uf-c4u1usFQ)
