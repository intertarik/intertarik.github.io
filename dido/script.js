/* ===================================
	window.load FUNCTION
====================================== */
$(window).on('load', function(e) {

	setTimeout(function() {
		$('.hero_images').addClass('showModule');
    }, 10);
    
    lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)


}); // End Window load
