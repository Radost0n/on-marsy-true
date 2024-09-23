$(document).ready(function() {
    $('nav a[href^="#"]').click(function(event) {
        event.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});

