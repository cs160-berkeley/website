---
layout: default
title: home
---

## User Interface Design and Development

[CS160/260A](https://www2.eecs.berkeley.edu/Courses/CS160/) is an introduction
to Human Computer Interaction (HCI). You will learn to prototype, evaluate, and
design a user interface. You will be expected to work within a group of about
four students in this project-based course. Your project topic will be proposed
by your group and your project design and implementation will follow a
human-centered process. The final result will be an interactive prototype of a
novel user experience carefully tailored to the needs of your intended users.

In contrast to most of the other CS classes at Berkeley, CS160 does not
primarily focus on particular algorithmic techniques or computer technologies.
Instead, the focus of the course is on developing a broad set of skills needed
for user-centered design. These skills include ideation, needs assessment,
communication, rapid prototyping, algorithmic implementation and evaluation.


## logistics

Lecture will be on Mondays and Wednesdays from 11a - 12:30p, in [Jacobs
310](http://jacobsinstitute.berkeley.edu/). See the [full schedule](/schedule).

Join the [CS 160 Piazza](https://piazza.com/berkeley/fall2017/cs160/home) for
announcements and to ask questions about the course. Share publicly so others
with the same question can benefit. Piazza will be the quickest way to get a
response.

<!--insert bcourses link once open-->


## project theme

The theme of this semester’s projects will be *Bursting Echo Chambers in Social
Media*. We will be developing web-based applications (either on mobile or
desktop) to enable people encounter more diverse information through social
media. Another aspect of our theme is to encourage more constructive
conversation or interaction among differing perspectives through social media.
We will be leveraging the [Graph API](https://developers.facebook.com/docs/graph-api/)
and other [developer tools]( https://developers.facebook.com/) that Facebook
offers to enable connecting with the user data that’s available within
Facebook. While students are free to connect with other social media services,
we will only be providing guidance on the Facebook APIs.

## course staff

<table id="staff" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
  <thead>
    <tr>
      <th></th>
      <th class="mdl-data-table__cell--non-numeric">Contact</th>
      <th class="mdl-data-table__cell--non-numeric">Office Hours</th>
      <th class="mdl-data-table__cell--non-numeric">Location</th>
      <th class="mdl-data-table__cell--non-numeric">Section</th>
    </tr>
  </thead>
  <tbody>
{% for s in site.data.staff %}
    <tr>
      <td>{{ s.name}}</td>
      <td>
          <a href="mailto:{{ s.mail }}"><i class="icon material-icons">mail</i></a>
          <a href="{{ s.site }}" target="_blank"><i class="icon material-icons">launch</i></a>
      </td>
      <td>{{ s.ohour }}</td>
      <td>{{ s.olink }}</td>
      <td>{{ s.sect }}</td>
    </tr>
{% endfor %}
  </tbody>
</table>


<br/>
<small>[archived F16 site](/f16)</small>

