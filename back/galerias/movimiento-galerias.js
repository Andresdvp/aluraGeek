const galerias = document.querySelectorAll('.galerias');

galerias.forEach(galeria => {
  const leftButton = galeria.querySelector('.fa-angle-left');
  const rightButton = galeria.querySelector('.fa-angle-right');
  const carousel = galeria.querySelector('.carousel');

  let scrollAmount = 0;
  const scrollStep = 350; //modifica el tamaño del scroll en el eje x

  leftButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    carousel.scrollLeft = scrollAmount;
  });

  rightButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    carousel.scrollLeft = scrollAmount;
  });
});