
$(function(){
  $('.call-back').on('click',function(){
    $('.call-back').toggleClass('rotate');
  })
})

$(function(){
  $('.call-back').on('click',function(){
    $('.form-box').slideToggle(300, function(){
    	console.log($(this).css('display'))
    });
  });
});

$(document).click(function(event) {
    if ($(event.target).closest(".form-box").length || $(event.target).closest(".call-back").length ) return;
    $('.form-box').slideUp(300) && $('.call-back').removeClass('rotate');
    event.stopPropagation();
});



$(function(){
  $('.slide').on('click',function(){
    $('.slide').toggleClass('rotate');
  })
})

$(function(){
  $('.slide').on('click',function(){
    $('.menu-hide').slideToggle(300, function(){
    	console.log($(this).css('display'))
    });
  });
});

$(document).click(function(event) {
    if ($(event.target).closest(".menu-hide").length || $(event.target).closest(".slide").length ) return;
    $('.menu-hide').slideUp(300) && $('.slide').removeClass('rotate');
    event.stopPropagation();
});





$(function(){
  $('.lense').on('click',function(){
    $('.lense').toggleClass('rotate360');
  })
})

$(function(){
  $('.lense').on('click',function(){
    $('.search').slideToggle(300, function(){
    	console.log($(this).css('display'))
    });
  });
});

$(document).click(function(event) {
    if ($(event.target).closest(".search").length || $(event.target).closest(".lense").length ) return;
    $('.search').slideUp(300);
    event.stopPropagation();
});

//PROJECTS MENU

$(function(){
  $('.projects-menu a').on('click',function(){
    $('.projects-menu a').removeClass('active-menu');
    $(this).addClass('active-menu');
  })
})

//SLIDER CONTENT


$(function(){
  $('.itemHouse').on('click',function(){
    $('.projects-content').hide();
    $('#home').fadeIn(300);
  })
  $('.itemBath').on('click',function(){
    $('.projects-content').hide();
    $('#bath').fadeIn(300);
  })
   $('.itemFound').on('click',function(){
    $('.projects-content').hide();
    $('#found').fadeIn(300);
  })
   $('.itemKitchen').on('click',function(){
    $('.projects-content').hide();
    $('#kitchen').fadeIn(300);
  })
})



$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    singleItem: false,
    autoplay: 5000,
    nav: true,
    dots: false,
    dotsEach: true,
    loop: true,
    navText:""
  });
});