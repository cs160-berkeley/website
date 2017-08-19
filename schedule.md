---
layout: default
title: schedule
---

<!--todo: probably make partial template render here-->

{% for class in site.data.schedule %}
{% if class.Class %}
#### {{ class.Class }} :: {{ class.Date }}

<p>{{ class.Topic }}</p>

    {{ if class.Reading }} Reading: {{ class.Reading }} {{ endif }}
    {{ if class.Assignment }} Assignment: {{ class.Assignment }} {{ endif }}
    {{ if class.Studio }} Studio: {{ class.Studio }} {{ endif }}
    {{ if class.WebSiteLabel }} Label: {{ class.Label }} {{ endif }}
    {{ if class.Notes }} Notes: {{ class.Notes }} {{ endif }}

{% endif %}
{% endfor %}
