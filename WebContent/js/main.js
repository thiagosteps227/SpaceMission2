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

var findAllMissions= function () {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", 
		success: renderAllMissions
	});
};

var findImageForTheModal= function(id) {
	console.log('findById: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#myModal').show();
			currentMission = data
			renderModal(currentMission);
		}
	});
};

var renderList = function (list) {
$.each(list, function(index, mission) {
	$('#missionsGrid').append('<div class="col-12 col-md-4 my-2">'+
			'<div class="position-relative"><a  id="'+mission.id+'" href="#"><img class="w-100" src="images/'+mission.imagemain+'">'+
			'</a><div class="position-absolute dados"><h4 class="text-right text">'+mission.name+'</h4></div></div></div>');
	});
};

var renderAllMissions = function (list) {
	$('#missionDescriptionDiv div ').remove();
	$.each(list, function(index, mission) {
		$('#missionDescriptionDiv').append('<div class="col"><h4>'+mission.name+'</h4><img src="images/'+mission.imagethumb+'"><p class="text-break">'+mission.description+'</p></div>');
		});
	};

var renderModal = function (mission) {
	$('.modal-content').remove();
	$('#caption').remove();
	$("#myModal").append('<img id="'+mission.id+'"class="modal-content" src="images/'+mission.imagemain+'"/><div id="caption"><p>'+mission.imagecaption+'</p><div>');
	
};

$(document).ready(function(){
	findAll();
	
	$(document).on("click", '.my-2 a[href="#"]', function(e){
		e.preventDefault();
		findImageForTheModal(this.id);
	})
	
	$('#span').click( function(e) {
		e.preventDefault();
		$('#myModal').hide();
	})
	
	//show missions descriptions
    $('.nav-tabs a[href="#missions"]').click(function (e) {
         e.preventDefault();
         $('#homepageDiv').hide();
         $('#missionsDiv').show();
         findAllMissions();
     });
	
	//back to home when clicking on logo and home icon
	$('a[href="#home"]').click(function (e) {
        e.preventDefault();
        $('#homepageDiv').show();
        $('#missionsDiv').hide();
    });

});



