
const colorLabelRef = document.querySelector('.color');
const btnChangerRef = document.querySelector('.change-color');

btnChangerRef.addEventListener('click', (event) => {
    colorLabelRef.textContent = document.body.style.backgroundColor = getRandomHexColor();
    document.body.style.transition = '500ms';
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}