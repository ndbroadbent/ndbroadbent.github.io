---
comments: true
date: 2012-10-29T20:31:21Z
tags: bash linux scripts
title: Auto-reloading your .bashrc (or .zshrc)
url: /2012/10/29/auto-reloading-your-bashrc/
---

If you often make changes to your `~/.bashrc`, you might be sick of typing `source ~/.bashrc` after every change.
It can also be annoying when you switch to a different tab in your terminal, but your new aliases or functions aren't available until you type `source ~/.bashrc`.

While I was working on [scm_breeze](https://github.com/ndbroadbent/scm_breeze) and my [dotfiles](https://github.com/ndbroadbent/dotfiles) repo, I grew tired of having to type this command, so I aliased it to `sbrc`. But I knew I could do better, so I created an auto-reload script that reloads my `~/.bashrc` if there are any changes to itself, or any of the files that it loads.

When you run it at the beginning of your `.bashrc`, it wraps the `source` and `.` commands with a function that builds an index of all the sourced files. At the end of your `.bashrc`, you need to call the `finalize_auto_reload` function, which:

* Removes the `source` and `.` overrides
* Sorts the sourced file index and removes duplicates
* Stores the mtime of the most recently modified source file in a variable
* Adds the `auto_reload_bashrc` function to your `PROMPT_COMMAND`.

Whenever you start a new line in your terminal, the `auto_reload_bashrc` function reloads your `.bashrc` if any of the sourced files have changed. Changes are detected by looking up the most recent modification time from all of the sourced files, and comparing that time with the previous value.

My `.bashrc` sources 28 files from my [dotfiles](https://github.com/ndbroadbent/dotfiles), [scm_breeze](https://github.com/ndbroadbent/scm_breeze), and [RVM](https://rvm.io/). Running the `auto_reload_bashrc` function to check for changes only takes 11 ms.

If you make a lot of changes to your `.bashrc` or `.zsh`, you can check out my auto-reloading script here:
<a href="https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/auto_reload.sh" target="_blank">https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/auto_reload.sh</a>
