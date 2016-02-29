$(document).ready(function() {
	var introboxes = document.querySelectorAll(".intro-box");

	for(var index = 0; index < introboxes.length; index++) {
		$(introboxes[index]).hover(function() {
			$(this).toggleClass("button-hover");
			}, function() {
				$(this).toggleClass("button-hover");
		});
	}

	// Skills button
	$(introboxes[0]).click(function() {
		$('body').animate({
            scrollTop: $("#skills-container").offset().top
        }, 100);
	})

	// Bio button
	$(introboxes[1]).click(function() {
		$('body').animate({
            scrollTop: $("#bio-container").offset().top
        }, 200);
	})

	// Projects button
	$(introboxes[2]).click(function() {
		$('body').animate({
            scrollTop: $("#projects-container").offset().top
        }, 300);
	})
});