---
layout: default
custom_js:
  - feature-cards.js
---
<section>
  <p class="t--large"><strong>Ahoy there, and welcome to getignited! I'm a Hertford based, freelance Front-end Developer and UI/UX Designer, with a passion for minimal, responsive design.</strong></p>
  <p>I've had the opportunity to work on a number of cool projects for companies such as Corona, Cadbury, R&A, and many more. When not coding, you can likely find me blasting evil aliens, nerding out, or tucking in to a good pie. <a href="{{ "/about" | relative_url }}">Want to find out a little more?</a></p>
</section>

<section>
  <div class="section-heading">
    <h4 class="heading-primary">Latest Work</h4>
    <span class="p t--large t--lighter">— <strong>Fresh off the pipeline</strong></span>
  </div>
  <div class="post-container">
    {% for work in site.categories.work limit: 4 %}
      {% include utilities/post.html type='work' post=work %}
    {% endfor %}
  </div>
  <div class="btn-wrap">
    <a class="btn" href="{{ "/work" | relative_url }}">See More Work</a>
  </div>
</section>

<section>
  <div class="section-heading">
    <h4 class="heading-primary">New on the Blog</h4>
    <span class="p t--large t--lighter">— <strong>Hot off the keyboard</strong></span>
  </div>
  <div class="post-container post-container--featured">
    {% for post in site.categories.blog limit: 3 %}
      {% assign blogpost = post %}
      {% if forloop.first %}
        {% include utilities/post.html type='blog' feature='true' post=blogpost %}
      {% else %}
        {% include utilities/post.html type='blog' post=blogpost %}
      {% endif %}
    {% endfor %}
  </div>
  <div class="btn-wrap">
    <a class="btn" href="{{ "/blog" | relative_url }}">Keep Reading</a>
  </div>
</section>

