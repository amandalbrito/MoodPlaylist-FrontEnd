// const btnPassword = document.querySelector('.btn-password');
// const btnConfirmePassword = document.querySelector('.btn-confirmePassword')
// const inputPassword = document.querySelector('#password');
// const inputConfirmePassword = document.querySelector('#confirmePassword');
// let showPassword = false;

// btnPassword.addEventListener('click', () => {
//   showPassword = !showPassword;

//   inputPassword.type = showPassword ? 'text' : 'password';

//   btnPassword.textContent = showPassword ? 'Ocultar' : 'Mostrar';
// });

// btnConfirmePassword.addEventListener('click', () => {
//   showPassword = !showPassword;

//   inputConfirmePassword.type = showPassword ? 'text' : 'password';

//   btnConfirmePassword.textContent = showPassword ? 'Ocultar' : 'Mostrar';
// });


// ----- Alternar ícone de mostrar/ocultar senha -----

const iconOff = document.getElementById("iconOff");
const iconOn = document.getElementById("iconOn");
const inputSenha = document.getElementById("inputSenha");

// Mostrar senha
iconOff.addEventListener("click", () => {
    inputSenha.type = "text";      // mostra senha
    iconOff.style.display = "none";
    iconOn.style.display = "block";
});

// Ocultar senha
iconOn.addEventListener("click", () => {
    inputSenha.type = "password";  // oculta senha
    iconOn.style.display = "none";
    iconOff.style.display = "block";
});
