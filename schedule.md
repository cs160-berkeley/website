---
layout: default
title: schedule
---

<!--probably make partial template render here-->

{% for class in site.data.schedule %}
    Class: {{ class.Class }}
    Date: {{ class.Date }}
    Label: {{ class.Label }}
    Topic: {{ class.Topic }}
    Reading: {{ class.Reading }}
    Assignment: {{ class.Assignment }}
    Studio: {{ class.Studio }}
    Notes: {{ class.Notes }}
{% endfor %}
