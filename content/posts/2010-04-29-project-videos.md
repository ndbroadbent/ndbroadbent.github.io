---
comments: true
date: 2010-04-29T11:35:52Z
tags: ["linux", "music", "reaper", "ruby", "ubuntu-9.10", "videos"]
title: Last.fm Player - Project Videos
url: /2010/04/29/project-videos/
wordpress_id: 49
wordpress_url: https://nathanf77.wordpress.com/?p=49
---

<iframe width="560" height="349" src="https://www.youtube.com/embed/bKTrjd3BlNQ?rel=0" frameborder="0" allowfullscreen></iframe>

<br /><br />

<p>My Compaq Evo T20 running tinycore linux, playing shell.fm,
displaying track info via lcd4linux on a Pertelian X2o40 USB LCD display.</p>

<br />

<iframe width="560" height="349" src="https://www.youtube.com/embed/1EQNPFSNS_A?rel=0" frameborder="0" allowfullscreen></iframe>

<br /><br />

<p>Uses music software <a href="https://reaper.fm">Reaper</a>
to play audio and generate MIDI events. Midi events are sent to the 'output' of
<a href="https://www.midiox.com/myoke.htm">MIDI Yoke</a>, which patches them to a
software emulated MIDI input.
Used the <a href="https://www.midiox.com/">MIDIOX</a> COM wrapper with Visual Basic,
to monitor the MIDI Yoke input and trigger http downloads on certain MIDI note events.
Wrote a sinatra server in Ruby that sends signals to the K8055 USB board
(via my <a href="https://github.com/ndbroadbent/rubyk8055">Ruby driver wrapper</a>) for certain http requests.</p>
