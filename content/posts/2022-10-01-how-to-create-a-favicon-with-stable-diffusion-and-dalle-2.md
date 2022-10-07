---
comments: true
date: 2022-10-01T18:41:13Z
tags:
  [
    "web-design",
    "favicon",
    "art",
    "logo",
    "ai",
    "midjourney",
    "stable-diffusion",
    "dalle-2",
  ]
title: "Creating a new favicon with text-to-image AI"
url: /2022/10/01/how-to-create-a-favicon-with-stable-diffusion-and-dalle-2/
---

It's been a while since [I wrote a blog post about creating a `favicon.ico` file for your website or blog.](https://madebynathan.com/2010/05/20/how-to-create-a-favicon-ico-with-gimp/) Things have changed a bit since I wrote that blog post in May 2010.

I've been updating the CSS for my blog recently, and I wanted to update the favicon. Here's the old green square icon that I was using before:

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/old_favicon.jpg" alt="My old green square favicon" />

<br/>

I didn't like this one anymore and I wanted something a bit more interesting, so I wanted to see if I could use some of the new text-to-image AI tools that have been blowing up on the internet. I used [Midjourney](https://www.midjourney.com/home/) and [DALL·E 2](https://openai.com/blog/dall-e/). (Midjourney uses [Stable Diffusion](https://stability.ai/blog/stable-diffusion-public-release).)

<hr style="margin: 50px 0;" />

I played around with some different prompts in Midjourney and DALL·E 2, and I iterated on a few different ideas. I enjoy spending time in Midjourney's shared Discord channels (e.g. `#general-4`), where you can see what other people are doing and get some inspiration for prompts.

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/midjourney_discord_shared_chat.jpg" alt="Midjourney shared chat channel general-4" />

Here's a few examples of the prompts that I was trying:

---

> _website favicon logo, circuit board PCB design, vector, SVG, blue purple gradient, hexagon, bolt and tools icon_

---

> _small favicon logo for a blog website, circuit board pattern, electronics, vector, epic ultra wide aerial shot from atmosphere, cool gradients, ultra high contrast, blue background, psychedelic color, vortex, hyperrealism, intricate details, cinematic lighting_

Here's some of the images that I generated using DALL·E 2:

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/dalle_library.jpg" alt="Collection of images from Dalle 2" />

And here's some from Midjourney:

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/midjourney_library.jpg" alt="Collection of images from Midjourney" />

There's a lot of garbage in there, so it's not a "one-click" process by any means. I've realized that you have to be a pretty good designer and have a very good eye if you want to get some truly great images. I'm not very good at design, and unfortunately that means that I'm not a very good "AI prompt engineer" either. But you can get better at this with practice, and the AIs will keep getting better too.

I eventually found some shapes and colors that looked pretty cool, so I generated some variations, and then some variations of variations using the Midjourney Discord Bot.

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/midjourney_discord.jpg" alt="Variations on a shape" />

Eventually I settled on this one. It kind of looks like an abstract "N". I tweaked the colors and contrast a little bit in [GIMP](https://www.gimp.org/).

<p class="text-center">
<img class="lightbox thumb" src="/images/posts/2022/10/favicon/final_logo.png" alt="I settled on this gradient and shape" style="max-width: 140px; margin: 50px;"/>
</p>

I used [realfavicongenerator.net](https://realfavicongenerator.net) to generate a favicon package with lots of different sizes and (mostly unnecessary) features.

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/realfavicongenerator_net.jpg" alt="realfavicongenerator.net is awesome. I use them for all my websites." />

They provided the HTML to include in the `<head>` tag.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#603cba" />
<meta name="theme-color" content="#ffffff" />
```

<hr style="margin: 50px 0;" />

So here's my new favicon:

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/new_favicon.jpg" alt="My new favicon" />

<br/>

I was curious to see how long it would take me to create a new favicon using AI, so I started a timer before I began. It took me 47 minutes and 23 seconds.

<img class="lightbox thumb" src="/images/posts/2022/10/favicon/total_time.jpg" alt="Total time: 47 minutes and 23 seconds" />

Then it took me a few hours to write up this blog post. I hope you enjoyed it!

<hr style="margin: 50px 0;" />

P.S. Here's one I didn't end up using, in case you want it:

<p class="text-left">
<img class="lightbox thumb" src="/images/posts/2022/10/favicon/wet_bectolon.jpg" alt="WET BECTOLON" style="max-width: 360px;" />
</p>

### Wet Bectolon. _Crdoruf Ptaogoatuy_

([wetbectolon.com](wetbectolon.com) is available!)
