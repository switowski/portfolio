---
title: My Favorite CLI Tools
description: 26 CLI tools that I love. And one that is OK.
tags: ['Tools', 'CLI', 'Productivity']
similar:
  - favorite-mac-tools
  - plugins-for-python-in-vscode
  - 25-ipython-tips-for-your-next-advent-of-code
date: 2020-06-18
featured: true
---

Previously, I wrote about [my favorite Mac apps]({% postUrl "favorite-mac-tools" %}). But I spend half of my time in the terminal, and I have a handful of CLI tools that makes my life easier. Here are some of them:

::: callout-info
This is a long list, so here is a table of content with tl;dr summaries:

* [fish shell](#fish-shell) - easy to use, beginner-friendly shell
* [starship](#starship) - a great prompt that requires no setup
* [z](#z) - quickly jump around your filesystem
* [fzf](#fzf) - general-purpose fuzzy search
* [fd](#fd) - like `find` but better
* [ripgrep](#ripgrep) - like `grep` but better
* [htop and glances](#htop-and-glances) - system monitoring tools
* [virtualenv and virtualfish](#virtualenv-and-virtualfish) - Python virtual environment management
* [pyenv, nodenv, and rbenv](#pyenv-nodenv-and-rbenv) - manage different versions of Python, Node, and Ruby
* [pipx](#pipx) - install Python packages in isolated environments
* [ctop and lazydocker](#ctop-and-lazydocker) - monitoring tools for Docker
* [homebrew](#homebrew) - package manager for macOS
* [asciinema](#asciinema) - record your terminal sessions (and let viewers copy code from those recordings)
* [colordiff and diff-so-fancy](#colordiff-and-diff-so-fancy) - like `diff` but with colors
* [tree](#tree-brew-install-tree) - for presenting the content of a folder
* [bat](#bat) - like `cat` but better
* [httpie](#httpie) - like `curl` but better
* [tldr](#tldr) - simplified "man pages"
* [exa](#exa) - like `ls` but better
* [litecli and pgcli](#litecli-and-pgcli) - like `sqlite3` and `psql` but better
* [mas](#mas) - CLI interface for App Store
* [ncdu](#ncdu) - disk usage analyzer

:::

## Tools that I use every day

### [fish shell](https://fishshell.com/)

{% postImage "fish.jpg", "fish shell website" %}

Shell - the most important tool that you use every time you open the terminal. I've used Bash and Z shell in the past, and currently, I'm using fish. It's a great shell with plenty of features out of the box, like the autosuggestions, syntax highlighting, or switching between folders with ⌥+→ and ⌥+←.

On the one hand, this makes it perfect for beginners, because you don't have to set up anything. On the other hand, because it's using a different syntax than other shells, you usually can't just paste scripts from the internet. You either have to change the incompatible commands to [fish scripts](https://fishshell.com/docs/current/index.html#syntax-overview) or start a Bash session to run the bash scripts. I understand the idea behind this change (Bash is not the easiest language to use), but it doesn't benefit me in any way. I write bash/fish scripts too seldom to memorize the syntax, so I always have to relearn it from scratch. And there are fewer resources for fish scripts than for bash scripts. I usually end up reading the documentation, instead of copy-pasting ready-made scripts from StackOverflow.

Do I recommend fish? Yes! Switching shells is easy, so give it a try. Especially if you don't like to tinker with your shell and want to have something that works great with minimal configuration.

#### Fish plugins

You can add more features to fish with plugins. The easiest way to install them is to use a plugin manager like [Fisher](https://github.com/jorgebucaran/fisher), [Oh My Fish](https://github.com/oh-my-fish/oh-my-fish), or [fundle](https://github.com/danhper/fundle).

Right now, I'm using Fisher with just three plugins:

* [franciscolourenco/done](https://github.com/franciscolourenco/done) - sends a notification when a long-running script is done. I don't have a terminal open all the time. I'm using a [Guake style](http://guake-project.org/) terminal that drops down from the top of the screen when I need it and hides when I don't. With this plugin, when I run scripts that take longer than a few seconds, I get a macOS notification when they finish.
* [evanlucas/fish-kubectl-completions](https://github.com/evanlucas/fish-kubectl-completions) - provides autocompletion for kubectl (Kubernetes command line tool).
* [fzf](https://github.com/jethrokuan/fzf) - integrates the fzf tool ([see below](#fzf)) with fish.

I had more plugins in the past (rbenv, pyenv, nodenv, fzf, z), but I switched to different tools to avoid slowing down my shell (a mistake that I did in the past with Z shell).

If you want to see more resources for fish, check out the [awesome-fish](https://github.com/jorgebucaran/awesome-fish) repository. Compared with Z shell and Bash, fish has fewer plugins, so it's not the best option if you want to tweak it a lot. For me - that's a plus. It stops me from enabling too many plugins and then complaining that it's slow 😉.

### [Starship](https://starship.rs/)

{% postImage "starship.jpg", "Starship website" %}

If I had to choose one favorite tool from this whole list - it would be Starship. Starship is a prompt that works for any shell. You install it, add one line of config to your `.bashrc`/`.zshrc`/`config.fish`, and it takes care of the rest.

It shows:

* git status of the current directory and different symbols, depending on if you have new files, pending changes, stashes, etc.
* Python version if you are in a Python project folder (the same applies to Go/Node/Rust/Elm and many other programming languages)
* How long it took the previous command to execute (if it was longer than a few milliseconds)
* Error indicator if the last command failed

{% postImage "starship2.jpg", "Starship prompt in action" %}

And a bazillion other information. But, in a smart way! If you are not in a git repository, it hides the git info. If you are not in a Python project - there is no Python version (because there is no point in displaying it). It never overwhelms you with too much information, and the prompt stays beautiful, useful, and minimalistic.

Did I mention that it's fast? It's written in Rust, and even with so many features, it's still faster than all my previous prompts! I'm very picky about my prompt, so I was usually hacking my own version. I was taking functions from existing prompts and gluing it together to make sure I only have things that I need and it stays fast. That's why I was skeptical about Starship. *"There is no way that an external tool can be faster than my meticulously crafted prompt!*" Well, I was wrong. Give it a try, and I'm sure you are going to love it! Huge kudos to the creators of Starship!

### [z](https://github.com/rupa/z)

{% postImage "z.gif", "z tool in action" %}

"z" lets you quickly jump around your filesystem. It memorizes the folders that you visit, and after a short learning time, you can move between them using `z path_of_the_folder_name`.

For example, if I often go to folder `~/work/src/projects`, I can just run `z pro` and immediately jump there. z's algorithm is based on **frecency** - a combination of **frequency** and **recency** that works very well. If it memorizes a folder that you don't want to use, you can always remove it manually.

It speeds up moving between commonly visited folders on my computer and saves me a lot of keystrokes (and path memorization).

### [fzf](https://github.com/junegunn/fzf)

{% postImage "fzf.jpg", "fzf in action" %}

fzf stands for *"fuzzy finder"*. It's a general-purpose tool that lets you find files, commands in the history, processes, git commits, and more using a **fuzzy search**. You type some letters, and it tries to match those letters anywhere in the list of results. The more letters you type, the more accurate the results are. You probably know this type of search from your code editor - when you use the command to open a file, and you type just part of the file name instead of the full path - that's a fuzzy search.

I use it through the [fish fzf plugin](https://github.com/jethrokuan/fzf), so I can search through command history or quickly open a file. It's another small tool that saves me time every day.

### [fd](https://github.com/sharkdp/fd)

{% postImage "fd.gif", "fd in action", "", "find (left) versus fd (right)" %}

Like the `find` command but much simpler to use, faster, and comes with good default settings.

You want to find a file called "invoice," but you are not sure what extension it has? Or maybe it was a directory that was holding all your invoices, not a single file? You can either roll up your sleeves and start writing those regex patterns for the `find` command or just run `fd invoice`. For me, the choice is easy 😉.

By default, fd ignores files and directories that are hidden or listed in the `.gitignore`. Most of the time - that's what you want, but for those rare cases when I need to disable this feature, I have an alias: `fda='fd -IH'`.

The output is nicely colorized and, [according to the benchmarks](https://github.com/sharkdp/fd#benchmark) (or the GIF above), it's even faster than `find`.

### [ripgrep](https://github.com/BurntSushi/ripgrep)

{% postImage "rg.gif", "ripgrep in action", "", "Poor grep (on the left) was running for ages through all the node_modules before finding something useful" %}

In a similar manner to `fd` mentioned above, `ripgrep` is an alternative to the `grep` command - much faster one, with sane defaults and colorized output.

It skips files ignored by `.gitignore` and hidden ones, so you will probably need this alias: `rga='rg -uuu'`. It disables all smart filtering and makes `ripgrep` behave as standard grep.

### [htop](https://hisham.hm/htop/) and [glances](https://nicolargo.github.io/glances/)

The most common tool to show information about processes running on Linux or Mac is called `top`. It's the best friend of every system administrator. And, even if you are mostly doing web development like me, it's useful to see what's going on with your computer. You know, just to see if it was Docker or Chrome that ate all your RAM this time.

{% postImage "htop.jpg", "htop in action", "", "htop is an excellent alternative for top" %}

`top` is quite basic, so most people switch to [htop](https://hisham.hm/htop/). `htop` is top on steroids - colorful, with plenty of options, and overall more comfortable to use.

{% postImage "glances.jpg", "Glances at a glance ;)", "", "glances gives you a quick overview of your system" %}

[glances](https://nicolargo.github.io/glances/) is a complementary tool to `htop`. Apart from listing all the processes with their CPU and memory usage, it also displays additional information about your system.

You can see:

* network or disks usage
* used and total space on your filesystem
* data from different sensors (like the battery)
* and a list of processes that recently consumed an excessive amount of resources

I still use `htop` for faster filtering and killing processes, but I use `glances` to quickly *glance* at what's going on with my computer. It comes with API, Web UI, and various export formats, so you can take system monitoring to the next level. I highly recommend it!

### [virtualenv](https://pypi.org/project/virtualenv/) and [virtualfish](https://github.com/justinmayer/virtualfish)

{% postImage "virtualenv.jpg", "Virtualenv website" %}

Virtualenv is a tool for creating virtual environments in Python (I like it more than the built-in `venv` module).

VirtualFish is virtual environment manager for the fish shell (if you are not using fish, check out [virtualenvwrapper](https://pypi.org/project/virtualenvwrapper)). It provides a bunch of additional commands to create, list, or delete virtual environments quickly.

### [pyenv](https://github.com/pyenv/pyenv), [nodenv](https://github.com/nodenv/nodenv), and [rbenv](https://github.com/rbenv/rbenv)

{% postImage "pyenv.jpg", "pyenv in action", "", "pyenv makes it easy to switch Python versions" %}

Pyenv, nodenv, and rubyenv are tools for managing different versions of Python, Node, and Ruby on my computer.

Let's say you want to have two versions of Python on your computer. Maybe you are working on two different projects, or you still need to support Python 2. Managing different Python versions is hard. You need to make sure that different projects install packages with the correct version. If you are not careful, it's easy to mess up this fragile setup and overwrite binaries used by other packages.

Version manager helps a lot and turns this nightmare into a pretty manageable task. Good version manager can swap the Python version globally or "per folder". And every version is isolated from others.

I've recently found a tool called [asdf](https://github.com/asdf-vm/asdf) that can replace pyenv, nodenv, rbenv, and other *envs with one tool to rule them all. It provides version management for pretty much [any programming language](https://asdf-vm.com/#/plugins-all?id=plugin-list), and I will definitely give it a try next time I need to set up a version manager for a programming language.

### [pipx](https://github.com/pipxproject/pipx)

{% postImage "pipx.jpg", "pipx logo" %}

Virtualenv solves many problems with package management in Python, but there is one more use case to cover. If I want to install a Python package globally (because it's a standalone tool, like `glances` mentioned before), I have a problem. Installing packages outside of a virtual environment is a bad idea and can lead to problems in the future. On the other hand, if I decide to use a virtual environment, then I need to activate that virtual environment each time I want to run my tool. Not the most convenient solution either.

It turns out that `pipx` tool can solve this problem. It installs Python packages into separate environments (so there is no risk that their dependencies will clash). But, at the same time, CLI commands provided by those tools are available globally. So I don't have to activate anything - `pipx` will do this for me!

::: callout-info
If you want to learn more about Python tools and see how I use them, I've made a video for PyCon 2020 conference called *"Modern Python Developer's Toolkit"*.

[{% postImage "pycon.jpg", "PyCon 2020 video" %}](https://www.youtube.com/watch?v=WkUBx3g2QfQ)

It's a two-hour-long tutorial on how to set up a Python development environment, which tools to use, and finally - how to make a TODO application from scratch (with tests and documentation). You can find [it on YouTube](https://www.youtube.com/watch?v=WkUBx3g2QfQ).
:::

### [ctop](https://github.com/bcicen/ctop) and [lazydocker](https://github.com/jesseduffield/lazydocker)

{% postImage "ctop.gif", "ctop in action", "", "ctop in action (source: https://github.com/bcicen/ctop)" %}

Both of those tools are useful when you are working with Docker. `ctop` is a top-like interface for Docker containers. It gives you:

* A list of running and stopped containers
* Statistics like memory usage, CPU, and an additional detailed window for each container (with open ports and other information)
* A quick menu to stop, kill, or show logs of a given container

It's so much nicer than trying to figure out all this information from `docker ps`.

{% postImage "lazydocker.gif", "lazydocker in action", "", "lazydocker is my favorite Docker tool (source: https://github.com/jesseduffield/lazydocker)" %}

And if you think that `ctop` was cool, wait until you try `lazydocker`! It's a full-fledged terminal UI for managing Docker with even more features. My favorite tool when it comes to Docker!

## Tools that I don't use every day

Apart from the tools that I use almost every day, there are some that I collected over the years and found them particularly useful for specific tasks. There is something to record GIFs from the terminal (that you can pause and copy text from!), list directory structure, connect to databases, etc.

### [Homebrew](https://brew.sh/)

{% postImage "homebrew.jpg", "Homebrew website" %}

Homebrew needs no introduction if you are using a Mac. It's a *de facto* package manager for macOS. It even has a GUI version called [Cakebrew](https://www.cakebrew.com/).

### [asciinema](https://asciinema.org/)

{% postImage "asciinema.jpg", "Asciinema website" %}

`asciinema` is a tool that you can use to record your terminal sessions. But, unlike recording GIFs, it will let your viewers select and copy the code from those recordings!

It's a great help for recording coding tutorials - not many things are as frustrating as typing long commands because the instructor didn't provide you with code snippets.

### [colordiff](https://www.colordiff.org/) and [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy)

{% postImage "colordiff.jpg", "Colordiff in action", "", "colordiff brings some colors to your diffs" %}

I rarely do diffs (compare differences between two files) in the terminal anymore, but if you need to do one, use `colordiff` instead of the unusable `diff` command. `colordiff` colorizes the output, so it's much easier to see the changes instead of trying to follow all the "<" and ">" signs.

{% postImage "diff-so-fancy.jpg", "diff-so-fancy in action", "", "diff-so-fancy - even better alternative to colordiff" %}

For running `git diff` and `git show` commands, there is an even better tool called [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy). It further improves how the diff looks like by:

* highlighting changed words (instead of the whole lines)
* simplifying the headers for changed files
* stripping the + and - symbols (you already have colors for this)
* clearly indicating new and deleted empty lines

### tree (`brew install tree`)

If you want to present the content of a given directory, `tree` is a go-to tool to do that. It displays all the subdirectories and files in a nice, tree-like structure:

```shell
$ tree .
.
├── recovery.md
├── README.md
├── archive
├── automator
│   ├── Open\ Iterm2.workflow
│   │   └── Contents
│   │       ├── Info.plist
│   │       ├── QuickLook
│   │       │   └── Thumbnail.png
│   │       └── document.wflow
│   └── Start\ Screen\ Saver.workflow
├── brew-cask.sh
```

### [bat](https://github.com/sharkdp/bat)

{% postImage "bat.jpg", "NANANANANANA, bat!" %}

Like `cat` (command most commonly used to display the content of a file in a terminal) but better.

Adds syntax highlighting, git gutter marks (when applicable), automatic paging (if the file is large), and in general, makes the output much more enjoyable to read.

### [httpie](https://httpie.org/)

{% postImage "httpie.gif", "httpie tool in action", "", "httpie in action (source: https://httpie.org)" %}

If you need to send some HTTP requests and you find `curl` unintuitive to use, try `httpie`.

It's an excellent alternative. It's easier to use with sensible defaults and simple syntax, returns a colorized output, and even supports installing additional plugins (for different types of authentication).

### [tldr](https://tldr.sh/)

Simplified man pages. *"man pages"* contain manuals for Linux software that explain how to use a given command. Try running `man cat` or `man grep` to see an example. They are very detailed and sometimes can be difficult to grasp. So `tldr` is a community effort to extract the essence of each man page into a brief description with some examples.

`tldr` works for the most popular software. As I said, it's a community effort, and there is a slim chance that someone will document an obscure package for you. But when it works, the information it provides usually contains what you are looking for.

For example, if you want to create a gzipped archive of a few files, `man tar` will overwhelm you with the possible options. `tldr tar` will instead list some common examples - the second one being exactly the thing that you want to do:

{% postImage "tldr.jpg", "man page vs tldr", "", "man pages are great, but sometimes using tldr will be much faster to find a specific information" %}

### [exa](https://the.exa.website/)

{% postImage "exa.jpg", "exa in action" %}

`exa` can be a replacement for the `ls` command.

It's colorful, displays additional information like the git status, automatically converts file size to human-readable units, and all that while staying equally fast to `ls`.

Even though I like it and recommend it, for some reason, I still stick with `ls` instead. Muscle memory, I guess?

### [litecli](https://litecli.com/) and [pgcli](https://www.pgcli.com/)

{% postImage "litecli.gif", "litecli in action" %}

My go-to CLI solutions for SQLite and PostgreSQL. With the auto-completion and syntax highlighting, they are much better to use than the default `sqlite3` and `psql` tools.

### [mas](https://github.com/mas-cli/mas)

{% postImage "mas.jpg", "mas website" %}

`mas` is a CLI tool to install software from the App Store. I used it once in my life - when I was setting up my Macbook. And I will use it to set up my next Macbook too.

`mas` lets you automate the installation of software in macOS. It saves you from *a lot* of clicking. And, since you are reading an article about CLI tools, I assume that - just like me - you don't like clicking.

I keep a list of apps installed from the App Store in my "disaster recovery" scripts. If something bad happens, I hopefully should be able to reinstall everything with minimal hassle.

### [ncdu](https://dev.yorhel.nl/ncdu)

{% postImage "ncdu.jpg", "ncdu in action" %}

Disk usage analyzer for the terminal. Fast and easy to use. My default tool when I need to free some space (*"Ohh, I'm sure that 256GB of disk space will be plenty!"*).

## That's all folks

It was a long list, but hopefully, you discovered something new today.

Some of the tools like the `fd`, `ripgrep`, or `httpie` are improved versions of things that you probably already know. Except that the new versions are easier to use, they provide better output, and sometimes are actually faster. So don't cling to old tools only because everyone else is using them.

A common argument for sticking with the *"standard Linux tools"* that I hear is:

> "But what if you need to log in to a Linux server and do some work there? You won't have access to your fancy tools. It's better to learn how to use tools that come built-in with most Linux distributions."

When was the last time you had to log in to a Linux server? One where you can't install software, but you had to debug some issues manually? I don't even remember. Not many people do that anymore. Maybe it's time to rethink how you do the deployment and move away from manual work into something more scalable?

Don't let your tool-belt get rusty and add some new CLI tools there!
