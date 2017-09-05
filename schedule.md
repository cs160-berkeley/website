---
layout: page
title: schedule
---

<span style="float:left;">
[current class](#current-class) :: *subject to updates*</span>
<span class="schedule-item-notice">mandatory</span>
<br/>


<ul class="schedule-list">
{% for class in site.data.schedule %}
{% if class.Class %}
    <li {% if class.Active %}id="current-class"{% endif %}
    class="schedule-item {% if class.Active %}schedule-item-active{% endif %}">
      <span class="schedule-sep">{{ class.Date | date: "%b %-d" | downcase }}
        <span class="schedule-item-notice">
          {% if class.Required %}
          <a href="#"><i class="material-icons">feedback</i></a>
          {% endif %}
        </span>
      </span>
      <span class="schedule-item-text">
        Topic:
        {% if class.Slides %}
            <a href="{{ class.Slides }}" target="_blank">{{ class.WebsiteLabel }}</a>
            {% else %}
            {{ class.WebsiteLabel }}
        {% endif %}
        {% if class.Reading %}
            {% for r in class.Reading %}
            {% if r.name %}
            <br/>Reading: <a href="{{ r.link}}" target="_blank">{{ r.name }}</a>
            {% else %}
            <br/>Reading: {{ r }}
            {% endif %}
            {% endfor %}
        {% endif %}
        {% if class.StudioWebSiteLabel %} <br/>Studio: {{ class.StudioWebSiteLabel }} {% endif %}
        {% if class.Assign %}
            {% if class.Assign.name %}
            <br/><span class="schedule-item-out">Out: <a href="{{ class.Assign.link }}">{{ class.Assign.name }}</a> </span>
            {% else %}
            <br/><span class="schedule-item-out">Out: {{ class.Assign }} </span>
            {% endif %}
        {% endif %}
        {% if class.Due %}
            {% if class.Due.name %}
            <br/><span class="schedule-item-due">Due: <a href="{{ class.Due.link }}">{{ class.Due.name }}</a> </span>
            {% else %}
            <br/><span class="schedule-item-due">Due: {{ class.Due }} </span>
            {% endif %}
        {% endif %}
      </span>
  </li>
{% endif %}
{% endfor %}
</ul>

[all course slides](https://drive.google.com/open?id=0Bw5c_JsRiheEaEdVMWJ0cXJ6X00) ::
[all assignments](/assign) ::
[all readings](https://drive.google.com/open?id=0Bw5c_JsRiheEYUFUUDdKOXlCTDQ)

