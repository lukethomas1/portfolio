$(document).ready(function() {
	var boxbuttons = document.querySelectorAll(".box-button");

	for(var index = 0; index < boxbuttons.length; index++) {
		$(boxbuttons[index]).hover(function() {
			$(this).toggleClass("button-hover");
			}, function() {
				$(this).toggleClass("button-hover");
		});
	}
});