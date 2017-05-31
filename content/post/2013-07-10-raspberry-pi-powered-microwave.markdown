---
comments: true
date: 2013-07-10T23:51:47Z
tags: raspberry-pi microwave kitchen appliances projects ruby rails sinatra linux
  videos electronics home-automation c
title: Raspberry Pi Microwave
url: /2013/07/10/raspberry-pi-powered-microwave/
---

A few months ago, I was inspired by [this post](http://www.reddit.com/r/CrazyIdeas/comments/1djrnx/food_items_should_have_qr_codes_that_instruct_the/) on Reddit, titled: <strong>Food items should have QR codes that instruct the microwave exactly what to do. Like high for 2 minutes, let stand 1 minute, medium 1 minutes.</strong>.

I thought this was a pretty cool idea, and that it would be a fun project for a Raspberry Pi. I agreed with the people who thought using UPC barcodes would be better, since products already have them, so I went with a barcode scanner + online product database.

Here's a summary of the features that I've added to my microwave:

* Re-designed touchpad
* Nicer sounds
* Clock is automatically updated from the internet
* Can be controlled with voice commands
* Can use a barcode scanner to look up cooking instructions from an online database
* There weren't any online microwave cooking databases around, so I made one: [http://microwavecookingdb.com](http://microwavecookingdb.com)
* The microwave has a web page so you can control it from your phone (why not), and set up cooking instructions for products
* Tweets after it's finished cooking something (See [https://twitter.com/rbmicrowave](https://twitter.com/rbmicrowave))

## Demo Video

<iframe width="100%" height="400" src="//www.youtube.com/embed/e2YtARzJTys" frameborder="0" allowfullscreen></iframe>


## Using a Raspberry Pi to cook a Raspberry Pie

[Here's the recipe](http://frugalfastfun.blogspot.co.nz/2009/08/surprise-pies-using-microwave.html).

<img class="lightbox thumb" src="/images/posts/2013/07/ingredients-resized-thumb.jpg" alt="Raspberry Pie Ingredients" />
<img class="lightbox thumb" src="/images/posts/2013/07/mixing-resized-thumb.jpg" alt="Raspberry Pie Mixing" />
<img class="lightbox thumb" src="/images/posts/2013/07/cooking_pie_filling-resized-thumb.jpg" alt="Raspberry Pie Cooking" />
<img class="lightbox thumb" src="/images/posts/2013/07/raspberry_pi_raspberry_pie-resized-thumb.jpg" alt="Raspberry Pi - Raspberry Pie" />
<img class="lightbox thumb" src="/images/posts/2013/07/a_slice_of_pi-resized-thumb.jpg" alt="A slice of Pi" />

<hr/>

### Keep reading below if you're interested in electronics or software:


## Hardware

I used a microwave with a touchpad, and discovered that the touchpad was a button matrix. I took photos of the touchpad and traced the wires, so that I could tell which pins corresponded to which buttons.

<img class="lightbox thumb" src="/images/posts/2013/07/touchpad_no_traces-resized-thumb.jpg" alt="Touchpad" />
<img class="lightbox thumb" src="/images/posts/2013/07/touchpad_traces-resized-thumb.jpg" alt="Touchpad Traces" />
<img class="lightbox thumb" src="/images/posts/2013/07/original_touchpad-resized-thumb.jpg" alt="Original Touchpad UI" />


I initially wanted to put everything in a case outside the microwave, but I decided that it would be more challenging and fun to try and fit everything inside. Here's all the PCB revisions, before I settled on a design that would fit neatly on top of the microwave's original PCB.

<img class="lightbox thumb" src="/images/posts/2013/07/pcb_1-resized-thumb.jpg" alt="PCB revision 1" />
<img class="lightbox thumb" src="/images/posts/2013/07/pcb_2-resized-thumb.jpg" alt="PCB revision 2" />
<img class="lightbox thumb" src="/images/posts/2013/07/pcb_3-resized-thumb.jpg" alt="PCB revision 3" />

I used shift registers and optocouplers to control the touchpad pins. To listen for touchpad presses, an output shift register scans one line at a time on the first touchpad layer, and an input shift register listens for connections to the second layer.

I unsoldered the touchpad connector from the original circuit board, and replaced it with a row of pin headers. I then used the original touchpad connector on my PCB, so that my circuit acts as a kind of proxy for button presses.

Here's the final product after transferring toner, etching, drilling, and soldering. (I had to use the ribbon cables to save space.)

<img class="lightbox thumb" src="/images/posts/2013/07/ready_to_etch-resized-thumb.jpg" alt="Ready to Etch" />
<img class="lightbox thumb" src="/images/posts/2013/07/soldered-resized-thumb.jpg" alt="Everything Soldered" />
<img class="lightbox thumb" src="/images/posts/2013/07/pcb_bottom-resized-thumb.jpg" alt="PCB Bottom" />

And here's how it fits on top of the microwave controller:

<img class="lightbox thumb" src="/images/posts/2013/07/plugged_in1-resized-thumb.jpg" alt="Plugged In" />
<img class="lightbox thumb" src="/images/posts/2013/07/plugged_in2-resized-thumb.jpg" alt="Plugged In" />

When I peeled off the old touchpad overlay, it became wrinkled and ugly, so I thought I may as well have a go at redesigning the interface. My goal was to get rid of the features I don't really use, and make the basic functions more convenient. The top two rows of buttons are now dedicated to "one touch" cooking times, for either "high" or "medium" power. You can also set the time and power manually.

<img class="lightbox" width="145" src="/images/posts/2013/07/touchpad-resized-thumb.jpg" alt="Touchpad" />

You might have noticed that I started the project with the intention of using an [Arduino Nano](http://arduino.cc/en/Main/ArduinoBoardNano) plugged into a Raspberry Pi USB port. This was because I was a) familiar with the Arduino, b) not familiar with the Raspberry Pi GPIO, and c) thought it would make testing and debugging a bit easier, since I could just plug the Arduino into my laptop.

However, it turns out that my Raspberry Pi had some issues with the arduino's FTDI chip if the Raspberry Pi was turned on while the Arduino was plugged in. It wouldn't recognize the Arduino until I unplugged it, and then plugged it back in again.

So I decided to make an Arduino Nano =&gt; Raspberry Pi GPIO adapter, and port my Arduino code to the Raspberry Pi GPIO using the [WiringPi](http://wiringpi.com/) library.

<img class="lightbox thumb" src="/images/posts/2013/07/arduino_raspberry_adapter-resized-thumb.jpg" alt="Arduino to Raspberry Pi adapter" />
<img class="lightbox thumb" src="/images/posts/2013/07/raspberry_adapter_top-resized-thumb.jpg" alt="Arduino to Raspberry Pi adapter" />
<img class="lightbox thumb" src="/images/posts/2013/07/raspberry_adapter_bottom-resized-thumb.jpg" alt="Arduino to Raspberry Pi adapter" />
<img class="lightbox thumb" src="/images/posts/2013/07/raspberry_adapter_connected-resized-thumb.jpg" alt="Arduino to Raspberry Pi adapter" />


The Raspberry Pi is powered by a USB hub, which is also plugged into the Raspberry Pi's USB port. To power the hub, I wired up a power adapter to the microwave's power source. There's also a USB powered speaker, USB microphone, wifi adapter, and barcode scanner.

<img class="lightbox thumb" src="/images/posts/2013/07/power_adapter-resized-thumb.jpg" alt="Power adapter" />
<img class="lightbox thumb" src="/images/posts/2013/07/usb_hub-resized-thumb.jpg" alt="USB Hub" />
<img class="lightbox thumb" src="/images/posts/2013/07/microphone_wifi-resized-thumb.jpg" alt="Microphone + Wifi" />


## Microwave Software

All the software running on the Raspberry Pi is hosted at: [https://github.com/ndbroadbent/raspberry_picrowave](https://github.com/ndbroadbent/raspberry_picrowave).

There are 4 main components:

### Microwave Daemon

This runs the code that listens for touchpad button presses, and controls the microwave. It also accepts TCP connections so that other programs can send commands or request information about the microwave's status.

### Barcode Instructions

This program listens to the barcode scanner, and requests product information from the Microwave Cooking Database. It also runs the cooking programs.

### Voice Control

I used [PocketSphinx](http://cmusphinx.sourceforge.net/) for voice recognition, which worked very well with my small [corpus](https://github.com/ndbroadbent/raspberry_picrowave/blob/master/voice_control/corpus.txt). I embedded Ruby in the [pocketsphinx_contiunous](https://github.com/ndbroadbent/raspberry_picrowave/blob/master/voice_control/pocketsphinx_microwave.c) C program, so that it would be easier to [script voice commands](https://github.com/ndbroadbent/raspberry_picrowave/blob/master/voice_control/voice_control.rb) and send commands to the microwave daemon. It turns out that the acoustics of my kitchen seem to mess up the recognition, so it won't be used very often.

### Sinatra App

There's a simple [sinatra web application](https://github.com/ndbroadbent/raspberry_picrowave/blob/master/sinatra_app/microwave_webapp.rb) that lets you control the microwave from your phone or computer. This may not be a big selling point. It uses a [JavaScript EventSource](https://github.com/ndbroadbent/raspberry_picrowave/blob/master/sinatra_app/public/application.js) to push updates to the browser, so you could have hundreds of users connected to your microwave at once.

If any barcodes are scanned that can't be found on the Microwave Cooking Database, this webpage will display the unknown barcodes and provide a link to add the new product.


## Microwave Cooking Database

I couldn't find any existing websites with a database of microwave cooking instructions, so [I made one](http://www.microwavecookingdb.com/).

<a href="http://www.microwavecookingdb.com" target="_blank">
  <img src="/images/posts/2013/07/mwcdb-resized-post.png" alt="Microwave Cooking Database" />
</a>

If cooking instructions are posted for a 1000W microwave, you can request the instructions for a 700W microwave, and the cooking times will be automatically adjusted.

So if you're also planning on making an internet connected microwave with a barcode scanner, please feel free to sign up and add some products.


## Patents?

Nope, this is just a fun project. [Microwaves with barcode scanners already exist](http://www.amazon.com/Beyond-WBYMW1-850-Watt-Microwave-Scanning/dp/B0000C8W7Z/ref=cm_cr_pr_product_top), and [most](http://www.google.com/patents/US4323773) of these [features](http://www.google.com/patents/US6124583) are [already](http://www.google.com/patents/US6444965) [patented](http://www.google.com/patents/EP1117275A2?cl=en).


## Thanks for reading!

I'd be interested to hear if you do something similar, or make use of [http://www.microwavecookingdb.com](http://www.microwavecookingdb.com).
