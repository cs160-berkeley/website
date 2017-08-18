---
layout: default
title: schedule
---

<!--probably make partial template render here-->

{% for class in site.data.schedule %}
{% if class.Class %}
#### {{ class.Class }} :: {{ class.Date }}

<p>{{ class.Topic }}</p>

    Reading: {{ class.Reading }}
    Assignment: {{ class.Assignment }}
    Studio: {{ class.Studio }}
    Label: {{ class.Label }}
    Notes: {{ class.Notes }}

{% endif %}
{% endfor %}
