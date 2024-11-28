---
title: The macOS Apps I'm Using
description: A list of my favorite currently used macOS apps.
tags: ['Tools', 'Productivity']
date: 2024-11-16
similar:
    - favorite-cli-tools
    - favorite-mac-tools
    - plugins-for-python-in-vscode
---


For a long time, the two most popular articles on my blog were lists of [macOS apps]({% postUrl "favorite-mac-tools" %}) and [CLI tools]({% postUrl "favorite-cli-tools" %}), which I've been using. Coincidentally, these kinds of lists are something I love to read myself. I can always find some cool, new tool in such articles. It doesn't matter that I will probably immediately forget about this tool and never use it again. Nor does it matter that 80% of the items on those lists are always the same. The promise of being able to do some obscure task in a slightly more efficient way is all I need to get excited each time I find another "Best 15 MacBook apps for Python developers" article.

However, those lists tend to get outdated pretty quickly. Every year or two, a new process manager, disk space analyzer, file manager, or other tool gets released that's faster, fancier, and more colorful. So, after almost five years, it's about time I updated my original macOS apps article and wrote down which tools I use now. I still use quite a lot of programs listed in the original article. For some, I found better replacements. And, of course, there are a few interesting new items. Some tools are paid (I marked those with  a 💰 icon next to their name), and some have both a free tier and a paid one (I marked those with 🆓/💰). All the other ones are free to use. And, obviously, there are no affiliate links, and no one paid me to have their tool listed here - I use them because I like them.

::: callout-info

### Table of contents

This is a long list, so here is a table of contents with short summaries of what each app does:

- [Alfred](#alfred) - Spotlight on steroids
- [Raycast](#raycast) - A more capable and modern alternative to Alfred
- [Bartender 5](#bartender-5) - An app for showing and hiding icons on the menu bar
- [iTerm2](#iterm2) - A terminal app
- [BetterTouchTool](#bettertouchtool) - An app for customizing all sorts of input devices for your Mac
- [Karabiner Elements](#karabiner-elements) - An app for customizing your keyboard
- [Magnet](#magnet) - A windows manager
- [Monosnap](#monosnap) -An app for taking screenshots and annotating them on the fly
- [Kap](#kap) - An app for recording videos of your screen
- [QSpace Pro](#qspace-pro) - A file manager
- [Obsidian](#obsidian) - A note-taking app for editing Markdown files
- [Carbon Copy Cloner](#carbon-copy-cloner) - An app for making computer backups
- [Ferdium](#ferdium) - A chat aggregator
- [Todoist](#todoist) - An app for managing TODO lists
- [Toggl](#toggl) - An app for tracking time when working for clients
- [Velja](#velja) - A browser picker
- [Spark](#spark) - An email client
- [Figma](#figma) - My preferred graphic editing tool
- [1Password](#1password) - A password manager
- [Nucleo app](#nucleo-app) - An app for managing icons
- [n8n](#n8n) - An automation tool (free alternative to Zapier)
- [PDFGear](#pdfgear) - An app for editing PDF files
- [The Unarchiver](#the-unarchiver) - An app for opening archived files
- [OBS Studio](#obs-studio) - A video recording tool
- [KeyCastr](#keycastr) - A keystroke visualizer for showing which keys you press when recording screencasts
- [Audacity](#audacity) - An audio editing tool
- [HandBrake](#handbrake) - An app for transcoding videos
- [Captin](#captin) - A tool that shows a popup when you toggle Caps Lock
- [Balance Lock](#balance-lock) - An app for fixing the balance of the headphones
- [MOS](#mos) - An app for fixing smooth scrolling on a Logitech mouse
- [noTunes](#notunes) - An app for preventing Apple Music from opening
- [Other applications](#other-less-thrilling-applications)
- [Apps I like but don't use anymore](#apps-that-i-like-but-don-t-use-anymore)
- [Apps I want to try](#apps-i-want-to-try)

:::

### [Alfred](https://www.alfredapp.com/) 🆓/💰

{% postImage "alfred.jpg", "Alfred" %}

It's like Spotlight, but on steroids. I launch it with ⌘+Space, and then I can type some letters or numbers to quickly start applications, solve simple calculations, convert currencies, find files, and more. To make the most out of Alfred, you need to buy the Powerpack. It's a paid extension that allows you to use even more features, including the most important ones - workflows. Written mainly by the community, workflows are plugins that add additional functionality.

Here are some of the workflows that I like the most:

- [Calculate Anything](https://alfred.app/workflows/biatidigital/calculate-anything/) - one of the workflows that I use the most. It allows me to calculate many more things than just some mathematical operations. It can do currency or unit conversion, operations on dates, and more. And it does a good job with processing natural language, so no matter if I write "100 euro to pln" or "100eur pln", I get the correct answer.
- [Calm notifications](https://alfred.app/workflows/vitor/calm-notifications/) - toggles the "Do Not Disturb" mode when I don't want to be distracted by any notifications.
- [Coffee coffee](https://alfred.app/workflows/vitor/coffee-coffee/) - when enabled, it prevents your computer from going to sleep. I was previously using a free app called [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12) that does the same but with some additional customization options. And then I realized I didn't need any of those additional options. All I needed was to occasionally prevent my computer from sleeping. Fun fact - by looking at the source code of this workflow, I've noticed that it's calling the `caffeinate` command. It turns out that macOS has a built-in tool that can prevent your computer from sleeping. So, you don't even need any external tools. Check out [caffeinate's manpage](https://ss64.com/mac/caffeinate.html).
- [DeepL Translate](https://alfred.app/workflows/alexanderwillner/deepl-translate/) - for quick translations using [DeepL](https://www.deepl.com/en/translator). I don't use it for long translations, but mostly when I'm looking for synonyms of an English word.
- [Emoji Mate](https://alfred.app/workflows/fedecalendino/emoji-mate/) - an emoji finder. I can type `;` followed by the name or a description of an emoji, find an emoji that matches it, and copy it to the clipboard.
- [UTF Search](https://alfred.app/workflows/adamkiss/utf-search/) - a UTF characters finder (similar to Emoji mate mentioned above). I can type `:` followed by the name of a UTF character and then copy it to the clipboard.
- [Gist](https://github.com/phallstrom/AlfredGist) - I use it to quickly create GitHub gists from the content of my clipboard. If I have some code copied in the clipboard, I can run the `gist` command, and this creates a GitHub gist that I can share with someone. I used this feature a lot when I was publishing on Medium.com, and I needed to create gists for my code, as Medium didn't have good support for code snippets.
- [Network](https://alfred.app/workflows/mrodalgaard/network/) - show and change network settings. I use it to quickly get my IP address.
- [Reminders for Alfred](https://github.com/surrealroad/alfred-reminders) - add new items to the Reminders app. This is a very old plugin that is no longer available in Alfred's plugins gallery, so you have to install it from GitHub. And even though the author says that it's no longer actively maintained, it still works. I like this plugin because it's very good at parsing natural language. I can type "r 5 minutes leave home" or "r 10:50 leave home", and both commands will create a "leave home" reminder at a specific time.
- [Temporary email](https://alfred.app/workflows/vitor/temporary-email/) - I can type `tmpmail`, and this workflow will create a temporary email with one of the various temporary email services. It's indispensable for all those "subscribe to our newsletter to get 10% off for your order" online shops, where I just want to shop once and never come back.
- [TOD Todoist](https://www.packal.org/workflow/tod-todoist) - lets me quickly add tasks to the Todoist app. I use this workflow very often, especially in the middle of a call, to add new tasks before I forget about them. So it's critical for me to have a plugin that can easily parse natural language, just like Todoist does (writing "buy milk tod p1" creates a "buy milk" task, sets the priority to 1, and the due date to today). When the workflow I was using previously (Alfred Workflow Todoist) stopped working, and the only replacement I found ([AlfreDo](https://alfred.app/workflows/giovanni/alfredo/)) required me to learn some unintuitive syntax for adding tasks, I briefly started using a different launcher just to have my simple workflow for adding new tasks back. Luckily, later, I found "TOD Todoist" and got my simple way of adding TODO tasks back.
- [alfred-toggl](https://github.com/jason0x43/alfred-toggl) - I use [Toggl](https://toggl.com/) to track the time when I'm working, and "alfred-toggl" allows me to interact with Toggl. I can start and stop timers or generate reports showing how long I worked today or this week.

### [Raycast](https://www.raycast.com/) 🆓/💰

{% postImage "raycast.jpg", "Raycast" %}

Raycast is another launcher like Alfred, but it's much more actively developed and already much more capable than Alfred. On top of its vast catalog of features, there are many community plugins to further extend its functionality. I installed Raycast to quickly create new TODO tasks when my old Todoist plugin in Alfred stopped working. Nowadays, I use Raycast mostly for its Emoji Picker and Floating Notes features.

Raycast looks very promising, and most importantly, it has a generous free plan. So, where's the catch, and why am I still using Alfred? Because Raycast is a VC-backed startup, and I'm not really convinced that their business model is sustainable. There is a paid Raycast Pro version that initially included AI features[^1]. Now I see that the paid plan offers more features at the expense of the free plan (unlimited clipboard history, etc.) For now, the free version is fantastic. But I don't want to get vendor-locked when the money becomes tight and the free plan gets even more limited. Plus, I already paid for Alfred's Powerpack license, and I got used to using it. Alfred works fine for me, even though it's much less actively developed, and I wish it had more integrations with other tools (or at least stopped breaking community workflows when they release new versions).

### [Bartender 5](https://www.macbartender.com/) 💰

Bartender lets you hide icons on the menu bar, so you can keep only the most important ones visible, while the rest can be displayed when you click Bartender's icon.
Here's how my menu bar looks most of the time:

{% postImage "bartender1.jpg", "My menu bar with Bartender" %}

And here's how it would look without the Bartender app:

{% postImage "bartender2.jpg", "My menu bar without Bartender" %}

I bought Bartender to replace [Dozer](https://github.com/Mortennn/Dozer) when I got a new MacBook with a notch because Dozer didn't work well with the notch - some icons were hiding under the notch, and I had no way to click them. Dozer has not been updated for quite some time, so support for MacBooks with a notch was never implemented.

However, if I were looking for an app to hide menu bar icons today, I would first check out the free [Ice](https://icemenubar.app/) app. Why? Because [the owner of Bartender sold the app and never informed the users](https://www.reddit.com/r/macapps/comments/1d7zjv8/bartender_5_not_safe_anymore_warning_from/), which was a shady move. After the app was sold, it started including new features like a new analytics framework because, well, why shouldn't a simple app for hiding icons spy on its users, right? I hope by the time I write the next edition of a list of my tools, I will switch to something else, but for now, I didn't have the time to switch.

### [iTerm2](https://iterm2.com/)

{% postImage "iterm2.jpg", "iTerm2" %}

This is still my terminal app. It works great, stores its configuration nicely in my Dropbox backup folder, and I'm not planning to change it to anything else any time soon. New terminal apps come and go ([warp](https://www.warp.dev/) looked promising until it became an "AI-powered intelligent terminal", took money from VC funds, and started collecting telemetry data by default), but for me, iTerm is perfect the way it is.

### [BetterTouchTool](https://folivora.ai/) 💰

{% postImage "bettertouchtool.jpg", "BetterTouchTool" %}

A feature-packed app for customizing all kinds of inputs for your computer. You can define keyboard shortcuts, mouse and trackpad gestures, control Stream Deck, manage your computer from your phone using BTT Remote, customize the content of the Touch Bar, and more. I initially bought it many years ago to customize the Touch Bar (as I described in the [previous version of this article]({% postUrl "favorite-mac-tools" %}#better-touch-tool)), and nowadays, I still use it to define some more advanced keyboard shortcuts. I have shortcuts that will mute and unmute my microphone (no matter if I'm using Teams or Zoom), pause and play music, start some of the most common apps, etc. I describe additional keyboard shortcuts in more detail in the [You Don't Need Stream Deck, You Need Macros]({% postUrl "you-dont-need-stream-deck-you-need-macros" %}) article.

### [Karabiner Elements](https://karabiner-elements.pqrs.org/)

{% postImage "karabiner-elements.jpg", "Karabiner Elements" %}

*A powerful and stable keyboard customizer for macOS*, as its tagline says. And boy, it is powerful indeed. Karabiner Elements covers all my keyboard customization needs (although, for convenience, I still use BetterTouchTool for some more advanced keyboard shortcuts):

- Remapping keys
- Changing the behavior of function keys on specific keyboards (I want them to act as function keys on an external keyboard and, at the same time, act as media keys for MacBook's built-in keyboard)
- Creating complex mappings (pressing both Shift keys to toggle Caps Lock)

Another great thing about Karabiner Elements is that it stores the configuration files as JSON. So I can save them in a git repository and have a well-documented history of all the changes I made.

### [Magnet](https://magnet.crowdcafe.com/) 💰

{% postImage "magnet.jpg", "Magnet" %}

A tool for managing windows with keyboard shortcuts. It allows me to move windows between monitors or split them into halves, quarters, or even sixths without having to drag them with the mouse. I paid for this tool only because I didn't do my research, and I didn't check if there were free apps that could do the same. But luckily, there are, and if I were looking for a windows manager for macOS today, I would use [Rectangle](https://rectangleapp.com/) instead. If you're looking for a more advanced tiling windows manager similar to i3 or xmonad, there is also [Amethyst](https://ianyh.com/amethyst/).

### [Monosnap](https://monosnap.com/) 🆓/💰

{% postImage "monosnap.jpg", "Monosnap" %}

I use Monosnap to take screenshots, crop, and annotate them on the fly. Then, I can send those screenshots to someone by simply dragging them into a chat app or an email. Before Monosnap, I used [Skitch](https://apps.apple.com/us/app/skitch-snap-mark-up-share/id425955336?mt=12), but it seems Skitch is now abandoned. Even though Monosnap has a paid plan, the 2GB of storage in the free plan is generous enough that I don't think I'll ever become a paying customer[^2]. Monosnap also supports recording videos of your screen, but I got used to using another tool for this.

### [Kap](https://getkap.co/)

{% postImage "kap.jpg", "Kap" %}

A simple and free tool for recording videos of my screen. The video can then be trimmed in Kap and exported to one of many supported formats (including MP4 and GIF). It's a great tool for when I want to share something happening on my screen. Even though the aforementioned Monosnap also supports recording videos, I use Kap out of habit. But if you're already using Monosnap to record videos, I don't think Kap has enough features to justify the change.

### [QSpace Pro](https://qspace.awehunt.com/en-us/index.html) 💰

{% postImage "qspace.jpg", "QSpace Pro" %}

For a long time, I have been looking for a file manager that supports multiple panes (which surprisingly is still not supported in macOS' default file manager - Finder). And I randomly found QSpace Pro, which works pretty well. It's a paid app, but it's cheaper than [Forklift](https://binarynights.com/) (another dual-pane file manager that some people recommended), and it doesn't require a subscription like the [Path Finder](https://www.cocoatech.io/) (seriously, a subscription model for a friggin file manager?!). It offers plenty of keyboard shortcuts, and with plugins, I can connect to external services like Dropbox or Google Drive.

### [Obsidian](https://obsidian.md/) 🆓/💰

{% postImage "obsidian.jpg", "Obsidian" %}

My go-to note-taking app. I use it for all my note-taking needs: writing articles, creating mind maps of my presentations, planning my year, etc. I switched from Evernote to Obsidian long ago, even before Evernote became practically useless with the free plan. Obsidian uses Markdown files stored locally on my computer, so I don't have to worry about losing access to my notes or having to go through a difficult migration process if I ever need to switch to a different tool. I wrote a detailed article on how I use Obsidian: [How I Organize My Notes With Obsidian]({% postUrl "obsidian" %}). Even though Obsidian comes with paid plugins, I don't use any of them.

### [Carbon Copy Cloner](https://bombich.com/) 💰

{% postImage "carbon-copy-cloner.jpg", "Carbon Copy Cloner" %}

This is my preferred tool for backups. I don't know if I did something wrong, but when I tried to use Time Machine with a non-Apple NAS, I was constantly running into issues. The backups were getting corrupted, and I was losing access to the old versions of the files. Carbon Copy Cloner solved all my problems with backups. I use it to back up specific folders during the night.

The main selling point of making backups using Time Machine was that I could, in theory, set up a new computer from this backup[^3]. But I know I won't need that. If I ever lose/break my computer, I will get a new one and install applications manually. Then, I will restore specific folders (those that Carbon Copy Cloner backs up for me every night). Once, I tried to set up a new MacBook from an old one using the Migration Assistant, but it copied so much unnecessary old trash that eventually, I ended up reinstalling everything from scratch.

### [Ferdium](https://ferdium.org/)

{% postImage "ferdium.jpg", "Ferdium" %}

A chat aggregator. I use Telegram, WhatsApp, and Discord to communicate with people. And in the past, I used even more applications, including multiple Slack channels. Ferdium allows me to have all those different chat services in one app instead of starting a separate app for each one.

What I don't like about Ferdium is that every service I add starts a separate electron application. With many chats, RAM usage goes through the roof. But I didn't find a workaround for this problem (except for not using so many chats). Regardless of this issue, Ferdium is still the best app I've used so far (after trying Franz, Rambox, One Chat, and - now discontinued - Ferdi).

### [Todoist](https://todoist.com/) 🆓/💰

{% postImage "todoist.jpg", "Todoist" %}

I use Todoist to manage my TODO tasks, and I really like it. The free plan is still perfectly suitable for me because I created a lot of projects before the number of projects in the free plan was severely limited. Now, I can rename and reuse old projects without having to create new ones. If I ever run out of projects or need some paid features, like reminders, I will definitely pay for the paid plan instead of looking for a replacement, because Todoist is a very solid app.

### [Toggl](https://toggl.com/) 🆓/💰

{% postImage "toggl.jpg", "Toggl" %}

A time-tracking app. Ever since I started freelancing, I've been using Toggl to create time sheets for my clients. The free plan is all I need from the app. I love the feature of stopping the timer after a predefined period of inactivity, so I never have to worry when I get distracted and leave my computer for longer without stopping the timer.

### [Velja](https://sindresorhus.com/velja)

{% postImage "velja.jpg", "Velja" %}

It's a browser picker application. It lets you define rules and open links from specific apps or specific URLs in different browsers, not just the default one. I need it because I use the same computer for client and personal work and I want all the client-related links (JIRA, GitLab, etc.) to open in my "work" browser (which is currently Brave, because I need to be able to run Teams in the browser and Firefox was having some problems with that[^4]).

### [Spark](https://sparkmailapp.com/) 🆓/💰

{% postImage "spark.jpg", "Spark" %}

I think I'm slowly running out of built-in macOS apps that I didn't replace with something else... Before macOS Ventura, Apple Mail was missing one feature critically important to me - "send later". That's why I looked for an alternative, and I found Spark. I'm still using the old, "Classic" version of Spark, not the new one that is needlessly packed with AI features. This email client also solved some other small annoyances. For example, Apple Mail was occasionally messing up my flags - I used different flag colors for different emails, and sometimes it would randomly change the colors of the flags or put emails that used different flags under one flag. Pinned emails (that appear at the top of the inbox), "undo send", or "snooze" were all additional quality-of-life improvements that Apple Mail didn't have at that time. So I stayed with Spark mail until now.

However, you should be aware of some privacy concerns regarding Spark. For example, [it stores email credentials on its servers](https://www.reddit.com/r/privacy/comments/tjfb4z/spark_mail_or_apple_mail_app/) so that it can send emails later, even when your laptop is turned off. Seeing that Apple Mail now has most of the features I was missing before, I might give it another go one day.

### [Figma](https://www.figma.com/) 🆓/💰

{% postImage "figma.jpg", "Figma" %}

Even though Figma is considered primarily a prototyping tool, I use it for all my simple graphic editing needs. It's easy to use for simple tasks (adding text to an image, creating patterns from a few icons, etc.), and unlike GIMP, which I used before, I don't have to search for tutorials explaining how to do all those simple things. Don't get me wrong, GIMP is awesome, but I don't use it often enough to learn how to use it properly. And Figma is much more intuitive for casual usage.

### [1Password](https://1password.com/) 💰

{% postImage "1password.jpg", "1Password" %}

My password manager since I switched away from LastPass a few years ago. Why am I not using the password manager built into macOS? Because my wife is not using Apple devices, and we share some passwords and important documents. There are some good alternatives to 1Password, like [Bitwarden](https://bitwarden.com/), that a lot of people recommend, but so far, I'm a happy 1Password's user. Its UX is very pleasant. I especially like that I can use it to store and fill in OTP tokens. Each year when my subscription is supposed to renew, I'm thinking about switching to something else, but I always end up extending my subscription. When it comes to something as important as a password manager, I just don't think it's worth replacing a tool that works with a completely new one just to save a few bucks.

### [Nucleo app](https://nucleoapp.com/)

{% postImage "nucleo-app.jpg", "Nucleo app" %}

I use Nucleo app to manage the icons I have saved on my computer (I have a library of over 10,000 SVG icons that I downloaded when I had a subscription at one of the premium icon services). Nucleo itself is quite an expensive icon bundle, but their app is free to use and works very well for finding a specific icon in a large pool of locally stored icons. Nucleo app looks very similar to the [Iconset](https://iconset.io/) app I used in the past. But I moved away from using Iconset when it became a paid app.

### [n8n](https://github.com/n8n-io/n8n) 🆓/💰

{% postImage "n8n.jpg", "n8n" %}

n8n is an automation tool - a *fair-code distribution* alternative to [Zapier](https://zapier.com/). Technically, this is not a macOS app, but it's a very useful app that you can install on your local computer or on an external server with a Docker image. I use it for simple things (like deploying this blog every morning to publish scheduled posts) and also some more advanced ones (like managing subscription-based access to a side project followed by sending Telegram notifications and emails that I described [here]({% postUrl "web-automation" %})).

Currently, n8n is being developed by a company funded with VC money, and that rarely ends up well for free-to-use projects. If things go south, I'll switch to [Huginn](https://github.com/huginn/huginn) for my automations.

### [PDFGear](https://www.pdfgear.com/)

{% postImage "pdf-gear.jpg", "PDFGear" %}

Occasionally, I need to edit a PDF file. And I don't mean simply annotating it (which I can do with the built-in Preview app) but actually changing the text written in a PDF. Instead of paying Adobe a monthly fee for this feature, I found PDFGear - a free PDF editor with plenty of advanced features that fulfills all my occasional needs when working with PDF files. 

### [The Unarchiver](https://theunarchiver.com/)

{% postImage "unarchiver.jpg", "The Unarchiver" %}

A free-to-use application for opening any type of archive on a Mac.

### [OBS Studio](https://obsproject.com/)

{% postImage "obs.jpg", "OBS Studio" %}

If you're a video streamer, this tool needs no introduction. OBS Studio is probably the best open-source recording and streaming software. I used it on a few occasions when I needed to simultaneously record a video from multiple input sources (screen-sharing plus camera).

The most interesting use I found for it was when we were doing SCRUM Poker to estimate sprint tickets. Instead of waving my phone in front of the camera like a caveman, I connected a text document to my video feed. Whenever I typed a number, this number appeared over my head. It was a pretty stupid way to spend the CPU power (using OBS increases the CPU usage), but it was totally worth it!

### [KeyCastr](https://github.com/keycastr/keycastr)

{% postImage "keycastr.jpg", "KeyCastr" %}

A keystroke visualizer. I use it when I'm recording a screencast, and I want to display the keys I'm pressing. A very nice tool with plenty of customization options.

### [Audacity](https://www.audacityteam.org/)

{% postImage "audacity.jpg", "Audacity" %}

Every once in a while, I need to do some audio processing (crop an audio recording, remove background noise, or just convert a recording to another format), and Audacity is still the best tool for working with audio. At first glance, it might look overwhelming, but because it's been around for a long time, the internet is full of guides on how to do most of the basic processing.

### [HandBrake](https://handbrake.fr/)

{% postImage "handbrake.jpg", "HandBrake" %}

An open-source tool that can convert a video between different formats while performing some additional processing. I use it to perform resizing and removing audio from videos while converting them to a more space-efficient format.

## Install-and-forget apps

There are a few small applications that I installed one day, allowed them to run on startup, and basically forgot about them. They do their job perfectly while running in the background.

### [Captin](https://captin.mystrikingly.com/)

{% postImage "captin.jpg", "Captin" %}

A very simple tool that shows the Caps Lock status. I use a quite quirky way of enabling Caps Lock (pressing both Shift keys at the same time toggles the Caps Lock on and off), so I installed Captin to get a popup confirmation that Caps Lock has been successfully enabled or disabled.

### [Balance Lock](https://apps.apple.com/us/app/balance-lock/id1019371109)

{% postImage "balance-lock.jpg", "Balance Lock" %}

If your headphones randomly change the balance settings (so the sound is audible more in one ear than in the other) - which is something that macOS is guilty of doing, Balance Lock is the app you need. It will automatically center the balance of the audio back each time macOS messes it up.

### [MOS](https://mos.caldis.me/)

{% postImage "mos.jpg", "MOS" %}

I switched back from using a trackpad to a mouse, only to realize that Logitech's LogiOption+ app sucks. It turned out that to get a smooth scrolling experience for a Logitech mouse, I needed a 3rd party app. Luckily, I found a free app called MOS that solved my problems. Another useful feature it has is "per-application mouse scroll setting" that I use for the VPN application called Citrix when remotely connecting to my work PC (the default scroll settings caused scrolling in Citrix to be very janky, so I had to adjust them).

### [noTunes](https://github.com/tombonez/noTunes)

{% postImage "notunes.jpg", "noTunes" %}

Another small utility to fix Apple's stupidity (oh, it rhymes!). This tool prevents Apple Music from launching when I press "play" on my AirPods if the Spotify app is not running. Because, you know, I have never EVER used Apple Music, but it totally makes sense for macOS to think that today is the day I finally want to play music from this app. Yes, macOS. Today is definitely the day when we play something from my impressive iTunes library of zero songs.

## Other, less thrilling applications

Some other, more well-known (but also more mundane) apps that I use include:

- [Elgato's Stream Deck software](https://www.elgato.com/ww/en/s/downloads) - because I need to control my Stream Deck somehow. I'm considering switching to BetterTouchTool to control my Stream Deck, though.
- [Inkscape](https://inkscape.org/) - for when I need to edit an SVG file. I haven't edited an SVG file in ages, but if I were to do this today, I would probably try Figma first.
- [f.lux](https://justgetflux.com/) - adapts the brightness of my screen depending on the time. Early in the day or late at night, it will make the colors warmer to make it less taxing on my eyes.
- [TeamViewer](https://www.teamviewer.com/pl/) - for those occasional times when I need to help my parents with something on their computer.
- [Spotify](https://www.spotify.com/) 💰 - for listening to music.
- [Visual Studio Code](https://code.visualstudio.com/) - my code editor. Everyone knows what VS Code is.
- [VLC](https://www.videolan.org/) - one of the most popular video players for any operating system. I've been using it on every computer I have owned for as long as I can remember, and I never had any issues. But I've heard good things about [Infuse](https://firecore.com/infuse), and I already use it on my iPhone, so maybe one day I'll switch to this app on my MacBook, too.

## Apps I like but don't use anymore

I've stopped using some of the apps listed in the [previous version of this article]({% postUrl "favorite-mac-tools" %}). Even though I still think they are great, I simply don't have use for them right now:

- [Anki](https://apps.ankiweb.net/) 🆓/💰 - in my opinion, Anki is still the best app for creating and reviewing flash cards. I used it almost every day when I was learning Japanese a few years ago, and I loved it, even though the design looked crude and a bit outdated. The iOS app is paid, but the Android or web versions are free. I stopped using Anki because I'm currently not learning any new language.
- [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12) - an application that prevents your computer from going to sleep. I stopped using it because, in a rare instance, when I need to prevent my MacBook from sleeping, I use Alfred's "coffee coffee" workflow. It uses the built-in `caffeinate` script to prevent my computer from sleeping.

## Apps I want to try

Finally, there are a few applications that look very interesting, but I haven't found a use case for them yet. I'm making a note about them, and hopefully, one day, I'll give them a try:

- [Orbstack](https://orbstack.dev/) - seems to be a nice and supposedly faster alternative to Docker Desktop. However, I currently don't use Docker for any of my projects.
- [MeetingBar](https://meetingbar.app/) - a simple app that sits in your menu bar and reminds you of upcoming meetings. You can also join the meeting directly from this tool. It looks very cool, but most of my daily meetings happen in Teams, which I have to use through the browser or a VPN. If I ever get back to a standalone Teams client or start using different videoconferencing tools, I'll give the MeetingBar app a try.
- [Bruno](https://github.com/usebruno/bruno) - looks like a pretty cool alternative to Postman for testing APIs.

---

Thanks for reading and see you in the next edition of this list (hopefully sooner than in five years)!

If you have suggestions regarding other awesome macOS apps I should try, or if you have your own list of favorite tools, please share them in the comments (or email me using the [contact form](/about#contact-me)). And if you're interested in the CLI tools I'm using, I'll soon publish an updated version of my [old list of CLI tools]({% postUrl "favorite-cli-tools" %}).
<!-- TODO: Change the URL to point to the new list once that article is ready -->

[^1]: Because that's what everyone needs in a launcher - AI!
[^2]: I actually don't use the cloud storage for screenshots. I annotate and send them without storing them in the cloud. The only time I had to use cloud storage was when I couldn't share the screenshot with someone directly, and I needed to store it somewhere online for a couple of days.
[^3]: Of course, as long as the data doesn't get corrupted in the meantime.
[^4]: Let me tell you a funny story about the most popular videoconferencing application in the world. Many large organizations use it, so obviously, it needs extensive admin-level settings that allow security teams to prevent users from using the app on unauthorized operating systems or through unauthorized browsers. For example, some companies might say that using Teams on macOS is forbidden because Windows is the only "blessed" operating system where you can use this app. If you try to open Teams in your browser on macOS, you will get an error message saying that your administrator prevented you from using Teams on this operating system. But how does the most widely used videoconferencing tool check what operating system you're using? Surely, it has to be something so advanced that the users wouldn't be able to easily tamper with it, right? Definitely, it wouldn't be just checking your browser's user agent of your browser because even a ten-year-old can change the user agent with one of the many free-to-use plugins. Right, Microsoft? You wouldn't be just checking the browser's user agent, would you? Would you?!
