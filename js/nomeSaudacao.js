const nomeSaudacao = document.getElementById('nomeSaudacao');

function emailTratado(email) {
    if (!email || typeof email !== 'string') return '';
    const idx = email.indexOf('@');
    const nome = idx > 0 ? email.substring(0, idx) : email;
    return nome.charAt(0).toUpperCase() + nome.slice(1);
}

// Tenta ler o email salvo no localStorage (definido no login)
const savedEmail = localStorage.getItem('userEmail');
const displayName = emailTratado(savedEmail) || 'Usuário';
if (nomeSaudacao) nomeSaudacao.textContent = `Olá, ${displayName}!`;