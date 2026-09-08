import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const definirClasse = ({ isActive }: { isActive: boolean }) => {
    const classeBase = `
      group/link
      relative
      flex
      shrink-0
      items-center

      px-[5px]
      py-[10px]

      whitespace-nowrap

      [font-family:'Fredoka',sans-serif]
      text-[16px]
      font-medium
      text-[var(--cor-azul)]
      no-underline

      after:absolute
      after:left-[5px]
      after:right-[5px]
      after:bottom-[5px]
      after:h-[1px]
      after:origin-center
      after:bg-[var(--cor-azul)]
      after:transition-transform
      after:duration-[400ms]

      hover:after:scale-x-100
    `;

    return isActive
      ? `
        ${classeBase}
        after:scale-x-100
        group-hover/menu:after:scale-x-0
        hover:after:scale-x-100
      `
      : `
        ${classeBase}
        after:scale-x-0
        hover:after:scale-x-100
      `;
  };

  return (
    <header
      className="
        relative
        left-1/2
        w-screen
        max-w-none
        -translate-x-1/2

        box-border
        m-0
        flex
        min-h-[75px]

        items-center

        overflow-x-hidden

        bg-[var(--cor-creme)]

        px-[clamp(20px,2.5vw,50px)]
        py-0
      "
    >
      {/* LOGO */}
      <Link
        to="/"
        className="
          shrink-0
          no-underline
        "
      >
        <span
          className="
            inline-flex
            items-center
            gap-[9px]

            [font-family:'Fredoka',sans-serif]
            text-[35px]
            font-semibold
            leading-none
            text-[var(--cor-roxo-escuro)]
          "
        >
          <strong>soul</strong>

          <span
            className="
              inline-flex
              h-[42px]
              w-[42px]
              shrink-0
              rotate-[-6deg]

              items-center
              justify-center

              rounded-[58%_42%_63%_37%/45%_58%_42%_55%]

              bg-[var(--cor-ciano-2)]

              [font-family:'Fredoka',sans-serif]
              text-[13px]
              font-semibold
              text-[var(--cor-branco)]
            "
          >
            <strong>UP</strong>
          </span>
        </span>
      </Link>

      {/* NAVEGAÇÃO */}
      <nav
        className="
          ml-auto
          flex
          min-w-0
          flex-1
          items-center
          justify-end
        "
      >
        {/* MOBILE */}
        <button
          id="btn-mobile"
          type="button"
          aria-label="Abrir menu"
          className="
            hidden
            h-[35px]
            w-[35px]
            shrink-0
            cursor-pointer
            items-center
            justify-center

            rounded-[15px]

            border
            border-[var(--cor-azul-bebe)]

            bg-[linear-gradient(to_right,var(--cor-azul),var(--cor-ciano))]

            text-[15px]
            text-[var(--cor-branco)]
          "
        >
          ☰
        </button>

        {/* LINKS */}
        <div
          className="
            group/menu

            ml-auto
            flex
            min-w-0
            max-w-full
            items-center
            justify-end

            gap-x-[clamp(16px,2vw,40px)]
          "
        >
          <NavLink to="/" className={definirClasse}>
            Página Inicial
          </NavLink>

          <NavLink to="/pagina-sobre" className={definirClasse}>
            Sobre
          </NavLink>

          <NavLink to="/pagina-faq" className={definirClasse}>
            FAQ
          </NavLink>

          <NavLink to="/pagina-desafio" className={definirClasse}>
            Desafios
          </NavLink>

          <NavLink to="/pagina-solucao" className={definirClasse}>
            Soluções
          </NavLink>

          <NavLink to="/pagina-contato" className={definirClasse}>
            Contato
          </NavLink>

          <NavLink to="/pagina-quem-somos" className={definirClasse}>
            Quem somos?
          </NavLink>

          <NavLink to="/pagina-login" className={definirClasse}>
            Entrar
          </NavLink>
        </div>
      </nav>
    </header>
  );
}