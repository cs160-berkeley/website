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
    isCurrent: true,
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


var projects = [
  {
    title: "MedAgenda",
    tagline: "Smart wear meets health care",
    description: "MedAgenda is a smartphone and smartwatch app that helps nurses take better care of their patients. MedAgenda modernizes current hospital technology through integration with the hospital’s electronic record system to bring patient to do lists and reminders directly into a nurse's hands.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Pillpal",
    tagline: "Everything is under control",
    description: "Pillpal is a mobile and smartwatch app that allows women to monitor the effects of birth control on their body through built­in sensors on the smartwatch. It analyzes the user’s hormone levels to give them accurate and timely information about their body. Pillpal also allows users to request refills for birth control and other contraceptives, all in the comfort of their own homes. Shipping is quick and stress­free.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "First Steps",
    tagline: "Find yourself with First Steps",
    description: "First Steps is an Android application aiding those who suffer from alcohol addiction. By providing an easy and efficient method to finding local AA meetings, users are more inclined to attend and participate in their AA community. First Steps allows users to search for AA meetings by location, time, day, and even by average age or number of attendees. We rely on user­generated feedback to review meetings, giving us a rich database of detailed AA meeting information to improve every user’s experience. Personally, a user may save an unlimited number of AA meetings for future reminders and smartwatch notifications.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Scratch That Habit!",
    tagline: "Don't scratch that itch, scratch that habit!",
    description: "The physical symptoms of eczema are a burden on their own, but their impact on a person’s self-esteem can be even greater. We hope that by helping people develop the habits that eczema management often necessitates, we can also relieve them of the mental burden of a physical condition.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Pensieve",
    tagline: "Forget the Worries. Remember Yourself.",
    description: "The idea behind Pensieve is to create an application that helps dementia patients in a number of ways. Most obviously, it reminds patients about daily tasks and gives family members the ability to view and update the patient's schedule. But we also intend for Pensieve to be a tool to help families better take care of their loved ones that are effected by dementia, and help strengthen the patient's support group. We do this by giving family members real-time updates about the status of the patient, allowing them to more effectively organize help. By tracking how well the patient remembers to do their daily tasks, we can provide family members and medical professionals with valuable data about the progression of the patient's symptoms, hopefully allowing them to tailor treatment specifically to the individual.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "A Buddie",
    tagline: "A comforting hand wherever and whenever you need it",
    description: "A Buddie helps parents to encourage autistic kids to complete tasks that they are nervous about with games, trivia, and a reminder system.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Ally",
    tagline: "Alzheimer's with Autonomy",
    description: "Ally is an application that provides an Alzheimer’s caregivers peace of mind, even when they’re not with their patients. It enables caregivers to be promptly notified when a loved one becomes lost, confused, or simply needs help. Alzheimer’s disease is the most common cause of dementia. Dementia is a broad category that includes many aspects of cognitive impairment, especially memory loss and judgment. Caring for someone with Alzheimer’s can be overwhelming. Unlike our competitors, Ally is free, designed for modern smartphones, and combines 4 essential features: caregiver profiles, a patient help button, patient location tracking, and medication reminders. We are confident that Ally is the most accessible and powerful Alzheimer's assistance app on the market.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Have?",
    tagline: "STD testing that doesn't suck",
    description: "When you have concerns about your sexual health, have? Experts are there to set your mind at ease. Just enter your symptoms and upload a photo, and let your Experts take care of the rest.",
    imgURL: "",
    externalURL: "",
  }, {
    title: "Glucose Bonds",
    tagline: "Being together can be pretty sweet",
    description: "A mobile and wear social app designed for caretakers with diabetic children. We target the fundamental problem of getting the proper connections and resources to deal with many of the underlying struggles of having a diabetic child. This includes, but not limited to: developing close connections, reassuring child’s normalcy, and understanding insurance policies. We solve this problem by offering several features that allow the user to connect with the community. One major feature is our mentoring system that allows more experienced caretakers to mentor those who are newer. Other features include a forum section and a generalized education section. You should not feel alone when taking care of your diabetic child. We provide the resources for you to have the strong personal community to support you the whole way.",
    imgURL: "",
    externalURL: "",
  },
]


var app = angular.module('app', ['ngSanitize']);

app.controller('ScheduleController', ['$scope', function($scope) {
  this.schedule = schedule;
}]);

app.controller('ShowcaseController', ['$scope', function($scope) {
  this.projects = projects;
  this.calculateInnerHeight = () => {
    let totalHeight = 0;
    let mainContainer = document.querySelector(".all-projects-container");
    let innerList = mainContainer.querySelectorAll(".project-container");

    innerList.forEach((item) => {
      totalHeight += (item.offsetHeight * 1.2);
    })

    height = totalHeight / 3 + "px";
    return height;
  }
}]);
