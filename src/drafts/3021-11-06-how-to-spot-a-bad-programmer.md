---
title: How To Spot a Bad Programmer
---

I saw an [interesting discussion on reddit](https://www.reddit.com/r/learnpython/comments/qo6172/what_are_your_top_signs_of_an_inexperienced/) on how to spot an inexperienced programmer. A lot of examples were given - using too many classes, using too little classes, global variables, monolithic, coupled files, etc. Sure, those are signs of unexperienced programmer. Some are more subjective, some are less. I can easily imagine two senior developers arguing on what's the "appropriate size of a Python file".

But the top comment had very little to do with writing the code. User ManyInterests writes:

> Most people seem to be focusing on specific coding practices, but I see this as least important on my list. The true mark of experienced developers doesn’t come primarily from how they use the language, it’s how they work.

  1. Ask their coworkers for help before researching problems themselves (or don’t know how to ask properly detailed questions)
  2. Don’t know how to read a stack trace / debug an error to its root cause
  3. Do not plan/design or research the open ecosystem/best practices before beginning custom implementations
  4. Are overly concerned about aspects that are unimportant to the goal of a project (e.g. performance of a script that runs once daily)
  5. Lack of familiarity with language idioms/ecosystem. There’s an endless number of examples. This just comes with time and exposure.

This is a great comment! If I had to name one thing that tells apart a middle-level programmer from a junior is not the ability to recite the Python data model if you wake them up in the middle of the night. Nor the knowledge of all the built-in Python modules or all the existing design patterns. It's the ability to solve problems on their own. And as an extension to that - the ability to work on their own. Got an error? Well, I will at least try to search the Internet for the error message and see what pop up. I will try to implement the most up-voted tricks and see if that helps. Of course, as a junior you often might not know what those commands that other suggest do. But usually the most upvoted StackOverflow answers provide a detailed explanation why you get that error and what will happen when you run commands from this answer. Sometimes you still won't know if it's safe to run a specific command or not. That's fine - no one expects you to know everything, especially as a junior and it's fine to play it safe and ask someone more experienced than you. But at least be ready to explain what you think went wrong and what have you tried so far.

When I was starting programming I remember I hit some bug with MySQL. I wasn't a MySQL expert back then (and I'm not a MySQL expert today). Heck, I wasn't an expert at anything when I started programming. So my first reaction was to send a message to my supervisor asking for help. And in a few minutes he told me to run some command that fixed my problem. I was impressed. *"How did you know what to do?"* I asked. *"I just googled the error message and sent you the first answer from StackOverflow"* he said.

I remember this situation to this day because it was eye-opening for me. I didn't put any effort into solving my problem because I thought it's not my problem. That someone else will help me fix this. Or that the solution will be too complicated for me to implement it. So I just wasted someone else's time with this trivial - as it turned out - problem.

Bullshit. <write more here>

Computers are complex beasts. You will often hit problems that are not in your area of expertise.
That's the bad news. The good news is that probably thousands of people before you got the same problem. And they asked for help on StackOverflow, forums or in GitHub issues. All you have to do is to search for their questions and apply the fix that someone suggested. It's very easy - the most upvoted answer is usually the one that you should use. Sure, at the beginning you won't have any idea what you are doing. You might mess up something. You might break your operating system. But mistakes are part of learning. Take it from someone who ran `chown -R switowski /` by mistake 😉

What I would add from my side:

* Getting too fixated on one way of solving a specific problem and inability to take a step back

This is something that I'm still guilty of. And a hard thing to get rid of. But as I started noticing it more in other people, I've started to fighting with this in myself too. Basically sometimes we think that we know how to solve something. And we will keep digging and digging in that one specific solution even if more things keep coming that makes it more difficult to solve it. But you keep thinking "just this one last corner-case and I'm done". If you instead would take a step back and ask yourself: is there a different way I can solve this? It's very common that I will try to grind the solution by the end of a day, while sleeping on the problem would give me a much better solution next day. Beware of that narrow-minded mindset when solving problems!

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
