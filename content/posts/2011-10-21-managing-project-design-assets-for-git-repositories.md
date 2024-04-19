---
comments: true
date: 2011-10-21T23:25:47Z
excerpt: How to use Dropbox to sync the files you don't want to check in
tags: ["git", "bash", "scripts", "ubuntu"]
title: "Managing Project Design Assets For Git Repositories: A Simple Solution"
url: /2011/10/21/managing-project-design-assets-for-git-repositories/
---

When you're creating logos or icons for a project that uses `git`,
have you ever wondered where you should store those `.psd` or `.xcf` files?
Do you commit all of your raw design files, or does it put you off that any changes to those files
will bloat your repository?

The following post describes a part of my [SCM Breeze](/2011/10/19/git-shortcuts-like-youve-never-seen-before/)
project. If you haven't seen it already, take a look at my [blog post that describes what it can do](/2011/10/19/git-shortcuts-like-youve-never-seen-before/).

Here were my goals when I set out to find a solution:

- I wanted a design directory for each of my projects
- I didn't want the design directory to be checked in to the git repository
- The design directory needed to be synchronized across all of my machines

I decided that I would need to store all of my design files in one place so that they could be easily
synchronized, and I would create symlinks from each project to the root design directory.

The simplest way for me to synchronize files was via my Dropbox account.
However, if you work with a larger team, you could set up a shared design directory on one
of your servers and synchronize it with `rsync`.

Either way, here's how you can effectively manage your design assets for git projects:

## 1) Install SCM Breeze

This gives you the `design()` function, as well as a bunch of other features that you can [read about here](/2011/10/19/git-shortcuts-like-youve-never-seen-before/).

To install, run:

```bash
git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze
~/.scm_breeze/install.sh
source ~/.bashrc # or source ~/.zshrc
```

## 2) Create and configure a root design directory

I created my root design directory at `~/Dropbox/Design`.

After you've created your root design directory, edit `~/.scmbrc` and set `root_design_dir`
to the directory you just created.
You can also configure the design directory that's created in each of your projects
(default: `design_assets`), as well as the subdirectories you would like to use.
The default base subdirectories are: Images, Backgrounds, Logos, Icons, Mockups, and Screenshots.

After you have changed these settings, remember to run `source ~/.bashrc` or `source ~/.zshrc`.

## 3) Initialize design directories for your projects

To set up the design directories and symlinks, go to a project's directory and run:

```bash
design init
```

If your root directory is `~/Dropbox/Design`, directories will be created at
`~/Dropbox/Design/projects/my_project/Backgrounds`, `~/Dropbox/Design/projects/my_project/Icons`, etc.

It will then symlink the project from your root design directory into your project's design directory,
so you end up with:

- `my_project/design_assets` -> `~/Dropbox/Design/projects/my_project`

It also adds this directory to `.git/info/exclude` so that git ignores it.

Here's the awesome part: If you use the SCM Breeze git repository index,
you can run the following batch command to set up these directories for all of your git repos at once:

```bash
git_index --batch-cmd design init
```

If you want to remove any empty design directories, run:

```bash
design trim
```

And if you want to remove all of a project's design directories, even if they contain files:

```bash
design rm
```

## 4) Link existing design directories into your projects

If you've set up your design directories on one machine, you'll want them
to be synchronized across all of your other development machines.

Just run the following command on your other machines after following steps 1 and 2:

```bash
design link
```

This uses your git index (from SCM Breeze) to figure out where to create the symlinks.
If you don't use the git index, the same outcome could be achieved by running 'design init'
for each of the projects.

## Enjoy!

Please leave a comment on this blog post if you have any questions.
If you find a bug, or it doesn't work quite right on your operating system,
[please raise an issue on Github](https://github.com/ndbroadbent/scm_breeze/issues).

## Shameless Dropbox Referral

If you don't already use Dropbox, [click here to sign up!](https://db.tt/hN3mN1W) It's an awesome service!
And if you sign up via that referral link, you'll be giving me a little extra free space :)
