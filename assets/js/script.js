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
    topics: [{
      name: 'Introduction',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayTlJCUXN0S2RXbHM',
      video: '',
    }],
    material: [{
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
    topics: [{
      name: 'Storyboards, Scenarios, and Personas',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayWTd2MmVBVTVOREU',
      video: '',
    }, {
      name: 'Task Analysis & Contextual Inquiry',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayUXpmb0Eza1d6Q2c',
      video: 'https://www.youtube.com/watch?v=x5hAJINjfro',
    }],
    material: [{
    	title: 'Studio Activity',
    	  items: [{
    	    title: 'Storyboarding',
    	    url: 'hhttp://bit.ly/cs160-storyboard-activity'
    	  }]
    	}, {
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
    topics: [{
      name: 'Conceptual Models',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayZWljazVFRHoyUmc',
      video: '',
    }, {
      name: 'Design Implications of Conceptual Models',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayblR4ak9oMGNwUWM',
      video: '',
    }],
    material: [{
    	 title: 'Studio Activity',
    	  items: [{
    	    title: 'Conceptual Models',
    	    url: 'http://bit.ly/cs160-models-activity'
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
    topics: [{
      name: 'Connected Devices',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayV3FEU0F1aW5NTXM',
    }, {
      name: 'In-Class Brainstorm',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayeEhYRjRGUndyWHc',
    }],
    material: [{
      title: 'Studio Activity',
      items: [{
        title: 'Group Brainstorm Warmup & Prompt',
        url: 'http://bit.ly/cs160fa16-brainstorming'
      }]
    }, {
      title: 'Reading',
      items: [{
        title: 'How to Conduct a Heuristic Evaluation',
        url: 'https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/',
      }, {
        title: 'Ten Recommended Heuristics',
        url: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
      }, {
        title: 'Severity Ratings for Usability Problems',
        url: 'http://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/',
      }, {
        title: 'The Model Human Processor',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69618468/',
        html: '<em>The Psychology of Human-Computer Interaction</em>. Chap 2. Card, Moran & Newell. Pages 24-76.'
      }, {
        title: 'Motor Behavior Models for HCI',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69618484/',
        html: '<em>HCI Models, Theories, and Frameworks: Toward a Multidisciplinary Science</em>, Chapter 3 <strong>(260A students only)</strong>'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Reading Response 04',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7742853',
        html: '<span class="due-date">due before class Thurs, Sep 22</span>'
      }, {
        title: 'PROG 02',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7743125',
        html: '<span class="due-date">due Fri, Sep 30 at 11:59pm</span>'
      }, ]
    }]
  }, {
    lectureDay: "Sep 22",
    topics: [{
      name: 'Modality & Heuristic Evaluation',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayNnJjTHFsYTR4eG8'
    }, {
      name: 'Human Models',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayUDdXUXo1S2JmTTQ'
    }],
    material: [{
      title: 'Studio Activity',
      items: [{
        title: 'Heuristic Evaluation',
        url: 'http://bit.ly/2cUHs29'
      }]
    }, {
      title: 'Readings',
      items: [{
        title: 'Input Technologies and Techniques',
        url: 'http://research.microsoft.com/en-us/um/people/kenh/papers/input-technologies-and-techniques-2006.pdf',
        html: 'by Ken Hinckley, in <em>Handbook of Human-Computer Interaction</em>, ed. by A. Sears & J. Jacko. <strong>(Pages 1-19 only!)</strong>'
      }, {
        title: 'What do Prototypes Prototype?',
        url: 'https://courses.cs.washington.edu/courses/cse440/12au/readings_files/Houde-Prototypes.pdf',
        html: 'by Stephanie Houde and Charles Hill, 1997.'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: '[GROUP] Brainstorm',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7743278',
        html: '<span class="due-date">due Fri, Sep 23 at 11:59pm</span>'
      }, {
        title: 'Reading Response 05',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7744639',
        html: '<span class="due-date">due before class Thurs, Sep 29</span>'
      }]
    }]
  }, {
    lectureDay: "Sep 29",
    topics: [{
      name: 'Prototyping',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayZTNJVTE1WkFtcmM'
    }, {
      name: 'Input Devices & UI Engineering',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1aycEJma1RuZFNjRnM'
    }],
    material: [{
      title: 'Studio Activity',
      items: [{
        title: 'Prototypes & Wizard of Oz Studies',
        url: 'http://bit.ly/2cZsiG9',
      }]
    }, {
      title: 'Readings',
      items: [{
        title: 'How to Do Experiments',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69722152/',
        html: 'Chapter 2 from <em>Doing Psychology Experiments</em> by David Martin.'
      }, {
        title: 'How to Interpret Experiment Results',
        url: 'https://bcourses.berkeley.edu/courses/1454557/files/69722155/',
        html: 'Chapter 12 from <em>Doing Psychology Experiments</em> by David Martin.'
      }, {
        title: 'Psychology Journal Bans Significance Testing',
        url: 'https://www.sciencebasedmedicine.org/psychology-journal-bans-significance-testing/',
        html: ''
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Heuristic Evaluation',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7744556',
        html: '<span class="due-date">due Wed, Sep 28 at 11:59pm</span>'
      }, {
        title: 'Reading Response 06',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7746148',
        html: '<span class="due-date">due before class Thurs, Oct 6</span>'
      }]
    }]
  }, {
    lectureDay: "Oct 6",
    topics: [{
      name: 'Usability Testing',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayZG8tR0p0dlhzd3M'
    }, {
      name: 'Data Analysis',
      slides: 'https://drive.google.com/open?id=0B7qiT-cxa1ayQXNQYW9NNGpvR1k'
    }],
    material: [{
      title: 'Studio Activity',
      items: [{
        title: 'Usability Testing Activity',
        url: 'http://bit.ly/user-test-studio',
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'PROG 03',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7748010',
        html: '<span class="due-date">due Tues, Nov 1</span>'
      }, {
        title: '[GROUP] Contextual Inquiry, Task Analysis, Competitive Analysis',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7745606',
        html: '<span class="due-date">due Thurs, Oct 6</span>'
      }]
    }]
  }, {
    lectureDay: "Oct 13",
    topics: [{
      name: 'Guest Lecture',
    }, {
      name: 'Midterm Review',
      slides: 'https://docs.google.com/a/berkeley.edu/presentation/d/1_T2vYqB9Y0pGp6-KdA6IUnrtAQ50K5zss-_8BWLviqI/edit?usp=sharing'
    }],
    material: [{
      title: 'Assignments',
      items: [{
        title: '[GROUP] Low-Fi Prototype Video',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7748005',
        html: '<span class="due-date">due Mon, Oct 17</span>'
      }]
    }]
  }, {
    lectureDay: "Oct 20",
    required: true,
    topics: [{
      name: 'Midterm',
    }],
  }, {
    lectureDay: "Oct 27",
    isCurrent: true,
    topics: [{
      name: 'Kinoma Hardware Workshop',
    }],
    material: [{
      title: 'Assignments',
      items: [{
        title: '[GROUP] Low-Fi User Test',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7748005',
        html: '<span class="due-date">due Fri, Oct 28</span>'
      }]
    }]
  }, {
    lectureDay: "Nov 3",
    required: true,
    topics: [{
      name: 'Visual Design',
    }, {
      name: 'Information Visualization',
    }],
    material: [{
      title: 'Assignments',
      items: [{
        title: 'PROG 03',
        url: '',
        html: '<span class="due-date">due this week</span>'
      }]
    }]
  }, {
    lectureDay: "Nov 10",
    required: true,
    topics: [{
      name: 'Group Prototype Presentations',
    }],
    material: [{
      title: 'Assignments',
      items: [{
        title: '[GROUP] Interactive Prototype + Presentation',
        url: '',
        html: '<span class="due-date">due date TBD</span>'
      }]
    }]
  }, {
    lectureDay: "Nov 17",
    required: true,
    topics: [{
      name: 'Historical Perspectives on HCI',
    }, {
      name: 'Project Workshop',
    }],
  }, {
    lectureDay: "Nov 24",
    topics: [{
      name: 'No Lecture (Thanksgiving)',
    }],
    material: [{
      title: 'Assignments',
      items: [{
        title: '[GROUP] Usability Study',
        url: '',
        html: '<span class="due-date">due date TBD</span>'
      }]
    }]
  }, {
    lectureDay: "Dec 1",
    required: true,
    topics: [{
      name: 'Future Interactions & Course Summary',
    }, {
      name: 'Project Workshop',
    }],
  }
]


var app = angular.module('app', ['ngSanitize']);

app.controller('ScheduleController', ['$scope', function($scope) {
  this.schedule = schedule;
}]);
