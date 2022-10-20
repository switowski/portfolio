---
title: How I Organize My Notes With Obsidian
description: Summary goes here
tags: ['Obsidian', 'Productivity']
date: 2030-01-01
---

A few months ago, I moved from Evernote to [Obsidian](https://obsidian.md/). I have been using Evernote as long as I can remember. And every now and then I was checking some alternatives. I tried Notion, but its first version was excruciatingly slow on mobile (waiting for 10+ seconds each time I wanted to take a quick note was a no-go for me). I remember trying some other apps like the Bear App, but in the end I was always coming back to Evernote. Evernote felt a bit clunky and the constant nagging about upgrading was annoying, but even with all that, it worked fine for me for many years. I was fine with the limitation of the devices, and I was not uploading more than 50MB of pictures every month, so I could stay on the free plan. So I wasn't looking for a replacement *very hard*.

Then I saw a [TIL: using hammerspoon to launch any app with a hotkey](https://patrick.wtf/posts/til-hammerspoon-logseq-hotkey) article from my friend Patrick where he described how he uses [Logseq](https://logseq.com/) and this idea of a note taking app that sits on top of a folder containing just a bunch of Markdown files looked really promising.
So I gave Logseq a quick try and while it looked nice, I started looking if there are other similar tools. That's how I found about Obsidian.

Two things convinced me to Obsidian instead of the Logseq:

- The interface was more appealing to me - I wanted something that resembles the interface of Evernote - a bunch of nested folders where I could categorize my notes. Obsidian delivers exactly that. But if you're used to a different interface, Logseq might actually look better for you (it looks more like [Workflowy](https://workflowy.com/) that I also used).
- Obsidian has more plugins. I spent a few minutes installing a few popular plugins and found them very useful.

To start with Obsidian, you need to create a folder (called Vault) somewhere on your computer and point Obsidian to that folder. And then you can create new notes that will be stored in Markdown format, install some plugins, themes, customize keyboard bindings, etc. There are plenty of good tutorials on how to get started. I watched a few from Danny Hatcher, like [this one](https://www.youtube.com/watch?v=njibNuFQwjw) and I enjoyed them. The main benefit from those tutorials was to see how people customize their Obsidian installations and what plugins are worth to use (I will share mine below).

Using Obsidian on my computer is cool, but it would be great to have access to my notes on my phone or other devices. Let's talk about synchronization.

## Synchronizing notes

Obsidian is free to use, but it comes with 2 paid plugins: *"Publish"* (for publishing your notes online and making them available publicly) and *"Sync"* (for synchronizing your notes using Obsidian's servers). "Sync" plugins will synchronize your vaults between all your devices. This is a very good solution especially if have have a LOT of notes, images and other files stored in your Vaults because Obsidian doesn't have a size limit (i.e. you can use Obsidian sync as a cheap backup solution for multiple files).

But you can also create your Obsidian vault in Dropbox or iCloud and that *should* handle the backups for you for free. With a small caveat that those backups sometimes are unreliable.

:::callout-warning

### iCloud synchronization might fail *badly*

Some users report problems when using [Dropbox](https://www.reddit.com/r/ObsidianMD/comments/kgb1d7/obsidian_syncing_issues_with_dropbox/), [iCloud](https://forum.obsidian.md/t/file-loss-with-icloud-ipad-mac-sync/24063) or similar service for synchronization. Those services are bad for synchronizing data that changes often or might have some conflicts when trying to synchronize data from multiple devices at once. It can lead to data corruption.

This problem probably affects less than 0.01% of the users. But what if this happens to you? What if suddenly your vault get corrupted and you can't access all those important notes that you were taking for years?

### Backing up Obsidian to a git repository

I solved this problem by setting up a cronjob to backup my vault to GitHub every 1 hour following [this](https://medium.com/analytics-vidhya/how-i-put-my-mind-under-version-control-24caea37b8a5) tutorial:

1. Create a git repository inside your vault and link it to GitHub private repository.
2. Add a bash script that will check for changes and if there are any, it will create a new commit with the current timestamp and push it to GitHub. Here is the [source code](https://github.com/switowski/dotfiles/blob/master/scripts/backupObsidian.sh).
3. Add a cronjob to execute that bash script every 1 hour (or less if you want).

With this, all my notes are backed up every hour. Of course, this doesn't solve the problem of backing up notes from the mobile, but this is the risk I can live with, given that I mostly use my phone to read my notes, not to edit them.
:::

## Folder structure

One thing that I do completely different from all those tutorials for Obsidian or other [PKM](https://en.wikipedia.org/wiki/Personal_knowledge_management) tools is that I don't link my notes like crazy. I don't get why people get so proud showing their graphs of connected notes containing hundreds of nodes. That looks like a complete mess. I like to keep all the relevant information in the note and only link to external resources for additional reference.

I mostly rely on the folders structure to organize my notes. I came up with this structure back in the Evernote's days and so far I'm quite happy. Here is my current setup (in the parenthesis next to each folder I've put what type of notes go inside):

```plaintext
.
├── !!Daily todos.md
├── !!Planner.md
├── <Any other Inbox notes>
├── Journal
│   └── !!Daily achievements.md
├── MindMaps
│   ├── !5 important things to work on.md
│   └── Archival
│       └── Writing Faster Python.md
├── Notes
│   ├── Archival (notes and plans for investments)
│   ├── Blog
│   │   ├── Ideas
│   │   │   ├── Big Bag Of Ideas.md
│   │   │   ├── Drafts
│   │   │   │   ├── How I organize my notes with Obsidian.md
│   │   │   │   └── Trash
│   │   │   │   │   └── <graveyard for unused posts>
│   │   └── Publishing workflow.md
│   ├── Books (notes from books I have read)
│   ├── Conferences (notes from conferences)
│   ├── Courses (notes from courses I took)
│   ├── Gym (workout plans, notes, etc.)
│   ├── Investing (notes and plans for investments)
│   ├── KB (knowledge bases on various topics)
│   │   ├── Estimations.md
│   │   └── Presentations.md
│   ├── Misc (completely random stuff without separate category)
│   │   ├── T-shirt sizes.md
│   │   ├── Bucket lists.md
│   │   ├── What is in the basement.md
│   │   └── attachments
│   │       └── IMG_20180816_173246075.jpg
│   ├── People (keep track of people I don't often talk with)
│   │   ├── Addresses.md
│   │   └── Person A.md
│   ├── Personal Projects (ideas for potential future projects)
│   ├── Presentations
│   │   ├── Full (fully written presentations)
│   │   ├── Ideas (ideas for future presentations)
│   │   └── Proposals (proposals for conferences)
│   ├── Travel (itineraries for trips)
│   │   ├── !Car rental.md
│   │   ├── !Hotel booking checklist.md
│   │   ├── !Restaurants.md
│   │   └── Trip A.md
│   └── Work (everything work related)
│       ├── Dev notes (notes on specific topics)
│       │   ├── Django.md
│       │   ├── Docker.md
│       │   └── TIL.md
│       ├── Freelancing (general notes for freelancing)
│       │   ├── Contracts.md
│       │   ├── LinkedIn profile changelog.md
│       │   └── Preparing to an interview.md
│       ├── Projects (notes on specific projects)
│       │   ├── Project A
│       │   └── Project B
│       └── Client A (notes related to specific client)
│           ├── !Dev notes.md
│           └── !Emergency guide.md
└── Templates
    ├── Daily note.md
    ├── Person.md
    └── Talk.md
```

### Inbox

The topmost folder of Obsidian is my Inbox. Here I keep important notes (prefixed with one or more exclamation marks). But this is also the place where I create new notes when I don't know immediately where to put them. If I want to take a quick note, I don't want to think "hmm, which folder would be the best". I just drop it here and later when are too many notes in my inbox, I categorize them and move to subfolders.

#### !!Planner.md

Here I store my short-, mid- and long-term goals. Here is how it looks like:

```plaintext
- LONGTERM GOALS:
  - Where do I see myself in 5 years?
    - [redacted, I don't want to spoil the surprise ;)]
- 2022:
    - YearlyGoals
      - xxx
      - yyy
    - January
        - #MonthlyGoals
            - xxx
        - #WeeklyGoals Week 1 (3-7.01)
            - [x] yyy
        - #WeeklyGoals Week 2 (10-14.01)
            - [ ] zzz
                  Lack of time to do this
- 2021:
- 2020:
```

I usually have 2-4 yearly goals, then try to split them into months and finally, I assign more specific goals ("redesign blog", "write proposal for conference", etc.) into each week. Weekly goals can still be split into actionable tasks (e.g. "redesign blog" can be split into "find a template", "write base layout", etc.) and those end up in Todoist where I prioritize them and assign to specific days.
I use checkboxes to track if I managed to achieve my. If I don't, I put a note why. With the Outliner plugin I can easily fold/unfold nested lists and move items around (more on plugins later).

### Subfolders

#### Journal

Some people write a daily journal (some even create a separate note for each day). I never had time to do that. But when I work on my own projects (e.g. when building online courses) it's hard for me to keep track of what I did every day. I'm getting stressed that I don't do enough. So I started writing down what I want to achieve on a given day (1-2 important things and maybe some "stretch goals" if there is time left) and then at the end I write down what I actually did. This worked really well and helped me to see all those additional things I did that weren't planned but had to be done.

#### Mindmaps

With [Obsidian Mind Map](https://github.com/lynchjames/obsidian-mind-map) plugin I can make mind maps directly in Obsidian (before I was using [SimpleMind](https://simplemind.eu/)). So I keep my mind maps in a separate folder.

I have one main mind map where I keep track of mid- to long-term goals like "Finish XXX book", "Do YYY course", "Prepare ZZZ talk", "Learn Japanese", "Update family blog", "Reorganize portfolio", etc. So it's a bit different than what I put in the `Planner` note, because it lets me track goals that don't have specific steps (like learning a new language - I don't split that goal into actionable steps like "learn xxx words per week"). I try to review those goals every month to make sure I stay focused on the right things (otherwise I tend to start too many things at once).

I also use mind maps to plan the outline of my talks, for example here is one from the "Writing Faster Python 3" talk:

{% postImage "mind-map.jpg", "Example of a mind map" %}

#### Notes

This is the main folder for my notes, with multiple subfolders. I store ideas and drafts for future blog posts, notes from books or conferences, travel plans, etc.
Some more interesting folders are:

##### KB

I have a folder for personal "knowledge bases". For example, when I prepare a talk for a conference, I like to write down everything I want to say. It feels very natural and when I'm in a flow with all the outline and notes prepared I can just write the whole talk in one sitting. But at the beginning I was just writing everything that came to my mind without knowing how long it will take to say it. It always resulted in having way too much content for my time slot. So I measured how fast I usually talk during a presentation (it's 150 words/minute for a normal talk and 180 words/minute for a lightning talk) and now I know that for a 30 minute-long-talk I need around 4000 words.

##### People

I have some friends that I only see once in a while (e.g. at EuroPython) and when we speak, I'm a bit embarrassed that I don't remember details from their life (for example, where they worked last time, that they had a baby last year, etc.) I try to fix that by taking some notes about those important events, but I'm not very thorough at updating this section. It feels *weird* to take notes about other people.

##### Presentations

Here I store everything related to my talks. Ideas for future talks, drafts for talks that I'm working on, etc. I also keep track of the proposals I send because when you send the same talk to a few conferences, it saves you a lot of time if you don't have to write the outline from scratch each time.

##### Work

Here I store 3 categories of notes:

- General, programming notes, categorized by the topic (e.g. "Django" or "Docker")
- Notes related to specific project I'm working on (e.g. new video course or a side-project)
- Notes related to a specific client I'm working with (e.g. how to log in to their system, glossary of terms they use, programming notes related to their tools, etc.)

#### Templates
Finally I have a folder called templates that is used by the "Templates" core plugin. Basically it lets you create some templates with placeholders like a current date and then you can run command "Insert template", choose a template from the list and this will prefill the current note with that template. Here is an example of my "Talk" template that I use when I start working on a new conference talk:

```md
**What**: Presentation on XXX
**Why**: To teach people YYY and show them ZZZ
**Who**: Beginners/intermediate developers
**How**: 30 minute-long talk

### Outline:
* Introduction [2 min]
* Topic A [3 min]
	* Subtopic

### Agenda:
* Topic A
	* ...
* ...

### Resources:
- Link 1
- Link 2
```

## Tips

### ! and !! prefixes

I prefix important notes with "!" and "!!".

"!!" is reserved for globally important notes, like the daily journal, planner, standup notes that I want to report, etc. That way, I can easily reach them by opening the "Quick open menu" and typing *!!*:

{% postImage "prefixes.jpg", "! and !! prefixes" %}

Then I use "!" for notes that are important per specific category. For example, I keep an "!Emergency guide" for each project where I'm involved in DevOps work, so in case of a fire, I can quickly pull the checklist of how to fix things. Prefixing notes with "!" will automatically put them at the top of the folder if you sort by name.

### Store attachments with your markdown files

When you drop an attachment (picture, voice recording, etc.) on a note, it will automatically save it and paste a link to it in the note. You have a choice of where you want to save them (all of them in a separate folder, next to the note, in a subfolder next to the note, etc.). I find the "In subfolder under current folder" option to be the most convenient - it's super easy to find and move your attachments with your notes or delete them when you don't need them. I can't imaging going through hundreds of attachments in one common folder and figuring out which ones are not used anymore.
To change the location of your attachments open settings -> "Files & Links" -> "Default location for new attachments."

### Hotkey for quick note

I use Obsidian to take quick notes. So I want to have a shortcut that would open Obsidian and create a new note.
I've solved this problem with [BetterTouchTool](https://folivora.ai/) - which is a paid tool that I bought to customize the touchbar in my previous Macbook. Now that I no longer have the touchbar I still use it to define custom shortcuts. But there are some free tools that you can use like [Hammerspoon](https://www.hammerspoon.org/).

## Plugins

Obsidian has a few core plugins that allows you to toggle different features. For example you can enable or disable audio files, link previews on hover, slides, templates, workspaces and more.

But where Obsidian really shines is the catalog of community plugins with almost 700 plugins. The first thing you should do once you install Obsidian is to take a look at the most popular plugins (based on the number of downloads) because I can guarantee you will want to add some of those.

Here is a list of the community plugins that I've installed:

- Better Command Palette - adds multiple improvements to the Command Palette. Most recent commands are moved to the top of the list, you can pin some commands, search by tags, hide some commands, etc.
- Better Word Count - replacement for the builtin Word Count core plugin. This one additionally shows you word and character count when you select some text.
- DataView - allows you to write SQL-like queries to retrieve data and do data wrangling with JavaScript. It's a very powerful plugin and [here](https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/2) are some examples how others are using it.
- Kanban - let's you create Kanban boards in your notes.
- Mind Map - plugin for creating mind maps.
- Natural Language Dates - transforms expressions like @Today or @Next Wednesday into actual dates. Quite useful if you're writing a daily journal and you want to quickly link previous/next days together.
- Omnisearch - better search for your notes. Displays search results immediately, with most relevant ones at the top.
- Outliner - basically a [Workflowy](https://workflowy.com/) plugin for Obsidian that makes working with long, nested lists much easier. You can fold/unfold elements with keyboard shortcuts and when you move a nested list it moves all the items together.
- Style settings - allows you to edit settings of Obsidian themes. To customize the look of Obsidian you can install a custom theme or write your own. But if you want to use an existing theme and only slightly modify some parts, you can install Style settings plugin and - if the theme supports it - you will get a separate setting panel to modify style of your themes like the font family, header's sizes, colors, etc. I used this at the beginning to make small changes to the [Things 2](https://github.com/colineckert/obsidian-things) theme, but later I switched to using my [custom CSS](https://help.obsidian.md/Advanced+topics/Customizing+CSS) snippet to apply CSS modifications (so I can keep my changes under version control and add comments).
- Tag wrangler - if you're using a lot of tags, this plugin makes working with them much easier. You can see all your tags in one place, easily rename a tag, etc.
- Todoist plugin - if you're using Todoist, you can install this plugin and include all your task inside a note.

## Half a year later

More than half a year in and I'm still a very happy Obsidian user. I finally found a tool to replace Evernote. Actually to replace 3 tools that I was using before:

- Evernote - as a note taking app
- Workflowy - for planning and keeping track of my medium- and long-term goals
- SimpleMind - for creating mind maps

When I have an idea for a blog post I can already start writing it in Markdown. With Evernote I always had to go through the struggle of reformatting the whole text from the scratch.

Plugins like Kanban or Mind Map are *good enough* replacements for dedicated tools like Trello or SimpleMind. They might be missing some advanced features, but I have everything in one place accessible from my laptop of smartphone and that convenience is great.

One thing that I'm missing from Obsidian is a possibility to customize ALL the shortcuts. I'm spoiled by VS Code where basically any command can be assigned to a keyboard shortcut. With Obsidian some commands have different mapping than VS Code, so I wish I could edit them and use the exact same keyboard commands in both tools.

Let me know if you some other plugins worth checking out or Obsidian tricks you want to share!
