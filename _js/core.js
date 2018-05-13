$('document').ready(function () {

    function __lI(el) {
        var imgP = new Image();

        imgP.src = el.dataset.src;
        imgP.onload = function () {
            $(el).attr('src', $(el).data('src'));
            $(el).addClass('loaded');

        };
    }


    $('.form__button--submite-main, .form__button--submite-example').on('click', function(){
        $(this).closest('.form').addClass('ok');
    })

    $('.form__button--back-main').on('click', function(){
        $(this).closest('.form').removeClass('ok');
    })

});


