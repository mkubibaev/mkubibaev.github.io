$(document).ready(function(){

// $(".map__marker").not(":first").hide();

	$(".map__list li").mouseover(function() {
		$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
	}).eq(0).addClass("active");

	$(".map__marker").mouseover(function() {
		$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
		$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
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

})
