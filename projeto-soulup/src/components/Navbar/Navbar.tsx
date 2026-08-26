import { NavLink, Link } from 'react-router-dom';
//img import (/components/src/img/)

export default function Navbar() {
    
    //Adição de estilo ao link com base na página atual (condição simples)
    const definirClasse = ({isActive}: {isActive: boolean}) => isActive ? "nav-link nav-link--active" : "nav-link";

    return (
        <header className="header-container">
        <Link to="/">
        <span className="nav-brand"> soul <span className="nav-brand-badge">UP</span></span>
        </Link>

        <nav className="nav-container">
            <button id="btn-mobile">☰</button>
            <div className="nav-menu">
                {/* substituição do 'a href' por 'NavLink to' com rotas simples que iniciam-se com '/' */}
                <NavLink to="/" className={definirClasse}>Página Inicial</NavLink>
                <NavLink to="/pagina-sobre" className={definirClasse}>Sobre</NavLink>
                <NavLink to="/pagina-faq" className={definirClasse}>FAQ</NavLink>
                <NavLink to="/pagina-desafio" className={definirClasse}>Desafios</NavLink>
                <NavLink to="/pagina-solucao" className={definirClasse}>Soluções</NavLink>
                <NavLink to="/pagina-contato" className={definirClasse}>Contato</NavLink>
                <NavLink to="/pagina-quem-somos" className={definirClasse}>Quem somos?</NavLink>
                <NavLink to="/pagina-login" className={definirClasse}>Entrar</NavLink>
            </div>
        </nav>
        </header>
    );
}