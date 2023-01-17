---
title: WTF Excel?!
description: For a tool that probably underlies most of the financial systems in the world, Excel has some incredibly weird limitations and quirks. Let me share a few WTFs I encountered when working with it.
tags: ['Excel', 'Software - Y U so hard?!']
date: 2023-01-26
---

Some time ago, I was working on a simple tool to export data from our internal system to Excel files and allow users to import Excel files back. Sometimes the only way to convince seasoned Excel users to use your system is to give them a tool that facilitates the transition to the new work environment. And if you've worked with Excel for 20 years, you don't hand over your precious spreadsheets without a fight. So I decided to make a tool for those users to import all their existing data into our system. Or to export that data and keep making modifications in Excel instead of using our glorious, yet *oh-so-slow-but-that's-not-our-fault-because-we-use-a-commercial-framework*, browser interface.

Our data was a nested dictionary containing all kinds of Python data structures, including lists, dictionaries, and pandas DataFrames. I came up with a plan for storing most of the data in one worksheet and separating nested dictionaries with a dot in the column name. Then I would store all the lists, DataFrames, and other collections in a separate sheet, referencing them by their worksheet name + row numbers. Anyway, that's not the point of this article. The point is - **Excel is incredibly stupid!**

## A worksheet's name can't exceed 31 characters

The first huge WTF was that a worksheet's name can't exceed 31 characters. That's it. There's no way to change that limit, not even in the newer versions. It's probably hardcoded somewhere since the early days, and no one has ever changed that for "backward compatibility" reasons.

If you've worked with Excel for a while, you have probably encountered this problem already. For me, a Mac user, it was a frustrating experience because the Numbers app doesn't have this weird limitation. When I open an Excel file using Numbers, I get no errors. Given that everything worked "on my machine", I happily deployed the tool.

Then I started receiving user complaints. People got errors when opening Excel files, and Excel tried to "recover" their files. WTF? I would have rather expected the errors to happen the other way around, with Numbers not being able to open Excel files because of some incompatibilities. But no, Numbers worked just fine, and Excel failed.

Since Excel doesn't say what's wrong, it took a good chunk of time (and a fair bit of my sanity) to figure out what was going on. Finally, I found that if the worksheet name is too long, Excel simply cuts the name after 31 characters. There was no way to overcome this limitation, so I ended up maintaining an internal mapping between "short Excel worksheet names" and our data model.

## Is 941 really 941?

Here is a pop quiz. If you see the number 941 in a cell, how do you think Excel actually stores it?

A) 941  
B) 940.99999999999989

Don't rush with your answer! Take your time to think carefully. Let me give you a hint - a screenshot of a file I received from one of the users. You can see that the field is numeric, and you can see both the value in the cell and its representation in the formula field.

{% postImage "941.jpg", "How number 941 looks like in Excel" %}

Well, you saw the title of this article, so obviously, the answer is not going to be A).

To see a number's actual representation, you have to look inside the XML files that Excel uses behind the scenes. Just rename your .xlsx file to .zip, unzip it, and you will get a folder with a bunch of files. Excel worksheets are stored as XML documents.

When I checked the file corresponding to the worksheet from the screenshot, I saw that some numbers were stored differently. Yeah, **some**! 940 was stored as 940. 942 was stored as 942. And 941 was stored either as 941 or 940.99999999999989. When I tried to reproduce this weird behavior myself and put 941 into an Excel cell, it worked just fine. I don't know how the user managed to get a different version of 941. My bet is that they used a different version of Excel than I have, and something weird happened during the conversion, or they copied that number from somewhere else. And what they copied was not a plain 941, but maybe something like "941.00" or some other format.

Even though I didn't manage to reproduce the 941 error, I've noticed some more odd representations. 0.27 was stored as 0.27. 0.28 was stored as 0.28000000000000003. 0.29 was stored as 0.28999999999999998. It seems Excel really hates the number 0.29. Oh, and did I already mention that 0.031 was stored as 3.1E-2?

Those weird representations are not visible to the user, so everything looks fine at first glance. Problems start when you try to parse that file using `openpyxl`. What do we do with the number 940.99999999999989? Do we round it? Or did the user really mean to put that specific value? Well, good luck figuring that out.

## Date vs. datetime

This is a more Python-specific problem. In Excel, you can't have just a date. It's always a datetime (date + time) object. Take a date from the built-in [datetime](https://docs.python.org/3/library/datetime.html) module, export it to an Excel file, import it back, and voilà - you get a datetime back!

## Storing numbers as text

That's another thing that's probably bread-and-butter for someone using Excel on a daily basis. Still a huge WTF for me, though. Let's say you want to store a number as text (so a string) in a cell. You can change the format of that cell to text, and ... it won't work. After importing the number back with `openpyxl`, you still end up with an integer. So can you wrap your number in quotes? Nope, that won't work either. However! You can add ' (a single quote character) at the beginning of the number, and then Excel (and `openpyxl`) treats it as text! That totally makes sense, right?

{% postImage "number.jpg", "How to store number in a text field" %}

## Conclusions

For a tool that [probably](https://starecat.com/content/wp-content/uploads/the-whole-world-financial-systems-held-by-excel.jpg) underlies most of the financial systems in the world, Excel has some incredibly weird limitations and quirks. If you also had some WTF moments working with it, let me know in the comments!
