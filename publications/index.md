---
layout: default
title: Publications
---
# Publications

A concise curated list. For a complete and automatically indexed record, see [Google Scholar]({{ site.data.profile.links[1].url }}) or [DBLP]({{ site.data.profile.links[2].url }}).

<div class="pub-list">
{% for pub in site.data.publications %}
<article class="pub"><span class="year">{{ pub.year }}</span><div><strong>{{ pub.title }}</strong><br>{{ pub.authors }}<br><em>{{ pub.venue }}</em>{% if pub.links.size > 0 %}<div class="pub-links">{% for link in pub.links %}<a href="{{ link.url }}">{{ link.label }}</a>{% endfor %}</div>{% endif %}</div></article>
{% endfor %}
</div>
