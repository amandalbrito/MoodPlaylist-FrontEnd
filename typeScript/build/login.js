"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função de login simulada (com Promise)
function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'kleber@faculdade' && password === '123456') {
                resolve({ email });
            }
            else {
                reject('Usuário ou senha inválidos');
            }
        }, 1500);
    });
}
// Captura o formulário e o elemento de status
const form = document.getElementById('login-form');
const status = document.getElementById('status');
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // evita recarregar a página
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    status.textContent = '🔄 Verificando...';
    status.style.color = 'yellow';
    try {
        const user = await login(email, password);
        status.textContent = `✅ Login bem-sucedido! Bem-vindo, ${user.email}`;
        status.style.color = 'lightgreen';
    }
    catch (error) {
        status.textContent = `❌ ${error}`;
        status.style.color = '#ff8080';
    }
});
//# sourceMappingURL=login.js.map