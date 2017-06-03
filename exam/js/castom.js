//Анимация WOW+CSS
new WOW().init(); 

//Плавный скрол
$(document).ready(function(){
		$(".slider-btn").on("click", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});
	});


$(document).ready(function(){
  $("#carousel").owlCarousel({
  	items: 1,
  	singleItem: true,
  	autoplay: 5000,
  	nav: true,
  	dots: true,
  	dotsEach: true,
  	loop: true,
  	navText:""
  });
});