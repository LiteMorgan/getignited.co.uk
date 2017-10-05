---
layout:       work
title:        XIVCurrents
summary:      Locate and log Aether Currents in <em>Final Fantasy XIV</em>
year:         2017
slug:         xivcurrents
permalink:    /work/xivcurrents/
tags:
  - Branding

thumb:
  format:   png
  alt:      text

images:
  - caption:     Simple wireframes for the filter and card modules.
    items:
      - src:     filter-wireframes
        format:  jpg
        size:    half
        height:  1202
        alt:     
      - src:     card-wireframes
        format:  jpg
        size:    half
        height:  1202
        alt:     
  - items:
      - src:     final-logo
        format:  png
        height:  546
        alt:     
  - caption:     Vector icons used across the site
    items:
      - src:     icons
        format:  png
        height:  562
        alt:     
  - items:
      - src:     the-site
        format:  jpg
        height:  952
        alt:     
---
In its second expansion pack, _Final Fantasy XIV_ introduced hidden collectables called 'Aether Currents'. These items were hidden around the world, and also given as a reward for longer quest chains. In order to aid players with locating these items for second expansion _Stormblood_, I built a tracking site with ReactJS.

{% assign images = page.images[0] %}
{% include utilities/image.html %}

Data would be the key element of the site. All necessary data was compiled into a JSON file, which would then be split dependant on which of the games maps the Current was found in. This data would be fully filterable to display only the information that a player needed. Local storage was used to save player progress to the browser.

{% assign images = page.images[1] %}
{% include utilities/image.html %}

{% assign images = page.images[2] %}
{% include utilities/image.html %}

{% assign images = page.images[3] %}
{% include utilities/image.html %}

During launch week, the site was promoted on the FFXIV Reddit community and Twitter, and 10,225 sessions were logged. Over the course of June, over fifty percent of all sessions were returning users, meaning people were coming back to find more information and continue logging.

The future of the site is looking strong. Translations are being worked on to support the game's French, German and Japanese communities. Layout changes are being finalised to produce a cleaner display of all relevant information, as well as providing more visual information on collectable locations.
