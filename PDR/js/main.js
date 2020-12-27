const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItensArray = Array.prototype.slice.call(ratingItemsList);

ratingItensArray.forEach(item => 
item.addEventListener('click', () => 
item.parentNode.dataset.totalValue = item.dataset.itemValue
)
);


let enter = document.querySelector('.signIn')
let registration = document.querySelector('.logIn')
let popup = document.getElementById('popup')
let popupClose = document.querySelector('.popup__close')

enter.addEventListener('click', () => {
    popup.style.display = 'flex'
})

registration.addEventListener('click', () => {
    popup.style.display = 'flex'
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})