---
layout: collection
title: Blog
subtitle: Hot off the keyboard
permalink: /blog/

permalink: /blog/
---
<div class="post-container post-container--featured">
  {% for post in site.categories.blog %}
    {% if forloop.first %}
      {% include utilities/post.html type='blog' feature='true' post=post %}
    {% else %}
      {% include utilities/post.html type='blog' post=post %}
    {% endif %}
  {% endfor %}
</div>