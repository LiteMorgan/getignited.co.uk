---
layout: page
title: About
subtitle: Let's get personal
permalink: /about/
---
<section>
  <div class="section-heading">
    <h1>{{ page.title }}</h1>
    <span class="p t--large t--lighter">— {{ page.subtitle }}</span>
  </div>
  <p>This is the digital portfolio of Liam Morgan, a front-end developer and UI/UX designer from Hertford. Hello! I focus on designing engaging experiences for the responsive, accessible web.</p>
  <p>I've previously worked with Elvis Communications, improving brand performance via email and websites for a variety of clients, including Corona, The Open and Honda. I'm currently freelancing, but looking to get back into full-time.</p>
</section>

<section>
  <div class="columns">
    <div class="about-bio-cell">
      <img class="page__icon" src="/image/about/fedev.svg" alt="Front-end developer">
      <h2>Front-end developer</h2>
      <p>I have 3 years experience working with HTML, CSS and basic Javascript. More recently, I've begun to experiment with ReactJS, and I'm enjoying the possiblities it brings for the web.</p>
    </div>
    <div class="about-bio-cell">
      <img class="page__icon" src="/image/about/uxui.svg" alt="UI/UX Designer">
      <h2>UI/UX designer</h2>
      <p>I enjoy the process of UI/UX design. I like starting from the building blocks of wireframes and seeing the design come to life for the responsive web. My current weapon of choice is Sketch!</p>
    </div>
  </div>
</section>

<section>
  <h2>How did you get here?</h2>
  <p>I could provide you with a metaphorical answer involving stars, evolution, and the number 42. But I won't.</p>
  <p>I was introduced to coding through a home-grown, after school science club. Shown the basics by a friend, my interest took off and soon I was making 'choose you own adventure' games with code - albeit very short ones! I stuck with it over the years, slowly learning more, and watching the internet change as trends came and went. I ended up furthering my skills in university, got my BA in Digital Media Design, and leapt straight into the industry from there.</p>
  <p>It was during this time that UX was really taking off. I realised all my technical doodles on the backs of envelopes and the corners of notebooks had a name and purpose, so that seemed the next natural step in my personal development!</p>
</section>

<section>
  <h2>Any other fun stuff?</h2>
  <p>Sure! When I'm not coding or designing, I can usually be found gaming. Games were a big part of my childhood, and that hasn't exactly changed now! Heck, I even managed to focus my dissertation around them.</p>
  <p>I enjoy reading science fiction and fantasy novels, as well as comics. A big part of my love for drawing stems from comic books, alongside animation (both the film and television varieties!). Perhaps most importantly, I love a pie.</p>
</section>

<section>
  <div class="columns">
    {% for item in site.data.about %}
    <div class="about-fact-cell ta--c">
      <img class="page__icon" src="/image/about/about-{{ item.category }}.svg" alt="{{ item.category | capitalize }}">
      <h4>{{ item.category | capitalize }}</h4>
      <p class="p-0">{{ item.title | markdownify | remove: '<p>' | remove: '</p>' }}</p>
    </div>
    {% endfor %}
  </div>
</section>