$(document).ready(function(){

// $(".map__marker").not(":first").hide();

$(".map__list li").click(function() {
	$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
	$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");

$(".map__marker").click(function() {
	$(".map__list li").removeClass("active").eq($(this).index()).addClass("active");
	$(".map__marker").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");

})
