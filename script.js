const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        error.style.display = 'block';
        password.value = '';
        confirmPassword.value = '';
        password.style.outline = '1px solid red';
        confirmPassword.style.outline = '1px solid red';

        setTimeout(() => {
            error.style.display = 'none';
            password.style.outline = 'none';
            confirmPassword.style.outline = 'none';   
        }, 1000);
        return
    } 
    form.reset();
    password.style.outline = 'none';
    confirmPassword.style.outline = 'none';
});