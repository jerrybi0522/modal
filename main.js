$(document).ready(function(){

	$('#press').on('click', function(){
		$('body').append('<div id="overlay"></div>');
		$('#modal').show();
		$('#overlay').on('click', function(){
			$('#overlay').remove();
			$('#modal').hide();
		})
		$('#modal').on('click', function(){
			$('#overlay').remove();
			$('#modal').hide();
		})
	})

})