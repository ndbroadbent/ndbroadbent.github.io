---
comments: true
date: 2013-03-29T23:44:58Z
tags: ["ruby", "rails", "bash", "linux", "ubuntu"]
title: 'Ubuntu Keyboard Shortcut: Open a selected file in Sublime Text 2'
url: /2013/03/29/keyboard-shortcut-to-open-selected-file-in-sublime-text-2/
---

Whenever I'm looking at backtraces, logs, or failing tests in the terminal, I often need to open one of those files in my text editor. It was previously a semi-arduous process that involved highlighting, copying, pasting and the return key. Now, all I need to do is double-click or highlight a line, and then press a keyboard shortcut to open that file & line in my text editor (currently [Sublime Text 2](https://www.sublimetext.com/2).) I've also added a thing to my `$PROMPT_SCRIPT` that stores my terminal's most recent directory in `~/.cwd~`, so that the script can handle relative paths. (Most of the time I'm just in the root folder of a given project.)

One extra feature for Ruby developers is support for backtrace lines like this:

{{< highlight ruby >}}
app/models/post.rb:225:in `sharing_is_caring'
{{< / highlight >}}

If you double-click that file, you'll end up with the following selection: **app/models/post.rb:225:in**. The script will automatically strip the trailing **:in**, so you can just double-click instead of manually highlighting.

### Requirements

* Ubuntu
* xclip (install with `sudo apt-get install xclip`)
* A text editor, such as [Sublime Text 2](https://www.sublimetext.com/2).

### Installation

* Download the [open_selected_in_editor](https://github.com/ndbroadbent/dotfiles/blob/master/bin/open_selected_in_editor) script to somewhere like `~/bin`.

{{< highlight bash >}}
mkdir -p ~/bin
wget https://raw.github.com/ndbroadbent/dotfiles/master/bin/open_selected_in_editor -O ~/bin/open_selected_in_editor
chmod +x ~/bin/open_selected_in_editor
{{< / highlight >}}

* Modify the script to use your preferred text editor

### Set up current working directory support

Add the following line to your `~/.bashrc`:

{{< highlight bash >}}
PROMPT_COMMAND+="pwd > ~/.cwd~;"
{{< / highlight >}}

This means that every time you press return in the terminal, the script can use your current directory to determine an absolute path for a highlighted file. It's not completely foolproof, but good enough for me.

### Set up a keyboard shortcut in Ubuntu 12.04

* Go to **System Settings** -> **Keyboard** -> **Shortcuts** -> **Custom Shortcuts**
* Click the **+** to add a new shortcut with:
  * Name: **Open selected in editor**
  * Command: **~/bin/open_selected_in_editor**
* Set the keyboard shortcut. I like *Ctrl+Shift+X*.

<img class="lightbox thumb" src="/images/posts/2013/03/keyboard_shortcuts.jpg" alt="Ubuntu Keyboard Shortcuts" />

All done! Now you can highlight a filename in the terminal, press your keyboard shortcut, and open it in your editor without the need to copy & paste filenames. Please let me know if you need any help, but I'm sorry I don't know how to do this in OS X or Windows.
