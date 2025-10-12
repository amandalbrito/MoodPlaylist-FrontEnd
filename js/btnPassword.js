const btnPassword = document.querySelector('.btn-password');
const inputPassword = document.querySelector('#password'); // supondo que exista um input com esse id
let showPassword = false;

btnPassword.addEventListener('click', () => {
  showPassword = !showPassword;

  inputPassword.type = showPassword ? 'text' : 'password';

  btnPassword.textContent = showPassword ? 'Ocultar' : 'Mostrar';
});
