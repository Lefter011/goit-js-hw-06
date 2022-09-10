const formRef = document.querySelector('.login-form');
const formValue = {};
const submitBtnRef = formRef.querySelector('button[type="submit"]');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Все поля должны быть заполнены!');
    } 

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        formValue[name] = value;
    })
    console.log(formValue);
    formRef.reset();
})