---
layout: page
title: assignments
---

[bcourses][bcourses] :: [piazza][piazza]

<br/>

{% for s in site.data.assign %}
<span class="schedule-item-due"><a href="{{ s.link }}" target="_blank">{{ s.name }}</a>, value: {{ s.valu }}</span>
{% endfor %}

<br/>

<span class="schedule-item-out">
There is a total 25 points for all individual programming & small group design assignments. 
</span>

[bcourses]:https://bcourses.berkeley.edu/courses/1466271
[piazza]:https://piazza.com/class/j6fjvh1geib77c
