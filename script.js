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

        setTimeout(() => {
            error.style.display = 'none';
        }, 2000);
        return
    } 
    form.reset();
});