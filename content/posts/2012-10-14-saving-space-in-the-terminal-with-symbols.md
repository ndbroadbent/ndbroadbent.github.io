---
comments: true
date: 2012-10-14T22:28:47Z
tags: ["linux", "bash", "ruby", "scripts"]
title: Saving space in the terminal with symbols
url: /2012/10/14/saving-space-in-the-terminal-with-symbols/
---

I'm saving a little space in my terminal by replacing my username and group (ndbroadbent) with a single symbol.
I'm doing this [in my prompt](https://github.com/ndbroadbent/dotfiles/blob/master/bashrc/prompt.sh#L64-66),
as well as in the output of `ls` commands:

<img src="/content/images/posts/2012/10/ls_with_symbols-resized-post.png" alt="ls and prompt with symbols" />

(My laptop's hostname is also represented by a symbol.)

For the ls output, it was a bit tricky to re-justify the username and group columns after substituting my username.
I decided to do it in ruby, and then played some ruby golf:

````ruby
o=STDIN.read;re=/^(([^ ]_ +){2})(([^ ]_ +){3})/;u,g,s=o.lines.map{|l|l[re,3]}.compact.map(&:split).transpose.map{|a|a.map(&:size).max+1};puts o.lines.map{|l|l.sub(re){|m|"%s%-#{u}s %-#{g}s%#{s}s "%[$1,*$3.split]}}
```

This little script parses the modified output of `ls -lhv`, calculates the max length of the user/group/size columns, and then pads those columns with the correct number of spaces.

My final `ls` command looks like this:

```bash
ls -lhv --group-directories-first | sed \"s/$USER/\$(/bin/cat $HOME/.user_sym)/g\" | rejustify_ls_columns
```

(where `rejustify_ls_columns` is a function wrapping the ruby script above.)
````
