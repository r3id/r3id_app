$(document).ready(function(){

	// Scroll Down
	var scrollToggle = $('.scroll'),
		scrollTarget = $('.body');

	scrollToggle.show();

	scrollToggle.on('click', function(e) {

		e.preventDefault();

		$('body').animate({
			scrollTop: scrollTarget.offset().top
		}, 1000);

	});

	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 400,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 500,
	//grab the "back to top" link
	$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

	// Reveal Animation
	var animatedElements = $('[data-animation]');

	$.each(animatedElements, function(index, value) {

		var $this = $(this),
			animation = $this.data('animation');

		$this.addClass('hidden').viewportChecker({
			classToAdd: 'visible animated ' + animation,
			offset: 100
		});

	});

	// Parallax Ccrolling
	var parallaxElements = $('[data-parallax]'),
		browserWindow = $(window);

	$.each(parallaxElements, function(index, value) {

		var $this = $(value),
			speed = $this.data('parallax');

		browserWindow.scroll(function() {

			var offset = -(browserWindow.scrollTop() / speed);

			$this.css({ backgroundPosition: '50% ' + offset + 'px' });

		});

	});

});
