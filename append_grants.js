// Object of boundaries for proof of concept.
// This will be replaced with an array of IDs from Database,
// then boundary coordinates will be generated with D3.js
var boundaries = 
{
	// School Psychology
	"259":
	{
		xmin: 55,
		xmax: 150,
		ymin: 115,
		ymax: 145
	},
	// Educational Psychology
	"348":
	{
		xmin: 200,
		xmax: 260,
		ymin: 200,
		ymax: 225
	},
	// Kinesiology
	"353":
	{
		xmin: 50,
		xmax: 160,
		ymin: 315,
		ymax: 355
	},
	// Motivation
	"219":
	{
		xmin: 280,
		xmax: 360,
		ymin: 25,
		ymax: 55
	},
	// Urban Eduction
	"90":
	{
		xmin: 410,
		xmax: 500,
		ymin: 60,
		ymax: 135
	},
	// Literacy Education
	"73":
	{
		xmin: 370,
		xmax: 385,
		ymin: 305,
		ymax: 360
	},
	// Educational Technology
	"349":
	{
		xmin: 230,
		xmax: 260,
		ymin: 305,
		ymax: 355
	},
	// School, Family, & Community Counseling
	"355":
	{
		xmin: 90,
		xmax: 135,
		ymin: 475,
		ymax: 490
	},
	// Secondary Education
	"267":
	{
		xmin: 85,
		xmax: 180,
		ymin: 730,
		ymax: 750
	},
	// Higher, Adults & Lifelong Learning
	"351":
	{
		xmin: 125,
		xmax: 223,
		ymin: 525,
		ymax: 550
	},
	// Social Studies & History Education
	"357":
	{
		xmin: 320,
		xmax: 420,
		ymin: 860,
		ymax: 885
	},
	// Science Education
	"70":
	{
		xmin: 315,
		xmax: 440,
		ymin: 575,
		ymax: 600
	},
	// Critical Studies in Education
	"344":
	{
		xmin: 545,
		xmax: 640,
		ymin: 30,
		ymax: 50
	},
	// Teacher Education, Learning, & Policy
	"360":
	{
		xmin: 470,
		xmax: 670,
		ymin: 275,
		ymax: 335
	},
	// Curriculum & Instruction
	"345":
	{
		xmin: 535,
		xmax: 570,
		ymin: 590,
		ymax: 600
	},
	// Diverse Learners & Educational Equity
	"346":
	{
		xmin: 470,
		xmax: 540,
		ymin: 750,
		ymax: 810
	},
	// Math Education
	"72":
	{
		xmin: 685,
		xmax: 765,
		ymin: 645,
		ymax: 765
	},
	// K-12 Educational Administration & Leadership
	"342":
	{
		xmin: 685,
		xmax: 795,
		ymin: 85,
		ymax: 120
	},
	// Student Affairs Administration
	"359":
	{
		xmin: 895,
		xmax: 1005,
		ymin: 155,
		ymax: 180
	},
	// International & Comparative Education
	"352":
	{
		xmin: 780,
		xmax: 980,
		ymin: 375,
		ymax: 410
	},
	// Educational Policy
	"347":
	{
		xmin: 935,
		xmax: 1000,
		ymin: 560,
		ymax: 620
	},
	// Statistics, Psychometrics, & Research Design
	"358":
	{
		xmin: 830,
		xmax: 980,
		ymin: 830,
		ymax: 870
	},
	// Assessment, Measurement, & Evaluation
	"343":
	{
		xmin: 1060,
		xmax: 1180,
		ymin: 625,
		ymax: 665
	},
	// Rehabilitation Counseling
	"354":
	{
		xmin: 1035,
		xmax: 1145,
		ymin: 380,
		ymax: 405
	},
	// School Psychology X Educational Psychology
	"1161.67181":
	{
		xmin: 165,
		xmax: 175,
		ymin: 160,
		ymax: 185
	},
	// School Psychology X Kinesiology
	"1166.67181":
	{
		xmin: 60,
		xmax: 140,
		ymin: 205,
		ymax: 225
	},
	// Kinesiology X School, Family, & Community Counseling
	"1463.98127":
	{
		xmin: 100,
		xmax: 140,
		ymin: 375,
		ymax: 390
	},
	// Motivation X Educational Psychology
	"1036.00821":
	{
		xmin: 270,
		xmax: 280,
		ymin: 110,
		ymax: 130
	},
	// Motivation X Urban Education
	"778.00821":
	{
		xmin: 350,
		xmax: 375,
		ymin: 95,
		ymax: 115
	},
	// Literacy Education X Urban Education
	"319.33607":
	{
		xmin: 370,
		xmax: 400,
		ymin: 190,
		ymax: 220
	},
	// Literacy Education X Teacher Education, Learning, & Policy
	"589.33607":
	{
		xmin: 405,
		xmax: 425,
		ymin: 290,
		ymax: 325
	},
	// Literacy Education X Educational Technology
	"578.33607":
	{
		xmin: 290,
		xmax: 310,
		ymin: 305,
		ymax: 325
	},
	// Kinesiology X Educational Technology
	"1457.98127":
	{
		xmin: 180,
		xmax: 195,
		ymin: 330,
		ymax: 345
	},
	// School, Family, & Community Counseling X Educational Technology
	"1464.26445":
	{
		xmin: 180,
		xmax: 185,
		ymin: 400,
		ymax: 425
	},
	// Science Education X Educational Technology
	"568.91130":
	{
		xmin: 280,
		xmax: 320,
		ymin: 435,
		ymax: 450
	},
	// Science Education X Higher, Adult & Lifelong Learning
	"570.91130":
	{
		xmin: 245,
		xmax: 275,
		ymin: 530,
		ymax: 595
	},
	// Science Education X Teacher Education, Learning, & Policy
	"579.91130":
	{
		xmin: 430,
		xmax: 465,
		ymin: 430,
		ymax: 470
	},
	// Science Education X Curriculum & Instruction
	"564.91130":
	{
		xmin: 455,
		xmax: 505,
		ymin: 545,
		ymax: 590
	},
	// Science Education X Diverse Learners & Educational Equity
	"565.91130":
	{
		xmin: 405,
		xmax: 445,
		ymin: 630,
		ymax: 665
	},
	// Secondary Education X Higher, Adults & Lifelong Learning
	"1189.80453":
	{
		xmin: 135,
		xmax: 165,
		ymin: 635,
		ymax: 655
	},
	// Teacher Education, Learning, & Policy X Urban Education
	"1220.97240":
	{
		xmin: 480,
		xmax: 510,
		ymin: 205,
		ymax: 230
	},
	// Teacher Education, Learning, & Policy X K-12 Educational Administration & Leadership
	"1472.97240":
	{
		xmin: 665,
		xmax: 685,
		ymin: 215,
		ymax: 245
	},
	// Teacher Education, Learning, & Policy X International & Comparative Education
	"1482.97240":
	{
		xmin: 715,
		xmax: 745,
		ymin: 300,
		ymax: 410
	},
	// Teacher Education, Learning, & Policy X Math Education
	"1202.97240":
	{
		xmin: 670,
		xmax: 700,
		ymin: 460,
		ymax: 490
	},
	// Teacher Education, Learning, & Policy X Curriculum & Instruction
	"1475.97240":
	{
		xmin: 535,
		xmax: 580,
		ymin: 460,
		ymax: 520
	},
	// Diverse Learners & Educational Equity X Curriculum & Instruction
	"1431.99014":
	{
		xmin: 515,
		xmax: 545,
		ymin: 625,
		ymax: 655
	},
	// Diverse Learners & Educational Equity X Social Studies & History Education
	"1443.99014":
	{
		xmin: 395,
		xmax: 420,
		ymin: 760,
		ymax: 800
	},
	// Math Education X Curriculum & Instruction
	"571.19448":
	{
		xmin: 580,
		xmax: 640,
		ymin: 580,
		ymax: 630
	},
	// Math Education X Statistics, Psychometrics, & Research Design
	"584.19448":
	{
		xmin: 820,
		xmax: 860,
		ymin: 700,
		ymax: 730
	},
	// Math Education X Educational Policy
	"573.19448":
	{
		xmin: 870,
		xmax: 890,
		ymin: 530,
		ymax: 590
	},
	// Math Education X International & Comparative Education
	"578.19448":
	{
		xmin: 780,
		xmax: 830,
		ymin: 465,
		ymax: 480
	},
	// Critical Studies in Education X Urban Education
	"1170.70696":
	{
		xmin: 525,
		xmax: 545,
		ymin: 100,
		ymax: 125
	},
	// Critical Studies in Education X K-12 Educational Administration & Leadership
	"1422.70696":
	{
		xmin: 640,
		xmax: 110,
		ymin: 650,
		ymax: 125
	},
	// International & Comparative Education X K-12 Educational Administration & Leadership
	"1447.83968":
	{
		xmin: 765,
		xmax: 795,
		ymin: 235,
		ymax: 255
	},
	// International & Comparative Education X Student Affairs Administration
	"1464.83968":
	{
		xmin: 895,
		xmax: 935,
		ymin: 245,
		ymax: 270
	},
	// International & Comparative Education X Educational Policy
	"1452.83968":
	{
		xmin: 885,
		xmax: 930,
		ymin: 445,
		ymax: 470
	},
	// Assessment, Measurement, & Evaluation X Educational Policy
	"1424.56537":
	{
		xmin: 1020,
		xmax: 1040,
		ymin: 535,
		ymax: 570
	},
	// Assessment, Measurement, & Evaluation X Rehabilition Counseling
	"1431.56537":
	{
		xmin: 1070,
		xmax: 1125,
		ymin: 490,
		ymax: 510
	},
	// Educational Policy X Rehabilition Counseling
	"1444.13173":
	{
		xmin: 1010,
		xmax: 1030,
		ymin: 460,
		ymax: 480
	}
};

// Object to hold generated points
var currentPoints = {};
for (i in boundaries){
	currentPoints[i] = {x:[],y:[]};
}

// Function to check if value is within a limiter's buffer
function isBetween(value, limiter){
	if (limiter-11 < value && limiter+11 > value){
		return true;
	} else { return false; }
};

// Function that appends div points to page
function addGrant(divID, title, boundaryID){

	var xmin 	= boundaries[boundaryID]["xmin"],
		xmax 	= boundaries[boundaryID]["xmax"],
		ymin 	= boundaries[boundaryID]["ymin"],
		ymax 	= boundaries[boundaryID]["ymax"],
		xArray	= currentPoints[boundaryID]['x'],
		yArray	= currentPoints[boundaryID]['y'],
		x,
		y;

	while (true){
		x 		= Math.floor(Math.random()*(xmax-xmin+1)+xmin);
		y 		= Math.floor(Math.random()*(ymax-ymin+1)+ymin);
		if (xArray.length > 0){
			var inBuffer = 0;
			for (i=0;i<xArray.length;i++){
				var tempX = xArray[i],
					tempY = yArray[i];
				if (isBetween(x, tempX) && isBetween(y, tempY)){
					inBuffer += 1;
				}
			}
			if (inBuffer == 0){ break; }
		} else { break; }
	}

	$("#points").append('<div id="'+divID+'" style="left:'+x+'px; top:'+y+'px;display:none;" class="tooltip-circle" href="#modal" data-toggle="modal" rel="tooltip" data-original-title="'+title+'"></div>');
	currentPoints[boundaryID]['x'].push(x);
	currentPoints[boundaryID]['y'].push(y);
};

// Promise for ajax data
var ajaxData = $.ajax({
	type: "GET",
	url: "test.xml",
	dataType: "xml"
});

// After promise fulfilled
ajaxData.done(function(xml){
	$("g").each(function(index){
		$(this).delay(200*index).fadeIn(200);
	});

	// Append grant div points
	$(xml).find('grant').each(function(){

		var divID 	= $(this).attr('id'),
			areaIDs = $(this).attr('areas').split(','),
			title 	= $(this).find('title').text(),
			boundaryID;

		if (areaIDs.length > 1){
			for (j=0; j<areaIDs.length; j++){
				boundaryID = parseInt(areaIDs[0])*3.14159;
				for (i=1; i<areaIDs.length; i++){
					boundaryID += parseInt(areaIDs[i]);
				};
				boundaryID = boundaryID.toFixed(5);
				if (boundaries[boundaryID]){
					addGrant(divID, title, boundaryID);
					break;
				} else {
					areaIDs.push(areaIDs.shift());
				}
			};
		} else if (areaIDs[0] == ""){
			// Do nothing if there are no areas
		} else {
			boundaryID = parseInt(areaIDs[0]);
			addGrant(divID, title, boundaryID);
		}
	});

	// Show points after background fades in
	$(".tooltip-circle").each(function(index){
		var addedDelay = 100*index;
		$(this).delay(5000).fadeIn(600);
	});

	// Check for mobile traffic
	if (window.mobilecheck() === false) {
		$('[rel="tooltip"]').tooltip({placement:'auto'});
	};

	// Generate modal content
	$('[data-toggle="modal"]').on('click', function(e) {

		// Assign grant id to variable
		var id = $(this).attr('id');
		console.log(id);

		$(xml).find('grant').each(function(){
			// Find grant based on id
			if ($(this).attr('id') === id) {
				// Append 'title', 'summary', and 'PI-list' to modal
				var piList 	= '',
					sum		= $(this).find('summary').text();
				if (sum){
					$('#summary').append(sum);
				} else {
					$('#summary').append("Information coming soon.");
				}
				$('#grant-title').append($(this).find('title').text());
				$(this).find('PI-list>PI').each(function(){
					var name 	= $(this).find('name').text();
					var email 	= $(this).find('email').text();
					piList 		+= '<a href="mailto:'+email+'">'+name+'</a><br>'
				});
				$('#PI-list').append(piList);
			};
		});
	});

	// Remove data from modal on close to avoid caching
	$('#modal').on('hidden.bs.modal', function(e){
		$('#grant-title').empty();
		$('#summary').empty();
		$('#PI-list').empty();
	});
});

// Search bar
$("#search").keyup(function(){

	var searchValue = $(this).val();

	if (searchValue){

		var re = RegExp(searchValue, "i");

		var matches = $(".tooltip-circle").filter(function(){
			return re.test($(this).attr('data-original-title'));
		});
		var nonMatches = $(".tooltip-circle").not(function(){
			return re.test($(this).attr('data-original-title'));
		});
		matches.each(function(){
			$(this).fadeIn(100);
		});
		nonMatches.each(function(){
			$(this).fadeOut(100);
		});
	} else {$(".tooltip-circle").show();}
});