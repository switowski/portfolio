---
title: I Like Makefiles
description: Fancy new build tools come and go, but I think I will stick with using makefiles to orchestrate everyday tasks in my projects.
tags: ['CLI', 'Tools']
date: 2024-09-18
---

I like makefiles. I first used a makefile more than ten years ago. Even back then, it looked like some ancient technology used by the graybeard Linux wizards. Years passed, and new build tools came and went, but I kept seeing makefiles still used here and there. I got used to them because they were part of some projects that I joined. At some point, I started to like them. Today, they are often the first automation tool I use when I start a new project.

The reason I like makefiles is that they often follow an unwritten convention of implementing the same set of commands to get you up and running. When I find a project I know nothing about, and I see a `Makefile` file inside, chances are that I can run `make` or `make build` followed by `make install`, and I will get this project built and set up on my computer. Or at least I will get information on other steps I need to include.

I try to apply the same rule in my projects. If I open a folder with one of my old projects and run `make dev`, this will perform all the necessary steps to build the project and spin up a dev server. That's convenient because throughout the years, I used many different technologies, and each had different commands to build or deploy a project. I have old projects written in Jekyll, Hugo, 11ty, and all sorts of different Python web frameworks. With makefiles, when I come back to a project I haven't touched for months (or years), I don't have to remember the command to start a dev server with, let's say, Jekyll. I just run `make dev`, and this, in turn, fires up the corresponding Bundler commands. Even if I use tools like Docker or gulp in my project, I still use makefiles to orchestrate those tools. For example, I often write a `make build` command that builds all the necessary Docker images, passing additional parameters specific to a given project.

My makefiles are simple. I don't use conditional statements, flags or any other fancy features. Most of the tasks (they are technically called *targets*, but I always call them *tasks* in my head) consist of one or more shell commands. I could write bash scripts with a couple of functions instead, but makefiles are easier and faster to write.

Some common tasks that most of my personal projects[^1] contain include:

- `dev` to start the development server
- `build` to build the project (if a build step is necessary)
- `deploy` to deploy/publish the project

And that's really it. Sometimes, I include additional tasks like `watch` to automatically rerun the build task when I change any of the source files. But many of my projects can be managed with just two or three Make commands.

This blog that you're reading right now has a simple makefile with just one target:

```Makefile
dev:
	npm run dev
```

And a more advanced project of mine uses the following makefile to run the dev server, watch for changes, build, encrypt and deploy the website:

```Makefile
# Run dev server
dev:
	bundle exec jekyll serve --unpublished -w --config _config.yml,_config-dev.yml --livereload

# Build assets
build:
	npm run gulp build

# Watch a specific folder and process assets
watch:
	npm run gulp watch -- --wip

# Build the website locally, encrypt and deploy to Netlify server
deploy:
	JEKYLL_ENV=production bundle exec jekyll build; \
	make encrypt; \
	netlify deploy --prod

# Encrypt the "_site" folder
encrypt:
	npx staticrypt _site/*.html -r -d _site
```

[GNU Make](https://www.gnu.org/software/make/) (the software that runs makefiles) is quite ubiquitous. If you're on Linux, you probably already have it installed. Even on my MacBook, I don't remember installing it explicitly. It must have come with some other tools that I installed in the past. Make is simple and doesn't require as many additional dependencies as some other build tools. This can be useful if you need a tool that will work in a restricted environment where installing additional packages is difficult or impossible for security reasons. Make will probably be already present in that environment. And if not, you can just take the commands from the makefile and run them manually in the shell. If gulp is not available on your server, you can't really take the JavaScript code and paste that into the terminal.

I'm not against other build tools. I like other build tools too. I'm excited when I find a new one that is better and faster than the one I was using before. But I will still use Make to orchestrate them because it gives me a set of familiar commands to manage all sorts of different setups with different tools.

[^1]: By "personal", I mean projects where the deployment process is much simpler than production-grade stuff.
