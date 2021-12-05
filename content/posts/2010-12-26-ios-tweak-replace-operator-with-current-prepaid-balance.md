---
comments: true
date: 2010-12-26T16:42:16Z
tags: ["projects", "iphone", "jailbreak"]
title: iOS JB tweak - Replace operator with current prepaid balance
url: /2010/12/26/ios-tweak-replace-operator-with-current-prepaid-balance/
wordpress_id: 300
wordpress_url: http://www.f-77.com/?p=300
---

<a href="https://github.com/ndbroadbent/ios_replace_operator_with_balance"><strong>https://github.com/ndbroadbent/ios_replace_operator_with_balance</strong></a>

Replace Operator on jailbroken iOS 4.x with current prepaid balance.
Specifically written for PCCW in Hong Kong, with an AT+CUSD command of “##122#”.

An extension to <a href="https://github.com/NSPwn/Fake-Operator">Fake-Operator</a>

Credit to <a href="http://george.insideiphone.com/index.php/2007/11/25/a-convenient-tool-to-send-at-commands">this site</a> for the source code of sendmodem.

<img class="lightbox thumb" src="/images/posts/2010/12/photo.png" alt="BalanceAsOperator screenshot" />

<strong>Install</strong>

Download the .deb package from the <a href="https://github.com/ndbroadbent/ios_replace_operator_with_balance">‘Downloads’ page on github</a>, and install with $ dpkg -i &lt;&lt; package &gt;&gt;.deb

<strong>How it works</strong>

Package contains an executable binary that sends an AT USSD command to the carrier, which returns the balance message. Program then replaces the carrier name in the top left corner with the parsed balance. It does this by altering the com.nspwn.fakeoperatorpreferences plist, and then notifying FakeOperator to update SpringBoard.

Also includes a launchd script that schedules the program to be executed every half hour.

<strong>Tags</strong>

This project might also be useful if you need to learn how to:

- Compile an iPhone program for iOS 4.1/4.2
- Run a script or application on iOS 4.1/4.2 at a scheduled interval (with launchd)
- Send AT commands to the iPhone/iPad modem (programmatically send SMS/dial numbers/etc)
- Write plist files to alter preferences for another application

<strong>Why</strong>

My carrier (PCCW) doesn’t believe in sending SMS alerts when my balance is about to, or even has, run out. I’ve emailed them about it, but thats just the way it is. So I thought this would be a better alternative to getting a new number.

Would be happy to help anyone alter this for their own carriers, if requested. However, some operators do weird stuff like SMS every time you send an AT command like this, so that would be annoying.
