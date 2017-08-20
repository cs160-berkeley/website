---
layout: default
title: home
---

## User Interface Design and Development

CS160/260A is an introduction to Human Computer Interaction (HCI). You will
learn to prototype, evaluate, and design a user interface. You will be expected
to work within a group of about four students in this project-based course.
Your project topic will be proposed by your group and your project design and
implementation will follow a human-centered process. The final result will be
an interactive prototype of a novel user experience carefully tailored to the
needs of your intended users.

In contrast to most of the other CS classes at Berkeley, CS160 does not
primarily focus on particular algorithmic techniques or computer technologies.
Instead, the focus of the course is on developing a broad set of skills needed
for user-centered design. These skills include ideation, needs assessment,
communication, rapid prototyping, algorithmic implementation and evaluation.

## logistics

- Course: CS 160/260A Fall 2017, UC Berkeley
- Lecture: Monday, Wednesday 11:00am-12:30pm
- Location: [Jacobs 310](http://jacobsinstitute.berkeley.edu/)
- Discussion: [Piazza](https://piazza.com/class/j6fjvh1geib77c)


Join Piazza for announcements and to ask questions about the course. Share
publicly so others with the same question can benefit. Piazza will be the
quickest way to get a response.

## staff

<table id="staff" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Staff</th>
      <th>Contact</th>
      <th>Office Hours</th>
      <th>Location</th>
      <th>Section</th>
    </tr>
  </thead>
  <tbody>
{% for s in site.data.staff %}
    <tr>
      <td>{{ s.name}}</td>
      <td><a href="mailto:{{ s.mail }}"><i class="icon material-icons">mail</i></a></td>
      <td>{{ s.ohour }}</td>
      <td>{{ s.olink }}</td>
      <td>{{ s.sect }}</td>
    </tr>
{% endfor %}
  </tbody>
</table>

<br/>
<small>[archived F16 site](/f16)</small>

