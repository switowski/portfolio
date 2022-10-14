---
title: "Add Comments To Your Commands"
description: "Here is a quick tip: if you add a comment to an important command, it will be easier to find it later or understand what it did."
tags: ['CLI']
date: 2022-10-20
---

A quick tip: when you write an important command in shell, put a comment next to it so you can easily find it later or remember what it does:

```bash
pytest -m slow --durations=10 # Run slow tests, return the slowest
```

## Why?

{% postImage "up-up-up.gif", "Comic stripe with a programmer pressing arrow up multiple times instead of typing 'ls'", '', "Source: https://www.commitstrip.com/en/2017/02/28/definitely-not-lazy/" %}

I rely heavily on searching commands in history. Something like the guy above, but I usually press `ctrl`+`r` instead of `↑`.

The problem with this approach is that sometimes it's not easy to figure out how to find a specific command. You have to know at least part of the command, which might be difficult if you copied it from somewhere and immediately forgot about it. Or maybe the part that you remember is too generic. If I want to rerun `pytest` with a specific set of parameters, I know it starts with `pytest`, but that doesn't really narrow it down.

So I started annotating commands I might want to reuse in the future. Let's say I want to run `pytest` on all the tests marked as "slow" and return the slowest ones. I can put a comment right next to the command:

```bash
pytest -m slow --durations=10 # Run slow tests, return the slowest
```

This will make it much easier to find this command in the future. It works especially well in combination with a fuzzy finder like the [fzf](https://github.com/junegunn/fzf):

{% postImage "with-fzf.jpg", "Searching for a command using fzf" %}

## A real-world example

I often use this trick in IPython when I want to find some example data in the system. In one of the projects I worked on, we had a database full of objects with numeric IDs. If I wanted to grab an object, I could either:

1. Search in the UI for the ID of an object I want to retrieve from the DB. This takes time. I don't want to fire up the UI and do all the filtering to get the ID. So usually, I use the second approach.
2. Grab a random object from the DB and hope it has the type I'm looking for. If not, grab a different one.

Sure, the second approach might take much longer than the first approach. But just like the guy pressing the arrow up 50 times, I kept thinking that *"the next object **has** to be the right one."*

I solved that problem by adding comments - each time I grabbed a specific object from the DB, I wrote a comment on what's that:

```python
read_object("/Trade/98182379") # Trade X from "Portfolio A"
read_object("/Trade/18293712") # Trade Y from "Portfolio B"
```

That way, the next time I wanted to grab an object from Portfolio A, I just needed to hit `ctrl`+`r` and type "Portfolio A".
