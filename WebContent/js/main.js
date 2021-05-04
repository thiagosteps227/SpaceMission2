var rootURL = "http://localhost:8080/SpaceMission2/rest/missions";

var findAll= function () {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", 
		success: renderList
	});
};

var renderList = function (list) {
$.each(list, function(index, mission) {
	$('#missionsGrid').append('<div class="col"><img src=images/"'+mission.image_main+"><h4>"+mission.name+"</h4><p class='text-break'>"+mission.description+"</p></div>");
	
});

$(document).ready(function(){
	findAll();
	
	});
};


