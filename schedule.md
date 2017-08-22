---
layout: default
title: schedule
---

<!--todo: probably make partial template render here-->

{% for class in site.data.schedule %}
{% if class.Class %}
#### {{ class.Date | date: "%b %-d" }} {% if class.WebsiteLabel %} :: {{ class.WebsiteLabel }} <br/>{% endif %}

{{ class.Class }}.
{% if class.Reading %} Reading: {{ class.Reading }} <br/>{% endif %}
    {% if class.Assignment %} {{ class.Assignment }} {% endif %}

<!--{% if class.Studio %} Studio: {{ class.Studio }} <br/>{% endif %}-->
<!--<p>{{ class.Topic }}</p>-->
<!--{% if class.Notes %} Notes: {{ class.Notes }} <br/>{% endif %}-->

{% endif %}
{% endfor %}
