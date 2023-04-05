---
title: Example post
description: I don't always do the Advent of Code challenges. But when I do, I do them in IPython. Let me show you why.
tags: [Python, IPython, "VS Code"]
date: 2022-03-31
image: false
---

::: callout-info
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lacinia orci. Proin cursus elit nisl, ac condimentum risus dignissim id. Suspendisse accumsan accumsan mi a volutpat. Phasellus gravida metus ut lacinia eleifend. Maecenas hendrerit vel lorem non fringilla. Mauris aliquet nisl a faucibus eleifend. Integer consequat purus ac convallis facilisis. Donec ornare diam sed sapien sagittis, quis lacinia risus ullamcorper. Phasellus magna turpis, gravida at dapibus sed, faucibus vitae nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel interdum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
:::

::: callout-success
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lacinia orci. Proin cursus elit nisl, ac condimentum risus dignissim id. Suspendisse accumsan accumsan mi a volutpat. Phasellus gravida metus ut lacinia eleifend. Maecenas hendrerit vel lorem non fringilla. Mauris aliquet nisl a faucibus eleifend. Integer consequat purus ac convallis facilisis. Donec ornare diam sed sapien sagittis, quis lacinia risus ullamcorper. Phasellus magna turpis, gravida at dapibus sed, faucibus vitae nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel interdum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
:::

::: callout-warning
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lacinia orci. Proin cursus elit nisl, ac condimentum risus dignissim id. Suspendisse accumsan accumsan mi a volutpat. Phasellus gravida metus ut lacinia eleifend. Maecenas hendrerit vel lorem non fringilla. Mauris aliquet nisl a faucibus eleifend. Integer consequat purus ac convallis facilisis. Donec ornare diam sed sapien sagittis, quis lacinia risus ullamcorper. Phasellus magna turpis, gravida at dapibus sed, faucibus vitae nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel interdum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
:::

Code examples

```shell
ipython -i my_commands.py
x="Hello World!"
echo $x
cat ./thisisafile.py
```

```python
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    """Creates an item."""
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item
```

HTML

```html
<img src="awesome.png" alt=""/>
```

SHELL:

```shell
ipython -i my_commands.py
```


CSS:

```css
.hero {
    display:flex;
    flex-direction: column;
    height: 100vh;
}
/* if the screen is really tall, don't fill all of it */
@media (min-height: 60em) {
    .hero {
        height: 75vh;
    }
}
```

Unknown language:

```
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item
```

Python:

```python
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None


app = FastAPI()


@app.post("/items/")
async def create_item(item: Item):
    return item
```




# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

I've decided to skip last year's [Advent of Code](https://adventofcode.com/) edition. Mostly because I didn't have time, but I also knew that I probably wouldn't finish it. I've never finished any edition. I'm not very good at code katas, and I usually try to brute force them. With AoC, that works for the first ten days, but then the challenges start to get more and more complicated, and adding the @jit decorator to [speed up my ugly Python code](/blog/easy-speedup-wins-with-numba#how-did-i-find-numba) can only get me so far.

But one thing that helped me a lot with the previous editions was to use IPython. Solving those problems incrementally is what actually makes it fun. You start by hard-coding the simple example that comes with each task. Then you try to find a solution for this small-scale problem. You try different things, you wrangle with the input data, and after each step, you see the output, so you know if you are getting closer to solving it or not. Once you manage to solve the simple case, you load the actual input data, and you run it just to find out that there were a few corner cases that you missed. It wouldn't be fun if I had to use a compiled language and write a full program to see the first results.

This year, instead of doing the "Advent of Code," I've decided to do an "Advent of IPython" on Twitter - for 25 days, [I've shared tips](https://twitter.com/SebaWitowski/status/1334427973945012224) that can help you when you're solving problems like AoC using IPython. Here is a recap of what you can do.

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

*This is italic text*

*This is italic text*

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

Another example
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed lacinia orci. Proin cursus elit nisl, ac condimentum risus dignissim id. Suspendisse accumsan accumsan mi a volutpat. Phasellus gravida metus ut lacinia eleifend. Maecenas hendrerit vel lorem non fringilla. Mauris aliquet nisl a faucibus eleifend. Integer consequat purus ac convallis facilisis. Donec ornare diam sed sapien sagittis, quis lacinia risus ullamcorper. Phasellus magna turpis, gravida at dapibus sed, faucibus vitae nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vel interdum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
>
> -- <cite>Benjamin Franklin</cite>

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  + Marker character change forces new list start:
    + Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    + Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

Different list:

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](https://example.com/)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link <https://github.com/nodeca/pica> (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

+ 19^th^
+ H~2~O

### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++

### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

*Compact style:*

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
