let katalog = document.querySelector('.katalog__block')
let sidebar = document.querySelector('.katalog__sidebar')

katalog.addEventListener('click', () => {
    sidebar.style.visibility = 'visible'
})


$(function() {
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    })
})

$(function() {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
    })
})





