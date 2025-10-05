// Simula um login com Promise
function login(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "kleber@faculdade" && password === "123456") {
                resolve({ email });
            }
            else {
                reject("Usuário ou senha inválidos");
            }
        }, 1500);
    });
}
// Captura os elementos do DOM
const form = document.getElementById("login-form");
const status = document.getElementById("status");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    status.textContent = "🔄 Verificando...";
    status.style.color = "yellow";
    try {
        const user = await login(email, password);
        status.textContent = `✅ Login bem-sucedido! Bem-vindo, ${user.email}`;
        status.style.color = "lightgreen";
        //direcionameto de página para rodar localmente e no github
        setTimeout(() => {
            const basePath = window.location.hostname.includes("github.io")
                ? "/MoodPlaylist-FrontEnd/"
                : "../";
            window.location.href = `${basePath}home.html`;
        }, 1500);
    }
    catch (error) {
        status.textContent = `❌ ${error}`;
        status.style.color = "#ff8080";
    }
});
export {};
//# sourceMappingURL=login.js.map