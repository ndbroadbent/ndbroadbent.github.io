---
comments: true
date: 2010-04-29T10:39:42Z
tags: ["bluetooth", "guides", "linux", "ubuntu-9.10"]
title: How to use a bluetooth headset on Ubuntu 9.10 +
url: /2010/04/29/how-to-use-a-bluetooth-headset-on-ubuntu-9-10/
wordpress_id: 40
wordpress_url: http://nathanf77.wordpress.com/?p=40
---

I found a little bluetooth headset at work, and wanted to play audio through it from my laptop. It turns out that nowadays, Ubuntu actually makes this really easy.

I found a guide written for Ubuntu 9.04 on <a href="http://forums.overclockers.com.au/showthread.php?t=780054">this forum post</a>, but Ubuntu 9.10 now does most of the work for you. (Steps 15 through 27 are still used in this guide, so credit to <a href="http://forums.overclockers.com.au/member.php?s=3b3d3beb07f6dadf978042eec4a64034&amp;u=1635">HyRax1</a> from <a href="http://forums.overclockers.com.au">forums.overclockers.com.au</a> for the original tutorial)

Bluetooth must already be configured, and your headset must be paired with your machine first. The headset must also be turned on and connected while you follow these steps. Ubuntu should automatically create bluez audio devices for you in PulseAudio.

These are the steps that worked for me. YMMV with other headset brands/models.
<ol>
	<li>Install PulseAudio utils :  $ sudo apt-get install paprefs paman padevchooser</li>
	<li>Once installed, go to Applications-&gt;Sound &amp; Video-&gt;PulseAudio Device Chooser. This will add a black microphone jack icon to your system tray.</li>
	<li>Do a left-click on the jack icon and a menu appears. In this menu, choose "Manager". A new window appears.</li>
	<li>If it's not already connected, click on the "Connect" button to connect to your local PulseAudio server. When connected, you will see details about it listed.</li>
	<li>Click on the Devices tab. Under "Sinks" you should see an entry for "bluez_sink.XX_XX_XX_XX_XX_XX".</li>
	<li>Click 'properties' for the 'bluez_sink' device. Highlight the "Name:" of the device (you can do this with a triple-leftclick of your mouse), and press Ctrl+C.</li>
	<li>Now go to the Sample Cache tab. You are shown a list of sounds. Choose an OGG file from this list. At the bottom is a "Playback on" drop-down. Choose "bluez_sink.XX_XX_XX_XX_XX_XX" from this list and click on the Play button. You should hear a Ubuntu system sound through your speakers. This proves to us that PulseAudio can play through your Bluetooth headset (but this is NOT the redirection - this is just a test).</li>
	<li>Close the PulseAudio Manager.</li>
	<li>Do another left-click on the mic jack icon in your system tray.</li>
	<li>Go to "Default Sink" and then choose "Other" from the sub-menu. A window appears.</li>
	<li>In this window, press Ctrl+V to paste the device name that we copied earlier, and click OK.</li>
	<li>Play a sound from somewhere, eg: MP3 or movie in Totem. You should now hear your audio coming through your Bluetooth headset! <em>NOTE: Existing audio streams at the time of changing the sink will continue to play through whatever they were playing through until stopped and started again.</em></li>
	<li>To switch back to your speakers, simply click on the mic jack icon again, choose "Default Sink" and choose "Default" from the sub-menu. The next audio stream played will go back through your speakers.</li>
	<li>To make the PulseAudio Device Chooser start automatically on startup, click on the mic jack icon again, choose Preferences from the menu and then click on "Start applet on Session Login" in the window.</li>
	<li>Enjoy! <img title="Stick Out Tongue" src="http://forums.overclockers.com.au/images/smilies/tongue.gif" border="0" alt="" /></li>
</ol>
Also note: Any application (including Skype) <strong>should</strong> be able to play audio through the headset if you follow these steps. If you want to use Skype, you will also need to set up the mic on the headset by following the same steps to configure the bluez source device (‘bluez_source.XX…’) as the 'Default Source'.

I was able to record and playback audio fine with Audacity, and a test call on Skype worked fine.

