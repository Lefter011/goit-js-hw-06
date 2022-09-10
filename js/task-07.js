const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text')
    
inputRef.addEventListener('input', () => {
console.log('"'+inputRef.value+'"')
    spanRef.style.fontSize =inputRef.value+'px';
})