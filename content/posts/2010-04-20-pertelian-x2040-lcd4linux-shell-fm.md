---
comments: true
date: 2010-04-20T13:19:42Z
tags: ["compaq-evo-t20", "lcd4linux", "linux", "shell-fm"]
title: Pertelian X2040, lcd4linux, shell-fm
url: /2010/04/20/pertelian-x2040-lcd4linux-shell-fm/
wordpress_id: 25
wordpress_url: http://nathanf77.wordpress.com/?p=25
---

I received my Pertelian X2040, and had a bit of trouble getting it work on my 64bit Ubuntu machine.
The characters were getting all mixed up. 
I gave up on my 64bit machine and decided to focus my efforts on the T20 running tinycore.

To get <a href="http://lcd4linux.bulix.org/">lcd4linux</a> running on tinycore with any lcd screen,
you need the dbus, usbutils and usb-serial packages installed.

At first, lcd4linux was asking me for mysql, and then sqlite, and those are pretty hefty
packages for a little thin client. So before you compile lcd4linux,
do this if you just want the fifo and exec plugins (substitute for your requirements):

{{< highlight bash >}}
./configure --with-plugins=fifo,exec --with-drivers=Pertelian
{{< / highlight >}}

(also keep in mind the suggested compiling flags from the
<a href="http://wiki.tinycorelinux.com/tiki-index.php?page=Creating+Extensions">"Creating an Extension"</a>
page on the tinycore wiki)

Will post some pics or video once I get it all working nicely.
I'm also really keen to build a nice varnished pine box to house my shell.fm player
(like the following guy from germany did..), with the LCD screen embedded.

<img style="width: 600px;" class="lightbox" alt="T20 Thin Client pine box made by Dominik Huber" src="/images/posts/2010/04/thinclient.jpg" />

P.S. I bought one of these <a href="http://usb.brando.com/prod_detail.php?prod_id=00666">super-tiny keyboards</a>
for my T20 projects. So fun.

<img alt="Super Tiny USB Keyboard" src="/images/posts/2010/04/supertiny-keyboard.jpg" />
