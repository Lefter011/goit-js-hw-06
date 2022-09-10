const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    outputRef.innerHTML = '';
    outputRef.textContent += event.currentTarget.value; 

    if (event.target.value === '') {
        outputRef.textContent = 'Anonymous';
	}
})