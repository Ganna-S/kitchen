$(function () {
    $('.projects__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    $('.customers__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    $('.menu__btn').on('click', function () {
        $('.header__menu').slideToggle();
    });

});
