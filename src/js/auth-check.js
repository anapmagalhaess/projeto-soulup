document.addEventListener('DOMContentLoaded', () => {
    //resgata dados do sessionStorage
    const isLogado = sessionStorage.getItem('usuarioLogado');
    const nome = sessionStorage.getItem('nomeUsuario');

   //resgata elementos da pagina atual (suporta as duas classes usadas nos HTMLs)
    const loginBtn = document.querySelector('.nav-btn-login, .nav-btn__login');

    //executa apenas se o usuario estiver logado e se existir os elementos na pagina
    if (isLogado === 'true' && loginBtn && nome) {
        
        //muda o que esta escrito no botao de login
        loginBtn.innerHTML = `perfil`;
        
        loginBtn.classList.add('welcome-msg');

        //muda o destino do link para a página de perfil mantendo o caminho relativo correto
        let currentHref = loginBtn.getAttribute('href');
        if (currentHref) {
            loginBtn.setAttribute('href', currentHref.replace('pagina-login.html', 'pagina-perfil.html'));
        }
    }
});
