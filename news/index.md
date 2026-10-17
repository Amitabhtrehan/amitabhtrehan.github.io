---
layout: default
title: News
---
# News and events

{% for item in site.data.news %}
<article class="news-item"><time>{{ item.date }}</time><p>{{ item.text }}{% if item.url != '' %} <a href="{{ item.url }}">Details</a>{% endif %}</p></article>
{% endfor %}
