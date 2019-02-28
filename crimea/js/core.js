$(document).ready(function(){

	$(".map__title").not(":first").hide();

	$(".map__list li").mouseover(function() {
		$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__title").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	$(".map__marker").mouseover(function() {
		$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__title").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");


	$(".map__list li a").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 500 );
	});

		$(".map__markers a").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;

		$("body, html").animate({
			scrollTop: position
		}, 500 );
	});


	$(window).scroll(function(){
		if ($(window).scrollTop() >= 600) {
			$('#scrollTop').show();
		} else {
			$('#scrollTop').hide();
		}
	});

	$("#scrollTop").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

})
