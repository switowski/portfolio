---
title: I've Built My First Successful Side Project, and I Hate It
description: How I learned the old truth that when building a software product and selling it to people, "building" is just the beginning. And often, it's the easiest part.
tags: ['Business']
date: 2024-08-19
---

In 2020, I built my first side project. I *scratched my own itch*, then started selling it, and since then, the project has earned me over $15,000. But a few months after releasing it, I was so tired of the maintenance that I wanted to shut it down. Here is a story about my short entrepreneurial adventure.

{% postImage "gumroad_dashboard.jpg", "Gumroad dashboard with the earnings from my project", "", "Gumroad dashboard with the earnings from my project" %}

In the second part of 2020, I had some spare time. I just finished a project for a client, and I've decided to dedicate a few months to making a [Python course](https://modernpythonprojects.com/) – just to try something new. At the same time, I became interested in using technical analysis to trade stocks. Following one of the "internet investment gurus" (yes, I know how bad it sounds), I started day-trading stocks following some "mystical knowledge" on how to leverage price formation called "harmonic patterns" to figure out when to buy or sell (look, I'm sorry, I also cringe when I write those words).

Like many ~~traders~~ investors, I was using [TradingView](https://www.tradingview.com/), the most popular free platform for technical analysis. Compared to the tools offered by stock brokers at that time, TradingView was far superior with its user-friendly web interface and a plethora of tools. You could even write your own scripts using an abomination of a scripting language called PineScript to implement all sorts of additional tools, graphs, and metrics for your charts.

But there was no script that would draw harmonic patterns for me, and after a few days of drawing them manually, I got tired and decided to automate the process. It took me a few weeks to learn the language and implement a script to automatically draw harmonic patterns on the chart. The script significantly decreased the time I had to spend searching for stocks to trade. Then, I wrote another script - one that was drawing potential future patterns.

*Great! If those scripts work for me, maybe someone will pay money to use them too.* After all, the idea of harmonic patterns wasn't new – the earliest harmonic pattern, the "Gartley Pattern", was first described in 1935. There are books, articles, and videos on this topic, so for sure, I wasn't the only one using them.

Luckily for me, TradingView supports selling access to scripts, although in a slightly convoluted way. With the most expensive subscription, if you publish your script with "invite only" access, you can control which users can use it. So, I bought that subscription and created a landing page connected to Gumroad to accept payments for monthly and yearly subscriptions.

## Promoting my scripts

Now, I needed to find a way to tell TradingView's users about my scripts, as those "invite only" scripts are not easy to find. TradingView doesn't promote them in the search results; instead, it prioritizes free-to-use scripts with publicly available source code. And even if someone found my scripts or my website, I needed to convince them that my scripts are useful and do what they are supposed to do. Even though I offered a 14-day money-back guarantee on any subscription, people were reluctant to give their credit card details on some random website.

So, I've created a couple of smaller scripts by reusing large chunks of code from the existing scripts. Their source code was still hidden, but people could use the scripts for free - with limited functionality:

- you could find only some types of price formations
- there was a limit to how many past days you could check
- there were no automatic notifications when a new pattern appeared

Still, people liked them and started using them. When they asked about missing features like the notifications or detecting more patterns, I directed them to the paid scripts.

Then, I published some "ideas" on TradingView - screenshots of popular stocks with drawings of the existing and potential future harmonic patterns generated with my scripts. Finally, I created a YouTube channel where I published videos showing all the features of my scripts (this was partially so I didn't have to explain over and over again how they work).

And I started waiting for the cash to roll in.

Nothing happened for the first two weeks, but then I got my first sale! Someone bought access to one of the scripts for a month. For the first time in my life, I got paid for selling something on the internet. It felt amazing! Later, they requested a refund because they didn't find the script helpful, but to this day, I clearly remember the excitement of laying on the sofa in the evening and getting an email from Gumroad saying, "Hey, someone just paid you $9 for the thing you've built".

{% postImage "first_sale.jpg", "Dashboard with earnings from the first months", "", "The first sale felt more rewarding than any other that followed, although hitting a $1,000 revenue per month was also a nice milestone." %}

Slowly, more people started using my free scripts, and some also bought the paid ones. To strike while the iron was still hot, I posted a message saying that anyone interested can leave a comment under the paid scripts, and I will give them a free 1-week trial. So people started doing that, and each time, I would log in to TradingView and manually grant them access for a week. Some of those trials turned into paid subscriptions, but most didn't. Slowly but steadily, the number of subscribers started increasing.

## Needy customers? Checked. Fraud? Checked. Next stop - the "burn out" station

As more people used my scripts, I started getting more emails with questions and requests for new features. Many of the emails contained requests for free access to the scripts. Others had very basic questions, answers to which were given in the description of each script.

Some people wanted to buy the source code:
{% postImage "buy_the_source_code.jpg", "Email from someone who wants to buy the source code of my scripts" %}

Or get access to it for free. Of course, for *personal use*.
{% postImage "get_the_source_code.jpg", "Email from someone who wants to get free access to the source code", "", "Sure thing random person from the Internet, I totally trust that you won't share or publish my script as your own." %}

There were people requesting that I add some very specific features because someone they watched on YouTube recommended it.
{% postImage "feature_request.jpg", "Email requesting to add some specific feature" %}

Or that I add *some kind of feature* that I could not really understand, but it surely made a lot of sense in *their* mind:
{% postImage "weird_feature_request.jpg", "Email requesting I add some very weird feature" %}

Quite a few folks were asking for some "hot tips" on how to trade *something* or if that *something* was going to go up or down (almost always, this *something* was cryptocurrencies or forex).
{% postImage "asking_for_advice.jpg", "Someone asking for advice" %}

{% postImage "asking_for_advice2.jpg", "Another person asking for advice" %}

Even worse, sometimes such requests were accompanied by a backstory like "I'm a poor student and want to make some money" or "I've lost some money trading, but your script looks very cool, and I will use it to make money back". Why on earth would you bet your money on some random tool you don't even understand? And then ask some random stranger on the internet for financial advice?! This was sad. I built a tool for people who knew what harmonic patterns were. People who had an investment strategy and only needed a tool to automate the drawing of the charts that they would normally draw by hand. Not some gung-ho *investors* whose entire investment strategy consists of "this random script I found five minutes ago says that stock X will go up, so I buy."

Sometimes, I would get a job offer. Yay! For writing PineScript for a living. Nay!
{% postImage "job_offer.jpg", "Job offer email", "", "Writing PineScript full time? No, thanks." %}

Or a collaboration proposal from someone who had a "large group of active traders":
{% postImage "large_group_of_followers.jpg", "Email from someone with a large group of traders", "", "Somehow all those claims from 'people with large communities' never materialized beyond testing the trial." %}

I even had a chance to practice foreign languages!
{% postImage "message_in_foreign_language.jpg", "Message in a foreign language" %}

### Disputes

Sometimes, people would open a "dispute". A dispute means someone complained to PayPal that their credit card was wrongfully charged and then it's up to PayPal to decide if they are right (and refund them the full amount of money + charge me additional $20 for "chargeback fees") or if they are not (then I get to keep the payment).

In general, I try to be as accommodating to customers as possible. I'm selling software, so unlike with a physical product, I have unlimited stock of my products; producing new copies costs me nothing, and I don't have costs related to handling shipments or returns. So if someone writes to me and asks, "Hey, I forgot to cancel my subscription, and it renewed for another month", or "It's past the 14-day money-back guarantee, but it turns out that the script is not useful for me", I give them their money back. I want to be nice to people. I started selling those tools to help others. I don't want to charge them for a product they don't like.

But I also don't want people to open disputes. If you have too many disputes, you risk that PayPal will freeze your account.

Sometimes, being nice to people is not enough. Especially if you don't get a chance to show your goodwill because you're sleeping. My first dispute came from a customer who sent me a message in the middle of the night asking how to cancel their subscription and, half an hour later, proceeded to open a dispute. Even though all they had to do was check the emails from Gumroad that contained a link to manage their subscription. And those are short emails with a few lines of text, so it's not that the link is hidden somewhere - at least other people who wanted to cancel their subscription managed to find it. Or they could at least send me an email without opening a dispute right away.

Luckily, after I explained that I could (and wanted to) refund their payment, provided they closed the dispute first, the customer cooperated with me. So we closed the dispute, and shortly afterwards, they got their money back.

A few more disputes happened throughout the years but were less thrilling. Usually, someone would open a dispute through PayPal, not answer my messages (or PayPal's), and then PayPal would dismiss that dispute as unfounded.

### And yes, fraud

Being polite and accommodating will take you a long way and make your online interactions much more enjoyable.

It also means that, at some point, someone will try to take advantage of you.

For me, it happened three times. Most of the time, someone tried using a stolen credit card, but Gumroad caught that and cancelled the payment. But the first time a fraud happened, it caught me a bit off guard. I don't have many screenshots left because that person deleted their TradingView account, but here's how it went.

First, Mr. Scammer (that's not his real name 😉) asked for free access to the script. That's not uncommon - sometimes, people send me requests like that. When I kindly but firmly denied his request, he tried to pay, but his payment was declined with a message saying he should contact Gumroad. Again, this didn't sound like a red flag, more like a technical issue. Eventually, I got a confirmation email that he had paid for the subscription.

Two months later, a "sale has been disputed" email dropped. The dispute was initiated by Mr. Scammer. I asked him why he initiated the dispute because he never mentioned wanting to cancel his subscription or getting a refund. This is when things started to be very fishy:

{% postImage "scammer.jpg", "Screenshot of me asking the scammer about the dispute" %}

Weird grammar errors were not a red flag. They are common in emails I get from existing and potential customers, so it doesn't automatically mean an email is a scam. But a story of your wife controlling the finances and you forgetting to tell her about buying a script for TradingView, which made her open a dispute? That's even weirder than the "I'm a student who can't afford $15, but I *really* need this script for my day-trading" emails I sometimes get.

While waiting for the dispute to be resolved, Mr. Scammer tried to buy the subscription one more time, this time with less success:
{% postImage "scammer2.jpg", "Email about fraud attempt from Mr. Scammer" %}

So, was his "wife" not only controlling the finances but also using stolen credit cards? I wrote him that he's permanently banned from buying any scripts from me, and the next time he tries, I will immediately revoke his access. That stopped any further attempts.

That was the most interesting case of fraud. Usually, when people got caught, they ignored my messages instead of coming up with a creative story:
{% postImage "scammer3.jpg", "Message to another scammer that was ignored by them." %}

### Burn out

Answering emails and checking TradingView comments to give out trial access took a bit of time every day. Not much, but I tried to answer at least every day. It was a minor annoyance when I wasn't working full-time. But when I had to do this after a full day of work, and I got yet another email asking to add some *magical* method for determining take profit levels that was invented by a crypto-trading YouTuber with 50 followers[^1], I had enough.

The worst part was that after a few months, I wasn't even using those scripts anymore. I had fun day trading when I wasn't working full-time. It was a nice break from recording videos and a motivation to learn about financial markets. But when a new contract started, I stopped day trading due to the lack of time.

But I still had existing customers that I needed to take care of and potential new customers asking me all sorts of questions. I was growing tired of maintaining this project. Sometimes, I would spend an hour answering many detailed questions from a potential customer only to never hear back from them. At times, someone would leave a 1-star review on Gumroad because I didn't want to add some weird functionality they requested. On days like that, I wanted to close down this project, refund the money to the existing clients, and delete my TradingView account.

Still, the project was bringing in a bit of money every month. I didn't want to kill the goose that laid tiny golden eggs. So, I've decided that I'm going to sell my "goose".

## Selling my project. Well, trying to...

I looked for platforms where I could list my project for sale. I found a few and decided to submit an ad to [IndieMaker](https://indiemaker.co/) and [Transferslot](https://transferslot.com/) (which looked much more active three years ago). I prepared a detailed description of the project and shared details like the number of views on my YouTube channel, unique visitors to the website, the number of followers and subscribers on various platforms, and, of course, the revenue. I even shared some ideas on how to move this project forward. For example, getting one of the free scripts promoted in the weekly TradingView newsletter could accelerate the sales of paid scripts.

Then, following some random advice on the internet, I came up with a number to ask for that was around 5x the revenue from last year. I then sent my ad for publication.

IndieMaker published my ad, and shortly after, I received an inquiry from a potential buyer. But after answering questions about the Monthly Recurring Revenue growth and what assets come with the project, there was no follow-up. I got more messages later, but those were just spam ("Hey, I'm interested in your project, send us a list of your inventory"). Transferslot never published my ad. I think the website was already abandoned when I submitted it.

If you have any experience selling projects online (and if you don't, [this article](https://training.kalzumeus.com/newsletters/archive/selling_software_business) from Patrick McKenzie is the best way to understand how it works), you're probably shaking your head by now. People buying software businesses look for **simple, low-risk, boring-tech projects** with a proven track record of stable or increasing profits. No one wants to buy a project written in an esoteric language (PineScript) running on a proprietary platform (TradingView) that targets a very specific niche of traders.

After a couple of weeks with no more replies, I had to decide what to do next. I could submit my ad to bigger platforms like [Flippa](https://flippa.com/) and pay to have it listed there. But I felt that this project was so niche that I wouldn't find a potential buyer on other platforms either. Especially a potential buyer who knew the PineScript language necessary to maintain and improve the scripts' source code.

While waiting for more bids from potential buyers, I started thinking about what I could do to ease the burden of this project. I'm an engineer, goddamit! We're not meant to click buttons in the browser or send the same email over and over again!

## Turning the autopilot on

I checked my options and decided to automate the following parts of my work:

- Gumroad payment should automatically grant access to the script on TradingView and send a "welcome" email. This would cover the most time-critical part of my work, so I didn't have to start my day from logging in to TradingView and granting access to people who bought subscriptions during the night.
- A chatbot to manage subscriptions so that I could do all the manual work (removing access from people who cancelled subscriptions, extending trial access, etc.) with simple commands from my phone without logging in to TradingView.
- Finally, I could create an online form where people could request trial access by leaving their TradingView username. This form would then trigger a Python script granting them one week's access to the selected TradingView script.

I implemented all those features using [n8n](https://n8n.io/) to connect various services together - webhooks, a Telegram bot, Python scripts, sending emails, etc. [Here's an article]({% postUrl "web-automation" %}) describing how I did this.

Once I had the automation in place, users could request free trial access through an online form or buy a subscription on Gumroad, and everything would be handled automatically. From time to time, when they cancelled their subscription, I had to send a short message to my Telegram bot to set an expiration date for their access.

The hardest part was to stop caring so much about this project and disconnect myself. I like helping people. That's why I became a programmer - to build things that help me or help others. When I get an email, I try to answer it as best as I can. Years of working with clients taught me to explain things in a simple and easy-to-understand way. So, I spent hours patiently answering questions from potential customers only to never hear back from them. And even though I posted a link to the form where people could request trial access, plenty of folks didn't bother reading the description and kept commenting or sending me messages requesting trials.

This had to stop. I started by checking TradingView messages only on the weekends and granting trial access in bulk. For every comment about trial access, I replied "I gave you access now, but it would have been faster if you used the form I posted", hoping that others would see my reply and use the form next time. I still paid special attention to my existing clients and answered their emails every evening. But if someone was not an existing client, I would only respond to their questions on weekends. Eventually, I stopped checking the TradingView comments or messages. If people really wanted a trial, they would eventually read the two-sentence instruction, click the link, and fill in the form.

Did this affect my sales significantly? I don't think so. Most of the people asking basic questions would never convert to paying customers anyway. They were window shopping. They found a script that seemed to predict price changes, and they wanted to know how to make money with it. And the theory behind how it works and why it's supposed to work? Nah, they didn't care. They had ten more random scripts to test out today.

Did disconnecting from my project affect my sanity? Oh, hell yes! The project went on autopilot, and it no longer felt like a dreaded chore when I was checking my emails or logging in to my TradingView account. It lost a lot of traction because I stopped updating it, so people think it's not useful anymore (even though it does its job as well as it did a few years ago). Its revenue declined in the past years. But I don't care. I'm happy again.

What's next for this project? I guess I will keep running it until I decide that including it in my monthly accounting is not worth the effort, which is when I will shut it down. But for now, the $200 I get every month with almost no work is a nice passive income.

## Things I've learned

### Don't let a side project burn you out

The dreaded truth that most programmers learn the hard way is that releasing a product is just the beginning. Once it's out there, you have to maintain it: fix bugs, implement new features, deal with disputes or frauds, and answer a LOT of emails (often from curious window shoppers who never convert to paying customers).

This maintenance is easier if you have more products and you do support in bulk. Or if your project can replace your full-time job and maintaining it is the only thing you do during the day. But if you do this on top of your regular job, it's a terrible time sink. You need to set some boundaries. Otherwise, working on your project will take all your available time.

Working on a side project is much more fun if you're also one of its users and genuinely want to keep improving it. It's incredibly smooth if you love your project, and the perspective of working on it full-time sounds like a dream job. And accordingly, it's much harder to support a project when you move on to doing something else and you're no longer interested in maintaining it, but you still have existing customers you need to keep happy.

If your side project is not a source of genuine joy and you have other priorities, it's important to set some boundaries. I've decided to focus my support only on the paying customers. I also stopped adding new features and told myself that unless my scripts break, I'm not touching the code. Even though I still had a list of additional improvements I wanted to make one day, I deleted that list. I already had paying customers, which means people find value in what I've built. Sure, I can add new features to attract new customers. But that means even more coding and maintenance for a *chance* to attract new customers.

### Use a merchant of record

If you're planning to sell products globally, consider using a "merchant of record" like Gumroad or Paddle. This way, you won't have to figure out how much tax to charge for each country (basically, you only sell to Gumroad, and they resell your product to the final customer). Figuring out taxes was the last thing I wanted to do when selling my products. I went with Gumroad, which - at the time of writing - charges a 10% fee, plus around 3% of PayPal/Stripe fees on top of that.

There might be cheaper options, so do your research before choosing one. Once you get some recurring payments rolling in, you can't easily move your existing customers to a different company. When the Gumroad fees increased throughout the years, I always thought that migrating to another service was too much of a hassle, so that's why I'm still using Gumroad.

### Selling stuff to customers is hard

I had this one guy where the conversation looked like this:

> - Hey, amazing script, I rated it 5 stars! Can you implement the take profit levels for me?
> - I'm sorry, but I can't. The original methodology doesn't specify exact take profit levels. It also doesn't make sense because take profits should be manually determined, for example, based on support or resistance levels visible on the chart. Different people will use different take profit levels based on their risk appetite.
> - Ok, but can you please put them for me? I follow this [insert some YouTube crypto day-trader], and he uses [some very specific take profit levels]. I would like the script to draw them for me.
> - Look, I can't do this. Those take profit levels are very specific to your trading system. They won't work for most other people, but they will slow down the script for everyone.
> - Ok, bro.

He cancelled his subscription a few days later and lowered his 5-star review to 2 stars.

Business-to-consumer (B2C) is difficult (not that business-to-business is much easier - it has a different set of challenges). But this doesn't mean that B2C is not worth pursuing. There are many people who did great selling to customers. One of the most well-known is Pieter Levels ([@levelsio](https://twitter.com/levelsio)), creator of projects like NomadList, RemoteOK, and, more recently, PhotoAI. According to his Twitter profile stats, he makes an astonishing $200k Monthly Recurring Revenue from his projects. But B2C, while easier to get into than establishing a relationship with a company in a B2B business model, means that you will need many more customers to have the revenue levels that B2B can bring. And more customers mean more work.

### Be nice

Try to be nice to people. I mean, being nice to people in general will make the world a better place. But when dealing with customers, never assume they do something in bad faith. Sure, some folks will try to take advantage of you. But many "problems" are just a matter of misunderstanding. People will request a chargeback because they think it's the only way to get a refund for a subscription they forgot about. If someone asks me for a refund, then no matter what's the reason, I give them their money back and wish them good luck with their investments. Fighting disgruntled customers over $20 is not a good way to spend time.

If you're nice to people, they are more likely to use and recommend your products. One of the reasons why Amazon got so popular early in the days was because of its extraordinary customer support. Ten years ago, when my Kindle stopped turning on (which might or might not have been caused by accidental yet excessive force applied to it), Amazon's support said "no worries, we'll send you a new one for free". Someone would send me a free product instead of requesting to prove that it broke by itself? This blew me away! Especially since I was living in Poland, where the strong post-communism roots mean that if a seller is not mean to you, then this already counts as them being nice.😉

So, I wanted to do the same with my customers. I tried to accommodate their needs, write detailed explanations to their questions, and generously issue refunds or even discounts when requested. When someone complained that something didn't work because it didn't work the way *they* wanted, I suggested alternative scripts and offered refunds. And that paid back. I received a lot of nice messages from customers, and even though I was getting tired of supporting my project, getting positive feedback from time to time kept me going for all those years.

---

And that's the story of my first side project. It was fun at the beginning, frustrating in the middle, and now it's mostly a passive income that will eventually dry up.

Was it worth the money? Not really. Spending equal time working for a client would probably earn me more. But the experience I gained from this side project will be invaluable when I build the next one.

If you're interested in the technical setup I used to automate most of this project, check out my [Web Automation With n8n, Telegram, Online Forms, and a Bit of Python]({% postUrl "web-automation" %}) article.

[^1]: It was always the crypto or forex crowd that was asking for weird stuff.
