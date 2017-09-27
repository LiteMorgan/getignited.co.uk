---
layout:  blog
title:   Come Fly With Me
slug:    come-fly-with-me
date:    2017-06-27
summary: Readying a web app for a game launch
tags:
  - Web
  - Games

thumb:
  format: jpg
  alt:    text

images:
  - caption:     The end result
    items:
      - src:     site-example
        format:  jpg
        height:  952
        alt:     
  - caption:     Hunting for Aether Currents in <em>Stormblood</em>
    items:
      - src:     hunting-currents
        format:  jpg
        height:  1048
        alt:     
---
It's certainly been an interesting few weeks. With _Final Fantasy XIV_'s newest expansion _Stormblood_ launching on June 20th, I set myself the challenge of racing to learn [ReactJS](https://facebook.github.io/react/), and build a web app for players to use to support the game.

So a little back story. Two years ago, for the release of previous expansion _Heavensward_, I put together a [giant Google Sheet](https://docs.google.com/spreadsheets/d/1493L7c3hWGQKSMZ57YvF4s66o1Y7l9WMBmLndEdZLTA/edit?usp=sharing) which I updated as I progressed through the game. The idea was to find all the locations of collectible 'Aether Currents', items of a sort that allow players to start flying in an area. This was collated with a bit of help from other players, and then shared both in-game and through Reddit.

So with Stormblood coming out, I wanted to take that idea and build something a bit more interesting. I'd previously worked on the [Avengers Academy Event Tracker](/work/avengers-academy-tracker/) and felt that something similar could work well. I decided to challenge myself into using React to build it.

{% assign images = page.images[0] %}
{% include utilities/image.html small="true" %}

The end result was certainly impressive. While the design wasn't overly impressive, the functionality worked well. Filters were available to narrow down how much data was being shown at once - some of which had to be worked on right down to the server launch time!

{% assign images = page.images[1] %}
{% include utilities/image.html small="true" %}

Why did I want to make this? The first reason was to challenge myself, and try and learn some new technology. React is cropping up everywhere now, and so I felt it was better to give myself a hands on approach to learning, rather than just reading about it!

The second reason was for the more personal reason of wanting to give something back to the Final Fantasy XIV community. There are so many interesting web apps all with the intention of helping players with the games mechanics—everything from [Gathering Timers](http://www.ffxivclock.com/) to [Crafting Calculators](http://craftingasaservice.com/)—and I really wanted to give something back to the community myself.

I'll be making a fleshed out work page for XIVCurrents shortly, so do keep an eye out for that, if you're interested to see more! 

