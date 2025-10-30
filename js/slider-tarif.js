// Получаем элементы
const wrapper = document.querySelector(".slides-tarif");
const slidestarif = document.querySelectorAll(".slide-tarif");
const prev = document.getElementById("prev-tarif");
const next = document.getElementById("next-tarif");

// Константы
const slideW = 370; // Ширина картинки
const gapt = 0; // Расстояние между картинками
const totalSlideslengh = slidestarif.length;

// Индекс текущего слайда
let ex = 0;
slidestarif[ex + 1].style.transform = `scale(1)`;
// Функция обновления позиции
function updateSlider() {
  const offset = -ex * (slideW + gapt);
  wrapper.style.transform = `translateX(${offset}px)`;
}

// Обработчики событий
prev.addEventListener("click", () => {
  if (ex < 5 && ex != 0) {
    ex = (ex - 1 + totalSlideslengh) % totalSlideslengh;
  } else {
    ex = 4;
  }
  console.log(ex);
  slidestarif[1].style.transform = `scale(0.8)`;
  if (ex < 4) {
    slidestarif[ex + 2].style.transform = `scale(0.8)`;
    slidestarif[ex + 2].style.transition = "transform 0.5s ease-in-out";
  }
  if (ex < 5) {
    slidestarif[ex + 1].style.transform = `scale(1)`;
    slidestarif[ex + 1].style.transition = "transform 0.5s ease-in-out";
  }
  updateSlider();
});

if(ex < 4) {
    next.addEventListener("click", () => {
  if (ex < 4) {
    ex = (ex + 1) % totalSlideslengh;
  } else {
    slidestarif[ex + 1].style.transform = `scale(0.8)`;
    ex = 0;
  }
  console.log(ex);
  if (ex < 5) {
    slidestarif[ex].style.transform = `scale(0.8)`;
    slidestarif[ex + 1].style.transform = `scale(1)`;
    slidestarif[ex].style.transition = "transform 0.5s ease-in-out";
    slidestarif[ex + 1].style.transition = "transform 0.5s ease-in-out";
  } else {
    slidestarif[ex].style.transform = `scale(0.8)`;
    /* slidestarif[ex + 1].style.transform = `scale(1)`; */
  }
  updateSlider();
});
}
