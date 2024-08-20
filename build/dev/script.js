const slideContainer = document.querySelector('.slide-container');
const slides = [
    { start: 0, end: 3, text: "Lorem ipsum dolor sit amet" },
    { start: 3, end: 6, text: "Consectetur adipiscing elit" },
    { start: 6, end: 9, text: "Integer molestie nunc" },
    { start: 9, end: 12, text: "Sed pharetra neque" }
];

let currentSlideIndex = 0;
let lastTime = 0;

function toggleActiveSlide(
) {
    const currentSlide = document.querySelector('.slide.active');
    if (currentSlide) {
        currentSlide.classList.remove('active');
    }

    const nextSlide = document.createElement('div');
    nextSlide.classList.add('slide');
    nextSlide.innerText = slides[currentSlideIndex].text;
    slideContainer.appendChild(nextSlide);
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    nextSlide.classList.add('active');
}

function updateTime(
) {
    const time = slides[currentSlideIndex].start;
    const timeDiff = performance.now() - lastTime;
    if (timeDiff >= time - lastTime) {
        toggleActiveSlide();
    }
    requestAnimationFrame(updateTime);
}

const firstSlide = document.createElement('div');
firstSlide.classList.add('slide');
firstSlide.innerText = slides[0].text;
slideContainer.appendChild(firstSlide);
firstSlide.classList.add('active');
requestAnimationFrame(updateTime);
