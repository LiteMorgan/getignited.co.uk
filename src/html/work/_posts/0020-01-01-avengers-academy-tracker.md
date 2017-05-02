---
layout:       project
title:        Avengers Academy Tracker
uid:          work
slug:         avengersacademy
year:         2016
published:    true
featured:     true
permalink:    /work/avengers-academy-tracker/

project:
  subcategories:  
    - UX
    - Design
    - Development
  client:         []

summary: 
  Tackling UI problems in <em>Avengers Academy</em> with a streamlined tracker

sitelink:  http://avengers.getignited.co.uk/

gallery:
  - type:     special
    caption:  The game UI alongside the v1 Materials list on desktop
    image:
    - slug:   v1-material-display-desktop
      format: jpg
      order:  2
    row:
    - slug:   aa-ui-example-1
      format: jpg
    - slug:   aa-ui-example-2
      format: jpg
  - type:     single
    caption:  
    slug:     v1-mobile-display
    format:   jpg
  - type:     single
    caption:  The rejuvenated v2 of the Tracker
    slug:     v2-desktop-display
    format:   jpg
---
Whilst playing *Avengers Academy*, I had some issues with the game's UI for events. A player had to jump back and forth through a number of menus to find out how many collectables they had, and how many were needed to earn the next character or building.

My solution was to build a responsive, web-based tracker, allowing players to tick off what collectables they had, and find out how many more they needed.

The first release aimed to match the in-game UI for viewing remaining materials. This worked, until the game had near 40 collectables which meant the user had to scroll to the top to check remaining totals each time. To remedy this, I switched to a card-based system, and added a fixed sidebar containing all remaining totals.