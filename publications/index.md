---
layout: default
title: Publications
description: Selected publications by Amitabh Trehan, organised by research theme.
---

<section class="page-introduction">
  <p class="eyebrow">Research outputs</p>
  <h1>Publications</h1>

  <p class="lede publications-introduction">
    Browse this curated selection by research theme. Some publications belong
    to more than one theme where the underlying research strands overlap.
  </p>

  <p>
    For a complete bibliographic record, see
    {{ site.data.profile.links[1].url }}>Google Scholar</a>,
    {{ site.data.profile.links[2].url }}>DBLP</a>, or my
    <a href="https://www.durham.ac.uk/staff/amitabh-trehan/">
      Durham University profile
    </a>.
  </p>
</section>

<section aria-labelledby="publication-list-heading">
  <h2 id="publication-list-heading" class="visually-hidden">
    Selected publications
  </h2>

  <div
    class="publication-controls"
    role="group"
    aria-label="Filter publications by research theme"
  >
    <button
      class="publication-filter active"
      type="button"
      data-filter="all"
      aria-pressed="true"
    >
      All
    </button>

    <button
      class="publication-filter"
      type="button"
      data-filter="resilient"
      aria-pressed="false"
    >
      Resilient distributed systems
    </button>

    <button
      class="publication-filter"
      type="button"
      data-filter="dynamic"
      aria-pressed="false"
    >
      Dynamic networks & information flow
    </button>

    <button
      class="publication-filter"
      type="button"
      data-filter="efficient"
      aria-pressed="false"
    >
      Resource-efficient network algorithms
    </button>

    <button
      class="publication-filter"
      type="button"
      data-filter="coordination"
      aria-pressed="false"
    >
      Coordination, uncertainty & incentives
    </button>
  </div>

  <p
    id="publication-status"
    class="publication-status"
    aria-live="polite"
  ></p>

  <div class="publication-list">
    {% for publication in site.data.publications %}
      <article
        class="publication"
        data-themes="{{ publication.themes | join: ' ' }}"
      >
        <div class="publication-year">
          {{ publication.year }}
        </div>

        <div class="publication-information">
          <h3>{{ publication.title }}</h3>

          <p class="publication-authors">
            {{ publication.authors }}
          </p>

          <p class="publication-venue">
            {{ publication.venue }}
          </p>

          <div
            class="publication-themes"
            aria-label="Research themes"
          >
            {% for theme in publication.themes %}

              {% if theme == "resilient" %}
                <span class="publication-theme">
                  Resilient systems
                </span>
              {% endif %}

              {% if theme == "dynamic" %}
                <span class="publication-theme">
                  Dynamic networks
                </span>
              {% endif %}

              {% if theme == "efficient" %}
                <span class="publication-theme">
                  Resource-efficient
                </span>
              {% endif %}

              {% if theme == "coordination" %}
                <span class="publication-theme">
                  Coordination & uncertainty
                </span>
              {% endif %}

            {% endfor %}
          </div>

          {% if publication.links and publication.links.size > 0 %}
            <div class="publication-links">
              {% for link in publication.links %}
                {{ link.url }}
                  {{ link.label }}
                </a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>

  <noscript>
    <p class="noscript-note">
      Theme filtering requires JavaScript. All selected publications are
      displayed above when JavaScript is unavailable.
    </p>
  </noscript>
</section>
