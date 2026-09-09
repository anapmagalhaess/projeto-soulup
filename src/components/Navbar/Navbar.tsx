import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [usuarioLogado, setUsuarioLogado] = useState(
    () => sessionStorage.getItem("usuarioLogado") === "true",
  );

  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const atualizarAutenticacao = () => {
      const isLogado =
        sessionStorage.getItem("usuarioLogado") === "true";

      setUsuarioLogado(isLogado);
    };

    window.addEventListener(
      "auth-change",
      atualizarAutenticacao,
    );

    window.addEventListener(
      "storage",
      atualizarAutenticacao,
    );

    return () => {
      window.removeEventListener(
        "auth-change",
        atualizarAutenticacao,
      );

      window.removeEventListener(
        "storage",
        atualizarAutenticacao,
      );
    };
  }, []);

  const definirClasse = ({
    isActive,
  }: {
    isActive: boolean;
  }) => {
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

      max-[900px]:w-full
      max-[900px]:justify-center
      max-[900px]:rounded-[12px]
      max-[900px]:px-4
      max-[900px]:py-3
      max-[900px]:text-[15px]

      max-[900px]:after:hidden
      max-[900px]:hover:bg-[var(--cor-azul-bebe)]
    `;

    return isActive
      ? `
        ${classeBase}

        after:scale-x-100
        group-hover/menu:after:scale-x-0
        hover:after:scale-x-100

        max-[900px]:bg-[var(--cor-azul-bebe)]
        max-[900px]:font-semibold
        max-[900px]:text-[var(--cor-azul-escuro)]
      `
      : `
        ${classeBase}

        after:scale-x-0
        hover:after:scale-x-100
      `;
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header
      className="
        relative
        left-1/2
        z-50
        w-screen
        max-w-none
        -translate-x-1/2
        box-border
        m-0
        flex
        min-h-[75px]
        items-center
        overflow-visible
        bg-[var(--cor-creme)]
        px-[clamp(20px,2.5vw,50px)]
        py-0

        max-[900px]:min-h-[70px]
        max-[900px]:px-5
      "
    >
      {/* LOGO */}
      <Link
        to="/"
        onClick={fecharMenu}
        className="shrink-0 no-underline"
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

            max-[900px]:text-[30px]
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

              max-[900px]:h-[38px]
              max-[900px]:w-[38px]
              max-[900px]:text-[12px]
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
        {/* BOTÃO MOBILE */}
        <button
          id="btn-mobile"
          type="button"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((atual) => !atual)}
          className="
            hidden
            h-[44px]
            w-[44px]
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-[14px]
            border
            border-[var(--cor-azul-bebe)]
            bg-[var(--cor-branco)]
            text-[var(--cor-azul-escuro)]
            shadow-[0_4px_14px_rgba(32,111,116,0.08)]
            transition
            duration-200

            hover:-translate-y-[1px]
            hover:border-[var(--cor-ciano)]
            hover:bg-[var(--cor-azul-bebe)]

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[var(--cor-azul)]

            max-[900px]:inline-flex
          "
        >
          <i
            className={`
              fa-solid
              ${
                menuAberto
                  ? "fa-xmark"
                  : "fa-bars"
              }
              text-[19px]
            `}
          />
        </button>

        {/* LINKS */}
        <div
          className={`
            group/menu
            ml-auto
            flex
            min-w-0
            max-w-full
            items-center
            justify-end
            gap-x-[clamp(16px,2vw,40px)]

            max-[900px]:absolute
            max-[900px]:left-5
            max-[900px]:right-5
            max-[900px]:top-[78px]
            max-[900px]:z-50
            max-[900px]:ml-0
            max-[900px]:flex-col
            max-[900px]:items-stretch
            max-[900px]:gap-1
            max-[900px]:rounded-[20px]
            max-[900px]:border
            max-[900px]:border-[var(--cor-creme-destaque)]
            max-[900px]:bg-[var(--cor-branco)]
            max-[900px]:p-3
            max-[900px]:shadow-[0_18px_40px_rgba(32,111,116,0.14)]
            max-[900px]:transition-all
            max-[900px]:duration-200

            ${
              menuAberto
                ? "max-[900px]:visible max-[900px]:translate-y-0 max-[900px]:opacity-100"
                : "max-[900px]:invisible max-[900px]:-translate-y-2 max-[900px]:pointer-events-none max-[900px]:opacity-0"
            }
          `}
        >
          <NavLink
            to="/"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Página Inicial
          </NavLink>

          <NavLink
            to="/pagina-sobre"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Sobre
          </NavLink>

          <NavLink
            to="/pagina-faq"
            className={definirClasse}
            onClick={fecharMenu}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/pagina-desafio"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Desafios
          </NavLink>

          <NavLink
            to="/pagina-solucao"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Soluções
          </NavLink>

          <NavLink
            to="/pagina-contato"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Contato
          </NavLink>

          <NavLink
            to="/pagina-quem-somos"
            className={definirClasse}
            onClick={fecharMenu}
          >
            Quem somos?
          </NavLink>

          {usuarioLogado ? (
            <NavLink
              to="/pagina-perfil"
              className={definirClasse}
              onClick={fecharMenu}
            >
              Perfil
            </NavLink>
          ) : (
            <NavLink
              to="/pagina-login"
              className={definirClasse}
              onClick={fecharMenu}
            >
              Entrar
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}