---
comments: true
date: 2010-11-05T20:10:37Z
tags: ["compaq-evo-t20", "linux", "ruby", "electronics", "home-automation"]
title: RFID apartment lock (& iPhone app)
url: /2010/11/05/octopus-card-door-lock/
wordpress_id: 104
wordpress_url: http://nathanf77.wordpress.com/?p=104
---

[Octopus cards](http://en.wikipedia.org/wiki/Octopus_card) in Hong Kong can be used to purchase almost anything, such as groceries, McDonalds, and public transport. Since everyone has one, a lot of apartments are using them for access control.

One of my first projects after moving back to Hong Kong was installing an electronic lock on my apartment door. My door can be now be unlocked with an Octopus RFID card, iPhone app, or over the web.

<br/>
<h3>Parts List</h3>
<ul>
	<li> Compaq Evo T20 thin client running linux (and Ruby!) (any dedicated PC would work too)</li>
</ul>
<ul>
	<li>USB Octopus Card Reader (Sony FeliCa ISO14443C)
<ul>
	<li>a <strong>14443C-R-USB-D2</strong> from <a href="http://www.rfidshop.com.hk/">http://www.rfidshop.com.hk/</a> under <strong>Passive RFID Reader</strong> → <strong>13.56Mhz</strong> → <strong>ISO14443C – Sony Felica</strong></li>
</ul>
</li>
	<li>Door with a lock that can be unlocked by turning the handle from the inside.</li>
	<li>12V central locking actuator from a car door.</li>
	<li>Vellman K8055 USB interface board</li>
	<li>Ruby octopus reader library, etc (<a href="http://github.com/ndbroadbent/octopus">http://github.com/ndbroadbent/octopus</a>)</li>
</ul>
<br/>

I wrote a small ruby library to read an octopus card ID (<a href="http://github.com/ndbroadbent/octopus">http://github.com/ndbroadbent/octopus</a>), using a USB RFID reader for the 13.56 MHz Sony FeliCa chip. I used a K8055 USB interface board to switch on a relay every time an authorized octopus card was recognized.

My apartment door lock is the "button" kind, with a button in the middle of the handle that pops out when the knob is turned from the inside. So I put a screw into the base of the handle, and mounted the actuator on the apartment door, so the actuator turns the handle and unlocks the door. Of course its not the most elegant solution, but the actuator was only about $7 USD...
It can only unlock the door, but I don't need it to lock automatically.

I added a web server, and wrote an iPhone app so that I can unlock the door via our wifi connection.
I've also added some more relays to control the house lights and ceiling fan.

Here's some photos of the lock and the iPhone app (sorry for the quality):

<br/>

<div class="gallery">
    <img class="lightbox thumb" src="/images/posts/2010/11/outside_door.jpg" alt="Outside Door - LCD Screen &amp; Octopus RFID Reader" />
    <img class="lightbox thumb" src="/images/posts/2010/11/compaq_evo_t20.jpg" alt="Compaq Evo T20 - TinyCore Linux" />
    <img class="lightbox thumb" src="/images/posts/2010/11/inside_door.jpg" alt="Lock - Inside Door" />
    <img class="lightbox thumb" src="/images/posts/2010/11/falt10C-screen.jpg" alt="Default LCD message" />
    <img class="lightbox thumb" src="/images/posts/2010/11/welcome_nathan.jpg" alt="RFID card scanned" />

    <img class="lightbox thumb" src="/images/posts/2010/06/IMG_0173.png" alt="Unlock Apartment 10C" />
    <img class="lightbox thumb" src="/images/posts/2010/06/IMG_0174.png" alt="Unlocking" />
    <img class="lightbox thumb" src="/images/posts/2010/06/IMG_0176.png" alt="Unlocked" />
    <img class="lightbox thumb" src="/images/posts/2010/06/IMG_0178.png" alt="Settings" />

</div>
