---
comments: true
date: 2010-04-08T13:51:23Z
tags: [c, compaq-evo-t20, damn-small-linux, linux]
title: Compaq Evo T20 projects
url: /2010/04/08/compaq-evo-t20-projects/
wordpress_id: 8
wordpress_url: http://nathanf77.wordpress.com/?p=8
---

Compaq Evo T20s are fun. I have a few that I'm using for various projects. I plan to set one up as a RFID controlled alarm/door lock system. Its running Damn Small Linux using ruby, rubygems and sinatra packages that I compiled myself.

<a href="http://www.mowson.org/karl/evo_t20/">Karl Mowatt-Wilson's tutorials</a> have been a huge help with flashing the T20s with linux images, as well as the <a href="http://open-evot20.sourceforge.net/wiki/index.php">open-evot20 site</a>.

I wrote a <a href="http://github.com/ndbroadbent/rubyk8055">K8055 USB Ruby C wrapper</a> for the <a href="http://www.apogeekits.com/usb_interface.htm">K8055 USB interface experiment board</a> (<a href="http://www.jaycar.co.nz/productView.asp?ID=KV3600&amp;CATID=25&amp;form=CAT&amp;SUBCATID=432">bought from here</a>). I tried getting to grips with Swig and posted a few questions on the mailing list, but gave up in the end, and wrote the C wrapper by hand. Credit to <a href="http://libk8055.sourceforge.net/">Sven Lindberg's libk8055 (linux drivers for K8055)</a>

I'm trying to set up another T20 as an internet radio/mp3 server, but this is harder than I thought it would be. Compiling <a href="http://nex.scrapping.cc/shell-fm/" target="_blank">shell.fm</a> and <a href="http://mpd.wikia.com/wiki/Music_Player_Daemon_Wiki">MPD (music player daemon)</a> on DSL is turning out to be nearly impossible. I've been wading through rpm and deb packages, trying to get the right versions of libao2, libao-dev, libmad0, libmad0-dev ... nothing seems to work. Would love to know if anyone has successfully compiled shell.fm and/or mpd recently on DSL. Advice would be hugely appreciated.

Anyway, <a href="http://docs.google.com/View?id=dcfcvm9s_23gs32zshc">you can have a look at my T20 notes here,</a>

<a href="http://github.com/ndbroadbent/linux_on_t20">and download my tweaked T20 build scripts from here</a>.

The notes are pretty scrambled and random, but I guess its better that they're in one document instead of 50 blog posts..

