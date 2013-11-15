$(document).ready(function() {

//Save user's item as a new variable
	var addItem = " ";
		$('.added').html(addItem);

		$('#submit').click(function(e){
			e.preventDefault();
		  	addItem = $('#item').val();
		  	validateList();
		});

//Check entry is valid
	function validateList() {
		if(addItem === "") {
			$('p').html("Oops, you didn't enter anything.<br>Please try again.");
	  	} else {
		  	console.log("Item validated");
		  	$('p').replaceWith('<p></p>');
		  	updateList();
	  	}
	}

//Add new item to the list
	var updateList = function(){
	   $('.added').append('<li class="box unchecked"> <input type="checkbox">' + addItem + '</li>'); 
	}

//Toggle checked and unchecked classes when checkbox selected
	$('body').on('click', 'input[type=checkbox]', function(){
  		$(this).closest('li').toggleClass('checked');
	});

//Remove checked items
	$('#remove').click(function(e){		
		e.preventDefault();
		$('.checked').remove();
	});


});