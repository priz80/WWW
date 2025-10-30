const wrapper = document.querySelector(".carousel-wrapper");
const slidestarif = document.querySelectorAll(".slide-tarif");
/* console.log(slidestarif); */
const prevBtn = document.querySelector(".prev-container");
const nextBtn = document.querySelector(".next-container");

let currentIndex = 2; // Начинаем с середины дублированных слайдов

function updateCarousel() {
  const offset = (-currentIndex * 100) / 3; // 33.33% на слайд
  wrapper.style.transform = `translateX(${offset}%)`;
  slidestarif[currentIndex + 1].style.transform = `scale(1)`;
  slidestarif[currentIndex].style.transform = `scale(0.8)`;
  slidestarif[currentIndex - 1].style.transform = `scale(0.8)`;
  slidestarif[currentIndex + 2].style.transform = `scale(0.8)`;
  slidestarif[currentIndex].style.transition = "transform 0.5s ease-in-out";
  slidestarif[currentIndex + 1].style.transition = "transform 0.5s ease-in-out";
}

// Бесконечная логика для кнопки "Вперед"
nextBtn.addEventListener("click", () => {
  if (currentIndex < slidestarif.length - 3) {
    currentIndex++;
  } else {
    // Переход к началу (сброс с эффектом)
    currentIndex = 2;
    wrapper.style.transition = "none";
    slidestarif[8].style.transform = `scale(0.8)`;
    updateCarousel();
    setTimeout(
      () => (wrapper.style.transition = "transform 0.5s ease-in-out"),
      10
    );
  }
  updateCarousel();
});

// Бесконечная логика для кнопки "Назад"
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    slidestarif[2].style.transform = `scale(0.8)`;
  } else {
    // Переход к концу (сброс с эффектом)
    currentIndex = slidestarif.length - 3 - 1;
    wrapper.style.transition = "none";
    updateCarousel();
    setTimeout(
      () => (wrapper.style.transition = "transform 0.5s ease-in-out"),
      10
    );
  }
  updateCarousel();
});

// Инициализация
updateCarousel();
