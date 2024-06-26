---
categories: []
date: 2022-10-30T04:07:28Z
tags: ["electronics", "projects"]
title: "Organizing 1,700 Resistors in a Ring Binder"
toc: true
---

I used a ring binder and card sleeves to organize 1,700 through-hole resistors.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/10k-to-51k.jpg" alt="Resistors from 10K to 51K ohms" />

You can use this PDF to make your own ring binder:

<iframe style="width: 100%; height: 500px;" src="/content/files/2022/10/E24_Resistor_Kit_Folder.pdf"></iframe>

<br/>

- [Download E24_Resistor_Kit_Folder.pdf](/content/files/2022/10/E24_Resistor_Kit_Folder.pdf)
- [Liquid and SCSS that was used to generate the PDF](https://gist.github.com/ndbroadbent/b33a2d72a13549d01c39d10a96b97880)

> The template code and generated PDF document are released under the MIT license. You can find a copy of the MIT license at the bottom of this page.

---

# What Are Resistors?

[Resistors](https://en.wikipedia.org/wiki/Resistor) are a fundamental component in electronics. They are used to limit the current flowing through a circuit. Resistors have colored bands that represent their value. The first two bands represent the first two digits of the resistance, and the third band represents the "multiplier" value, or power of 10. For example, a 10KΩ resistor has a brown band, a black band, and an orange band. The first two bands are brown (1) and black (0), which is 10. The third band is orange (1,000Ω), so the resistance is 10 x 1,000 = 10,000Ω.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/10k-resistor.jpg" alt="10,000 ohm resistor" style="max-width: 500px;" />

The "tolerance" value is the fourth band. This is the maximum deviation from the nominal resistance. For example, a 10KΩ resistor with a 5% tolerance can have a resistance between 9,500Ω and 10,500Ω.

<br/>
<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/resistor-color-chart.jpg" alt="Resistor color chart" style="max-width: 500px;" />

## The E24 Series

The [E24 series](https://en.wikipedia.org/wiki/E_series_of_preferred_numbers) is a logarithmic series of 24 values for each power of 10: 1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1.

You can multiply each value in the series by the multiplier (power of 10) to get the 24 resistance values for each order of magnitude. For example, these are the first ten resistor values with a brown multiplier band (10Ω): 100Ω, 110Ω, 120Ω, 130Ω, 150Ω, 160Ω, 180Ω, 200Ω, 220Ω, 240Ω.

<br/>

# How I Organized 1,700 Resistors

I bought a resistor pack that included 1,700 resistors in the E24 series, in sets of 10 (170 different values.) I bought 1/4 W carbon film resistors with a 5% tolerance.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/resistor-kit.jpg" alt="Pack of carbon film resistors" />

It's very useful to have a wide range of resistors for breadboard circuits and prototype PCBs. It's not so useful when they're all mixed together in a single bag. The resistors I bought didn't have any labels or markings on the paper strips, so I had to read the colored bands or use a multimeter to find the resistance.

For my first attempt at organizing them, I sorted them by the multiplier band (0.1Ω, 1Ω, 10Ω, etc.), and put them in labeled drawers:

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/original-labeled-drawers.jpg" alt="The original drawers I used to organize the resistors" />

This didn't really help at all. I still needed to sort through 24 different values to find the one I was looking for. It got even worse once I started pulling out individual resistors to use in breadboard circuits. Instead of 24 sets of 10, I could have up to 240 individual resistors to sort through.

## Ring Binder Design

I had some spare card sleeves, and I realized that I could use these to create a 3x3 grid of pockets on an A4 ring binder sheet.

I used [DocSpring](https://docspring.com) to create the layout for all the pages. DocSpring is an API for filling out and generating PDFs. You can upload an existing PDF form, or create your own PDF templates using HTML and CSS. DocSpring's HTML/CSS templates support the [Liquid template language](https://shopify.github.io/liquid/), so I wrote some Liquid code to calculate the resistor values and generate all the pages for the E24 series.

> (Disclaimer: I'm the founder of DocSpring.)

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/docspring-template-html-screenshot.jpg" alt="Screenshot of the DocSpring template editor showing Liquid / HTML" />

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/docspring-template-scss-screenshot.jpg" alt="Screenshot of the DocSpring template editor showing SCSS" />

> This template didn't need any fields, so I didn't need to use the DocSpring API. I just downloaded the generated PDF from the Preview tab.

I included a resistor graphic that shows the colored bands for each value. This was invaluable when I was sorting resistors into sleeves.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/pdf-template-example.jpg" alt="Screenshot of the DocSpring template editor showing SCSS" />

I used [Sleeve Kings 63.5mm X 88mm Card Sleeves](https://www.amazon.com/Sleeve-Kings-Card-Sleeves-63-5x88mm/dp/B07RD9QZD2?&linkCode=ll1&tag=ndbroadbent-20&linkId=b7ec66667342d933da70a72b98482f5f&language=en_US&ref_=as_li_ss_tl) for the 3x3 grid of pockets.

<a href="https://www.amazon.com/Sleeve-Kings-Card-Sleeves-63-5x88mm/dp/B07RD9QZD2?&linkCode=ll1&tag=ndbroadbent-20&linkId=b7ec66667342d933da70a72b98482f5f&language=en_US&ref_=as_li_ss_tl">
<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/sleeve-kings-card-sleeves.jpg" alt="Sleeve Kings 63.5mm X 88mm Card Sleeves" />
</a>

I cut them to make them a little shorter, and stuck them onto ring binder sheets using a glue stick. Then I sorted all the resistors into sleeves, which felt like doing a jigsaw puzzle. It was a fun activity for a rainy Sunday afternoon.

I'm pretty happy with how this turned out, and I think my version is even better than the expensive ring binders I found for sale. The PDF and code are MIT licensed, so anyone is more than welcome to use this for personal or commercial purposes.

- [Github Gist with Liquid and SCSS code](https://gist.github.com/ndbroadbent/b33a2d72a13549d01c39d10a96b97880)
- [Try a DocSpring demo with this template](https://docspring.com/templates/tpl_GP7fTnpFzJmbeJHzR7/edit)
- [Sign up for a free DocSpring trial account to customize the template](https://docspring.com/sign_up?library_template_id=ltp_AQbEsdhD4Ksf6mYLXD)

---

## Gallery: Finished Ring Binder

<div class="ring-binder-gallery">
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page00.jpg" alt="Finished ring binder with sorted resistors - Closed Folder" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page01.jpg" alt="Finished ring binder with sorted resistors - Page 1" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page02.jpg" alt="Finished ring binder with sorted resistors - Page 2" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page03.jpg" alt="Finished ring binder with sorted resistors - Page 3" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page04.jpg" alt="Finished ring binder with sorted resistors - Page 4" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page05.jpg" alt="Finished ring binder with sorted resistors - Page 5" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page06.jpg" alt="Finished ring binder with sorted resistors - Page 6" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page07.jpg" alt="Finished ring binder with sorted resistors - Page 7" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page08.jpg" alt="Finished ring binder with sorted resistors - Page 8" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page09.jpg" alt="Finished ring binder with sorted resistors - Page 9" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page10.jpg" alt="Finished ring binder with sorted resistors - Page 10" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page11.jpg" alt="Finished ring binder with sorted resistors - Page 11" />
  </div>
  <div>
    <img style="max-width: 100%" class="lightbox" src="/content/images/posts/2022/10/e24-resistors-ring-binder/ring-binder-photos/page12.jpg" alt="Finished ring binder with sorted resistors - Page 12" />
  </div>
</div>

<script>
    $('.ring-binder-gallery').slick({
      dots: true,
      arrows: true
    });
</script>

> This ring binder system makes it much easier to see when I need to order more resistors. (I've got some more 330, 360, 1K, and 1.1K ohm resistors on the way!)

<br />

---

# How To Organize Your Own Resistors

## Option 1: Buy Card Binder Sheets

After publishing this blog post, I found out that you can buy card binder sheets that already come with 9 pockets.
[You can purchase these on Amazon.](https://www.amazon.com/AmazonBasics-Sleeve-Protectors-Binder-Sheet/dp/B07PD7KBN5?&linkCode=ll1&tag=ndbroadbent-20&linkId=1e81f428ee077d3eaf75a8f274d88aa5&language=en_US&ref_=as_li_ss_tl)

<a href="https://www.amazon.com/AmazonBasics-Sleeve-Protectors-Binder-Sheet/dp/B07PD7KBN5?&linkCode=ll1&tag=ndbroadbent-20&linkId=1e81f428ee077d3eaf75a8f274d88aa5&language=en_US&ref_=as_li_ss_tl"><img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/amazon-9-sleeve-card-binder-sheets.jpg" alt="3x3 card binder sheets" style="max-width: 500px;" /></a>

<br/>

I found [another option that has some flaps at the top of each pocket](https://www.amazon.com/StoreSMART-Plastic-Binders-10-Pack-RMSTWPF-MEMRY-10/dp/B00JAIIMEY?th=1&psc=1&linkCode=ll1&tag=ndbroadbent-20&linkId=545fa3f02aa979f1e78f4b86105ac6a0&language=en_US&ref_=as_li_ss_tl).
This would prevent the resistors from falling out if you drop the binder or tip it upside down. I'll probably use this option next time I need to organize electronic components. It would also be very handy for SD cards and USB sticks.

<a href="https://www.amazon.com/StoreSMART-Plastic-Binders-10-Pack-RMSTWPF-MEMRY-10/dp/B00JAIIMEY?th=1&psc=1&linkCode=ll1&tag=ndbroadbent-20&linkId=545fa3f02aa979f1e78f4b86105ac6a0&language=en_US&ref_=as_li_ss_tl"><img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/3x3-binder-pockets-with-flaps.jpg" alt="3x3 card binder sheets with flaps for each pocket" style="max-width: 500px;" /></a>

### Supplies

- Color printer
- [Ring binder](https://www.amazon.com/Avery-Economy-Showcase-Binder-19750/dp/B000WFMBO6?keywords=3+ring+binder&qid=1667182456&qu=eyJxc2MiOiI3LjY5IiwicXNhIjoiNy4wMyIsInFzcCI6IjYuNjcifQ%3D%3D&sr=8-5&linkCode=ll1&tag=ndbroadbent-20&linkId=f2b3029cfdaaa7d4ffb02938cde1d7b5&language=en_US&ref_=as_li_ss_tl)
- [9 Sleeve Card Binder Sheet](https://www.amazon.com/AmazonBasics-Sleeve-Protectors-Binder-Sheet/dp/B07PD7KBN5?&linkCode=ll1&tag=ndbroadbent-20&linkId=1e81f428ee077d3eaf75a8f274d88aa5&language=en_US&ref_=as_li_ss_tl), or [9 Pocket Binder Sheets With Flaps](https://www.amazon.com/StoreSMART-Plastic-Binders-10-Pack-RMSTWPF-MEMRY-10/dp/B00JAIIMEY?th=1&psc=1&linkCode=ll1&tag=ndbroadbent-20&linkId=545fa3f02aa979f1e78f4b86105ac6a0&language=en_US&ref_=as_li_ss_tl)
- Scissors or paper cutter

### Instructions

1. Print the PDF
2. Cut out the cards on each page
3. Insert the cards into the pockets
4. Insert resistors in front of the cards in each pocket

---

## Option 2: Make DIY Card Binder Sheets

### Supplies

- Color printer
- [Ring binder](https://www.amazon.com/Avery-Economy-Showcase-Binder-19750/dp/B000WFMBO6?keywords=3+ring+binder&qid=1667182456&qu=eyJxc2MiOiI3LjY5IiwicXNhIjoiNy4wMyIsInFzcCI6IjYuNjcifQ%3D%3D&sr=8-5&linkCode=ll1&tag=ndbroadbent-20&linkId=f2b3029cfdaaa7d4ffb02938cde1d7b5&language=en_US&ref_=as_li_ss_tl)
- [Plain ring binder sheets](https://www.amazon.com/Amazon-Basics-Clear-Protector-Binder/dp/B07R479JG2?pd_rd_w=LWRzP&content-id=amzn1.sym.9b14949a-3979-4b7d-b182-b07adcc4c0e7&pf_rd_p=9b14949a-3979-4b7d-b182-b07adcc4c0e7&pf_rd_r=51YBZA0N9E2PANB6W3QV&pd_rd_wg=cp0Cc&pd_rd_r=b6352cc5-3f7a-461c-be95-835c07b9087e&pd_rd_i=B07R479JG2&psc=1&linkCode=ll1&tag=ndbroadbent-20&linkId=89efc3eb7921da23353c29463445653f&language=en_US&ref_=as_li_ss_tl)
- Card sleeves (e.g. [Sleeve Kings 63.5mm X 88mm Card Sleeves](https://www.amazon.com/Sleeve-Kings-Card-Sleeves-63-5x88mm/dp/B07RD9QZD2?&linkCode=ll1&tag=ndbroadbent-20&linkId=b7ec66667342d933da70a72b98482f5f&language=en_US&ref_=as_li_ss_tl) or similar)
- [Glue stick](https://www.amazon.com/Elmers-School-Glue-Sticks-5ct/dp/B074MPDDRD?ac_md=0-0-Z2x1ZSBzdGljaw%3D%3D-ac_d_rm_rm_rm&content-id=amzn1.sym.568df61d-e115-4cb1-a96a-ba070b8f0935%3Aamzn1.sym.568df61d-e115-4cb1-a96a-ba070b8f0935&crid=J8VFDJPMF09A&cv_ct_cx=glue+stick&keywords=glue+stick&pd_rd_i=B074MPDDRD&pd_rd_r=d791008c-9cc0-44df-b03c-3ce198e017ad&pd_rd_w=icqOY&pd_rd_wg=ADqNT&pf_rd_p=568df61d-e115-4cb1-a96a-ba070b8f0935&pf_rd_r=B3SAPW5S9MNYK8ZDVT7Z&psc=1&qid=1667182523&qu=eyJxc2MiOiI0Ljc1IiwicXNhIjoiNC40NyIsInFzcCI6IjQuMzMifQ%3D%3D&sprefix=%2Caps%2C1199&sr=1-1-7d9bfb42-6e38-4445-b604-42cab39e191b&linkCode=ll1&tag=ndbroadbent-20&linkId=1bf8d09bd3db3775d20cc2beeed4925a&language=en_US&ref_=as_li_ss_tl)

### Instructions

1. Print the PDF
2. Insert pages into ring binder sheets
3. Use glue stick to glue the card sleeves to the outside of the ring binder sheets
4. Insert resistors into card sleeves

---

## Option 3: Raaco storage drawers

[@impulse7 posted a comment on Hacker News](https://news.ycombinator.com/item?id=33393853) where they shared their own solution to this problem. They created PDF labels to organize resistors in [Raaco storage drawers](https://www.amazon.com/Storage-Home-Organization-Raaco-Tools-Improvement/s?rh=n%3A13400631%2Cp_89%3ARaaco&linkCode=ll2&tag=ndbroadbent-20&linkId=8c3a44131d986bdc83efb320e3a486a9&language=en_US&ref_=as_li_ss_tl). They have shared their [PDF generation code on GitHub](https://github.com/tonybjorkman/raaco-organizer). This is a great option if you have plenty of space in your workshop.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/raaco-storage-labels.jpg" alt="Labels for Raaco storage organizer, from https://github.com/tonybjorkman/raaco-organizer" />

---

## Option 4: Buy A Finished Ring Binder With Sorted Resistors

If you want to skip all the work and just buy a pre-made ring binder, you can [buy one from an electronics supplier such as RS Components](https://nz.rs-online.com/web/p/resistor-kits/2476718). This will save a lot of time, but they can be quite expensive.

<a href="https://nz.rs-online.com/web/p/resistor-kits/2476718">
<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/through-hole-resistor-kit-504.jpg" alt="$504 NZD for a ring binder of sorted resistors" />
</a>

> $504.52 New Zealand dollars = $323.72 USD

I found a few cheaper options but they were still hundreds of dollars. So I thought it would be fun to make my own ring binder.

---

<br />

P.S. Digi-Key's [Resistor Color Code Calculator](https://www.digikey.co.nz/en/resources/conversion-calculators/conversion-calculator-resistor-color-code) was very useful. It's a great tool for quickly looking up resistor values.

<img class="lightbox thumb" src="/content/images/posts/2022/10/e24-resistors-ring-binder/digikey-calculator.jpg" alt="DigiKey's 4 Band Resistor Color Code Calculator" />

# MIT License

```
Copyright 2022 Nathan Broadbent. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this PDF document, software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE PDF AND SOFTWARE ARE PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
