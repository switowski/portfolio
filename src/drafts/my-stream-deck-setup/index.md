---
title: My Stream Deck Setup
description: My setup and some tips and tricks for other MacOS users who want to make the most of their Stream Decks.
tags: ['Stream Deck', 'Tools']
date: 2024-02-22
---

Stream Deck has been on my shopping list for a very long time. First, I was waiting for Black Friday to get a good deal (and you can find some good discounts, so I suggest to wait for a sale if you can). But in the meantime I thought "do I really need Stream Deck for those few things I want to use it for?" So while waiting for a sale, I've decided to [write some macros](<link to the previous article>) and trigger them with keyboard shortcuts. That worked, but as the number of shortcuts grew larger, it was getting harder to quickly remember which shortcut triggered which macro. So finally, during Black Friday sale last year I bought the standard Stream Deck MK.2 with 15 buttons. The idea was to give it a try for a couple of days and see if I can find enough use cases to justify keeping it.

Here are some of my observations and setup that I'm currently using.

## Stream Deck works best on Windows

Windows is the first class citizen when it comes to support for additional plugins. There are some excellent plugins developed by "BarRaider" developer like the "Spotify Integration" or the "Advanced Launcher" with functionality that I wish I could use, but unfortunately they only work on Windows. That's a huge bummer, but I guess most of the Stream Deck users are video games streamers and they use Windows. For MacOS, I could write some macros and connect them to Stream Deck buttons, but it would be even better if I could achieve the same with some easy-to-set-up plugins.

And how well does the Linux application for Stream Deck work? I don't know because it doesn't exist ;) There is no official app for Linux. The best you can do is to use some 3rd party like the [streamdeck-linux-gui](https://github.com/streamdeck-linux-gui/streamdeck-linux-gui) or [write your own software from scratch](https://jridgway.medium.com/using-a-stream-deck-for-productivity-a-software-developers-solution-bf2d819bda84).

## Some tips

**"Smart profiles"** is a very useful functionality that automatically changes the active profile depending on which application is active. I'm using it to display Teams-related actions when Teams window is active. And just to have the option to go out of the smart profile and back home, I always add the "Switch Profile: Default Profile" button in the top left corner. This is useful when the Teams window is active, but I want to perform an action from a different profile.

**Separate button to play/pause Spotify and multimedia**. MacOS is stupid and the system-wide play/pause usually applies to the latest multimedia that was played. Which means that if you have a YouTube video in one of your browser tabs and you forget about it, when you press "play" expecting to start playing music through Spotify you might start playing that video instead. What's even worse - if you preview a video (by pressing space bar in Finder) and then you press the system-wide "play" button, that video magically starts playing in the loop with no way to turn this off (you hear the audio, but there is no window with the video that you can close). That's annoying, so I have two buttons - one for system wide multimedia that can control any video or audio on my computer - YouTube, other videos in the browser, local files and all the apps that can play multimedia (VLC or Spotify). And then I have another button that controls Spotify and nothing else. This setup is not perfect and sometimes I will play different thing than expected, but it makes playing specific multimedia easier.

**Embrace AppleScript** (or AutoHotkey scripts if you're on Windows). If you want to do something even slightly more advanced than starting applications, triggering keyboard shortcuts, or changing a scene in OBS, you will need to write scripts in whatever scripting language is supported on your computer and run those scripts from the Stream Deck. Stream Deck's software is extremely limited out of the box. You can install some plugins to add additional actions, but many of those plugins focus on streamers and not on a general automation of your computer. The best that Stream Deck can do is to execute "multi-command action" that runs a sequence of those basic commands. But if you want to do anything more fancy, you will need to write a script in another tool and use Stream Deck to orchestrate that tool. If you're on Mac, the easiest way to "talk to" other applications is to use AppleScript, which is a scripting language for MacOS. With the [OSA Script](https://marketplace.elgato.com/product/osa-script-be52bc46-c1ae-4e79-8706-013438724839) plugin you can run those AppleScripts directly from Stream Deck.

## Is Stream Deck good for devs with MacBooks?

Stream Deck has some great plugins for streamers - you can easily control the OBS, create giveaways on Twitch or add effects to your live streams. But for a programmer, there is not that much useful stuff out of the box. Apart from controlling the audio input and output, plugins for Teams and Zoom, the rest is kind of *meh*. To get the most out of your device, you will need to plug in external software - AppleScript, Shortcuts, Keyboard Maestro, BetterTouchTool, etc. Then you can execute external scripts and actions from Stream Deck.

The easiest way I found to integrate Stream Deck with an external tool is to assign actions from an external tool to a shortcut and have the Stream Deck execute that shortcut. For example, I can build a complex automation with BetterTouchTool that will perform multiple actions or execute AppleScript programs. Then I assign this automation to a keyboard shortcut that is so complex that there is no way some other application will reuse the same shortcut (and accidentally trigger my action) and I add a "Hotkey" action to Stream Deck that triggers this shortcut.

However, to orchestrate all those external applications or scripts, you don't specifically need the Stream Deck. There are many other devices that you can use instead. You can use a console from their competitor - Loupedeck that offers devices with varying number of additional buttons and knobs. You can buy a MIDI controller and [turn that into a Stream Deck alternative](https://medium.com/@InternetJohnny/make-your-own-elgato-stream-deck-2f211224b498). Or buy a small, numpad keyboard ([there are plenty on Amazon](https://www.amazon.com/Numeric-Keypads/b?ie=UTF8&node=2998471011)) and use an app that lets you assign actions/scripts to specific keys. I'm using the excellent and free [Karabiner elements](https://karabiner-elements.pqrs.org/) to remap keys on different keyboards and then BetterTouchTool to execute different actions when those keys are pressed. Heck, if physical buttons are not a must for you, then even an old tablet or phone can work with an app like the [Touch Portal](https://www.touch-portal.com/).

## My Stream Deck setup

Let's talk about my Stream Deck settings. Here is the setup I settled on after a few months of using it.

{% postImage "default_profile_annotated.jpg", "'Default' profile in Stream Deck's application", '', "Home screen" %}

Home screen ("Default" profile) of my device contains the most often used shortcuts together with buttons to switch to other folders/profiles:

1. Open folder with apps. It contains the most often used applications that I might want to quickly open or switch to.
2. Open folder with Shortcuts - various automations for my computer.
3. Toggle the "Search Emoji & Symbols" popup from [Raycast](https://www.raycast.com/changelog/1-29-0). This allows me to quickly search and copy or paste an emoji. I'm using Raycast's emoji picker instead of the MacOS' builtin one, because it has a much nicer interface.
4. Switch to "Teams" profile. This is useful when Stream Deck doesn't automatically switch the profile when Teams app has focus or when I switch to a different profile during the call and I want to switch back.
5. Open my most frequently used GitLab repository (it's the main repository of the project I'm currently working on). I don't feel like putting other bookmarks in the Stream Deck, but this one I open often enough that it deserves one of the 15 buttons on the home screen. It comes with the additional benefit that my work-related links use a separate browser, so clicking that button will switch to and focus on the "work browser". I use a free app called [Velja](https://sindresorhus.com/velja) to open certain links (JIRA, Confluence, specific GitLab repositories, etc.) in my "work browser" and other links in another browser.
6. "Toggle Floating Notes Window" shortcut from Raycast. This [floating note](https://x.com/raycastapp/status/1599070998321471489) stays on top of other windows and works like a sticky note. I use it when I need to quickly take a note of something and with a press of a button I can show or hide it.
7. Toggle the "Do Not Disturb" [Focus](https://support.apple.com/pl-pl/guide/mac-help/mchl613dc43f/mac) on and off. This disables all the notifications and it's useful when I'm sharing the screen or I need to focus and I want absolutely no distractions.
8. "Toggle mute" action from the [Audio Mute](https://marketplace.elgato.com/product/audio-mute-705c5433-1e05-4d8a-844f-b5914b7f642f) plugin. As the name suggests, it will mute or unmute my current audio input devices. When my microphone is muted, the icon on this button changes to a crossed microphone. It saves me from having to set up separate mute action for Teams, Zoom or any other videoconferencing app I might be using. It's a one plugin to rule all the mute buttons. The only downside is that with this "system mute" status of my microphone is not reflected in the apps. If I mute my microphone with this button, in a Teams call I still appear as "unmuted". So I have a separate button in my "Teams" profile to toggle mute in Teams app, so everyone can see that I'm muted.
9. System-wide play/pause button. It will toggle the most recently playing multimedia on my computer.
10. "Play/Pause" button from the [Spotify (macOS)](https://marketplace.elgato.com/product/spotify-macos-17f49e8b-09a0-4209-95ed-6dee2469f97b) plugin. It controls the playback for the Spotify app.
11. "Next Track" button for Spotify. It switches to the next song.

{% postImage "apps_folder_annotated.jpg", "'Apps' folder in Stream Deck's application", "", "Apps folder" %}

Pressing the "Apps" button in my "Default" profile opens a new folder (folders and profiles are two main ways to organize different screens on Stream Deck). Here are the most common applications that I use throughout the day: my email, chat aggregator, Teams, Spotify, calendar, etc. Actually each of this app *lives* on a separate desktop of my secondary screen. Pressing one of the buttons will switch the currently active window on that secondary screen. That way I can, for example, switch to my calendar and have a quick glance of my schedule **without moving my mouse from the main screen**. This is extremely convenient and I love how I can easily switch windows on my secondary screen almost without distracting myself from what I'm doing on the main screen.

This folder (and all my other folders) have the "Auto Exit" option enabled and "Exit after" set to "0s", so after pressing one of the buttons, I go back to the home screen.

{% postImage "shortcuts_folder_annotated.jpg", "'Shortcuts' folder in Stream Deck's application", "", "Shortcuts folder" %}

The second button on the home screen opens the "Shortcuts" folder. Here I keep some automations creating with the [Shortcuts](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) and other applications:

1. "Exit" action that goes back to the home screen.
2. Connect to AirPods. This is useful when I open the computer and it doesn't automatically connect to my headphones.
3. Turn on "Do Not Disturb" Focus for one hour. This is useful when I need to focus for some time and I don't want to accidentally disable the notifications for the whole day. It happened that at the end of the day I realized that I got some urgent messages and calls that I didn't notice because the DND status was turned on all the time. So I created this shortcut.
4. "Fix the microphone" shortcut. Sometimes, as I switch between devices or when Teams can't connect to the right headset at the beginning of the meeting, a wrong microphone will be selected (including some virtual devices that actually don't record any audio) and no one can hear me in a call. Instead of trying to figure out how to quickly change the current audio input device (you have to click the "Sound" button on the menu bar **while holding the Option key** to see this option), I have a shortcut that will use the [Audio Switcher](https://marketplace.elgato.com/product/audio-switcher-cf41cd3d-ef80-4122-bef2-7f4fb82fcaac) plugin to set the input to my AirPods.

{% postImage "teams_profile_annotated.jpg", "'Teams' profile in Stream Deck's application", "", "'Teams' profile" %}

The last of my screens contains the "Teams" profile. It's a "Smart profile" and it becomes active when Microsoft Teams app has focus. Here are the actions I have defined:

1. "Navigation: Switch Profile" button that switches the profile back to the default one. I use it when I want to go back to the home screen while keeping the focus in Teams app.
2. "Toggle Mute" button (the same one as on my home screen). This is useful to see if my microphone is "globally muted" (which is indicated with a crossed microphone icon) and to unmute myself. It happened in the past that I muted my microphone (globally, not in Teams), switched back to a call and I was extremely confused why no one can hear me, even though Teams said I'm not muted.
3. Various reactions that I can perform during the call.
4. Toggle the mute/unmute in the Teams application.
5. Toggle the camera on and off.
6. Raise hand.
7. Toggle the blurred background.
8. Leave the call.

### Plugins

Here are the few plugins that I'm using:

1. [Audio Mute](https://marketplace.elgato.com/product/audio-mute-705c5433-1e05-4d8a-844f-b5914b7f642f) and [Audio Switcher](https://marketplace.elgato.com/product/audio-switcher-cf41cd3d-ef80-4122-bef2-7f4fb82fcaac) , both created by Fred Emmott, for managing the audio inputs.
2. [Microsoft Teams](https://marketplace.elgato.com/product/microsoft-teams-da5e2bbc-197c-4afe-8a85-a9941bf52697) for all the Teams-related actions.
3. [Shortcuts](https://marketplace.elgato.com/product/shortcuts-a26342e4-07ac-4222-8735-b44989170aaa) for a "Launch Shortcut" action. It's finicky and sometimes it randomly doesn't work, so I try to use it as little as possible and never for critical actions that I don't know how to do manually in the middle of a video call.
4. [Spotify (macOS)](https://marketplace.elgato.com/product/spotify-macos-17f49e8b-09a0-4209-95ed-6dee2469f97b) to control Spotify app.

Unfortunately, as I wrote before, Stream Deck application for MacOS doesn't have as many useful plugins as its Windows counterpart does. But a lot of the missing features can be added with external tools.

## My impression a few months later

What's my impression after a couple of months of using Stream Deck? The more time I've spent setting up various actions, the more I had to reach out to external tools. Wanna open a predefined URL in a different browser? You can't do this, because the "Website" action always uses the default browser. Instead, you need to write a one line AppleScript (e.g. `tell application "Firefox" to open location "https://here.goes.your.url.com"`). Wanna bring a specific window to front? Nope, not without a custom script. Wanna turn on the "Do Not Disturb" mode? You guessed it - you need a script or a shortcut!

The best part of getting a Stream Deck was switching from having to remember custom keyboard shortcuts to pressing colorful buttons. Before I bought this device, [I've used keyboard shortcuts to perform different actions](<link to the previous article>). But with custom keyboard shortcuts I often had to think for a moment what was the key combination for the action I wanted to perform. I had less than a dozen shortcuts - all of them with quite intuitive mappings where the first letter of the app I wanted to start or the first letter of the action I want to perform corresponded to the shortcut. For example, `Hyper + o` would open Obsidian app and `Meh + m` would toggle microphone mute/unmute action. But still, when I was in the middle of doing something else, I had to think for a moment how to run a specific shortcut. With Stream Deck, laying literally 5 cm from my keyboard, pressing a button in a complete no-brainer activity. It's essential when I suddenly need to mute myself during a call because I need to cough. It's so much easier to mute the microphone with a physical button that is right next to me than with a keyboard shortcut.

I love the smart profiles - displaying Teams-related buttons when Teams app is active is very cool. I like the physical buttons that I can press without looking. Button in the center has a little bump that you can use to orient yourself - just like with the "F" and "J" keys on a keyboard. I even prefer to use Stream Deck for controlling the music over pressing buttons on my headphones. For the first week after I got it, almost every day I had a new idea of what can be automated with this device.

Is a device like this necessary for a developer? Well, it really shines when it comes to streaming. During the live stream you can't switch to a keyboard and start typing commands. But for me, it's a gimmick. I can live without it and only use the keyboard (which I do when traveling - I'm not carrying Stream Deck with me). But I like this gimmick and even after the "novelty factor" wore off, I rely on it for many small actions during the day.

I see that [BetterTouchTool has a support for Stream Deck](https://docs.folivora.ai/docs/1300_stream_deck.html) with additional features that I miss (mostly - having different actions performed depending if I tap a button or press it for longer). Maybe one day I will switch from using the Elgato's software completely to managing my Stream Deck with BTT.

If you're looking for some inspiration what else you can do with a Stream Deck, here are some good reddit threads:

- [If you own/want to own a Stream Deck, what do you use it for?](https://www.reddit.com/r/Twitch/comments/sok2cg/if_you_ownwant_to_own_a_stream_deck_what_do_you/)
- [Favorite Stream Deck Uses?](https://www.reddit.com/r/Twitch/comments/ue615c/favorite_stream_deck_uses/])
- [What’s some good uses for a stream deck?](https://www.reddit.com/r/elgato/comments/r3bshk/whats_some_good_uses_for_a_stream_deck/)

Last, but not least - the most important question of every hardware review out there. Can it run Doom? [Yes, it can](https://www.youtube.com/watch?v=QES0o0m--zc).

## TODO:

* replace curly quotes (‘ , ’, “, ”)with straight quotes (https://typographyforlawyers.com/straight-and-curly-quotes.html) "replace curly quotes command"
* capitalize title (https://capitalizemytitle.com/)
* update title
* update description
* update tags
* add "similar" list
* find hero image
