document.querySelector('.quantity-minus').setAttribute('disabled', 'disabled');

let valueCount

document.querySelector('.quantity-plus').addEventListener('click', function() {
    valueCount = document.querySelector('.quantity-input').value;

    valueCount++

    document.querySelector('.quantity-input').value = valueCount

    
if (valueCount > 1 ) {
    document.querySelector('.quantity-minus').removeAttribute('disabled')
    document.querySelector('.quantity-minus').classList.remove('disabled')

}

})

document.querySelector('.quantity-minus').addEventListener('click', function() {
    valueCount = document.querySelector('.quantity-input').value;

    valueCount--

    document.querySelector('.quantity-input').value = valueCount

    if (valueCount == 1 ) {
        document.querySelector('.quantity-minus').setAttribute('disabled', 'disabled')
    }
})

