/* HEADER*/

window.onscroll = () => {

  const headerAdaptive = document.querySelector('.header__adaptive')
  const Y = window.scrollY

  if(Y > window.innerHeight) {
    headerAdaptive.style.visibility = 'visible'
  } else if (Y < window.innerHeight){
    headerAdaptive.style.visibility = 'hidden'
  }
}

/* BURGER */

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

/* SLIDER */

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

