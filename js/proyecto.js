// Inicializa el slider
document.addEventListener('DOMContentLoaded', () => {
    new SliderController();
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const sliderTrack = card.querySelector('.slider-track');
        const btnIzquierda = card.querySelector('.btnIzquierda');
        const btnDerecha = card.querySelector('.btnDerecha');

        let currentSlide = 0;
        const totalSlides = sliderTrack.children.length;

        function moveSlide(index) {
            const slideWidth = sliderTrack.clientWidth;
            sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
        }

        btnDerecha.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            moveSlide(currentSlide);
        });

        btnIzquierda.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            moveSlide(currentSlide);
        });
    });
});