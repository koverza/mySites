let burger = document.getElementById('burger')
let menu = document.querySelector('.adaptive__nav')
let cross = document.querySelector('.nav__cross')

burger.addEventListener('click', () => {
    menu.style.display = 'flex'
    menu.style.right = '0px'
})

cross.addEventListener('click', () => {
    menu.style.right = '-600px'
})

$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    prevArrow: '<div class="prev"><img src="./img/arrow.svg"></div>',
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: false,
            slidesToShow: 1
          }
        }
      ]
  });
});

