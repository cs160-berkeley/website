function sortByDate(){
	staff = _.sortBy(staff, function(el, i, arr){
		if(_.isUndefined(el.oh)) return;
		return el.oh[0].getTime() - Date.now();
	});
		
	return staff;
}
	
function staff2DOM(el, i){
	var container = $("<tr></tr>");
	var pos = $('<td></td>').html(el.position);
	var name = $('<td></td>').html("&nbsp;&nbsp; <a href='" + el.website + "'>" + el.name + "</a>")
		.css("text-align", "left");
	var image = '<img src="images/staff/' +  el.image +'">';
	var email ='<p>'+ el.email +'</p>';
	// var glyph_close = glyph("remove").click(function(){
	// 		$(this).parent().parent().hide();
	// 	});

	var info = glyph("send")
			.css("color", positions[el.position])
			.css("margin-top", "10px")
			.css("cursor", "pointer")
		.attr("title", [el.position, el.name].join(' '))
		.attr('data-toggle', "popover")
		// .attr('data-trigger', "focus") 
		// .attr('data-content', el.email)
		.popover({
				placement: 'left',
				trigger: 'hover', 
				content:  [image, email], 
				html: true
			})
		.click(function(){
			window.location.href = "mailto:" + el.email;
		})


	var next = $('<td></td>');
	// if(i == 0) next.html(glyph("chevron-right"));
	
	if(el.position == "GSI" || el.position == "Professor"){
		if (el.oh[0].getHours() == 0) { //for tbd
			var oh = $("<td></td>").html('TBD');
		}
		else {
			   var oh = $("<td></td>")
			  .html(el.oh[0].format("ddd") + "  " + el.oh[0].format("hMM") + " - " + el.oh[1].format("hMM T") + "/" + el.location.toUpperCase());
		}
		  var section = _.map(el.sections, function(el, i, arr){
		  	return _.find(sections, function(el2){
		  		return el2.id == el;
		  	});
		  });
		  // console.log(section);
		  var sectionHTML = _.map(section, function(el, i, arr){
		  	return el.time + "/" + el.location;
		  }).join("<br>");
		  console.log(sectionHTML)
		  var sectionDOM = $("<td></td>").html(sectionHTML);
		  // oh.html(el.oh[0].format("ddd") + "  " + el.oh[0].format("h:MM TT") + " - " + el.oh[1].format("h:MM TT") + "/" + el.location);
		  var location = $('<td></td>').html(el.location);
	} else {
		var oh = $("<td></td>").html('-');
		var location = $("<td></td>").html('-');
		var sectionDOM = $("<td></td>").html('-');
	}

	return container.append([next, name, oh, sectionDOM, info]);
}
function glyph(name){
	return $('<span></span>').addClass("glyphicon glyphicon-"+ name);
}

// DATA MODEL
var positions = {
		Professor: "#111", 
		"Head GSI": "#006f95",
		GSI: "#006f95",
		Reader: "#AAA",
		"Head Reader": "#AAA"

	}
var sections = [
	{
	 id: 100,
	 time: "TBD",
	 location: "TBD", 
	 ccn: 	26517,
	 },
	{
	 id: 101,
	 time: "F 2-3P",
	 location: "179 STANLEY", 
	 ccn: 	26517,
	 },

	{
	 id: 102,
	 time: "F 2-3P",
	 location: "310 SODA", 
	 ccn: 	26520,
	 },

	{
	 id: 103,
	 time: "F 3-4P",
	 location: "179 STANLEY", 
	 ccn: 	26523,
	 },

	{
	 id: 104,
	 time: "F 3-4P",
	 location: "310 SODA", 
	 ccn: 	26526,
	 },

	{
	 id: 105,
	 time: "F 4-5P",
	 location: "179 STANLEY", 
	 ccn: 	26528,
	 },

	{
	 id: 106,
	 time: "F 4-5P",
	 location: "310 SODA", 
	 ccn: 	27498,
	 },

	{
	 id: 107,
	 time: "F 11-12P",
	 location: "310 HEARST MIN", 
	 ccn: 	27501,
	 },

	{
	 id: 108,
	 time: "F 5-6P",
	 location: "310 SODA", 
	 ccn: 	27504,
	 }
];
var staff = [
	{ //1 = monday in date(x,x,1)
		position: "Professor",
		name: "Eric Paulos",
		email: "paulos@berkeley.edu",
		image: "ericRound.png",
		website: "http://www.paulos.net",
		oh: [new Date(2016, 1, 2, 11, 00), 
			  new Date(2016, 1, 2, 12, 00)], 
		location: "210B JACOBS"
	}, 
	{
		position: "GSI",
		name: "Jingyi Li",
		image: "it's me.jpg",
		email: "noon@berkeley.edu",
		website: "http://jingyi.me",
		oh: [new Date(2016, 1, 3,  16, 30, 0, 0), 
			  new Date(2016, 1, 3, 17, 30, 0, 0)], 
		location: "210 Jacobs", 
		sections: [101]
	},
	{
		position: "GSI",
		name: "Diane Wang",
		image: "diane_photo_small.jpg",
		email: "dianewang@berkeley.edu",
		website: "http://diane.io",
		oh: [new Date(2016, 1, 1,  12, 00), 
			  new Date(2016, 1, 1, 13, 00)], 
		location: "210 Jacobs", 
		sections: [103]
	}, 
	{
		position: "GSI",
		name: "Shana Hu",
		image: "shana.jpg",
		email: "shanahu@berkeley.edu",
		website: "http://shanahu.com",
		oh: [new Date(2016, 1, 1,  13, 30), 
			  new Date(2016, 1, 1, 14, 30)], 
		location: "220 Jacobs", 
		sections: [107]
	}, 
	{
		position: "GSI",
		name: "Peggy Chi", 
		image: "peggychi.png",
		email: "peggychi@cs.berkeley.edu",
		website: "http://www.eecs.berkeley.edu/~peggychi/",
		oh: [new Date(2016, 1, 2,  13, 00), 
			  new Date(2016, 1, 2, 14, 00)], 
		location: "510 Soda", 
		sections: [102]
	}, 
	{
		position: "GSI",
		name: "Jasper O' Leary",
		image: "so_emotion.jpg",
		email: "j.oleary@berkeley.edu", 
		website: "http://jasperoleary.com",
		oh: [new Date(2016, 1, 5,  10, 00), 
			  new Date(2016, 1, 5, 11, 00)], 
		location: "210 Jacobs", 
		sections: [104]
	}, 
	{
		position: "Head Reader",
		name: "Sarina Gross",
		image: "sarina.jpg",
		email: "sarina.gross@berkeley.edu",
		website: "#"
	}	,
	{
		position: "Reader",
		name: "Matthew Waliman",
		image: "matthew.jpg",
		email: "mwaliman@berkeley.edu",
		website: "#"
	},
{
		position: "Reader",
		name: "Neil Kumar",
		image: "cat.jpg",
		email: "neilkumar101@berkeley.edu",
		website: "#"
	},
]
