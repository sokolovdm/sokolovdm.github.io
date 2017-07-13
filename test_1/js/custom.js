$(document).ready(function() {

    //Кастомный select
    var current_year = $('#year').val();
    console.log(current_year);
    $('.current-select').html(current_year + '<div class="current-top">Год рождения</div>');


    $('.current-select').click(function(event) {
        $('.select-list').slideToggle(300);
        $(this).toggleClass('clicked');

        event.stopPropagation();
    })


    $(document).click(function() {
        $('.select-list').slideUp();
        $('.select-year').removeClass('ok');
        $('.current-select').removeClass('clicked');

    });

    //Запись выбраного года в html select

    $('.select-list li').click(function() {
        $('.current-select').html($(this).html() + '<div class="current-top">Год рождения</div>');
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

    //Скукоживание меню и кнопки totop

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navigation').addClass('small');
            $('.totop').fadeIn();
        } else {
            $('.navigation').removeClass('small');
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


    //custom scroll

    $('.select-list').customScroll();


    //Slider
    var stepSlider = document.getElementById('slider-step');

    noUiSlider.create(stepSlider, {
        start: 2,
        step: 1,
        connect: [true, false],
        range: {
            'min': [0],
            '50%': [2],
            'max': [4]
        }
    });




  

    var value = $('.noUi-handle').attr('aria-valuenow');
   
    var elem = document.querySelector('.noUi-handle'),
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
        observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'aria-valuenow') {
                    var changedValue = $('.noUi-handle').attr('aria-valuenow');
                    console.log(changedValue);
                    if (value != changedValue) {
                        if (changedValue == '0.0') {
                            $('.js_skills').val('0')
                        } else {
                            if (changedValue == '25.0') {
                                $('.js_skills').val('1')
                            } else {
                                if (changedValue == '50.0') {
                                    $('.js_skills').val('2')
                                } else {
                                    if (changedValue == '100.0') {
                                        $('.js_skills').val('4')
                                    } 
                                }
                            }
                        };

                    };
                }
            });
        });
    observer.observe(elem, {
        attributes: true
    });

   
});
