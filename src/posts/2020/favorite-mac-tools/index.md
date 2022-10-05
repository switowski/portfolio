---
title: My Favorite Macbook Tools
description: I'm programming on a Macbook, and I love it. Here are some of the tools that make my life easier.
tags: ['Tools']
similar:
  - favorite-cli-tools
  - plugins-for-python-in-vscode
  - 25-ipython-tips-for-your-next-advent-of-code
date: 2020-01-09
featured: true
---

I could spend days just tweaking things on my computer. Actually, I do. Whenever I see something annoying, I want to drop everything and try to fix it right away. It can be anything. From a minor: *"Hey, I just run the same command twice, I should create an alias!"* to installing random tools (*"Hmm, I'm wondering if there is a way to get notifications when a long-running job in a terminal finishes, so I can do other stuff in the meantime?"*). I also love to read what tools other people are using. This time, I've decided to share mine.

Since this is a very long post, I've to split it into two parts: the Mac apps and the [CLI stuff]({% postUrl "favorite-cli-tools" %}).

### [Alfred](https://www.alfredapp.com/)

{% postImage "alfred.jpg", "Alfred" %}

Alfred is a launcher - this app that opens when you press ⌘+Spacebar and lets you quickly open other apps. On steroids. And I absolutely love it! I knew about its existence even before owning a Mac, and I envied Mac users to have such a great launcher. I used [Launchy](https://www.launchy.net/) on Windows and [GNOME Do](https://en.wikipedia.org/wiki/GNOME_Do) on Linux, and they are both great (just having a launcher will make you feel much more productive).

So when I got my Mac, one of the first things I did was to replace Spotlight with Alfred. Even without the PowerPack, it's much more powerful than Spotlight. But the PowerPack (a paid extension) is where it really packs a punch. It enables a few more features like a text expansion (here called "snippets") or the clipboard history. But the best features that come with the Powerpack are the "Alfred Workflows" - user-defined scripts that let you automate many tasks. I have a bunch of workflows to quickly create reminders, to-do tasks, temporary emails, convert currency, or search for emoji and Unicode characters.

There is already version 4 of Alfred, but I still haven't upgraded from version 3.

### My Alfred workflows

Here are some of the workflows that I'm using with Alfred:

* [Alfred Workflow Todoist](https://github.com/moranje/alfred-workflow-todoist) - lets me quickly add tasks to Todoist
* [Convert](http://www.packal.org/workflow/convert) - convert from one unit to another. I use it mostly for currencies.
* [EggTimer](https://github.com/ihowson/EggTimer2) - a bit outdated workflow, but the only one that lets me easily create timers (I want to take a short break every 60 minutes of work)
* [Emoji search](https://github.com/jsumners/alfred-emoji) - much faster emoji search than the default emoji icon panel on Mac.
* [Reminders for Alfred 3](https://github.com/surrealroad/alfred-reminders) - typing "r do stuff in 20 minutes" will create a reminder "do stuff" 20 minutes from now. It lets me quickly set reminders without getting distracted from the current task.
* [TemporaryEmail](https://www.packal.org/workflow/temporaryemail) - create a disposable temporary email when I need to register in some spammy service.
* [Toggl](https://github.com/jason0x43/alfred-toggl) - interact with [Toggl](https://toggl.com/) time tracker
* [Unicode Symbol Search](http://www.packal.org/workflow/symbols-search) - quickly find and copy any Unicode symbol.

### [Magnet](https://magnet.crowdcafe.com/)

{% postImage "magnet.jpg", "Magnet windows manager" %}

Magnet is a window manager. It's unbelievable that Mac still doesn't have a built-in window manager that supports keyboard shortcuts. Luckily, Magnet fills this gap (for a price of a few $). By default, it uses ⌃+⌥ as a modifier, which conflicts with a lot of my VS Code settings (I'm using ⌃+⌥ as a modifier for all my custom shortcuts). So I changed it to ⌘+⌥+⌃. It sounds like a lot of keys to press simultaneously, but I mapped all 3 of them to 1 key using Karabiner-Elements (mentioned below).

If you prefer a free alternative, there is also [Rectangle](https://github.com/rxhanson/Rectangle) - a successor of the [discontinued Spectacle app](https://www.spectacleapp.com/). I started using Magnet because Spectacle didn't have some shortcuts (like "Split into 1/3 of the screen"). But Rectangle has even more options than Magnet, so it looks like an excellent replacement.

If you miss a tiling window manager, there is also [Amethyst](https://github.com/ianyh/Amethyst). I tried it, but it didn't feel as good as i3, so I didn't stick with it. It was missing the basic functionality, like moving into a specific direction with a `modifier + arrow key`.

### [Todoist](https://todoist.com/)

{% postImage "todoist.jpg", "Todoist task manager" %}

My to-do list manager. I tried using different apps (gosh, I think I've tested all of them), and I was always coming back to Todoist. I like it for its clean interface, the "Next 7 days" view, and the ability to use special shortcuts when creating tasks. For example, if I add a task: "Write a blog post tod p1 #blog" it will create a "Write a blog post" task, set due date to today, add "Priority 1" flag, and assign it to a project called "Blog." Neat!

### [Dozer](https://github.com/Mortennn/Dozer)

This is how my menu bar looks like most of the time:

{% postImage "how-my-menu-bar-looks-like.jpg", "How my menu bar looks like" %}

This is how it **really** looks like:

{% postImage "how-my-menu-bar-really-looks-like.jpg", "How my menu bar really looks like" %}

Dozer is a small application that keeps my menu bar manageable. It lets me hide those items that I'm not using very often. And with a keyboard shortcut, I can quickly show/hide them. If you need more features, there is also a paid app called [Bartender](https://www.macbartender.com/), but Dozer works like a charm for me.

### [BetterTouchTool](https://folivora.ai/)

{% postImage "btt.jpg", "BetterTouchTool" %}

BetterTouchTool (or BTT for short) lets you customize any input device for your Mac. You can create custom Trackpad or Magic Mouse gestures, custom keyboard shortcuts, and macros (sequences of keys). It comes with a clipboard manager and window manager. It could replace a bunch of other tools that I'm using.

But none of those features are the reason why I decided to pay $10 for this app. I bought it so I can customize my Macbook's touch bar. In its original form, the touch bar was unusable for me. Buttons that change depending on which application you are using is one of the worst ideas ever. I don't want to rediscover what's on the touch bar each time I change the currently used app. And half of the buttons are useless anyway. I don't want a slider for the volume or brightness! 99% of the time, I only need to increase or decrease it by a notch. I should be able to do this with one press of a button. So, as most of the people that I know, I didn't even use the touch bar. And one day, I stumbled upon an article on HackerNews that was explaining [how to make the touch bar actually useful](http://vas3k.com/blog/touchbar/). After reading this article, I immediately bought the BTT.

{% postImage "my-touchbar.jpg", "My touch bar", "This is how my touch bar looks like today" %}

Now on my touch bar, there are (from left to right):

* Esc button (that I don't really use, but you can't remove it).
* A special button that will switch the touch bar back to the default, crappy Mac version (again, it's there by default, and I don't use it).
* Buttons that open (or switch to) the Calendar, Mail, Todoist, and Toggl apps. I use them from time to time (mostly when I'm working with Macbook on my laps, otherwise it's faster for me to switch with the keyboard).
* A script that shows the currently playing song from Spotify or Youtube. It's only visible when one of those apps is open. If I press the name of the song, it will skip to the next one. Best button! Ever!
* Play/Pause button for Spotify/Youtube.
* Brightness down and up buttons.
* Volume down, up, and mute buttons.

There is a ton of other widgets that you can use - weather, temperature, time and date, custom shell, or Apple Scripts. The BTT author has added a lot of new ones since I set up my touch bar, so I will have to revise it at some point.

### [Franz](https://meetfranz.com/)

{% postImage "franz.jpg", "Franz app" %}

One app to aggregate all my messaging apps. It's a great, free tool that supports most of the messaging apps. I'm using it with Slack, Skype, WhatsApp, Telegram, Twitter, Hangouts, and Facebook Messenger. The only downside is - each service that you add spins a new electron app. The memory consumption can go through the roof sometimes. But so far, I haven't found any reliable alternative.

### [Flux](https://justgetflux.com/)

{% postImage "flux.jpg", "Flux app" %}

Flux adapts the color of the screen to the time of the day. Early in the day or late in the night (for most of us, programmers, it's usually the same thing), it will make the colors of your computer warmer (yellow). It's one of those applications that you install once, and you forget about it.

### [Karabiner-Elements](https://pqrs.org/osx/karabiner/index.html)

{% postImage "karabiner.jpg", "Karabiner-Elements app" %}

Karabiner-Elements is a free app to customize your keyboard (it has a lot of duplication with BetterTouchTool). You can swap keys, change the behavior of function keys, or define some complex macros. I use it for three things:

* I have swapped the Caps Lock and Esc keys (and I can't believe how I could live before doing it). Luckily, I discover this trick before I switched to Macbook with its useless Esc key on the touch bar.
* Since I'm using [Kinesis Advantage 2 keyboard](https://kinesis-ergo.com/shop/advantage2/), I have remapped the Home key to ⌃(Ctrl) and End to a combination of ⌘+⌥+⌃ (which is a modifier that I use for window management with Magnet). This combination (often with the addition of Shift) is called the ["Hyper" key](https://statusq.org/archives/2016/09/25/7857/), and it gives you another modifier key to use with your shortcuts. Just in case having three modifier keys on Mac is not enough.

  If you are using a *“normal”* keyboard, I saw people mapping “pressing Ctrl" to act like the Esc key and “holding Ctrl" to act like the Ctrl key. Which is pretty smart, since we never just press Ctrl - it's always used in combination with other keys. This will free up the "Esc" (or "Caps Lock" if you followed my previous advice and swapped them) for your Hyper key or any kind of crazy combination that you can think of.
* A careful reader might notice that I no longer have a way to enable the Caps Lock. The "Caps Lock" key is now my Esc, and Macbook doesn't let you redefine the "Esc" key on the touch bar. So I have 2 Esc keys and no Caps Lock. Which is bad - how am I supposed to argue with people on the Internet without the Caps Lock? Luckily, there was a solution for that - I mapped pressing **both Shift** keys simultaneously to Caps Lock. It sounds crazy, but it's actually quite intuitive and easy to remember. I have no idea why it's not a default behavior. To make it work, I had to modify the Karabiner-Elements config file directly. You can [check my dotfiles repository](https://github.com/switowski/dotfiles/blob/master/.config/karabiner/karabiner.json#L41) to see how to do this. Just remove the stuff that you don't need and put this `karabiner.json` in your *~/.config/karabiner/karabiner.json* file.

### [Fish](https://fishshell.com/)

{% postImage "fish.jpg", "Fish shell" %}

When I first started using Linux, I used Bash. Then I switched to Z shell. With oh-my-zsh. Then I realized that it's becoming a bit sluggish, mostly during the startup time. I decided that I don't have time to sit down and stare at my screen for almost 2 seconds waiting for it to load. So I switched to prezto when it was a cool, new thing (and not an [abandoned package as it is today](https://github.com/sorin-ionescu/prezto/issues/1239)). In 2017 I switched to a Macbook. Which was a great opportunity to try something new! Some of my colleagues at work were using fish at that time, and it looked interesting. It had some neat features out of the box, like the autosuggestions, syntax highlighting, or switching between directories using ⌥+→ and ⌥+←. So I tried it. And I liked it, so I'm still using it today. I use [fisher](https://github.com/jorgebucaran/fisher) package manager with a few plugins (there is also oh-my-fish, but fisher was supposed to be faster, so I stick to it). I try to avoid adding too many plugins to make the terminal startup faster (I'm starting a bunch of terminal sessions on an average day, so those seconds add up).

### [Captin](http://captin.mystrikingly.com/)

{% postImage "captin.jpg", "Captin" %}

It shows you a notification when you turn the Caps Lock on or off. Since I'm using a slightly unusual way to operate the Caps Lock, I like to have this little visual (and audio) cue when I turn it off.

### [Anki](https://apps.ankiweb.net/)

{% postImage "anki.jpg", "Anki" %}

Anki is a spaced repetition app. For most of my life I thought that I was stupid because I had terrible problems with memorizing things. It turns out that I was using the wrong technique. Spaced repetition is a simple mechanism that makes sure that you don't repeat things that you already remember, but only those things that you have problems remembering. I'm using Anki purely on my phone, but adding new words is much easier to do on a computer.

Also, Anki is not only useful for learning new languages (although I'm using it right now for learning Japanese)! I've met someone who started working on a very complicated software project a few months ago. There were so many parts of the system that it would take him (and every new person on the team) a long time to learn how they all work. So he started creating flashcards with Anki describing various parts of the system and how to use them. Soon, other people from his team started using Anki as well, saying that it's much better than reading pages and pages of documentation!

### [Grammarly](https://www.grammarly.com/)

{% postImage "grammarly.jpg", "Grammarly" %}

Grammarly is an app that checks the grammar and typos in your text. As a non-native speaker, it helps me a lot to find some things that I wouldn't probably notice. I used the free version for a few months, and a few days ago, I finally bought the premium plan.

### [Skitch](https://evernote.com/intl/en/products/skitch)

{% postImage "skitch.jpg", "Skitch" %}

Taking screenshots on Mac is easy. There are keyboard shortcuts that let you quickly take a screenshot of the whole desktop, just a part of it, or even choose some options, like a delayed screenshot, if you want a screenshot of a hover effect on a website. Then you can open the screenshot, put some arrows or text, and send it to someone. So that worked for me for a long time. Until I found Skitch. With Skitch, when you take a screenshot, it automatically opens a simple app with some default tools for annotating them. It has huge pink arrows, large text, etc. When you finish, you can just drag and drop the screenshot from the app to a chat window. No more opening the Finder to find the screenshot, no more adjusting the text size and color in Preview app or clumsy arrows that you make from 3 straight lines glued together. With Skitch, I can take a screenshot, annotate the problem and send it to someone on a Slack in less than 10 seconds.

The only downside is that Sketch's keyboard shortcuts are non-customizable and the conflict with Mac's ones. I ended up changing Mac's shortcuts.

### [KeyCastr](https://github.com/keycastr/keycastr)

{% postImage "keycastr.jpg", "KeyCastr" %}

If you ever wondered what app people use in their videos to show which keys they are pressing, then KeyCastr is one of those apps. I have used it literally once, but if I ever need to record some screencast, I will definitely use it again.

### [LICEcap](https://www.cockos.com/licecap/)

{% postImage "licecap.jpg", "LICEcap" %}

They say that a picture is worth a thousand words. Well, a GIF is probably worth over 9000 words. Especially if you are trying to show some buggy behavior. LICEcap is a free software to quickly record GIFs from your screen. I love it!

### [SimpleMind Lite](https://simplemind.eu/)

{% postImage "simplemind.jpg", "SimpleMind Lite" %}

Tool for mind mapping.

### [The Unarchiver](https://theunarchiver.com/)

{% postImage "unarchiver.jpg", "The Unarchiver" %}

I mostly use its CLI command `unar` to extract any kind of archive. It's so good not have to remember the `tar` or `unzip` flags anymore!

### [Visual Studio Code](https://code.visualstudio.com/)

{% postImage "vscode.jpg", "Visual Studio Code" %}

My code editor. I used Sublime for many years, but when I was switching to a Macbook, I decided to finally move to VS Code (after two unsuccessful attempts to do it in the past).

### [Workflowy](https://workflowy.com/)

{% postImage "workflowy.jpg", "Workflowy" %}

I use it to organize my long- and short-term goals that I later convert into actionable steps in Todoist.

## Mundane but mandatory stuff

There are also a bunch of tools that probably everyone knows, but to keep this list complete, here they are:

* [Evernote](https://evernote.com/) - a note-taking app that doesn't need an introduction. It doesn't get much love nowadays, but I never actually moved away from it. The free plan is still perfectly fine for me.
* [git](https://git-scm.com/) - THE version control tool.
* [vim](https://www.vim.org/) - I use vim mostly for quick edits (small files or notes that don't require a full-fledged IDE).
* [VLC](https://www.videolan.org/vlc/index.html) - video player. I used it on all my Mac, Windows, and Linux computers.
* [GIMP](https://www.gimp.org/) - I should probably learn how to use one of those hip, beautiful (and expensive) Mac apps for editing images. But I'm too lazy, and I know GIMP for years, so it's fine for now.
* [Inkscape](https://inkscape.org/) - see above.
* [Dropbox](https://www.dropbox.com/) - my preferred file synchronization tool. I'm using the free version only to synchronize important documents, etc. For backups, I have a NAS.
* [iterm2](https://iterm2.com/) - *de facto* terminal app for Mac. It works great, stores its configuration nicely in my Dropbox backup folder, and I'm not planning to change it to anything else any time soon.
* [VirtualBox](https://www.virtualbox.org/) - even though I have not used it in ages, it's my go-to virtualization tool. Back in the days, when I was still using Windows at home, VirtualBox was a great tool to easily spin up Linux containers, so I could actually do some programming (this was before Windows 10 with all the programming goodies).
* dotfiles. I'm a big fan of dotfiles, and while there are some great tools to manage them (like [yadm](https://yadm.io/) or [dotbot](https://github.com/anishathalye/dotbot/)), I've always used some bash scripts to manage them. I try to keep them up to date, so in case of a laptop failure, I can switch to a new one with all my settings and software. You can find my dotfiles [here](https://github.com/switowski/dotfiles).

  If you are using Mac or Linux and you don't have dotfiles, but you would like to preserve the configuration of your software, there is also [mackup](https://github.com/lra/mackup). It will back up the configuration of most of your apps, including git, bash, etc. (it supports [over 450 applications](https://github.com/lra/mackup#supported-applications)) into a folder in Dropbox, iCloud, or a similar service. Plus, it will replace the configuration files with symlinks to the backup location so that they will be automatically backed up. And with just one command, you can recover it on a different machine.

* [Docker for Mac](https://docs.docker.com/docker-for-mac/) - Mac client for Docker. Before I had a Mac, I was jealous of the beautiful Docker interface with the Kitematic app that Mac users had. Downloading images, listing running containers, or executing commands inside them through a nice GUI sounded like a sweet option. By the time I switched to a Mac, I already knew how to use Docker enough that I was doing all those things comfortably in the terminal. So I actually never used the GUI (but if you are a *"GUI person"*, I'm sure you are going to love it!).

  To make it even worse, Docker for Mac has a [memory leaks problem](https://github.com/docker/for-mac/issues/3232). It's something that has been reported already in 2018 and closed because *"It's a problem with Mac not with Docker."* Even though people are still regularly commenting that they have this issue. Even with stopped containers, after running for a while, Docker starts consuming quite a lot of memory (and its energy consumption is high, so I usually disable it when I'm on a battery).

## Tools that I don't use, but I can highly recommend

Finally, there are some great tools that I currently don't use. Some of them are the tools that I used in the past. And for some of them, I still haven't found a good use case:

* [tmux](https://github.com/tmux/tmux) - I've tried to use this terminal multiplexer a few times. But I never stuck to it. It's easy to define shortcuts in iterm2 to split terminals and move withing them, so I don't really need a separate tool for this. I also don't need to keep my terminal sessions running for ages. If a terminal *dies*, it's fine - I just start a new one. The obvious reason to use tmux is when you regularly connect to multiple servers. Which I no longer do. With Docker and the whole CI/CD movement, I realized that I less and less have to SSH anywhere. I work on my local machine, push my code to GitHub/GitLab, and the machines take over from there.

* [BitBar](https://getbitbar.com/) - a great little app that lets you put the output from any script or program in your menu bar. CPU usage graphs? Checked. Little menulet to interact with MySQL? Docker status? Bitcoin price? Ten different battery level indicators or your Apple keyboard battery level indicator? All checked! The only reason why I don't use it is - I don't need any of those scripts for now. I only needed to show the RAM and CPU graphs, but unfortunately, there were no RAM graph plugins when I checked, so I installed [MenuMeters](https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/) instead.

* [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12) - prevents your Macbook from going to sleep. Good tool when you are giving presentations.

* [Dash](https://kapeli.com/dash) - a great tool to access the documentation. Supports probably every programming language ever invented, works offline, and you can even search directly on StackOverflow. But for some reason, I never actually get used to it.

* [Flycut](https://apps.apple.com/us/app/flycut-clipboard-manager/id442160987?mt=12) a clipboard manager that I used for some time before switching to Alfred. It's free.

* [Sublime Text](https://www.sublimetext.com/) - I've used it as my default programming editor for years. Then I switched to VS Code. I still keep Sublime Text to quickly preview and edit large files (although I use vim more and more for this).

* [Slow Quit Apps](https://github.com/dteoh/SlowQuitApps) - it's frustrating when I accidentally press ⌘+Q instead of ⌘+W, and I close the current app. Slow Quit App prevents this by adding a time threshold. By default. you need to keep pressing ⌘+Q for 1 second to actually close an app. I would probably use it if I knew about it before, but since I didn't, I decided to remap ⌘+Q to some useless command. So now it's "inverting colors."

* [CheatSheet](https://mediaatelier.com/CheatSheet/) - I was really excited when I found this small helper. When you install it, each time you hold the ⌘ key, it will display an overlay with shortcuts for the current application. But then I realized that I don't really use it, so I uninstalled it.

## Conclusions

I learned about most of those tools from my colleagues, browsing through dotfiles of other people, and reading posts on HackerNews. Without other people sharing their tools, I would probably still be using Nano. So I hope that someone will find this list useful and create an even better one on top of it!

Preparing those lists was also an excellent opportunity to clean up my Mac a bit - I removed a bunch of unused applications, scripts, and aliases.

If you liked this article, then check out [what CLI tools I'm using]({% postUrl "favorite-cli-tools" %}).

&nbsp;

Photo by Lachlan Donald on [Unsplash](https://unsplash.com/photos/YVT5aF2QM7M)
