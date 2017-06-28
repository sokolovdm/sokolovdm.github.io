$(document).ready(function() {

    $('.call-back').on('click', function() { //При клике на ссылку .call-back
        $('.call-back').toggleClass('rotate'); //Дать/забрать .rotate
    });

    $('.call-back').on('click', function() { //При клике на ссылку .call-back
        $('.form-box').slideToggle(300, function() { //Элемент .form-box развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
    });

    $('.slide').on('click', function() { //При клике на ссылку .slide
        $('.slide').toggleClass('rotate'); //Дать/забрать .rotate
    });

    $('.slide').on('click', function() { //При клике на ссылку .slide
        $('.menu-hide').slideToggle(300, function() { //Элемент .menu-hide развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
    });

    $('.lense').on('click', function() { //При клике на ссылку .lense
        $('.lense').toggleClass('rotate360'); //Дать/забрать .rotate360
    });

    $('.lense').on('click', function() { //При клике на ссылку .lense
        $('.search').slideToggle(300, function() { //Элемент .search развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
    });

    //PROJECTS MENU

    var tab = $('.projects-menu a'); //Создаём переменную tab

    $(tab).on('click', function() { //При клике на tab
        $(tab).removeClass('active-menu'); //У всех элементов с tab удаляем класс active-menu
        $(this).addClass('active-menu'); //Всем элементам с tab добавляем класс active-menu
        event.preventDefault();
    });

    //SLIDER CONTENT

    tab.click(function() { //При клике на tab
        var target = $(this).attr('href'); //Создаём переменную target, в которую запишем id
        $('.projects-content').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
        event.preventDefault();
    });

    //CAROUSEL

    $(".projects-slider .owl-carousel").owlCarousel({
        items: 2,
        singleItem: false,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });
    $(".slider-articles-content").owlCarousel({
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });
    $(".slider-works-content").owlCarousel({
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });




    $(document).click(function(event) {
        if ($(event.target).closest(".form-box").length || $(event.target).closest(".call-back").length) return; //Условие, что бы .form-box сворачивались при нажатии в любое место и забрать класс rotate у .call-back
        $('.form-box').slideUp(300) && $('.call-back').removeClass('rotate');


        if ($(event.target).closest(".menu-hide").length || $(event.target).closest(".slide").length) return; //Условие, что бы .menu-hide сворачивались при нажатии в любое место и забрать класс rotate у .slide
        $('.menu-hide').slideUp(300) && $('.slide').removeClass('rotate');

        if ($(event.target).closest(".search").length || $(event.target).closest(".lense").length) return; //Условие, что бы .search сворачивались при нажатии в любое место    
        $('.search').slideUp(300);

        event.stopPropagation(); //Остановить событие
    });

    $('.article-img').on({                  //Устаналиваем обработчик на .artilce-img
        mouseenter: function() {            //При попадании курсора мышки на .article-img
            $('.article-decript').animate({ //Анимировать свойство padding-bottom у .article-decript за 100 мс
                paddingBottom: 128
            }, 200)
        },
    });

    $('.article-decript').on({              //Устаналиваем обработчик на .artilce-desript             
        mouseleave: function() {            //При уходе курсора мышки с .article-decript
            $('.article-decript').animate({ //Анимировать свойство padding-bottom у .article-decript за 100 мс
                paddingBottom: 8
            }, 200)
        },

    });
    $('.works-img').on({                  //Устаналиваем обработчик на .artilce-img
        mouseenter: function() {            //При попадании курсора мышки на .article-img
            $('.works-decript').animate({ //Анимировать свойство padding-bottom у .article-decript за 100 мс
                paddingBottom: 152
            }, 200)
        },
    });

    $('.works-decript').on({              //Устаналиваем обработчик на .artilce-desript             
        mouseleave: function() {            //При уходе курсора мышки с .article-decript
            $('.works-decript').animate({ //Анимировать свойство padding-bottom у .article-decript за 100 мс
                paddingBottom: 8
            }, 200)
        },

    });


});
