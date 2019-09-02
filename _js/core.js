$(document).ready(function() {
    console.log(111);
    $(".main a").on("click", function (event) {
        console.log(this);
        event.preventDefault();
        $('body,html').animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
    });
});

