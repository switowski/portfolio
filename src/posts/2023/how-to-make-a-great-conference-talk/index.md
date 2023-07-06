---
title: How to Make a Great Conference Talk
description: Are you an aspiring conference speaker looking to improve your presentation skills? Check out my guide for tips and tricks to help you make great talks that engage your audience.
tags: ['Conference', 'Speaking']
date: 2023-03-20
---

Last year, I participated in a workshop organized by the EuroPython conference for beginner speakers where I shared my tips for making good presentations. It was a great idea, and I wish I had access to such a workshop when preparing my first talks.

I have decided to write this guide to assist my readers who aspire to be conference speakers. I hope it will help you prepare for your first presentation or improve your talks further.

:::callout-info

This article turned out much longer than I initially thought.  
You can jump directly to the part that interests you the most:

- [Benefits of speaking at a conference](#benefits-of-speaking-at-a-conference)
- [Why should you take advice from me?](#why-should-you-take-advice-from-me)
- [Debunking some myths](#debunking-some-myths)
- [Call for Proposals](#call-for-proposals-cfp)
- [Research](#research)
- [Preparation](#preparation)
- [Slides](#slides)
- [Live demos](#live-demos)
- [Rehearsing](#rehearsing)
- [Day of the presentation](#day-of-the-presentation)
- [Q&A](#q-and-a)

<!-- I could also turn it into a 1-hour presentation for your conference.  
If that sounds interesting - let's [get in touch](/about#contact-me). -->
:::

I try to keep my suggestions as open as possible, including things that don't work for me but may work for you. Just because I do something in a specific way doesn't mean everyone else does it too. I will also try to keep my advice brief instead of supporting each with a story from my life.

<!-- TODO: add link to "how i make presentations" below once I have that blog post ready -->
Later on, I will write another article focusing on how *I* make presentations, collect ideas, and prepare my slides. There, I will go into more detail on *why* I do things a certain way.

First of all, why would you even want to spend time preparing a talk for free?

## Benefits of speaking at a conference

- The most obvious reason is that as a speaker, you get a **free ticket** to the conference (this applies to most, but not all, of the conferences). Throughout the years, I probably saved thousands of dollars on conference fees[^1].
- **Recognition**. The more presentations you give, the more famous you get. Sometimes people will recognize you from a talk, or you will see a blog post where someone calls your presentation *interesting*, making you very happy.
- **Building your brand**. Like the above point, the more you speak on a given subject, the more people see you as an expert. This can lead to some exciting opportunities in the future, so don't forget to include a way people can contact you later (add your LinkedIn profile or social media handle on the slides).
- **Networking**. Being a speaker is an *easy* mode for introverts like me to talk with more people (if we consider putting dozens of hours into your talk *easy*). Some will approach you after your talk and ask questions on the subject, but many more will see "speaker" on your badge and ask what you will talk about[^2]. Being a speaker also makes networking with other speakers easier. For me, it was a huge deal because my last two contracts came from connections I made with other speakers. I would miss two great projects if I wasn't a speaker.
- **VIP events**. Some conferences offer unique benefits for the speakers. PyCon Taiwan organized a sightseeing tour for the speakers, and PyCon Japan had a social dinner.
- **You might get invited to other conferences**. As a former speaker, you will be on the radar of smaller conferences that invite speakers to apply for their Call for Proposals. You will also have something to put in the section for "share a link to your previous talk." So the more talks you give, the easier it will be to get accepted in the future. On a few occasions, I was invited to a semi-commercial conference (a conference about Python that was mainly sponsored and organized by a single company) that paid for the flights and hotels. So it was a free, geeky weekend for me. Sadly, after covid, I mostly get invited to online conferences nowadays.
- Finally, you might genuinely **want to share your knowledge**. I enjoy talking at conferences (the same way I enjoy writing this blog). Every year I choose 2-3 conferences I want to speak at[^3].

## Why should you take advice from me?

Now, why should you take advice from me?

- I have spoken at over 15 major Python conferences around the world (various PyCons in different countries and at EuroPython) and over 20 smaller conferences and meetups. I have been speaking online and offline since 2016.
- My talks are usually well received. Some have a high view count on YouTube, and when I talk with people, they typically say my presentations were good (although no matter how much I press, it's hard to get negative feedback because people are usually nice).
- I'm constantly trying to improve my talks. In 2017, I took a course at work on making good presentations, and I'm always on the lookout for how to be a better speaker. Some people are born great speakers. I'm trying to get there eventually.

And why you might **not** want to take my advice:

- You know those speakers who enter the stage and apologetically explain that *their presentation might be rough because they were finishing it yesterday on the plane*? And then they give a better talk than any I have ever created. That's not me. And no matter how hard I try, that will never be me. I put many hours into research, making slides, and rehearsing. Most of the speakers do. If you're looking for a "How to make a presentation over the weekend (while also getting a pilot license, because, come on, how difficult can it be to make a silly presentation?)", this guide is not for you. You might still enjoy the general tips on slide design or what to do before/during/after the presentation.
- I write full scripts for my presentations (that is, the whole text of what I will say). I roughly memorize them the first time I give the talk. And the more times I present it, the less I rely on my notes, but I still need them. Writing things how I want to say them feels natural to me. I don't buy the "using a script sounds nothing like the way you talk" argument. Trust me, I speak way more boringly than I write. You don't want to hear me improvise a talk. So while I try to keep the advice in this article as generic as possible, I probably can't give you the best advice on how to wing the talk or go without notes.

There are many much more experienced speakers who have also shared their insights. I'm linking them at [the end](#additional-reading) of this article.

## Debunking some myths

If you're still hesitating about whether you should submit a talk, let's debunk some of the most common myths that might be stopping you.

### "I'm not an expert!"

You don't have to be. To give a great talk, you don't have to be an expert, but you should be passionate about the topic. If you are an expert and can present a topic in an approachable way, that's fantastic. But it's also rare. Not every speaker is an expert, and even if they are, not every expert can explain complex topics in a simple way. Quite often, people who are new to something have the most interesting, fresh ideas. They are much better at explaining a topic to beginners because they were beginners themselves not long ago. People who spent 10 years writing machine learning models (in addition to spending four years writing a Ph.D. about machine learning) might skip too many details that are not obvious to someone new to the topic.

It's perfectly fine to propose a presentation on something that you discovered recently. Presenting a topic is also an excellent opportunity to learn more about it. When I submitted the proposal for *[Wait, IPython can do that?!](https://www.youtube.com/watch?v=3i6db5zX3Rw)* I knew a few interesting tricks IPython could do, and I simply wanted to share them with others. But when I started preparing the talk, I discovered twice as many new, cool things it can do. This year, I proposed some talks about Continuous Integration. Sure, I've built a couple of CI pipelines in various projects, but I want to dig deeper into what's possible and how the CI ecosystem has evolved over the past few years. And what better way to force yourself into doing thorough research than having to talk about this topic for 30 minutes and answer some questions?

Finally, if you're a more advanced speaker, it's probably okay to take some risk. Let's say you propose a talk about a project you want to build ("Building self-driving cars with Python when all you have is a Raspberry Pi, a motorboat engine, and an old shopping cart"). But you're not sure about the outcome of this project. It might fail. A story about how you tried to do something cool, the challenges you overcame, and those you didn't, plus some lessons you learned, can be a fantastic tale. And who knows? Maybe someone from the audience struggled with the same problem and can give you some fresh ideas?

The most entertaining talk I saw at PyCon Poland last year was about teaching a dog new tricks with MicroPython. And while this project failed, it still resulted in a fascinating story and valuable lessons for anyone who wants to tinker with MicroPython and some homemade hardware. This talk is the second most-watched video from that conference (and if you speak Polish, you can watch it [here](https://www.youtube.com/watch?v=6_VxIq-4j7c)).

### "There are already so many talks about X!"

Where "X" can be "pytest," "type hints," or "pandas for beginners." Trust me, **there are never enough talks on topics that seem obvious**.

Each conference every year is full of new people. Whenever there was a classical crowd-warming exercise called "raise your hand if it's the first time you're attending this conference," at least 30-50% of people raised their hands. That happened at EuroPython with over 1000 people and at some smaller PyCons with 100-200 attendees.

So every year there are new people keen to listen to a talk on one of the "common" topics.

Each presenter has a different view. One might cover "10 popular pytest plugins", another "how to speed up your tests," and yet another one "an introduction to test-driven development."

And every popular language, framework, or library is evolving. A "5 cool CPython features I wish I knew before" talk from 2020 will look completely different when given in 2025.

That's why talks about pytest, pandas, and recent CPython features are and will be accepted every year.

### "I get too stressed to give a good talk"

Most speakers get stressed even if they don't show it. The first time I gave a talk in front of 100 people at CERN, my legs were shaking so badly that I had to hold the podium the whole time. Some people have [fainted](https://hynek.me/articles/hallway-track/#:~:text=At%20the%20end%20of%20the%20talk%20I%20fainted).

Look, you should not feel forced to give a talk if you feel uncomfortable doing so. But many speakers deliver great talks while still being completely stressed out inside. And the feeling of relief and satisfaction I get at the end of my presentations compensates for all the initial stress.

For some people, it will become less stressful the more experienced they get. For some, the stress will never disappear, and they will get used to it.

For me, while it got less stressful than the first time, I was still quite stressed for a very long time. I couldn't eat anything before the talk. What eventually helped me overcome the stress and lowered it to a much more manageable level was that I started doing more demos at work. With more senior positions, I regularly had to join meetings and demo features to random stakeholders. Initially, those meetings were stressful, but after some time, I got used to giving impromptu presentations. And I've noticed this lowered my stress levels when speaking at conferences. So try speaking more at work and local meetups if you want to deal with your stress.

If you're afraid that stress will make your mind go blank and you will forget what to say, consider writing and memorizing a script for your first talk (more on that [later](#wing-it-or-script-it)).

## "I'm afraid of the questions from the audience"

Guess what? You don't have to answer them!

You can always ask the conference organizers or the chair of your session (the person who will introduce you and then moderate the Questions & Answers) that you don't want to have the Q&A, and they will most likely oblige.

And if you decide to go for the Q&A session and get a tricky question, saying, "I don't know," is perfectly fine. No one expects you to know everything. I will cover more tactics on [how to survive the Q&A](#dealing-with-difficult-questions) session later.

---

Let me know in the comments if you have other reasons to not give a talk, and I'm happy to dispel those for you.

Now let's talk about one of the most critical steps that will determine whether you will even have a chance to give your presentation.

## Call for Proposals (CFP)

If there was one piece of advice I could give you here, it would be "**don't neglect it**". You shouldn't neglect any part of the whole presentation process, but if your talk isn't accepted, the fact that you can tell the most captivating stories doesn't matter. There won't be a conference willing to hear them.

Too many proposals are poorly written.

This is something I noticed when reviewing proposals as part of the community voting and what I heard talking to members of the program boards (so, professionals who have been selecting talks for years).

Yes, I know that you have a great story. It's interesting. It has important lessons learned and some beautiful code examples that will make the Python world a better place. But **you need to convince a group of people with varying levels of Python knowledge, different backgrounds, and interests that your talk is interesting**. That it's more interesting than the 400 other talks waiting to take your place in the schedule.

:::callout-info

### Community voting

Although I'm not part of any official program committee, I try to participate in the community voting for various conferences whenever I can. During this time, people who have already bought a ticket and participants from the previous years can vote on which talks they would like to see this time.

I review proposals during community voting like I would screen a CV. I spend around 10 seconds on most of them, quickly skimming the title and abstract. If it looks interesting, I read more. Perhaps program board members are more thorough, but maybe they aren't? So just like with your CV, you need to make sure you can grab my attention in those 10 seconds.

Spending only 10 seconds on someone's proposal may seem unfair, but let's do some math. From the proposals I skim, maybe every third one looks interesting enough to read thoroughly. It takes around 1 minute to fully read a proposal and decide if it's a talk I want to see. For example, EuroPython received [429 proposals in 2022](https://twitter.com/europython/status/1510988056878206979). So spending 10 seconds (skimming) on 66% of them and 1 minute (actually reviewing) on 33% of those 429 proposals takes 11,440 seconds. That's over 3 hours to review all the talks (which is a highly focused task and usually takes much longer). I want to give all submissions equal chances, so I review all of them. That's why every proposal has a very limited time to pick my interest.

:::

There are many proposals competing with yours, so it's important to grab the reader's attention and reduce the chances of them passing on your proposal.

Here are some ways to achieve this:

- **Make your proposal easy to scan**. A wall of text is harder to read than 5 bullet points that summarize the main topics of your talk.
- Check you're **grammar** 😉. Just like with your CV, spelling mistakes can turn people off from your proposal.
- **Submit more than one proposal**, if possible. Doing so increases the chances of you getting a speaking slot.
- **Explain what the audience will take away** from your talk. People attend talks to learn something new, so be upfront about what new knowledge you'll be sharing.
- **Include links to your previous presentations**. If in doubt, the organizers will check your previous performance. If you don't have a conference talk, use a recording from a local meetup, a lightning talk, or a short tutorial on YouTube.
- **Propose a topic for an advanced audience**. This may sound insane if you're a first-time speaker, but proposing an advanced topic increases your chances of getting selected. Conference organizers often want more talks for the most advanced audience (I never heard anyone saying *man, I wish we had more talks for beginners; I'm tired of those expert deep-dives into advanced topics*). If you're an expert in a specific library, come up with something beyond an "introduction to X."
- **Funny, clever titles** or first sentences from the abstract have a higher success rate but don't overdo it. Subtle wordplay works best. Avoid hackneyed phrases everyone has heard before.
- **Don't use clickbait titles** (says a guy who literally named one of his talks "Writing Faster Python" 🤦). Clickbait may work on social media, but not when a group of smart people reviews your talk. A catchy title is good, as I wrote in the previous point. But **you have to deliver** what your title promises. "5 Python Libraries You Can't Live Without" proposal that talks about requests and pytest or "Making Money as an Open-Source Maintainer" talk that ends up with you saying how you get $5/month from GitHub sponsorship is basically deceiving your potential audience. More experienced reviewers will see through this clickbait. Choose an interesting, concise, and catchy title, but ensure your presentation's content matches it.

If you're a more experienced speaker, **don't be afraid to leave your comfort zone**. Proposing a talk is an excellent way to explore a topic in greater depth. A niche topic may have a smaller audience, but it can lead to deeper conversations with those who are genuinely interested in the subject.

### Finding examples of accepted and rejected proposals

If you want to see what a good proposal looks like, check out the schedules from previous years. For example, EuroPython keeps websites for [all of the previous editions](https://www.europython-society.org/europython/) online. This way, you can easily check what proposals were accepted.

It's a bit more tricky to see which proposals get rejected. You can join a program committee for a conference, and you will regularly be involved in accepting and rejecting talks. You will even get guidance from other members on what to look for in a proposal.

If you want something more *lightweight* than joining a committee, try the community voting that conferences like EuroPython, PyCon Italia, or PyOhio organize. This is an excellent opportunity to see hundreds of submissions and get a feel for good and bad proposals. You will see why I stressed the "don't neglect the proposal" advice so much.

---

In the end, there is always some luck involved in getting your talk accepted. You can increase your chances with the above tips, but none of them will guarantee success. Maybe someone with a similar topic wrote the proposal slightly differently, and their way was more convincing to the program committee. Maybe your talk doesn't fit into any tracks. Perhaps you're just unlucky - the biggest Python conferences get hundreds of proposals for only dozens of slots.

Don't get discouraged. Try submitting your talk to a different conference or a local meetup to gain more experience, improve your proposal, and have a portfolio of "previous talks" you can present next time.

### Coming up with ideas

The "easiest" (in quotes, because there is nothing easy in preparing a good talk) way to come up with an idea is to present something you used at work because:

1. You have used this tool/framework/program/idea before, so you already know it.
2. You will do more research, but that knowledge will be useful for your work in the future.

But this doesn't apply to everyone. Maybe what you do at work can't be presented because it's a trade secret. Or because it's so dull that you will either bore yourself or the audience if you talk about it for 30 minutes.

So if that doesn't work for you, write down **things that you did in the past**, **things that interest you** (for me, it's usually Python tools, best practices, or improving my development environment), and **things you want to learn more about**.

Some other folks suggest contacting the conference organizers and asking what topics they would like to hear about at their conference. But I've never tried doing that. I feel this advice is more applicable to a commercial conference that does a lot of outreach to attract speakers, and I don't attend those.

Once you have a list of ideas, pick one (or more) that might interest others. How do you know what interests other people? Ask them! In real life or on social media. "Hey, I'm thinking about making a presentation on the following topics for a Python conference. Which one would you like to see the most?" followed by a poll with your ideas should do the trick. It doesn't have to be something they **faced**, but something that would **interest** them. Not everyone has a dog. But a talk on how to train your dog using 3D-printed, homemade hardware programmed with Python? You would see me in the front row for that one[^4]!

Can't find an idea for a talk? ~~Steal~~ Borrow it or ask the AI.

You can get inspiration by looking at the talks from other conferences. For example, my "Writing Faster Python" was inspired by "Writing Faster Ruby." See what topics were most interesting at other conferences or at previous editions of the one you're applying for. That should give you some inspiration.

Another surprisingly effective way is to ask the AI to help you brainstorm ideas. I used ChatGPT to help generate ideas for this year's conferences, and after a few tries, I decided to make some talks about Continuous Integration. I had this topic somewhere in the back of my head, but I forgot about it when thinking about what I could propose. Luckily, ChatGPT's suggestions reminded me of this idea. So it's not that AI will do everything for you, but it's useful for brainstorming.

You can also ask your colleagues at work. A random question at the water cooler ("What talks would you like to see at a Python conference?") can also help you generate ideas.

## Research

Now that you've submitted your proposal, you can either wait for the results or start preliminary research. I strongly recommend the latter, but maybe not super intensively. Just keep in mind that you might be preparing this presentation in a couple of weeks.

You will be surprised how many ideas and topics will come to your mind! You will suddenly find that many random articles are related to your talk. Save links to those articles. If you think of something that could be included, write that down or add a "todo" to research it further.

I use Obsidian to collect my notes, and I have a template that helps me write the proposal and later expand it into a full talk:

:::callout-success

**What**: Presentation on how to write faster Python code  
**Why**: For fun - source code level optimizations. But also with some educational purpose - how to speed up your code and see what's happening under the hood.  
**Who**: Beginners/intermediate developers  
**How**: 45-minute-long talk

### Outline

- Introduction [2 min]
- Why is Python slow? [3 min]
  - Python is dynamic...

### Presentation

- Why is Python slow?
  - ...
- #TODO Research XYZ topic

### Resources

- Link 1
- Link 2

:::

The **What**, **Why**, **Who**, and **How** are something I write first and maybe slightly modify later as I write the proposal. I keep it at the top of the file to see when I diverge too much from the initial idea.

The **Outline** is filled in during the CFP because almost every proposal requires an outline. I try not to touch it, especially when I have the timings there, so I know how much time I have for each section.

The **Presentation** initially starts as a copy of the outline (without the timings). This is where I write down all the random ideas and TODOs during my research phase. Later, as I work on my talk, I transform this section into my whole presentation.

And **Resources** is where I paste all the random links related to my talk that I later read and use that knowledge in my talk.

Don't settle on what you already know about the topic, even if you think you know a lot. Research what others think about it, so you can address their concerns. You will find plenty of things you missed simply because they didn't come to your mind. Even though, in hindsight, you already knew them! This article tripled in size after I looked at the recommendations from others, even though most of them were something I had already heard about before.

The research phase doesn't really end until you have the slides ready, although it's most intense until you finish writing the outline. You will constantly get new ideas as you write your talk, and you must research them to ensure your content is as good as possible.

But in general, I don't go beyond collecting all those random notes, links, and ideas until I hear back from the conference organizers.

## Preparation

"Your proposal has been accepted" - that's the email you have been impatiently waiting for for weeks.

Congratulations! Now the real work starts.

### Organizing your ideas

First, you need to gather all your random thoughts and organize them. An excellent way to do this is to build a mind map. It lets you group similar topics and see the big picture of your presentation's main points. Combined with the timings from the proposal, it makes it easy to see in which areas you have too much content and where you have too little. Your new, detailed outline in the form of a mind map should match the outline from the proposal. But sometimes, as you do more research, you might slightly diverge from the initial outline.

There are plenty of mind-mapping software options available. I'm not an advanced mind *cartographer*, so I use simple tools. In the past, I used [SimpleMind](https://apps.apple.com/app/id305727658). Later, I switched to the [Mind map](https://github.com/lynchjames/obsidian-mind-map) plugin for Obsidian since I [use Obsidian all the time]({% postUrl "obsidian" %}). It's a simple tool where I can write ideas as Markdown headers, and the plugin will visualize them as a mind map.

{% postImage "mindmap.jpg", "An example of a mind map created with Obsidian plugin", "", "Mind mapping plugin for Obsidian" %}

If you need recommendations for more advanced tools or general advice on creating efficient mind maps, [this episode](https://www.asianefficiency.com/podcasts/131-mindmapping-vs-outlining/) of *The Productivity Show* can be handy.

### Preparing your talk

When preparing a presentation, I always start by writing down my talk before I touch the slides. Although it doesn't have to be 100% final, I prefer to have a clear idea of what I want to say before creating the visual aids. If I have a brilliant idea for a slide that perfectly explains some concept, I write it down instead of opening Keynote. So let's cover writing your talk first.

What makes a good talk?

For me, **a good talk is one where I either learn something new or get curious about something**. It could be a deep dive into some advanced pytest features, a tutorial on generators, or an introduction to a new Python library.

The most natural way of organizing your talk is to divide it into three parts[^5] :

1. Introduction - explain to your audience why the topic of your presentation is relevant to them.
2. Main part of your presentation
3. Summary - briefly go through what you just said and present the conclusions.

The main part of your presentation can be nested using the same structure. If you have multiple main topics to cover, introduce, explain, and summarize them one by one. I usually display the agenda before and after each main topic to show where we are in terms of the whole presentation:

{% postImage "agenda_example.jpg", "Slide with agenda showing 2 out of 3 items crossed out", "", "Slide with the agenda I would show after covering 2 out of 3 topics in my talk" %}

Here are some other suggestions on how to prepare a good talk:

- **Tell a story**. Don't just toss facts and data at people. The best conference speakers are great storytellers and can teach us something new through exciting stories. The way the human brain works is that you can have the best content, yet people will find it boring if you present it as a bunch of dry facts. I suck at telling stories and can only admire those great storytellers from afar. But there is an easy win that you can do...
- **Start with a bang**. Captivate your listeners' attention, especially at the beginning, when they have a huge dose of faith that your talk will be interesting. And nothing does that better than starting by saying, "let me tell you a story about my internship at AWS," when your first slide is a burning data center. Ok, maybe not everyone has that type of story. But if you start with a 5-minute introduction of yourself and your company, and then it turns out that this has nothing to do with the topic of the talk, congratulations, you just wasted everyone's time. Tell a story of a struggle at work or an interesting idea you had and build your presentation from there. I had a talk called "Managing Python versions and dependencies" that I started by saying how some companies don't leverage any Python tools to make their developers' lives easier, and some use so many new tools that it's hard to keep up. That introduced a problem that probably many listeners faced at some point.
- **End with clear conclusions**. These will be the last words that your audience remembers, so you need to make them count.
- Make sure your presentation is **coherent** and has a **good flow**. This will require a lot of reviews of your talk, moving things around, and removing stuff that doesn't fit together. Don't jump from one idea to another. Try to connect them. In "Managing Python versions and dependencies," I introduced new tools from the perspective of a programmer who is s setting up their development environment. First, there was a tool to install and manage Python versions. Once they had that up and running, I discussed managing dependencies in a project. Next, once the developer has more projects, I added a tool to manage dependencies across multiple projects. Finally, I covered a tool to lock dependencies' versions when deploying a project.
- If you want people to better remember specific takeaways, repeat them multiple times. Just like with learning new things, we memorize by repetition. **Say what you will talk about, talk about it, and then summarize what you just said**. It will stick with your audience for longer.
- While you should adjust the level of your talk to what audience you chose in the CFP, sometimes you have to choose between too basic or too advanced ideas. **Err on the side of "too advanced."**  It's much more interesting to talk about an advanced topic that maybe some of the audience is unfamiliar with than to explain something so basic that most of them already know it.

### Wing it or script it?

How will you write your talk? Will you wing it without any notes on your slides? Will you jot down key points in the speaker notes for reference? Or will you write a script containing complete sentences that you will say?

There is no single best way to prepare your talk. Some argue that memorizing a script will make you sound unnatural, while others (including myself) prefer a more scripted approach. I prepare my talk by expanding the "Presentation" part of my template from a simple outline into a full presentation. Ultimately, it resembles a blog post, and I find it natural to write everything how I will say it during my talk.

:::callout-success

#### That one time when a script saved my life

Once, a script saved my life. Brace yourself for story time!

It was a lazy Thursday morning at work. The sun was shining through the window, and I was sitting at my desk, reviewing some code and enjoying my second cup of coffee. My to-do list for the day included updating slides and rehearsing for an online conference scheduled for the following day. Since I had given this talk several times before, I knew the content well enough, so there was no need to spend more than one evening preparing.

Suddenly, at noon, I received an email notification. It read: "You have a new message on LinkedIn." I opened it, and for a split second, my heart stopped (which, I guess, is what the heart does all the time between beats). The message said, "Hey, where are you? We're waiting in the streaming room!" It wasn't spam, nor was it a Nigerian prince wanting to part with his money - this time in the form of a video call, as all the previous methods of contacting me failed. Instead, it was the conference organizers.

Yup, you guessed it. I had put the wrong date in my calendar. I only had time to quickly remove the reference to the previous conference from the first slide before starting my presentation. I was praying the whole time that I wouldn't find any more slides that I had forgotten to update. Luckily, I didn't. And the whole presentation went... quite alright. With the adrenaline rush, most of the content came back to me as I was going through the slides. So at some point, I wasn't even reading my script anymore. But there was no way I could have pulled this off with no preparation or rehearsals if I had not had the script in my speaker notes.

:::

Don't let anyone tell you that a script, bullet points, or not using speaker notes at all is better than the other options. Choose the one that you find most comfortable. I always start with the script, and as I rehearse, I rely on it less and less. But when I get stressed or distracted, I usually fall back on my speaker notes.

Check out the story of [Tim Urban's TED Talk](https://waitbutwhy.com/2016/03/doing-a-ted-talk-the-full-story.html), where he talks more about the "Exactness of planning" spectrum (a.k.a "wing it vs. script it").

### Slides

The first rule of making slides is that **they are supposed to support your presentation, not replace it**. As an extension to this rule, if you can give your presentation without your slides, that's fantastic. If not, don't worry too much. I doubt many people can (I can't). However, aim to rely on your slides as little as possible. If the projector breaks, you lose your presentation, or even if someone is sitting too far from the screen, people should be able to understand your presentation and take away something from it without seeing the slides.

Having said that, it doesn't mean that slides should be a neglected afterthought. You should still do your best to make the slides as helpful as possible to your audience. Here are some ideas on how to do it:

- **Less is more**. Consider replacing whole paragraphs of text with bullet points containing only the most important keywords (although others recommend not using bullet lists at all). And **no walls of text**! You don't want your audience to focus on reading that novel you put on the slides instead of listening to you. **People can't read your slides and listen to you simultaneously**. Choose what you want them to do.
- If you go through your bullets one by one, then **reveal them one by one**. Otherwise, the audience will read the whole list instead of listening to you. It's fine to show all of them at once if it's a checklist you want to present, and you don't need to spend too much time discussing each item.
- **Make the font larger**. LARGER, I say! There is no such thing as a font that is too large. Some rooms are enormous, with people sitting far from the screen.
- **Don't rely on colors**. Some people see colors differently; some projectors are bad; the room will be bright. Don't rely on minor color differences to convey critical information on your slides.
- If you want to be on the safe side, put **dark text on a light background**. A dark background looks much cooler, but if you have a poorly illuminated room with a lousy projector, your slides might be unreadable.
- **Important things go on top**. Don't put important information at the bottom of the slides. If you're presenting in a small room and the canvas for the projector is hanging low, people in the front rows will block the view for people in the back. So, people in the back rows often won't see the bottom of your slides.
- Slides should be in **"16:9"** format (in Keynote, it's called "Wide 16:9"). Most projectors use that format. Even if you somehow end up with a 4:3 aspect ratio projector, the 16:9 will still look much better on a 4:3 projector than a 4:3 presentation would look on a 16:9 projector.
- Remember that "no wall of text" rule? Yeah, that applies to code as well. **Skip the unnecessary code**. No one cares about the technical details of user authentication (unless you are talking precisely about the technical details of the user authentication). Replace that code with `log_in(user)`. Everyone knows what it does.
- **Highlight the code that matters for what you're talking about**. You can dim the irrelevant code or add arrows around the code you are trying to explain.
- **Change the pace of your slides**. Just like the monotonous sentences in a book, slides that look the same are boring. Spice things up! Add a full-size picture. Or a slide with one large keyword. Invert colors. Add a meme. Anything but yet another slide with a title and a bullet list.
- **How many memes are too many?** It depends on how serious you want your talk to be. A funny picture or tweet is often a great way to keep people interested and give them a brief respite after a few particularly tech-heavy slides. A talk full of memes can be a great way to entertain your audience, as long as they remember something else from your talk beyond the fact that it was funny. Also, make sure your memes are actually funny. If your slide deck is full of old, boring memes that won't make anyone laugh, it will be extremely stressful for you. And unlike telling a bad joke where you can quickly move on if no one laughed, you can't adjust your slide deck mid-talk if the crowd is tough. On the other hand, some people embrace silliness as a core part of their performance, and it works very well for them [^6].
- **If you're using GIFs, stop them after the animation** (you can do that in Keynote; I'm not sure about other presentation tools) or switch to the next slide if you plan to talk for a while. It's very distracting for the audience if you have a giant looped animation behind you.
- **Don't overuse the animations**. Cool, subtle animations are great. I love the "magic move" transition in Keynote, and I always use it to show changes to the code. Arrows moving around as you explain different parts of the code will guide viewers' attention. But flying around and rotating slides throughout your entire presentation are annoying and distracting.
- Think about the **accessibility** of your slides. If you use flashing GIFs or other elements that might induce dizziness or seizures, warn your audience beforehand.
- **Attribute images correctly**. I usually try to keep a small link to the source of the image in the corner, even if the image is in the public domain [^7].
- **Don't use copyrighted images** (unless you have a license). It will cause problems not only for you but also for the conference organizers if they host your slides on their website. If you're unsure whether an image is copyrighted, assume it is.
- If you have a **repository with code examples** used in the presentation, tell users in advance that you will share the link at the end. It will save them the hassle of taking pictures of your slides.
- Slide templates often come with a lot of different slide types (e.g., "Title," "Title + Photo," "2 columns," etc.). It might be tempting to use a bunch of those, but I suggest you **stick with 2-3 slide types** and add new elements like more columns of text when needed. This will make it a lot easier when you later want to adjust the design of your slides (for example, because you decided to add a Twitter handle to each slide, and now you need to add it to the template for every slide type you used).
- **Display a slide with important information while you answer questions**. I usually put a link to the code repository, my Twitter handle, and my website's URL on the slide that says "Questions?" and keep it visible throughout the whole Q&A session. This will give people plenty of time to write them down.
- **Take advantage of the speaker notes**. Obviously, you can write what you want to talk about, but you can do more! You can add notes for yourself, such as reminding yourself to check the time. Or to take a longer break because you just switched to a slide with a lot of code, so people need time to read it before you start talking.
- Introduce yourself, but **don't overdo the "About me" slide**. The main reason to talk about yourself is to establish credibility and explain why you are the right person to deliver this talk (e.g., *I work for the ZZZ company where we used library YYY, and now I will share fascinating insights about it*). Sometimes you might be forced to do this slide to introduce the company where you work and which *generously paid for you to be here. Btw. We are hiring; here is the link...* But if what you do is not connected to the talk, this is just a waste of precious listeners' attention.
- **Include a way for people to follow up**. Add a link to your website, social media handle, or email address. This is particularly crucial for viewers watching your talk later on YouTube who wish to connect with you. One of the primary reasons for being on stage is to build your personal brand, and facilitating follow-up communication can help achieve that goal.

And maybe you want to spice things up with a live coding session?

## Live demos

Live demos are hard.

Take this section with a grain of salt - I almost never do live coding (and I have good reasons for this, as you will shortly see). But I have seen people like James Powell do absolutely stunning talks that consist only of live coding.

First of all - **do you really need a demo?** What do you want to show? How to set up a project? Everyone knows how to use `pip` to install a bunch of packages. How to run some commands? Don't waste time. Just show me the end results. Or do you want to show how you type code in your code editor? We... all can do that too, you know? Please make sure you have a good reason for a live coding session.

When talking with new speakers, they often ask about live demos. It feels like many people want to do a demo, but they are also afraid it will go wrong. And they are right! Demos go wrong!

Your internet connection will stop working in the middle of the `pip install` command. You will have to type using a huge font so people in the back rows can see what's on your screen. But this will make it harder for you to grasp what long command you're typing. You will make typos. A lot of typos. And nothing is worse than debugging your code in front of a few hundred people. Of course, everyone will try their best to help you spot the error. But do you really want to waste people's time debugging typos for 10 minutes? And have you ever tried writing code and talking at the same time? It's impossible to type and explain what you are doing. So you can either type in silence and explain before/afterward or try typing and talking simultaneously, making tons of errors.

Many of the demos I've seen were done for the sake of *having a live demo during the presentation*. The same ideas could be shown by explaining code fragments on your slides. Or a prerecorded video of the code demo. That way, you can comment on what is happening on the screen without the stress of having to type along.

If you really think a demo is the best way to present your ideas, at least **have a backup plan**. You can print the code and have it in front of you. That way, you can see what you need to type or at least have some references when you get stuck. I recently saw someone doing a live demo with an [ASUS Zenbook duo](https://www.asus.com/laptops/for-home/zenbook/zenbook-duo-14-ux482/) laptop that has a small screen right above the keyboard. It can be used to keep your notes in front of you and looks very cool.

Alternatively, have a git repository with tags or branches referencing different points in your code. If you get an error you can't solve, just check out the next version of your code and save yourself from futile debugging.

There are tools like [demo-magic](https://github.com/paxtonhare/demo-magic) that let you *fake* the live demo. You write a shell script that you can then replay, and no matter what keys you press, the pre-recorded text is printed and executed in your terminal. However, these tools have very limited usage. Not many demos consist of only typing shell commands in the terminal. Usually, you need to alternate between the code editor and the terminal. If all you want to present are the results of various shell commands, this tool might do the trick. But if you want to use it to pretend that you just flawlessly typed all the code on the first try while cracking jokes, that's just dishonest to your audience. Moreover, it sets unrealistic expectations for other speakers who might think live demos are easy.

Here are a few more closing tips for demos:

- Don't forget to **increase the font size in every terminal and code editor you use**. Ask the audience if the font is large enough so everyone can see it.
- Your cool color theme might be completely unreadable with bad lighting. Consider having a **simple, light, and easy-to-see theme** for the demo.
- Many demos never reach the end. If your demo fails because of some technical issue, don't let this stress you out for the rest of the talk. **Explain what you tried to show and move on**. Don't forget to have a backup plan like a video or finished code, as I suggested before. Your audience is used to problems with live coding. If you get over a failed demo, so will they.

## Rehearsing

Congratulations, you have prepared your presentation, completed the slide deck, and now it is time for practice. Below are some tips to help you get better:

- **Rehearse. A lot.** Even if you have a script in your speaker notes, you want to memorize it as much as possible. Otherwise, you will need to read from your laptop throughout your presentation, which looks bad.
- While rehearsing, **take note of your time at key moments** in your presentation, such as the 10th, 20th, and 25th minute of your 30-minute talk. This information will let you know if you are on track or need to speed up or slow down. You don't want to rush through the last slides because you lost track of time. Similarly, if you fall behind and need to speed up in the middle of your talk, you will know how much you need to accelerate. Perhaps you can skip a minor topic to get back on track? You don't want to fly through half of your slides only to accidentally finish too early.
- Rehearse a bit more.
- Do a test run of your presentation in front of your friends and **ask for feedback**. If you don't have friends available, consider attending a meetup and presenting your talk there.
- **Check your body language** in the mirror. Do you gesticulate so wildly that you could easily win an argument with your Italian friends? Or do you keep your hands in your pockets all the time? Try to find a balance between gesturing too much and too little. For example, I tend to wobble side-to-side when giving online talks, which looks comical. I try to fight this habit by keeping my hands firmly on the desk.
- Record yourself or ask someone for feedback to **see how you speak**. Do you, *uhmm*, use, *uhmm*, *like a* lot of, *uhmm*, filler words and, *uhmm*, *maybe* it would be better to, *uhmm*, stop doing that? Do you speak loudly and clearly enough? Or do you mumble, and not everything can be understood?
- **Focus on perfecting the first 5-10 minutes** (the introduction of the problem) **and the closing part of your talk**. These are the most critical moments. In the beginning, you need to grab your audience's attention, and how you speak at the end is how people will remember your talk. No one cares if, in the middle, you looked at your notes a bit more often.

## Day of the presentation

- **Avoid drinking too much alcohol the day before the presentation, and ensure you get enough sleep**. You will already be under enough stress, and adding a hangover and sleepless night will only make it more difficult for you.
- Try to **have a good breakfast**. As you get closer to your talk, you may become more stressed and might not feel like eating anything. For a long time, I couldn't eat anything within hours before my talk, so it was essential for me to get a good breakfast.
- **Consider what you wear**. Black clothes on a dark background might look odd in the video. Avoid wearing grey t-shirts or anything that will become a disaster when you start sweating on stage. Check out [this article](https://www.lemonlight.com/blog/what-to-wear-and-not-to-wear-during-your-production/) for more recommendations on what not to wear.
- Wear something that makes it **easy to wear the microphone**. Conferences often use a small microphone that attaches to your clothes and a transmitter that goes in your pocket. So wearing something that makes it easy to attach and adjust the microphone (a shirt) plus something with pockets is a good idea.
- **Don't drink too much water or coffee before your talk**. Use the bathroom before your presentation.
- **Be on time**. Do you want to attend another talk in a different room just before yours? You can always watch it later. You don't want to rush to your room and be late for your own presentation. I usually go to the room where I speak one talk earlier, so I can start setting up as soon as the previous speaker finishes.
- **Introduce yourself to the session chair** once the previous talk ends. They will explain everything, set up your computer, and maybe ask how you want to be announced to the audience.

### Packing checklist

Don't forget to pack the following items (if you feel that you need them):

- Your laptop (this may seem obvious, but it's a stressful day, so I'm mentioning it just in case).
- Charger (just in case, although new laptops can easily last a full day on battery).
- Presentation remote, if you use one. I absolutely love the [Logitech Spotlight](https://www.logitech.com/en-us/products/presenters/spotlight-presentation-remote.910-004654.html). It not only makes it easier to show something on the slides that will be visible in the video stream from your computer (unlike the laser pointer that only shows a red dot on the projector's canvas), but also holding it solves the problem of "what do I do with my hands as I speak?"
- Water. There will probably be some water on the stage, but just in case, it's better to have something in a bottle that you're familiar with and can easily open.
- Display adapters for your laptop. Nowadays, most conferences have all kinds of adapters available, and most projectors can be plugged directly into the HDMI input of your computer (if you have one). But if you're going to a smaller conference, can't use HDMI, or just want to be extra sure that nothing will go wrong, bring adapters.
- USB key with your presentation. Keep your slides as a PDF on a USB stick as a last resort if your laptop is lost, breaks, or simply cannot connect to the projector. You can also use other file formats, but PDF is a must, as any computer can open it, and, unlike with Keynote/Powerpoint, you don't have to worry about missing fonts on another computer. I never do this, and it will probably doom me one day, but I keep my presentation in the cloud in a format that can be opened in the browser (usually a PDF that I keep in Dropbox and can instantly share with someone).
- Stopwatch - if your presentation software doesn't have it built-in.

### Before you get on the stage

- **Remove items from your pockets and your lanyard**.
- **Silence your phone and watch**.
- **Mute notifications and turn off unnecessary apps**. Some people might tweet about your talk and include your handle - you don't want to get distracted by those notifications. Or to share with the audience that your partner loves you and wishes you all the best with your talk[^8].
- **Disable any nighttime filters**. You don't want your screen to turn increasingly yellow if you have a talk in the evening, or your computer is set to a different time zone.
- **Prepare some water**. You might think you don't need it, but it will be helpful in more ways than you could imagine. Lost your train of thought? Drink water. Feeling nervous? Slow down by taking a sip of water[^11]. Got some know-it-all show-off hogging the microphone in the Q&A session? Toss the bottle at them!

### On the stage

- Try to **connect with the audience**. Ask a question (the *easy* way) or tell a joke (the *hard* but more rewarding way). Talk about something related to the present situation ("There will be lunch after my talk, so I will try to keep it brief as you folks are probably starving"), or to other events ("I remember when I first came to XYZ conference. Wow, this conference has grown so much. How many of you are here for the first time?").
- **Don't apologize for not being an expert** on the topic. First of all, you want to build credibility, not lose it. Second, didn't you just spend weeks trying to learn all you can to make a great talk?
- **Pay attention to your pace**. When you get stressed, you might accidentally start talking too fast[^9]. Try to pay attention to how quickly you speak and slow down.
- **A monotonous voice is a boring voice**. People respond better to a person who is passionate, not to someone who sounds like their boss made them come here. If you want to see what a passionate speaker looks like, check out any of the captivating talks by Daniele Procida (like [this keynote](https://www.youtube.com/watch?v=gjutf_Af9HQ) from PyCon Portugal).
- Just like you should change the pace of your slides to keep the audience interested, you can also **vary the pace of your talk**. Ask questions ("Do you see a bug in this code?"), do a raise-a-hand exercise ("How many of you love writing tests?"), or crack a joke ("So, there was a guy who really loved tractors...").
- **Take a pause**. It will give your audience a chance to better process something crucial you just said or to prepare for something significant that you will say next.
- Using **rhetorical questions spikes interest**. Just don't overuse them.
- When speaking, **focus on individual people and alternate between the people you talk to**. For many speakers, it will feel more natural than talking to a random point in front of you (but not for everyone; some people get stressed by looking at other people). Whatever you choose, **don't stare at your computer** all the time or turn your back/side to the audience and look at the slides projected behind you. If you need to look at your speaker notes, try to have a quick glance as you switch to the next slide and then look back at the audience.
- If you have only a few people in the room, **encourage them to come and sit closer in the front rows**. You can also ask the chair of your session to do it for you. It is much more comfortable to speak to people in front of you than to a few people dispersed in the dark corners of the room.

### Q&A

"Questions and Answers," or the Q&A, can be challenging. Not because you might face difficult questions that you must answer in front of hundreds of people. That's the easy part. You can always say "I don't know".

The hard part is the whole technical aspect of Q&A. Some rooms have terrible acoustics, making it difficult to hear the question well. You might have a light shining directly in your face, making it impossible to see the person you're talking to. They may have a hard-to-understand accent, or their question may be too complex to quickly explain in a few sentences. As a result, you might have to guess what they're asking about.

So, how good are you at answering **complex questions that you only partially heard while being blindfolded?** Sounds fun, right? Why not add juggling burning chainsaws while riding a unicycle to the mix? That won't make it much harder.

Luckily, you don't have to do the Q&A session. If it stresses you out, tell your audience that you won't do the Q&A session, but you will be around to answer their questions after the talk. You don't have to make excuses for not wanting to take questions on stage. People will understand and respect that.

On the other hand, if you're giving a long workshop or if you're a more experienced speaker and you run your talk more informally, you can tell the audience to ask questions during your talk. This approach works if you're not afraid to lose your flow when interrupted or run out of time because there are too many questions.

Whichever option you choose, communicate it to your audience at the beginning of your talk.

Also, when you get a question that was asked without a microphone, please repeat it. People watching the video recording of your talk and everyone else who didn't hear the question will be grateful. It will also help you make sure you understand the question correctly.

#### Dealing with difficult questions

If you decide to have a Q&A session and you receive a difficult question, there are different ways to deal with it:

- Say, "I don't know." You're not supposed to know all the answers. It's okay to admit that you don't know something instead of trying to come up with some random answer on the spot. This is not an exam in school.
- Say, "I don't know, but I can check and get back to you - please send me an email," as an even better version of the previous answer.
- If someone is drilling too deeply into a specific subject, or the question is too specific to be interesting to most of the audience, say, "Let's take it offline. I will be happy to discuss this with you after the talk". Then move on to the next question.

Finally, there are the dreaded [I have a question, well, more of a comment; I'm actually an expert on this topic, and that's where you said something wrong](https://xkcd.com/2191/) *questions*. Often, your chairperson will help you and ask for the next one. If not, you can always acknowledge their remark and move on to the next question. No matter what happens, remember that **the audience is always on your side**. They hate those smarty-pants as much as you do. Once, I had a person who started giving me advice about some pseudocode I used to describe a concept I spoke about. By the time he moved to his second remark, I interrupted with, "Is there an actual question coming?" That cut the discussion, and the next person could ask an actual question[^10].

Your job on the stage during the Q&A is to answer questions that are useful for the entire audience, not argue with someone about minor code details. If someone blocks the microphone for too long, try saying something like "Let's discuss it after my talk," and then move on to the next question. Their questions may lead to some interesting, deep conversations, but those conversations should not happen in front of the entire audience.

### After the talk

- **Stick around** to answer some questions people didn't have a chance to ask when you were on stage. Or at least just to hear "good job!" from random strangers. That's a great feeling!
- **Ask for feedback**. It's really hard to get feedback from people beyond the typical "it was a great talk." I mean, it's great to hear that people enjoyed it, but that won't help you improve. Getting some constructive criticism from friends who attended your talk is usually easier. When I talk with them, I jump straight to "what would you improve in my talk?" Some conference organizers (although I saw that practice only for smaller conferences) ask participants to submit feedback for the speakers, which is extremely helpful.
- And most important - **enjoy the rest of the conference!** You no longer need to stress about your talk.

#### Reuse your talks

Reusing your talks should be perfectly acceptable, yet some conferences are picky and want only brand-new, never-presented-anywhere presentations.

No. People have a life too. Unless I get paid to make a presentation (and I don't), I only have time to prepare one thoroughly-researched and well-prepared talk per year. Take it or leave it.

But as a speaker, don't be discouraged from submitting your talk to multiple conferences. Of course, when asked, disclose that it was already presented or will be presented at other places. However, most conferences understand that you're pouring dozens of hours of your personal time into making this talk. As long as it fits the theme of the conference/track, they are fine with the fact that they are not the only ones who will have it on their YouTube channel.

### Additional reading

Here are other great blog posts that helped me write this one (in no particular order):

- Eric Snow published the [Advice For PyCon Speakers](https://ref.readthedocs.io/en/latest/advice_for_pycon_speakers/) website with tons of tips for speakers. Although it may be old, it's still as relevant today as it was in 2012. At the bottom, it includes links to advice from other prominent speakers.
- Lena Reinhard's comprehensive guide on [how to prepare and write a tech conference talk](https://wunder.schoenaberselten.com/2016/02/16/how-to-prepare-and-write-a-tech-conference-talk/), with plenty of additional links to other resources.
- [speaking.io](https://speaking.io) provides tips for public speaking from Zach Holman, who *has spoken at more technical conferences than anyone on this planet (except for the people who have spoken at more conferences than him)*.
- Hynek Schlawack's detailed walkthrough on [how he prepares his talks](https://hynek.me/articles/speaking/) is another excellent resource.
- [Tips to increase your conference talk acceptance rate](https://www.harihareswara.net/posts/2016/tips-to-increase-your-conference-talk-acceptance-rate/) is a useful blog post from Sumana Harihareswara.
- [What You Need to Know About Speaking at Conferences](https://www.ashedryden.com/blog/what-you-need-to-know-about-speaking-at-conferences) by Ashe Dryden provides practical advice for conference speakers.
- Kate Matsudaira's blog post on [public speaking at conferences](https://katemats.com/blog/public-speaking-at-a-conference).
- [Ten tips to make conference talks suck less](https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less).
- [7 best practices for giving a conference talk](https://opensource.com/article/17/9/7-best-practices-giving-conference-talk).

[^1]: And as a speaker, I also attended many more conferences than I would attend as just an attendee. So, in the long run, I probably spent much more money on flights and hotels than a regular *conference-goer*.
[^2]: This is a double-edged sword. Not everyone has the patience to give a verbal abstract of their talk 20 times per day.
[^3]: And then I end up speaking at around 5 or so (I get invited to a bunch of smaller conferences, especially the remote ones).
[^4]: Partially because I keep forgetting my glasses, and I can't read the slides from the back rows. But mostly because it's an interesting idea, even though I would never think of doing this myself.
[^5]: It doesn't mean you must use this structure in every presentation. The "introduction, main part, and summary" is a very safe way to organize your talk. I would stick with that as a beginner. But if you don't want to spoil what you will talk about and want to focus on entertaining your audience with a story, you can skip the presentation of the agenda.
[^6]: An excellent example of this is Aaron Patterson (a.k.a. [tenderlove](https://twitter.com/tenderlove)) from the Ruby on Rails community who is a frequent keynote speaker at RailsConf conferences (like in [this one](https://www.youtube.com/watch?v=qqTFm2ZtRHg)). He has this *interesting* way of giving talks that makes him look more like a struggling stand-up comedian than a core Rails contributor. He tells a lot of jokes. Not all of them are great. He laughs at his own jokes all the time. You don't even know where this is going for the first half of the talk. And suddenly, he gets to the point and introduces some interesting concepts from the latest version of Rails. He's full of this incredibly weird and positive energy that makes his talks one of the most entertaining ones I've seen. Please, never change Aaron.
[^7]: And I want to apologize to all the creators for forgetting to do this from time to time.
[^8]: Although, I think it's cute, and I don't mind.
[^9]: I'm still joking that in my "Wait, IPython can do that?!" talk, I was speaking so fast that it's the only talk on YouTube where people need to use the 0.75x speed button.
[^10]: I actually knew that person, and I'm sure they didn't do that out of malice. They simply weren't aware that those comments, while fine during a more informal meetup, have no place during the large conference. But even unintentionally, those problematic questions will happen.
[^11]: ![](https://c.tenor.com/b47bledjQi0AAAAC/keneth-parcell-nervous.gif)
