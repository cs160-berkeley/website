---
layout: page
title: assignments
---

[bcourses][bcourses] :: [piazza][piazza]

{% for s in site.data.assign %}
<span class="schedule-item-due"><a href="{{ s.link }}" target="_blank">{{ s.name }}</a>, value: {{ s.valu }}</span>
{% endfor %}

[bcourses]:https://bcourses.berkeley.edu/courses/1466271
[piazza]:https://piazza.com/class/j6fjvh1geib77c
