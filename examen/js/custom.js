$(document).ready(function() {

    $('.results-btn').click(function() {
        var target = $(this).attr('href')
        console.log(target);

        if ($(target + ' .results-content').hasClass('active')) {
            $(target + ' .results-content').removeClass('active');
            $(target + ' .dark-circle').removeClass('active-circle');
            $(target + ' .results-item').removeClass('active-item');
            $(target + ' .results-btn span').removeClass('rotate');
        } else {
            $(target + ' .results-content').addClass('active');
            $(target + ' .dark-circle').addClass('active-circle');
            $(target + ' .results-item').addClass('active-item');
            $(target + ' .results-btn span').addClass('rotate');
        }
        if ($(target).hasClass('open')) {
            $(target).removeClass('open');
        } else {
            $(target).addClass('open');
        }
        event.preventDefault()
    });

    var tab = $('.work-system-tabs a'); //Создаём переменную tab

    $(tab).click(function() { //При клике на tab
        console.log(tab);
        $(tab).removeClass('active-menu'); //У всех элементов с tab удаляем класс active-menu
        $(this).addClass('active-menu'); //Всем элементам с tab добавляем класс active-menu
        event.preventDefault();
    });

    //SLIDER CONTENT

    tab.click(function() { //При клике на tab
        var target = $(this).attr('href'); //Создаём переменную target, в которую запишем id
        $('.system-tabs').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
        event.preventDefault();
    });

    var stepsTab = $('.steps-tab'); //Создаём переменную tab

    $(stepsTab).on('click', function() { //При клике на tab
        var targetbg = $(this).attr('id');
        var targetimg = $('#' + targetbg + ' .steps-icon');
        console.log(targetbg);
        console.log(targetimg);
        $(stepsTab).removeClass('active-tab'); //У всех элементов с tab удаляем класс active-menu
        $('.steps-img').removeClass('bgred');
        $('.steps-icon').removeClass('icon-1c');
        $('.steps-icon').removeClass('icon-2c');
        $('.steps-icon').removeClass('icon-3c');
        $('.steps-icon').removeClass('icon-4c');
        $('.steps-icon').removeClass('icon-5c');
        if ($(targetimg).hasClass('icon-1')) {
            $(targetimg).addClass('icon-1c');
            console.log($(targetimg).hasClass('icon-1'));
        } else {
            if ($(targetimg).hasClass('icon-2')) {
                $(targetimg).addClass('icon-2c')
            } else {
                if ($(targetimg).hasClass('icon-3')) {
                    $(targetimg).addClass('icon-3c')
                } else {
                    if ($(targetimg).hasClass('icon-4')) {
                        $(targetimg).addClass('icon-4c')
                    } else {
                        if ($(targetimg).hasClass('icon-5')) {
                            $(targetimg).addClass('icon-5c')
                        }
                    }
                }
            }
        }

        $('#' + targetbg + ' .steps-img').addClass('bgred');
        $(this).addClass('active-tab'); //Всем элементам с tab добавляем класс active-menu

    });

    //SLIDER CONTENT

    stepsTab.click(function() { //При клике на tab
        var target = $(this).attr('data-tab'); //Создаём переменную target, в которую запишем id
        $('.steps-row').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
        event.preventDefault();
    });
});
