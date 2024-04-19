---
comments: true
date: 2011-04-28T05:23:44Z
tags: ["rails", "bundler", "rails-3", "rvm", "gedit"]
title: Really handy RVM hook to symlink current gem directory
url: /2011/04/28/really-handy-rvm-hook-to-symlink-current-gem-directory/
wordpress_id: 446
wordpress_url: https://www.f-77.com/?p=446
---

I use gedit to write code. I keep a filebrowser tab open at the left side of my screen,
and sometimes I need to look at gem's source code.
RVM is awesome, and it keeps my 1.8.7 gems, 1.9.2 gems and all my gemsets separated,
but this makes it tricky to find the gem you need to look at.

Enter RVM hooks! If you want a symlink to the current gem directory to be updated each time you switch ruby versions,
save something like the following code to <code>~/.rvm/hooks/after_use</code>

```bash
ln -nfs $rvm_ruby_gem_home/gems ~/src/gems/current_bundle
```

Now you have access to the source code of gems from the file browser in your editor.
