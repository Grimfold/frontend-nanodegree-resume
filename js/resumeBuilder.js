// First, the data objects
var bio = {
  "name": "Mark James",
  "role": "Occasional Web Developer",
  "contacts": {
    "mobile": "555-555-1234",
    "email": "mlljuk@gmail.com",
    "github": "Grimfold",
    "twitter": "@mlljuk",
    "location": "UK"
  },
  "welcomeMessage": "Some notes about myself, for the purposes of Udacity Front End Developer course",
  "skills": [
    "Networks & Systems Integration",
    "Network Management & OSS",
    "PS Team Building & Mentoring",
    "Pragmatic Web Development"
  ],
  "biopic": "./images/portrait-small.jpg",
};

var work = {
  "jobs": [{
      "employer": "MLJ Networks Limited",
      "title": "Consultant and Director",
      "location": "UK",
      "dates": "2010 - Present",
      "description": "Independent Contractor focussing on Network Management and Systems Integration"
    },
    {
      "employer": "EMC Smarts",
      "title": "Solutions Architect",
      // Makes map look more interesting than saying UK. Would be better to change locationFinder in helper.js to deal with multiple l.,ocations per job
      "location": "Europe",
      "dates": "2007 - 2010",
      "description": "Solution design and implementation for a wide range of European Telcos and Large Enterprises as part of EMC SMARTS Professional Services."
    }
  ]
};

var projects = {
  "projects": [{
      "title": "Time Travel Project",
      "dates": "2100 - 2120",
      "description": "Time Machine Built",
      "images": [
        "./images/timewarp.jpg",
        "./images/fry.jpg"
      ]
    },
    {
      "title": "Narcissism Project",
      "dates": "2012 - 2016",
      "description": "Better Photos of me",
      "images": [
        "./images/portrait-small.jpg"
      ]
    }
  ],
};

var education = {
  "schools": [{
      "name": "University College London",
      "location": "London",
      "degree": "BSc",
      "majors": ["Astrophysics"],
      "dates": "1990 - 1993",
      "url": "http://www.ucl.ac.uk/"
    },
    {
      "name": "Gorseinon Tertiary College",
      "location": "Swansea",
      "degree": "A Levels",
      "majors": ["Physics", "Applied Mathematics", "Pure Mathematics"],
      "dates": "1988 - 1990",
      "url": "http://www.gcs.ac.uk/"
    }
  ],
  "onlineCourses": [{
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": "2016 - 2017",
      "url": "http://www.udacity.com"
    },
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": "2012 - 2013",
      "url": "http://www.udacity.com"
    }
  ]
};


// Now, the display functions

//console.log(projects.projects[0]);
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
    for (var j = 0; j < projects.projects[i].images.length; j++) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
    }
    //console.log(projects.projects[i].title);
  }
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[i].employer)) + (HTMLworkTitle.replace("%data%", work.jobs[i].title)));
    $(".work-entry:last").append((HTMLworkLocation.replace("%data%", work.jobs[i].location)));
    $(".work-entry:last").append((HTMLworkDates.replace("%data%", work.jobs[i].dates)));
    $(".work-entry:last").append((HTMLworkDescription.replace("%data%", work.jobs[i].description)));
  }
};

bio.display = function() {
  // Need this line, or nothing gets displayed due to lack of h1 tag
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLskills.replace("%data%", bio.skills));
  }

  $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  if (bio.contacts.twitter.length > 0) {
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
  }
  $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

education.display = function() {
  for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append((HTMLschoolName.replace("%data%", education.schools[i].name)) + (HTMLschoolDegree.replace("%data%", education.schools[i].degree)));
    $(".education-entry:last").append((HTMLschoolDates.replace("%data%", education.schools[i].dates)));
    $(".education-entry:last").append((HTMLschoolLocation.replace("%data%", education.schools[i].location)));
    $(".education-entry:last").append((HTMLschoolMajor.replace("%data%", education.schools[i].majors)));
  }
  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append((HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title)) + (HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school)));
      $(".education-entry:last").append((HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates)));
      $(".education-entry:last").append((HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)));
    }
  }
};

// Actually construct the page

bio.display();

work.display();

projects.display();

education.display();

$(document).click(function(loc) {
  //console.log(loc.data);
  //console.log(loc.pageX);
  logClicks(loc.pageX, loc.pageY);
});

// googlemaps mashup ! Every mashup MUST use Googlemaps !

$("#mapDiv").append(googleMap);
