const arrowPrevPportfolio = document.getElementById("prev-portfolio");
const arrowNextPportfolio = document.getElementById("next-portfolio");
const arrowPrevTarif = document.getElementById("prev-tarif");
const arrowNextTarif = document.getElementById("next-tarif");

arrowPrevPportfolio.addEventListener("mouseover", () => {
  arrowPrevPportfolio.style.transform = `scale(1.3)`;
});
arrowPrevPportfolio.addEventListener("mouseout", () => {
  arrowPrevPportfolio.style.transform = `scale(1)`;
});
arrowNextPportfolio.addEventListener("mouseover", () => {
  arrowNextPportfolio.style.transform = `scale(1.3)`;
});
arrowNextPportfolio.addEventListener("mouseout", () => {
  arrowNextPportfolio.style.transform = `scale(1)`;
});

arrowPrevTarif.addEventListener("mouseover", () => {
  arrowPrevTarif.style.transform = `scale(1.3)`;
});
arrowPrevTarif.addEventListener("mouseout", () => {
  arrowPrevTarif.style.transform = `scale(1)`;
});
arrowNextTarif.addEventListener("mouseover", () => {
  arrowNextTarif.style.transform = `scale(1.3)`;
});
arrowNextTarif.addEventListener("mouseout", () => {
  arrowNextTarif.style.transform = `scale(1)`;
});
