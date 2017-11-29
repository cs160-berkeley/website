---
title: showcase
layout: null
---

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="/assets/custom.css">
  <link rel="stylesheet" href="/assets/showcase.css">
  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
</head>

# [CS160](/) :: Human Computer Interaction

### [Public Design Showcase][eb]{:target="_blank"} :: Final Project

# <img class="showcase" src="/assets/images/showcase.jpg"/>

Where: *310 Jacobs Hall* <br/>
When: *12/6/17, 4-6pm*

### schedule

3:30-4:00 Student setup in Jacobs 310<br/>
4:00-4:30 Class intro, 1-minute team pitches<br/>
4:30-6:00 Open House - Posters and Demos

### theme

The theme of this semester’s projects is Bursting Echo Chambers in Social
Media. We developed web-based applications to enable people to encounter more
diverse information through social media. Another aspect of our theme is to
encourage more constructive conversation and interaction among differing
perspectives through social media.

### projects

{% comment %}
grouping: https://gist.github.com/budparr/0ad4a7449f9604f47eec
converting: https://www.browserling.com/tools/csv-to-yaml
{% endcomment %}


<div class="project-wrapper" class="grid">
{% for p in site.data.project %}
<div class="project">
    <a class="project-link" href="#">
    <!--<a class="project-link" href="{{ p.link }}" target="_blank">-->
    <span class="project-name">{{ p.name }}</span>
    <img class="project-image" src="{{ site.base_name }}/assets/logos/{{ p.name | slugify }}.png"/>
    <span class="project-desc">{{ p.description }}</span>
    </a>
</div>

{% endfor %}
</div>

[eb]:https://www.eventbrite.com/e/jacobs-winter-design-showcase-2017-tickets-39925134151

<footer>
    <a href="https://upload.wikimedia.org/wikipedia/commons/9/95/CampanileMtTamalpiasSunset-original.jpg">img</a>
    <script> var msnry = new Masonry( '.grid',  { "itemSelector": ".project", "columnWidth": 0 }) </script>
</footer>

