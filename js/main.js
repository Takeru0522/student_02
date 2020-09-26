console.log('Hello world');

$('.to-about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 850);    
});

