---
comments: true
date: 2011-10-19T01:14:01Z
tags: ["git", "bash", "zsh", "scripts"]
title: SCM Breeze
url: /2011/10/19/git-shortcuts-like-youve-never-seen-before/
---

**SCM Breeze** is a set of shell scripts (for `bash` and `zsh`) that make it easier to use git.
It integrates with your shell to give you numbered file shortcuts,
a repository index with tab completion, and a community driven collection of useful SCM functions.

Disclaimer: **git** is currently the only supported SCM.
I've kept the project's name open because it won't be difficult to port it for other SCMs.

## File Shortcuts

SCM Breeze makes it really easy to work with changed files, and groups of changed files.
Whenever you view your SCM status, each modified path is stored in a numbered environment variable.
You can configure the variable prefix, which is 'e' by default.

### `git_status_shortcuts`:

<div class="centered">
<img src="/content/images/posts/2011/10/status_with_shortcuts-resized-post.png" width="590" alt="Git Status With Shortcuts" />
</div>
<br/><br/>

These numbers (or ranges of numbers) can be used with any SCM or system command.

For example, if `ga` was your alias for `git add`, instead of typing something like:

```bash
$ ga assets/git_breeze/config\* assets/git_breeze/install.sh
```

You can type this instead:

```bash
$ ga $e2 $e3 $e11
```

But SCM Breeze aliases `ga` to the `git_add_shorcuts` function,
which is smart enough to expand integers and ranges, so all you need to type is:

```bash
$ ga 2 3 11
```

And if you want to add all unstaged changes (files 1 to 10):

```bash
$ ga 1-10
```

(Note that `ga` will also remove deleted files, unlike the standard `git add` command.
This behaviour can be turned off if you don't like it.)

You can also diff, reset or checkout a file by typing:

```bash
$ gd 3
$ grs 4
$ gco 5
```

You can use these shortcuts with system commands by passing your command through `exec_git_expand_args`
(default alias is 'ge'):

```bash
$ echo $e4

# => assets/git_breeze/git_breeze.sh

$ ge echo 4

# => assets/git_breeze/git_breeze.sh

$ ge echo 1-3

# expands to echo $e1 $e2 $e3

# => \_shared.sh assets/git_breeze/config.example.sh assets/git_breeze/config.sh

```

## Keyboard bindings (disabled by default)

My most common git commands are `git status`, `git add` and `git commit`, so I wanted these
to be as streamlined as possible. One way of speeding up commonly used commands is by binding them to
keyboard shortcuts.

Keyboard shortcuts are turned off by default,
but here are the default key bindings if you enable them:

- `CTRL`+`SPACE` => `git_status_shortcuts` - show git status with file shortcuts
- `CTRL`+`x` `c` => `git_add_and_commit` - add given files (if any), then commit staged changes
- `CTRL`+`x` `SPACE` => `git_commit_all` - commit everything

The commit shortcuts use the `git_commit_prompt` function, which gives a simple prompt like this:

<div class="centered">
<img src="/content/images/posts/2011/10/git_commit_all-resized-post.png" alt="Git Commit All" />
</div>
<br/>
(When using bash, this commit prompt gives you access to your bash history via the arrow keys.)
<br/>

And if you really want to speed up your workflow, you can type this:

```bash
$ 2 3 <CTRL+x c>
```

This sends the `HOME` key, followed by `git_add_and_commit`:

<div class="centered">
<img src="/content/images/posts/2011/10/git_add_and_commit_params-resized-post.png" alt="Git Add And Commit" />
</div>
<br/>

<h2 id="repository-index">Repository Index</h2>

The second feature is a repository index for all of your projects and submodules.
This gives you super-fast switching between your project directories, with tab completion,
and it can even tab-complete down to project subdirectories.
This means that you can keep your projects organized in subfolders,
but switch between them as easily as if they were all in one folder.

It's similar to [autojump](https://github.com/joelthelion/autojump), but it doesn't need to 'learn' anything,
and it can do SCM-specific stuff like:

- Running a command for all of your repos (useful if you ever need to update a lot of remote URLs)
- Auto-updating a repo when you switch to it and it hasn't been updated for at least 5 hours.

The default alias for `git_index` is 's', which could stand for 'source' or 'switch' :)

You will first need to configure your repository directory, and then build the index:

```bash
$ s --rebuild

# => == Scanning /home/ndbroadbent/src for git repos & submodules...

# => ===== Indexed 64 repos in /home/ndbroadbent/src/.git_index

```

Then you'll be able to switch between your projects, or show the list of indexed repos:

<div class="centered">
<img src="/content/images/posts/2011/10/source_list-resized-post.png" alt="Git Status With Shortcuts" />
</div>
<br/><br/>

To switch to a project directory, you don't need to type the full project name. For example,
to switch to the `errbit` project, you could type any of the following:

```bash
$ s errbit
$ s err
$ s rbit
```

Or if you wanted to go straight to a subdirectory within `errbit`:

```bash
$ s err<TAB>
$ s errbit/<TAB>

# => app/ autotest/ config/ db/ ...

$ s errbit/conf<TAB>
$ s errbit/config/

# => cd ~/src/rails/errbit/config

```

## Anything else?

If you have any awesome SCM scripts lurking in your `.bashrc` or `.zshrc`,
please feel free to send me a pull request.
It would be cool to make this project into an [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) for SCMs.

# Installation

```bash
git clone git://github.com/ndbroadbent/scm_breeze.git ~/.scm_breeze
~/.scm_breeze/install.sh
source ~/.bashrc # or source ~/.zshrc
```

(The install script simply appends the following line to your `.bashrc` or `.zshrc`):

`[ -s "$HOME/.scm_breeze/scm_breeze.sh" ] && . "$HOME/.scm_breeze/scm_breeze.sh"`

# Configuration

SCM Breeze is configured via automatically installed `~/.*.scmbrc` files.
To change git configuration, edit `~/.git.scmbrc`.

**Note:** After changing any settings, you will need to run `source ~/.bashrc` (or `source ~/.zshrc`)

I know we grow attached to the aliases we use every day, so I've made them completely customizable.
Just change any aliases in `~/.git.scmbrc`. You can also change or remove any keyboard shortcuts.

Each feature is modular, so you are free to ignore the parts you don't want to use.
Just comment out the relevant line in `~/.scm_breeze/scm_breeze.sh`.

# Updating

Run `update_scm_breeze`. This will update SCM Breeze from Github,
and will create or patch your `~/.*.scmbrc` files if any new settings are added.

# Contributing

SCM Breeze lives on Github at [https://github.com/ndbroadbent/scm_breeze](https://github.com/ndbroadbent/scm_breeze)

Please feel free to fork and send pull requests, especially if you would like to build these features
for Mercurial, SVN, etc.

## Enjoy!
