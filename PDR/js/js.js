const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItensArray = Array.prototype.slice.call(ratingItemsList);

ratingItensArray.forEach(item => 
item.addEventListener('click', () => 
item.parentNode.dataset.totalValue = item.dataset.itemValue
)
);


$(function() {
    $('.slider').slick({
        dots: false,
        slidesToShow: 5
    });
})