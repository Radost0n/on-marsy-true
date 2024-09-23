$(document).ready(function() {
    $('.nav a[href^="#"]').click() {
        let target = $(this).after('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);
        return false;
    }
});
