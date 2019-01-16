$(document).ready(function(){

//main-nav btn
  $('#menu-btn').click(function(){ 
    $('.main-nav__list').slideToggle(700);
    if ($(this).hasClass('not-active')) {
      $(this).addClass('is-active').removeClass('not-active');
    }else{
      setTimeout(function(){
      $('.is-active').addClass('not-active').removeClass('is-active')
      },600)   
    }     
  });

//slick sliders initial
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,		
		arrows: false,
		dots: true,
    responsive: [
      {
      breakpoint: 990,
        settings: {
          arrows: false,
          }
        }
      ]    
	});

$('.partners__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
    {
      breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
    {
      breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
     {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
     {
      breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }     
      ]         
  });

})
