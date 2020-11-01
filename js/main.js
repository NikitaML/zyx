$(document).ready(function(){

    // открытие мобильного меню
    $('.header__mobile').on('click', function(){
        $('.mobile-menu, .header__mobile, body').toggleClass("active");

    });

    //Плавный скрол при нажатии на иконку скролла на первом экране
    $('.hero__scroll').on('click', function() {
        var h = $(window).height();
        $("body,html").animate({scrollTop: h }, 500);
    });
});


//  изменение цвета текста в header при скроле 
$(document).on("scroll", function() {

    $('section').each(function() {
        var sectionThis = $(this);
        var heightHeader = $('header').height()/2;
        var height = sectionThis.offset().top - heightHeader ;
        

        if ($(document).scrollTop() >= height) {
            $('.header').attr('data-color', $(sectionThis).attr('data-color'));
        } 
    });

});