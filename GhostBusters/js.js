let burger = document.querySelector('.burger')
let menu = document.querySelector('.nav_burger')
let arrow = document.querySelector('.fa-arrow-up')

burger.addEventListener('click', () => {
    menu.style.visibility = 'visible',
    burger.style.visibility = 'hidden',
    arrow.style.visibility = 'visible'
})

arrow.addEventListener('click', () => {
    burger.style.visibility = 'visible',
    arrow.style.visibility = 'hidden',
    menu.style.visibility = 'hidden'
})