---
title: You need a license
---

I don't like to deal with licensing of my code because it's a complicated topic. And I mean, licensing can be complicated - all this legal text, dual licensing and all that while all you want to do is to share your cool Python tool with other programmers and not be liable for any damage this software might cause? It was even worse before we got tools like [creativecommons.org](https://creativecommons.org) or [choosealicense.com](https://choosealicense.com). Those two are tremendous help when you want to choose a correct license for your project.

Before we dive in - a short disclaimer. I'm not a lawyer and what I wrote here is not even close to a legal advice about choosing a license for your project. Treat it as a quick guide to what license could be interesting to you as a developer.

## Why you need a license?

If you don't specify a license, you retain all the exclusive copyright by default. That is - no one can use your code, modify it or share it. Bummer, right? That's usually not what people mean when they omit adding the license. Unless you really don't care about others and you just want to put some code on GitHub for the purpose of version control or you **want to retain the exclusive copyright**, you probably should add a license.

## What license should you choose?

[Beerware](https://en.wikipedia.org/wiki/Beerware) or [WTFPL](https://en.wikipedia.org/wiki/WTFPL) are both an excellent choice if you want a tongue-in-cheek, permissive license. Both are short and permit users of your code to do whatever they want with your code (as long as they leave the copyright notice). You might want to stick with Beerware if you want to avoid profanities in your code. It also has a nice clause that "if the user of your code meets you one day and your work is useful for them, they can buy you a beer in return". But there are better licenses with similar permissions (and more legal jargon).

CC0 - public domain. I don't commonly see this license, but if you want to "just put your software/image/video/whatever out there", this is the license you are looking for. Unlike other licenses that I will talk in a moment (MIT, GPL), this one doesn't require any attribution. So others are really free to take whatever you published under that license and even remove the CC0 license and publish it under another license (it's morally wrong, but CC0 license doesn't prohibit this).

MIT - that's usually a go-to license that programmers use if you're looking for a permissive license.

GNU GPLv3 - if the idea that someone will take your open source code and turn it into a closed-source project (and maybe even start selling it) rubs you the wrong way - this is the license you are looking for. GPLv3 prevents others from including your code into their closed-source code. This doesn't prevent someone from turning your code into a commercial solution. There are some really successful open source projects that also sell build companies selling services that uses their code (Sentry, MongoDB). If you want to prevent your code from being used commercially, you can use the CC-BY-NC. This one bans commercial use, no matter if the code is open-source or close-source.

Creative commons licenses have many variations that lets you mix and match depending whether you want to require attribution (so leaving your copyright notice it), allow or prevent the derivative work (whether or not others can modify your code) or commercial use.

## CC vs. MIT/GPL

CC licenses were originally meant for content like books or media, not software. 


Additional reading:

* MIT vs CC: https://opensource.stackexchange.com/questions/6110/is-there-any-particular-reason-to-license-docs-with-cc-by-4-0-rather-than-mit#:~:text=The%20MIT%20license%20was%20originally,as%20books%2C%20music%2C%20etc.

## Funny licenses

* https://en.wikipedia.org/wiki/Shareware#Postcardware
* https://fossa.com/blog/top-6-most-out-there-open-source-licenses/

links:

* [https://choosealicense.com/no-permission/]

## TODO: here

* replace curly quotes (‘ , ’, “, ”) with straight quotes [https://typographyforlawyers.com/straight-and-curly-quotes.html] using "replace curly quotes command"
* change filename (and date)
  * make sure no other file is referencing this one by filename (update it if needed!)
* capitalize title [https://capitalizemytitle.com/]
* update title
* update categories
* update summary and description
* find hero image
* change the featured-img, image
* remove "published: false"
