// Получаем элементы
const slidesContainer = document.querySelector(".slides-portfolio");
const slideslenght = document.querySelectorAll(".slide-portfolio");
const prevBtn = document.getElementById("prev-portfolio");
const nextBtn = document.getElementById("next-portfolio");

// Индекс текущего слайда
let currentInd = 0;

// Константы
let slideWidth = 0; // Ширина картинки
let gap = 0; // Расстояние между картинками
const totalSlideslenght = slideslenght.length;

viewWidth();

function viewWidth() {
  if (window.innerWidth < 1285) {
    slideWidth = 258;
    gap = 37;
  } else {
    slideWidth = 567;
    gap = 102;
  }
}

window.addEventListener("resize", () => {
  currentInd = 0;
  viewWidth();
  updateSlider();
});

// Функция обновления позиции
function updateSlider() {
  const offset = -currentInd * (slideWidth + gap);
  slidesContainer.style.transform = `translateX(${offset}px)`;
}

// Обработчики событий
prevBtn.addEventListener("click", () => {
  currentInd = (currentInd - 1 + totalSlideslenght) % totalSlideslenght;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentInd = (currentInd + 1) % totalSlideslenght;
  updateSlider();
});
