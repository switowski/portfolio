---
title: New Laptop New Python Setup
---


In April I switched from a 2017 Macbook Pro to the new M1 Macbook Pro. And while doing that, I've slightly changed my Python setup, so I've decided to share it since a lot of people ask me "Is your Python setup described here: https://pycon.switowski.com/02-packages/ still the best way to do this?". I never claimed it's the best way (it was the best for me at the time of building that workshop).

### asdf

No, that's not the cat walking on my keyboard. Someone seriously named a runtime manager `asdf`. But apart from a name that makes it impossible to stumble upon it when looking for package management, it's a great tool. I use it to manage node and ruby versions on my computer.

### pyenv

I've decided to stick with pyenv for managing Python versions, even though asdf supports Python versions too. It's mostly because of the muscle memory (I just automatically start typing `pyenv global` when I need to change a version) and eating my own dog food ("Why do you tell that pyenv is so great if you don't use it?!"). No matter if you choose asdf or pyenv, both will work great for managing Python versions.

### pipx

This time I installed pipx using brew instead of pip. The main problem I had when I installed pipx with pip last time was that:

a) I had some global pip packages - something that I try to avoid. Right now when I run `pip freeze`, I get an empty list.

b) More serious problem - my pipx somehow got tangled with pyenv, so it was using Python version from pyenv. I thought it was a good idea, because that way it wouldn't depend on the built-in Python version from macOS. Turns out that this worked until I changed global Python version with `pyenv global <some-other-version-than-before>`. Then all the pipx packages stopped working. I solved this problem by reinstalling a fairly up-to-date Python version (3.8) and using that globally most of the time.

Installing pipx with brew (`brew install pipx`) solved both of those problems. Pipx is now using Python 3.10 from Homebrew. If I need to change that . But that's a problem I will have in 4 years - Python 3.10 has the end-of-life date in 2026.

## virtualfish

Similar change as for pipx - instead of installing virtualfish using pip, I installed it using pipx. No more global pip packages. I'm not sure if my virtual environments survive an upgrade of virtualfish, but:

a) Last update of virtual fish was over a year ago, so I don't expect to update it any time soon.
b) I don't get attached to my virtual environments. If they stop working, I can easily create new ones. That's actually a good incentive to clean them up.

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
