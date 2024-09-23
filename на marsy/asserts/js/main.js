$(document).ready(function() {
    $('nav a[href^="#"]').click(function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки

        // Получаем значение href ссылки
        let target = $(this).attr('href');
        
        // Анимируем прокрутку страницы к нужному месту
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);

        return false; // Предотвращаем дальнейшую обработку клика
    });
});

