// Привязываем к переменным данные которые позволяют просмотреть афишу

let AphishaClick = document.querySelector('button')
let AphishaClose = document.querySelector('.popup__close')
let popupAphisha = document.querySelector('.popup')
let popupAphishaImg = document.querySelector('.popup__img')


// По клику появляется модальное окно

AphishaClick.addEventListener('click', () => {
    popupAphisha.style.visibility = 'visible'
    popupAphishaImg.style.top = '100px'
    popupAphisha.style.position = 'absolute'
})

// Нажимаем на крестик чтобы закрыть модальное окно

AphishaClose.addEventListener('click', () => {
    popupAphisha.style.visibility = 'hidden'
})

let anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault()
        const blockID = anchor.getAttribute('href')
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.burger-menu')
let burgerClose = document.getElementById('burgerClose')

burger.addEventListener('click', () => {
    burgerMenu.style.visibility = 'visible'
    burger.style.visibility = 'hidden'
})

burgerClose.addEventListener('click', () => {
    burgerMenu.style.visibility = 'hidden'
    burger.style.visibility = 'visible'
})

