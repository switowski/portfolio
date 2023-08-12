---
title: New Blog, Who Dis?
description: I've got this shiny, new blog design. Let me tell you how I got here. It all started with an idea for a dark theme...
tags: ['11ty', 'Writing']
date: 2022-10-14
---

There is an unwritten rule that when you get back to your old blog, you have to rewrite it. You can't just continue. You won't be happy with what you wrote a year ago. The world is a different place now, there are 12361293 new JavaScript frameworks since the last time you chose one for your project, and there is no way you can efficiently continue building what you started back then.

Of course, a little voice in your head says: *"But people are here to read what you say. They don't care about the look of the website. It's the content that matters"*. That voice is called **reason**. But no one listens to it. When you're at work, you must listen to your boss saying, *"No, we can't rewrite this project in this new, cool framework. You have to keep working on what we have now"*. Luckily, this blog is not my work. And I can't look at something I wrote 2 years ago. The world has moved on, all the websites have a beautiful dark theme, and I'm sitting here, burning out your eyes with this handcrafted, white Frankenstein's monster - a theme I built from a couple of different ones I found in the past 2 years.

No, I wanted to have a nice dark theme too!
So what's the first step of getting back to blogging? Writing blog posts? Well, some may say that. But no, it's getting rid of the old website and rewriting it.

From scratch.

In a shiny new framework!

## From Jekyll to 11ty

For the [past](https://modernpythonprojects.com/) [few](https://bitbybytes.io/) static websites that I built, I used [11ty](https://www.11ty.dev/). Every time I set out to build a new website, I do quick research to see the best options, and for my needs, 11ty seems to be the best tool so far. Before that, I used Jekyll and Hugo. But now 11ty gives me this minimal framework to build exactly what I need. And when I need to add more features in the future, it's very open to extensions. Sure, I might go with Gatsby or even Next.js, but they feel too big, and JavaScript is not my main programming language (as you probably might have guessed from the number of bad jokes I make about JS).

11ty is minimalistic. That's a blessing and a curse. The blessing is that it's not very opinionated, and you can use it with whatever templating language you want. It's so minimalistic that you can't just use it out of the box. That's the curse. It's not like Jekyll, where you run `jekyll new myblog` and `jekyll serve` and have a basic blog up and running. You actually have to write some configuration for 11ty to make it work.

But Eleventy has a huge collection of different [starter projects](https://www.11ty.dev/docs/starter/). Each has a description of what setup and tools they use. Some are even marked with "four hundos"- they have the perfect score from the Lighthouse testing tool.

{% postImage "11ty-starters.jpg", "11ty starter projects", "", "11ty starter projects (<a href='https://www.11ty.dev/docs/starter/'>https://www.11ty.dev/docs/starter/</a>)" %}

I never had to set up 11ty from scratch - I always picked up a "four hundos" theme with some popular tooling and nice looking design. The design is usually the least important for me. I will pick an external HTML theme and adjust it for my needs.

When is 11ty not for you? Mostly when you don't have enough technical knowledge to build your website. Or when you don't want to waste time doing that. If I wanted to build something fast and wouldn't mind spending money, I would probably choose Squarespace/Carrd (for a landing page) or Ghost (for a blog). While I haven't used them yet, they all look like good, reasonably-priced solutions.

### Eleventy is great

I had a lot of fun using 11ty. It's an excellent framework. But it's not for everyone. 11ty gives you a set of tools to build your website. And those are some great tools! I'm impressed how the most important bits of common components have been extracted into easy-to-use plugins. For example, the image plugin was a true blessing. It allowed me to set up responsive images much faster than I did with Jekyll just because it has very good defaults and [documentation](https://www.11ty.dev/docs/plugins/image/).

Speaking of documentation - 11ty documentation is fantastic. Code examples are pretty much exactly what I needed. For example, when I needed to add links for previous/next post to my blog, the first result in Google took me to [Get Next of Previous Collection Item Universal Filters](https://www.11ty.dev/docs/filters/collection-items/), where the topmost example was the previous/next post functionality. If I needed some tweaks, there was usually a blog post from someone who tried to achieve the same modifications.

11ty is not a great choice if you want to take something that "mostly" works and just run it. Something like Jekyll (or whatever would be its modern equivalent) will set up a barebones blog for you in seconds.

### Eleventy could be better

Some problems I encountered were, for example, the not-so-helpful error messages in Nunjucks templates. Technically, it's not a problem with 11ty itself, but Nunjucks is one of the most popular templating engines, so there is a huge chance you will use it if you choose 11ty. When I forget a closing quote or coma between parameters in a shortcode, I get a message similar to this:

```shell
[11ty] Problem writing Eleventy templates: (more in DEBUG output)
[11ty] 1. Having trouble rendering njk template ./src/drafts/write-faster-python/2020-10-24-pypy-vs-cpython.md (via TemplateContentRenderError)
[11ty] 2. (./src/drafts/write-faster-python/2020-10-24-pypy-vs-cpython.md)
[11ty]   Error: template names must be a string: NaN (via Template render error)
[11ty]
[11ty] Original error stack trace: Template render error: (./src/drafts/write-faster-python/2020-10-24-pypy-vs-cpython.md)
[11ty]   Error: template names must be a string: NaN
[11ty]     at Object._prettifyError (/Users/switowski/workspace/portfolio2/node_modules/nunjucks/src/lib.js:36:11)
[11ty]     at /Users/switowski/workspace/portfolio2/node_modules/nunjucks/src/environment.js:563:19
[11ty]     at Template.root [as rootRenderFunc] (eval at _compile (/Users/switowski/workspace/portfolio2/node_modules/nunjucks/src/environment.js:633:18), <anonymous>:37:3)
[11ty]     at Template.render (/Users/switowski/workspace/portfolio2/node_modules/nunjucks/src/environment.js:552:10)
[11ty]     at /Users/switowski/workspace/portfolio2/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:485:14
[11ty]     at new Promise (<anonymous>)
[11ty]     at /Users/switowski/workspace/portfolio2/node_modules/@11ty/eleventy/src/Engines/Nunjucks.js:484:14
[11ty]     at /Users/switowski/workspace/portfolio2/node_modules/@11ty/eleventy/src/Engines/Markdown.js:73:47
[11ty]     at runMicrotasks (<anonymous>)
[11ty]     at processTicksAndRejections (node:internal/process/task_queues:96:5)
```

That's not super helpful when debugging, and I had to manually go through all the shortcodes in a post to figure out which one was messed up. This is not a big issue when writing new posts because I quickly notice what's wrong. But when migrating old posts, it was a bit tedious process.

There were other issues on the way - e.g., sharp (library used for generating images) had limitations for the total number of pixels in an image and failed when processing gif files. I removed the limit, but then the generation was very slow (around 5 minutes to regenerate pages from scratch - which I solved by storing the cached images between builds on Netlify).

In the end, I solved all those small problems rather fast, and not once did I regret choosing 11ty. Don't take those complaints too seriously. I'm probably spoiled by some of the more mature frameworks that make debugging slightly easier.

## Removing Google Analytics

Apart from having a dark theme, another reason I wanted to make some changes was to ditch Google Analytics. It's a good, free tool, but I don't want to sacrifice readers' privacy. Some people use ad blockers, but not all of them. And I've started seeing the trend of people migrating to other tools - just [look](https://www.indiehackers.com/product/plausible-insights/got-2-000-paying-subscribers--MTZjkkk9bGzg71OOT_n) at how good the Plausible Analytics and other paid but privacy-respecting alternatives are doing.

It's a good trend. I was using Google Analytics because it's easy to set up. But I rarely even checked the data. Initially, I wanted to update the cookies banner to say "use an ad blocker to stop trackers on this website." But given how little value I get from analytics, I decided to pay a small amount of money for a tool that doesn't sell any data. I did some research, and in the end, I found a free solution called [umami](https://umami.is/). I already had a $5 Linode droplet running (for an instance of [n8n](https://n8n.io/)), so I just installed umami there.

{% postImage "dashboard.jpg", "umami dashboard" %}

Umami is simple, but it contains all the data I need - how many people visit my website and what articles are the most popular. I can also track clicks on specific links or buttons by adding a CSS class to them. And I no longer need to display a cookie consent banner because umami doesn't store any cookies.

## Cutting out content

{% postImage "before.jpg", "My website before the redesign", "", "My website before the redesign" %}

I also decided to remove unnecessary content. In the end, this is primarily a blog, and people come here to read blog posts. Sure, I want to let them know I'm available for hiring at Python projects, but 99% of the visitors don't care. If they do, they will (hopefully) click the "About" or "Consulting" pages. So, I've shrunk my introduction, and now the most recent articles are visible directly when you open the home page.

Next - workshops. I flirted with the idea of getting into the business of doing onsite workshops for companies when I decided to start working on my own. But in the end, I never followed up on that. Then, when I built my [first online course](https://modernpythonprojects.com/), I decided that this was what I wanted to do. Recording everything at my own pace, complete control over the content, and infinite scalability are awesome. Having to fly around the world just to give a 2-day course on basic Python is not awesome. So the "workshops" section also had to go.

Next were the pictures for each blog post. That was the hardest thing to let go of because I love visuals. But they were a pain in the butt in the long run. When I started this blog, it was fun to find pictures on Unsplash that matched the content of an article. But when for the 15th time you have to find a picture for yet another Python article, it's not fun anymore. And then wasting half of the page to display a generic image of a Python snake at the top of the article is just wrong. It's a bad habit I took from Medium, so I'm happy to let it go. As a middle-ground, I've kept those images as thumbnails and social images but removed them from the articles.

## Spring cleaning

Updating a website is a good opportunity to clean up and update code that is no longer optimal or not supported in the worst case. There are parts of the codebase that I probably haven't touched since I wrote them - the RSS feed, metadata in headers, Netlify config, etc. And while they usually work just fine, new, better configuration options are added all the time. Not updating my code for years means I'm stuck with some old metadata that will eventually start dragging my SEO down.

This is especially relevant for 11ty. It's a young framework that is constantly changing. Version 1.0 was *just* released, and documentation is already full of mentions of version 2.0. For example, one of the websites I used for inspiration was using the `rssLastUpdatedDate` function in the RSS filter. But there is already a new (and probably more efficient) function in the current version of the documentation.

So migrating my website was not only an opportunity to learn a new framework but also to revisit parts of the website that I wouldn't touch until they break.

## Can I see the code?

I was a bit on the fence if I wanted to share the code. It's far from perfect, but I'm sure there will be people who just blatantly [copy everything from others](https://github.com/jeromecoupe/webstoemp/commit/0ad4db3ad0cc2cb354b212e3a6790e5427213d4b). And this makes me angry. I've put weeks of work into carefully crafting this website, trying to make the design bearable (which is hard with my poor design skills). I don't want to hand it on the silver plate to someone who will say, *"is it your website? Now it's mine."*

On the other hand, there are not that many examples of fully developed 11ty websites. So every example helps. I'm grateful to people like [Max Böck](https://mxb.dev/), [Sia Karamalegos](https://sia.codes/), or [Zach Leatherman](https://www.zachleat.com/), who keep the code of their websites public. I took a lot of inspiration from them - how to organize the files, what are some good examples of filters or sensible defaults. 11ty starter projects are great to start with, but they are very basic in terms of showing you how to put together more content. Usually, they are just 1-3 pages, 1 layout, no macros/includes, 1 CSS file, etc. At the same time, they might come with a whole bunch of JS tools for the "most efficient assets pipeline." Of course, this is the "most efficient pipeline yet," because tomorrow, there will be a whole bunch of new JS tools released ;) I wanted to start simple and only add things when needed.

In the end, I decided to be a good open-source citizen and made the code public. If you want to see how a Python developer writes JavaScript, click [here](https://github.com/switowski/portfolio).

## What's next?

I stopped updating my blog in 2021 because life got busy. I've opened a company, started a side project (generating ~$300 monthly recurring revenue with a crazy churn rate but also very little support from my side), and - the biggest time sink - got new family obligations. All that while working full time as a lead developer on a quite challenging project. So, unfortunately, there was no time left for blogging.

But I want to change that. I'm back to blogging, but I'm also changing the formula a bit. Instead of writing only about Python, I will write about everything that interests me. Python, productivity, side projects, etc. Python will still be the main topic. You can follow this [RSS feed](/python.feed.xml) if you want to get notified **only** about my Python posts. Otherwise, use whatever previous method you used to follow my blog.

See you soon!
