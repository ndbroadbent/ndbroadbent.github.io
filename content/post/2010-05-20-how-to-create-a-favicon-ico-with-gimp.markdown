---
comments: true
date: 2010-05-20T13:19:13Z
tags: gimp guides web-design
title: How to create a favicon.ico with GIMP
url: /2010/05/20/how-to-create-a-favicon-ico-with-gimp/
wordpress_id: 85
wordpress_url: http://nathanf77.wordpress.com/?p=85
---

<strong>UPDATE</strong>: Theres an easier way to do this here: <a href="http://www.htmlcenter.com/blog/creating-a-favicon-for-your-website/">http://www.htmlcenter.com/blog/creating-a-favicon-for-your-website/</a>.

<a href="http://linuxproblem.org/art_19.html">http://linuxproblem.org/art_19.html</a>

By<strong> <a href="http://linuxproblem.org/auth_1.html">Mathias Kettner</a> </strong>:

You need an image file that GIMP can open (PNG, GIF, etc.). And you need the command line tool <code>ppmtowinicon</code> from the <code>netpbm</code>-tools (on SuSE you have to have installed the package <code>netpbm</code>). Now perform the following actions:

<ul>
<li>Open your image with GIMP.</li>
<li>If your image is not a square then resize the canvas with GIMP.</li>
<li>Scale the image to 16x16 pixel (Image, Scale image).</li>
<li>Choose <em>File, save as..</em> and save as <code>favicon.ppm</code> with <em>raw</em> encoding.</li>
<li>Close GIMP</li>
<li>Convert <code>favicon.ppm</code> using the command line utility <code>ppmtowinicon</code>:
</ul>

{{< highlight bash >}}
ppmtowinicon -output favicon.ico favicon.ppm
{{< / highlight >}}


That's all. Now copy your <code>favicon.ico</code> to the document root of Apache, for example to <code>/srv/www/htdocs/favicon.ico</code>, if you are using SuSE Linux &gt;= 8.1.

