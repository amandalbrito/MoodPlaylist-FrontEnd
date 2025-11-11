const btnMenu = document.querySelector('.btnMenu');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

// Garante que o elemento existe antes de usar
if (openMenu && btnMenu) {
  openMenu.addEventListener('click', () => {
    btnMenu.classList.add('active');
  });
}

if (closeMenu && btnMenu) {
  closeMenu.addEventListener('click', () => {
    btnMenu.classList.remove('active');

    // Se houver histórico de navegação, volta; caso contrário, garante retorno para home
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // usa caminho relativo caso esteja abrindo como arquivo local
      window.location.href = './home.html';
    }
  });
}
