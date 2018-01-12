$(document).ready(function() {
    $('.slider--main').slick({
        prevArrow: $('.main__arrows span:nth-child(1)'),
        nextArrow: $('.main__arrows span:nth-child(2)'),
        autoplay: true,
        autoplaySpeed: 5000
    });

    var n = $('.main__counter span:nth-child(2)'),
        a = $('.main__counter span:nth-child(1)'),
        v = $('.slider--main .slider__item:not(.slick-cloned)').length,
        numb = $('.main__numbers ul');
    if (!!n) {
        n.html('/0' + v)
    }

    i = 1;
    while (i < v + 1) {
        if (i === 1) {
            numb.append('<li class="active">0' + i + '</li>')
        } else {
            numb.append('<li>0' + i + '</li>')
        }

        i++;
    }


    $('.slider--main').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        a.html('0' + (nextSlide + 1));
        $('.main__numbers').find('li').removeClass('active');
        $('.main__numbers').find('li').eq(nextSlide).addClass('active');
        $('.main__numbers').find('li').css('transition-delay', '0s');
        var decl = currentSlide - nextSlide;
        if (decl == 1 || decl == (slick.slideCount - 1) * (-1)) {
            if (nextSlide > currentSlide && (currentSlide - nextSlide === -($('.slider--main .slider__item:not(.slick-cloned)').length - 1))) {
                console.log('alo');
                $('.main__numbers').find('li').eq(nextSlide).css('transition-delay', '0.4s');
                $('.main__numbers-point').css('transition', 'all .2s ease');
                $('.main__numbers-point').css('opacity', 0);
                $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(currentSlide).offset().left - $('.main__numbers').offset().left - 20);
                setTimeout(function() {
                    $('.main__numbers-point').css('opacity', 'all .2s ease');
                    $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left + 20);
                }, 150)
                setTimeout(function() {
                    $('.main__numbers-point').css('transition', 'all .2s ease');
                    $('.main__numbers-point').css('opacity', 1);
                    $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left)
                }, 350)
            } else {

                $('.main__numbers-point').css('transition', 'all .2s ease');
                $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left)
            }
        } else {
            if (nextSlide < currentSlide && (nextSlide - currentSlide === -($('.slider--main .slider__item:not(.slick-cloned)').length - 1))) {
                $('.main__numbers').find('li').eq(nextSlide).css('transition-delay', '0.4s');
                $('.main__numbers-point').css('transition', 'all .2s ease');
                $('.main__numbers-point').css('opacity', 0);
                $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(currentSlide).offset().left - $('.main__numbers').offset().left + 20);
                setTimeout(function() {
                    $('.main__numbers-point').css('opacity', 'all .2s ease');
                    $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left - 20);
                }, 150)
                setTimeout(function() {
                    $('.main__numbers-point').css('transition', 'all .2s ease');
                    $('.main__numbers-point').css('opacity', 1);
                    $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left)
                }, 350)
            } else {
                $('.main__numbers-point').css('transition', 'all .2s ease');
                $('.main__numbers-point').css('left', $('.main__numbers').find('li').eq(nextSlide).addClass('active').offset().left - $('.main__numbers').offset().left)
            }
        }
    });


    $('.main__numbers li').on('click', function() {
        $('.slider--main').slick('slickGoTo', parseInt($(this).index()));
    })

    $('.button--hamburger').on('click', function() {
        $('body').toggleClass('menu-opened');
    })

    if ($(window).width() >= 1240) {
        $(function() {
            $.scrollify({
                section: ".scroll",
                standardScrollElements: ".header",
                scrollspeed: 5000,
                easing: "easeOutExpo",
                setHeights: false,
                before: function() {
                	$('.header').addClass('hidden');
                },
                after: function() {
                	$('.header').removeClass('hidden');
                }
            });
        });
    }

})