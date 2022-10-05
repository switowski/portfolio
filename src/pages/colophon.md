---
layout: markdown
title: Colophon
permalink: /colophon/
---

# Colophon

This website was built using [11ty](https://www.11ty.dev/) and is hosted on [Netlify](https://www.netlify.com/). Code is stored in a private [GitHub](https://github.com/) repository.

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

## Equipment

<!-- TODO: Add a picture of my desk -->

I type those words on a [Kinesis Advantage 2](https://kinesis-ergo.com/shop/advantage2/) keyboard (which is a bit pricey, but totally worth the money) plugged to a [2021 MacBook Pro 14"](https://support.apple.com/kb/SP854) (M1 with 10-core CPU and 16-core GPU, 16GB RAM, 1TB SSD). I'm using two external monitors: [Dell U3415W](https://www.dell.com/en-hr/work/shop/cty/pdp/spd/dell-u3415w-monitor) and [Asus ZenScreen MB16AMT](https://www.asus.com/Displays-Desktops/Monitors/ZenScreen/ZenScreen-Touch-MB16AMT/) (that I also use as a portable screen when I work outside of home).

I'm listening to [Spotify](https://www.spotify.com/) through [AirPods Pro](https://www.apple.com/airpods-pro/specs/). They have much worse noise cancellation than my other headphones: [Bose NC 700](https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/noise-cancelling-headphones-700.html) (that replaced my previous Bose QuietComfort 35 II when they broke), but at least I can wear them for 8 hours straight (with short breaks for charging when I'm making coffee or visiting the bathroom) without my ears boiling during the summer.

When I need to record my voice in a slightly better quality (either during a conference or when recording some online courses), I using the [Samson Q2U](http://www.samsontech.com/samson/products/microphones/usb-microphones/q2u/) microphone with some cheap boom arm and pop filter. I am a complete noob when it comes to audio recording and processing, so I also bought [Presonus AudioBox](https://www.presonus.com/products/audiobox-usb-96) hoping it would improve the quality of my recordings, but I didn't hear any difference, so I returned it, sat down very close to the microphone and just got over the fact that, yes, my breathing will be audible in my videos.

I sit and stand in front of my custom-made standing desk. I wanted an L-shaped desk, but the selection of those desks in Poland was rather poor, so I bought some cheap, refurbished standing-desk legs and ordered a desktop in a nearby furniture shop that would fit ideally in the corner of my room. When I stand, I stand on some no-name rubber standing mat or try to force myself to walk on the [Xiaomi WalkingPad R1 pro](https://www.walkingpad.com/products/walkingpad-r1-pro). When I sit, I sit on the IKEA's [Markus](https://www.ikea.com/us/en/p/markus-office-chair-vissle-dark-gray-90289172/) that has been with me for over 7 years.

## Music

When I need to focus, I either play some white-noise style sounds (from [mynoise](https://mynoise.net/) app or [Binaural Beats: Focus](https://open.spotify.com/playlist/37i9dQZF1DX7EF8wVxBVhG) Spotify playlist) or music without lyrics like [Eric Ekholm](https://open.spotify.com/artist/2ILC8RBzrhyAE3MPfBe9sQ), [Daniel Deluxe](https://open.spotify.com/artist/0OTY72l7CC7ynKzp6N2o5b), [Zweihänder](https://open.spotify.com/artist/5TAKKdC7OQSTfKkKlcs6Q4) or Mick Gordon's soundtracks from games like Doom or Wolfenstein (I've put together a small [playlist](https://open.spotify.com/playlist/0fOs0OOtcR1ExIzHe3os2P?si=81f946f59a6440ce)).

When I don't need to focus too much or need a change of pace, my go-to bands are usually [In Flames](https://open.spotify.com/artist/57ylwQTnFnIhJh4nu4rxCs), [Dark Tranquillity](https://open.spotify.com/artist/5EHvXKnNz78jkAVgTQLQ5O), [AC/DC](https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un) and other rock/metal bands.

I don't have a favorite band and my current listening habits constantly change. Some time ago I conducted an experiment where I was creating a new, throw-away Spotify account every 2-3 months (I bought a bunch of electronics from a local store and they gave me a bunch of coupons valid only for new accounts). I was positively surprised how many interesting new artists I discovered that way! I wish there was a way to have a secondary, resettable account on Spotify that would not have the burden of poor music choices I made in high school.

#### To be continued...
