---
title: Managing Gigabytes of Images with git-annex
description: What is git-annex, how to set it up to store large files in Google Drive or NAS, and how I use it to seamlessly manage a git repository of 20GB (and counting)?
tags: ['git', 'Tools']
date: 2024-03-13
similar:
    - configuring-git
    - 7-git-functions-to-make-your-life-easier
    - favorite-cli-tools
---

Earlier this year, I hit [GitLab's 10GB storage limit](https://docs.gitlab.com/ee/user/usage_quotas.html#:~:text=All%20projects%20on%20GitLab%20SaaS,to%20a%20read%2Donly%20project.) with one of my git repositories. I'm writing a family blog where I document our various trips and activities, hoping that in 20 years, it will be a great memento (like a photo album combined with a journal in a digital form, with search functionality, videos, GIFs, etc.). The blog started as a simple Git repository that I hosted on GitLab, but after adding hundreds of pictures, I hit the maximum repository size, and it was time to move images and movies somewhere else. Looking for a possible solution, I wanted to choose something that integrates seamlessly with my existing git workflow, so the final choice was between [git LFS](https://git-lfs.com/) and [git-annex](https://git-annex.branchable.com/). The reviews were mixed, but git-annex was more favored by the audience. The deal breaker was that if I decided to stop using it in the future, I would just need to run `git annex uninit` to get all the images back in place. That means losing the history of image changes, but I don't care about that anyway - I only care about not losing the most recent version of each file. So I've decided to go with git-annex.

::: callout-info
Unlike my wife, I rarely look back at the old pictures and walk down memory lane. But I know that when I get old, those memories will be among the most precious things left in my life. And even today, I can't remember trips I took ten years ago or large parts of my student life. That's why the only non-work related subscription for which I pay a significant amount of money is the [1 second everyday](https://1se.co/) app. It lets you record a one-second-long clip of your day and then join multiple clips together to get a video of how your month/year/life looked like. If you pay for the premium plan (that costs around $70 per year), you can record longer clips, add multiple clips per day and - most importantly for me - have your clips backed up.

And while it costs me more than, let's say, my Spotify subscription that I use for multiple hours per day, I often forget to record my "1 second" every day. I remember using it mostly when I'm on holidays. So why do I pay for an app that I forget to use? Because I love the idea behind the app. It lets me generate 1-minute-long videos full of great memories from vacations. And with the paid plan, I get backups, which means I won't lose the recorded memories if I lose my phone. I've looked for alternative solutions and even thought about making all those recordings myself. Still, I've decided that the time I will spend cutting and editing my videos is not worth saving 70 bucks per year. If you like the idea of recording small clips of your life, give the app a try - it has a free plan that might be enough for you. Disclaimer: I'm not related to that company in any way; I just like their app in the context of my family blog.
:::

git-annex is a tool that synchronizes files across different *repositories*. And by *repositories*, I mean folders, external drives or even 3rd party services like Google Drive, Dropbox, Amazon s3, and others (synchronization with 3rd parties usually happens through rclone, rsync, and similar tools). It also integrates nicely with git, so you can manage "large files" through git-annex and all the other smaller files through git. You can even go into full automatic mode and have git-annex handle all the files in your folder. Then, each time something changes, git-annex automatically commits the changes and propagates them to other repositories.

{% postImage "git-annex-website.jpg", "git-annex home page", "", "git-annex home page" %}

That was the good news. The bad news is that git-annex is a complex beast with a steep learning curve unless you settle on the "relinquish all the control and let the git-annex daemon handle all the changes for you" mode (which I didn't want to do since I like to control exactly how my git repository works)[^1]. It's much more complex than git. And surprisingly, there are not many tutorials clearly explaining how to do what I wanted to do (which is - to store images from my repository on Google Drive and a NAS server). The [tutorial from the documentation](https://git-annex.branchable.com/walkthrough/) is a great read, and I recommend you read that first. But it focuses on adding remote repositories on a USB drive or in another folder. There is a brief mention of *special remotes*, but for people like me, who just learned about git-annex, it's not clear if a special remote will ever be needed.

I update my family blog once a year - I spend 2-3 weeks working on it and then leave it until the next year. So, I decided to write down everything I learned when setting up git-annex for the first time, including how to use it and how to troubleshoot common problems. This will make my life easier when I get back to git-annex next year and forget everything I did last time. Maybe my notes will make your life easier too? I've spent a couple of days trying to understand how git-annex works and made many mistakes and invalid assumptions along the way. A few times, it was easier to start from scratch with newly gained knowledge than try to fix the mess I did. I used a test repository until I felt I had a good grasp of how git-annex works. I still don't understand many of its details, but at this point, I have a setup that works well for me. I also have a lot of respect for the creators of this tool and all the contributors. **git-annex is an incredibly versatile tool that supports a plethora of different scenarios, backends, backup modes**, etc. But using it is an order of magnitude harder than using git alone.

## How to set up Google Drive (or any other external backup service) with git-annex

The first task I embarked on was to enable storing files on my Google Drive account. The steps that I describe work for any other service you can connect to through [rclone](https://rclone.org/), including [most of the popular file storage and backup services](https://rclone.org/#providers).

To enable using rclone with git-annex, follow the instructions on the [git-annex-remote-rclone](https://github.com/git-annex-remote-rclone/git-annex-remote-rclone) website. When setting up rclone, you will at some point have to choose the "scope", with the available options being "drive", "drive.file", "drive.appfolder", etc. I initially chose "drive.appfolder", which stands for "Allows read and write access to the Application Data folder". However, this means that you won't see your files when you open Google Drive in the web UI - they will be hidden in a folder specific to an application you create in the setup part. You can interact with those files using rclone directly, but I prefer  to see my files in the web UI to make sure they are still there. So later, I changed the scope to "drive", which gives rclone access to all your files on Google Drive. When you change the scope, remember to authenticate rclone with remote again (that's part of the [rclone setup](https://rclone.org/drive/) instructions)! I didn't do this (and only replaced "drive.appfolder" with "drive" in `rclone.conf`), and then I couldn't figure out why git-annex is still storing my files in the Application folder. Once I re-authenticated and obtained a new token, everything worked fine.

Once rclone is set up, use the example command from the instructions to enable that special remote in git-annex. Here is the command I used:

```shell
git annex initremote gdrive \
  type=external \
  externaltype=rclone \
  target=GoogleDrive \
  prefix=git-annex-travel-blog \
  chunk=50MiB \
  encryption=shared mac=HMACSHA512 \
  rclone_layout=lower
```

## How to back up git-annex to a locally mounted NAS server

I have a Synology NAS that I'm using as the 2nd backup for my project. The way I configured it is that I mount it on my computer and access it through the `/Volumes/gitannex` folder. That's one way to do it, but there are other solutions. If you check the git-annex documentation, you can see that they suggest using `ssh` to connect to NAS on their [Synology NAS and git annex](https://git-annex.branchable.com/tips/Synology_NAS_and_git_annex/) page. I don't use that approach because I'm lazy (I really don't want to install additional stuff on my NAS, set SSH keys, etc.), and I want the simplest solution possible (I already have a NAS mounted on my computer most of the time anyway).

Here is how I add my NAS folder to git-annex:

```shell
git annex initremote nas \
  type=directory \
  directory=/Volumes/gitannex/travel-blog/ \
  encryption=none
```

## Things that surprised me the most about git-annex

Figuring out how to use git-annex is more difficult than understanding a typical piece of software created nowadays. Everything you need to know is in the documentation, but it's not served in the most easy-to-digest way. The majority of projects today come with a quick start guide explaining how to use them, often in a step-by-step form, so I can just run some commands and set up everything. And if that doesn't work, I can search the internet for some tutorials on how to do *X* in a given software. I should get back enough blogs to quickly figure out what to do.

git-annex is old school. It doesn't go easy on people like me who live by the rule of "5 hours of debugging can save you 5 minutes of reading the documentation". The knowledge is in the documentation, but just like with Linux man pages, you need to know what you want to do. And to know what you want to do, you must first read the documentation carefully to understand how git-annex works. After multiple days of trying to set it up and rereading the same few pages of documentation, I kept finding new information as more pieces were falling into place to form a better understanding of this tool. Some assumptions that I made initially were revised. Sometimes - even multiple times (I went from manually managing my files to the automatic mode and back).

I didn't know what to expect from git-annex and how it was supposed to work. On the one hand, I was expecting something like `rsync` that would simply move files from one place on the internet (my computer) to another (some server). On the other hand, it had to *somehow* integrate with git's workflow - track changes, update files, roll back to previous versions, etc.

Here's my journey on the path of surprises.

First, I installed git-annex and found the [walkthrough](https://git-annex.branchable.com/walkthrough/). I followed it, and after running `git annex add *.jpg`, I saw that my images were converted into symlinks. Fantastic! That will let me keep the repository size small. Now, what do I do with those symlinks? The walkthrough doesn't really explain how to make them work with Google Drive (apart from vaguely mentioning *special remotes*). Instead, it focuses on having multiple git repositories in different places. Ok, cool, but after finishing the walkthrough, I was not even a single step closer to figuring out how to set up git-annex for my use case.

I found the [git-annex-remote-rclone](https://github.com/git-annex-remote-rclone/git-annex-remote-rclone) plugin that can use rclone to sync files with Google Drive and act as a special remote. Cool! I've set it up, and then I was able to send files there using `git annex copy --to gdrive` and retrieve them using `git annex copy --from gdrive`. Great, it seemed I was all set. It was a bit cumbersome because I had to add files to git-annex by hand with commands like `git annex add *.jpg`, and when I added files, they became locked, preventing me from editing them unless I unlocked them. But I could live with that.

However, the next day, I found out that there was a [workflows page](https://git-annex.branchable.com/workflow/) explaining that I didn't have to do all that by hand! So I fired up `git annex webapp` that starts the "assistant" - a daemon that automatically detects changes in the repository, adds files to git-annex, and creates commits. I gave it a try, and it worked, but I no longer had symlinks in my project. All the images were reported in my terminal as full-size. Ok, that's not what I wanted to have. But when I pushed those files to GitLab, I could see that in the repository their size was tiny (hundreds of bytes). When I tried to open one of the images, I saw that inside, there was a text that looked like this: `/annex/objects/SHA256E-s144178--dc75f9d82cc334de0445f744bcb.jpeg`. What the heck?! The text looked like a symlink, but unlike when I ran `git annex add`, my terminal didn't see those files as symlinks! Turns out that what I saw were [pointer files](https://git-annex.branchable.com/internals/pointer_file/) - the second way git-annex stores objects (the first way being symlinks). Pointer files are kind of like symlinks, and even though they look strange to me because they appear as normal files in the terminal, the important thing is that GitLab sees them as tiny files (which is good; they don't use space on GitLab). And my code editor opens them as normal files too.

{% postImage "webapp.jpg", "git-annex webapp to configure the assistant", "", "Running 'git-annex webapp' starts a website for configuring the assistant" %}

Great success! From now on, I will use the git-annex assistant! It has the additional benefit that my files are no longer locked. I can edit them freely, and the assistant automatically commits every change. [Here](https://git-annex.branchable.com/tips/unlocked_files/) is some more information about the pros and cons of unlocked files - the unlocked mode is a successor to the [direct mode](https://git-annex.branchable.com/direct_mode/).

All seemed to work great, except that when I created a text file, git assistant also added it to git-annex. That's not what I wanted! I don't want my text files to be converted to symlinks or pointer files. So how do I make git-annex stick with processing only images and videos, leaving all the other files alone? Googling for "git-annex filter file types" didn't immediately return any useful answers. It turns out that I had to change how I think about git-annex. It's supposed to work with "large files", so what I had to do was to declare that images and videos should be considered as large files. One way to do this is to define large files as larger than some threshold, e.g. `git config annex.largefiles 'largerthan=100kb'`. This might work fine, but I prefer to determine which files git-annex should process based on their extensions because I know exactly what extensions my images and videos have. That seems easier than trying to guess what file size will catch all the media files but not other files. I set this up by creating the following `.gitattributes` file in the root folder of my project:

```txt
* annex.largefiles=nothing
*.jpg annex.largefiles=anything
*.mp4 annex.largefiles=anything
```

The above settings are parsed from the top, so we first declare that no files should be treated as large files, and then add specific file extensions to the list of large files. Alternatively, you could add file types to the list of [preferred_content](https://git-annex.branchable.com/preferred_content/). According to the description from the documentation, "preferred content" is supposed to specify what types of files should go into which remote repository. But I couldn't find any information on how to set preferred content in the `.gitattributes` file, and passing a long list of filetypes that is stored somewhere in the configuration file seemed less optimal than defining this setting in `.gitattributes` that I can easily access and edit.

Great, now I can start the assistant, and it will only watch for specific file types (all the file types that do not match its filters will be managed with git, not git-annex). I thought this would be my final solution, but I ended up disliking the mess that git-annex was making to my git log. So I went back to manually committing files with my own commit messages, which brings me to...

## My final workflow

Even though using the git-annex assistant to watch and automatically commit all my changes sounds tempting, it makes my git log look like this:

```shell
commit 430b796f2559a99b8a01f1a69ce55dfe3c50f75e
Author: Sebastian Witowski <myemail@test.com>
Date:   Sat Jan 20 20:54:35 2024 +0100

    git-annex in switowski@smbp.home:~/workspace/test2/test-repo

commit f44a6e40440cc083e3c15bf6f9b40ef2ee818e8f
Author: Sebastian Witowski <myemail@test.com>
Date:   Sat Jan 20 20:01:56 2024 +0100

    git-annex in switowski@smbp.home:~/workspace/test2/test-repo

commit 95090b5861a0afc9de20796c6a7c3bb7ea696649
Author: Sebastian Witowski <myemail@test.com
Date:   Sat Jan 20 20:00:34 2024 +0100

    git-annex in switowski@smbp.home:~/workspace/test2/test-repo
...
```

And I don't like that. Sure, I can squash and edit the commit messages, but I prefer to use git-annex the same way I use git - so control manually **when** and **what** I commit. In the end, I disabled the assistant.

Now, when I work on my project, and I want to commit changes, I do this:

```shell
# Add all files to the index
# git-annex will figure out which files go into annex and which go into git based on the filters I defined in .gitattributes
git annex add
# Commit changes
git commit
# Push changes to git and send files to remotes
git annex sync --content
```

Short and sweet.

## Setting up git-annex from scratch and basic usage

Let's distil all I've learned into a short guide explaining how to set up git-annex from scratch and how to use it.

Take my advice with a grain of salt! git-annex supports many different workflows, and what I'm describing in this article is a workflow that works for me. Also, I've used git-annex barely for a couple of evenings. For sure, there are more optimal ways to do some things (or at least more optimal for your scenario, dear reader).

I hope I'm not messing up something seriously, but this I will see in a couple of months/years. My scenario doesn't require very strict version control of images, and I'm fine with keeping only the latest versions. So if I mess something up, I can just take the most recent version of all the files and start a new git repository from scratch. And git-annex allows you to disable it rather easily - you just run `git annex uninit`, and it turns all symlinks back to the original files.

That said, let's dig into setting up git-annex from scratch. If your starting point is a folder with neither git nor git-annex, then first, you need to initialize both of them:

```shell
git init
git annex init
```

Next, set up a remote Google Drive (or some other external storage) using the [git-annex-remote-rclone](https://github.com/git-annex-remote-rclone/git-annex-remote-rclone) plugin. The following commands will add a new remote called "gdrive" using the "GoogleDrive" configuration from `rclone.conf` (so make sure to use the same name when you configure rclone) and store files on Google Drive in the `my-app1` folder:

```shell
git annex initremote gdrive \
  type=external \
  externaltype=rclone \
  target=GoogleDrive \
  prefix=my-app1 \
  chunk=50MiB \
  encryption=shared \
  mac=HMACSHA512 \
  rclone_layout=lower

# [Optional step] Verify that the remote is correctly set up and we can push/pull files to/from there
# This will take a few minutes and might fail/hang up (it failed for me, but I ignored that)
git annex testremote gdrive

# Sync the information about our new git-annex remote to the git repository
git annex sync
```

The `git annex sync` command above is important. When you initialize a new remote, this command will store information about that remote in `.git`, so when you clone this repository on another computer, you can enable that remote with `git annex enableremote gdrive` instead of setting it up from scratch.

Now, you can either **manually** commit files and send them to/pull them from a remote or use one of the **automatic** ways to do all that. As I explained before, I do everything manually to have better control over when I commit and what I write in the commit messages. Here's how to add and synchronize files:

```shell
# Add all JPG files to git annex
git annex add *.jpg
# Copy all git-annex'ed files to gdrive
git annex copy . --to gdrive
```

Now, if you need to create another repository (let's say you have a new computer and you want to set up your project there), run the following commands:

```shell
git clone <link-to-the-repository> .
git annex init
# Retrieve information about initialized remotes
git annex sync
git annex enableremote gdrive
git annex copy --from gdrive
```

And that should make all the annexed files available.

To add more remotes, for example, in a different folder or with a different rclone configuration, just follow the steps again to initialize it (`git annex initremote`) and synchronize the changes.

Once you have more remotes enabled, instead of manually pushing and pulling files from remotes, you can synchronize the state of the files using `git annex sync --content` command. It will push all your changes to the remotes that don't have their own copy of the files (and also pull those files that are on any of the remotes but not on your computer).

## Troubleshooting and "how-to" guides

Here is a list of common tasks you might have to do when using git-annex.

### Remove a remote

How to **remove a remote that is in a wrong state** (you misconfigured something, and want to remove that remote and try again)?
Following [this answer](https://stackoverflow.com/questions/34998462/how-to-delete-one-of-several-git-annex-replicas), you can mark it as dead and propagate that information to other repos:

```shell
git annex dead my-badly-configured-remote
git annex sync
```

### Synchronize changes to a remote

How to **synchronize changes after one of the remotes was not available** during the previous sync (e.g. NAS was not mounted)?
If you're using git-annex assistant, you can wait until the changes synchronize automatically. But if you don't use it or if you want to force the synchronization, run:

```shell
git annex sync --content
```

### Edit a locked file

How to **edit a locked file**?
By default, when git-annex replaces the file with a symlink, it locks it, so you can't modify it. To modify such a file, you need to unlock it, change it, and add it back to the annex:

```shell
git annex unlock image.jpg
<edit the file>
git annex add image.jpg
```

### Remove unused files

How to **remove unused files from git-annex**?
Removing a file from git doesn't automatically remove the copies from git-annex and the remotes. First of all, be careful, as the method I suggest removes all files not referenced by a branch or a tag. I use the `--force` option that bypasses the check if at least one copy of the file is left in some other remote (in case you want to restore that file in the future). This basically means that you **lose the possibility of going back to the previous state of a file** unless it's a file in a commit that was **tagged**. I don't care about the previous versions of my media files, so this is fine for me.

```shell
# Find all unused files locally
git annex unused
# Delete them
git annex dropunused --force all

# Find all unused files on a remote
git annex unused --from gdrive
# Delete them on a remote
git annex dropunused --force all --from gdrive
```

I'm using the `--force` option to force the removal. Otherwise, git-annex tries to make sure that at least one copy of this file exists. And that often results in getting "Unable to lock down 1 copy of file necessary to safely drop it" errors because Google Drive accessed through rclone doesn't support file locking needed to ensure that a copy exists.

The `git annex dropunused` command is not needed if you remember to remove files from the annex with the `git annex drop` command each time you remove a file from the repository. But I'm too lazy to remember to do that and prefer to remove files by hand (e.g. by pressing "Delete" in my IDE) and clean up git-annex afterwards.

Additionally, to **verify that the files are really unused**, I like to check some of them by finding which file points to the given symlink:

```shell
find -L /directory/with/images -samefile /path/to/file/in/git-annex
```

For any `/path/to/file/in/git-annex` file reported by `git annex unused`, there should be no match from the above `find` command.

### List where files are stored

How to see where all the **files are stored**?
There are two ways. A more compact list:

```shell
git annex list

(recording state in git...)
here
|origin
||SynologyNAS
|||web
||||bittorrent
|||||GoogleDrive
||||||
X_X__X _assets/images/posts/2019-02-27-file1.jpg
X_X__X _assets/images/posts/2019-03-04-fiel2.jpg
...
```

Or a bit more verbose version:

```shell
# More verbose list
git annex whereis
whereis _assets/images/posts/2019-02-27-file1.jpg (3 copies)
    2a241183-7b15-433d-af55-ddecbe876408 -- [nas]
    c9501338-8824-4d32-82e9-4e9039590943 -- [gdrive]
    debde584-293f-4bfc-a024-b28bdeb7a00d -- switowski@smbp.home:~/workspace/travel-blog [here]
ok
whereis _assets/images/posts/2019-03-04-file2.jpg (3 copies)
    2a241183-7b15-433d-af55-ddecbe876408 -- [nas]
    c9501338-8824-4d32-82e9-4e9039590943 -- [gdrive]
    debde584-293f-4bfc-a024-b28bdeb7a00d -- switowski@smbp.home:~/workspace/travel-blog [here]
ok
...
```

## Conclusions

I hope this little git-annex tutorial will be useful to some of you (or at least to me when I need to remind myself how to use it next year). If you have any additional tips for using git-annex, please leave them in a comment. I'm sure I'm still missing a lot of cool features hidden in the corners of the documentation.

Would I use git-annex for important projects where being able to retrieve old versions of files is actually crucial? Probably not. git-annex is a good tool, but it's also a complex one. I'm sure some smart DevOps engineers find it easy to use git-annex efficiently without worrying about losing any data. But I'm not that kind of a person. I'm comfortable using git, but I don't have enough experience using git-annex to use it for anything else but a hobby project. If I mess it up, I can always recover the original photos directly from my phone.

What else would I use instead? Surprisingly, there are not that many great options - probably because version control of large files is not a common problem (except for the game dev industry, where you need to version your assets that can take hundreds of GBs). For many years, the main alternative has been a commercial tool called Perforce (no matter if you asked that question [8 years ago](https://www.reddit.com/r/gamedev/comments/3cildb/version_control_for_large_assets_whats_the_best/) or [last year](https://www.reddit.com/r/unrealengine/comments/16r8lhm/best_version_control_for_large_projects/)).

[^1]: But if you do want to relinquish the control and let git-annex take the wheel, you can stop reading here and check out this article on how to set up git-annex with two commands: <https://bryan-murdock.blogspot.com/2020/03/git-annex-is-great.html>.
