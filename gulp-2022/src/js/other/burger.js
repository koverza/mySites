export function burger() {
    console.log('burger works');
    let burger = document.querySelector('.burger')

    if(burger) {
        burger.addEventListener('click', (e) => {
            e.preventDefault()
            burger.classList.toggle('burger-active')
        })
    }

}