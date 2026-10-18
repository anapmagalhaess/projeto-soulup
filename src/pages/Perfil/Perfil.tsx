import { useState } from "react";
import { Link } from "react-router-dom";

export default function Perfil() {
  const [nomeUsuario] = useState(
    () => sessionStorage.getItem("nomeUsuario") ?? "Usuário Soul Up",
  );

  const [userUsuario] = useState(
    () => sessionStorage.getItem("userUsuario") ?? "@usuario",
  );

  const [emailUsuario] = useState(
    () => sessionStorage.getItem("emailUsuario") ?? "email@exemplo.com",
  );

  const dataAtual = new Date();

  const mesAnoAtual = new Intl.DateTimeFormat("pt-BR", {
    month: "short",
    year: "numeric",
  })
    .format(dataAtual)
    .replace(".", "")
    .replace(" de ", " ");

  const wrapClass = "mx-auto w-full max-w-[1180px] px-10 max-[600px]:px-5";

  const statCardClass = `
    rounded-[24px]
    border border-[var(--cor-creme-destaque)]
    bg-[var(--cor-branco)]
    px-[26px] py-7
    shadow-[0_4px_18px_rgba(0,0,0,0.02)]
  `;

  const statLabelClass = `
    text-[15.5px] font-bold uppercase
    tracking-[0.04em]
    text-[var(--cor-azul-escuro)]
  `;

  const communityBaseClass = `
    inline-flex items-center gap-[9px]
    rounded-full
    px-[18px] py-[10px]
    text-[13.5px] font-semibold
    transition-[transform,box-shadow]
    duration-200
    hover:-translate-y-[2px]
    hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
  `;

  const badgeBaseClass = `
    relative flex flex-col items-center
    rounded-[18px]
    border border-[var(--cor-creme-destaque)]
    bg-[var(--cor-creme)]
    px-[14px] pt-[22px] pb-[18px]
    text-center
    transition-[transform,box-shadow]
    duration-200
  `;

  const extraItemClass = `
    group flex items-center gap-4
    border-b border-[var(--cor-creme-destaque)]
    px-[26px] py-[18px]
    no-underline
    transition-colors duration-[180ms]
    hover:bg-[#F5FDFD]
  `;

  return (
    <main
      className="
        min-h-screen w-full
        bg-[var(--cor-creme)]
        text-[var(--cor-azul-escuro)]
        [font-family:var(--fonte-texto)]
        antialiased
        select-none
      "
    >
      {/* ==================== CABEÇALHO DO PERFIL ==================== */}
      <section
        className="
          relative flex h-[310px] items-center
          overflow-hidden
          bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)]
          max-[760px]:h-auto
          max-[760px]:py-12
        "
      >
        <div
          className="
            absolute left-[-60px] top-1/2
            h-[220px] w-[220px]
            -translate-y-1/2
            rounded-full
            bg-[rgba(65,198,196,0.26)]
          "
        />

        <div
          className="
            absolute right-[-40px] top-[70%]
            h-[460px] w-[460px]
            -translate-y-1/2
            rounded-full
            bg-[var(--cor-azul-bebe)]
            opacity-45
          "
        />

        <div
          className={`${wrapClass}
            relative z-[2]
            flex w-full flex-wrap items-center gap-[30px]
            max-[760px]:flex-col
            max-[760px]:items-start
          `}
        >
          {/* AVATAR */}
          <div className="relative shrink-0">
            <div
              className="
                flex h-28 w-28
                items-center justify-center
                rounded-full
                border-[2.5px] border-dashed
                border-[var(--cor-azul-bebe)]
                bg-[var(--cor-branco)]
                text-[34px]
                text-[var(--cor-azul)]
              "
            >
              <i className="fa-solid fa-user" />
            </div>

            <button
              type="button"
              title="alterar foto"
              className="
                absolute bottom-[-2px] right-[-2px]
                flex h-[34px] w-[34px]
                cursor-pointer items-center justify-center
                rounded-full
                border-[3px] border-[var(--cor-creme)]
                bg-[var(--cor-coral)]
                text-[13px] text-[var(--cor-branco)]
              "
            >
              <i className="fa-regular fa-pen-to-square" />
            </button>
          </div>

          {/* DADOS */}
          <div className="min-w-[220px] flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h1
                className="
                  m-0
                  [font-family:var(--fonte-titulo)]
                  text-[clamp(24px,3vw,32px)]
                  font-semibold
                  text-[var(--cor-coral)]
                "
              >
                {nomeUsuario}
              </h1>

              <span
                className="
                  inline-flex items-center gap-[6px]
                  rounded-full
                  bg-[#2E9E50]
                  px-[13px] py-[5px]
                  [font-family:var(--fonte-titulo)]
                  text-[12px] font-semibold
                  text-[var(--cor-branco)]
                "
              >
                <i className="fa-solid fa-leaf" />
                nível verde
              </span>
            </div>

            <div className="mb-[18px]">
              <p
                className="
                  m-0
                  text-[13.5px] font-semibold
                  text-[var(--cor-turquesa)]
                "
              >
                {userUsuario} · na soul up desde {mesAnoAtual}
              </p>

              <p
                className="
                  mt-1 mb-0
                  text-[12.5px] font-medium
                  text-[var(--cor-turquesa)]
                  opacity-80
                "
              >
                <i className="fa-regular fa-envelope mr-2" />
                {emailUsuario}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* STREAK */}
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-[rgba(255,159,67,0.22)]
                  bg-[var(--cor-branco)]
                  py-[10px] pr-[22px] pl-4
                  shadow-[0_3px_10px_rgba(0,0,0,0.07)]
                "
              >
                <i className="fa-solid fa-fire-flame-curved text-[26px] text-[#FF9F43]" />

                <div className="flex flex-col leading-[1.1]">
                  <span
                    className="
                      [font-family:var(--fonte-titulo)]
                      text-[24px] font-bold text-[#FF9F43]
                    "
                  >
                    0
                  </span>

                  <span className="text-[11px] font-semibold text-[var(--cor-turquesa)]">
                    dias em sequência
                  </span>
                </div>
              </div>

              {/* CONEXÕES */}
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-[rgba(32,111,116,0.16)]
                  bg-[var(--cor-branco)]
                  py-[10px] pr-[22px] pl-4
                  shadow-[0_3px_10px_rgba(0,0,0,0.07)]
                "
              >
                <i className="fa-solid fa-user-group text-[22px] text-[var(--cor-azul)]" />

                <div className="flex flex-col leading-[1.1]">
                  <span
                    className="
                      [font-family:var(--fonte-titulo)]
                      text-[24px] font-bold
                      text-[var(--cor-azul)]
                    "
                  >
                    24
                  </span>

                  <span className="text-[11px] font-semibold text-[var(--cor-turquesa)]">
                    conexões
                  </span>
                </div>
              </div>

              {/* RANKING */}
              <div
                className="
                  inline-flex items-center gap-3
                  rounded-full
                  border border-[rgba(32,111,116,0.16)]
                  bg-[var(--cor-branco)]
                  py-[10px] pr-[22px] pl-4
                  shadow-[0_3px_10px_rgba(0,0,0,0.07)]
                "
              >
                <i className="fa-solid fa-trophy text-[22px] text-[#FFD700]" />

                <div className="flex flex-col leading-[1.1]">
                  <span
                    className="
                      [font-family:var(--fonte-titulo)]
                      text-[24px] font-bold
                      text-[var(--cor-azul)]
                    "
                  >
                    #12.302
                  </span>

                  <span className="text-[11px] font-semibold text-[var(--cor-turquesa)]">
                    posição no ranking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ESTATÍSTICAS ==================== */}
      <section className="relative py-12 pb-14">
        <div className={wrapClass}>
          <div
            className="
              grid grid-cols-4 gap-[22px]
              max-[900px]:grid-cols-2
              max-[600px]:grid-cols-1
            "
          >
            {/* ==================== CARTEIRA ==================== */}
            <div
              className="
                group relative col-span-2
                flex flex-wrap items-center justify-between gap-5
                overflow-hidden
                rounded-[24px]
                bg-[linear-gradient(135deg,var(--cor-ciano)_0%,var(--cor-azul)_100%)]
                px-[26px] py-7
                max-[600px]:col-span-1
              "
            >
              <div className="flex-1">
                <div
                  className="
                    mb-5 flex h-[46px] w-[46px]
                    items-center justify-center
                    rounded-full
                    bg-[rgba(255,255,255,0.18)]
                    text-[18px]
                    text-[var(--cor-branco)]
                  "
                >
                  <i className="fa-solid fa-wallet" />
                </div>

                <div className="text-[15.5px] font-bold uppercase tracking-[0.04em] text-[rgba(255,255,255,0.8)]">
                  carteira soul
                </div>

                <div
                  className="
                    mt-[10px] mb-[14px]
                    [font-family:var(--fonte-titulo)]
                    text-[34px] font-semibold
                    text-[var(--cor-branco)]
                  "
                >
                  50 pontos
                </div>

                <div className="text-[12.5px] font-medium leading-[1.5] text-[rgba(255,255,255,0.82)]">
                  pontos acumulados até agora
                </div>
              </div>

              <div
                className="
                  min-w-[130px] shrink-0
                  rounded-[16px]
                  bg-[rgba(255,255,255,0.15)]
                  px-[22px] py-4
                  text-center
                "
              >
                <div
                  className="
                    [font-family:var(--fonte-titulo)]
                    text-[26px] font-semibold
                    text-[var(--cor-branco)]
                  "
                >
                  0
                </div>

                <div className="mt-[3px] text-[11px] font-semibold leading-[1.4] text-[rgba(255,255,255,0.82)]">
                  pontos
                  <br />
                  resgatados
                </div>
              </div>

              {/* HISTÓRICO NO HOVER */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 z-[5]
                  translate-y-[14px]
                  rounded-[24px]
                  bg-[rgba(15,82,95,0.97)]
                  px-[30px] py-[26px]
                  opacity-0
                  backdrop-blur-[6px]
                  transition-[opacity,transform]
                  duration-300
                  group-hover:pointer-events-auto
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    mb-[18px] flex items-center gap-2
                    [font-family:var(--fonte-titulo)]
                    text-[14px] font-semibold
                    text-[var(--cor-azul-bebe)]
                  "
                >
                  <i className="fa-solid fa-clock-rotate-left" />
                  histórico de pontos
                </div>

                <ul className="m-0 flex list-none flex-col gap-[11px] p-0">
                  <li className="flex items-center gap-[10px] text-[13px] font-medium text-[rgba(255,255,255,0.9)]">
                    <i className="fa-solid fa-circle-plus shrink-0 text-[15px] text-[#6EE7B7]" />
                    <span className="flex-1">missão: mobilidade verde</span>
                    <span className="[font-family:var(--fonte-titulo)] text-[13.5px] font-bold text-[#6EE7B7]">
                      +30 pts
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px] text-[13px] font-medium text-[rgba(255,255,255,0.9)]">
                    <i className="fa-solid fa-circle-plus shrink-0 text-[15px] text-[#6EE7B7]" />
                    <span className="flex-1">
                      missão: reciclagem consciente
                    </span>
                    <span className="[font-family:var(--fonte-titulo)] text-[13.5px] font-bold text-[#6EE7B7]">
                      +20 pts
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px] text-[13px] font-medium text-[rgba(255,255,255,0.9)]">
                    <i className="fa-solid fa-circle-minus shrink-0 text-[15px] text-[#FCA5A5]" />
                    <span className="flex-1">
                      resgate: ecobag reutilizável
                    </span>
                    <span className="[font-family:var(--fonte-titulo)] text-[13.5px] font-bold text-[#FCA5A5]">
                      -0 pts
                    </span>
                  </li>

                  <li className="flex items-center gap-[10px] text-[13px] font-medium text-[rgba(255,255,255,0.9)]">
                    <i className="fa-solid fa-circle-plus shrink-0 text-[15px] text-[#6EE7B7]" />
                    <span className="flex-1">bônus de entrada</span>
                    <span className="[font-family:var(--fonte-titulo)] text-[13.5px] font-bold text-[#6EE7B7]">
                      +10 pts
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ==================== TIER ==================== */}
            <div
              className={`${statCardClass}
                col-span-2 flex flex-col
                justify-between gap-[18px]
                max-[600px]:col-span-1
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-shield shrink-0 text-[22px] text-[var(--cor-azul)]" />
                  <div className={statLabelClass}>tier da conta</div>
                </div>

                <div className="group/info relative shrink-0">
                  <button
                    type="button"
                    aria-label="Informações sobre tiers"
                    className="
                      flex h-8 w-8 cursor-pointer
                      items-center justify-center
                      rounded-full border-0
                      bg-[#E3F6F5]
                      text-[15px] text-[var(--cor-azul)]
                      transition-colors duration-200
                      hover:bg-[var(--cor-azul)]
                      hover:text-[var(--cor-branco)]
                    "
                  >
                    <i className="fa-solid fa-circle-info" />
                  </button>

                  <div
                    role="tooltip"
                    className="
                      pointer-events-none
                      absolute right-0 top-[calc(100%+12px)]
                      z-30 w-[340px]
                      translate-y-2
                      rounded-[20px]
                      border border-[rgba(255,255,255,0.1)]
                      bg-[var(--cor-azul-escuro)]
                      p-[22px]
                      text-[var(--cor-branco)]
                      opacity-0
                      shadow-[0_18px_45px_rgba(0,0,0,0.28)]
                      transition-[opacity,transform]
                      duration-[250ms]
                      group-hover/info:pointer-events-auto
                      group-hover/info:translate-y-0
                      group-hover/info:opacity-100
                      max-[500px]:right-[-30px]
                      max-[500px]:w-[290px]
                    "
                  >
                    <div
                      className="
                        mb-4 border-b
                        border-[rgba(255,255,255,0.12)]
                        pb-2
                        [font-family:var(--fonte-titulo)]
                        text-[14px] font-bold uppercase
                        tracking-[0.05em]
                        text-[var(--cor-azul-bebe)]
                      "
                    >
                      níveis soul up
                    </div>

                    <div className="mb-[14px] flex items-start gap-3 text-[14px] leading-[1.5]">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#4ADE80] shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                      <div>
                        <strong className="text-[14.5px] text-white">
                          Verde (atual)
                        </strong>{" "}
                        · 0–2.999 pts
                        <p className="mt-1 mb-0 text-[13px] font-normal leading-[1.5] text-[rgba(255,255,255,0.88)]">
                          Nível inicial para todos os novos membros. Cumpra
                          missões diárias e metas de sustentabilidade para
                          acumular pontos e desbloquear o próximo nível!
                        </p>
                      </div>
                    </div>

                    <div className="mb-[14px] flex items-start gap-3 text-[14px] leading-[1.5]">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#CBD5E1] shadow-[0_0_8px_rgba(203,213,225,0.5)]" />
                      <div>
                        <strong className="text-[14.5px] text-white">
                          Prata
                        </strong>{" "}
                        · 3.000 pts
                        <p className="mt-1 mb-0 text-[13px] font-normal leading-[1.5] text-[rgba(255,255,255,0.88)]">
                          Desbloqueia maior taxa de acúmulo de pontos em todas
                          as missões concluídas e acesso antecipado a novos
                          desafios sustentáveis.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-[14px] leading-[1.5]">
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#FBBF24] shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                      <div>
                        <strong className="text-[14.5px] text-white">
                          Ouro
                        </strong>{" "}
                        · 5.500 pts
                        <p className="mt-1 mb-0 text-[13px] font-normal leading-[1.5] text-[rgba(255,255,255,0.88)]">
                          Acesso exclusivo a missões especiais, descontos e
                          recompensas na loja de resgate, além de selo exclusivo
                          no perfil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  flex items-center justify-between gap-3
                  rounded-[16px]
                  border border-[#E2E8F0]
                  bg-[#F8FAFC]
                  px-[18px] py-3
                  max-[520px]:flex-col
                  max-[520px]:items-start
                "
              >
                <span
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    border border-[#BBF7D0]
                    bg-[#DCFCE7]
                    px-4 py-[7px]
                    [font-family:var(--fonte-titulo)]
                    text-[13.5px] font-bold
                    text-[#15803D]
                  "
                >
                  <i className="fa-solid fa-leaf" />
                  nível verde
                </span>

                <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#64748B]">
                  <span>próximo:</span>
                  <i className="fa-solid fa-shield text-[16px] text-[#94A3B8] drop-shadow-[0_2px_3px_rgba(148,163,184,0.4)]" />
                  <strong className="font-bold text-[#475569]">prata</strong>
                  <i className="fa-solid fa-chevron-right text-[11px]" />
                </div>
              </div>

              <div className="mt-1">
                <div className="mb-[10px] h-[10px] w-full overflow-hidden rounded-full bg-[#E2E8F0]">
                  <div
                    className="
                      h-full min-w-2 rounded-full
                      bg-[linear-gradient(90deg,#34D399_0%,#059669_100%)]
                      transition-[width] duration-[1200ms]
                    "
                    style={{ width: "1.67%" }}
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11.5px] font-bold text-[var(--cor-azul-escuro)]">
                    50 pts
                  </span>

                  <span className="flex-1 text-center text-[12px] font-semibold text-[var(--cor-turquesa)]">
                    faltam 2.950 pts para prata
                  </span>

                  <span className="text-[11.5px] font-bold text-[var(--cor-azul-escuro)]">
                    3.000 pts
                  </span>
                </div>
              </div>
            </div>

            {/* ==================== COMUNIDADES ==================== */}
            <div
              className={`${statCardClass}
                col-span-4
                max-[900px]:col-span-2
                max-[600px]:col-span-1
              `}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-user-group text-[20px] text-[var(--cor-azul)]" />
                  <div className={statLabelClass}>comunidades ativas</div>
                </div>

                <span
                  className="
                    rounded-full bg-[#E3F6F5]
                    px-[14px] py-[5px]
                    text-[12.5px] font-bold
                    text-[var(--cor-turquesa)]
                  "
                >
                  5 comunidades
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <span
                  className={`${communityBaseClass}
                    border border-[#BBF7D0]
                    bg-[#DCFCE7] text-[#15803D]
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#22C55E]" />
                  <i className="fa-solid fa-leaf" />
                  dedo verde
                </span>

                <span
                  className={`${communityBaseClass}
                    border border-[#FED7AA]
                    bg-[#FFEDD5] text-[#C2410C]
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#F97316]" />
                  <i className="fa-solid fa-lightbulb" />
                  apaixonados por jogos
                </span>

                <span
                  className={`${communityBaseClass}
                    border border-[#BAE6FD]
                    bg-[#E0F2FE] text-[#0369A1]
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0284C7]" />
                  <i className="fa-solid fa-recycle" />
                  brechózinho
                </span>

                <span
                  className={`${communityBaseClass}
                    border border-[#E9D5FF]
                    bg-[#F3E8FF] text-[#6B21A8]
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#9333EA]" />
                  <i className="fa-solid fa-bolt" />
                  são paulo
                </span>

                <span
                  className={`${communityBaseClass}
                    border border-[#FBCFE8]
                    bg-[#FCE7F3] text-[#BE185D]
                  `}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#EC4899]" />
                  <i className="fa-solid fa-heart-pulse" />
                  gymrats
                </span>
              </div>
            </div>

            {/* ==================== CONQUISTAS ==================== */}
            <div
              className={`${statCardClass}
                col-span-4
                max-[900px]:col-span-2
                max-[600px]:col-span-1
              `}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-star text-[20px] text-[var(--cor-azul)]" />
                  <div className={statLabelClass}>conquistas</div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="
                      rounded-full bg-[#E3F6F5]
                      px-[14px] py-[5px]
                      text-[12.5px] font-bold
                      text-[var(--cor-azul)]
                    "
                  >
                    3 de 8 desbloqueadas
                  </span>

                  <button
                    type="button"
                    className="
                      inline-flex cursor-pointer
                      items-center gap-[7px]
                      rounded-full
                      border-[1.5px] border-[var(--cor-azul-bebe)]
                      bg-transparent
                      px-4 py-[6px]
                      [font-family:var(--fonte-titulo)]
                      text-[13px] font-semibold
                      text-[var(--cor-azul)]
                      transition-colors duration-200
                      hover:border-[var(--cor-azul)]
                      hover:bg-[var(--cor-azul)]
                      hover:text-[var(--cor-branco)]
                    "
                  >
                    mais conquistas
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>

              <div
                className="
                  grid grid-cols-4 gap-[14px]
                  max-[900px]:grid-cols-2
                  max-[520px]:grid-cols-1
                "
              >
                {/* DESBLOQUEADAS */}
                <div
                  className={`${badgeBaseClass}
                    hover:-translate-y-1
                    hover:shadow-[0_14px_30px_-10px_rgba(32,111,116,0.24)]
                    group/badge
                  `}
                >
                  <div
                    className="
                      flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-full
                      bg-[linear-gradient(135deg,#4ADE80_0%,#16A34A_100%)]
                      text-[20px] text-[var(--cor-branco)]
                      shadow-[0_8px_18px_-6px_rgba(34,197,94,0.5)]
                      transition-transform duration-200
                      group-hover/badge:scale-[1.08]
                    "
                  >
                    <i className="fa-solid fa-seedling" />
                  </div>

                  <div className="mt-[14px] text-[15px] font-bold leading-[1.3] text-[var(--cor-azul-escuro)]">
                    primeira ação
                  </div>

                  <div className="mt-2 text-[12px] font-medium leading-[1.4] text-[var(--cor-turquesa)]">
                    registrou sua primeira atitude sustentável
                  </div>
                </div>

                <div
                  className={`${badgeBaseClass}
                    hover:-translate-y-1
                    hover:shadow-[0_14px_30px_-10px_rgba(32,111,116,0.24)]
                    group/badge
                  `}
                >
                  <div
                    className="
                      flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-full
                      bg-[linear-gradient(135deg,#38BDF8_0%,#0284C7_100%)]
                      text-[20px] text-[var(--cor-branco)]
                      shadow-[0_8px_18px_-6px_rgba(2,132,199,0.5)]
                      transition-transform duration-200
                      group-hover/badge:scale-[1.08]
                    "
                  >
                    <i className="fa-solid fa-bicycle" />
                  </div>

                  <div className="mt-[14px] text-[15px] font-bold leading-[1.3] text-[var(--cor-azul-escuro)]">
                    mobilidade limpa
                  </div>

                  <div className="mt-2 text-[12px] font-medium leading-[1.4] text-[var(--cor-turquesa)]">
                    fez sua primeira ação de mobilidade
                  </div>
                </div>

                <div
                  className={`${badgeBaseClass}
                    hover:-translate-y-1
                    hover:shadow-[0_14px_30px_-10px_rgba(32,111,116,0.24)]
                    group/badge
                  `}
                >
                  <div
                    className="
                      flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-full
                      bg-[linear-gradient(135deg,#C084FC_0%,#9333EA_100%)]
                      text-[20px] text-[var(--cor-branco)]
                      shadow-[0_8px_18px_-6px_rgba(147,51,234,0.5)]
                      transition-transform duration-200
                      group-hover/badge:scale-[1.08]
                    "
                  >
                    <i className="fa-solid fa-users" />
                  </div>

                  <div className="mt-[14px] text-[15px] font-bold leading-[1.3] text-[var(--cor-azul-escuro)]">
                    comunidade ativa
                  </div>

                  <div className="mt-2 text-[12px] font-medium leading-[1.4] text-[var(--cor-turquesa)]">
                    entrou em 3 comunidades soul up
                  </div>
                </div>

                {/* BLOQUEADAS */}
                {[
                  {
                    icon: "fa-solid fa-fire",
                    nome: "sequência de 7 dias",
                    desc: "continue por 7 dias seguidos",
                  },
                  {
                    icon: "fa-solid fa-lightbulb",
                    nome: "consumo consciente",
                    desc: "registre uma ação de economia de energia",
                  },
                  {
                    icon: "fa-solid fa-hand-holding-heart",
                    nome: "doador(a)",
                    desc: "faça sua primeira doação",
                  },
                  {
                    icon: "fa-solid fa-coins",
                    nome: "100 pontos",
                    desc: "acumule 100 pontos soul",
                  },
                  {
                    icon: "fa-solid fa-trophy",
                    nome: "top 10 mil",
                    desc: "entre no top 10.000 do ranking global",
                  },
                ].map((badge) => (
                  <div
                    key={badge.nome}
                    className={`${badgeBaseClass} bg-[#FAFAF7]`}
                  >
                    <span
                      className="
                        absolute right-[10px] top-[10px]
                        flex h-[22px] w-[22px]
                        items-center justify-center
                        rounded-full
                        border border-[var(--cor-creme-destaque)]
                        bg-[var(--cor-branco)]
                        text-[9px] text-[#B9AF9C]
                      "
                    >
                      <i className="fa-solid fa-lock" />
                    </span>

                    <div
                      className="
                        flex h-[52px] w-[52px]
                        items-center justify-center
                        rounded-full
                        bg-[#E7E2D6]
                        text-[20px] text-[#B9AF9C]
                      "
                    >
                      <i className={badge.icon} />
                    </div>

                    <div className="mt-[14px] text-[15px] font-bold leading-[1.3] text-[#9C9484]">
                      {badge.nome}
                    </div>

                    <div className="mt-2 text-[12px] font-medium leading-[1.4] text-[#B3AB9B]">
                      {badge.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== ATIVIDADES ==================== */}
            <div
              className={`${statCardClass}
                col-span-4
                max-[900px]:col-span-2
                max-[600px]:col-span-1
              `}
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-chart-simple text-[20px] text-[var(--cor-azul)]" />
                  <div className={statLabelClass}>resumo de atividades</div>
                </div>

                <button
                  type="button"
                  className="
                    inline-flex cursor-pointer
                    items-center gap-[7px]
                    rounded-full
                    border-[1.5px] border-[var(--cor-azul-bebe)]
                    bg-transparent
                    px-5 py-[9px]
                    [font-family:var(--fonte-titulo)]
                    text-[13.5px] font-semibold
                    text-[var(--cor-azul)]
                    transition-colors duration-200
                    hover:border-[var(--cor-azul)]
                    hover:bg-[var(--cor-azul)]
                    hover:text-[var(--cor-branco)]
                  "
                >
                  <i className="fa-solid fa-file-lines" />
                  ver relatórios
                </button>
              </div>

              <div
                className="
                  grid grid-cols-4 gap-[18px]
                  max-[900px]:grid-cols-2
                  max-[520px]:grid-cols-1
                "
              >
                {[
                  {
                    icon: "fa-solid fa-list-check",
                    valor: "7",
                    label: "missões concluídas",
                    eco: false,
                  },
                  {
                    icon: "fa-solid fa-person-walking",
                    valor: "14,3 km",
                    label: "distância caminhada",
                    eco: false,
                  },
                  {
                    icon: "fa-regular fa-clock",
                    valor: "5h 20min",
                    label: "tempo total de atividades",
                    eco: false,
                  },
                  {
                    icon: "fa-solid fa-leaf",
                    valor: "~3,2 kg",
                    label: "CO₂ evitado",
                    eco: true,
                  },
                ].map((atividade) => (
                  <div
                    key={atividade.label}
                    className="
                      flex flex-col items-center
                      rounded-[18px]
                      border border-[var(--cor-creme-destaque)]
                      bg-[var(--cor-creme)]
                      px-[14px] py-[22px]
                      text-center
                      transition-[transform,box-shadow]
                      duration-[180ms]
                      hover:-translate-y-[3px]
                      hover:shadow-[0_10px_24px_-10px_rgba(32,111,116,0.18)]
                    "
                  >
                    <div
                      className={`
                        mb-[13px]
                        flex h-[50px] w-[50px]
                        items-center justify-center
                        rounded-full
                        text-[20px]
                        ${
                          atividade.eco
                            ? "bg-[#DCFCE7] text-[#16A34A]"
                            : "bg-[#E3F6F5] text-[var(--cor-azul)]"
                        }
                      `}
                    >
                      <i className={atividade.icon} />
                    </div>

                    <div
                      className="
                        mb-[6px]
                        [font-family:var(--fonte-titulo)]
                        text-[22px] font-bold
                        leading-none
                        text-[var(--cor-azul-escuro)]
                      "
                    >
                      {atividade.valor}
                    </div>

                    <div className="text-[12px] font-semibold leading-[1.3] text-[var(--cor-turquesa)]">
                      {atividade.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EXTRA PERFIL ==================== */}
      <section className="relative pb-20">
        <div className={wrapClass}>
          <div
            className="
              overflow-hidden
              rounded-[24px]
              border border-[var(--cor-creme-destaque)]
              bg-[var(--cor-branco)]
            "
          >
            <a href="#" className={extraItemClass}>
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#E3F6F5]
                  text-[16px]
                  text-[var(--cor-azul)]
                  transition-transform duration-[180ms]
                  group-hover:scale-[1.08]
                "
              >
                <i className="fa-solid fa-user-group" />
              </span>

              <span className="flex-1 text-[14.5px] font-semibold text-[var(--cor-azul-escuro)]">
                meus amigos
              </span>

              <i className="fa-solid fa-chevron-right shrink-0 text-[12px] text-[var(--cor-azul-bebe)] transition-transform duration-[180ms] group-hover:translate-x-[3px]" />
            </a>

            <a href="#" className={extraItemClass}>
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#FFF0ED]
                  text-[16px]
                  text-[var(--cor-coral)]
                  transition-transform duration-[180ms]
                  group-hover:scale-[1.08]
                "
              >
                <i className="fa-solid fa-gift" />
              </span>

              <span className="flex-1 text-[14.5px] font-semibold text-[var(--cor-azul-escuro)]">
                minhas recompensas
              </span>

              <i className="fa-solid fa-chevron-right shrink-0 text-[12px] text-[var(--cor-azul-bebe)] transition-transform duration-[180ms] group-hover:translate-x-[3px]" />
            </a>

            <a href="#" className={extraItemClass}>
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#DCFCE7]
                  text-[16px]
                  text-[#16A34A]
                  transition-transform duration-[180ms]
                  group-hover:scale-[1.08]
                "
              >
                <i className="fa-solid fa-hand-holding-heart" />
              </span>

              <span className="flex-1 text-[14.5px] font-semibold text-[var(--cor-azul-escuro)]">
                causas apoiadas
              </span>

              <i className="fa-solid fa-chevron-right shrink-0 text-[12px] text-[var(--cor-azul-bebe)] transition-transform duration-[180ms] group-hover:translate-x-[3px]" />
            </a>

            <Link to="/pagina-contato" className={extraItemClass}>
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#EDE9FE]
                  text-[16px]
                  text-[#7C3AED]
                  transition-transform duration-[180ms]
                  group-hover:scale-[1.08]
                "
              >
                <i className="fa-solid fa-circle-question" />
              </span>

              <span className="flex-1 text-[14.5px] font-semibold text-[var(--cor-azul-escuro)]">
                central de ajuda
              </span>

              <i className="fa-solid fa-chevron-right shrink-0 text-[12px] text-[var(--cor-azul-bebe)] transition-transform duration-[180ms] group-hover:translate-x-[3px]" />
            </Link>

            <a
              href="#"
              className="
                group flex items-center gap-4
                px-[26px] py-[18px]
                no-underline
                transition-colors duration-[180ms]
                hover:bg-[#F5FDFD]
              "
            >
              <span
                className="
                  flex h-[42px] w-[42px] shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-[#F3F4F6]
                  text-[16px]
                  text-[#6B7280]
                  transition-transform duration-[180ms]
                  group-hover:scale-[1.08]
                "
              >
                <i className="fa-solid fa-shield-halved" />
              </span>

              <span className="flex-1 text-[14.5px] font-semibold text-[var(--cor-azul-escuro)]">
                privacidade e segurança
              </span>

              <i className="fa-solid fa-chevron-right shrink-0 text-[12px] text-[var(--cor-azul-bebe)] transition-transform duration-[180ms] group-hover:translate-x-[3px]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
