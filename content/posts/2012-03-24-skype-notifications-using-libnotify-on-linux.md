---
comments: true
date: 2012-03-24T18:55:18Z
tags: ["scripts", "guides", "skype", "linux"]
title: Skype notifications using libnotify on Linux
url: /2012/03/24/skype-notifications-using-libnotify-on-linux/
---

Skype on Linux comes with it's own notification system. It's not that bad, but it's not consistent, either.
If you want to configure Skype to use `libnotify` instead, run the following script in your terminal:

(NOTE: You must have installed Skype, and logged in at least once.)

{{< highlight bash >}}
bash < <(curl -s https://raw.github.com/gist/2181122/skype-libnotify.sh)
{{< / highlight >}}

This downloads and executes the script from this gist: [https://gist.github.com/2181122](https://gist.github.com/2181122)

It fetches the skype configuration from [here](https://github.com/ndbroadbent/dotfiles/blob/master/skype/skype-UI.xml),
which is part of my [dotfiles](https://github.com/ndbroadbent/dotfiles) repo.
