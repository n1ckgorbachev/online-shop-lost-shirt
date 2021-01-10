// Слайдер. Меняет изображения слайдера.

let slides = document.querySelectorAll('.fade-slider__item');
let visibleClass = 'fade-slider__item--visible';
let counter = 0;

function slider(){
    
    slides[counter].classList.remove(visibleClass);
    counter++;
    

    if(counter + 1 > slides.length) {
        counter = 0;
    }

    slides[counter].classList.add(visibleClass);
        
    
}

setInterval(slider, 5000);

/*
(function(){

    let slides = document.querySelectorAll('.fade-slider__item');
    let visibleClass = 'fade-slider__item--visible';
    let counter = 0;

    setInterval(function(){

        slides[counter].classList.remove(visibleClass);
        counter++;
        

        if(counter + 1 > slides.length) {
            counter = 0;
        }

        slides[counter].classList.add(visibleClass);

    }, 3000);

}())
*/