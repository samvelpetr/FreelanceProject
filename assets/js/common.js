jQuery(document).ready(function(){
	console.log('asdasd')
	jQuery('.full-height-slider').on('init', function(){
		var offset = jQuery('.container').offset().left - 37;
		jQuery('.slick-dots', this).css('right', offset + 'px');
	})
	var fullWidthSlider = jQuery('.full-height-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 800,
		slidesToShow: 1,
		vertical: true,
		verticalSwiping: false,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					verticalSwiping: true,
				}
			},
		]
	});

	function blockResize(){

		var width = jQuery('.footer__map').removeAttr('style').width() + jQuery('.container').offset().left + 16;
		jQuery('.footer__map').width(width);
		var yamaps = setInterval(() => {
			jQuery('.footer__map > ymaps').width(width);
			if (jQuery('.footer__map > ymaps').attr('id')) clearInterval(yamaps);
		}, 1);
	}

	jQuery('a[data-slide]').click(function(e) {
		e.preventDefault();
		var slideno = jQuery(this).data('slide');
		jQuery('.full-height-slider').slick('slickGoTo', slideno - 1);
	});

	blockResize();

	jQuery(window).resize(function(){
		var offset = jQuery('.container').offset().left - 37;
		jQuery('.slick-dots', this).css('right', offset + 'px');
		blockResize();
	});

	jQuery('.mobile-menu-toogle').click(function(){
		jQuery('body').toggleClass('menu-opened')
	});
	

	fullWidthSlider.on('wheel', (function(e) {
		e.preventDefault();
	
		if (e.originalEvent.deltaY > 0) {
			jQuery(this).slick('slickNext');
		} else {
			jQuery(this).slick('slickPrev');
		}
	}));

	jQuery('.popup-with-form').magnificPopup({
		type: 'inline',
		callbacks: {
			open: function(){
				jQuery('.popup-block-slider').slick({
					infinite: true,
					speed: 400,
					slidesToShow: 1
				});
			},
			beforeClose: function(){
				jQuery('.popup-block-slider').slick('unslick')
			}
		}
		
	});
});
