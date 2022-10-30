---
categories: []
date: 2022-10-30T04:07:28Z
tags: ["electronics", "projects"]
title: "Organizing 1,700 Resistors in a Ring Binder"
---

I used a ring binder and card sleeves to organize 1,700 through-hole resistors.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/10k-to-51k.jpg" alt="Resistors from 10K to 51K ohms" />

You can use this PDF to make your own ring binder:

<iframe style="width: 100%; height: 500px;" src="/post-assets/2022/10/E24_Resistor_Kit_Folder.pdf"></iframe>

<br/>

- [Download E24_Resistor_Kit_Folder.pdf](/post-assets/2022/10/E24_Resistor_Kit_Folder.pdf)
- [Github Gist with Liquid and SCSS code](https://gist.github.com/ndbroadbent/b33a2d72a13549d01c39d10a96b97880)

> The template code and generated PDF document are released under the MIT license. You can find a copy of the MIT license at the bottom of this page.

---

### Supplies

- Color printer
- Ring binder
- Ring binder sheets
- Card sleeves ([Sleeve Kings](https://www.amazon.com/Sleeve-Kings-Card-Sleeves-63-5x88mm/dp/B07RD9QZD2) or similar)
- Glue stick

### Instructions

1. Print the PDF
2. Insert pages into ring binder sheets
3. Glue card sleeves to ring binder sheets in a 3x3 grid
4. Insert resistors into card sleeves

<br/>

---

## Introduction to Resistors

[Resistors](https://en.wikipedia.org/wiki/Resistor) are a fundamental component in electronics. They are used to limit the current flowing through a circuit, or to change the voltage of a circuit. They are also used to create a voltage divider, which is a circuit that divides the voltage of a circuit into two parts.

Resistors have colored bands that represent their value. The first two bands represent the first two digits of the resistance, and the third band represents the "multiplier" value, or power of 10. For example, a 10K resistor has a brown band, a black band, and a red band. The first two bands are brown and black, which is 10. The third band is red, which is 10^2, so the resistance is 10,000 ohms.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/Resistor_Color_Code.jpg" alt="Resistor color codes" />

The "tolerance" value is the fourth band. This is the maximum deviation from the nominal resistance. For example, a 10K resistor with a 5% tolerance can have a resistance between 9,500 ohms and 10,500 ohms.

## The E24 Series

The [E24 series](https://en.wikipedia.org/wiki/E_series_of_preferred_numbers) is a logarithmic series of 24 values for each power of 10: 1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1.

You can multiply each value in the series by the multiplier (power of 10) to get the 24 resistance values for each order of magnitude. For example, these are the first ten resistor values with a red multiplier band (10<sup>2</sup>): 100Ω, 110Ω, 120Ω, 130Ω, 150Ω, 160Ω, 180Ω, 200Ω, 220Ω, 240Ω.

<br/>

## Buying an Unsorted Pack of 1,700 Resistors

I bought a resistor pack that included 1,700 resistors in the E24 series, in sets of 10 (170 different values.) I bought 1/4W carbon film resistors with a 5% tolerance.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/resistor-kit.jpg" alt="Pack of carbon film resistors" />

It's very useful to have a wide range of resistors for breadboard circuits and prototype PCBs. It's not so useful when they're all mixed together in a single bag. The resistor sets didn't even have any labels or markings, so I had to read the colored bands or use a multimeter to figure out the resistance.

For my first attempt at organizing them, I sorted them by the multiplier band (0.1 ohms, 1 ohm, 10 ohms, etc.), and put them in labeled drawers:

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/original-labeled-drawers.jpg" alt="The original drawers I used to organize the resistors" />

This didn't really help at all. I still needed to sort through 24 different values to find the one I was looking for. It got even worse once I started pulling out individual resistors to use in breadboard circuits. Instead of 24 sets of 10, I could have up to 240 individual resistors to sort through.

## Other Options

I found some ring binders for sale that had pre-sorted resistors, but they were a bit expensive. Here's a few examples (in New Zealand dollars):

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/through-hole-resistor-kit-245.jpg" alt="$245 NZD for a ring binder of sorted resistors" />

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/through-hole-resistor-kit-504.jpg" alt="$504 NZD for a ring binder of sorted resistors" />

## Making My Own Ring Binder

I thought I would be fun to make my own ring binder. I had some spare card sleeves, and I realized that I could use these to create a 3x3 grid of pockets on an A4 ring binder sheet.

I used [DocSpring](https://docspring.com) to create the layout for all the pages. DocSpring is an API for filling out and generating PDFs. You can upload an existing PDF form, or create your own PDF templates using HTML and CSS. DocSpring's HTML/CSS templates support the [Liquid template language](https://shopify.github.io/liquid/), so I wrote some Liquid code to calculate the resistor values and generate all the pages for the E24 series.

> (Disclaimer: I'm the founder of DocSpring.)

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/docspring-template-html-screenshot.jpg" alt="Screenshot of the DocSpring template editor showing Liquid / HTML" />

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/docspring-template-scss-screenshot.jpg" alt="Screenshot of the DocSpring template editor showing SCSS" />

> This template didn't need any fields, so I didn't need to use the DocSpring API. I just downloaded the generated PDF from the Preview tab.

I included a resistor graphic that shows the colored bands for each value. This was invaluable when I was sorting resistors into sleeves.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/pdf-template-example.jpg" alt="Screenshot of the DocSpring template editor showing SCSS" />

I used [Sleeve Kings 63.5mm X 88mm Card Sleeves](https://www.amazon.com/Sleeve-Kings-Card-Sleeves-63-5x88mm/dp/B07RD9QZD2) for the 3x3 grid of pockets.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/sleeve-kings-card-sleeves.jpg" alt="Sleeve Kings 63.5mm X 88mm Card Sleeves" />

I cut them to make them a little shorter, and stuck them onto ring binder sheets using a glue stick. Then I sorted all the resistors into sleeves, which felt like doing a jigsaw puzzle. It was a fun activity for a rainy Sunday afternoon.

I'm pretty happy with how this turned out, and I think my version is even better than the expensive ring binders I found for sale. The PDF and code are MIT licensed, so anyone is more than welcome to use this for personal or commercial purposes.

- [Github Gist with Liquid and SCSS code](https://gist.github.com/ndbroadbent/b33a2d72a13549d01c39d10a96b97880)
- [Try a DocSpring demo with this template](https://docspring.com/templates/tpl_GP7fTnpFzJmbeJHzR7/edit)
- [Sign up for a free DocSpring trial account to customize the template](https://docspring.com/sign_up?library_template_id=ltp_AQbEsdhD4Ksf6mYLXD)

## Finished Ring Binder

<div class="ring-binder-gallery">
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page00.jpg" alt="Finished ring binder with sorted resistors - Closed Folder" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page01.jpg" alt="Finished ring binder with sorted resistors - Page 1" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page02.jpg" alt="Finished ring binder with sorted resistors - Page 2" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page03.jpg" alt="Finished ring binder with sorted resistors - Page 3" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page04.jpg" alt="Finished ring binder with sorted resistors - Page 4" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page05.jpg" alt="Finished ring binder with sorted resistors - Page 5" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page06.jpg" alt="Finished ring binder with sorted resistors - Page 6" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page07.jpg" alt="Finished ring binder with sorted resistors - Page 7" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page08.jpg" alt="Finished ring binder with sorted resistors - Page 8" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page09.jpg" alt="Finished ring binder with sorted resistors - Page 9" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page10.jpg" alt="Finished ring binder with sorted resistors - Page 10" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page11.jpg" alt="Finished ring binder with sorted resistors - Page 11" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page12.jpg" alt="Finished ring binder with sorted resistors - Page 12" />
  </div>
</div>

<script>
    $('.ring-binder-gallery').slick({
      dots: true,
      arrows: true
    });
</script>

<br />
<br />

P.S. Digi-Key's [Resistor Color Code Calculator](https://www.digikey.co.nz/en/resources/conversion-calculators/conversion-calculator-resistor-color-code) was very useful. It's a great tool for quickly looking up resistor values.

<img class="lightbox thumb" src="/images/posts/2022/10/e24-resistors-ring-binder/digikey-calculator.jpg" alt="DigiKey's 4 Band Resistor Color Code Calculator" />

# MIT License

```
Copyright 2022 Nathan Broadbent. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this PDF document, software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE PDF AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
