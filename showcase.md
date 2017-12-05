---
title: showcase
layout: null
---

<head>
  <title> CS160 Showcase </title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/assets/custom.css">
  <link rel="stylesheet" href="/assets/showcase.css">
  <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"></script>
  <script src="http://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha256-k2WSCIexGzOj3Euiig+TlR8gA0EmPjuc79OEeY5L45g="
        crossorigin="anonymous"></script>

  <!-- Global Site Tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-58096309-4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)};
    gtag('js', new Date());
    gtag('config', 'UA-58096309-4');
  </script>
</head>

# [CS160](/) :: Human Computer Interaction

### [Public Design Showcase][eb]{:target="_blank"} :: Final Project

<div class="showcase-details">
<img src="{{ site.base_name }}/assets/images/showcase.jpg"/>
<p>
    <i> When: </i>
    <span class="event-details"> 12/6/17, 4-6pm </span>
    <br/> <i>Where: </i>
    <span class="event-details"> <a href="http://jacobsinstitute.berkeley.edu/" target="_blank">Jacobs 310</a> </span>
</p>
</div>

### schedule

<p class="event-timeline">
    <i>3:30-4:00 </i>
    <span class="event-details"> Student setup in Jacobs 310 </span>
    <i> <br/> 4:00-4:30 </i>
    <span class="event-details"> Class intro, 1-min team pitches </span>
    <i> <br/> 4:30-6:00 </i>
    <span class="event-details"> Open House - Posters and Demos </span>
</p>

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
{% assign studio_sort = site.data.project | sort: 'studio' %}
{% for p in studio_sort %}
<div class="project">
    <a class="project-link" href="#">
    <!--<a class="project-link" href="{{ p.link }}" target="_blank">-->
    <span class="project-name">{{ p.name }}</span>
    <img class="project-image" src="{{ site.base_name }}/assets/logos/{{ p.name | slugify }}.png"/>
    <span class="project-desc">{{ p.description }} [ta:  <i>{{ p.studio }}</i>]</span>
    </a>
</div>

{% endfor %}
</div>

[eb]:https://www.eventbrite.com/e/jacobs-winter-design-showcase-2017-tickets-39925134151

<footer>
    <a href="https://upload.wikimedia.org/wikipedia/commons/9/95/CampanileMtTamalpiasSunset-original.jpg">img</a>
</footer>

<script>
$(window).on("load", function() { new Masonry( '.grid',  { "itemSelector": ".project", "columnWidth": 0 }) });
</script>
