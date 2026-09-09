import { Link } from "react-router-dom";
import Tag from "../components/Tag/Tag";

export default function Home() {
  return (
    <main
      className="
        relative
        m-0
        p-0
        w-full
        max-w-none
        min-h-screen
        overflow-x-hidden
        bg-[var(--cor-creme)]
        text-[var(--cor-azul-escuro)]
        [font-family:var(--fonte-texto)]
        antialiased
        select-none
      "
    >
      {/* ==================== HERO ==================== */}
      <section
        className="
          relative
          m-0
          w-full
          overflow-hidden
          border
          border-[var(--cor-creme-destaque)]
          bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)]
          pt-[76px]
          pb-[60px]
          mb-[60px]
          max-[900px]:pt-[56px]
          max-[900px]:pb-[48px]
          max-[900px]:mb-[48px]
          max-[600px]:pt-[42px]
          max-[600px]:pb-[40px]
          max-[600px]:mb-[40px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1180px]
            grid-cols-[1.05fr_0.95fr]
            items-center
            gap-10
            px-10
            max-[900px]:grid-cols-1
            max-[900px]:gap-8
            max-[900px]:px-6
            max-[600px]:px-5
          "
        >
          {/* Conteúdo do Hero */}
          <div className="max-[900px]:text-center">
            <p className="m-0">
              <Tag texto="bem-vindo(a) à soulup" />
            </p>

            <h1
              className="
                m-0
                mb-[22px]
                max-w-[15ch]
                [font-family:var(--fonte-titulo)]
                text-[clamp(34px,4vw,50px)]
                max-[900px]:mx-auto
                max-[600px]:max-w-[13ch]
                max-[600px]:text-[clamp(30px,9vw,40px)]
                font-semibold
                leading-[1.16]
                tracking-[-0.01em]
                text-[var(--cor-azul-escuro)]
              "
            >
              a primeira{" "}
              <span
                className="
                  relative
                  whitespace-nowrap
                  font-bold
                  before:absolute
                  before:bottom-[6px]
                  before:left-[-6px]
                  before:right-[-6px]
                  before:z-[1]
                  before:h-[0.42em]
                  before:rotate-[-1.5deg]
                  before:rounded-[3px]
                  before:bg-[var(--cor-azul-bebe)]
                  before:content-['']
                "
              >
                <span className="relative z-[2]">rede social</span>
              </span>{" "}
              de{" "}
              <span
                className="
                  relative
                  whitespace-nowrap
                  font-bold
                  before:absolute
                  before:bottom-[6px]
                  before:left-[-6px]
                  before:right-[-6px]
                  before:z-[1]
                  before:h-[0.42em]
                  before:rotate-[1.2deg]
                  before:rounded-[3px]
                  before:bg-[var(--cor-azul-bebe)]
                  before:content-['']
                "
              >
                <span className="relative z-[2] text-[var(--cor-azul-escuro)]">
                  impacto sustentável
                </span>
              </span>{" "}
              do planeta.
            </h1>

            <p
              className="
                m-0
                mb-8
                max-w-[46ch]
                text-[16.5px]
                max-[900px]:mx-auto
                max-[600px]:text-[15px]
                font-medium
                leading-[1.65]
                text-[var(--cor-turquesa)]
              "
            >
              conecte-se com gente que também quer fazer diferença, registre
              suas atitudes sustentáveis do dia a dia e troque cada uma delas
              por recompensas de verdade.
            </p>

            {/* links */}
            <div className="mb-[52px] flex flex-wrap items-center gap-[20px] max-[900px]:justify-center max-[600px]:mb-10 max-[600px]:flex-col max-[600px]:gap-3">
              <Link
                to="/pagina-login"
                className="
                  mr-0
                  inline-flex
                  items-center
                  justify-center
                  rounded-[16px]
                  border-0
                  bg-[var(--cor-coral)]
                  px-[26px]
                  py-[15px]
                  [font-family:var(--fonte-titulo)]
                  text-[15px]
                  font-semibold
                  text-[var(--cor-branco)]
                  no-underline
                  shadow-[0_6px_0_var(--cor-coral-escuro)]
                  transition-[transform,box-shadow]
                  duration-[120ms]
                  ease-out
                  hover:-translate-y-[2px]
                  hover:shadow-[0_8px_0_var(--cor-coral-escuro)]
                  active:translate-y-[2px]
                  max-[600px]:w-full
                  active:shadow-[0_3px_0_var(--cor-coral-escuro)]
                "
              >
                <strong>criar minha conta</strong>
              </Link>

              <Link
                to="/pagina-sobre"
                className="
                  inline-flex
                  min-w-[170px]
                  items-center
                  justify-center
                  rounded-[16px]
                  border-2
                  border-dashed
                  border-[var(--cor-azul)]
                  bg-transparent
                  px-[30px]
                  py-[15px]
                  [font-family:var(--fonte-titulo)]
                  text-center
                  text-[15px]
                  text-[var(--cor-azul-escuro)]
                  no-underline
                  transition-[background,transform]
                  duration-150
                  hover:-translate-y-[2px]
                  max-[600px]:w-full
                  hover:bg-white/60
                "
              >
                <strong>ver como funciona</strong>
              </Link>
            </div>

            {/* Status da plataforma */}
            <div className="flex flex-wrap gap-[14px] max-[900px]:justify-center max-[600px]:grid max-[600px]:grid-cols-1 max-[600px]:gap-3">
              <div className="rotate-[-1.5deg] rounded-[18px] border border-[rgba(32,111,116,0.12)] bg-[rgba(255,255,255,0.70)] px-[18px] py-[12px] max-[600px]:rotate-0 max-[600px]:text-center">
                <p className="m-0 whitespace-nowrap max-[600px]:whitespace-normal">
                  <span className="[font-family:var(--fonte-titulo)] text-[20px] font-semibold text-[var(--cor-azul-escuro)]">
                    <strong>12k+</strong>
                  </span>
                  <span className="ml-[8px] text-[11px] font-bold text-[var(--cor-turquesa)]">
                    <strong>ações registradas</strong>
                  </span>
                </p>
              </div>

              <div className="rotate-[1.5deg] rounded-[18px] border border-[rgba(32,111,116,0.12)] bg-[rgba(255,255,255,0.70)] px-[18px] py-[12px] max-[600px]:rotate-0 max-[600px]:text-center">
                <p className="m-0 whitespace-nowrap max-[600px]:whitespace-normal">
                  <span className="[font-family:var(--fonte-titulo)] text-[20px] font-semibold text-[var(--cor-azul-escuro)]">
                    <strong>3,8k</strong>
                  </span>
                  <span className="ml-[8px] text-[12px] font-bold text-[var(--cor-turquesa)]">
                    <strong>recompensas resgatadas</strong>
                  </span>
                </p>
              </div>

              <div className="rounded-[18px] border border-[rgba(32,111,116,0.12)] bg-[rgba(255,255,255,0.70)] px-[18px] py-[12px] max-[600px]:text-center">
                <p className="m-0 whitespace-nowrap max-[600px]:whitespace-normal">
                  <span className="[font-family:var(--fonte-titulo)] text-[20px] text-[var(--cor-azul-escuro)]">
                    <strong>40+</strong>
                  </span>
                  <span className="ml-[8px] text-[12px] font-bold text-[var(--cor-turquesa)]">
                    <strong>marcas parceiras</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Visual do Hero */}
          <div className="relative h-[380px] max-[900px]:mx-auto max-[900px]:w-full max-[900px]:max-w-[520px] max-[600px]:h-[300px]">
            <div className="absolute left-0 top-[4%] h-[220px] w-[220px] rounded-full bg-[rgba(65,198,196,0.30)]" />
            <div className="absolute bottom-[6%] right-[4%] h-[150px] w-[150px] rounded-full bg-[rgba(153,209,213,0.45)]" />

            {/* Card Meta da Semana */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                w-[260px]
                -translate-x-1/2
                max-[600px]:w-[230px]
                -translate-y-1/2
                rotate-[-3deg]
                rounded-[28px]
                bg-[linear-gradient(160deg,var(--cor-ciano)_0%,var(--cor-azul)_100%)]
                px-[20px]
                py-[18px]
                text-[var(--cor-branco)]
                shadow-[0_30px_60px_-20px_rgba(32,111,116,0.30)]
              "
            >
              <p className="m-0">
                <span className="mb-[2px] inline-block [font-family:var(--fonte-titulo)] text-[11.5px] font-medium uppercase tracking-[0.04em] text-[var(--cor-branco)] opacity-[0.85]">
                  meta da semana
                </span>
              </p>

              <h3 className="m-0 [font-family:var(--fonte-titulo)] text-[22px] font-bold">
                +120 pontos
              </h3>

              <p className="m-0 mt-[2px] text-[12px] leading-[1.35] opacity-90">
                faltam 3 ações pra trocar por um brinde parceiro
              </p>

              <div className="mt-[6px] flex items-center gap-[8px]">
                <svg
                  className="h-[32px] w-[125px] fill-none"
                  viewBox="0 0 150 42"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 36C24 36 28 27 42 23C58 19 64 11 82 8C100 5 108 12 132 7"
                    stroke="#FFFFFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="1 7"
                    opacity="0.6"
                  />
                  <circle cx="4" cy="36" r="3.5" className="fill-[var(--cor-branco)]" />
                  <circle cx="42" cy="23" r="3.5" className="fill-[var(--cor-branco)]" />
                  <circle cx="82" cy="8" r="3.5" className="fill-[var(--cor-branco)]" />
                  <circle cx="132" cy="7" r="7" className="fill-[var(--cor-branco)]" />
                  <path
                    d="M129 7L131.5 9.5L135.5 4.5"
                    stroke="var(--cor-azul)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMO FUNCIONA ==================== */}
      <section
        id="como-funciona"
        className="
          relative
          m-0
          w-full
          bg-[var(--cor-creme)]
          pb-[70px]
          max-[600px]:pb-[52px]
        "
      >
        <div className="mx-auto w-full max-w-[1180px] px-10 max-[900px]:px-6 max-[600px]:px-5">
          <div className="mx-auto mb-[52px] max-w-[560px] text-center max-[600px]:mb-10">
            <p className="m-0">
              <Tag texto="simples assim" />
            </p>

            <h2
              className="
                m-0
                mb-3
                [font-family:var(--fonte-titulo)]
                text-[clamp(28px,3vw,38px)]
                font-semibold
                tracking-[-0.01em]
                text-[var(--cor-azul-escuro)]
              "
            >
              de atitude a recompensa em 3 passos
            </h2>

            <p className="m-0 text-[15.5px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
              sem burocracia, sem letra miúda — só ação de verdade virando
              retorno de verdade.
            </p>
          </div>

          <div className="grid grid-cols-3 items-start gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:gap-5">
            {/* Card 1 */}
            <article className="relative min-w-0 rounded-[24px] border border-[var(--cor-creme)] bg-[#F5FDFD] px-[28px] pt-[24px] pb-[20px] max-[600px]:px-5 max-[600px]:pt-6 max-[600px]:pb-5">
              <span className="absolute left-[28px] top-[-14px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--cor-azul)] [font-family:var(--fonte-titulo)] text-[14px] font-semibold text-[var(--cor-branco)]">
                1
              </span>

              <div className="mb-[12px] inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[50%] border-[1.4px] border-[var(--cor-ciano)] bg-[#E3F6F5] text-[18px] text-[#13969f]">
                <i className="fa-solid fa-shield" />
              </div>

              <h3 className="m-0 mb-[6px] [font-family:var(--fonte-titulo)] text-[19px] font-semibold text-[var(--cor-azul-escuro)]">
                registre sua ação
              </h3>

              <p className="m-0 text-[14px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
                reciclou, foi de bike, economizou água? conta pra gente — cada
                gesto sustentável entra no seu histórico.
              </p>
            </article>

            {/* Card 2 */}
            <article className="relative min-w-0 rounded-[24px] border border-[var(--cor-creme)] bg-[#F5FDFD] px-[28px] pt-[24px] pb-[20px] max-[600px]:px-5 max-[600px]:pt-6 max-[600px]:pb-5">
              <span className="absolute left-[28px] top-[-14px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--cor-azul)] [font-family:var(--fonte-titulo)] text-[14px] font-semibold text-[var(--cor-branco)]">
                2
              </span>

              <div className="mb-[12px] inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[50%] border-[1.4px] border-[var(--cor-ciano)] bg-[#E3F6F5] text-[18px] text-[#13969f]">
                <i className="fa-solid fa-star" />
              </div>

              <h3 className="m-0 mb-[6px] [font-family:var(--fonte-titulo)] text-[19px] font-semibold text-[var(--cor-azul-escuro)]">
                acumule pontos reais
              </h3>

              <p className="m-0 text-[14px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
                cada ação verificada vira pontos na sua conta. quanto mais
                consistente, mais rápido você sobe de nível.
              </p>
            </article>

            {/* Card 3 */}
            <article className="relative min-w-0 rounded-[24px] border border-[var(--cor-creme)] bg-[#F5FDFD] px-[28px] pt-[24px] pb-[20px] max-[600px]:px-5 max-[600px]:pt-6 max-[600px]:pb-5">
              <span className="absolute left-[28px] top-[-14px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--cor-azul)] [font-family:var(--fonte-titulo)] text-[14px] font-semibold text-[var(--cor-branco)]">
                3
              </span>

              <div className="mb-[12px] inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[50%] border-[1.4px] border-[var(--cor-ciano)] bg-[#E3F6F5] text-[18px] text-[#13969f]">
                <i className="fa-solid fa-gift" />
              </div>

              <h3 className="m-0 mb-[6px] [font-family:var(--fonte-titulo)] text-[19px] font-semibold text-[var(--cor-azul-escuro)]">
                troque por recompensa
              </h3>

              <p className="m-0 text-[14px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
                use seus pontos em marcas parceiras — descontos, produtos e
                experiências de verdade te esperando.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== META DA COMUNIDADE ==================== */}
      <section
        className="
          relative
          m-0
          w-full
          overflow-hidden
          border-t
          border-[var(--cor-creme-destaque)]
          bg-[var(--cor-azul-bebe)]
          pt-[100px]
          pb-[120px]
          max-[900px]:pt-[72px]
          max-[900px]:pb-[88px]
          max-[600px]:pt-[56px]
          max-[600px]:pb-[64px]
        "
      >
        {/* Bolhas decorativas da meta da comunidade */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Bolha superior esquerda */}
          <div
            className="
              absolute
              left-[5%]
              top-[12%]
              h-[190px]
              w-[190px]
              rounded-full
              bg-[var(--cor-azul)]
              opacity-[0.10]
            "
          />

          {/* Bolha inferior direita */}
          <div
            className="
              absolute
              bottom-[10%]
              right-[6%]
              h-[150px]
              w-[150px]
              rounded-full
              bg-[var(--cor-azul)]
              opacity-[0.16]
            "
          />
        </div>

        <div className="relative z-[1] mx-auto w-full max-w-[1180px] px-10 max-[900px]:px-6 max-[600px]:px-5">
          <div
            className="
              mx-auto
              flex
              min-h-[420px]
              w-full
              max-w-[860px]
              max-[600px]:min-h-0
              flex-col
              items-center
              justify-center
              rounded-[28px]
              border
              border-[var(--cor-creme-destaque)]
              bg-[#F5FDFD]
              p-12
              text-center
              max-[900px]:p-10
              max-[600px]:p-6
              shadow-[0_20px_40px_-10px_rgba(32,111,116,0.08)]
            "
          >
            <div className="mb-[30px] w-full max-w-[600px]">
              <p className="m-0">
                <Tag texto="metas da comunidade" />
              </p>

              <h2
                className="
                  m-0
                  mb-4
                  [font-family:var(--fonte-titulo)]
                  text-[clamp(24px,3vw,32px)]
                  font-semibold
                  text-[var(--cor-azul-escuro)]
                "
              >
                50.000 usuários ativos
              </h2>

              <p className="mx-auto m-0 max-w-[600px] text-[15.5px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
                estamos quase lá! junte-se a nós para alcançarmos nossa próxima
                grande meta de impacto positivo.
              </p>
            </div>

            <div className="mt-[30px] flex w-full flex-col items-center">
              <div className="relative mb-3 h-[14px] w-full max-w-[520px] overflow-hidden rounded-[10px] bg-[#E3F6F5]">
                <div className="h-full w-1/2 rounded-[10px] bg-[linear-gradient(90deg,var(--cor-ciano),var(--cor-azul))] transition-[width] duration-1000 ease-in-out" />
              </div>

              <div className="flex w-full max-w-[520px] justify-between gap-4 text-[14px] font-semibold text-[var(--cor-azul-escuro)] max-[480px]:text-[12px]">
                <span>25.000 alcançados</span>
                <span>50.000</span>
              </div>
            </div>

            <p className="m-0 mt-10 text-[12.5px] font-semibold tracking-[0.02em] text-[var(--cor-coral-escuro)] max-[600px]:mt-8">
              <strong>meta cumprida = cupom de 10% a todos</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
