# switowski.com

This is the personal website of Sebastian Witowski ([switowski.com](https://switowski.com)).

It's built using [Eleventy](https://www.11ty.dev/), [TailwindCSS](https://tailwindcss.com/), and [Alpine.js](https://alpinejs.dev/).

## About

I looked at a bunch of different blogs and 11ty starters until I came up with something I like. And by "something I like," I mean a simple bundling process. CSS is built using PostCSS (technically, the TailwindCLI with PostCSS plugins), JS is built using ESBuild, and they all take minimal configuration. If I need a more complex bundling process in the future, I will switch to something else, but for now, it's fine.

This project is a constant work in progress, there will be unused files, unfinished features, etc. Yes, I've heard about version control. But I like to keep unused files because one day I **will** need them. This is my box of spare cables.

## Thank you

A **huge** thank you to the following people for publicly sharing the source code of their websites:

* [Max Böck](https://mxb.dev/)
* [Sia Karamalegos](https://sia.codes/)
* [Zach Leatherman](https://www.zachleat.com/)

11ty starters are great, and there are so many of them that it's easy to find a setup you like. But then you're on your own. They don't show you how to organize your website as it grows. Or how do you optimize images. Or how do you store posts together with their images. Or (insert 100 other things that you will probably run into...)

On top of that, I don't build JavaScript websites on a daily basis, so I'm out of the loop on current trends, best libraries, build tool configurations, etc.

## License

This is my personal website. I've made the code public as a learning resources following the good example of people listed above (and for the reasons outlined above). You can look at how I implemented things and copy small pieces under the [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. You are not permitted to copy the whole/majority of this code.

The content of the website is © Sebastian Witowski.

----

## Local development

Start server: `npm run dev`

Start debug mode: `npm run debug`

Run production server locally: `npm run staging` or `npm run build && npx serve dist`

### Assets

Take screenshots on retina display (Macbook's screen) and cut it there as well (strangely, editing image in Preview app *seems to* lower the quality of the image and results in artifacts when taking screenshots of the terminal).

Optimizing GIFs (this is probably obsolete now since I'm converting GIFs to WebP with eleventy-img):

```bash
gifsicle -O3 --colors 256 --lossy=30 -b -i *.gif
```

### Debugging

Drop this `{{ page | log }}` on a page and it will print all page variables for that page in the terminal.

Alternatively use the `debug` filter: {{ some-variable | debug }}

## File structure

Most important folders:

```txt
.
├── src
│   ├── _assets
│   │   ├── icons - contains SVG icons that will be merged together as SVG sprite
│   │   ├── images - images for pages (they will go through asset optimization with eleventy-img and WILL change name)
│   │   ├── scripts - JS scripts
│   │   └── styles - CSS files (technically PostCSS files)
│   │       └── vendors - in theory - vendored CSS files (mostly Prism themes)
│   ├── _data - data folder (site information, talks, etc.)
│   ├── _includes - components, layouts, headers, footers, basically all nunjucks files go here
│   │   ├── components - reusable components (newsletter sign up form, post card template, etc.)
│   │   ├── layouts
│   ├── drafts - draft posts, them might never see the light of day
│   │   └── trash - posts that DEFINITELY won't see the light of day
│   ├── feed.njk - RSS feed
│   ├── feed.python.njk - RSS of only "Python" posts feed
│   ├── pages - various pages
│   ├── posts - published posts sorted into yearly buckets with images stored next to the markdown text
│   └── static - static images that will be copied with passthroughCopy (so without any modifications)
└── utils - JS utilities like filters, shortcodes, etc.
```

Everything that will end up in the `dist` folder comes from `src` folder. But there are also folders like `utils` that contain custom JS functions used during the build process (so they don't belong in the `src` folder).

### Guidelines

#### SEO

Set cover images to 1200x630px to make them looks the best on social media (Twitter, LinkedIn) ([source](https://iamturns.com/open-graph-image-size/)).

For images in posts, width of 1920px sounds like a good default. Those images will be resized anyway and that resolution is easier to remember than 1840px (that's 2*920px - which is max image width in blog post).

### Ideology

There are different ways to build a website and sometimes you have to choose between two options where both sound fine ("should I use Tailwind or write proper CSS files?"). Here I'm documenting some conventions I decided to use. I'm writing this mostly for my future self.

#### Tailwind vs CSS files

I could add tailwind classes to the HTML files and completely skip writing CSS files. Or write everything in CSS files and then Tailwind is kind of useless. How about a middle-ground?

* Design elements with BEM in mind. Write CSS for those elements in the CSS files (here with .pcss extension to indicate that they will be processed by PostCSS).
* When writing the CSS files, use @apply rules from Tailwind when possible. But only use generic rules! `@apply p-2` is fine, but `@apply p-[117px]` is not, so use `padding: 117px;` instead.
* Use tailwind classes directly in the HTML on those elements where it doesn't make sense to make a separate BEM class. E.g. to add a bit more padding to some random element, etc. There probably won't be many cases like this and that's fine.

#### AlpineJS vs vanilla JS

* Use AlpineJS for small bits of interactions. E.g. to toggle the navigation based on some state. Basically anything that is faster to write with AlpineJS and still looks readable, should use AlpineJS.
* Use JavaScript for everything else (skip using JS libraries unless I see a clear advantage in using them for my simple, almost-static website - which will probably be *never*).
