---
title: showcase
layout: null
---

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="/assets/custom.css">
  <style>

    html {
      background: url(/assets/images/campanile.jpg) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    body {
      font-family: monospace;
      padding: 0em 1em;
      margin: 1em;
    }
    footer {
      position: fixed;
      bottom: 20;
      right: 20;
    }
    a,
    a:hover {
      color: white;
    }
    p {
      border-left: rgb(255, 64, 129) solid 1em;
      background-color: rgba(255, 255, 255, 0.5);
      box-sizing: border-box;
      padding: 0.5em;
      max-width: 100%;
      width: 500px;
    }
    h1 {
      font-size: 3em;
    }
    img {
      max-width: 100%;
      width: 500px;
    }

    /* Project styles */

    .project {
      background-color: rgba(255, 255, 255, 0.5);
      display: inline-block;
      margin-bottom: 2em;
      margin-right: 2em;
      max-width: 90vw;
      width: 325px;
    }
    .project-name {
      border-left: rgb(0, 0, 0) solid 1em;
      padding: 0.25em 0.5em;
      font-size: 15pt;
      font-weight: bold;
      display: block;
    }
    .project-link {
      color: black;
    }
    .project-image {
      max-width: 100%;
    }
    .project-desc {
      display: block;
      margin: 1em;
    }
    .project:hover .project-name {
      border-left: rgb(255, 64, 129) solid 1em;
      color: black;
    }

  </style>
</head>

# [CS160](/) :: Human Computer Interaction

### [Final Project :: Public Design Showcase][eb]{:target="_blank"}

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

{% comment %}
### projects

ref for grouping: https://gist.github.com/budparr/0ad4a7449f9604f47eec

{% for p in site.data.project %}
<div class="project">
    <a class="project-link" href="{{ p.link }}" target="_blank">
    <span class="project-name">{{ p.name }}</span>
    <img class="project-image" src="{{ p.imag }}"/>
    <span class="project-desc">{{ p.desc }}</span>
    </a>
</div>

{% endfor %}
{% endcomment %}

[eb]:https://www.eventbrite.com/e/jacobs-winter-design-showcase-2017-tickets-39925134151

<footer>
    <a href="https://upload.wikimedia.org/wikipedia/commons/9/95/CampanileMtTamalpiasSunset-original.jpg">img</a>
</footer>

