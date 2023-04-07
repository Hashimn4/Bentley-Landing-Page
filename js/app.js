function f() {
    let container = document.querySelector(".jumbo-slider__container"),
    slides = document.getElementsByClassName("jumbo-slider__slide"),
    links = document.getElementsByClassName("jumbo-slider__link"),
    circles = document.getElementsByClassName("jumbo-slider__circle"),
    time = 6000,
    current = 1;

    slides[0].classList.add("jumbo-slider__slide--active");
    links[current-1].classList.add("jumbo-slider__link--active");
    circles[current-1].classList.add("jumbo-slider__circle--filled");

    function updateNav(current) {
        for(let i = 0; i < slides.length; ++i) {
            links[i].classList.remove("jumbo-slider__link--active");
            circles[i].classList.remove("jumbo-slider__circle--filled");

        }
        links[current-1].classList.add("jumbo-slider__link--active");
        circles[current-1].classList.add("jumbo-slider__circle--filled");

    }

    function sliding() {
        setInterval(() => {
            console.log(current);
            slides[1].classList.add("jumbo-slider__slide--active");
            slides[0].classList.remove("jumbo-slider__slide--active");

            container.appendChild(slides[0].cloneNode([true]));
            container.removeChild(slides[0]);
            if(current < slides.length) {
                current++;
                updateNav(current);
            }
            else {
                current = 1;
                updateNav(current);
            }

            
        }, time);
    }
    sliding();
    
}

f();