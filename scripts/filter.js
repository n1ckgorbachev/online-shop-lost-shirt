
let elem = document.querySelector('.products__list');
let iso = new Isotope( elem, {
     // options
     itemSelector: ".products__items",
     filter: '.popular',
});

let filterLinkItems = document.querySelectorAll('.filter__link');
let activeClass = 'filter__item--active';

filterLinkItems.forEach(function(filterLinkItem){

    filterLinkItem.addEventListener('click', function(e){
        e.preventDefault();

        let filterName = filterLinkItem.getAttribute("data-filter"); 

        filterLinkItems.forEach(function(link){
            link.closest('.filter__item').classList.remove(activeClass);
        })

        filterLinkItem.closest('.filter__item').classList.add(activeClass);

        iso.arrange({
            filter: `.${filterName}`
        })
    })
})
