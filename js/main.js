$('.nav').click(function() {
    if ($(window).width() < 992) {
        $(this).toggleClass('nav--open');
    }
});