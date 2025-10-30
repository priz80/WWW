// Получаем элементы
const slidesContainer = document.querySelector('.slides-portfolio');
const slideslenght = document.querySelectorAll('.slide-portfolio');
const prevBtn = document.getElementById('prev-portfolio');
const nextBtn = document.getElementById('next-portfolio');

// Константы
const slideWidth = 567; // Ширина картинки
const gap = 102; // Расстояние между картинками
const totalSlideslenght = slideslenght.length;

// Индекс текущего слайда
let currentInd = 0;

// Функция обновления позиции
function updateSlider() {
    const offset = -currentInd * (slideWidth + gap);
    slidesContainer.style.transform = `translateX(${offset}px)`;
}

// Обработчики событий
prevBtn.addEventListener('click', () => {
    currentInd = (currentInd - 1 + totalSlideslenght) % totalSlideslenght;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentInd = (currentInd + 1) % totalSlideslenght;
    updateSlider();
});
