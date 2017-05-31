---
comments: true
date: 2010-04-25T13:55:31Z
tags: ["lcd4linux", "ruby"]
title: Hacking DSP-420 LCD displays
url: /2010/04/25/my-job-is-sweet/
wordpress_id: 30
wordpress_url: http://nathanf77.wordpress.com/?p=30
---

I recently found a bunch of<a href="http://www.barcode-manufacturer.com/pole_display/customer_display/dsp400.html"> DSP-420 LCD displays</a>, like the ones that you see on POS terminals in grocery stores. After a fruitless battle with the proprietary protocol of an LED wallboard (that I also found at work :) ), it was good to find so much protocol documentation on these little displays. I had it up and running within a few hours, displaying the artist, title and track length from shell.fm. (<a href="http://github.com/ndbroadbent/shell-fm_dsp420lcd">Started a github repo for the code too</a>.)

My friend suggested hacking the USB -&gt; Serial adapter I had, and using 5v from the USB port to power the device itself. It works brilliantly. With the same friend, we're also in the process of designing and etching a PCB for an 8 channel relay board, to be attached to my K8055, I'll post a bit about that next..

