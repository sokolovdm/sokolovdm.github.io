$('document').ready(function () {

    function __lI(el) {
        var imgP = new Image();

        imgP.src = el.dataset.src;
        imgP.onload = function () {
            $(el).attr('src', $(el).data('src'));
            $(el).addClass('loaded');

        };
    }

    $('.form__button--back-main').on('click', function(){
        $(this).closest('.form').removeClass('ok');
    })

    $('._submite').on('click', function () {
       var $this = $(this),
           form = $this.closest('.form'),
           input = form.find('input'),
           textarea = form.find('textarea');

       if(input.val() === ''){
           input.closest('.input').addClass('error')
       } else {
           input.closest('.input').removeClass('error')
       }

       if(!input.closest('.input').hasClass('error')){


           $.ajax({
               type: "POST",
               url: form.attr('action'),
               data: form.serialize()
               /* statusCode: {
                    404: function() {
                        setTimeout(function() {
                           form.removeClass('loading');
                           form.addClass('ok');
                           textarea.val('');
                           input.val('');
                       }, 1)
                    }
                }*/
           }).done(function() {
               setTimeout(function() {
                   form.removeClass('loading');
                   form.addClass('ok');
                   textarea.val('');
                   input.val('');
               }, 1)
           });
       }

    });






});


