// Движение стрелочки около пункта "Справочники"

let On = document.querySelector('.on')
let hiddenBlock = document.querySelector('.hidden__block')
let arrowDown = document.querySelector('.fa-chevron-down')

On.addEventListener('click', () => {
    arrowDown.style.transform = 'rotate(0deg)'
    hiddenBlock.style.top = '200px'
    hiddenBlock.style.visibility = 'visible'
})


// Открыть - Закрыть пункт "Редактировать" на странице Контактов

let edit = document.querySelector('.edit')
let editClick = document.querySelector('.clickBtn')
let editClose = document.querySelector('.edit__close')


editClick.addEventListener('click', () => {
    edit.style.visibility = 'visible';
})
    
editClose.addEventListener('click', () => {
    edit.style.visibility = 'hidden';

})


// Открыть - Закрыть пункт "Создать накладную" на странице Контактов


let createBtn = document.querySelector('.fa-user')
let ok = document.querySelector('.create')
let cancelBtn = document.querySelector('.create__cancel')

createBtn.addEventListener('click', () => {
    ok.style.visibility = 'visible'
})

cancelBtn.addEventListener('click', () => {
    ok.style.visibility = 'hidden'
})