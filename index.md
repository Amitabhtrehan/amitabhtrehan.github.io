---
layout: default
title: Home
---
<section class="hero">
  <div>
    <p class="eyebrow">{{ site.data.profile.role }} · {{ site.data.profile.institution }}</p>
    <h1>{{ site.data.profile.strapline }}</h1>
    <p class="lede">{{ site.data.profile.bio }}</p>
    <div class="links">{% for link in site.data.profile.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% endfor %}</div>
    <p class="contact-line"><a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a> · {{ site.data.profile.telephone }}</p>
  </div>
  <img class="portrait portrait-photo" src="{{ site.data.profile.photo }}" alt="Amitabh Trehan" loading="eager">
</section>
<section class="grid">
  <article>
    <h2>Research</h2>
    <p>My research asks how networked systems can compute reliably when the system itself is changing, bringing together distributed algorithms, graph algorithms, resilience, dynamics and strategic interaction.</p>
    <ul class="tags"><li>Resilient systems</li><li>Dynamic networks</li><li>Resource-efficient algorithms</li><li>Coordination & uncertainty</li></ul>
    <p><a href="{{ '/research/' | relative_url }}">Research overview →</a></p>
  </article>
  <article>
    <h2>Recent news</h2>
    <div class="news-list">{% for item in site.data.news limit:4 %}<p><time>{{ item.date }}</time> {{ item.text }}</p>{% endfor %}</div>
    <p><a href="{{ '/news/' | relative_url }}">All news →</a></p>
  </article>
</section>
<section class="grid">
  <article>
    <h2>Academic profile</h2>
    <p>I joined Durham University as Associate Professor in 2020. I am founder and head of NESTiD, the Network Engineering, Science, and Theory in Durham research group, and a Fellow of the UK Higher Education Academy.</p>
  </article>
  <article>
    <h2>Students and collaborators</h2>
    <p>I welcome enquiries from students and researchers interested in algorithms, distributed computing, networks and resilience. Please email <a href="mailto:{{ site.data.profile.email }}">{{ site.data.profile.email }}</a> with a short description of your interests.</p>
  </article>
</section>
