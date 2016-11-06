// First, the data objects

var bio = {
  "name" : "Mark Llewellyn James",
  "role" : "Occasional Web Developer",
  "contacts" : contacts,
  "biopic" : "images/portrait-small.jpg",
  "skills" : [
    "Networks & Systems Integration",
    "Network Management & OSS",
    "PS Team Building & Mentoring",
    "Pragmatic Web Development"],
    "welcomeMessage" : "Some notes about myself, for the purposes of Udacity Front End Developer course"
};

var contacts = {};
contacts.mobile = "555-555-1234";
contacts.email = "mlljuk@gmail.com";
contacts.github = "Grimfold";
contacts.twitter = "@mlljuk";
contacts.location = "UK";

var work = [
  {
    "employer": "MLJ Networks Limited",
    "title": "Consultant and Director",
    "location": "UK",
    "dates": "2010 - Present",
    "description": "Independent Contractor focussing on Network Management and Systems Integration"
  },
  {
    "employer": "EMC Smarts",
    "title": "Solutions Architect",
    "location": "UK and Europe",
    "dates": "2007 - 2010",
    "description": "Solution design and implementation for a wide range of European Telcos and Large Enterprises as part of EMC SMARTS Professional Services"
  }
];

var projects = [
  {
    "title": "Time Travel Project",
    "dates": "2100-2120",
    "description": "Time Machine Built",
    "images": [
      "/img/timewarp.jpg"
    ]
  }
];

var education = {
  "schools": [
    {
      "name": "University College London",
      "location": "London",
      "qualification": "BSc",
      "subject": ["Astrophysics"],
      "graduation": "1993",
      "url": "http://www.ucl.ac.uk/"
    },
    {
      "name": "Gorseinon Tertiary College",
      "location": "Swansea",
      "qualification": "A Levels",
      "subject": ["Physics", "Applied Mathematics", "Pure Mathematics"],
      "graduation": "1990",
      "url": "http://www.gcs.ac.uk/"
    }
  ],
  "onlineCourses": [
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    }
  ]
};

// Need this line, or nothing gets displayed due to lack of h1 tag

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills));
}

function displayWork() {
  for (job in work){
    if (work.hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work[job].employer))+(HTMLworkTitle.replace("%data%", work[job].title)));
      $(".work-entry:last").append((HTMLworkLocation.replace("%data%", work[job].location)));
      $(".work-entry:last").append((HTMLworkDates.replace("%data%", work[job].dates)));
      $(".work-entry:last").append((HTMLworkDescription.replace("%data%", work[job].description)));
      //console.log(work[job]);
    }
  }
}

displayWork();

$(document).click(function(loc) {
  //console.log(loc.data);
  //console.log(loc.pageX);
  logClicks(loc.pageX, loc.pageY);
});
