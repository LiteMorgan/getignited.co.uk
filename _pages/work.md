---
layout: collection
title: Work
subtitle: Well would you look at that!
permalink: /work/

custom_js:
  - feature-cards.js
---
<div class="post-container">
  {% for work in site.categories.work %}
    {% include utilities/post.html type='work' post=work %}
  {% endfor %}
</div>