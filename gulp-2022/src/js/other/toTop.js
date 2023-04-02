export function toTop() {
    console.log('toTop works');
    // Button to top
window.onscroll = () => {
    // Button to top
    const toTop = document.querySelector('.toTop')
    const Y = window.scrollY

    if (Y > window.innerHeight) {
        toTop.classList.add('toTop-fixed')
    } else {
        toTop.classList.remove('toTop-fixed')
    }
}
}
