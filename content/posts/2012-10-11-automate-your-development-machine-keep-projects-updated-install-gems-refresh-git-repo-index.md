---
comments: true
date: 2012-10-11T14:56:54Z
tags: ["ruby", "rails", "guides", "bash", "rubygems", "scripts", "git"]
title:
  "Automate your Rails development with cron: Keep projects updated, install
  gems, and maintain a repo index"
url: /2012/10/11/automate-your-development-machine-keep-projects-updated-install-gems-refresh-git-repo-index/
---

A day in the life of a Rails developer will usually involve a few `git pull`s, `bundle install`s, and switching between different projects. I thought it would be great if my projects could be automatically kept up-to-date, so that I don't have to spend too much time updating code or installing new gems.

I'm using the `whenever` gem to create cron tasks that:

- Update all my git repos from their remotes
- Satisfy all of my Gemfile's dependencies
- Cache rake and capistrano commands for tab completion
- Fetch Travis CI build statuses to show in my terminal
- Maintain an index of my git repos so I can quickly switch between projects, while keeping them organized

For all of these tasks, I'm using the `git_index` function provided by my [SCM Breeze](https://github.com/ndbroadbent/scm_breeze) project. It creates an index of all your git projects by recursively scanning your code directory, and then lets you quickly jump to projects, or run batch commands for each of your repos. See my [SCM Breeze blog post for more info about the repository index](/2011/10/19/git-shortcuts-like-youve-never-seen-before/#repository-index).

### Updating Git Repos

Every 30 minutes I run a task that updates all of the local branches on all of my git repos. It does this as safely as possible:

- Doesn't do anything if there are any changed files in the working directory
- Doesn't do anything unless remote and merge branches are explicitly configured for that branch
- Doesn't do anything if it cannot 'fast-forward' merge a branch (i.e. the current commit is not a parent of the latest commit in the remote repo)

Basically, this means that it will leave you alone if you are working on a feature, or if you've committed something that you haven't pushed yet.

Otherwise, it will bring your branches up-to-date and send a desktop notification:

<img src="/images/posts/2012/10/git_update_notify.jpg" alt="Git update notification" />

### Installing Gem dependencies

I have a task that runs every hour to ensure that all of my gem dependencies are installed. If someone adds a new gem dependency to your project, it's great to have that automatically installed when the repo is automatically updated.

I'm using the `git_index` function to run a script called [bundle_check_or_install](https://github.com/ndbroadbent/dotfiles/blob/master/bin/bundle_check_or_install) for each of my git repos. It also sends desktop notifications on update or failure, and doesn't do anything if the gems are already up-to-date.

If `bundle install` fails for any reason, it will touch a file at `'.skip_bundle_auto_install~` (and exclude that file from git by adding it to `.git/info/exclude`). Any future attempts to auto-update your gems will abort with the notification that "Previous bundle install failed". This notification can be disabled if `.skip_bundle_auto_install~` contains the string "SILENT". I do this when I stop caring about old projects, but don't want to delete or archive them.

### Caching Rake and Capistrano commands for tab completion

`rake -T` and `cap -T` can take a long time to run, so I run a task every hour to cache the available tasks for all of my projects, and I use these cached tasks to provide tab completion. The tasks in saved to files like `.cached_rake_tasks~` and `.cached_cap_tasks~`. [Here's how I set up the Bash tab completion](https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/ruby_on_rails.sh#L99).

### Fetching Travis CI Build Status

I've written about this before in my [Travis CI Status in Shell Prompt](/2012/01/14/travis-ci-status-in-shell-prompt/) post. Every 30 minutes I run a task to fetch build statuses for all the repos that contain a `.travis.yml` file. The status is saved in a hidden file called `.travis_status~`, and displayed in my prompt like this:

<img src="/images/posts/2012/01/travis_ci_prompt.png" alt="Travis CI status in prompt" />

### Updating Git Repo Index

All of the previous tasks depend on the git repo index being up-to-date. It only takes a few seconds to scan through my code directories, so I run this task every minute.

This index lets me keep my code organized in different folders, while also letting me jump to different projects by name:

<img src="/images/posts/2011/10/source_list-resized-post.png" alt="Git Status With Shortcuts" />

<hr/>

If you want to set this up for yourself, you'll need to check out my [SCM Breeze](https://github.com/ndbroadbent/scm_breeze) project. The `schedule.rb` that defines these tasks [lives in my dotfiles repo](https://github.com/ndbroadbent/dotfiles/blob/master/schedule.rb), and you can find the scripts I use in the [/bin](https://github.com/ndbroadbent/dotfiles/blob/master/bin/) directory.

Post a comment if you have any automation ideas to share!
