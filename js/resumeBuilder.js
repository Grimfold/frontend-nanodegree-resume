// First, the data objects

var bio = {
  "name" : "Mark James",
  "role" : "Occasional Web Developer",
  "contacts" : {
    "mobile" : "555-555-1234",
    "email" : "mlljuk@gmail.com",
    "github" : "Grimfold",
    "twitter" : "@mlljuk",
    "location" : "UK"
  },
  "skills" : [
    "Networks & Systems Integration",
    "Network Management & OSS",
    "PS Team Building & Mentoring",
    "Pragmatic Web Development"
  ],
  "welcomeMessage" : "Some notes about myself, for the purposes of Udacity Front End Developer course",
  "biopic" : "./images/portrait-small.jpg",
};

var work = {
  "jobs" : [
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
  ]
};

var projects = {
  "projectEntry" : [
    {
      "title": "Time Travel Project",
      "dates": "2100-2120",
      "description": "Time Machine Built",
      "images": [
        "./images/timewarp.jpg"
      ]
    },
    {
      "title": "Narcissism Project",
      "dates": "2012-2016",
      "description": "Better Photos of me",
      "images": [
        "./images/portrait-small.jpg"
      ]
    }
  ],
};


console.log(projects.projectEntry[0]);
projects.display = function() {
  for(var i = 0; i < projects.projectEntry.length; i++) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projectEntry[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projectEntry[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projectEntry[i].description));
    // Need to iterate over the array to display multiple images per project ?
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projectEntry[i].images));
    console.log(projects.projectEntry[i].title);
  }
}


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
  for (job in work.jobs){
    if (work.jobs.hasOwnProperty(job)) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[job].employer))+(HTMLworkTitle.replace("%data%", work.jobs[job].title)));
      $(".work-entry:last").append((HTMLworkLocation.replace("%data%", work.jobs[job].location)));
      $(".work-entry:last").append((HTMLworkDates.replace("%data%", work.jobs[job].dates)));
      $(".work-entry:last").append((HTMLworkDescription.replace("%data%", work.jobs[job].description)));
    }
  }
}

displayWork();

projects.display();

$(document).click(function(loc) {
  //console.log(loc.data);
  //console.log(loc.pageX);
  logClicks(loc.pageX, loc.pageY);
});

// Internationalize button
$("#main").append(internationalizeButton);

function inName(oldName) {
  //trim removes whitespace at fornt and back
  var finalName = oldName.trim();
  //console.log(finalName);
  finalName = oldName.toUpperCase();
  var names= finalName.split(" ");
  //console.log(names);
  capital = names[0].slice(0,1);
  names[0] = names[0].slice(1);
  //console.log(names[0]);
  names[0] = names[0].toLowerCase();
  names = capital + names[0] + " " +names[1];
  return names;
};

inName(bio.name);

// googlemaps mashup ! Every mashup MUST use Googlemaps !

$("#mapDiv").append(googleMap);
