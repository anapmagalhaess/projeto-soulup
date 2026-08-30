// Aguarda o HTML carregar 100%
document.addEventListener('DOMContentLoaded', () => {
    //resgata dados do sessionStorage
    const isLogado = sessionStorage.getItem('usuarioLogado');
    const nomeSalvo = sessionStorage.getItem('nomeUsuario');
    const userSalvo = sessionStorage.getItem('userUsuario');

    //resgata elementos da pagina atual (suporta as duas classes usadas nos HTMLs)
    const loginBtn = document.querySelector('.nav-btn-login, .nav-btn__login');

    //executa apenas se o usuario estiver logado e se existir os elementos na pagina
    if (isLogado === 'true' && loginBtn) {

        //muda o que esta escrito no botao de login
        loginBtn.textContent = 'perfil';

        loginBtn.classList.add('welcome-msg');

        if (nomeSalvo) {
            const displayName = document.getElementById('display-name');
            if (displayName) displayName.textContent = nomeSalvo;
            // uso do textcontent pois evita injecao de scripts maliciosos no input
        }

        if (userSalvo) {
            // Adiciona o @ caso o usuário não tenha digitado
            const usernameFormatado = userSalvo.startsWith('@') ? userSalvo : `@${userSalvo}`;
            const displayUser = document.getElementById('display-user');
            if (displayUser) displayUser.textContent = usernameFormatado;
        }

        // Detecta o caminho correto para pagina-perfil.html baseado na localização atual
        const pathname = window.location.pathname;
        const emSubPagina = pathname.includes('/src/paginas/');
        
        // Paginas em /src/paginas/ usam caminho relativo local
        // index.html na raiz usa ./src/paginas/
        const perfilHref = emSubPagina ? './pagina-perfil.html' : './src/paginas/pagina-perfil.html';

        loginBtn.setAttribute('href', perfilHref);
    }
});
