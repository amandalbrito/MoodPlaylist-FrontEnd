const openMenu = document.getElementById('openMenu');
// cria refs para overlay e backdrop — se já estiverem no DOM usam, senão criam quando aberto
let menuOverlay = document.querySelector('.menu-overlay');
let menuBackdrop = document.querySelector('.menu-backdrop');

function createMenuElements(){
  if (!menuBackdrop){
    menuBackdrop = document.createElement('div');
    menuBackdrop.className = 'menu-backdrop';
    document.body.appendChild(menuBackdrop);
  }
  if (!menuOverlay){
    menuOverlay = document.createElement('aside');
    menuOverlay.className = 'menu-overlay';
    menuOverlay.innerHTML = `
      <button class="closeMenu" aria-label="Fechar menu">&times;</button>
      <div class="usuario">
        <div class="profile-header">
          <div class="avatar"><img src="https://i.imgur.com/7k12EPD.png" alt="Foto de perfil"></div>
          <h2 class="name">UserName</h2>
          <p class="bio">biografia</p>
        </div>
      </div>
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="perfil.html">Meu Perfil</a></li>
          <li><a href="registroEmocoes.html">Minha Vibe</a></li>
          <li><a href="playlist.html">Minha Playlist (Última)</a></li>
        </ul>
      </nav>
    `;
    document.body.appendChild(menuOverlay);

    // adiciona listener no botão de fechar dentro do overlay
    const closeBtn = menuOverlay.querySelector('.closeMenu');
    closeBtn.addEventListener('click', closeMenu);
  }
}

function openMenuOverlay(){
  createMenuElements();
  menuBackdrop.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // evita scroll do fundo
}

function closeMenu(){
  if (menuBackdrop) menuBackdrop.classList.remove('active');
  if (menuOverlay) menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// fecha quando clicar no backdrop
document.addEventListener('click', (e) => {
  if (menuBackdrop && e.target === menuBackdrop) closeMenu();
});

// fecha com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

if (openMenu){
  openMenu.addEventListener('click', openMenuOverlay);
}
