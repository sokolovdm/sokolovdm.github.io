
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