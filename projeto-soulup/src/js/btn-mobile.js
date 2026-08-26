const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const navCont = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    const btnMobile = document.getElementById('btn-mobile');

    btnMobile.classList.toggle('btn-active');
    navCont.classList.toggle('nav-container--active');
    navMenu.classList.toggle('nav-menu--active');
}
btnMobile.addEventListener('click', toggleMenu);


// mudança de cor ao clique
btnMobile.addEventListener('click', () => {
  // liga/desliga
    btnMobile.classList.toggle('ativo');
});