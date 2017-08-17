---
schedule:
  -  Class: test data
     Date: 1/1/11
     Label: test data
     Topic: test data
     Reading: test data
     Assignment: test data
     Studio: test data
     Notes: test data
---

# schedule

<!--probably make partial template render here-->

{% for class in page.schedule %}
    Class: {{ class.Class }}
    Date: {{ class.Date }}
    Label: {{ class.Label }}
    Topic: {{ class.Topic }}
    Reading: {{ class.Reading }}
    Assignment: {{ class.Assignment }}
    Studio: {{ class.Studio }}
    Notes: {{ class.Notes }}
{% endfor %}
