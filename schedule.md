---
layout: page
title: schedule
---

<span style="float:left;">*subject to updates*</span>
<span class="schedule-item-notice">mandatory</span>
<br/>

<ul class="schedule-list">
{% for class in site.data.schedule %}
{% if class.Class %}
  <li class="schedule-item {% if class.Active %}schedule-item-active{% endif %}">
      <span class="schedule-sep">{{ class.Date | date: "%b %-d" | downcase }}
        <span class="schedule-item-notice">
          {% if class.Required %}
          <a href="#"><i class="material-icons">feedback</i></a>
          {% endif %}
        </span>
      </span>
      <span class="schedule-item-text">
        {{ class.WebsiteLabel }}
        {% if class.Reading %}
            {% for r in class.Reading %}
            <br/>Reading:
            <a href="{{ r.link}}" target="_blank">{{ r.name }}</a>
            {% endfor %}
        {% endif %}
        {% if class.StudioWebSiteLabel %} <br/>Studio: {{ class.StudioWebSiteLabel }} {% endif %}
        {% if class.Assign %} <br/><span class="schedule-item-out">Out: {{ class.Assign }} </span>{% endif %}
        {% if class.Due %} <br/><span class="schedule-item-due">Due: {{ class.Due }} </span>{% endif %}
        <!--{% if class.Studio %} <br/> Studio: {{ class.Studio }} {% endif %}-->
        <!--{% if class.Notes %} <br/>Notes: {{ class.Notes }}{% endif %}-->
        <!--{{ class.Class }}.-->
        <!--<p>{{ class.Topic }}</p>-->
      </span>
  </li>
{% endif %}
{% endfor %}
</ul>
