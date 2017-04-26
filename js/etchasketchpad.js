$(document).ready(function(){
	addBoxes(16);

	$('.box').hover(function(){
		$(this).css("background-color","purple");
	});

	$('#button').click(function(){
		$('.wrapper').empty();
		var sketchPadSize = prompt("How many little boxes do you want per dimension to make up the new Sketch Pad?", "eg. 12");
		if (sketchPadSize != null) {
			addBoxes(sketchPadSize);
			$('.box').hover(function(){
				$(this).css("background-color","purple");
			});
		}
	});

});

function addBoxes(boxLimit){


	for(i=0;i<boxLimit;i++){
		for(j=0;j<boxLimit;j++){
		$('.wrapper').css("width", boxLimit*40+"px");
		$('.wrapper').css("height", boxLimit*40+"px");
		$('.wrapper').append('<div class = "box"></div>');
		$('.box').css("width","40px");
		$('.box').css("height","40px");
		$('.box').css("background-color","pink");		
		}		
	}
	
}

function startOver(){
	
}

