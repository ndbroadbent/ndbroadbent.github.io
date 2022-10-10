---
categories: []
date: "2022-10-07T07:29:33Z"
description: ""
tags: ["home-assistant", "linux", "debian", "server"]
title: "Can you plug a SATA drive into a SAS controller?"
---

## Yes.

<img class="lightbox thumb" src="/images/posts/2022/10/sata-sas/sata-sas.jpg" alt="SATA and SAS connectors" />

SATA and SAS use very similar connectors, but a SATA connector has a gap in the middle. This means that you can physically plug a SATA drive into a SAS connector, but you can't plug a SAS drive into a SATA controller (because it won't fit.) SAS controller software can support SATA drives, but SATA controllers don't support SAS drives (even if you have an adapter.)

## Why do I have a SAS controller?

I was running [Home Assistant](https://www.home-assistant.io/) and [Plex Media Server](https://www.plex.tv/) on a [Raspberry Pi 4 Model B](https://www.raspberrypi.com/products/raspberry-pi-4-model-b/). I kept adding more and more Home Assistant add-ons (which run in Docker containers), so it started to get a bit slow. It took a long time to restart Home Assistant, and we started to notice some speed and reliability issues.

I already had a server rack in my closet, so I wanted to get a proper server to put in it. I didn't need anything too fancy. It just needed to be a little bit faster than a Raspberry Pi, so I found a 10 year old IBM server for $249 NZD ($160 USD.) I found it on TradeMe, which is similar to eBay in New Zealand.

- Model: [IBM System X3250 M4 E3-1270v2](https://www.ibm.com/support/pages/overview-ibm-system-x3250-m4-windows-server-2012-type-2583)
- CPU: Intel Xeon E3-1270v2 4-core, 8-thread Processor
- Memory: 8GB DDR3 Ram
- Storage: 4x 2.5" SAS / SATA drive bays, 1x 240GB SAS hard drive
- Controller: LSI SAS2004 IR SAS / SATA HBA
- Power: 2x 460w power supplies

The new server has been working great, and Home Assistant is noticeably faster. The 10-year-old Intel Xeon E3-1270v2 CPU has a CPU Mark benchmark score of 6429, which is 8x better than the Broadcom BCM2711 processor in a Raspberry Pi 4B (834.)

<img class="lightbox thumb" src="/images/posts/2022/10/sata-sas/bcm2711-vs-intel-xeon.jpg" alt="BCM2711 vs Intel Xeon E3-1270 V2" />

- [BCM2711 vs Intel Xeon E3-1270 V2 @ 3.50GHz on cpubenchmark.net](https://www.cpubenchmark.net/compare/BCM2711-vs-Intel-Xeon-E3-1270-V2/4297vs1192)

---

The only problem is that the server came with a 320GB SAS hard-drive. It was a bit too small, and it made a lot of clicking noises. I wanted to replace it with a 1TB SATA SSD, which would be faster and silent. I just wasn't sure if my old server would be compatible with a modern SATA SSD.

I did a bit of research, and it seemed like it would work, so I bought a new Samsung 870 EVO 1TB SSD. It was the same size and had the same screw holes as the old 2.5" SAS drive, so I was able to swap the drives and use the same drive bracket. I put in the new drive and installed Debian 11 (with LVM), and everything worked great!

**Conclusion: The latest Samsung SATA SSDs are still compatible with SAS controllers in servers that were made in 2012.**
