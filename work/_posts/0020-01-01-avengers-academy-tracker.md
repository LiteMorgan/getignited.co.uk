---
layout:       work
title:        Avengers Academy Tracker
summary:      Tackling UI problems in <em>Avengers Academy</em> with a streamlined tracker
year:         2016
slug:         avengersacademy
permalink:    /work/avengers-academy-tracker/
tags:
  - UX
  - Design
  - Development

thumb:
  format:     jpg
  alt:        text

published:    true
hidden:       true

sitelink:  http://avengers.getignited.co.uk/
---
{% capture pageslug %}{{ page.slug }}{% endcapture %}

Whilst playing *Avengers Academy*, I had some issues with the game's UI for events. A player had to jump back and forth through a number of menus to find out how many collectables they had, and how many were needed to earn the next character or building.

My solution was to build a responsive, web-based tracker, allowing players to tick off what collectables they had, and find out how many more they needed.

<figure class="image-block">
  <div class="image-block__content">
    {% include utilities/work-image.html filename="v1-material-display-desktop.jpg" height="653" alt="" %}
  </div>
  {% include utilities/image-caption.html caption="The full capacity v1 Materials list on desktop" %}
</figure>

<figure class="image-block">
  <div class="image-block__content">
    {% include utilities/work-image.html filename="v1-mobile-display.jpg" height="896" alt="" %}
  </div>
</figure>

The first release aimed to match the in-game UI for viewing remaining materials. This worked well, however by the end of the event, there were nearly 40 collectibles to be gathered. The result of this was a very long scrolling page for users to navigate, with remaining material totals being inaccessible at a glance.

To remedy this for the next event, I switched to a card-based system, and added a fixed sidebar containing all remaining totals.

<figure class="image-block">
  <div class="image-block__content">
    {% include utilities/work-image.html filename="v2-desktop-display.jpg" height="1046" alt="" %}
  </div>
  {% include utilities/image-caption.html caption="The rejuvenated v2 of the Tracker" %}
</figure>

<figure class="image-block">
  <div class="image-block__content">
    {% include utilities/work-image.html filename="v2-mobile-display.jpg" height="896" alt="" %}
  </div>
</figure>

The new sidebar could be quickly toggled on a mobile display, granting the user instant access to all their remaining materials. Options were also added to track certain cards, allowing all non-tracked cards to be hidden. The v2 experience was far more user friendly, and took less effort to find relevant information.
