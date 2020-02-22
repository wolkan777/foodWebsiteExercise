
const slideshow = document.getElementById("slideShow");
const slides = document.getElementsByTagName("img");
let index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


document.getElementById('left').addEventListener('click', prevSlide);
document.getElementById('left').addEventListener('click', prevSlideText);
document.getElementById('right').addEventListener('click', nextSlide);
document.getElementById('right').addEventListener('click', nextSlideText);


const slideShowText = document.getElementById('slideShowText')
const slideTexts = slideShowText.getElementsByTagName('div');
let i = 0;

function nextSlideText() {
    slideTexts[i].classList.remove('active');
    i = (i + 1) % slideTexts.length;
    slideTexts[i].classList.add('active');
}

function prevSlideText() {
    slideTexts[i].classList.remove('active');
    i = (i - 1 + slideTexts.length) % slideTexts.length;
    slideTexts[i].classList.add('active');
}


function menuToggle() {
    let nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}