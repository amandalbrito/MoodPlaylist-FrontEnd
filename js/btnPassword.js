const btnPassword = document.querySelector('.btn-password');
const btnConfirmePassword = document.querySelector('.btn-confirmePassword')
const inputPassword = document.querySelector('#password');
const inputConfirmePassword = document.querySelector('#confirmePassword');
let showPassword = false;

btnPassword.addEventListener('click', () => {
  showPassword = !showPassword;

  inputPassword.type = showPassword ? 'text' : 'password';

  btnPassword.textContent = showPassword ? 'Ocultar' : 'Mostrar';
});

btnConfirmePassword.addEventListener('click', () => {
  showPassword = !showPassword;

  inputConfirmePassword.type = showPassword ? 'text' : 'password';

  btnConfirmePassword.textContent = showPassword ? 'Ocultar' : 'Mostrar';
});

