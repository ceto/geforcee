	var $grid = $('.isotopegrid').isotope({
		isInitLayout: false,
		itemSelector: '.isotopegrid__item',
		percentPosition: true,
		masonry: {
			columnWidth: '.isotopegrid__item',
		}
	});


jQuery(document).ready(function() {


	$grid.imagesLoaded().progress( function() {
  	$grid.isotope('layout');
	});

});
