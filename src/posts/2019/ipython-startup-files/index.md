---
title: IPython Startup Files
description: How you can automatically run Python scripts when starting IPython and why this can be useful?
tags: ['Python', 'IPython']
similar:
  - lets-write-ipython-extension
  - 25-ipython-tips-for-your-next-advent-of-code
  - ipython-extensions-guide
date: 2019-01-04
---

In [one of the companies](https://home.cern) where I worked, I was a part of a pretty small team of five developers. We had a support rota, so each week, one of us was responsible for handling tickets from users. Apart from requesting new features, users often asked for changes in the system that only admins could do - removing a wrongly submitted comment, replacing a file, editing metadata and so on. Some of those tasks could be done in the browser, but others had to be done by typing commands in [IPython](https://ipython.org). Actually, most of those tasks could be done faster through lPython than in the browser - especially if you had done it before and you'd saved a recipe that you could just copy and paste.

At some point, I noticed that there were two or three commands that I was typing almost every time I started IPython. Those commands were importing functions from various modules. It wasn't a big problem to type them, especially since you can search in IPython history [with *ctrl+r* or with arrows](https://ipython.readthedocs.io/en/stable/interactive/reference.html?#search-command-history). But I wanted a way to automate it.

My first idea was to put those commands in a file and execute that file when starting IPython. As explained [in the documentation](https://ipython.readthedocs.io/en/stable/interactive/reference.html#command-line-usage), you can easily do this:

```bash
ipython -i my_commands.py
```

where `my_commands.py` contains all the commands that I want to run. That was not a bad solution as long as you remembered to start IPython including this file. And I was always forgetting to do that. So I made an alias in my `.bashrc` file that would always start IPython by running the script with my commands:

```bash
alias ipython='ipython -i ~/my_commands.py'
```

This worked pretty well for me until I found out about **IPython startup files**. IPython startup files are located in the following directory: `~/.ipython/profile_default/startup` with a README file explaining that all files with `.py` or `.ipy` extension that you put here will be executed when IPython starts (to be more specific - each time IPython starts *with this profile* - in this case, the *default* profile). This was a great solution! First of all, you can keep all the startup files in the same place instead of trying to remember where you did put them. Second, thanks to the notion of the *profiles*, you can define a new profile just for debugging. This profile will import all the modules and functions that you need for debugging.

Importing modules is not the only way you can use the startup files. You can define some functions there or even create your own [magic functions](https://ipython.readthedocs.io/en/stable/interactive/magics.html).

Here is a short video explaining how a startup file works in IPython:

{% from "macros.njk" import ascii %}
{{ ascii("217923") }}
