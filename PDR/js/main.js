/* Звезды рейтинга */

const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItensArray = Array.prototype.slice.call(ratingItemsList);

ratingItensArray.forEach(item => 
item.addEventListener('click', () => 
item.parentNode.dataset.totalValue = item.dataset.itemValue
)
);



/* Регистрация */

let enter = document.querySelector('.signIn')
let popup = document.getElementById('popup')
let popupClose = document.querySelector('.popup__close')

enter.addEventListener('click', () => {
    popup.style.display = 'flex'
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})



/* Отзывы */

let ReviewBtn = document.querySelector('.logIn')
let popupReview = document.querySelector('.popupReview')
let ReviewClose = document.querySelector('.popupReview__close')

ReviewBtn.addEventListener('click', () => {
    popupReview.style.display = 'block'
})

ReviewClose.addEventListener('click', () => {
    popupReview.style.display = 'none'
})


/* Жалобы */

let ComplaintBtn = document.getElementById('complaint')
let popupComplaint = document.querySelector('.popupComplaint')
let ComplaintClose = document.querySelector('.popupComplaint__close')

ComplaintBtn.addEventListener('click', () => {
    popupComplaint.style.display = 'block'
})

ComplaintClose.addEventListener('click', () => {
    popupComplaint.style.display = 'none'
})


/* Поздравляем */

let VictoryBtn = document.getElementById('victory')
let popupVictory = document.querySelector('.popupVictory')
let VictoryClose = document.querySelector('.popupVictory__close')

VictoryBtn.addEventListener('click', () => {
    popupVictory.style.display = 'block'
})

VictoryClose.addEventListener('click', () => {
    popupVictory.style.display = 'none'
})



/* фильтр */

let FilterBtn = document.getElementById('filter')
let popupFilter = document.querySelector('.popupFilter')
let closeFilter = document.querySelector('.popupFilter__close')

FilterBtn.addEventListener('click', () => {
    popupFilter.style.visibility = 'visible'
    popupFilter.style.right = '0px'
})

closeFilter.addEventListener('click', () => {
    popupFilter.style.visibility = 'hidden'
    popupFilter.style.right = '-320px'
})