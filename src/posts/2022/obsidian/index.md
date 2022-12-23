---
title: How I Organize My Notes With Obsidian
description: After years of using Evernote, I finally found a worthy replacement. And not only for Evernote but for two other tools as well. Let me show you how I organize my notes, mind maps, tasks, and long-term goals in Obsidian.
tags: ['Obsidian', 'Productivity']
date: 2022-12-23
---

A few months ago, I moved from Evernote to [Obsidian](https://obsidian.md/). I have been using Evernote for as long as I can remember. And every now and then, I checked some alternative solutions. I tried Notion, but its first version was excruciatingly slow on mobile (waiting for 10+ seconds each time I wanted to take a quick note was a no-go for me). I remember trying other apps like Bear, but in the end, I was always coming back to Evernote. Evernote felt a bit clunky, and the constant nagging about upgrading to a paid version was annoying, but even with all that, it worked fine for me for many years. I stayed within the device limit, and I wasn't uploading more than 50MB of pictures every month, so I didn't have to upgrade from the free plan. Therefore, I wasn't looking *very hard* for a replacement.

Then I saw the [TIL: using hammerspoon to launch any app with a hotkey](https://patrick.wtf/posts/til-hammerspoon-logseq-hotkey) article from my friend Patrick, where he described how he uses [Logseq](https://logseq.com/), and this idea of a note-taking app that sits on top of a folder with Markdown files looked really promising! So I gave Logseq a quick try, and while it looked nice, I started searching for other similar tools. That's how I found out about Obsidian.

Two things convinced me to use Obsidian instead of Logseq:

- The interface is more appealing to me. I wanted something that resembled Evernote - a bunch of nested folders where I could categorize my notes. Obsidian delivers precisely that. However, if you're used to a different interface, Logseq might actually look better for you (it looks more like [Workflowy](https://workflowy.com/), which I have also used).
- Obsidian has more plugins. I spent a couple of minutes installing a few popular ones and found them very useful.

To start with Obsidian, you need to create a folder (called a *vault*) somewhere on your computer and point Obsidian to that folder. Then you can create new notes stored in the Markdown format, install some plugins and themes, customize keyboard bindings, etc. There are plenty of good tutorials on how to get started. I watched a few from Danny Hatcher, like [this one](https://www.youtube.com/watch?v=njibNuFQwjw), and I enjoyed them. The main benefit from those tutorials was seeing how people customize their Obsidian installations and what plugins are worth using (I will share mine below).

Using Obsidian on my computer is cool, but it would be great to have access to my notes on my phone or other devices. And that's where synchronization comes into play.

## Synchronizing notes

Obsidian is free to use, but it comes with two paid plugins:

- Publish - used for publishing your notes online and making them available publicly.
- Sync - used for synchronizing your notes via Obsidian's servers.

The Sync plugin synchronizes your vaults between all your devices. This is a very good solution, especially if you have a LOT of notes, images, and other files stored in your vaults because Obsidian doesn't have a size limit. You can, for example, use Obsidian's sync as a cheap backup solution for multiple files.

But you can also create your Obsidian vault in Dropbox or iCloud, which *should* handle the backups for you for free. With a small caveat that those backups are sometimes unreliable.

:::callout-warning

### iCloud synchronization might fail *badly*

Some users report problems when using [Dropbox](https://www.reddit.com/r/ObsidianMD/comments/kgb1d7/obsidian_syncing_issues_with_dropbox/), [iCloud](https://forum.obsidian.md/t/file-loss-with-icloud-ipad-mac-sync/24063), or similar services for synchronization. Those services are bad for synchronizing data that changes often or might have some conflicts when synchronizing data from multiple devices at once. This can lead to data corruption.

This issue probably affects less than 0.01% of users. But what if this happens to you? What if suddenly your vault gets corrupted, and you can't access all those important notes you have been taking for years?

### Backing up Obsidian to a git repository

Following [this](https://medium.com/analytics-vidhya/how-i-put-my-mind-under-version-control-24caea37b8a5) tutorial, I solved the problem by setting up a cronjob to backup my vault to GitHub every hour:

1. Create a git repository inside your vault and link it to a private repository on GitHub.
2. Add a bash script that checks for changes and, if there are any, creates a new commit with the current timestamp and pushes it to GitHub. Here is the [source code](https://github.com/switowski/dotfiles/blob/master/scripts/backupObsidian.sh).
3. Add a cronjob to execute the bash script every hour (or often if you want).

Thanks to the above procedure, all my notes are backed up every hour. Of course, this doesn't solve the problem of backing up notes from the mobile. But this is a risk I can live with because I mostly use my phone to read my notes, not to edit them.
:::

## Folder structure

One thing I do differently from what all those tutorials for Obsidian or other [PKM](https://en.wikipedia.org/wiki/Personal_knowledge_management) tools suggest is that I don't link my notes like crazy. I don't get why people boast about their graphs of connected notes containing hundreds of nodes. That looks like a complete mess. I like to keep all the relevant information in the note and only link to external resources for additional reference.

When organizing my notes, I mostly rely on the folders structure. I came up with this structure when I was using Evernote, and so far, I'm quite happy. Here is my current setup (in the parenthesis, I explain what type of notes I put inside a given folder):

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
│   ├── Archival (stuff I no longer need)
│   ├── Blog
│   │   ├── Ideas
│   │   │   ├── Big Bag Of Ideas.md
│   │   │   ├── Drafts
│   │   │   │   ├── How I organize my notes with Obsidian.md
│   │   │   │   └── Trash (graveyard for unused posts)
│   │   └── Publishing workflow.md
│   ├── Books (notes from books I have read)
│   ├── Conferences (notes from conferences)
│   ├── Courses (notes from courses I took)
│   ├── Gym (workout plans, notes, etc.)
│   ├── Investing (notes and plans for investments)
│   ├── KB (knowledge bases on various topics)
│   │   ├── Estimations.md
│   │   └── Presentations.md
│   ├── Misc (completely random stuff without a separate category)
│   │   ├── T-shirt sizes.md
│   │   ├── Bucket lists.md
│   │   ├── What is in the basement.md
│   │   └── Attachments
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
│   └── Work (everything work-related)
│       ├── Dev notes (notes on specific topics)
│       │   ├── Django.md
│       │   ├── Docker.md
│       │   └── TIL.md
│       ├── Freelancing (general notes on freelancing)
│       │   ├── Contracts.md
│       │   ├── LinkedIn profile changelog.md
│       │   └── Preparing for an interview.md
│       ├── Projects (notes on specific projects)
│       │   ├── Project A
│       │   └── Project B
│       └── Client A (notes related to a specific client)
│           ├── !Dev notes.md
│           └── !Emergency guide.md
└── Templates
    ├── Daily note.md
    ├── Person.md
    └── Talk.md
```

### Inbox

The topmost folder of Obsidian is my Inbox. Here, I keep important notes (prefixed with one or more exclamation marks). This folder is also where I create new notes that I don't yet know where to put. If I want to take a quick note, I don't want to think, *"hmm, which folder would be the best?"* I just drop it here, and later when there are too many notes in my inbox, I categorize them and move them to subfolders.

#### !!Planner.md

Here, I store my short-, mid-, and long-term goals. Here is what it looks like:

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

I usually have two to four yearly goals that I try to split into months. Eventually, I assign more specific goals ("redesign blog", "write a proposal for a conference", etc.) to each week. Weekly goals can still be split into actionable tasks (e.g., "redesign blog" can be split into "find a template", "write base layout", etc.), and those end up in Todoist, where I prioritize them and assign them to specific days.

I use checkboxes to track if I managed to achieve my goals. If I didn't, I put a note about why this happened (90% of the time, it's the *"lack of time"*). With the Outliner plugin, I can easily fold/unfold nested lists and move items around using keyboard shortcuts, just like in Workflowy.

### Subfolders

#### Journal

Some people write a daily journal (and some even create a separate note for each day), but I'm not one of them -  I've never had the time. However, when I work on my own projects (e.g., when building online courses), it's hard for me to keep track of what I've done every day, and I'm getting stressed that I don't do enough. So I started writing down what I want to achieve on a given day (one or two important things and maybe some "stretch goals" if there is time). Then, at the end of the day, I write down what I actually did. This worked well and helped me see all those additional things I did that weren't planned but had to be done.

I sometimes change the structure of the daily entry in the journal. For example, when I had serious trouble sleeping, I started adding a "sleep score" for every day, where I noted down how long it took me to fall asleep, how many times I woke up during the night, etc. I also left notes on what I tried to do to improve sleep the previous day (i.e., sunlight in the morning, magnesium before bedtime, blue light filter, etc.).

Sometimes I forget to update the journal for weeks. And that's ok - no one is going to publish it. If you write a journal, remember that it's a tool that should help you, not some chore you have to do every day because of the bullet journal hype or some other passing fashion.

#### Mindmaps

With the [Obsidian Mind Map](https://github.com/lynchjames/obsidian-mind-map) plugin, I can make mind maps directly in Obsidian (before, I was using [SimpleMind](https://simplemind.eu/)). So I keep my mind maps in a separate folder.

I have one main mind map where I keep track of mid- to long-term goals like "Finish XXX book", "Do YYY course", "Prepare ZZZ talk", "Learn Japanese", "Update family blog", "Reorganize portfolio", etc. So the mind map is a bit different from what I put in the `Planner` note because it lets me track goals that don't have specific steps. For example, learning a new language - I don't have to split that goal into actionable steps like "learn xxx words per week", but I still want to keep track that this is currently my goal. I try to review those goals every month to make sure I stay focused on the right things. Otherwise, I tend to start too many things at once.

I also use mind maps to plan the outline of my talks. For example, here is one from the "Writing Faster Python 3" talk:

{% postImage "mind-map.jpg", "Example of a mind map" %}

#### Notes

This is the main folder for my notes, with multiple subfolders. I store ideas and drafts for future blog posts, notes from books or conferences, travel plans, etc. Below, I'm describing some more interesting folders.

##### KB

I have a folder for personal "knowledge bases". For example, when preparing a conference talk, I like to write down everything I want to say. It feels very natural for me, and when I'm in a flow, with the outline and all the notes prepared, I can write the whole talk in one sitting. But in the beginning, I was writing everything that came to my mind without knowing how long it would take to say it. It always resulted in having way too much content for my time slot. So I measured how fast I usually talk during a presentation, and it's 150 words/minute for a regular talk and 180 words/minute for a lightning talk. Now I know that for a 30-minute-long talk, I need around 4000 words.

##### People

I have some friends that I only see once in a while (e.g., at EuroPython). When we finally have a chance to speak, I'm a bit embarrassed that I don't remember details from their life (for example, where they worked last time, that they had a baby last year, etc.). I try to fix that by taking notes about those important facts, but I'm not very thorough at updating this section. It feels *weird* to take notes about other people.

##### Presentations

Here, I store everything related to my talks. Ideas for future talks, drafts for talks I'm working on, etc. I also keep track of the proposals I send. Sending the same talk to a few conferences saves a lot of time because you don't have to write the outline from scratch each time.

##### Work

Here I store three categories of notes:

- General programming notes, categorized by the topic (e.g., "Django" or "Docker")
- Notes related to a specific project I'm working on (e.g., a new video course or a side project)
- Notes related to a specific client I'm working with (e.g., how to log into their system, glossary of terms they use, programming notes related to their tools, etc.)

#### Templates

Finally, I have a Templates folder that is used by the Templates core plugin. Basically, the plugin lets you create some templates with placeholders, for example, a current date. When you already have some templates, you can run the "Insert template" command and choose a template from the list. The plugin prefills the current note with the selected template. Here is an example of my "Talk" template that I use when I start working on a new conference talk:

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

## Tips for using Obsidian

### ! and !! prefixes

I prefix important notes with "!" and "!!".

"!!" is reserved for globally important notes, like the daily journal, planner, standup notes I want to report, etc. That way, I can easily reach them by opening the "Quick open menu" and typing !!:

{% postImage "prefixes.jpg", "! and !! prefixes" %}

On the other hand, I use "!" for notes that are important per specific category. For example, I keep an "!Emergency guide" for each project where I'm involved in DevOps work, so I can quickly pull a how-to-fix-things checklist in case of an emergency. Prefixing notes with "!" automatically puts them at the top of the folder if you sort by name.

### Store attachments with your markdown files

When you drag-and-drop an attachment (picture, voice recording, etc.) into a note, Obsidian automatically saves the attachment and pastes a link to it in the note. You have a choice of where to save the attached files (in the same folder as the current note or in some other folder).

For me, the most convenient option is **In subfolder under current folder** - it's super easy to find and move your attachments with your notes or delete them when you don't need them. I can't imagine going through hundreds of attachments in one common folder and figuring out which ones are not used anymore.
If you want to change the location of your attachments, open the **Settings** menu and select **Files & Links** -> **Default location for new attachments**.

### Quick note hotkey

I use Obsidian to take quick notes. So I'd wanted a shortcut that opens Obsidian and creates a new note.
I've solved this problem with [BetterTouchTool](https://folivora.ai/) - a paid tool I bought to customize the Touch Bar in my previous MacBook. Now that I no longer have the Touch Bar, I still use BetterTouchTool to define custom shortcuts. But there are some free tools that you can use, like [Hammerspoon](https://www.hammerspoon.org/).

## Plugins

Obsidian has a few core plugins that allow to toggle different features. For example, you can enable or disable audio files or link previews on hover, slides, templates, workspaces, and more.

But where Obsidian really shines is the catalog of community plugins with over 700 plugins. The first thing you should do once you install Obsidian is to look at the most popular plugins (based on the number of downloads). I can guarantee you will want to add some of those.

Here is a list of the community plugins that I've installed:

- Better Command Palette - adds multiple improvements to the Command Palette. Most recent commands are moved to the top of the list. You can pin the commands you want, hide the ones you don't want, search by tags, etc.
- Better Word Count - a replacement for the built-in Word Count core plugin. Better Word Count also shows the word and character count of a selected text.
- DataView - allows you to write SQL-like queries to retrieve data and do data wrangling with JavaScript. It's a very powerful plugin, and [here](https://forum.obsidian.md/t/dataviewjs-snippet-showcase/17847/2) are some examples of how others are using it.
- Kanban - lets you create Kanban boards in your notes.
- Mind Map - a plugin for creating mind maps.
- Natural Language Dates - transforms expressions like `@Today` or `@Next Wednesday` into actual dates. Quite useful if you're writing a daily journal and you want to quickly link previous/next days together.
- Omnisearch - allows you to better search for your notes. Displays search results immediately, with the most relevant ones at the top.
- Outliner - basically a [Workflowy](https://workflowy.com/) plugin for Obsidian that makes working with long, nested lists much easier. You can fold/unfold elements with keyboard shortcuts, and when you move a nested list, Outliner moves all the items together.
- Style settings - allows you to edit settings of Obsidian themes. To customize the look of Obsidian, you can install a custom theme or write your own. But if you want to use an existing theme and only slightly modify some parts, you can install the Style settings plugin. If the theme supports this plugin, a separate settings panel opens, where you can modify the style of your themes, like the font family, header sizes, colors, etc. I used Style settings at the beginning to make small changes to the [Things 2](https://github.com/colineckert/obsidian-things) theme, but later I switched to using my [custom CSS](https://help.obsidian.md/Advanced+topics/Customizing+CSS) snippet to apply CSS modifications (so I could keep my changes under version control and add comments).
- Tag wrangler - if you're using a lot of tags, this plugin makes working with them much easier. You can see all your tags in one place, easily rename a tag, etc.
- Todoist plugin - if you're using Todoist, you can install this plugin and include all your tasks inside a note.

## Half a year later

More than half a year in, I'm still a very happy Obsidian user. I finally found a tool to replace Evernote. Or should I say, a tool to replace three tools I was using before:

- Evernote - for note-taking
- Workflowy - for planning and keeping track of my medium- and long-term goals
- SimpleMind - for creating mind maps

When I have an idea for a blog post, I can immediately start writing in Markdown. With Evernote, I always had to go through the struggle of reformatting the whole text from scratch.

Plugins like Kanban or Mind Map are *good enough* replacements for dedicated tools like Trello or SimpleMind. They might be missing some advanced features, but I have everything in one place, accessible from my laptop or smartphone. For me, that convenience is great.

One thing I'd welcome in Obsidian is the possibility of customizing ALL the shortcuts. I'm spoiled by VS Code, where any command can be assigned to a keyboard shortcut. With Obsidian, some commands have a different mapping than VS Code, so I wish I could edit them and use the exact same keyboard commands in both tools.

Let me know if you have some other plugins worth checking out or some really cool Obsidian tricks you want to share!
