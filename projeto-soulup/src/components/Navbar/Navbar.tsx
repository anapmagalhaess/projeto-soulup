export default function(){
    return(
        <header className="header__container">
            <img src="./img/logo-soulup.webp" alt="SoulUp" className="header__logo"/>
            <nav className="nav__container">
                <button id="btn-mobile">☰</button>
                <div className="nav__menu">
                    <a href="./index.html" className="nav__link">Página Inicial</a>
                    <a href="./paginas/pagina-sobre.html" className="nav__link">Sobre</a>
                    <a href="./paginas/pagina-faq.html" className="nav__link">FAQ</a>
                    <a href="./paginas/pagina-desafio.html" className="nav__link">Desafios</a>
                    <a href="./paginas/pagina-solucao.html" className="nav__link">Soluções</a>
                    <a href="./paginas/pagina-contato.html" className="nav__link">Contato</a>
                    <a href="./paginas/pagina-quem-somos.html" className="nav__link">Quem somos?</a>
                </div>
                <a href="./paginas/pagina-login.html" className="nav-btn__login">Entrar</a>
            </nav>
        </header>
    );
}