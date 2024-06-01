---
title: I've Built My First Successful Side Project and I Hate It
description: 
tags: ['Business']
date: 2025-05-14
---

In 2020 I've built my first side project. I've *scratched my own itch*, then I started selling it and since then it earned me over 14,000$. But a few months after releasing it, I was so tired of the maintenance that I wanted to shut it down. Here is a story about my short entrepreneurial adventure.

{% postImage "gumroad_dashboard.jpg", "Gumroad dashboard with the earnings from my project", "", "Gumroad dashboard with the earnings from my project" %}

In the second part of 2020 I had some spare time. I just finished a project for one client and I've decided to dedicate a few months to making a [Python course](https://modernpythonprojects.com/) just to try something new. At the same, I got interested in using technical analysis to trade stocks. Following one of the "internet investment gurus" (yes, I know how bad it sounds) I started day-trading stocks following some "mystical knowledge" on how to leverage price formation called "harmonic patterns" to figure out when to buy or sell (look, I'm sorry, I also cringe when I write those words).

Like many ~~traders~~ investors, I was using [TradingView](https://www.tradingview.com/), the most popular free platform for technical analysis. Compared to the tools offered by stock brokers at that time, TradingView was far superior with its user-friendly web interface and a plethora of tools. You could even write your own scripts using an abomination of a scripting language called PineScript to implement all sorts of additional tools, graphs and metrics for your charts.

But there was no script that would draw harmonic patterns for me and after a few days of drawing them manually, I got tired and decided to automate this process. It took me a few weeks to learn the language and implement a script to automatically draw harmonic patterns on the chart. It significantly decreased the time I had to spend searching for stocks to trade. Then I made another one script - one that was drawing potential future patterns.

*Great! If those scripts work for me, maybe someone will pay money to use them too?* After all, the idea of harmonic patterns wasn't new - the first harmonic pattern called the "Gartley Pattern" was first described in 1935. There are books, articles and videos on this topic. So for sure I wasn't the only one using them.

Luckily for me, TradingView supports selling access to scripts, although in a slightly convoluted way. With the most expensive subscription, if you publish your script with "invite only" access, you can control which users can use it. So I bought that subscription and created a landing page connected to Gumroad to accept payments for monthly and yearly subscriptions.

## Promoting my scripts

Now I needed to find a way to tell TradingView's users about my scripts as those "invite only" scripts are not easy to find. TradingView doesn't promote them in the search results, instead prioritizing free to use scripts with publicly available source code. And even if someone found my scripts or my website, I needed to convince them that my scripts are useful and they do what they are supposed to do. Even though I offered a 14-day money-back guarantee on any subscription, people are reluctant of giving their credit card details on some random website.

So reusing large chunks of the code from the existing scripts, I've created a couple of free scripts. Their source code was still hidden, but people could use them for free. They offered a limited functionality - they would find only some types of the price formations, had a limit on how many past days they checked and didn't have automatic notifications when a new pattern appeared. Still, people liked them and started using them. When they asked about missing features like the notifications or detecting more patterns, I directed them to the paid scripts.

Then I published some "ideas" on TradingView - screenshots of popular stocks with drawings of the existing and potential future harmonic patterns generated with my scripts. Finally, I created a YouTube channel where I published videos showing all the features of my scripts (this was partially so I didn't have to explain over and over again how they work).

And I started waiting for the cash to roll in.

Nothing happened for the first two weeks, but then I got my first sale! Someone bought access to one of the scripts for a month. For the first time in my life I got paid for selling something on the internet. It felt amazing! Later they requested a refund because they didn't find the script useful, but to this day I clearly remember the excitement of laying on the sofa in the evening and getting an email from Gumroad saying "hey, someone just paid you $9 for the thing you've built".

Slowly, more people started using my free scripts and some also bought the paid ones. I posted a message that anyone interested can leave a comment under the paid scripts and I will give them a free 1-week trial. So people started doing that and each time I would log in to TradingView and manually grant them access a week. Some of those trials turned into paid subscriptions, but most of them didn't. Slowly but steadily the number of subscribers started increasing.

## Needy customers? Checked. Fraud? Checked. Next stop - the "burn out" station

As more people were using my scripts, I started getting more emails with questions and requests for new features. Many of the emails were requesting a free access to the scripts. Or asking very basic questions that were answered in the description of each script.

Some people wanted to buy the source code:
{% postImage "buy_the_source_code.jpg", "Email from someone who wants to buy the source code of my scripts" %}

Or get access to it for free. Of course for *personal usage*.
{% postImage "get_the_source_code.jpg", "Email from someone who wants to get a free access to the source code", "", "Sure thing random person from the Internet, I totally trust that you won't share or publish my script as your own." %}

There were people requesting me to add some very specific features because someone they watch on Youtube recommended it.
{% postImage "feature_request.jpg", "Email requesting to add some specific feature" %}

Or to add *some kind of feature* that I could not really understand, but it surely made a lot of sense in their mind:
{% postImage "weird_feature_request.jpg", "Email requesting to add some very weird feature" %}

Quite a few folks were asking for some "hot tips" on how to trade *something* or if *something* is going to go up or down (almost always this *something* was cryptocurrencies or forex).
{% postImage "asking_for_advice.jpg", "Someone asking for advice" %}

{% postImage "asking_for_advice2.jpg", "Another person asking for advice" %}

Even worse, sometimes such request was accompanied by a backstory like "I'm a poor student and want to make some money" or "I've lost some money trading, but your script looks very cool and I will use it to make money back". Why on earth would you bet your money on some random tool that you don't even understand? And then ask some random stranger on the internet for financial advice?! This was sad. I built a tool for people who knew what harmonic patterns were. People who had an investment strategy and only needed a tool to automate the drawing of the charts that they would normally draw by hand. Not some gung-ho *investors* where their entire investment strategy consists of "this random script I found 5 minutes ago says that stock X will go up, so I buy."

Sometimes I would get a job offer. Yay! For writing PineScript for living. Nay!
{% postImage "job_offer.jpg", "Job offer email", "", "Writing PineScript full time? No, thanks." %}

Or a collaboration proposal from someone who had a "large group of active traders":
{% postImage "large_group_of_followers.jpg", "Email from someone with a large group of traders", "", "Somehow all those claims from 'people with large communities' never materialized beyond testing the trial." %}

I even had a chance to practice foreign languages!
{% postImage "message_in_foreign_language.jpg", "Message in a foreign language" %}

### Disputes

Sometimes people would open a "dispute". Dispute means someone complained to PayPal that their credit card was wrongfully charged and then it's up to PayPal to decide if they are right (and refund them the full amount of money + charge me additional $20 for "chargeback fees") or if they aren't (then I get to keep the payment).

In general I try to be as accommodating to customers as possible. I'm selling software, so unlike with a physical product I have unlimited stock of my products, producing new copies costs me nothing and I don't have costs related to handling shipment or returns. So if someone writes to me and asks "hey, I forgot to cancel my subscription and it renewed for another month" or "it's past the 14-days money-back guarantee, but it turns out that the script is useful for me" I give them their money back. I want to be nice to people. I started selling those tools to help others. I don't want to charge them for a product they don't like.

But I also don't want people to open disputes. If you have too many disputes, you risk that PayPal will freeze your account.

Sometimes being nice to people is not enough. Especially if you don't get a chance to show your good will because you're sleeping. My first dispute came from a customer who sent me a message in the middle of the night asking how to cancel their subscription and half an hour later proceed to open a dispute. Even though all they had to do was to check the emails from Gumroad that contain a link to manage their subscription. And those are short emails with a few lines of text, so it's not that the link is hidden somewhere - at least other people who wanted to cancel their subscription managed to find it. Or they could at least sent me an email without opening a dispute right away.

Luckily after explaining that I can (and want to) refund his payment, but he needs to close the dispute first, he cooperated with me, so we closed the dispute and shortly afterwards he got his money back.

A few more disputes happened throughout the years, but they were less thrilling. Usually someone would open a dispute through PayPal, didn't answer my messages (or PayPal's ones) and then PayPal would dismiss that dispute as unfounded.

### And yes, fraud

Being polite and accommodating will take you a long way and make your online interactions much more enjoyable.

It also means that at some point someone will try to take advantage of you.

For me it happened three times. Most of the time someone tried to use a stollen credit card, Gumroad caught that and cancelled the payment. But the first time a fraud happened caught me a bit off guard. I don't have many screenshots left because that person has deleted their TradingView account, but here's how it went.

First Mr. Scammer (that's not his real name ;) ) asked for a free access to the script. That's not uncommon, sometimes people send me requests like that. When I kindly, but firmly denied his request, he tried to pay, but his payment got declined with a message that he should contact Gumroad. Again, this didn't sound like a red flag, more like a technical issue. Finally, I got a confirmation email that he managed to pay for the subscription.

Two months later a "sale has been disputed" email dropped. This time the dispute was initiated by Mr. Scammer. I asked him about this, because he never mentioned that he wants to cancel his subscription or get a refund. This is when things started to be very fishy:

{% postImage "scammer.jpg", "Screenshot of me asking the scammer about the dispute" %}

Weird grammar errors were not a red flag. They are common in emails I get from existing and potential customers, so it doesn't automatically mean an email is a scam. But a story that your wife controls the finances and you forgot to tell her about buying a script for TradingView, so she cancelled it? That's even weirder than the "I'm a student that can't afford $15, but I *really* need this script for my day-trading" emails that I sometimes get.

While waiting for the dispute to be resolved, Mr. Scammer tried to buy the subscription one more time, this time with less success:
{% postImage "scammer2.jpg", "Email about fraud attempt from Mr. Scammer" %}

So his "wife" is not only controlling the finances but also using stolen credit cards? I wrote him that he's permanently banned from buying any scripts from me and next time he tries, I will immediately revoke his access. That stopped any further attempts.

That was the most interesting case of fraud. Usually when people got caught, they ignored my messages instead of coming up with a creative story:
{% postImage "scammer3.jpg", "Message to another scammer that was ignored by them." %}

### Burn out

Answering emails and checking TradingView comments to give out trial access were taking a bit of time every day. Not much, but I tried to answer at least every day. It was a minor annoyance when I wasn't working full time. But when I had to do this after a full day of work and I got yet another email asking to add some *magical* method for determining take profit levels that was invented by a crypto-trading YouTuber with 50 followers[^1] I had enough.

The worst part was that after a few months, I wasn't even using those scripts anymore. I had fun day-trading when I wasn't working full-time. It was a nice break from recording videos and a motivation to learn about financial markets. But when a new contract started, I stopped day-trading due to the lack of time.

But I still had existing customers that I needed to take care of and potential new customers asking me all sorts of questions. I was growing tired of maintaining this project. Sometimes I would spend an hour answering many detailed questions from a potential customer only to never hear back from them. Other times, someone would leave a 1-star review on Gumroad because I didn't want to add some weird functionality they requested. On days like that, I wanted to close down this project, refund the money to the existing clients and delete my TradingView account.

Still, the project was bringing a bit of money every month. I didn't want to kill the goose that lays tiny golden eggs. So, I've decided that I'm going to sell my "goose".

## Selling my project. Well, trying to sell.

I looked for platforms where I could list my project for sale. I found a few and decided to submit an ad to [IndieMaker](https://indiemaker.co/) and [Transferslot](https://transferslot.com/) (which looked much more active 3 years ago). I prepared a detailed description of the project, shared details like the number of views on my YouTube channel, unique visitors to the website, number of followers and subscribers on various platforms and of course the revenue. I even shared some ideas how to move this project forward. For example, getting one of the free scripts promoted in the weekly TradingView newsletter could accelerate the sales of paid scripts.

Then I came up with a number to ask for which - following some random advice on the internet - was around 5x the revenue from the last year. And I sent my ad for publication.

IndieMaker published my ad and shortly afterwards I got an inquiry from a potential buyer. But after answering questions about the MRR growth and what assets come with the project, there was no follow up. I got more messages later, but those were just a spam ("hey, I'm interested in your project, send us a list of your inventory"). Transferslot never published my ad. I think the website was already abandoned when I submitted my ad.

If you have any experience selling projects online (and if you don't, [this article](https://training.kalzumeus.com/newsletters/archive/selling_software_business) from Patrick McKenzie is the best way to understand how it works), you're probably shaking your head by now. People buying software businesses are looking for **simple, low-risk, boring-tech projects** with a proven track record of stable or increasing profits. No one wants to buy a project written in an esoteric language (PineScript) running on a proprietary platform (TradingView) that targets a very specific niche of traders.

After a couple of weeks of no more replies, I had to make a decision what to do now. I could submit my ad to bigger platforms like Flippa and pay to have it listed there. But I felt that this project is so niche that I wouldn't find a potential buyer on other platforms either. Especially a potential buyer who knew PineScript language necessary to maintain and improve the source code of the scripts.

While waiting for more bids from potential buyers, I started thinking what can I do to ease the burden with this project. I'm an engineer goddamit! We're not meant to click buttons in the browser or send the same email over and over again!

## Turning the autopilot on

I checked my options and decided to automate the following parts of my work:

- Gumroad payment should automatically grant access on TradingView and send a "welcome" email. This would cover the most time-critical part of my work, so I didn't have to start my day from logging in to TradingView and granting access to people who bought subscriptions during the night.
- If I had a chatbot to manage subscriptions, then I could do all the manual work (removing access from people who cancelled subscriptions, extending trial access, etc.) with simple commands from my phone without having to log in to TradingView.
- And finally, I could create an online form where people could request trial access by leaving their TradingView username. This form would then trigger a Python script that would grant them 1-week access to the selected TradingView script.

I implemented all those features using [n8n](https://n8n.io/) to connect various services together - webhooks, a Telegram bot, Python scripts, sending emails, etc. I will write a separate article describing all the technical details of this setup.

Once I had the automation in place, users could request free trial access through an online form or buy a subscription on Gumroad and everything would be handled automatically. From time to time, when they cancelled their subscription, I had to send a short message to my Telegram bot to set an expiration date for their access.

The hardest part was to stop caring so much about this project and disconnect myself. I like helping people. That's why I became a programmer - so I can build things that help me or help others. When I get an email, I try to answer it as best as I can. Years of working with clients taught me to explain things in simple and easy to understand way. So I was wasting hours patiently answering questions from the potential customers only to never hear back from them again. And even though I posted a link to the form where people can request trial access, plenty of folks didn't bother reading the description and kept commenting or sending me messages requesting trials.

This had to stop. I started by checking TradingView messages only on the weekends and granting trial access in bulk. For every comment about trial access, I was replying "I gave you access now, but it would have been faster if you used the form I posted", hoping that others will see my reply and use the form next time. I still paid special attention to my existing clients and answered their emails every evening. But if someone was not an existing client, I only answered their questions during the weekends. Eventually, I stopped checking the TradingView comments or messages. If people really wanted to get a trial, they would eventually read the 2-sentence instruction, click the link and fill in the form.

Did this affect my sales significantly? I don't think so. Most of the people asking basic questions would never convert to paying customers anyway. They were window shopping. They found a script that seems to predict price changes and they wanted to know how to make money with it. And the theory how it works and why it's supposed to work? Nah, they didn't care. They had 10 more random scripts to test out today.

Did disconnecting from my project affect my sanity? Oh hell yes! The project went on an autopilot and it no longer felt like a dreaded chore when I was checking my emails or logging in to my TradingView account. It lost a lot of traction because I stopped updating it, so people think it's not useful anymore (even though it does its job as well as it did a few years ago). Its revenue declined in the past years. But I don't care. I'm happy again.

What's next for this project? I guess I will keep running it until I decide that including it in my monthly accounting is not worth the effort and then I will shut it down. But for now, those $200 that I get every month with almost no work is a nice passive income.

## Things I've learned

### Don't let a side project burn you out

The dreaded truth that most programmers learn the hard way is that releasing a product is just the beginning. Once it's out there, you have to maintain it: fix bugs, implement new features, deal with disputes or frauds and answer a LOT of emails (often from from curious window shoppers that never convert to paying customers).

This maintenance is easier if you have more products and you do support in bulk. Or if your project can replace your full-time job and maintaining it is the only thing you do during the day. But if you do this on top of your regular job, it's a terrible time sink. You need to set some boundaries. Otherwise, working on your project will take all your available time.

Working on a side project is much more fun if you're also one of its users and genuinely want to keep improving it. It's especially smooth if you love your project and a perspective of working on it full time sounds like a dream job. And accordingly - it's much harder to support a project when you moved on to doing something else and you're no longer interested in maintaining it, but you still have existing customers you need to keep happy.

If your side project is not a source of genuine joy and you have other priorities, it's important to set some boundaries. I've decided to focus my support only on the paying customers. I also stopped adding new features and told myself that unless my scripts break, I'm not touching the code. Even though I still had a list of additional improvements I wanted to make one day, I threw out that list. I already had paying customers, which means people find value in what I've built. Sure, I can add new features in an attempt to attract new customers. But that means even more coding and even more maintenance for a "chance" to attract new customers.

### Use a merchant of record

If you're planning to sell products globally, consider using a "merchant of record" like Gumroad or Paddle. This way, you won't have to figure out how much tax to charge for each country (basically you only sell to Gumroad and they resell your product to the final customer). Figuring out taxes was the last thing I wanted to do when selling my products. I went with Gumroad, that - at the time of writing - charges 10% fee, plus around 3% of PayPal/Stripe fees on top of that.

There might be cheaper options, so do your research before choosing one. Once you get some recurring payments rolling in, you can't easily move your existing customers to a different company. When the Gumroad fees increased throughout the years, I always thought that migrating to another service was too much of a hassle, so that's why I'm still using it.

### Selling stuff to customers is hard

I had this one guy, where the conversation looked like this:

> - Hey, amazing script, I rated it 5 stars! Can you implement the take profit levels for me?
> - I'm sorry but I can't. The original methodology doesn't specify exact take profit levels. It also doesn't make sense because take profits should be manually determined, for example based on support or resistance levels visible on the chart. Different people will use different take profit levels based on their risk appetite.
> - Ok but can you please put them for me. I follow this [insert some YouTube crypto day-trader] and he uses [some very specific take profit levels]. I would like the script to draw them for me.
> - Look, I can't do this. Those take profit levels are very specific to your trading system. They won't work for most of other people, but they will slow down the script for everyone.
> - Ok bro.

He cancelled his subscription a few days later and lowered his 5-star review to 2 stars.

Business-to-consumer (B2C) is difficult (not that business-to-business is much easier - it has a different set of challenges). But this doesn't mean that B2C is not worth pursuing. There are many people who did great selling to customers. One of the most well known is Pieter Levels ([@levelsio](https://twitter.com/levelsio)), creator of projects like NomadList, RemoteOK, or more recently PhotoAI. According to his Twitter profile stats, he makes an astonishing $200k of monthly recurring revenue from his projects. But B2C, while easier to get into than establishing a relationship with a company in a B2B business model, means that you will need many more customers to have the revenue levels that B2B can bring. And more customers mean more work.

### Be nice

Try to be nice to people. I mean, be nice to people in general, it will make the world a better place. But when dealing with customers, never assume they do something in bad faith. Sure, some folks will try to take advantage of you. But many "problems" are just a matter of misunderstanding. People will request a chargeback, because they think it's the only way to get a refund for a subscription they forgot about. If someone asks me for a refund, then no matter what's the reason, I give them their money back and wish them good luck with their investments. Fighting disgruntled customers over $20 is not a good way of spending my time.

If you're nice to people, they are more likely to use and recommend your products. One of the reasons why Amazon got so popular early in the days was because of their extraordinary customer support. 10 years ago, when my Kindle stopped turning on (which might or might not have been caused by accidental yet excessive force applied to it), Amazon's support said "no worries, we'll send you a new one for free". Someone would send me a free product instead of requesting to prove that it broke by itself? I was blown away by this! Especially since I was living in Poland where the strong post-communism roots mean that if a seller is not mean to you, then this already counts as them being nice.😉

So I wanted to do the same with my customers. I tried to accommodate their needs, write detailed explanations to their questions, generously issue refunds or even discounts when requested. When someone complained that something doesn't work because it didn't work the way *they* wanted, I suggested alternative scripts and offered refunds. And that paid back. I've got a lot of nice messages from the customers and even though I was getting tired of supporting my project, getting a positive feedback from time to time kept me going for those years.

---

And that's the story of my first side project. It was fun at the beginning, frustrating in the middle and now it's mostly a passive income that will dry out one day.

Was is worth the money? Not really. Spending equal amount of time working for a client would probably earn me more. But the experience I got out of it will be invaluable when I build the next one.

Stay tuned for the next article, where I describe the technical setup I used to automate most of this project.

[^1]: It was always crypto or forex crowd that was asking for weird stuff.
