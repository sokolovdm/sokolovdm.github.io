(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{}]},{},[1]);
