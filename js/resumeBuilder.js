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
  "welcomeMessage" : "Some notes about myself, for the purposes of Udacity Front End Developer course",
  "skills" : [
    "Networks & Systems Integration",
    "Network Management & OSS",
    "PS Team Building & Mentoring",
    "Pragmatic Web Development"
  ],
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
      // Makes map look more interesting than saying UK. Would be better to change locationFinder in helper,js to deal with multiple l.,ocations per job
      "location": "Europe",
      "dates": "2007 - 2010",
      "description": "Solution design and implementation for a wide range of European Telcos and Large Enterprises as part of EMC SMARTS Professional Services."
    }
  ]
};

var projects = {
  "projectEntry" : [
    {
      "title": "Time Travel Project",
      "dates": "2100 - 2120",
      "description": "Time Machine Built",
      "images": [
        "./images/timewarp.jpg"
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
  "schools": [
    {
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
  "onlineCourses": [
    {
      "title": "",
      "school": "",
      "dates": "",
      "url": ""
    }
  ]
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

// Need this line, or nothing gets displayed due to lack of h1 tag

$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(HTMLskills.replace("%data%", bio.skills));
}

function displayWork() {
  for (var i =0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append((HTMLworkEmployer.replace("%data%", work.jobs[i].employer))+(HTMLworkTitle.replace("%data%", work.jobs[i].title)));
      $(".work-entry:last").append((HTMLworkLocation.replace("%data%", work.jobs[i].location)));
      $(".work-entry:last").append((HTMLworkDates.replace("%data%", work.jobs[i].dates)));
      $(".work-entry:last").append((HTMLworkDescription.replace("%data%", work.jobs[i].description)));
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
