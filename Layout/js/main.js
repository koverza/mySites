$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 570,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    })
});

$(document).ready(function() {
    $('.sliderBig').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<span class="prevArrow"><img src="./img/prevArrow.svg" alt=""></i></span>',
        nextArrow: '<span class="nextArrow"><img src="./img/nextArrow.svg" alt=""></span>',
        autoplay: true
    })
});

