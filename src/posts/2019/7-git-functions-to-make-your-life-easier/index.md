---
title: Git Aliases Don't Have to Be Boring!
description: Git aliases can be far more advanced than just a simple "l = log". Check out those seven examples of what else you can do.
tags: ['git']
date: 2019-01-18
---

In the [previous post]({% postUrl "configuring-git" %}), we covered what to put inside a `.gitconfig` file to supercharge git. We have discussed some basic aliases, but you can do much more than simple `ci = commit` type of stuff. You can define whole functions that will help you with mundane tasks. Here are some of mine:

## 1. Squashing commits

```bash
squash = "!f(){ git reset --soft HEAD~${1} && git commit --edit -m\"$(git log --format=%B --reverse HEAD..HEAD@{1})\"; };f"
```

This is my favorite one. Let me explain why. I often work on a feature and when I'm done, I write a nice commit message to summarize what I just did only to notice that some tests are not working. So, I fix them, and I create another commit. It's finally over. Except that I forgot to document one function. Another commit. Arghh, I made a typo in the documentation. And so on. Once I'm _really_ done, I have my beautifully described commit and then a bunch of other less-pretty commits on top of it. Here is where the `squash` function comes in. If I have five commits that I want to turn into one commit, I'm running `git squash 5`. It will combine all five commits into one and open a text editor with all five commit messages that I can edit. Once I save and exit the editor, I end up with only one, pretty commit describing my feature. Brilliant!

## 2. Merge pull request

```bash
mpr = "!f() { \
        declare currentBranch=\"$(git symbolic-ref --short HEAD)\"; \
        declare branch=\"${2:-$currentBranch}\"; \
        if [ $(printf \"%s\" \"$1\" | grep '^[0-9]\\+$' > /dev/null; printf $?) -eq 0 ]; then \
            git fetch origin refs/pull/$1/head:pr/$1 && \
            git checkout -B $branch && \
            git rebase $branch pr/$1 && \
            git checkout -B $branch && \
            git merge --ff-only pr/$1 && \
            git branch -D pr/$1; \
        fi \
    }; f"
```

This one looks complicated, but it's actually quite useful if you are a maintainer of a project on GitHub. There are two ways you can call it: `git mpr 123` or `git mpr 123 master`. The first version will merge pull request number 123 on top of the current branch. The second will merge pull request number 123 on top of the branch called master. If you are using GitHub, you can easily merge a pull request using the web interface, but if you want a bit more control over how you are merging the pull requests (for example, I'm using the `git merge --ff-only` option, while GitHub will use `git merge --no-ff`), or you just want to merge a bunch of pull requests without leaving your terminal - this function will help you.

**Note**: For now, it only supports GitHub. I will need to find a way to make a similar alias for GitLab, as I've started using it more often.

## 3. Checkout pull request

```bash
copr = "!f() { git fetch -fu ${2:-origin} refs/pull/$1/head:pr/$1 && \
               git checkout pr/$1; }; f"
```

Sometimes, just reading the code of a _pull request_ (or _merge request_, as GitLab calls them) might not be enough to verify if it should be merged. Maybe you want to add something, or some tests are failing, and you want to run them locally on your computer. Thanks to [Ned Batchelder's blog](https://nedbatchelder.com/blog/201407/fetching_github_pull_requests.html), I found an easy way to do this. The `copr` function will download the pull request from the remote repository to your computer as a new branch. There are two ways you can use it: `git copr 123` or `git copr 123 remote_repo`. The first one will download pull request number 123 from remote repository called `upstream`. The second one will download the same pull request, but this time from a remote repository called `remote_repo`.

**Note**: Again, only supports GitHub.

## 4. Delete merged local branches

```bash
bclean = "!f() { git branch --merged ${1-master} | grep -v " ${1-master}$" | xargs -r git branch -d; }; f"
```

This function will delete all local branches that have been merged to the `master` branch. You can specify a different branch than `master` as an argument (if, for some reason, your **main** development branch is called differently). I'm using this function because I never remember to delete my local branches when they get merged and at some point, I'm getting lost in dozens of branches that I end up with.

## 5. Temporarily ignore a file

```bash
ignore = update-index --assume-unchanged
unignore = update-index --no-assume-unchanged
ignored = !git ls-files -v | grep "^[[:lower:]]"
```

One way to exclude some files from version control is to add that file to the `.gitignore` file. But maybe you want to ignore a file only _temporarily_. For that case, I'm using those three functions. The first one will make git ignore a given file or directory (so even if you make changes to that file, it won't show up as modified when you call `git status`). The second one will stop ignoring that file. And the last one will show you a list of ignored files.

## 6. Show all aliases

```bash
aliases = config --get-regexp alias
```

Even though I'm trying to use names that are easy to remember, sometimes I forget how a given function was called. And when I do, I can just call `git aliases` to see the list of all aliases defined in my `.gitconfig` file.

## 7. Ignore repeated `git`

```bash
git = !exec git
```

This one is an interesting curiosity that I found on the [Caius Theory blog](http://caiustheory.com/git-git-git-git-git/). Imagine you start typing `git `, then you get distracted for a moment, but when you go back to the terminal, you continue typing `git status`. But, by mistake you end up with `git git status`. If this happens to you often, then the above alias can help. It will simply ignore repeated `git` commands, so a command like `git git git git status` will execute exactly in the same way as `git status` does.
