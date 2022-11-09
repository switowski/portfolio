---
title: "WTF Excel?!"
description: "Summary"
tags: ['CLI']
date: 2030-01-02
---

Some time ago I was working on a simple tool to export data from our internal system to Excel files and allow users to import Excel files back. Sometimes the only way to convince some long-time Excel users to use your system is to give them a tool to ease this transition. And if you work for 20 years in Excel, you don't give up on using Excel without a fight. So we decided to make a tool that those users can use to import all their existing data into our system. Or to export that data and keep making modifications in Excel instead of using our glorious, yet oh-so-slow-but-that's-not-our-fault-because-we-use-a-commercial-framework browser interface.

Our data was basically a nested dictionary containing all kinds of Python objects including pandas DataFrames. So I came up with a schema that stores most of the data in one worksheet separating nested dictionaries with a dot in the column name and stores all the lists, DataFrames and other collections in a separate sheet, referencing them by their worksheet name + row numbers. Anyway, that's not the point of this article. The point is - Excel is incredibly stupid!

## Worksheet's name can't exceed 31 characters

First huge WTF was that worksheet's name can't exceed 31 characters. That's it. No way to change that limit, not even in the newer versions. It's probably hardcoded somewhere since the early days and for "backward compatibility" reasons no one changed that.

If you worked with Excel for a while, you probably encountered this problem already. For me it was a frustrating experience because I work on Mac and Numbers doesn't have this weird limitation. When I open Excel file using Numbers, I got no error. Everything works "on my machine", so I happily deployed the tool.
Then I started  receiving complains from the business users that they get errors when opening Excel files and that Excel tries to "recover" their files. WTF? I would rather expect the error to happen the other way around, so Excel file could not be opened in Numbers because of some incompatibilities. But no, Numbers works just fine and Excel fails.

It took a good chunk of time (and my sanity) to figure out what's going on. Since there is no way to overcome this limitation, I ended up maintaining an internal mapping between "short Excel worksheet names" and our data model.

## Is 941 really 941?

Here is a pop quiz. If you see a number 941 in a cell, how do you think Excel actually stores it?

* A) 941
* B) 940.99999999999989

Don't rush with your answer! Take your time to think carefully. I will give you a hint - this is a screenshot of a file that I received from one of the users. You can see that the field is numeric and you can see both the value in the cell and it's representation in the formula field.

{% postImage "941.jpg", "How number 941 looks like in Excel" %}

Well, you saw the title of this article, so obviously it's not going to be A).

And to see the actual representation you have to look inside the XML files that Excel uses behind the scenes. Just rename your .xlsx file to .zip, unzip it and you will get a folder with a bunch of files. Excel worksheets are stored as XML documents. When you check the file corresponding to that worksheet, you will see that excel some numbers are stored differently. Yeah, **some**! So 940 is stored as 940. 942 is stored as 942. Sometimes 941 is stored as 941 - when I tried to reproduce this weird behavior myself and put 941 into Excel cell, it worked just fine. I don't know how the user managed to get a different version of 941 than me. My bet is either in two different versions of Excel doing something funky (i.e. user had different version of Excel than I did) or they copied that number from somewhere and what they actually copied was not a plain "941", but maybe something like "941.00" or some other format.

And even though I didn't manage to reproduce the 941 error, I've noticed some more odd representations. 0.27 was stored as 0.27. 0.28 was stored as 0.28000000000000003. 0.29 was stored as 0.28999999999999998. Seems like Excel really hates number 0.29. 0.031 was stored as 3.1E-2.

Those weird representations are not visible to the user, so everything looks fine at the first glance. Problems start when you try to parse that file using openpyxl. What do we do with number 940.99999999999989? Do we round it? Or did the user really mean to put that specific value? Well, good luck figuring that out.

## Data vs datetime

This is a more Python specific problem. You can't have just a date in Excel. It's always a datetime (date + time) object. Take a date (from the built-in [datetime]<https://docs.python.org/3/library/datetime.html> module), export it to an Excel file, import it back and voilà - you get a datetime back!

## Store numbers as text

That's another thing that is probably a bread and butter for someone using Excel on a daily basis, but a huge WTF for me. Let's say you want to store a number as text (so a string) in a cell. You can change the format of that cell to text and ... it won't work. After importing this number back with openpyxl, you still end up with an integer. So maybe you can wrap your number in quotes? Nope, that won't work either. But! You can add ' (a single quote character) at the beginning of that number and then Excel (and openpyxl) will treat it as a text! That totally makes sense, right?

{% postImage "number.jpg", "How to store number in a text field" %}

## Conclusions

As for a platform that underlies [probably](https://starecat.com/content/wp-content/uploads/the-whole-world-financial-systems-held-by-excel.jpg) most of the financial system in the world, Excel has some incredibly weird limitations and quirks. If you also had some WTF moments working with it, let me know in the comments!
