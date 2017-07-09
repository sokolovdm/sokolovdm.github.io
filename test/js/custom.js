$(document).ready(function() {

    //Кастомный select

    $('.select-year').click(function(event) {
        $('.select-list').slideToggle(300);
        $(this).toggleClass('ok');
        event.stopPropagation();
    })
    $(document).click(function() {
        $('.select-list').slideUp();
        $('.select-year').removeClass('ok');
    });

    //Запись выбраного года в html select

    $('.select-list li').click(function() {
        $('.select-year > div').html($(this).html());
        $('#year').val($(this).html());
        $('.select-list').slideDown();

    });

    //Плавный скролл меню

    $(".menu a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $(".fixed-menu a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    //Кнопка totop

    $('.totop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    //Появление меню и кнопки totop

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.fixed-nav').addClass('slide');
            $('.totop').fadeIn();
        } else {
            $('.fixed-nav').removeClass('slide');
            $('.totop').fadeOut();
        };
    });

    //Появляение модального окна

    $('button').click(function() {
        $('.modal').fadeIn();
        $('body').css('overflow', 'hidden');
        event.stopPropagation();
    });

    //Скрытие модального окна

    $('.close').click(function() {
        $('.modal').fadeOut();
        $('body').css('overflow', 'auto');
        event.stopPropagation();
    });

    //Меню гамбургер

    var link = $('.menu-ham') //Создаём переменную link в которую записываем класс .menu-link
    var menu = $('.small-menu')
    link.click(function() { //Событие при клике на .menu-link
        link.toggleClass('menu-ham_active'); //Добавим/удалим у ссылки .menu-link класс .menu-link_active
        menu.toggleClass('active-menu') //Добавим/удалим у блока .menu класс  .menu_active
    });

    $('.small-menu a').click(function() { //Событие при клике на пункт меню
        menu.removeClass('active-menu'); //Удаляем класс .menu_active у блока .menu
        link.removeClass('menu-ham_active');
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        var id = $(this).attr('href'), //забираем идентификатор бока с атрибута href
            top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        $('body,html').animate({ scrollTop: top }, 1000); //анимируем переход на расстояние - top за 1500 мс
    })

    //Select

    $(function() {
        $("#slider").slider({
            value: 200,
            min: 0,
            max: 400,
            step: 100,
            range: 'min',
            slide: function(event, ui) {
                $("#amount").val("$" + ui.value);
            }
        });
        $("#amount").val("$" + $("#red").slider("value"));
    });

    //custom scroll

    $('.select-list').customScroll();

    //input focus

    $('.input-wrap input').each(function() {
        var placeholder = $(this).attr('name')
        $(this).focus(function() {
            $(this).addClass('input-focus');
            if (placeholder == 'name') {
                $(this).attr('placeholder', 'Соколов Дмитрий Сергеевич');
            };
            if (placeholder == 'city') {
                $(this).attr('placeholder', 'г. Волгоград');
            };
            if (placeholder == 'skype') {
                $(this).attr('placeholder', 'naraxiss');
            };
            if (placeholder == 'mail') {
                $(this).attr('placeholder', 'naraxiss@gmail.com');
            };
        });

        $(this).mouseenter(function() {
            $(this).removeClass('input-gray');
            $(this).addClass('input-black');
            if (placeholder == 'name') {
                $(this).attr('placeholder', 'Соколов Дмитрий Сергеевич');
            };
            if (placeholder == 'city') {
                $(this).attr('placeholder', 'г. Волгоград');
            };
            if (placeholder == 'skype') {
                $(this).attr('placeholder', 'naraxiss');
            };
            if (placeholder == 'mail') {
                $(this).attr('placeholder', 'naraxiss@gmail.com');
            };


        });
        $(this).mouseleave(function() {
            $(this).removeClass('input-black');
            $(this).addClass('input-gray');
            if (!$(this).hasClass('input-focus')) {
                if (placeholder == 'name') {
                    $(this).attr('placeholder', 'ФИО');
                };
                if (placeholder == 'city') {
                    $(this).attr('placeholder', 'Место проживания');
                };
                if (placeholder == 'skype') {
                    $(this).attr('placeholder', 'Skype');
                };
                if (placeholder == 'mail') {
                    $(this).attr('placeholder', 'E-mail');
                };
            };

        });
        $(this).blur(function() {
            $(this).removeClass('input-focus');
            if (placeholder == 'name') {
                $(this).attr('placeholder', 'ФИО');
            };
            if (placeholder == 'city') {
                $(this).attr('placeholder', 'Место проживания');
            };
            if (placeholder == 'skype') {
                $(this).attr('placeholder', 'Skype');
            };
            if (placeholder == 'mail') {
                $(this).attr('placeholder', 'E-mail');
            };
        });



    });

});
