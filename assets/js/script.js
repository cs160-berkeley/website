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

let keypressString = "";
let comic = false;

window.onkeyup = function(e) {
  keypressString += e.key;

  if (keypressString == "design" && !comic) {
    keypressString = "";
    document.querySelector("body").style.fontFamily = "Comic Sans MS";
    comic = true;
  } else if (keypressString == "design") {
    keypressString = "";
    document.querySelector("body").style.fontFamily = "Lato";
    comic = false;
  }
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
      name: 'Human Learning and Learning Technologies',
    }, {
      name: 'Project Check-in',
    }],
    material: [{
      title: 'Forms',
      items: [{
        title: 'Github Username',
        url: 'http://bit.ly/github-usernames',
      }, {
        title: 'Kinoma Prototype',
        url: 'http://bit.ly/cs160-kinoma-checkin',
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'PROG 03',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7748010',
        html: '<span class="due-date">due Tues, Nov 1</span>'
      }, {
        title: '[GROUP] Interactive Prototype',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7753719',
        html: '<span class="due-date">due Wed, Nov 9</span>'
      }]
    }]
  }, {
    lectureDay: "Nov 10",
    required: true,
    topics: [{
      name: 'Interactive Prototype Presentations'
    }],
    material: [{
      title: 'Forms',
      items: [{
        title: 'Feedback Form [Blue]',
        url: 'https://docs.google.com/a/berkeley.edu/forms/d/e/1FAIpQLScZrW4Y5Huh-TEpw_QRamRtloWP6hTTBygns-pFRaOslzkkaw/viewform'
      }, {
        title: 'Feedback Form [Gold]',
        url: 'https://docs.google.com/a/berkeley.edu/forms/d/e/1FAIpQLSeamW8LOi3hTfeWEA6knyniiL7Rr5heMlVn8QooVu1OxSktUQ/viewform'
      }]
    }, {
      title: 'Readings',
      items: [{
        title: 'As We May Think',
        url: 'http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/',
        html: 'by Vannevar Bush. From <em>The Atlantic Magazine</em>, July 1945.'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: '[GROUP] Interactive Prototype',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7753719',
        html: '<span class="due-date">due Wed, Nov 9</span>'
      }, {
        title: 'Reading Response 07',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7756253',
        html: '<span class="due-date">due before class Thurs, Nov 17</span>'
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
    material: [{

      title: 'Studio Activity',
      items: [{
        title: 'Identity Design',
        url: 'http://bit.ly/2fB1fp1',
      }]
    }]
  }, {
    lectureDay: "Nov 24",
    topics: [{
      name: 'No Lecture (Thanksgiving)',
    }],
    material: [{

      title: 'Assignments',
      items: [{
        title: '[GROUP] Usability Study',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7755746',
        html: '<span class="due-date">due Wed, Nov 23</span>'
      }]
    }]
  }, {
    lectureDay: "Dec 1",
    isCurrent: true,
    required: true,
    topics: [{
      name: 'Future Interactions & Course Summary',
    }, {
      name: 'Project Workshop',
    }],
    material: [{
      title: 'Forms',
      items: [{
        title: 'Feedback Form [Blue]',
        url: 'http://bit.ly/cs160-final-pres-blue'
      }, {
        title: 'Feedback Form [Gold]',
        url: 'http://bit.ly/cs160-final-pres-gold'
      }]
    }, {
      title: 'Assignments',
      items: [{
        title: 'Final Presentation',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7757138',
        html: '<span class="due-date">due Mon, Dec 5</span>'
      }, {
        title: 'Final Poster',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7757136',
        html: '<span class="due-date">due Wed, Dec 7</span>'
      }, {
        title: 'Final Video & Code',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7757140',
        html: '<span class="due-date">due Mon, Dec 12</span>'
      }, {
        title: 'Final Report',
        url: 'https://bcourses.berkeley.edu/courses/1454557/assignments/7757557',
        html: '<span class="due-date">due Mon, Dec 12</span>'
      }]
    }]
  }
]


var projects = [
  {
    title: "Greener House",
    tagline: "An automated greenhouse",
    description: "The Greener House helps gardeners better grow their plants through the use of an IoT greenhouse and companion mobile application. We hope that with a mobile application that can remotely monitor and change greenhouse settings, users will be able to remotely grow their plants just as well as if they were physically tending to their plants.",
    imgURL: "http://i.imgur.com/GuYFpcd.jpg",
    externalURL: "",
  }, {
    title: "PillSense",
    tagline: "For Doctors. For Patients. For You.",
    description: "PillSense is a internet connected portable pill dispenser that has the ability to issue the correct medication at the correct time and track and record whether pills are taken on time using a variety of sensors. It has a reminder alarm and pill dispensing calendar built in that will work even if the unit has no connection. Companion app included.",
    imgURL: "https://s3-us-west-2.amazonaws.com/ment2reachwebsiteimages/PillSenseLogo.png",
    externalURL: "",
  }, {
    title: "HoM: Household Monitor",
    tagline: "A busy parent's dream to monitoring a smart home",
    description: "HoM lets busy parents use a smartphone to monitor their household appliances when they’re not there. They can perform tasks like turn a light off, unlock a door, or even customize the timing they want their oven to turn on, all with the push of a button. Through the use of HoM, users can live life more at ease.",
    imgURL: "http://i.imgur.com/s7dNf92.png",
    externalURL: "",
  }, {
    title: "Upstream",
    tagline: "A fish tank that keeps your aquarium fish healthy",
    description: "Many people choose to own fish because they can be low maintenance animals compared to other pets. However, several studies have shown that fish often die from careless actions due to fish owners forgetting to feed them, or from changes in the tank that can be hard to detect. Upstream will help fish owners monitor the health of their fish.",
    imgURL: "",
  }, {
    title: "Smart Window",
    tagline: "Say Goodbye to Lighting Issues!",
    description: "Smart Window is a product that will revolutionize the way photographers take their pictures. Smart Window allows photographers to customize the light, color, and display settings of their personal window, all via an easy to use companion application. Smart Window will save time and money for its users, and make lighting issues a thing of the past.",
    imgURL: "http://i.imgur.com/KHHxvmL.jpg",
  }, {
    title: "Shoereo",
    tagline: "Dance With the World",
    description: "Shoereo is a companion app and insole worn by users in their shoes that tracks and records movements, allowing users to create and record choreography that they can share with friends. Shoereo allows for remote dance collaboration and automized feedback, helping to address the problem of spaces and scheduling that many dance teams face.",
    imgURL: "http://i.imgur.com/1lJ4SYZ.jpg",
  }, {
    title: "Splitsies",
    tagline: "Mi Casa Es Su Casa, except my food",
    description: "Splitsies will be everyone’s fridge management application that solves food waste issues and organize communal consumables. Our product aims to help roommates solve issues over food ownership and fridge clutter by looking to improve the way users interact with their fridge. ",
    imgURL: "http://i.imgur.com/X5fDBCq.png",
  }, {
    title: "EZ Garden",
    tagline: "Become a master gardener in minutes",
    description: "EZ Garden is a connected device and app that seeks to teach career-focused young adults how to grow and maintain a personal garden. Our goal is to enable gardening for students and professionals who lack time, physical space, and knowledge of plants. Users learn to plant, water, and care for gardens with the app’s guidance.",
    imgURL: "http://i.imgur.com/4wFhN55.png",
  }, {
    title: "iQuarium",
    tagline: "What is your aquarium IQ?",
    description: "iQuarium is the companion app to a smart aquarium which addresses is the difficulty for busy fish owners to care for their fish. Our interface will provide various ways for fish owners to care for their aquatic life such as allowing scheduled feeding times and being able to view data about their aquarium on demand while miles away from home.",
    imgURL: "http://i.imgur.com/h563De9.png",
  }, {
    title: "Offspring",
    tagline: "Ensure your child’s safety",
    description: "Offspring is a mobile companion app and a dedicated, durable low-cost watch device for children that allows parents, guardians, and caretakers to track and communicate with their kids. Offspring puts the safety of children first in an unobtrusive and seamless way while also acting as a fun wearable in their favorite styles!",
    imgURL: "http://i.imgur.com/EgtzfXL.jpg",
  }, {
    title: "STYLR",
    tagline: "THE MODERN DAY CLOSET, REINVENTED",
    description: "STYLR is an application that pairs with a smart closet to allow remote access and seamless interaction with closet inventory. It also provides stylists a design space to brainstorm outfit ideas. STYLR enables stylists to be less hampered by operational tasks and instead invest more on the creative design process.",
    imgURL: "http://i.imgur.com/4h1bH7E.png",
  }, {
    title: "hype!",
    tagline: "Hype it up without getting locked up",
    description: "When throwing a party, you often need to choose between playing loud, energetic music and not causing a noise disturbance. hype! offers an alternative by playing loud music that partygoers will love, while ensuring the party doesn’t get too noisy. hype! deals with the noise so you can focus on having fun.",
    imgURL: "http://i.imgur.com/FhXJvlZ.jpg",
  }, {
    title: "Alert Me",
    tagline: "Items Stolen? We got you.",
    description: "Personal belongings can be stolen within a split second, and retrieving those lost items can be extremely burdensome. Alert Me is an anti-theft device that is attachable to any kind of belonging. It works with your phone app to notify you if anyone tries to move or take away your items and tracks the location of all your items.",
    imgURL: "http://i.imgur.com/Mm61h2i.png",
  }, {
    title: "Budget Buddy",
    tagline: "Shop faster and easier on a budget",
    description: "Make your experience shopping on a budget easier! The Budget Buddy keeps track of your budget for you as you grab items and scan them into the connected SmartCart. Make a list and shop with our handy app to make your shopping trip a breeze!",
    imgURL: "",
  }, {
    title: "QueueTip",
    tagline: "Make music festivals less about the lines and more about the music.",
    description: "At music festivals, why spend so much time waiting in line for food or the restroom when you could be enjoying your favorite artist performing instead? With QueueTip, our goal is to enhance the concert experience by providing concertgoers with line wait times that enable them to plan accordingly and have more time to enjoy the music.",
    imgURL: "http://i.imgur.com/yNvo5mp.png",
  }, {
    title: "A La Carte",
    tagline: "Modernizing the shopping experience",
    description: "A La Carte is a smartphone and shopping cart sensor combination that makes shopping more intuitive and fun! With A La Carte, you can checkout faster, find the best deals, boost your health, and save money. This is all done by revamping the shopping experience using smart technology.",
    imgURL: "https://i.imgur.com/OXftaUY.jpg",
  }, {
    title: "Vibe",
    tagline: "A dating app built for your active lifestyle!",
    description: "Vibe aims to reach out to busy, young singles who want a dating app that plays the role of a companion in their dating life while maintaining the traditional dating app anonymity and discretion. Vibe brings people together in the real world, addressing issues that appear in other dating applications such as misrepresentation/catfishing.",
    imgURL: "http://i.imgur.com/bznLwsW.png",
  }, {
    title: "Aromafy",
    tagline: "The smell you want, the convenience you need",
    description: "Aromafy is a smart phone app that pairs with an aroma diffuser to allow users to customize the scent of their rooms in order to promote rest and relaxation. The frequency and intensity of several pre-installed fragrances can be regulated through the app to give users full control of their room's scent.",
    imgURL: "http://i.imgur.com/Bl0lUR5.jpg",
  }
]


var app = angular.module('app', ['ngSanitize']);

app.controller('ScheduleController', ['$scope', function($scope) {
  this.schedule = schedule;
}]);

app.controller('ShowcaseController', ['$scope', function($scope) {
  let projectContainerHeight = () => {
    let totalHeight = 0;
    let mainContainer = document.querySelector(".all-projects-container");
    let innerList = mainContainer.querySelectorAll(".project-container");

    innerList.forEach((item) => {
      totalHeight += (item.offsetHeight * 1.2);
    })

    height = totalHeight / 3 + "px";
    return height;
  }

  this.projects = projects;
  this.calculateInnerHeight = projectContainerHeight;

  let mainContainer = document.querySelector(".all-projects-container");

  window.addEventListener("resize", () => {
    let newHeight = projectContainerHeight();
    mainContainer.style.height = newHeight;
  })

  setTimeout(() => {
    let newHeight = projectContainerHeight();
    mainContainer.style.height = newHeight;
  }, 1000)

  document.querySelector("body").addEventListener("mouseover", () => {
    let newHeight = projectContainerHeight();
    mainContainer.style.height = newHeight;
  })
}]);
