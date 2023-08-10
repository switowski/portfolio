---
title: Dear Conference Organizer
description: Things I loved, things I hated and things that could be improved at the conferences I've been to.
tags: ['Conference']
similar:
  - how-to-make-a-great-conference-talk
  - obsidian
date: 2024-09-01
---

Dear Conference Organizer,

First of all, thank you for all the hard work! Most of the Python conferences' organizers I know don't get paid for their work, yet they pour countless hours into helping people spread the knowledge and bringing the community together every year. And just like open source contributors, sometimes the only thing you get back are complains and resentment. Please don't let the few whiners bring you down. You're doing a great job and without you, Python community wouldn't be where it is.

Now, regarding how to get better...

::: callout-info

This is a collection of my notes and various observations I've gathered throughout many years of attending (mainly Python) conferences - both remotely and in-person. It can probably be more useful to people who are just starting organizing conferences or running small events and who never had a chance to visit other conferences and be exposed to different ways of doing things.

I'm speaking from a perspective of an attendee and a speaker. I'm sure an actual conference organizer can give you an even better advice, so if you need help organizing a Python conference, I suggest you reach out to the [Python Software Foundation](https://www.python.org/psf/faq/#id5), [EuroPython Society](https://www.europython-society.org/contact/) or your local PyCon organizers.

:::

## Online conferences

Ehh. I really want to like them and cheer for their organizers, but they suck. Especially in the first year of the lockdown when no one had any idea how to run conferences online. I enjoyed watching how they got better with each edition, as each conference was learning from the mistakes of their predecessors. But even today, I don't enjoy online conferences either as an attendee or a speaker. And I never heard of anyone who actually enjoys online conferences.

Here are a couple of problems I have with them.

First of all - I get close to **zero networking** out of online conferences. Maybe that's on me, because I don't like to chat with random strangers. I try to look at the chat rooms throughout the conference, but the only time I actually talk with people is when I'm answering questions regarding my presentations. So after the thrill of *hey, I can attend the conference on the other side of the world absolutely for free without leaving my office*, online conferences started to feel like a chore. I'm working in the morning, then I log in to the conference system, give my presentation, stay around to answer questions and then I'm back at work. I don't even watch any other talks because I prefer to watch them later on Youtube with a higher speed. I know some people like to work and play the talks in the background, but that doesn't work for me - I can't concentrate on neither the talk nor my work.

It's too easy to **inflate the number of attendees** in an effort to trick participants and speakers to attend them. I was invited to multiple "biggest Python conference in the `<insert random country/part of the world>`!" boasting more than 1000+ attendees only to see that on average each talk is watched by 30 people.

It's even worse when **it becomes a "business"** for some groups of people. I see multiple *organizations* specializing in organizing conferences that now thrive when doing it online. Some organize dozens of events per year. Often their websites are lacking as they try to fill in speakers almost until the very beginning of the event. Some offer free tickets (I guess their business model is based on sponsors?) and some can charge as much as $1000+ per ticket. They are always run by small teams to keep their costs low, so their organization is also often lacking. Once I was attending one of those conferences where the late bird tickets costed more than $1000 and as I speaker I was invited to a Slack channel to ease the communication with the organizers. Except that it took a few weeks for any of the organizers to log in to that Slack channels, so at the beginning none of the questions from the speakers were answered and some people started doubting if the conference is even happening. And yes, it was one of those "1000+ attendees" conference.

Don't get me wrong - none of the PyCon conferences are like that and I've been at many smaller, *non-official* conferences that were just a pleasure to attend. But, as an attendee, if you go to one of those *organized by the community, but no one really knows what kind of community is that* conference and your experience is bad, don't get discouraged and please try one of the official PyCons instead.

To sum up my experience with online conferences - look, I get that they have some benefits. They enable people from remote parts of the world - who would otherwise never be able to attend any of those conferences - to actually join and interact with other participants. More speakers can apply if they don't have to fly all the way. They are cheaper and often easier to organize. So it's important to keep them. Or even better, to keep the hybrid format of onsite conference that also accepts remote speakers and streams all the talks live. But they just simply don't work for me, so I'm unfortunately turning most of their invitations down.

### Live or prerecorded talks?

If you decide to go with an online conference, one of the decisions you need to make is to whether you will accept prerecorded talks or only allow live ones.

I'm a huge fan of pre-recorded talks. Unfortunately, organizers usually don't share my enthusiasm. I can't blame them. You want talks at your conference to be unique. If someone has a video with their talk, it's very tempting to send the same video to every conference. And that would be boring. So it's better to have live talks even tough that means technical problems and then some talks have to be rescheduled, starts late or have microphone/internet issues.

But hear me out - a prerecorded talk means that speaker has more room to **put something interesting in it**. Like coding demos. It's great to see some tool or library in practice through a live demo. And some speakers make amazing demos. I don't live demos as all - there are too many things that can go wrong that it's just not worth the risk. But if your talk is prerecorded, then it's a different story. You have unlimited tries at the demo. And you can actually comment what's happening as the text appears on the screen, which is much harder to do live.

<!-- screenshot from my pycon talk -->

Prerecorded talks are great not only for coding demos. With relatively small effort during the post-processing you can make them look really nice. When you mention a library, you don't have to juggle windows to show it's GitHub page. You can put a floating window with a screenshot from the GitHub repository and a link right next to the code so viewers don't loose the context of what you're talking about. Zooming in on some specific code blocks that you are currently explaining is another simple, yet efficient way to breaking the boredom of staring at a page of code for 2 minutes.

I had especially great results with prerecording short talks (5- and 10-minute long presentations). The pace was great and the flow of information was much more coherent than if I would do them live. The first time I was recording my 5-minute-long lightning talk, I had to shot it probably 10 times to fit into the strict time limit. But in the end I managed to do so without speaking too fast or jumping through my content - as often happens during live lightning talks.

If your conference consists of very short talks, consider accepting prerecorded videos. If the speaker has technical problem and their talk is 30 minutes long, wasting 5 minutes is probably fine (but very stressful). But wasting 5 minutes when the whole talk is 5 or 10 minutes long? That's game over.

And even for the standard 30- or 45-minute long talks, maybe accepting prerecorded videos could be a nice way to make your conference stand out? If you decided to allow prerecorded talks, don't just "allow" people to submit them as a backup. If I know that it's a backup and probably won't be used, I have no reason to put any extra effort in making that video nicely polished and edited. So if you want to have nice prerecorded videos, don't just allow, but encourage your speakers to submit them.

### How many chat rooms are too many?

Another decision that you need to make for your online conference is what conferencing system will you use and how to set it up.

I went through many different tools. Especially in 2020 and 2021, when everyone was trying to find the holy grail of an online conference and before everyone more or less converged on using Discord (at least until someone comes up with something better in the future).

Some tried to used Zoom for videos and various different tools like Matrix, Discord or Telegram for chats. Some used a dedicated conferencing tools like [hopin](https://hopin.com/) or [venueless](https://venueless.org/en/) that offers a clean interface for both the video stream and chats plus some additional tools like the breakout rooms to encourage networking.

As of today (2023) I think the most popular solution is to stream videos from StreamYard to YouTube and use something like Discord for interactions between participants.

But tools are only part of the solution. How should you actually set the chat rooms for your conference? Are you going to put 800 people into one chat room? Or are you going to make a separate room for each of those 100+ talks that you have? For a small conference you might get away with having just a few rooms ("announcements", "general", "social", "recruiting", etc.) to keep the discussions going instead of having multiple empty rooms.
But in general I recommend the following setup:

- Some general rooms as mentioned above ("announcements", "general", "social", "recruiting", etc.)
- Separate rooms for each track. This is where you announce what talk is now running and attendees can post questions that will be read and answered by the speaker on the stage.
- Separate rooms for each talk. This is where the speaker can post their slides and answer questions specific to their talk - even a few days later. Without a separate track, questions gets mixed and some of them are never answered.

This last piece of advice might feel like an overkill - you will need to create dozens of rooms. But if you use Discord then you can set up a forum-style channel where each talk gets its own "post" so people won't be overwhelmed with too many chats. And as a speaker, this chat room is the most important one. Whenever I was given a room for my talk, I felt the sense of ownership and I was trying really hard to answer all the questions and keep the conversations going there. Not that I don't answer questions if I'm not given my own, precious chat room. But if multiple people are discussing different talks at the same time, it's easy for some of the questions to get lost or mix with other threads.

## Things that worked well

There are a couple of things that I remember they worked very well and would like to see them more often. There are of course many more things that I liked from conferences, but the following few ideas were rather uncommon, so chances are that you might not be using them yet.

### Guides in a form of a live documentation, not emails

Having one, editable document with all the information for the speaker is awesome. You can update it when something changes and I can bookmark it for easy access when I need to check something. If you only use emails for the communication and something changes, you need to send another email. And then I end up frantically looking through my inbox to figure out where am I supposed to find my speaker link 10 minutes before my talk (that's not fun and it happens more often than I dare to admit). So kudos to that one conference that puts amazing google docs with all the important information for the speakers, volunteers and others.

### Over-communicate

This one is a bit related with the previous tip. Another nice thing I've started noticing is that some conferences send you an email with your ticket one day before the conference starts. That way, when you go to the registration desk next day, you just check the email from yesterday. You don't have to search for your ticket in an email you got half a year ago when you bought it. And sometimes, you might not even get the ticket back then, because your company bought it and only later they assigned your email to that ticket.

This small tip can be generalized as **err on the side of over-communication**. Don't send important information once. You will probably send multiple emails just before the conference, so remind people about important things multiple times. Share the link to the discord channel in each email. Share the name and password to the WIFI on multiple Discord channel. It's better to send one email too much than too little. Of course, this doesn't mean you should spam participants. It's enough to tell about "our wonderful sponsors" once.

### Mini Q&A panels

One conference had a very interesting approach to the Q&A sessions. They grouped similar talks together in sets of three that were running one after the other. And the Q&A session was happening after the last one with all three speakers involved. Each question was first answered by the "main speaker" (the person to whom that question was aimed) and then the others could also add something from their side. Combined with a good moderator, those "mini-panels" resulted in interesting discussions and were one of the best Q&A sessions I've attended.

### Gives speakers feedback

Way too few conferences do this, so please give your speakers any type of feedback that you can. Did you reject their proposal? Please at least give them opportunity to ask why. PyCon for many years included a phrase in the rejection email saying something along the lines of "if you want feedback why your talk didn't make it this year, drop us an email". If the biggest Python conference could do this (and unfortunately since 2023 they no longer seem to do so), then so can you. Also, if possible, provide a way for the audience to rate and give feedback to the speaker after their talk. That's how we can improve and deliver even better presentations next year!

## Things I wish would improve

Now, as for the things that I can live with, but I wish they were better - let's talk about the call for proposals.

### Call for proposals

Can someone please come up with one, standardized talk proposal form? It's crazy how many different combinations I have to go through if I submit my proposal to multiple conferences.

One requires to put all the information in 3 fields. Another requires to split it into 10 fields. One requires a detailed outline with timings. Another asks to be brief and fit into 1000 characters. One requires do write a "summary of your talk that fits in a tweet", another "an elevator pitch". Is the elevator pitch the size of a tweet? Is it longer? How high is the elevator? Am I starting from the ground floor? So many questions, so few answers.

Ok, I can understand that you have your own preferences for the fields you put in that form, depending on how you're planning to promote talks in social media. But please, at least explain what exactly am I supposed to put in each field. What's the difference between an "abstract", "description", and an "outline"? Which one will be displayed publicly and which is only visible to the reviewers? Should I put timings in the outline or in the "notes for reviewers"?

Once I was talking with two other speakers and as we were going through the proposal form, none of us had any clue what's the difference between the "abstract" and the "description" or what exactly we're supposed to put in each. What's worse, later I noticed that some other people were writing the same text in both. And since both fields ended up being displayed in the schedule, some talks had duplicated descriptions, which looked quite bad.

And the absolute winners in terms of bad design are those forms that have a limit of characters in some fields, but they don't show it. Sometimes they won't let you put any more text after you reach the limit. But the most evil ones let you put whatever amount of text you want, but when you submit the form, they will discard whatever exceeds the limit. If you don't notice that, you will end up with talk description that stops abruptly in the middle of a senten... I usually write longer descriptions in Grammarly and when I try to paste them into such a form, I realize they are too long and I have to spend additional time rewriting them. As for people who design forms in a way that the limit of characters only pops up when you reach it - there is a special place in hell for you. Why can't you show it since the beginning?!

So please, put a very detailed description of each field and clear validation rules. Or even better - add some examples of well written proposals that used your form.

#### Send me a copy of my proposal!

And if you're using a Google form for the call for proposal, please enable the "send me a copy of my response" option. I'm applying to multiple conferences so being able to see my answers has a two-fold advantage for me.

First of all, I can reuse my answers next time. Seriously, it's not fun having to come up with the outline from scratch for the third time.

But more importantly, I can actually see what I promised to deliver. I send you a proposal, then I don't hear from you for half a year and finally you say "yes, you're in, see you at our conference!" But I don't remember what I told you half a year ago and sometimes if you don't publish the schedule right away, I have no way to check that. What was the outline I proposed back then? Was that supposed to be half an hour or 45-minute long talk? Please, let me see my proposal somehow!

### Don't be picky

Please, don't be so picky about getting only the fresh, new talks. Unless you're a big, commercial conference that pays their speakers (which I never attended yet) or someone is a developer advocate and makes talks for living (which sounds interesting, but I'm not sure I could talk all year about my work), don't expect that people will come up with a brand new talk just for your conference. Look, we make presentations in our spare time. And we put a lot of efforts in making great talks. With work and family obligations, I don't have time to prepare more than 1 new talk per year. Sure, reusing the same talk at too many conference is boring, but at the same time, you shouldn't reject it because someone already presented it once or twice.

One conference tried to go around this problem and asked me to change the title of my talk "because participants might have seen it already". My "won't that be deceiving the participants if I change the title but not the content?" question unfortunately remained unanswered. I reluctantly agreed to swap the title with the subtitle, as my talk was already accepted and I didn't have time for major modifications. But, needless to say, I won't be attending this conference in the future.

## Things that went very bad

Finally, let's talk about things that will make me think twice before I decide to attend your conference again.

### "Chair yourself"

At least put someone to chair my session. Once I attended an online conference with no one to introduce me. And that would be "weird, but kind of acceptable" if they would stress this more before my talk. But no, there was just a countdown and then I was live. Alone in front of the camera. That caught me a bit off guard, as all the other conferences in the past had someone introducing me to the audience. It was an awfully awkward experience.

### Bad introductions

If you want to ask me some questions when you're introducing me, please let me know in advance. Look, I get stressed before my talk so in the final moments before I start talking I concentrate fully on my presentation. And most of the time, that's fine, session chair will just say a few words from my bio and finish with "the stage is yours". Yeah, *most* of the time...

Once I got a session chair who, out of blue, ended the introduction with something along the lines of "I always thought that Python was slow, but Sebastian is here to tell us that it's not true." And then silence. Was it a question? Am I supposed to start the presentation? Or are we supposed to start arguing what does it mean "slow". The speed of Python itself had nothing to do with writing more idiomatic Python code that I was going to talk about.

Please don't be that kind of person. Or at least tell me what to expect from my introduction, so I can be ready.

### "Oh, btw. you need to buy a ticket"

If you invite me to submit a proposal for your conference and you expect me to pay for the ticket as a speaker, please do me a favor and tell me about it **before** you accept my talk.

Sure, this one is on me for not reading carefully all the information on your website. Because that's exactly what people do - just like they read the Terms&Conditions cover-to-cover before using any product. A vast majority of conferences give their speakers a free ticket. I usually make sure to check the policy for speakers when it's an onsite conference (because the venue and food costs a lot of money) but, for crying out loud, this was at online conference!

## Keep up the great work

I don't want to end this article on the negative note, because after attending almost 30 conferences in my life, most of them were a really great experiences with little to no downsides. So, dear organizer, even if something goes wrong, don't worry about it, no one will remember about it half a year later. If you're thinking of organizing a conference, I believe you will do an awesome job!
