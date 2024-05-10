---
title: My Stream Deck Setup
description: My setup and some tips and tricks for other MacOS users who want to make the most of their Stream Decks.
tags: ['Productivity', 'Tools']
date: 2024-05-13
---

Stream Deck has been on my shopping list for a very long time. First, I was waiting for Black Friday to get a good deal (and you can find some good discounts, so I suggest waiting for a sale if you can). But in the meantime, I thought, "Do I really need Stream Deck for those few things I want to use it for?" So, I've decided to [write some macros]({% postUrl "you-dont-need-stream-deck-you-need-macros" %}) that can be triggered with keyboard shortcuts. That worked, but as the number of shortcuts grew, it became harder to quickly remember which shortcut triggered which macro. So, finally, during last year's Black Friday sale, I bought the standard Stream Deck MK.2 with 15 buttons. The idea was to give it a try for a couple of days and see if I could find enough use cases to justify keeping it.

Here are some of my observations and the setup that I'm currently using.

## Stream Deck works best on Windows

Windows is a first-class citizen in terms of supporting additional plugins. There are some excellent plugins developed by [BarRaider](https://github.com/BarRaider), like "Spotify Integration" or "Advanced Launcher". The plugins have functionality I wish I could use, but unfortunately, they only work on Windows. That's a huge bummer, but I guess most Stream Deck users are video game streamers and use Windows. For MacOS, I could write some macros and connect them to the Stream Deck buttons, but it would be even better if I could achieve the same with some easy-to-set-up plugins.

And how well does the Linux application for Stream Deck work? I don't know because it doesn't exist ;) There is no official app for Linux. The best you can do is use a third-party solution like the [streamdeck-linux-gui](https://github.com/streamdeck-linux-gui/streamdeck-linux-gui) or [write your own software from scratch](https://jridgway.medium.com/using-a-stream-deck-for-productivity-a-software-developers-solution-bf2d819bda84).

## Some tips

**"Smart profiles"** is a very useful functionality that automatically changes the active profile depending on which application is active. I use it to display Teams-related actions when the Teams window is active. And just to have the option to exit the smart profile and return home, I always add the "Switch Profile: Default Profile" button in the top left corner. This is useful when the Teams window is active, but I want to perform an action from a different profile.

**Have a separate button to play/pause Spotify and other media content**. MacOS is stupid, and the system-wide play/pause usually applies to the latest piece of media content played. Say you have a YouTube video in one of your browser tabs, and you forget about it. When you press "play" expecting to start playing music through Spotify, you might start playing that forgotten YouTube video instead. What's even worse - if you preview a video (by pressing the space bar in Finder) and then you press the system-wide "play" button, that previewed video magically starts playing in the loop with no way to turn it off (you hear the audio, but there is no window with the video that you can close). That's annoying, so I decided to have these two buttons:

- A button for a system-wide play/pause action that controls any video or audio on my computer - YouTube, other videos in the browser, local files, and all the apps that can play media content (VLC or Spotify).
- A button that specifically controls Spotify.

This setup isn't perfect and sometimes triggers different things than expected, but it makes playing specific media content easier.

**Embrace AppleScript** (or AutoHotkey scripts if you're on Windows). Suppose you want to do something even slightly more advanced than starting applications, triggering keyboard shortcuts, or changing a scene in OBS. In that case, you must write scripts in whatever scripting language is supported on your computer and run those scripts from the Stream Deck. Stream Deck's out-of-the-box software is extremely limited. You can install some plugins to add additional actions, but many of those plugins focus on streamers and not general task automation. The best Stream Deck can do is execute "multi-command action" that runs a sequence of those basic commands. But if you want to do anything more fancy, you will need to write a script in another tool and use Stream Deck to orchestrate that tool. If you're on a Mac, the easiest way to "talk to" other applications is to use AppleScript, which is a scripting language for MacOS. You can run those AppleScripts directly from Stream Deck with the [OSA Script](https://marketplace.elgato.com/product/osa-script-be52bc46-c1ae-4e79-8706-013438724839) plugin.

## Is Stream Deck good for devs with MacBooks?

Stream Deck has some great plugins for streamers - you can easily control the OBS, create giveaways on Twitch or add effects to your live streams. But for a programmer, there is only so much useful stuff out of the box. Apart from controlling the audio input and output and plugins for Teams and Zoom, the rest is kind of *meh*. To get the most out of your device, you will need to plug in external software - AppleScript, Shortcuts, Keyboard Maestro, BetterTouchTool, etc. Then, you can execute external scripts and actions from Stream Deck.

The easiest way I found to integrate Stream Deck with an external tool is to assign actions from an external tool to a shortcut and have Stream Deck execute that shortcut. For example, I can build a complex automation with BetterTouchTool that performs multiple actions or executes AppleScript programs. Then, I can assign this automation to a keyboard shortcut so complex that there is no way some other application will reuse the same shortcut (and accidentally trigger my action). Now, I only need to add a "Hotkey" action to Stream Deck that triggers that shortcut.

However, to orchestrate all those external applications or scripts, you don't specifically need the Stream Deck. There are many other devices that you can use instead. For example, you can use a console from Stream Deck's competitor - Loupedeck. They offer devices with varying numbers of additional buttons and knobs. You can buy a MIDI controller and [turn that into a Stream Deck alternative](https://medium.com/@InternetJohnny/make-your-own-elgato-stream-deck-2f211224b498). Or buy a small numpad keyboard ([there are plenty on Amazon](https://www.amazon.com/Numeric-Keypads/b?ie=UTF8&node=2998471011)) and use an app that lets you assign actions/scripts to specific keys. I'm using the excellent and free [Karabiner-Elements](https://karabiner-elements.pqrs.org/) app to remap keys on different keyboards and then BetterTouchTool to execute various actions when those keys are pressed. Heck, if physical buttons are not a must for you, then even an old tablet or phone can work with an app like the [Touch Portal](https://www.touch-portal.com/).

## My Stream Deck setup

Let's discuss my Stream Deck settings. Here is the setup I'm currently using.

{% postImage "default_profile_annotated.jpg", "'Default' profile in Stream Deck's application", '', "Home screen" %}

The Home screen ("Default" profile) of my device contains the shortcuts I use most often, together with buttons to switch to other folders/profiles:

1. Open the folder with apps - it contains the applications I use the most and might want to open or switch to quickly.
2. Open the folder with Shortcuts - it holds various automations for my computer.
3. Toggle the "Search Emoji & Symbols" popup from [Raycast](https://www.raycast.com/changelog/1-29-0) - this allows me to quickly search for and copy or paste an emoji. I'm using Raycast's emoji picker instead of the MacOS built-in one because it has a much nicer interface.
4. Switch to the "Teams" profile - this is useful when Stream Deck doesn't automatically switch the profile when the Teams app has focus or when I switch to a different profile during a call and want to switch back.
5. Open my most frequently used GitLab repository (the main repository of the project I'm currently working on) - I don't feel like putting other bookmarks in the Stream Deck, but this one I open often enough that it deserves one of the 15 buttons on the home screen. There's an additional benefit because my work-related links use a separate browser. Clicking the shortcut on Stream Deck switches to and focuses on the "work browser". I use a free app called [Velja](https://sindresorhus.com/velja) to open certain links (JIRA, Confluence, specific GitLab repositories, etc.) in my "work browser" and other links in another browser.
6. "Toggle Floating Notes Window" shortcut from Raycast - this [floating note](https://x.com/raycastapp/status/1599070998321471489) stays on top of other windows and works like a sticky note. I use it when I need to quickly take a note of something, and with a press of a button, I can show or hide it.
7. Toggle the "Do Not Disturb" [Focus](https://support.apple.com/guide/mac-help/mchl613dc43f/mac) on and off - this turns off all the notifications, and it's useful when I'm sharing the screen or need to focus and want absolutely no distractions.
8. "Toggle mute" action from the [Audio Mute](https://marketplace.elgato.com/product/audio-mute-705c5433-1e05-4d8a-844f-b5914b7f642f) plugin - as the name suggests, it will mute or unmute my current audio input devices. When my microphone is muted, the icon on this button changes to a crossed microphone. It saves me from having to set up separate mute actions for Teams, Zoom or any other videoconferencing apps I might be using. It's one plugin to rule all the mute buttons. The only downside is that my microphone's "system mute" status is not reflected in the apps. If I mute my microphone with this button, I still appear as "unmuted" in a Teams call. So, I have a separate button in my "Teams" profile to toggle mute in the Teams app so everyone can see that I'm muted.
9. System-wide play/pause button - toggles the most recently played media content on my computer.
10. "Play/Pause" button from the [Spotify (macOS)](https://marketplace.elgato.com/product/spotify-macos-17f49e8b-09a0-4209-95ed-6dee2469f97b) plugin - it controls the Spotify app's playback.
11. "Next Track" button for Spotify - it switches to the next song.

{% postImage "apps_folder_annotated.jpg", "'Apps' folder in Stream Deck's application", "", "Apps folder" %}

Pressing the "Apps" button in my "Default" profile opens a new folder (folders and profiles are two main ways to organize different screens on Stream Deck). Here are the most common applications that I use throughout the day: my email, chat aggregator, Teams, Spotify, calendar, etc. Actually, each app *lives* on a separate desktop on my secondary screen. Pressing one of the buttons will switch the currently active window on that secondary screen. That way, I can, for example, switch to my calendar and quickly glance at my schedule **without moving my mouse from the main screen**. This is extremely convenient, and I love how I can easily switch windows on my secondary screen almost without distracting myself from what I'm doing on the main screen.

This folder and all the other ones have the "Auto Exit" option enabled and "Exit after" set to "0s", so after pressing one of the buttons, I go back to the home screen.

{% postImage "shortcuts_folder_annotated.jpg", "'Shortcuts' folder in Stream Deck's application", "", "Shortcuts folder" %}

The second button on the home screen opens the "Shortcuts" folder. Here, I keep some automations created with [Shortcuts](https://support.apple.com/guide/shortcuts-mac/intro-to-shortcuts-apdf22b0444c/mac) and other applications:

1. The "Exit" action - goes back to the home screen.
2. Connect to AirPods - this is useful when I open the computer, and it doesn't automatically connect to my headphones.
3. Turn on "Do Not Disturb" Focus for one hour - this is useful when I need to focus for some time and don't want to accidentally disable the notifications for the whole day. It happened that at the end of the day I realized that I had received some urgent messages and calls that I hadn't noticed because the DND status was turned on all the time. So, I created this shortcut.
4. "Fix the microphone" shortcut - sometimes, as I switch between devices or when Teams can't connect to the right headset at the beginning of the meeting, a wrong microphone gets selected (including some virtual devices that actually don't record any audio), and no one can hear me in a call. Instead of trying to figure out how to quickly change the current audio input device[^1], I have a shortcut that uses the [Audio Switcher](https://marketplace.elgato.com/product/audio-switcher-cf41cd3d-ef80-4122-bef2-7f4fb82fcaac) plugin to set the input to my AirPods.

{% postImage "teams_profile_annotated.jpg", "'Teams' profile in Stream Deck's application", "", "'Teams' profile" %}

The last of my screens contains the "Teams" profile. It's a "Smart profile", and it becomes active when the Microsoft Teams app has focus. Here are the actions I have defined:

1. The "Navigation: Switch Profile" button - this switches the profile back to the default one. I use it when I want to go back to the home screen while keeping the focus on the Teams app.
2. The "Toggle Mute" button (the same one as on my home screen) - this is useful for seeing if my microphone is "globally muted" (indicated with a crossed microphone icon) and for unmuting myself. It happened in the past that I muted my microphone (globally, not in Teams), switched back to a call, and I was extremely confused as to why no one could hear me, even though Teams said I wasn't muted.
3. Various reactions that I can perform during the call.
4. Toggle the mute/unmute in the Teams application.
5. Toggle the camera on and off.
6. Raise hand.
7. Toggle the blurred background.
8. Leave the call.

### Plugins

Here are the plugins that I'm using:

1. [Audio Mute](https://marketplace.elgato.com/product/audio-mute-705c5433-1e05-4d8a-844f-b5914b7f642f) and [Audio Switcher](https://marketplace.elgato.com/product/audio-switcher-cf41cd3d-ef80-4122-bef2-7f4fb82fcaac) - both created by Fred Emmott, for managing the audio inputs.
2. [Microsoft Teams](https://marketplace.elgato.com/product/microsoft-teams-da5e2bbc-197c-4afe-8a85-a9941bf52697) - for all the Teams-related actions.
3. [Shortcuts](https://marketplace.elgato.com/product/shortcuts-a26342e4-07ac-4222-8735-b44989170aaa) - for a "Launch Shortcut" action. It's finicky, and sometimes it randomly doesn't work, so I try to use it as little as possible and never for critical actions that I don't know how to do manually in the middle of a video call.
4. [Spotify (macOS)](https://marketplace.elgato.com/product/spotify-macos-17f49e8b-09a0-4209-95ed-6dee2469f97b) - for controlling the Spotify app.

Unfortunately, as I wrote before, the Stream Deck application for MacOS doesn't have as many useful plugins as its Windows counterpart. However, external tools can add many of the missing features.

## My impression a few months later

What's my impression after using Stream Deck for a couple of months? The more time I've spent setting up various actions, the more I had to reach out to external tools. Want to open a predefined URL in a different browser? You can't do this because the "Website" action always uses the default browser. Instead, you need to write a one-line AppleScript (e.g. `tell application "Firefox" to open location "https://here.goes.your.url.com"`). Want to bring a specific window to the front? Nope, not without a custom script. Want to turn on the "Do Not Disturb" mode? You guessed it - you need a script or a shortcut!

The best part of getting a Stream Deck was switching from remembering custom keyboard shortcuts to pressing colorful buttons. Before I bought this device, [I used keyboard shortcuts to perform different actions]({% postUrl "you-dont-need-stream-deck-you-need-macros" %}#how-do-i-find-unused-key-combinations). But with custom keyboard shortcuts, I often had to think for a moment what was the key combination for the action I wanted to perform. I had less than a dozen shortcuts - all with quite intuitive mappings where the first letter of the app I wanted to start or the first letter of the action I wanted to perform corresponded to the shortcut. For example, `Hyper + o` would open the Obsidian app and `Meh + m` would activate the microphone mute/unmute action. But still, when I was in the middle of doing something else, I had to think for a moment how to run a specific shortcut. With Stream Deck lying literally five centimeters from my keyboard, pressing a button is a complete no-brainer activity. It's essential when I suddenly need to mute myself during a call because I need to cough. It's so much easier to mute the microphone with a physical button that is right next to me than with a keyboard shortcut.

I love the smart profiles - displaying Teams-related buttons when the Teams app is active is very cool. I like the physical buttons that I can press without looking. The button in the center has a little bump that you can use to orient yourself - just like with the "F" and "J" keys on a keyboard. I even prefer to use Stream Deck to control the music over pressing buttons on my headphones. For the first week after I got it, almost every day, I had a new idea of what could be automated with this device.

Is a device like this necessary for a developer? Well, it really shines when it comes to streaming. During the live stream you can't switch to a keyboard and start typing commands. But for me, it's a gimmick. I can live without it and only use the keyboard (which I do when traveling - I'm not carrying Stream Deck with me). But I like this gimmick and even after the "novelty factor" wore off, I rely on it for many small actions during the day.

I see that [BetterTouchTool supports Stream Deck](https://docs.folivora.ai/docs/1300_stream_deck.html) with additional features that I miss (mostly - having different actions performed depending on whether I tap a button or press it for longer). Maybe one day, I will switch from using Elgato's software completely and start managing my Stream Deck with BTT.

If you're looking for some inspiration on what else you can do with the Stream Deck, here are some good reddit threads:

- [If you own/want to own a Stream Deck, what do you use it for?](https://www.reddit.com/r/Twitch/comments/sok2cg/if_you_ownwant_to_own_a_stream_deck_what_do_you/)
- [Favorite Stream Deck Uses?](https://www.reddit.com/r/Twitch/comments/ue615c/favorite_stream_deck_uses/])
- [What's some good uses for a stream deck?](https://www.reddit.com/r/elgato/comments/r3bshk/whats_some_good_uses_for_a_stream_deck/)

And last but not least - the most important question of every hardware review out there: *Can it run Doom?* [Yes, it can](https://www.youtube.com/watch?v=QES0o0m--zc).

[^1]: You have to click the "Sound" button on the menu bar **while holding the Option key** to see this option.
