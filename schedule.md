---
layout: default
title: schedule
---

<!--todo: probably make partial template render here-->

{% for class in site.data.schedule %}
{% if class.Class %}
#### {{ class.Class }} :: {{ class.Date }}


{% if class.Reading %} Reading: {{ class.Reading }} <br/>{% endif %}
{% if class.Assignment %} Assignment: {{ class.Assignment }} <br/>{% endif %}
{% if class.WebsiteLabel %} Label: {{ class.WebsiteLabel }} <br/>{% endif %}

<!--{% if class.Studio %} Studio: {{ class.Studio }} <br/>{% endif %}-->
<!--<p>{{ class.Topic }}</p>-->
<!--{% if class.Notes %} Notes: {{ class.Notes }} <br/>{% endif %}-->

{% endif %}
{% endfor %}
