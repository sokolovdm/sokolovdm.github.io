//Анимация WOW+CSS

if (screen.width > 480) document.write(
    new WOW().init()
);


//Плавный скрол
$(document).ready(function() {
    $(".slider-btn").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

//Кнопка ToTop и меню
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.totop').fadeIn();
            $('.fixed-header').fadeIn();
        } else {
            $('.totop').fadeOut();
            $('.fixed-header').fadeOut();
        }
    });
    $('.totop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});


$(document).ready(function() {
    $("#carousel").owlCarousel({
        items: 1,
        singleItem: true,
        autoplay: 5000,
        nav: true,
        dots: true,
        dotsEach: true,
        loop: true,
        navText: ""
    });
});

$(document).ready(function() {
    $(".FAQ-a-1").on("click", function(event) {
        if ($('.minus-1').css('display') == 'none') {
            $('.plus-1').hide(300);
            $('.minus-1').show(300);
        } else {
            $('.plus-1').show(300);
            $('.minus-1').hide(300);
        }
    });
});

$(document).ready(function() {
    $(".FAQ-a-2").on("click", function(event) {
        if ($('.minus-2').css('display') == 'none') {
            $('.plus-2').hide(300);
            $('.minus-2').show(300);
        } else {
            $('.plus-2').show(300);
            $('.minus-2').hide(300);
        }
    });
});

$(document).ready(function() {
    $(".FAQ-a-3").on("click", function(event) {
        if ($('.minus-3').css('display') == 'none') {
            $('.plus-3').hide(300);
            $('.minus-3').show(300);
        } else {
            $('.plus-3').show(300);
            $('.minus-3').hide(300);
        }
    });
});


// HABMURGER + HIDE MENU

$(document).ready(function() {
    var hamburger = $('.ham-1');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        $('.hide-menu').slideToggle(300, function() {
            console.log($(this).css('display'));
        })
        return false;
    });
});

$(document).ready(function() {
    var hamburger = $('.ham-2');
    hamburger.click(function() {
        hamburger.toggleClass('active');
        $('.hide-menu').slideToggle(300, function() {
            console.log($(this).css('display'));
        })
        return false;
    });
});
