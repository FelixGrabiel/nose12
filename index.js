const yesBtn = document.querySelector('#yesBtn');
const image = document.querySelector('#image');

yesBtn.addEventListener('click', function () {
  alert('Sabia que ibas a decir que si uwu');
  image.style.display = 'block'; // Mostrar la imagen al hacer clic en "SI"
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
  const randomX = parseInt(Math.random() * 100);
  const randomY = parseInt(Math.random() * 100);
  noBtn.style.setProperty('top', randomY + '%');
  noBtn.style.setProperty('left', randomX + '%');
  noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
