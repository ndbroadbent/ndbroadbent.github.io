---
comments: true
date: 2011-01-07T07:23:48Z
tags: ["bash", "iphone", "jailbreak"]
title: Add .bashrc to iPhone for SSH or MobileTerminal
url: /2011/01/07/add-bashrc-to-iphone/
wordpress_id: 325
wordpress_url: http://www.f-77.com/?p=325
---

When you SSH into your iPhone, or if you use MobileTerminal, you might want to use some of the aliases or functions that you're used to.

To do this:

<ol>
	<li>Create and edit your ".bashrc" file at "/var/root/.bashrc"</li>
	<li>Add the following line to "/etc/profile":</li>
</ol>

{{< highlight bash >}}
source /var/root/.bashrc
{{< / highlight >}}

An example alias would be: alias respring="killall SpringBoard"

Colored prompts look great in MobileTerminal too.

<a href="https://github.com/ndbroadbent/ubuntu_config/blob/master/assets/iphone_bashrc.sh">This is the bashrc that I use on my iPhone.</a>
