---
title: How to Make a Great Conference Talk
description:
tags: ['Conference', 'Speaking']
date: 2023-03-16
---

Last year I participated in a workshop organized by the EuroPython conference for beginner speakers, where I shared my tips for making good presentations. This workshop was a great idea, and I'm glad that most big conferences already do this (like PyCon US or EuroPython). I hope other PyCons will follow. I wish I could have participated in such a workshop while preparing my first-ever talk for EuroPython in 2016.

:::callout-info

This article turned out much longer than I initially thought.  
You can jump directly to the part that interests you the most:

- [Benefits of speaking at conferences](#benefits-of-speaking-at-conferences)
- TODO: finish

I could probably also turn it into a 1-hour long presentation for your conference. If that sound interesting - let's [get in touch](/contact).

:::


To help those of my readers who aspire to be a conference speaker, I've decided to write this guide. I hope it will help you prepare for your first ever conference as a speaker or to further improve your talks.

I will try to keep my suggestions as open as possible, including things that don't work for me, but maybe they will work for you. Just because I do something in a specific way, doesn't mean that everyone else does that too. I will also try to keep my advice brief instead of supporting each with a story from my life. Later on I will write another article focusing on how *I* make presentations, how I collect ideas and prepare my slides, where I will go into more details on *why* I do things a certain way.

First of all, why would you even want to spend time preparing a talk for free?

## Benefits of speaking at a conference

- The most obvious reason is that as a speaker you get a **free ticket** to the conference (this applies to most conferences, but not all of them). Throughout the years I probably saved thousands of dollars on the conference fees[^1].
- **Recognition**. The more presentations you give, the more famous you get. Sometime people will recognize you from a talk or you will see a blog post where someone calls your presentation *interesting* and it will make you very happy.
- Building your **brand**. Similar to the above point, the more you speak on a given subject, the more people see you as an expert on that topic. This can lead to some interesting opportunities in the future, so don't forget to include a way people can contact you later (add your LinkedIn profile or social media handle on the slides).
- **Networking**. Being a speaker is an *easy* mode for introverts like me to talk with more people[^2]. Some of them will approach you after your talk and ask questions on the subject. But many more will see "speaker" on your badge and ask what you're going to talk about (this is a double-edged sword, as not everyone has patience to give a verbal abstract of his talk 20 times per day). Being a speaker yourself also means that it's easier to network with other speakers. And for me it was a huge deal, because my last two contracts came from connections I made during the conference with other speakers. If I wasn't a speaker, I would miss two really great projects.
- VIP events. Some conferences offer special benefits for the speakers. PyCon Taiwan organized a sightseeing tour for the speakers. PyCon Japan has a social dinner for the speakers.
- You might get invited to other conferences. As a former speaker, you will be on a radar for smaller conferences that invite speakers to apply for the Call for Proposal. You will also have something to put in the section for "share a link to your previous talk", so the more talks you give, the easier it will be to get accepted. On a few occasions I was invited to a semi-commercial conferences (so a conference about Python that was mainly sponsored and organized by one company) that paid the flights and hotels for me. So it was a free, geeky weekend for me. Sadly, after covid I mostly get invited to online conferences nowadays.
- Finally, you might genuinely want to share your knowledge. I enjoy talking at conferences (the same way I enjoy writing this blog). Every year I will choose 2-3 conferences I want to talk at and then end up speaking at around 5 or so (I get invited to a bunch of smaller conferences, especially the remote ones).


## Why should you take advice from me?

Now, why should you take advice from me?

- I spoke at over 15 major Python conferences around the world (various *PyCons* in different countries and at EuroPython) and over 20 smaller conferences and meetups. I've been speaking online and offline since 2016.
- My talks are usually well received. I have some of them with quite high view count on YouTube and when I speak with people they usually say they were good (although no matter how much I push people, it's hard to get negative feedback because people are usually nice).
- I'm constantly trying to improve my talks. In 2017 I took a course at work on how to make good presentations and I'm always on the lookout how I can be a better speaker. Some people are born as great speakers. I'm trying to get there eventually.

And why you might **not** want to take my advice:
- You know those speakers who enter the stage and apologetically explaining that *their presentation might be rough, because they were finishing it yesterday on the plane*? And then they proceed to give a better talk that any I have ever created. That's not me. And no matter how hard I try, that will probably never be me. I put many hours into research, making slides, and rehearsing. Most of the speakers do. If you're looking for a "how to make a presentation over the weekend (while also getting a pilot license, because, come on, how difficult can it be to make a silly presentation?)", this is not a guide for you. You might still enjoy the general tips on the slides design or what to do before/during/after the presentation itself, though.
- I write full scripts for my presentations. I roughly memorize them for the first time I give the talk. And the more times I present it, the less I rely on my notes, but I still need them. Writing things the way I want to say them feels very natural to me. I don't buy the "using a script sounds **nothing** like the way you talk" argument. Trust me, I speak way more boringly than I write. You don't want to hear me improvise a talk. So while I try to keep my advice in this article as generic as possible, I probably can't give you the best advice on how to wing the talk or go without notes.

There are many much more experienced speakers who also shared their insights. I'm linking their articles at [the end](#resources) of this article.

## Debunking some myths

If you're still hesitating whether or not to apply as a speaker at a conference, let's debunk some most common myths that might be stopping you.

### "I'm not an expert!"

You don't have to be. To give a good talk, you don't have to be an expert, but you should be **passionate** about the topic. If you're an expert and you can present a given topic in a very approachable way, that's fantastic. But it's also rare. Not every speaker is an expert. And even if they are, **not every expert can explain complex topics in a simple way**. Quite often it's the people who are new to something that have the most interesting, fresh ideas. And they are much better at explaining this topic to beginners, because they were also a beginner not long ago. People who spent 10 years writing machine learning models (on top of spending 4 years writing a PhD about machine learning) might skip too many *obvious details* that are not obvious at all to someone new to this topic.

It's perfectly fine to propose a presentation on something that you discovered recently. Also, proposing a topic is an excellent opportunity to learn more about it. When I proposed the [Wait, IPython can do that?!](https://www.youtube.com/watch?v=3i6db5zX3Rw) talk, I knew about a few cool things that IPython can do and I simply wanted to share them with the world. But when I started preparing the talk, I found out twice as many new, cool things that it can do. This year I proposed some talks about Continuous Integration because I want to learn more about this topic. Sure, I built a couple of CI pipelines in various projects. But I want to dig deeper into what's actually possible and how the CI ecosystem has evolved in the past few years. And what's a better way to force myself into doing a thorough research than having to talk about it for 30 minutes and answer some questions?

Finally, if you're a more advanced speaker, it's probably ok to take some risk. Let's say you propose a talk about a project that you want to build ("Building self-driving cars with Python when all you have is a Raspberry Pi, a motorboat engine, and an old shopping cart"). But you're not sure about the outcome of this project. It might fail. Well, a story on how you tried to do something cool, how you overcome some of the challenges and what challenges you couldn't solve plus some lessons learned can be a fantastic story. And who knows? Maybe someone from the audience struggled with the same problem and they can give you some fresh ideas?

The most entertaining talk I saw at PyCon Poland last year was a talk about teaching dog some new tricks with MicroPython. And while this project has failed, it still resulted in a fascinating story and useful lessons learned for anyone who wants to tinker with MicroPython and home-made hardware. This talk is the 2nd most watched video from that conference (and if you speak Polish, you can watch it [here](https://www.youtube.com/watch?v=6_VxIq-4j7c)).

### "There are already so many talks about X!"

Where "X" can be "pytest", "type hints" or "pandas for beginners". Trust me, **there are never enough talks on topics that seems like everyone knows everything about**.

First of all - each conference every year is full of new people. No matter the size of the conference, whenever there was a classical crowd-warming exercise called "raise your hand if it's the first time you're attending this conference" at least 30-50% of people were raising their hands. That happened at EuroPython with over 1000 people and at some smaller PyCons with 100-200 attendees.

Every year there are new people keen to listen to a talk on one of the "common" topics.

Every presenter has a different view on a given topics. One might cover "10 popular pytest plugins", another "how to speed up your tests" and yet another one "an introduction to a test driven development".

And every popular language, framework or library are evolving. A "5 cool CPython features I wish I knew before" talk from 2020 will look completely different when given in 2025.

That's why every year talks about pytest, pandas, and recent CPython features are and will be accepted.

### "I get too stressed to give a good talk"

Most speakers get stressed even if it doesn't look like it. The first time I gave a talk in front of 100 people at CERN, my legs were shaking so badly that I had to hold the podium the whole time. Some people have [fainted](https://hynek.me/articles/hallway-track/#:~:text=At%20the%20end%20of%20the%20talk%20I%20fainted).

By no means you should feel forced to give a talk if you feel uncomfortable doing so. But many speakers deliver great talk, while still being completely stressed out inside. And the feeling of relief and satisfaction that I get at the end of my talk compensates for all the initial stress.

For some people, it will become less stressful the more experienced speaker you become. For some, the stress will never disappear and you will get used to it. For me, while it got less stressful than the first time, I was still quite stressed for a very long time. I couldn't eat anything before the talk. What eventually helped me to overcome the stress and lowered it to a much more manageable levels was the fact that with more senior positions at work, I regularly had to join meetings and demo features to random stakeholders at work. Initially those meetings were stressful, but after some time I got used to giving impromptu presentations. And I've noticed that this also helped me get much less stressed when speaking at conferences. So try to speak more at work and at local meetups if you want to deal with your stress.

If you're afraid that you will get stressed and blank out, forgetting what to say, consider writing and memorizing a script for your first talk (more on that later #TODO add a link).

### "I'm afraid of the questions from the audience"

Guess what? You don't have to answer them!

You can always ask the conference organizers or the chairman of your session (so the person who will introduce you and then moderate the Questions & Answers) that you don't want to have the Q&A session and they will most likely oblige.

And if you decide to go for the Q&A session and you get a tough question, it's perfectly fine to say "I don't know". No one expects you to know everything. I will cover more tactics on how to survive the Q&A session later.

---

Let me know in the comments if you have some other reasons to not give a talk and I'm happy to debunk those for you.

Now let's talk about one of the most important steps that will determine whether or not you will even have a chance to give your presentation.

## Call for Proposal (CFP)

If there was one piece of advice I could give you here, it would be **don't neglect it**. I mean, you shouldn't neglect any part of the whole presentation process, but if your talk doesn't get accepted, the fact that you can tell the most captivating stories doesn't matter. There won't be a conference willing to hear them.

Too many proposals are poorly written.

This is something I noticed myself when reviewing proposals as part of the community voting at EuroPython, PyCon Italia and other conferences, but I also heard this from members of the program boards (so *professionals* who have been selecting talks for years).

Yes, I know that you have a great story. It's interesting, it has some important lessons learned and maybe even some beautiful code examples that will make the Python world a better place.
But you need to convince a bunch of people with different levels of Python knowledge, different backgrounds and interests that your talk is interesting. That it's more interesting that 400 other talks waiting to take your place in the schedule.

:::callout-info
#### Community voting

Even though I'm not part of any official program committee, I try to join the community voting for various conferences when I have time. That's the time when people who already bought a ticket and participants from the previous years can vote which talks they would like to see this year.

The way I review proposals during the community voting is like screening a CV. I spend around 10 seconds on most of them proposals. I look at the title, then quickly skim the abstract and if it looks interesting I read more. I guess the members of the program working group are more thorough, but maybe they aren't? So just like with your CV you need to make sure you can grab my attention in those 10 seconds.

Spending only 10 seconds on someone's proposal seems unfair?

From those proposals that I skim, maybe every a third looks interesting enough to read it thoroughly. It takes around 1 minute to read a proposal fully and decide if it's a talk I would like to see. EuroPython got 429 proposals in 2022. So spending 10 seconds (skimming) on 66% of the proposals and 1 minute (actually reviewing) on 33% of those 429 proposals takes 11,440 seconds. Over 3 hours to review all the talks (which is a highly focused task and usually takes much longer). And I want to give all the talks equal chances so I review all of them. That's why each single proposal gets a very limited time to pick my interest.
:::

There are a lot of other proposals you're competing with. So you need to hook up reader's attention and lower the traction of judging your.

Here are some ways to do so:

- **Make your proposal easy to scan**. Wall of text is much harder to read than 5 short bullet points about main topics of your talk.
- Check you're **grammar** 😉. Just like with the CV, some people will be put off by obvious spelling mistakes.
- If you can, **send more than one proposal**. This will increase the chance that you will get a speaker slot.
- **Explain what your audience will take away** from your talk. People don't go to a talk just to see your great performance, but to learn something new. Be upfront with that this *new thing* will be.
- **Add links to your previous presentations** (if in doubts, organizers will check your previous performance). It doesn't have to be a conference talk if you never spoke at one. You can also post a link to a local meetup where you had a presentation. If you don't have a full presentation, a lightning talk, video from a presentation at work or a short tutorial on YouTube is still better than no link at all.
- **Propose a topic for an advanced audience**. This may sound insane if you're a first time speaker, but it will also increase the chances of your proposals. From the conversations I had with various conference organizers, they always want to have more talks for the most advanced audience (or at least I never heard anyone saying *man, I wish we had more talks for beginners; I'm tired of those expert deep-dives into advanced topics*). It's more difficult to find an advanced topic that will interest a large group people, but if you are an expert with some specific library, try coming up with something beyond "an introduction to X".
- **Funny, clever titles** or first sentences from the abstract have a higher success rate, but don't overdo it. Some subtle word play should work. A phrase from a meme that everyone already saw 200 times probably won't.
- **Don't use clickbait titles** (says a guy who literally named one of his talks "Writing Faster Python" 🤦). Clickbait may work on social media, but not when a bunch of smart people review your talk. I mean, catchy title is good as I wrote in the previous point. But you **have to deliver** on what your title promises. "5 Python libraries that you can't live without" proposal that talks about `requests` and `pytest` which everyone already knows or "Making money as an open-source maintainer" talk that ends up with you saying how you get $5/month from GitHub sponsorship is basically deceiving your potential audience. And some more experienced reviewers will see through this clickbait title. There is nothing wrong in an interesting, short and catchy title, but the content of your presentation should match it.

And if you're a more experienced speaker (so probably not something for your 1st or 2nd proposal), then **don't be afraid to go out of your comfort zone**. Proposing a talk can be a great way to push yourself to explore a given topic in more detail. A niche topic may result in a much smaller audience for your presentation, but it will lead to a much deeper conversations after your talk with those few people who are also interested in that topic.

### Finding examples of accepted and rejected proposals

If you want to see how a good proposal looks like - check out the schedule from the previous years. For example, EuroPython keeps websites for [all the previous editions](https://www.europython-society.org/europython/) online. So you can easily check what were the proposals that got accepted.

It's a bit more tricky if you want to see what kind of proposals don't get accepted. You can join a program committee for a conference and you will be regularly involved in choosing rejecting talks (you will even get some guidance from other members of the committee on what to look for in a proposal).

If you want something more *lightweight* without commitment to joining a committee, join the conference voting that some conferences like EuroPython, PyCon Italia or PyOhio organize. That's the period of time shortly after the CFP is closed when everyone with a ticket to this year's conference (and often also the participants and speakers from the previous years) can vote which talks they want to see. This is an excellent opportunity to see hundreds of proposals and get the feeling how a good and bad proposals looks like. You will see for yourself why I stressed so much the "don't neglect the proposal" advice.

---

In the end, there is always some luck involved in getting picked. You can increase your chances with all the above tips, but none of them will guarantee that you will be picked. Maybe someone with a similar topic wrote the proposal slightly different and their way was more convincing to the program committee? Maybe your talk doesn't fit into any tracks? Maybe you're just unlucky - the biggest Python conferences get hundreds of proposals for only dozens of slots.

Don't get discouraged. Try with a different conference or maybe with a local meetup to gain more experience, improve your proposal, and have a portfolio of "previous talks" that you can submit next time.

### Coming up with ideas

The "easiest" (in quotes, because there is nothing easy in preparing a good talk) way to come up with an idea for a talk is to present something you used at work because:

1. You already know this tool/framework/program/idea because you used it in the past.
2. You will do more research but that knowledge will be useful in your work in the future.

But this doesn't apply to everyone. Maybe what you do at work can't be presented because it's a trade secret. Or because it's so boring that you will either bore yourself or the audience it you talk about it for 30 minutes.

So if that doesn't work for you, write down **things that you did in the past**, **things that interest you** (for me it's usually Python tools, best practices writing Python code or setting up efficient developer environments) and **things you want to learn more about**.

Some other folks suggest to reaching out to the conference organizers and asking what topics they would like to hear about at their conference. But I've never tried doing that. I have a feeling that this advice is more applicable to a commercial conference that does a lot of outreach to attract speakers and I don't attend those.

Once you have a list of ideas, pick one (or more) that might interest other people. How do you know what interests other people? Ask them! In real life or on social media. "Hey, I'm thinking about making a presentation on the following topic for a Python conference. Which one would you like to see the most?" followed by a poll with your ideas should do the trick. It doesn't have to be something they **faced**, but something that would **interest** them. Not everyone has a dog. But a talk on how to train your dog using 3D-printed, homemade hardware programmed with Python? You would see me in the front row for that one[^3]!

Can't find an idea for a talk? ~~Steal~~ Borrow it or ask the AI.

You can get a lot of inspiration looking at the talks from other conferences. For example, my "Writing Faster Python" was inspired by a talk "Writing Faster Ruby". See what topics were most interesting at other conferences or at the previous editions of the conference you're applying for. That should give you some inspiration.

Another surprisingly effective way is to ask the AI to help you brainstorm some ideas. I used ChatGPT to help brainstorm ideas for this year's conferences and after a few tries I ended up choosing to make some talks about Continuous Integration. I had this topic somewhere in the back of my head, but I forgot about it when thinking what I can propose. Luckily, ChatGPT's suggestions reminded me of this idea. So it's not that AI will do everything for you, but it's useful for brainstorming.

You can also ask your colleagues at work. A random water cooler question of "what talks would you like to see at a Python conference" can also help you generate ideas.

## Research

Now, after you submitted your proposal, you can either wait for the results or start making some preliminary research right away. I strongly recommend the latter, but maybe not like super-intensively. Just keep the fact that you might be preparing this presentation in a couple of weeks somewhere in the back of your head. You will be surprised how many random ideas and topics will come to your head! You will suddenly find that many random articles are related to your talk. Save links to those articles. If you think of something that could be included, write that down or add a todo to research it further.

I use Obsidian to collect my notes, and I have a template that helps me write the proposal and later expand it into a full talk. Here is how it looks like for my last talk:

```markdown
**What**: Presentation on how to write faster Python code
**Why**: For fun - source code level optimizations. But also with some educational purpose - how to actually speed up your code, how to see what's happening under the hood.
**Who**: Beginners/intermediate developers
**How**: 45 minute-long talk

### Outline:
* Introduction [2 min]
* Why Python is slow? [3 min]
	* Python is dynamic...

### Presentation:
* Why is Python slow?
	* ...
* ...


### Resources:
- Link 1
- Link 2
```

The **What**, **Why**, **Who**, and **How** is something I write first and maybe slightly modify later as I write the proposal. I keep it at top of the file so I can see when I diverge too much from the initial idea.

The **Outline** is filled in during the CFP, because almost every CFP requires an outline. I try not to touch it, especially when I have the timings there, so I know how much time I have for each section.

The **Presentation** initially starts as a copy of the outline (without the timings) and this is where I write down all the random ideas and TODOs that I have during my research phase. Later, as I work on my talk, I transform this section into my whole presentation.

And **Resources** is the place where I paste all the random links related to my talk that I later read and use that knowledge in my talk.

Don't settle on what you already know about the topic, even if you think you know a lot. Research what other thinks about it, so you can address their concerns. You will be surprised how many things you might miss simple because they didn't come to your mind. Even though in the hindsight you **already knew** those things. This blog post probably tripled in size after I looked at the recommendations from others even though most of the advice I saw were nothing knew and I already heard them before.

The research of your talk doesn't really end until you have the slides ready, although it's most intense until you finish writing the outline of your talk. You will constantly get new ideas as you write your talk and you will need to research them to make sure your content is as good as it can be.

But in general I don't go beyond collecting all those random notes, links, and ideas until I hear back from the conference organizers.

## Preparation

"Your proposal has been accepted" - that's the email you were impatiently waiting for for weeks.

Congratulations! Now the real work starts.

### Organizing your ideas

First, you need to gather all your random thoughts and organize them. A good idea is to build a mind map. It lets you group similar topic together and see a big picture of what main topics your presentation will cover. Combined with the timings from the outline, it makes it easy to see in which area you have too much content and where you have to little. Your new, detailed outline in a form of a mind map should match the outline from the proposal. But sometimes, as you do more research, you might decide to slightly change the initial outline [^4].

There are different tools for creating mind maps. I'm not a heavy mind map user, so I never needed any advanced features. In the past, I used [SimpleMind](https://apps.apple.com/app/id305727658). Later, I switched to the [Mind map](https://github.com/lynchjames/obsidian-mind-map) plugin for Obsidian since I [use Obsidian a lot]({% postUrl "obsidian" %}). This is a simple tool where I can write ideas as different Markdown headers and the plugin will visualize them as a mind map.

#todo image of a mind map.

If you need something more advanced, check out [this episode](https://www.asianefficiency.com/podcasts/131-mindmapping-vs-outlining/) of *The Productivity Show* where they talk about mind maps.

### Preparing your talk

I usually write down my talk first and don't touch the slides until this part is almost finished (it doesn't have to be 100% final, but I never start preparing your presentation by sitting down to make slides). And if I have some brilliant idea for a slide that would be perfect to explain some concept, I also write it down instead of opening Keynote. So I assume you follow the same pattern and I will cover making slides in a separate section.

What makes a good talk?

For me **a good talk is the one where I either learned something new or got curious about something**. It can be a deep-dive into some advanced `pytest` features, tutorial on generators or an introduction to some new Python library.

The most natural way of organizing your talk is to divide it into 3 parts[^5] :
1. Introduction - explain to you audience why the topic of your presentation is relevant to them.
2. Main part of your presentation.
3. Summary - briefly go through what you just said and present the conclusions.

The main part of your presentation can be nested using the same structure. If you have multiple *main* topics to cover, for each of them introduce the new topic, explain it, and summarize it. I usually show the agenda before and after each main topic to explain where we are in terms of the whole presentation:

![[Screenshot 2023-03-15 at 09.54.37 (2).jpg]]
*Here is the agenda slide that I would show after covering 2 out of 3 topics of my talk*

Here are some other suggestions how to prepare a good talk:
- **Tell a story**, don't just toss facts and data at people. The best conference speakers are great storytellers and can teach us something new through interesting stories. The way human brain works is that you can have the best content, yet people will find it boring if you present it as a bunch of dry facts. I suck at telling stories and can only admire those great storytellers from afar. But there is an easy win that you can do...
- **Start with a bang**. You need to captivate your listeners especially well at the beginning, when they have a huge dose of faith that your talk will be interesting. And nothing does that better than starting by saying "let me tell you a story about my internship at AWS" when your first slide is a burning datacenter. Ok, maybe not everyone have *that* type of stories. But if you start with a 5-minute introduction of yourself and your company and then it turns out that this has nothing to do with the topic of the talk, congratulations, you just wasted everyones time. Tell a story of a struggle at work or an interesting idea you had and build your presentation from there. I had a talk called "Managing Python versions and dependencies" that I started by saying how some companies don't leverage any Python tools to make their developers' lives easier and some use so many new tools that it's hard to keep up. That introduced a problem that probably many of the listeners faced at some point.
- **End with clear conclusions**. This will be the last words that your audience will remember, so you need to make it count.
- Make sure your presentation is **coherent** and there is a **good flow**. This will require a lot of reviews of your talk, moving things around and cutting things that don't fit together. Don't jump from one idea to another, try to connect them together. In the "Managing Python versions and dependencies", I decided to introduce new tools from the perspective of a programmer setting up their development environment. First there was a tool to install and manage Python versions. Once they had Python installed, I moved to a tool for managing dependencies in a project. Next, once the developer has more projects, I added a tool to manage dependencies across multiple projects. Finally, I finished covering a tool to lock dependencies' versions when deploying a project.
- If you want people to better remember specific takeaways, repeat them multiple times. Just like with learning new things, we memorize by repetition. **Say what you will talk about at the beginning your talk, talk about it, and then summarize what you just talked about**. It will stick with your audience for longer.
- While you should adjust the level of your talk to what audience you chose in the CFP, sometime you have to choose between too basic or too advanced ideas. **Err on the the side of "too advanced"**. It is much more interesting if you talk about an advanced topic that maybe some of the audience is not familiar with that to explain something so basic that most of them already know.

### Wing it or script it?

How are you going to write your talk? Are you going to wing it and basically go without any speaker notes on your slides? Are you going to write some key points in the speaker notes for reference? Or are you going to write a script containing full sentences that you will say?

There is no "best way". Some people say that memorizing a script will make you sound unnatural. Some people (including me) can't give their presentation with only some keywords. And I don't think having a script makes me sound unnatural.

The way I prepare my talk is that I expand the "Presentation" part of my template from a what looks exactly the same as the "Outline" section into a full presentation. In the end, it looks like a blog post and I find it very natural to write everything how I will say it during my talk.

:::caption-success
#### That one time when a script saved my life

Having a script once saved my life. Brace yourself for a story time!

It was a lazy Thursday morning at work. The sun was shining through the window and I was sitting at my computer reviewing my team's code while enjoying my second coffee. My "to do" list for this day had "update slides" and "rehearse" scheduled for this evening because my calendar had an "online conference" scheduled for tomorrow. I already gave this talk a few times before, so I knew its content more or less. There was no need to spend more than one evening preparing.

Suddenly, at noon, an email appeared. "You got a new message on LinkedIn". I opened it and my heart stopped for a split second (which, I guess, is what the heart does all the time between the beats). The message said "Hey, where are you? We're waiting in the streaming room!" It wasn't a spam, nor the Nigerian prince wanting to part with his money - this time in a form of a video call, as all the previous method of contacting me failed. It was the **conference organizers!**

Yup, you guessed it. I put a wrong date in my calendar. I only had time to quickly remove the reference to the previous conference from the first slide and I had to start talking. I was praying all the time to not have any more slides that I forgot to change. Luckily, I didn't. And the whole presentation went... quite all right. With the adrenaline rush, most of the content came back to me as I was going through the slides. So at some point I wasn't even reading my script anymore. But there was no way I could pull this off without any preparation and rehearsals if I didn't have the script in the speaker notes.
:::caption

Don't let anyone tell you that a script or bullet points or no speaker notes at all is better than other options. Choose the one that you find most comfortable. I always start with the script and as I rehearse, I rely on it less and less. But when I get stress or distracted, I usually fall back to my speaker notes.

Check out the story of [Tim Urban's TED Talk])(https://waitbutwhy.com/2016/03/doing-a-ted-talk-the-full-story.html) where he talks more about the "Exactness of planning" spectrum (a.k.a "wing it vs. script it").

### Slides

First rule of making slides - **they are supposed to support your presentation, not replace it**. As an extension to this rule - if you can give your presentation without your slides, that's fantastic. If not, don't worry too much, I doubt many people can (I can't). But aim to rely on your slides as little as possible. If the projector breaks, you lose your presentation or even if someone is sitting so far from the screen that they can't see it well, people should be able to understand your presentation and take away something from it without seeing the slides.

Having said that, it doesn't mean that slides should be a neglected afterthought. You should still do your best to make the slides as useful as possible to your audience. Here are some ideas how to achieve it:

- **Less is more**. Consider replacing whole paragraphs of text with bullet points containing only the most important keywords (although others recommend not using bullet lists at all). And **no walls of text**! You don't want your audience to focus on reading that *novel* you put on the slides instead of listening to you. **People can't read your slides and listen to you at the same time**. Choose wisely what you want them to do.
- If you're going to go through your bullets one by one, then **reveal them one by one**. Otherwise the audience will read the whole list instead of listening to you. It's fine to reveal all of them at once if it's a checklist that you want to present to the users and you don't need to spent too much time discussing each item.
- **Make font larger**. LARGER, I say! There is no such thing as font that is too large. And some rooms are enormous with people sitting very far from the screen.
- **Don't rely on colors**. Some people see colors differently, some projectors are bad, the room will be bright. Don't rely on small differences in color to convey important information on your slides.
-  If you want to be on a safe side, put **dark text on light background**. Dark background looks much cooler, but if you have a badly illuminated room with a lousy projector, your slides might be unreadable.
- **Important things go on top**. Don't put important information at the bottom of the slides. If you're presenting in a small room, usually the canvas that the slides are projected on will be a bit lower and chances are that people in the front row will be an obstacle for people in the back row to see the bottom of your slides.
- Slides should be in **"16:9"** format (in Keynote it's called "Wide 16:9"). Most projectors use that format and even if you somehow end up with a projector that uses 4:3, the 16:9 will still look much better on a 4:3 projector than a 4:3 presentation would look on a 16:9 projector.
- Remember that "no wall of text" rule? Yeah, that applies to code as well. **Skip the unnecessary code**. No one cares about the technical details of user authentication (unless you are talking precisely about the technical details of the user authentication system). Replace that code with `log_in(user)` and everyone will know what happened.
- **Highlight the code that matters for what you're talking about**. You can make the irrelevant code more dimmed or put some arrows around the code you are trying to explain. #todo pictures of code.
- **Change the pace of your slides**. Just like monotonous sentences in a book, slides that all look the same are boring too. Spice things up! Add a slide with a full-size picture. Add a slide with one keyword. Invert colors. Add a meme. Anything, but a yet another slide with a title and a bullet list.
- **How many memes are too many?** Depending on how serious you want your talk to be. A good, funny slide is often a great way to keep people interested and give them a brief respite after a few particularly tech-heavy slides. A talk full of memes can be great way to entertain your audience. As long as they will remember something else from your talk beyond the fact that *it was funny*. Also, make sure they are *actually* funny. It your slide deck is full of old, boring memes that won't make anyone laugh, it will be extremely stressful for you. And unlike telling a bad joke where you can quickly move on if no one laughed, you can't adjust your slide deck mid-talk if the audience is tough. On the other hand, some people embrace silliness as a core part of their performance and for them it works very well[^6].
- **If you're using GIFs, stop them after the animation** (you can do that in Keynote, I'm not sure about other presentation tools) or switch to the next slide if you're planning to talk for a while. It's very distracting to the audience if you have a giant looped animation behind you.
- Cool, subtle animations are great. I love the magic move from Keynote and I use this transition all the time as I show changes to the code. Arrows moving around as you explain different parts of the code will guide viewers attention. But flying around and rotating slides throughout your entire presentation are annoying and distracting. **Don't overuse the animations**.
- Think about **accessibility** of your slides. If you use flashing GIFs or any other elements that might introduce dizziness or seizure, warn your audience before.
- **Attribute images correctly**. I usually try to remember to keep a small link to the source of the image in the corner - even it the image is in the public domain[^8].
- **Don't use copyrighted images** (unless you have a license). It will cause problems not only for you, but also for the conference organizers as they often host your slides on their website. If you're unsure if some image is copyrighted, assume that it is.
- If you have a **repository with code examples** used in the presentation, tell users in advance that you will share the link at the end. It will save them the hassle of taking pictures of your slides.
- Slide templates often come with a lot of different slide types (e.g. "Title", "Title + Photo", "2 columns", etc.) It might be tempting to use a bunch of those, but I suggest that you **stick with 2-3 slide types** and just add new elements like more columns of text when needed. It will make it a lot easier when you later want to adjust the design of your slides (for example, because you decide to add a Twitter handle to each slide and now you need to add it to the template for every slide type you used).
- **Keep a slide with important information on while you answer the questions**. I usually keep a slide with a link to the code repository for the talk, my Twitter handle and the URL of my website on the same slide that says "Questions?". And I will keep it visible throughout the whole Q&A session. This will give people plenty of time to note them down.
- **Take advantage of the speaker notes**. You can obviously write what you want to talk about there, but you can do more. You can put **notes for yourself**[^9]! Remind yourself to check the time. Or to take a longer break because you just switched to a slide with a lot of code, so people need time to read it before you start explaining. You can drink some water in the meantime.
- Introduce yourself, but **don't overdo the "About me" slide**. The main reason to talk about yourself is to establish some credibility and explain why you think you're the right person to give this talk (e.g. *I work for the ZZZ company where we used library YYY and now I will tell you cool things about it*). Sometimes you might be forced to do this slide as part of introducing the company where you work and which *generously paid for you to be here. Btw. we are hiring, here is the link...*. But if what you do is not connected to the talk, this is just a waste of listeners attention at the beginning of the talk. 
- **Add a way people can follow up**. Add a link to your website, social handle or at least email. This is especially important for people who will be watching your talk later on YouTube and want to connect with you (one of the main reasons why you're on this stage is to build your personal brand).

And maybe you want to spice things up with a live coding session?

## Live demos

Live demos are hard.

Take this section with a grain of salt - I almost never do live coding (and I have good reasons for this, as you will shortly see). But I have seen people like James Powell that can do an absolutely stunning talks that only consist of live coding.

First of all - **do you really need a demo?** What do you want to show? How to setup a project? Everyone knows how to use `pip` to install a bunch of packages. How to run some commands? Don't waste time, just show me the end results. Or do you want to show how you can type code in your code editor? We... all can do that too, you know? Please make sure you have a good reason for a live coding session.

When talking with new speakers, they often ask about the live demos. It feels like a lot of people wants to do a demo, but they are also afraid it will go wrong. And they are right! **Demos often go wrong!**

Your internet connection will stop working in the middle of `pip install` command. You will have to type using a very large font so people in the back rows can see what's on your screen. But this will make it harder for you to see what long command you're typing. You will make typos. A **lot** of typos. And there is nothing worse than debugging your code in front of few hundred people. Of course, everyone will try their best to help you spot the error. But do you really want to waste time of all those people on looking how you fix typos for 10 minutes? And have you even tried writing code and talking at the same time? It's impossible to type code and explain what you are doing right now. So you can either type in silence and explain afterwards (or before) or try typing and talking at the same time, making tons of errors.

Many of the demos I've seen were done for the sake of *having a live demo during presentation*. The same ideas could be presented by explaining code fragments that are nicely annotated on your slides. Or a prerecorded video of the code demo. That way you can comment what is happening on the screen without the stress of having to type along.

If you really think a demo is the best way of presenting your ideas, at least **have a backup plan**. You can print the code and have it in front of you. That way you can see what exactly you need to type or at least reference it if you get stuck. I recently saw someone doing a live demo with an [ASUS Zenbook duo](https://www.asus.com/laptops/for-home/zenbook/zenbook-duo-14-ux482/) laptop that has a small screen right above the keyboard. It can be used to keep your notes in front of you and it looks very cool.

Alternatively, have a git repository with different tags or branches referencing different points in your code. That way, if you get an error that you can't solve, just check out the next version of your code and save yourself from futile debugging.

There are tools like the [demo-magic](https://github.com/paxtonhare/demo-magic) that lets you *fake* the live demo. You write a shell script that then you replay and no matter what keys you press, the prerecorded text is printed and executed in your terminal. They have a very limited usage. Not many demos consist of only typing shell commands in the terminal, usually you need to alternate between the code editor and the terminal. If all you want to present are the results of various shell commands, then this tool might do the trick. But if you want to use it to pretend that you just flawlessly typed all the code on the first try while cracking jokes, that's just dishonest to your audience. And it sets unrealistic expectations to other speakers who now thinks that live demos are so easy.

A few more closing tips for demos:
- Don't forget to **increase the font size in every terminal and code editor that you will use**. Ask the audience if the font is large enough so everyone can see.
- That cool color theme that you have for your code editor or terminal might be completely unreadable with a bad lightning. Consider having a **simple, light, and easy to see theme** for the demo.
- Many demos never reach the end. If your also fails because of some technical issue, don't let this stress you for the rest of the talk. **Explain what you wanted to show and move on**. Don't forget to have a backup plan like a video or finished code, as I suggested before. Your audience is used to problems with live coding. If you get over a failed demo, so will they.


## Rehearsing

Your presentation is ready, slide deck is complete, now it's time to practice the delivery of your talk.

- **Rehearse. A lot.** Even if you have a script in your speaker notes, you want to memorize it as much as possible. Otherwise you will need to read from your laptop throughout your presentation and that looks bad.
- While rehearsing, **note down your time during a few key moments** in your presentation. For example, around 10th, 20th and 25th minute of your 30-minute long talk. That way, when you get on the stage, you will know if you have a good time or if you need to speed up or slow down. You don't want to ruin your great talk by quickly skipping thorough the last slides because you lost track of time. And if you fall behind and need to speed up in the middle of your talk, you will know how much you need to speed up. Maybe you can skip some minor section to get back on track? You don't want to speed up though your slides only to finish too early.
- Rehearse a bit more.
- Do a test run of your presentation in front of your friends and **ask for feedback**. Don't have friends? Go to a meetup and present your talk there.
- Look in the mirror and **pay attention to your body language**. Do you gesticulate so wildly that you could easily win any argument with your Italian friends? Or do you keep hands in your pockets all the time? Try to find balance between gesturing too much and too little. For example, I noticed that for online talks I tend to wobble side-to-side which looks comically and I try to fight this habit by keeping my hands on the desk.
- Record yourself (or ask someone for feedback) to **see how you speak**. Do you, *uhmm*, use, *uhmm*, *like a* lot of, *uhmm*, filler words and, *uhmm*, *maybe* it would be better to, *uhmm*, stop doing that? Do you speak loudly and clearly enough? Or do you mumble and not everything can be understood?
- **Focus on nailing down the first 5-10 minutes** (basically the whole introduction to the problem) **and the closing of your talk**. Those are the most important parts of you talk. At the beginning you need to grab your audience attention. And the way you speak at the end is how people will remember you talk. No one cares if in the middle you looked at your notes a bit more often.

## Day of presentation

- **Don't drink too much alcohol the previous day and get enough sleep**. You will have enough stress, no need to add hangover and sleepless night to pump up the difficulty for yourself.
- Try to **eat a good breakfast**. The closer you get to your talk, the more stressed out you get. For a long time, I couldn't eat anything within hours before my talk, so it was especially important for me to get a good breakfast.
- **Don't wear black clothes**. With a dark background, you might look weird on the video. And please don't wear a grey t-shirt or anything that will turn into a disaster when you start sweating on the stage. You can find more recommendations on what to not wear - including big and small patterns - in [this article](https://www.lemonlight.com/blog/what-to-wear-and-not-to-wear-during-your-production/).
- Wear something that will make **wearing the microphone easier**. Quite often the conferences will use a small microphone that is attached to your shirt and connected with a thin cable to a receiver that you need to put in your pocket. So wearing something with pockets and something that makes it easy to attach and adjust the microphone (a shirt) is a good idea.
- **Don't drink too much water or coffee before your talk**. Use the bathroom before your talk.
- **Don't be late**. Want to attend another talk in a different room just before your talk? You can always watch it later. You don't want to rush to your room being late for your own talk. I usually go to the room where I will speak one talk earlier, so I can start setting up as soon as the previous talk is done.
- When the previous talk is finished, **find the session chair and introduce yourself**. They will explain you everything, set up your computer and maybe ask how you want to be introduced on the stage.

### Packing checklist

Don't forget to pack the following items (if you feel that you need them):

- Your laptop (sounds obvious but it's a stressful day, so I'm mentioning just in case).
- Charger (just in case, although new laptops can easily last a full day on battery).
- Presentation remote, if you use one. I absolutely love the [Logitech Spotlight](https://www.logitech.com/en-us/products/presenters/spotlight-presentation-remote.910-004654.html) remote. It not only makes it easier to show something on the slides that **will be visible on the video recording** (unlike the laser pointer that only shows a red dot on the projector's canvas), but also holding it in my hands solves the problem of "what do I do with my hands as I speak?"
- Water. Most likely there will be some water on the stage, but just in case, it's better to have something in a bottle that you're familiar with and can easily open.
- Display adapters for your laptop. Nowadays, most of the conferences have all kind of adapters around and most projectors can be plugged directly into the HDMI input of your laptop (if you have one). But if you're going to a smaller conference, can't use HDMI or just want to be extra sure that nothing will go wrong, bring adapters with you.
- USB key with your presentation. As a last resort for your laptop getting lost/breaking/not connecting to the projector, keep your slides as PDF on a USB stick with you. You can also put other formats there, but PDF is a must as any computer can open it. And, unlike with Keynote/Powerpoint, you don't have to worry about missing fonts that might not be present on someone else's computer. I never do this and it will probably doom me one day. But what I do is to keep my presentation in the cloud in a format that can be opened in the browser (that's usually a PDF that I keep in Dropbox and can instantly share with someone).
- Stopwatch, if your presentation software doesn't provide you with one.

### Before you get on the stage

- **Remove things from your pockets and your lanyard**.
- **Silence your phone and your watch**.
- **Mute notifications and turn off unnecessary apps**. Some people might tweet about your talk and include your handle - you don't want to get distracted by those notifications. Or to share with the whole audience that your partner loves you and wishes you all the best with your talk[^10].
- **Disable any night time filters**. You don't want your screen to go more and more yellow if you have a talk in the evening or your computer is still set to a different timezone
- Make sure to **prepare some water**. You might think you don't need it but it will be useful in more ways than you could think. Lost your train of thought? Drink water. Noticed that you got nervous? [Slow down by drinking some water](https://c.tenor.com/b47bledjQi0AAAAC/keneth-parcell-nervous.gif). Got some know-it-all guy hogging the microphone and showing off how much he knows about your talk in the Q&A session? Toss the bottle at him!

### On the stage

- Try to **connect with the audience**. Ask a question (the *easy* way) or tell a joke (the *harder*, but more rewarding way). Talk about something connected to the present situation ("There will be lunch after my talk, so I will try to keep it brief and you're all probably very hungry"). Or to other events ("I remember when I first came to to XYZ conference. Wow, this conference grew so much. How many of you are here for the first time?")
- **Don't apologize for not being the expert** on the topic. First of all, you want to build credibility, not lose it. Second of all - didn't you just spend weeks trying to learn all you can to make a great talk?
- **Pay attention to your pace**. You usually speak with a normal speed, but when you get stressed you might accidentally start speaking too fast[^11]. Try to pay attention to how fast you speak and try to slow down.
- **Monotonous voice is a boring voice**. People respond better to a person who is passionate on the stage, not to someone who sounds like their boss made them give this talk. If you want to see how a passionate speaker looks like, check out any of the captivating talks by Daniele Procida (like [this keynote](https://www.youtube.com/watch?v=gjutf_Af9HQ) from PyCon Portugal).
- Just like you should change the pace of your slides to keep the audience interested, you can also **change the pace of your talk**. Ask questions ("Do you see a bug in this code?"), do a raise-a-hand exercise ("How many of you love writing tests?"), crack a joke ("So, there was a guy who really loved tractors...").
- **Take a pause**. It will give your audience a chance to better process something important that you just said or to prepare for something important that you will say.
- Using **rhetorical questions spikes interest**. Just don't overuse them.
- When speaking, **focus on individual people and alternate between people you talk to**. For many speakers, it will feel more natural than talking to a random point in front of you (but not for everyone, some people get stressed by looking at other people). Whatever you choose, just **don't stare at your computer** all the time. Or turn your back/side to the audience and look at the slides projected behind you. If you need to look at your speaker notes, try to have a quick glance as you change to the next slide and then look back at the audience.
- If you have only a few people in the room, **encourage them to come and sit closer in the front rows**. You can also ask the chairman of your session to encourage people to do so. It is much more comfortable to speak to people in front of you than to a few people dispersed in the corners of the room.

### Q&A

"Questions and Answers" or the Q&A is hard. And not because you will get hard questions that you have to answer immediately in front of hundreds of people. No, that's the easy part. You can always say "I don't know" (more on that later).

The hard part is the whole technical aspect of it. Some rooms have a terrible acoustics so you may not hear the question well. You might have light shining directly in your face so you can't see the person you talk with. And they can have a hard to understand accent or their question is too complex to quickly explain what they mean in a few sentences. So you might have to guess what they are asking about.

So, how good are you at answering **complex questions that you only partially heard while blindfolded**? Sounds fun, right? Why not add juggling burning chainsaws while riding a unicycle to the mix? That won't make it much harder.

Luckily, you don't have to do the Q&A session. If it stresses you out, simply tell your audience that you won't do the Q&A session but you will be around to answer their questions after the talk. You don't have to make excuses why you don't want to take questions on the stage, people will understand and respect that.

On the other hand, it you're giving a long workshop or if you're a more experience speaker and you run your talk in a more informal way, you can ask the audience to ask questions during your talk. This works if you're not afraid to lose your flow when you're interrupted or that you will run out of time because there are too many questions.

Whichever option you choose, communicate this to your audience at the beginning of your talk.

Also, when you get a question that was asked without a microphone, please repeat it. People watching the video recording of your talk and everyone else who didn't hear the question will be grateful. It will also help you make sure you understood the question correctly.

#### Dealing with difficult questions

If you decide to have the Q&A session and you do get a difficult question, there are different ways to deal with it:
- Say "I don't know". You're not supposed to know all the answers. It's ok to admit that you don't know something instead of trying to come up with some random answer on the spot. This is not an exam in a school.
- Say "I don't know, but I can check and get back to you - please send me an email" as an even better version of the above answer.
- If someone is drilling too deep into a specific subject or if the question is too specific to be interesting to most of the audience, say "Let's take it offline. I will be happy to discuss this with you after the talk" and move to the next question.

Finally, there are the dreaded [I have a question, well, more of a comment; I'm actually an expert on this topic and that's where you said something wrong](https://xkcd.com/2191/) types of "questions". In many cases, a good chairman will help you out and ask for the next question. It not, you can always acknowledge their remark and move on to the next question. No matter what happens, remember that **the audience is always on your side** and they hate those smarty-pants as much as you do. Once, I had a person who started giving me advice about some pseudocode I used to describe a concept I spoke about. And by the time he moved to their second remark I interrupted with "is there an actual question coming?" That cut the discussion immediately and the next person could ask the actual question[^7].

Your job on stage during the Q&A is to answer questions that are useful for the whole audience, not argue with someone about minor code details. If someone blocks the microphone for too long, try to say something along the lines of "let's discuss it after my talk" and then take the next question. This may lead to some interesting, deep conversations about the topic of your talk, but those conversations should not happen in front of the whole audience.

### After the talk

- **Stick around** to answer some questions that people didn't have a chance to ask when you were on stage. Or at least just to hear "good job!" from random strangers. That's a great feeling!
- **Ask for feedback**. It's really hard to get feedback from people beyond the typical "it was a great talk". I mean, it's great to hear that people enjoyed it, but that won't help you improve and deliver the next presentation even better. It's usually easier to get some constructive criticism from friends who attended your talk. I usually jump straight to "what would you improve in my talk" when I talk with them. Some conference organizers (albeit, I saw that only for smaller conferences) ask participants to submit feedback for the speakers and this is immensely helpful.
- And most important - **enjoy the rest of the conference**! You no longer need to stress about your talk.


#### Reuse your talks
It should be fine to reuse your talks, yet some conferences are picky and they want to get only the brand new, never-presented-anywhere talks.

No. People have life too. Unless I get paid to make a presentation (and I don't) I have time to prepare one thoroughly-researched and well-prepared talk per year. Take it or leave it.

But you, as a speaker, don't be discouraged from submitting your talk to multiple conferences. Of course, when asked, disclose that it was already presented or will be presented at other conferences. But a huge majority of the conferences will understand that you're pouring dozens of hours of your personal time into making this talk. And as long as it fits the theme of the conference/track, they will be fine with the fact that they are not the only conference that will have it on their YouTube channel.


### Resources

Here are other great blog posts that helped me write this one (in no particular order):
- Eric Snow put up [Advice For PyCon Speakers](https://ref.readthedocs.io/en/latest/advice_for_pycon_speakers/) website with tons of tips for speakers. It's over 10-years old, it's still as relevant as it was in 2012. At the bottom it includes links to advice from other prominent speakers.
- https://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk/ - a **very** thorough guide from Lena Reinhard with plenty of additional links to other resources.
- https://speaking.io - tips for public speaking from Zach Holman who have spoken at more technical conferences than anyone on this planet (except for the people who have spoken at more conferences than him).
- Hynek Schlawack wrote a detailed walkthrough on [how he prepares his talks](https://hynek.me/articles/speaking/).
- https://www.harihareswara.net/posts/2016/tips-to-increase-your-conference-talk-acceptance-rate/
- https://www.ashedryden.com/blog/what-you-need-to-know-about-speaking-at-conferences
- https://katemats.com/blog/public-speaking-at-a-conference
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://opensource.com/article/17/9/7-best-practices-giving-conference-talk


[^1]: And, as a speaker, I also attended many more conferences than I would attend as just an attendee. So in the long run I probably spent much more money on flights and hotels than a regular *conference goer*.
[^2]: If we consider putting dozens of hours into your talk *easy*.
[^3]: Partially because I keep forgetting my glasses and I can't read the slides from the back rows. But mostly because it's an interesting idea even though I would never think of doing myself.
[^4]: This is something that I often have a problem with. It's very time consuming to do a thorough research for the CFP (especially it you propose a few different topics), since you're not sure if your talk will even be accepted. And then, as you do more research, you want to change some of the initial ideas and replace them with better ones. I don't have a good solution here. I usually allow myself to change my talk a bit when compared with the outline and I also try to write the proposal in such a way that it stays as open as possible for those small changes. If you need to change a lot in your talk, write an email to the conference organizers asking them if it's ok to do so.
[^5]: It doesn't mean you have to stick with it in every presentation. The "introduction", "main part", and "summary with conclusions" is a very safe way to organize you talk and I would stick with that as a beginner. But if you don't want to spoil what you will talk about and want to focus on entertaining your audience with a story, you can skip the presentation of the agenda.
[^6]: An excellent example of this is Aaron Patterson (a.k.a. [tenderlove](https://twitter.com/tenderlove)) from the Ruby on Rails community who is a frequent keynote speaker at RailsConf conferences (like in [this one](https://www.youtube.com/watch?v=qqTFm2ZtRHg)). He has this *interesting* way of giving talks that makes him look more like a struggling stand-up comedian that a core Rails contributor. He tells a lot of jokes. Not all of them are great. He laughs at his own jokes all the time. For half of the talk you don't even know where this is going. And suddenly he gets to the point and he introduces some interesting concepts from the latest version of Rails. He's full of this incredibly weird and positive energy that makes his talks one of the most entertaining ones I've seen in my life. Please, never change Aaron.
[^7]: I actually knew that person and I'm sure he didn't say that out of malice. He simply wasn't aware that those type of comments, while fine during a more informal meetup, have no place during a large conference talk. But even unintentionally, those difficult questions will happen.
[^8]: And I want to apologize to all the creators for the times when I forgot to do this.
[^9]: Because, you know, you're a speaker!
[^10]: Although, I think it's cute and I don't mind.
[^11]: I'm still joking that in my "Wait, IPython can do that?!" talk I was speaking so fast that it's the only talk on YouTube where people need to use that 0.75x speed button. 
