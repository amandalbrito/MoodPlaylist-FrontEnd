const iconOff = document.getElementById("iconOff");
const iconOn = document.getElementById("iconOn");
const iconOff2 = document.getElementById("iconOff2");
const iconOn2 = document.getElementById("iconOn2");
const inputSenha = document.getElementById("inputSenha");
const inputConfirmeSenha = document.getElementById("inputConfirmeSenha")

// Mostrar senha
iconOff.addEventListener("click", () => {
    inputSenha.type = "text";
    iconOff.style.display = "none";
    iconOn.style.display = "block";
});

// Ocultar senha
iconOn.addEventListener("click", () => {
    inputSenha.type = "password";
    iconOn.style.display = "none";
    iconOff.style.display = "block";
});

iconOff2.addEventListener("click", () => {
    inputConfirmeSenha.type = "text";
    iconOff2.style.display = "none";
    iconOn2.style.display = "block";
});

// Ocultar senha
iconOn2.addEventListener("click", () => {
    inputConfirmeSenha.type = "password";
    iconOn2.style.display = "none";
    iconOff2.style.display = "block";
});
