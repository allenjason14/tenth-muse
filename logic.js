$( document ).ready(function() {
	$('.grid').masonry({
  		itemSelector: '.grid-item',
  		columnWidth: '.grid-sizer',
  		percentPosition: true,
  		gutter: '.gutter-sizer'
	});

	// $(window).on('load', myMasonry);
});