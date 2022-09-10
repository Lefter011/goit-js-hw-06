let counterValue = 0;

const valueRef = document.querySelector('#value');
const counterBtnRef = document.querySelectorAll('#counter button');

counterBtnRef[0].addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});
counterBtnRef[1].addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});