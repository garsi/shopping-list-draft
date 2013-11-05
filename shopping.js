$(document).ready(function() {

//Save user's item as a new variable
	var addItem = " ";
		$('.added').html(addItem);

		$('#submit').click(function(){
		  addItem = $('#item').val();
		  updateList();
		});

//Check entry is valid
	/*function validateList() {
		if(addItem == null) {	
    		writeError('Try again, field required');
	  	} else {
		  	return true
		  	console.log("Item validated");
		  	updateList();
	  	}
	}*/

//Add new item to the list
	var updateList = function(){
	   $('.added').append('<li class="unchecked"> <input type="checkbox">' + addItem + '</li>'); 
	}

//Toggle checked and unchecked classes when checkbox selected
	$('.unchecked').click(function() {
	 	$(this).toggleClass('checked');
	});



});