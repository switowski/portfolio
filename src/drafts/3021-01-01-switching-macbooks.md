## Switching macbooks

### Using migration tool

At first I was amazed how easily everything worked when I tried to use the migration assistant. I left it over the night to copy files from my old macbook and when I opened it in the morning, it looked like I could just start working on the new one right away. Of course, after giving permissions to all the applications again (that's really a pain in the but, but ok, I understand the security concerns).

Later it turned out that simply copying everything is not that great idea. For example, if it wasn't for a colleague of mine, I wouldn't notice that Homebrew is using all the packages compiled with Intel CPU in mind and to fully utilize the new, faster architecture, I should switch homebrew to use packages made for ARM. In theory this was supposed to be simple - just rerun the installation script for Homebrew (this will install Homebrew in a different folder) and then make a dump of old packages, try to install their silicone-supporting versions and for those that don't have a silicone version, use the intel one (https://blog.smittytone.net/2021/02/07/how-to-migrate-to-native-homebrew-on-an-m1-mac/).

I tried to run the installation script, few seconds passed and I was done. Wow, what a fast machine, right?! Well, turns out that nothing really changed. Homebrew was again reinstalled in the old location (so `/usr/local/bin`, reserved for macbooks with Intel processor). After a short debugging session, turns out that Homebrew was using the output of `uname -m` to determine what type of CPU I have and for me it was still returning Intel. Probably one of the files that I migrated from my previous computer overwrote that setting.

That made me worried - what other "old" settings will I need to change? Sure, having the migration process run automatically for me was great, but is it really worth discovering and debugging messed up setting for the next few weeks? And I'm no very good at administrating macbooks, so I don't even know what settings to check. As much as I dreaded this option, I decided to start again from scratch.

### Reusing my old setup scripts

The first time I was setting up my macbook, I spent a lot of time trying to prepare an installation script. The idea was to automate **everything**. I would just run this one shell script and that would install and set up all the software I need to work on a new macbook.

That didn't go as planned.

First of all, some settings has changed. For example, I had a bunch of commands to replace the standard Unix tools (that are outdated on MacOS) with their up-to-date versions:

```shell
brew install findutils --with-default-names
brew install gnu-sed --with-default-names
brew install wget --with-iri
brew install vim --with-override-system-vi
```

See all those `--with...` options? I used them to tell brew that I prefer those newly installed versions over the outdated built-in tools that came with my MacOS installation. And that worked fine 4 years ago when I was setting up everything last time. But in the meantime, all those configuration options [were removed](https://discourse.brew.sh/t/why-was-with-default-names-removed/4405) and instead one should modify the $PATH to use them. So my automatic script was no longer automatic. I had to manually fix all those broken commands.

And while I was fixing them, I had a chance to review software that I installed last time only to realize that I haven't used some of those things for ages. Like the (moreutils)[https://joeyh.name/code/moreutils/] that gives you a bunch of useful utility CLI tools. Except that I completely forgot about it and I never used it. So that was no point in installing it, just to not use it again for another 4 years. The same for application installed from Apple store (using [mas](https://github.com/mas-cli/mas)). I forgot about the existence of around half of the programs installed on my old mac.

In the end, I just went through my installation scripts and copied some commands. Here is where the universal clipboard comes really handy. I had both laptops side by side and I could simply copy commands on one of them and immediately paste it in the terminal in the second one. Say what you want about macbooks (yes, they are expensive, yes apple did a terrible job with the previous line of macbooks with useless touchbars and their terrible keyboards and so on) but it's those small quality of life improvements that I really enjoy using.


### Step by step

This is my highly opinionated (especially the stuff that changes default key bindings) and very detailed checklist of stuff to do when setting up a new Macbook. It will definitely be useful to me the next time I go through this process and *maybe* it will be useful to you.

1. Install Chrome (to download stuff)
1. Install homebrew
1. Install iterm
1. Clone my dotfiles folder as we will reuse some stuff from there: https://github.com/switowski/dotfiles (at this point, git should already be installed by one of the previous tools)
1. Point iterm to settings in my dotfiles folder
1. Install Karabiner (for custom key bindings and modifications, like mapping Caps Lock to act as Esc and mapping pressing both Shift keys simultaneously to act as Caps Lock).
1. Install Magnet for windows management (there are also some free alternatives, like the rectangle: https://github.com/rxhanson/Rectangle). I use the paid tool because that was the first one I found and it looked nice.
1. Install Dropbox to easily synchronize settings.
1. Install Alfred and point it to a backup folder from Dropbox to migrate all the settings and snippets. Set cmd+space as the hotkey and in the keyboard settings set spotlight shortcut to option+space.
1. Install VS Code and restore settings from GitHub.
1. Go through brew.sh from my dotfiles and install all the necessary settings.

#### Tweaks

1. Open "Keyboard settings" and move "Key Repeat" setting all the way to the right (this will make moving around the code by pressing arrows much faster) and Delay Until Repeat to the second to last "notch" from the right (we want short delay but not too short).
2. Disable some other built-in shortcuts that you will never use (who the hell thinks that I need a shortcut "Convert Text to Simplified Chinese"?!) It's better to free as much shortcuts as possible now instead of trying to figure out later why you can't assign a shortcut in VS Code or some other application.
