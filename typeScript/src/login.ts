// Simula um login com Promise
function login(email: string, password: string): Promise<{ email: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "kleber@faculdade" && password === "123456") {
        resolve({ email });
      } else {
        reject("Usuário ou senha inválidos");
      }
    }, 1500);
  });
}

// Captura os elementos do DOM
const form = document.getElementById("login-form") as HTMLFormElement;
const status = document.getElementById("status") as HTMLParagraphElement;

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  status.textContent = "🔄 Verificando...";
  status.style.color = "yellow";

  try {
    const user = await login(email, password);
    status.textContent = `✅ Login bem-sucedido! Bem-vindo, ${user.email}`;
    status.style.color = "lightgreen";

    setTimeout(() => {
      window.location.href = "MoodPlaylist-FrontEnd/home.html";
    }, 1500);
  } catch (error) {
    status.textContent = `❌ ${(error as string)}`;
    status.style.color = "#ff8080";
  }
});
