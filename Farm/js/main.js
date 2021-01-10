let sidebar = document.getElementById('sidebar')
let arrDown = document.querySelector('.arrow-down')
let arrUp = document.querySelector('.rotate')



arrDown.addEventListener('click', () => {
        sidebar.style.overflow = 'visible'
        sidebar.style.height = 'auto'
        arrUp.style.transform = 'rotate(180deg)'
})










