---
title: 18 Plugins for Writing Python in VS Code
description: List of my favorite VS Code plugins that helps me build Python application.
tags: ['Python', 'VS Code', 'Tools']
similar:
  - favorite-cli-tools
  - favorite-mac-tools
  - 25-ipython-tips-for-your-next-advent-of-code
date: 2020-04-27
featured: true
---

VS Code is a great text editor. But when you install it, its functionality is limited. You can edit JavaScript and TypeScript, but for other programming languages, it will be just a text editor. You will need to add some plugins to turn it into a proper IDE.

Luckily, when you open a file in a new language, VS Code will suggest an extension that can help you. With the Python extension, you can already do a lot - you get syntax highlighting, code completion, and many other features that turn a text editor into a code editor.

But there are many other plugins that I discovered when working with Python. Some add entirely new functionality, and others offer just a small improvement here and there. I've decided to write them down. I hope some of you will find them useful!

## [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) and other language-specific plugins

{% postImage "python.jpg", "Plugins: Python" %}

First and foremost - the Python plugin for VS Code. Out of the box, there is no support for Python in VS Code, but when you open a Python file, VS Code will immediately suggest this plugin. It adds all the necessary features:

* Syntax highlighting for Python files
* Intellisense (code-completion suggestions)
* Ability to start a debugger
* Support for collecting and running tests (with different testing frameworks like pytest or unittest)
* Different linters
* And plenty of other small features that turn VS Code into a proper Python editor

And it's the same with different languages. Each time you open a file that VS Code doesn't support, you get a suggestion of a plugin for that language. It's a great approach! On the one hand, you don't have to figure out which extensions you need to install, but on the other hand, you don't slow down your IDE with plugins that you will never use.

## [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) and other framework-specific plugins

{% postImage "django.jpg", "Plugins: Django" %}

If you are working with frameworks, there is usually a plugin that will make your life easier, like [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) or [flask-snippets](https://marketplace.visualstudio.com/items?itemName=cstrap.flask-snippets). They bring some additional improvements for a given framework like:

* Better syntax highlighting for framework-specific files (e.g., template files in Django that combine HTML with Django tags)
* Additional snippets - especially useful for the templating systems. Being able to insert loops and if-s with a two letter shortcut without opening and closing all those {{ "`{%`" }} tags is a blessing!
* Improved support for different functions. For example, Django plugin adds the ability to "Go to definition" from the templates.

## [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)

{% postImage "intellicode.gif", "Plugins: Intellicode", "Source: https://docs.microsoft.com/en-us/visualstudio/intellicode/intellicode-visual-studio-code" %}

Intellicode makes the autocompletion a bit smarter. It tries to predict which term you are most likely to use in a given situation and puts that term at the top of the list (marked with a ☆ symbol).

It works surprisingly well!

## [Emmet](https://docs.emmet.io/)

{% postImage "emmet.gif", "Plugins: Emmet", "Source: code.visualstudio.com/docs/editor/emmet" %}

Technically, Emmet is not an extension because it's already integrated with VS Code by default (due to its huge popularity). But it still deserves mention, in case there is someone who never heard about it.

Emmet is going to be your best friend if you are writing a lot of HTML and CSS. It lets you expand simple abbreviations into full HTML, it adds CSS prefixes (together with vendor prefixes), and a whole bunch of other useful functions (rename a tag, balance in/out, go to matching pair, etc.)

I absolutely love it when I need to write HTML. I started using it to quickly add a class to a tag (`div.header` or `a.btn.btn-primary`) and then I learned new features. With Emmet you can write:

```css
ul>li.list-item*3
```

and if you press Enter, it will turn into:

```html
<ul>
  <li class="list-item"></li>
  <li class="list-item"></li>
  <li class="list-item"></li>
</ul>
```

## [Autodocstring](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring)

{% postImage "autodocstring.gif", "Plugins: Autodocstring" %}

This plugin speeds up writing Python documentation by generating some of the boilerplate for you.

Write a function signature, type `"""` to start the docstring, press Enter, and this plugin does the rest. It will take care of copying the arguments from the function signature to the docs. And if you add types to your arguments, it will recognize them and put them in the correct place in the documentation.

## [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)

{% postImage "bookmarks.jpg", "Plugins: Bookmarks" %}

This extension lets you bookmark locations in your code, easily list all your bookmarks in a sidebar, and move between them with keyboard shortcuts.

It's incredibly useful then I'm digging into a new codebase (so I can jump around and not get lost). I also find it helpful when I'm trying to debug some complicated issues - VS Code has a functionality to "Go to Previous/Next location", but without bookmarks, it's easy to get lost.

## [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash)

{% postImage "dash.gif", "Plugins: Dash" %}

With Dash extension, you can access offline documentation for basically any programming language or framework.

It requires installing one of the additional tool to provide the documentation:

* [Dash for macOS](https://kapeli.com/dash)
* [Zeal for Linux/Windows](https://zealdocs.org/)
* [Velocity for Windows](https://velocity.silverlakesoftware.com/)

Once you download the documentation, you can access it offline.

I'm not using it very often, but it's a great tool if you need to work without access to the Internet.

## [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

{% postImage "error-lens.jpg", "Plugins: Error Lens" %}

Sometimes the errors marks in VS Code are hard to spot (especially the "info" hints). If you don't wrap lines, it's even worse - the error can be in the part of the code not visible on the screen.

That's why I'm using Error Lens. It lets me modify how the errors should be displayed. It can display the error message next to the line where it occurs and a Sublime-like error icons in the gutter (next to the line number).

## [File Utils](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils)

{% postImage "file-utils.jpg", "Plugins: File Utils" %}

This small plugin adds a few file-related commands to the Command Palette (normally you can perform them by right-clicking in the sidebar):

* Rename
* Move
* Duplicate
* Copy path or name of the file

It also adds a "Move/Duplicate File" option to the context menu.

## [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

{% postImage "gitlens.gif", "Plugins: GitLens" %}

Massive plugin - adds a lot of git integration to VS Code:

* Can show blame annotations per line, per file, in the status bar, or on hover.
* Provides you with context links to show changes, show diff, copy commit ID.
* Brings a sidebar with probably every possible information about the git repository, file and line history, compare and search menus, etc.

It's much more powerful than the default "source control" panel of VS Code. I don't think I'm using even 20% of its features.

## [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

{% postImage "indent-rainbow.jpg", "Plugins: Indent Rainbow" %}

Very helpful plugin for working with languages like Python, where indentation matters. Every level of indentation gets a slightly different color, so it's easier to see at a glance where a given code block ends.

## [jumpy](https://marketplace.visualstudio.com/items?itemName=wmaurer.vscode-jumpy) (or [MetaGo](https://marketplace.visualstudio.com/items?itemName=metaseed.metago))

{% postImage "jumpy.gif", "Plugins: jumpy" %}

jumpy is a very peculiar plugin that takes some time to get used to. Basically, it's supposed to help you move around your code faster.

If you press a keyboard shortcut, jumpy will display a 2-letter code next to every word on the screen. If you type those two letters, your cursor will jump to that location. Similar to what you can do with vim in "normal" mode (with less typing).

## [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

{% postImage "paste-indent.jpg", "Plugins: Paste and Indent" %}

If you find that VS Code is not doing a good job when you paste code, try this extension. It will let you assign a "Paste and Indent" action to any key shortcut. This command will do its best to indent the code correctly after you paste it (to match the surrounding code). I'm using the "Command+Shift+V" shortcut for it.

## [Project Manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)

{% postImage "project-manager.jpg", "Plugins: Project Manager" %}

VS Code supports the concept of workspaces - you can group some files and folders together and easily switch between them. But you still need to save the workspace configuration, and sometimes it can get lost - I either accidentally remove it or forget where I saved it.

Project Manager takes this hassle away. You can save projects and then open them, no matter where they are located (and you don't have to worry about storing the workspace preference files). Also, it adds a sidebar to browse all your projects.

## [Quick and Simple Text Selection](https://marketplace.visualstudio.com/items?itemName=dbankier.vscode-quick-select)

{% postImage "simple-text-selection.jpg", "Plugins: Quick and Simple Text Selection" %}

I like to use shortcuts that let me select all the text in brackets, tags, etc. By default, VS Code has command to "Expand/Shrink selection" that works ok-ish, but I found the Quick and Simple Text Selection plugin to be a much better way.

It adds a few new shortcuts to select text in:

* single/double quotes
* parentheses
* square/angular/curly brackets
* tags

I tried to map them to some intuitive shortcuts and they work like a charm:

* Command + ' (⌘ + ') - select text in single quotes
* Command + " (⌘ + ⇧ + ')- select text in double quotes
* Command + ( (⌘ + ⇧ + 9)- select text in parentheses
* Command + < (⌘ + ⇧ + ,)- select text in tag
* Command + , (⌘ + ,)- select text in angular brackets

## [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

{% postImage "settings-sync.jpg", "Plugins: Settings Sync" %}

It's not really related to Python, but it's a very important plugin, so I wanted to mention it.

Settings Sync lets you save the VS Code settings to a private GitHub gist, so you can easily restore them if you switch to a different computer (or if you lose/destroy your current one).

In one of the upcoming versions of VS Code, settings synchronization will become built-in.

## [TODO Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

{% postImage "todo-highlight.jpg", "Plugins: TODO Highlight" %}

Highlights all TODO/FIXME/NOTE in the code, so you can easily spot them. You can easily customize it by adding new words and changing the highlight style.

## [Spell Right](https://marketplace.visualstudio.com/items?itemName=ban.spellright)

{% postImage "spell-right.jpg", "Plugins: Spell Right" %}

It's strange, but VS Code doesn't have a built-in spell checker. So you have to install one as an extension.
