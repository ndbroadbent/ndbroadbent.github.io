---
comments: true
date: 2010-06-26T00:30:15Z
tags:
  [
    "compaq-evo-t20",
    "lcd4linux",
    "linux",
    "music",
    "ruby",
    "shell-fm",
    "web-design",
  ]
title: Last.fm on embedded systems
url: /2010/06/26/last-fm-on-embedded-systems/
wordpress_id: 96
wordpress_url: http://nathanf77.wordpress.com/?p=96
---

I've finished most of the work I'm going to do on my shell.fm ruby server. Its written on sinatra + jquery + jquery-ui (so, a lot of ajax calls). It also requires my custom shell.fm fork if you want the volume control to work.

You can find my shell.fm fork here: <a href="http://github.com/ndbroadbent/shell-fm">http://github.com/ndbroadbent/shell-fm</a>

and the shell.fm sinatra server is here: <a href="http://github.com/ndbroadbent/shell-fm_sinatra">http://github.com/ndbroadbent/shell-fm_sinatra</a>

By the way, this post is about an embedded linux system that plays last.fm internet radio streams. I have set it up on tinycore linux, and its a permanent part of my home sterio system.

Here are some screenshots of the shell.fm sinatra web interface:

<img class="lightbox" alt="shell.fm sinatra" src="/images/posts/2010/06/changing-station.png" />

<img class="lightbox" alt="paused track, volume change" src="/images/posts/2010/06/paused.png" />
