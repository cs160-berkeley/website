// Check if the DOMContentLoaded has already been completed
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  scrollBarHandler();
} else {
  document.addEventListener('DOMContentLoaded', scrollBarHandler);
}

function scrollBarHandler() {
  var nav = document.querySelector('.scroll-nav');

  window.addEventListener('scroll', function() {
    var distance = document.body.scrollTop;

    if (distance > 190) {
      nav.classList.add('active');
    } else {
      nav.classList.remove('active');
    }
  })
}

var schedule = [
  {
    lectureDay: "Aug 25",
    topics: ['Introduction'],
    material: [{
      title: 'Lecture',
      items: [{
        title: 'Slides',
        url: 'https://drive.google.com/open?id=0B7qiT-cxa1ayTlJCUXN0S2RXbHM'
      }]
    },{
      title: 'Readings',
      items: [{
        title: 'The Task-Centered Design Process',
        url: 'http://www.hcibib.org/tcuid/chap-1.html',
        html: 'in <em>Task-Centered User Interface Design</em>. Chap 1. Lewis & Rieman'
      }, {
        title: 'Personas: Practice and Theory',
        url: 'http://research.microsoft.com/en-us/um/people/jgrudin/publications/personas/designchapter.pdf',
        html: 'by John Pruitt and Jonathan Grudin'
      }, {
        title: 'Principles of Contextual Inquiry',
        url: 'files/readings/1/contextual_inquiry.pdf',
        html: 'Chapter 3 from <em>Contextual Design</em> by Beyer & Holtzblatt'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Reading Response 01',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7736970',
        html: '<span class="due-date">due before class Thurs, Sep 1</span>'
      }, {
        title: 'DESIGN 01: Interviewing',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7736272',
        html: '<span class="due-date">due Fri, Sep 2 at 11:59pm</span>'
      }]
    }]
  }, {
    lectureDay: "Sep 1",
    topics: ['Storyboards, Scenarios, and Personas', 'Task Analysis & Contextual Inquiry'],
    material: [{
      title: 'Lecture',
      items: [{
        title: 'Slides (Part 1)',
        url: 'https://drive.google.com/open?id=0B7qiT-cxa1ayWTd2MmVBVTVOREU'
      }, {
        title: 'Slides (Part 2)',
        url: 'https://drive.google.com/open?id=0B7qiT-cxa1ayUXpmb0Eza1d6Q2c'
      }, {
        title: 'Webcast',
        url: 'https://www.youtube.com/watch?v=x5hAJINjfro',
        html: '(sorry, part 2 only)'
      }, {
        title: 'Studio Activity',
        url: 'http://bit.ly/cs160-storyboard-activity',
        html: 'Storyboarding'
      }]
    },{
      title: 'Readings',
      items: [{
        title: 'Direct Manipulation Interfaces',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69530499',
        html: 'Chapter 5 from <em>User Centered System Design</em>. Hutchins, Hollan & Norman.'
      }, {
        title: 'The Psychopathology of Everyday Things',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69530519',
        html: 'Chapter 1 from <em>The Design of Everyday Things</em> by Don Norman.'
      }, {
        title: 'Cognetics and the Locus of Attention',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69530523',
        html: 'Chapter 2 from <em>The Humane Interface</em> by Jef Raskin. <b>(260A students only)</b> '
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Reading Response 02',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7739076',
        html: '<span class="due-date">due before class Thurs, Sep 8</span>'
      }, {
        title: 'PROG 01: Calorie Converter',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7739607',
        html: '<span class="due-date">due Fri, Sep 9 at 11:59pm</span>'
      }]
    }]
  }, {
    lectureDay: "Sep 8",
    topics: ['Conceptual Models', 'Design Implications of Conceptual Models'],
    material: [{
      title: 'Lecture',
      items: [{
        title: 'Studio Activity',
        url: 'http://bit.ly/cs160-models-activity',
        html: 'Conceptual Models & Metaphors'
      }]
    }, {
      title: 'Readings',
      items: [{
        title: 'Cross-device interactions and interusability',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69574414/',
        html: 'Chapter 9 from <em>Designing Connected Products</em>. Rowland, Goodman, Charlier, Lui & Light.'
      }, {
        title: 'Interoperability',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69574417/',
        html: 'Chapter 10 from <em>Designing Connected Products</em>. Rowland, Goodman, Charlier, Lui & Light.'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Reading Response 03',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7741112',
        html: '<span class="due-date">due before class Thurs, Sep 15</span>'
      }, {
        title: 'DESIGN 02',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7740218',
        html: '<span class="due-date">due Tues, Sep 13 at 11:59pm</span>'
      }]
    }]
  }, {
    lectureDay: "Sep 15",
    required: true,
    topics: ['Connected Devices', 'In-Class Brainstorm'],
    material: [{
      title: 'Lecture',
      items: [{
        title: 'Studio Activity',
        html: 'In-Class Brainstorm'
      }]
    }]
  }, {
    lectureDay: "Sep 22",
    topics: ['Modality & Heuristic Evaluation', 'Human Models']
  }, {
    lectureDay: "Sep 29",
    topics: ['Input Devices', 'Prototyping']
  }, {
    lectureDay: "Oct 6",
    topics: ['Usability Testing', 'Data Analysis']
  }, {
    lectureDay: "Oct 13",
    topics: ['UI Engineering', 'Midterm Review']
  }, {
    lectureDay: "Oct 20",
    required: true,
    topics: ['Midterm']
  }, {
    lectureDay: "Oct 27",
    topics: ['IOT Panel']
  }, {
    lectureDay: "Nov 3",
    required: true,
    topics: ['Visual Design', 'Information Visualization']
  }, {
    lectureDay: "Nov 10",
    required: true,
    topics: ['Group Prototype Presentations']
  }, {
    lectureDay: "Nov 17",
    required: true,
    topics: ['Historical Perspectives on HCI', 'Project Workshop']
  }, {
    lectureDay: "Nov 24",
    topics: ['No Lecture']
  }, {
    lectureDay: "Dec 1",
    required: true,
    topics: ['Future Interactions & Course Summary', 'Project Workshop']
  }
]

var app = angular.module('app', ['ngSanitize']);

app.controller('ScheduleController', ['$scope', function($scope) {
  this.schedule = schedule;
}]);
