import { NavLink, Link } from 'react-router-dom';
//img import (/components/src/img/)
import logoSoulup from '../../img/logo-soulup.webp';

export default function Navbar() {
    
    //Adição de estilo ao link com base na página atual (condição simples)
    const definirClasse = ({isActive}: {isActive: boolean}) => isActive ? "nav__link nav__link--active" : "nav__link";

    return (
        <header className="header__container">
        <Link to="/">
        <img src={logoSoulup} alt="SoulUp" className="header__logo" />
        </Link>

        <nav className="nav__container">
            <button id="btn-mobile">☰</button>
            <div className="nav__menu">
                {/* substituição do 'a href' por 'NavLink to' com rotas simples que iniciam-se com '/' */}
                <NavLink to="/" className={definirClasse}>Página Inicial</NavLink>
                <NavLink to="/pagina-sobre" className={definirClasse}>Sobre</NavLink>
                <NavLink to="/pagina-faq" className={definirClasse}>FAQ</NavLink>
                <NavLink to="/pagina-desafio" className={definirClasse}>Desafios</NavLink>
                <NavLink to="/pagina-solucao" className={definirClasse}>Soluções</NavLink>
                <NavLink to="/pagina-contato" className={definirClasse}>Contato</NavLink>
                <NavLink to="/pagina-quem-somos" className={definirClasse}>Quem somos?</NavLink>
            </div>
            <NavLink to="/pagina-login" className="nav-btn__login">Entrar</NavLink>
        </nav>
        </header>
    );
}