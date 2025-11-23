/**
 * MENU LOADER DINÂMICO
 * Carrega menu.html e injeta na página atual
 * Controla abrir/fechar do menu lateral
 */

const btnMenu = document.getElementById("openMenu");

let menuLoaded = false;
let menuOverlay = null;
let menuBackdrop = null;

/* ================================
   1. CARREGAR MENU DE OUTRO ARQUIVO
   ================================ */
async function loadMenu() {
    if (menuLoaded) return;

    try {
        const response = await fetch("menu.html");
        const html = await response.text();

        // cria container invisível para inserir menu.html
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;

        // pegar overlay e backdrop do arquivo menu.html
        menuOverlay = tempDiv.querySelector(".menu-overlay");
        menuBackdrop = tempDiv.querySelector(".menu-backdrop");

        document.body.appendChild(menuOverlay);
        document.body.appendChild(menuBackdrop);

        // botão interno de fechar
        const closeBtn = menuOverlay.querySelector(".icon-close");
        closeBtn.addEventListener("click", closeMenu);

        // clicar no backdrop fecha
        menuBackdrop.addEventListener("click", closeMenu);

        menuLoaded = true;

    } catch (err) {
        console.error("Erro ao carregar menu.html:", err);
    }
}

/* ================================
   2. ABRIR MENU
   ================================ */
async function openMenu() {
    await loadMenu();

    menuOverlay.classList.add("active");
    menuBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";

    // muda botão para X
    btnMenu.classList.add("active");
}

/* ================================
   3. FECHAR MENU
   ================================ */
function closeMenu() {
    if (!menuOverlay || !menuBackdrop) return;

    menuOverlay.classList.remove("active");
    menuBackdrop.classList.remove("active");
    document.body.style.overflow = "";

    // volta botão para menu
    btnMenu.classList.remove("active");
}

/* ================================
   4. EVENTOS GERAIS
   ================================ */

// clicar no botão abre menu
btnMenu?.addEventListener("click", () => {
    if (btnMenu.classList.contains("active")) {
        closeMenu(); // se estiver aberto → fecha
    } else {
        openMenu();
    }
});

// tecla ESC fecha
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
});
