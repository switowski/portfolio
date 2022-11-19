---
layout: markdown
title: Colophon
permalink: /colophon/
---

# Colophon

This website was built using [11ty](https://www.11ty.dev/) and is hosted on [Netlify](https://www.netlify.com/). Code is stored in a GitHub [repository](https://github.com/switowski/portfolio).

11ty is a pretty barebones and unopinionated static site generator where you can choose your own templating language, CSS flavor, etc. I ended up choosing:

* [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework
* [Alpine.js](https://alpinejs.dev/) - a lightweight JS framework
* [Nunjucks](https://mozilla.github.io/nunjucks/) - JavaScript templating engine, very popular choice with 11ty
* [markdown-it](https://markdown-it.github.io/) - Markdown engine that you can extend with plugins (to support things like [footnotes](https://github.com/markdown-it/markdown-it-footnote), [subscript](https://github.com/markdown-it/markdown-it-sub), [superscript](https://github.com/markdown-it/markdown-it-sup), [containers](https://github.com/markdown-it/markdown-it-container), automatic [anchors](https://github.com/valeriangalliat/markdown-it-anchor) to headers, etc.)
* [PostCSS](https://postcss.org/) - for processing my CSS files (again, with plenty of plugins, I can use import statements, nested attributes, automatic prefixes and more right in my CSS files).

### Technical considerations

With Tailwind I had a choice between using only CSS classes and styling all the elements directly in the HTML (I could probably get away without writing a single CSS file) or combining the CSS files and Tailwind classes. Same with Alpine.js - I could write `onclick` events using plain JavaScript or add Alpine attributes directly in the HTML. I've decided to make a formal distinction when I use each approach:

#### Tailwind vs CSS files

I could add tailwind classes to the HTML files and completely skip writing CSS files. Or write everything in CSS files and then Tailwind is kind of useless. How about a middle-ground?

* Design elements with BEM in mind ([here](https://9elements.com/bem-cheat-sheet/) is a nice cheat-sheet I've been using). Write CSS for those elements in the CSS files. Use `.pcss` extension to indicate that they will be processed by PostCSS.
* When writing the CSS files, use `@apply` rules from Tailwind when possible. But only use generic rules! `@apply p-2` is fine, but `@apply p-[117px]` is not. Write `padding: 117px;` instead.
* Use tailwind classes directly in the HTML on those elements where it doesn't make sense to make a separate BEM class. E.g. to add a small padding to some random element, etc. There probably won't be many cases like this and that's fine.

:::callout-info
For more information about the tools I use and my work setup - check out the [how I work and what tools I use?](/about#how-i-work-and-what-tools-i-use) section of the [about](/about) page.
:::
