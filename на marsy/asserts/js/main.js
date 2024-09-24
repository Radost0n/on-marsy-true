$(document).ready(function() {
    /* Плавная прокрутка меню */
    $('nav a[href^="#"]').click(function(event) {
        event.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });
    
    /* Под мобилу - открытие/закрытие бургер-меню */
    $('.menu__burger').click(function() {
        $('.menu').toggle(500);
        $(this).toggleClass('close');
    });
});

