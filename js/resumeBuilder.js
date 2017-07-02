/*
This is empty on purpose! Your code to build the resume will go here.
 */
// -------------------------------------------------------------------------------------
// here we are creating new variables, and replacing '%data%' with our actual info
// formattedName & formattedRole are generic variables from the helper.js file that are ours to manipulate

// BIO ----------------------------------------
var bio = {
	"name": "Seung-Joon Rim (Sunny)",
	"role": "Web Developer",
	"contacts": {
		"mobile": "267-401-9777",
		"email": "rim.seungjoon@gmail.com",
		"github": "https://github.com/seungjoonrim",
		"location": "Philadelphia, PA"
		},
	"biopic": "images/linkedIn.PNG",
	"welcomeMessage": "Thanks for visiting my page! I Hope you like it!",
	"skills": [
		"HTML",
		"CSS",
		"JavaScript",
		"Bootstrap",
		"JQuery"
		]
};

bio.display = function() {
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	formattedContactInfo = [];
	formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var i in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
		}
	}

	for (i in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[i]);
		$("#footerContacts").append(formattedContactInfo[i]);
	}
};

bio.display();

// WORK ----------------------------------------------------------------------

var work = {
	"jobs": [
		{
			"employer": "Jacobs Engineering Group",
			"title": "Intern",
			"location": "Arlington, VA",
			"dates": "Summer of 2016",
			"description": "AutoCAD Civil 3D, Microstation, Infrastructure Design"
		},
		{
			"employer": "Urban, LTD",
			"title": "Intern",
			"location": "Chantilly, VA",
			"dates": "Summer of 2015",
			"description": "AutoCAD Civil 3D, Land Development, Site Layout"
		}
	]
};

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (var job in work.jobs) {
		$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer), HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

work.display();

var education = {
	"schools": [
		{
			"name": "Virgnia Tech",
			"city": "Blacksburg, VA",
			"degree": "BA",
			"major": ["Civil/Environmental Engineering"]
		},
		{
			"name": "Seoul National University",
			"city": "Seoul, South Korea",
			"degree": "Study Abroad",
			"major": ["Civil/Environmental Engineering"]
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Zombies",
			"dates": "Fall 2016",
			"description": "Adventure-based game built with Python."
		},
		{
			"title": "Resume 1.0",
			"dates": "Spring 2017",
			"description": "First web-page, my online resume."
		},
		{
			"title": "Resume 2.0",
			"dates": "Summer 2017",
			"description": "Second web-page, second version of my online resume."
		}
	]
};