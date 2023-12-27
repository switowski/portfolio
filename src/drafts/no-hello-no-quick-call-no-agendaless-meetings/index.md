---
title: No "Hello", No "Quick Call", and no Meetings Without an Agenda
description: When working remotely, asking for help is often just a few keystrokes away. So it's tempting to "quickly" ask someone for support when you get stuck. But to get the best answer, you should remember a few "netiquette" rules.
tags: ["Productivity"]
date: 2024-02-11
---

Hi,

You probably received a link to this website because you did one of the common mistakes of working remotely:

- You started a conversation by writing "Hi", or  "Hello", or even maybe "Good morning Sebastian, I have a question". And then you waited. And waited. And waited for minutes (or hours if I was busy and you were patient) without a single word explaining what problem you were facing.
- You asked me for a "quick call" (or maybe just a "call") without explaining what you wanted to talk about in the hope that I would drop everything and jump right into helping you.
- You invited me to a meeting without a description or an agenda.

Don't worry, I'm not mad at you. Those are common mistakes that people make when working remotely. Maybe you work in an environment where productivity is low, so everyone has time to jump on a quick call or chat with you any time you ask. Or maybe you're a manager, and no one has the courage to explain that all those interruptions are bad and show you how you can make them a bit *less bad*. There is another possibility - you're lazy and selfish, so you don't care how your interruptions affect others because your questions need to be answered right now with minimal effort on your end. But I'm sure that's not the case. We are all kind, hard-working people who care deeply about their team members, and we only sometimes need a little bit of additional guidance.

Let me explain why those three remote-work mistakes are bad, how you can do things better, and why it's good **for you** if you avoid them in the future.

## No "Hello"

This one is so common that there is already a beautiful [nohello.net](https://nohello.net/en/) website explaining why it's better to ask your question directly instead of starting with "Hello" and waiting for a reply before you ask the actual question. I'm not going to repeat what the website says, but the gist is that if you write your question right away, you will get an answer much faster. There is really no need to wait for me to come and "Hi" back before you start writing what's the problem. Especially since I might get busy again and the wait time will get longer.

But there is more than that to the "Hello" problem, especially if you want to ask for technical assistance.

Let me show you different ways of asking about the same thing, sorted from the *worst* way to ask a question to the *best* one. Let's say I added a new argument to a function called `frobnicate` but forgot to update the usage of this function in all the places in the code. And now you are facing a problem caused by that, and decide to ask for help:

1. "Hi", "Hello", or even "Hi, I have a question". This is absolutely the worst way to start a conversation when you have a problem. I have no clue what you want or if it's urgent. And you're waiting until I'm around my keyboard to answer "Hi" before you get a chance to explain your issue.
2. "Hi, the `frobnicate` function doesn't work". Ok, at least we have a bit of context about the topic of our conversation. But I still have no clue what you mean by "doesn't work". Is the function throwing an error, or does it not work as expected? Is it happening on your computer, or did it stop working in production, and the company is losing millions every minute?
3. "Hi, I tried running the `frobnicate` function in the staging environment, but it's throwing `Error: missing argument 'count'`. I'm on the 'feature-123' code branch". Sweet, we're almost there. I know what function you're calling, in what context, and what error you get. But we can still do better.
    - There is another very misleading version of this question that can set us both on a path of debugging a wrong problem. Compare the previous version with the following one: "Hi, I tried running the `frobnicate` function in the staging environment, but it's throwing an error about the count argument. I'm on the 'feature-123' code branch". And now imagine that you simply misspelled the word "count" in your function, which I would immediately spot if I saw the full error. But I didn't see the whole error and instead wrongly assumed that the issue was with the `frobnicate` function itself. So we both embark on a completely needless adventure of changing random parts of the code and scratching our heads as to why nothing makes the error go away. I end up wasting hours because of a typo. That's why I strongly recommend including the stack trace in your message (and not only the last error but the full stack track because often the crucial part is somewhere in the middle). Or at least pasting the exact error message instead of trying to describe with your words what *you think* is not working.
4. "Hi, I tried running the `frobnicate` function in the staging environment, but it's throwing `Error: missing argument 'count'`. I'm on the 'feature-123' code branch. I compared this with the production environment, and there it works. I also pulled the latest changes from Steve. Here is the full stack trace: (...)". This is the perfect example of asking for help online. It not only gives the exact error message and the context in which it happens but also explains what you have tried so far, so I can avoid giving you advice like "Compare it with the production environment" or "Did you pull the latest code?" because I know you already tried that. Honestly, this is such a good and concrete ask that I will probably make the additional effort to at least think about the possible solution, even if I'm in the middle of doing something else.

## No "quick call"

This is a very similar problem to the "Hello" one, except that you now want to move from the *asynchronous* way of solving the problem to the *synchronous* one. And just like with "Hello", asking for a "quick call" has a couple of problems:

- A call is more distracting than a chat message. I can answer a simple message or two in a chat without losing the context of what I'm currently working on. But for calls, I need to focus more attention, and thus, it takes much longer to recover. You may think you took 30 seconds of my time, but it's always more.
- Sometimes, a message is enough. Some calls are basically equivalent to exchanging a few messages on the chat. Congratulations, you just saved yourself 10 seconds of writing down your question.
- Talking (or rather, *writing*) yourself through the problem can help you solve it. [The rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) really works. I've witnessed countless times when, after explaining the issue, the message was deleted or followed by "never mind" because my interlocutor figured out how to fix the problem.
- *Calls are ephemeral. Written messages are eternal*. At least until the servers go down or the company hosting your favorite chat app goes bust. But the best thing about written words is that you can always come back later and find this conversation, reminding yourself how to solve a specific problem or why you decided to fix it in a specific way[^1].

So, when I answer your "Quick call?" with "What's the problem?", that's really for your own good 😉. I want you to think through the problem and have an answer written down for the future without completely distracting me from my work.

A lot of what I wrote about the "quick call" can also apply to the *last horseman of wasted time in a remote environment* that's coming up next. However, this metaphor doesn't make that much sense if there are only three of them. Want to help me find the 4th horseman? Leave a comment about what other ways of wasting peoples' time deserve that title.

## "No agenda" meetings

Have you ever been invited to a meeting and had no clue what it was going to be about until you actually joined it? Ahh, yes, the "no agenda" meetings, or as I like to call them - the "surprise meetings". Apparently, for some people, wasting the time of one other person is not enough, so they invite multiple people "just in case they are needed". And who needs an agenda when all the talking points are safely stored in your head?

I try to apply the "no agenda, no attenda" rule (which means I try to decline meetings with no agenda). While it works for me, I don't think others may be in such a comfortable situation and have such understanding managers.

Having an agenda or at least a detailed description has so many benefits that literally nothing justifies "agenda-less" meetings:

- If I know the agenda upfront, I can prepare for the meeting. If I need to check something or refresh my memory, I can do this in advance without wasting everyone's time. If we need to make a decision, I can think about possible options and prepare a list of pros and cons if the decision is tough.
- If I can answer all the questions from the agenda with a message - congratulations, we just saved everyone's time by not having a meeting!
- An agenda gives the meeting a purpose and a checklist. Are we there to make a decision? Great, we can wrap up the meeting as soon as we make one. Are we there to understand some topics? Great, let's prepare a checklist to make sure we stay on track and not forget anything. With an agenda, it's easier to see if we have already discussed everything that was needed or if we have fulfilled the purpose of the meeting.
- I can see if I'm even needed in that meeting. Sometimes, I get invited to a meeting only because I'm leading a project or a team, but the meeting is completely non-technical and requires no input from me. Occasionally, I'm even invited to a meeting that's not even about my project. If I knew upfront what the meeting would be about, I could skip it or plan my time accordingly. For example, if I know that the meeting will most likely not require much input from my side, but I should still participate in case a technical question is raised, I will simply plan to do some code reviews with the meeting running in the background.

If you invite a technical person like me to a meeting, you most likely want one of three things:

- You want me to explain something completely new to you. If I know upfront what that is, I can send you a link to the relevant documentation. Then, usually, one of two things happens.
  - You find all your answers in the documentation, so the meeting is no longer needed.
  - You read/skim the documentation and have at least a basic understanding of what we will talk about, so the eventual meeting will be much more productive.
- You want to ask a specific technical question. It's better to ask it in writing because I can think about my answer and do the necessary research at my own pace. I won't be wasting your (and possibly other people's) time during the meeting searching for the answer or giving you a wrong one because you rushed me and I didn't have time to consider all the factors carefully.
- You want to ask me about something I did in the past. As in the previous point, I need some time to refresh my memory and prepare. Look, technology is a very fast-moving environment. That feature I built two months ago? In the meantime, I probably built three other things, and I completely forgot how the thing you want to ask me about works. Spending 10 minutes alone preparing for the meeting is an effective approach. It's better than spending 30 minutes **during** the meeting franticly jumping through the code, trying to remember what each function did, and either answering your questions in the meantime or feeling the weight of silence when you look at my screen and all the mistakes I make when typing. Not to mention that we would be wasting 30 minutes of time for multiple people.

## ~~Content~~ Context is king

When working remotely, asking for help is often just a few keystrokes away. So it's tempting to "quickly" ask someone for help when you get stuck. But unlike when you're in an office, you can't easily see if that other person is busy and whether or not you will interrupt them (unless they remember to set the "don't disturb" status in the messaging app).

But to get the best help, you must also make some effort:

- Describe the problem you're facing with as many details as possible.
- Try to explain your problem in a written form before you jump on a call.
- When planning a meeting, let everyone prepare by outlining a clear agenda for the meeting.

Trust me, this will make all your online interactions more efficient, and you will solve your problems much faster. It will also make your peers *want to help* you instead of taking a deep breath and closing the chat window each time they get a "Hi" or "Quick call?" message from you.

[^1]: Of course, if your chat application has a working "search" feature. Yes, I'm looking at you Microsoft Teams, and your atrocious search functionality that, for years, could not find a simple message in my chats.
