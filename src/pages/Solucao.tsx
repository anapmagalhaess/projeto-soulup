import { useState } from "react";
import { Link } from "react-router-dom";
import Tag from "../components/Tag/Tag";

export default function Solucao() {
  const [distancia, setDistancia] = useState(15);
  const [pet, setPet] = useState(20);
  const [aluminio, setAluminio] = useState(10);
  const [energia, setEnergia] = useState(40);
  const [refeicoes, setRefeicoes] = useState(5);
  const [tierAtivo, setTierAtivo] = useState<"verde" | "prata" | "ouro" | null>(null);

  const pontos =
    50 +
    distancia * 15 +
    pet * 8 +
    aluminio * 10 +
    energia * 5 +
    refeicoes * 20;

  const co2 =
    distancia * 0.18 +
    pet * 0.08 +
    aluminio * 0.12 +
    energia * 0.04 +
    refeicoes * 0.5;

  const agua =
    pet * 2 +
    aluminio * 1.5 +
    energia * 0.3 +
    refeicoes * 25;

  const arvores = co2 / 21;

  const recompensas = [
    {
      nome: "Cupom sustentável",
      descricao: "Desconto de 10% em uma compra de marca parceira.",
      custo: 500,
      icone: "fa-ticket",
    },
    {
      nome: "Ecobag Soul Up",
      descricao: "Uma ecobag exclusiva para levar suas escolhas sustentáveis com você.",
      custo: 1500,
      icone: "fa-bag-shopping",
    },
    {
      nome: "Voucher parceiro",
      descricao: "Crédito especial para usar em uma das lojas parceiras da Soul Up.",
      custo: 3000,
      icone: "fa-gift",
    },
    {
      nome: "Kit impacto positivo",
      descricao: "Kit premium reservado para quem alcança o Tier Ouro.",
      custo: 5500,
      icone: "fa-crown",
    },
  ];

  const ranking = [
    { nome: "Lívia", iniciais: "LV", acoes: 42, co2: "128,4 kg", pontos: 6840, tier: "Ouro 👑" },
    { nome: "Mateus", iniciais: "MT", acoes: 37, co2: "112,8 kg", pontos: 5920, tier: "Ouro 👑" },
    { nome: "Camila", iniciais: "CM", acoes: 31, co2: "96,7 kg", pontos: 4880, tier: "Prata 🛡️" },
    { nome: "Rafael", iniciais: "RF", acoes: 27, co2: "83,1 kg", pontos: 3760, tier: "Prata 🛡️" },
    { nome: "Bianca", iniciais: "BC", acoes: 22, co2: "69,5 kg", pontos: 2840, tier: "Verde 🌱" },
    { nome: "Lucas", iniciais: "LC", acoes: 18, co2: "54,2 kg", pontos: 2310, tier: "Verde 🌱" },
  ];

  const rolarAte = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const aplicarTier = (tier: "verde" | "prata" | "ouro") => {
    setTierAtivo(tier);

    if (tier === "verde") {
      setDistancia(15);
      setPet(20);
      setAluminio(10);
      setEnergia(40);
      setRefeicoes(5);
      return;
    }

    if (tier === "prata") {
      setDistancia(50);
      setPet(60);
      setAluminio(50);
      setEnergia(200);
      setRefeicoes(10);
      return;
    }

    setDistancia(94);
    setPet(120);
    setAluminio(120);
    setEnergia(300);
    setRefeicoes(21);
  };

  const alterarValor = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    valor: string,
  ) => {
    setTierAtivo(null);
    setter(Number(valor));
  };

  const wrapClass = "mx-auto w-full max-w-[1180px] px-[30px]";

  const sectionHeadClass =
    "mx-auto mb-10 max-w-[700px] text-center";

  const sectionTitleClass =
    "m-10 mb-3 [font-family:var(--fonte-titulo)] text-[clamp(28px,3.2vw,40px)] font-bold leading-[1.2] text-[var(--cor-azul-escuro)]";

  const sectionTextClass =
    "m-0 text-[16px] leading-[1.6] text-[#4a6b6d]";

  const presetButtonClass = `
    cursor-pointer rounded-full border-[1.5px]
    border-[var(--cor-azul-bebe)]
    bg-[#F0FBFB]
    px-4 py-2
    [font-family:var(--fonte-titulo)]
    text-[13px] font-semibold
    text-[var(--cor-azul-escuro)]
    transition-all duration-200 ease-out
    hover:-translate-y-[2px]
    hover:border-[var(--cor-azul)]
    hover:bg-[var(--cor-azul)]
    hover:text-[var(--cor-branco)]
  `;

  const calcGroupClass = `
    rounded-[16px]
    border border-[#EFEFEF]
    bg-[#FAFAFA]
    px-5 py-4
  `;

  const calcLabelClass = `
    flex items-center gap-2
    [font-family:var(--fonte-titulo)]
    text-[15px] font-semibold
    text-[var(--cor-azul-escuro)]
    [&_i]:text-[var(--cor-turquesa)]
  `;

  const calcBadgeClass = `
    rounded-full
    bg-[#E0F2F1]
    px-3 py-1
    [font-family:var(--fonte-titulo)]
    text-[13px] font-semibold
    text-[var(--cor-azul-escuro)]
  `;

  const rangeClass = `
    h-2 w-full cursor-pointer
    appearance-none rounded-[4px]
    bg-[#D5EBEA] outline-none
    [&::-webkit-slider-thumb]:h-[22px]
    [&::-webkit-slider-thumb]:w-[22px]
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-[var(--cor-coral)]
    [&::-webkit-slider-thumb]:shadow-[0_2px_6px_rgba(255,107,87,0.4)]
    [&::-webkit-slider-thumb]:transition-[transform,background]
    [&::-webkit-slider-thumb]:duration-150
    [&::-webkit-slider-thumb]:hover:scale-120
    [&::-webkit-slider-thumb]:hover:bg-[var(--cor-coral-escuro)]
  `;

  const rangeLimitsClass =
    "flex justify-between text-[12px] font-medium text-[#888]";

  const miniMetricClass = `
    flex flex-col items-center
    rounded-[14px]
    bg-[var(--cor-branco)]
    px-[10px] py-[14px]
    text-center
    shadow-[0_2px_8px_rgba(0,0,0,0.03)]
  `;

  return (
    <main
      className="
        m-0 flex min-h-screen w-full max-w-none flex-1 flex-col gap-[60px]
        overflow-x-hidden bg-[var(--cor-creme)] pb-[60px]
        text-[var(--cor-azul-escuro)]
        [font-family:var(--fonte-texto)]
        antialiased
      "
    >
      {/* ==================== HERO ==================== */}
      <section
        className="
          relative w-full overflow-hidden
          border-b border-[var(--cor-creme-destaque)]
          bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)]
          pt-20 pb-[70px]
          mb-10
        "
      >
        <div
          className="
            pointer-events-none
            absolute left-[-50px] top-[-50px]
            h-[320px] w-[320px]
            rounded-full bg-[#99d1d5]
            opacity-50 blur-[40px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-[-60px] right-[-40px]
            h-[280px] w-[280px]
            rounded-full bg-[#41c6c4]
            opacity-50 blur-[40px]
          "
        />

        <div
          className="
            relative z-[2]
            mx-auto w-full max-w-[850px]
            px-[30px] text-center
          "
        >
          <div className="mb-4 flex justify-center">
            <Tag texto="ecossistema de soluções" />
          </div>

          <h1
            className="
              m-0 mb-5
              [font-family:var(--fonte-titulo)]
              text-[clamp(34px,4.5vw,52px)]
              font-semibold leading-[1.18]
              text-[var(--cor-azul-escuro)]
            "
          >
            tecnologia verde e{" "}
            <span
              className="
                relative whitespace-nowrap font-bold
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
              <span className="relative z-[2]">IA inteligente</span>
            </span>{" "}
            gerando{" "}
            <span
              className="
                relative whitespace-nowrap font-bold
                before:absolute
                before:bottom-[6px]
                before:left-[-6px]
                before:right-[-6px]
                before:z-[1]
                before:h-[0.42em]
                before:rotate-[1.2deg]
                before:rounded-[3px]
                before:bg-[#C4EAE7]
                before:content-['']
              "
            >
              <span className="relative z-[2]">impacto real</span>
            </span>
            .
          </h1>

          <p
            className="
              mx-auto m-0 mb-8
              max-w-[720px]
              text-[18px] leading-[1.65]
              text-[#2c5c5c]
            "
          >
            Descubra como a nossa infraestrutura une Inteligência Artificial,
            Visão Computacional e Gamificação para validar atitudes sustentáveis,
            combater fraudes e recompensar você com total precisão.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#calculadora"
              onClick={(event) => {
                event.preventDefault();
                rolarAte("calculadora");
              }}
              className="
                inline-flex items-center gap-[10px]
                rounded-full
                bg-[var(--cor-coral)]
                px-7 py-[14px]
                [font-family:var(--fonte-titulo)]
                text-[16px] font-semibold
                text-[var(--cor-branco)]
                no-underline
                shadow-[0_4px_14px_rgba(255,107,87,0.35)]
                transition-[transform,background]
                duration-200 ease-out
                hover:-translate-y-[2px]
                hover:bg-[var(--cor-coral-escuro)]
              "
            >
              <i className="fa-solid fa-calculator" />
              Simular Meus Pontos
            </a>

            <a
              href="#ranking"
              onClick={(event) => {
                event.preventDefault();
                rolarAte("ranking");
              }}
              className="
                inline-flex items-center gap-[10px]
                rounded-full border-2
                border-[var(--cor-azul-bebe)]
                bg-[var(--cor-branco)]
                px-7 py-[14px]
                [font-family:var(--fonte-titulo)]
                text-[16px] font-semibold
                text-[var(--cor-azul-escuro)]
                no-underline
                transition-[transform,border-color]
                duration-200 ease-out
                hover:-translate-y-[2px]
                hover:border-[var(--cor-azul)]
              "
            >
              <i className="fa-solid fa-trophy" />
              Ver Ranking Mensal
            </a>
          </div>
        </div>
      </section>

      {/* ==================== MÉTRICAS COLETIVAS ==================== */}
      <section className="relative z-[5] mt-[-30px] w-full">
        <div className={wrapClass}>
          <div className="mb-[30px] text-center">
            <span
              className="
                mb-[10px] inline-flex items-center gap-2
                rounded-full border border-[var(--cor-azul-bebe)]
                bg-[#E2F5F4]
                px-4 py-[6px]
                [font-family:var(--fonte-titulo)]
                text-[13px] font-semibold
                text-[#127278]
              "
            >
              <span className="relative flex h-[10px] w-[10px] shrink-0">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full
                    bg-[#20C997] opacity-70
                  "
                />
                <span
                  className="
                    relative inline-flex h-[10px] w-[10px]
                    rounded-full bg-[#20C997]
                  "
                />
              </span>
              impacto da comunidade ao vivo
            </span>

            <h2 className={sectionTitleClass}>
              Juntos estamos transformando o amanhã
            </h2>

            <p className={sectionTextClass}>
              Veja o resultado acumulado por milhares de membros da Soul Up no
              Brasil todo.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
            <div
              className="
                flex items-center gap-[18px]
                rounded-[18px]
                border border-[rgba(153,209,213,0.4)]
                bg-[var(--cor-branco)]
                px-5 py-6
                shadow-[0_8px_24px_rgba(32,111,116,0.08)]
                transition-[transform,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(32,111,116,0.14)]
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#E8F5E9] text-[24px] text-[#2E7D32]">
                <i className="fa-solid fa-smog" />
              </div>

              <div className="flex flex-col">
                <div>
                  <span
                    id="counter-co2"
                    className="[font-family:var(--fonte-titulo)] text-[26px] font-bold leading-none text-[var(--cor-azul-escuro)]"
                  >
                    42.850
                  </span>
                  <span className="ml-1 text-[14px] font-semibold text-[var(--cor-turquesa)]">
                    kg
                  </span>
                </div>

                <p className="m-0 mt-1 text-[13.5px] font-medium text-[#666]">
                  CO₂ evitado no ar
                </p>
              </div>
            </div>

            <div
              className="
                flex items-center gap-[18px]
                rounded-[18px]
                border border-[rgba(153,209,213,0.4)]
                bg-[var(--cor-branco)]
                px-5 py-6
                shadow-[0_8px_24px_rgba(32,111,116,0.08)]
                transition-[transform,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(32,111,116,0.14)]
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#E0F7FA] text-[24px] text-[#00838F]">
                <i className="fa-solid fa-person-biking" />
              </div>

              <div className="flex flex-col">
                <div>
                  <span
                    id="counter-km"
                    className="[font-family:var(--fonte-titulo)] text-[26px] font-bold leading-none text-[var(--cor-azul-escuro)]"
                  >
                    156.400
                  </span>
                  <span className="ml-1 text-[14px] font-semibold text-[var(--cor-turquesa)]">
                    km
                  </span>
                </div>

                <p className="m-0 mt-1 text-[13.5px] font-medium text-[#666]">
                  Mobilidade sustentável
                </p>
              </div>
            </div>

            <div
              className="
                flex items-center gap-[18px]
                rounded-[18px]
                border border-[rgba(153,209,213,0.4)]
                bg-[var(--cor-branco)]
                px-5 py-6
                shadow-[0_8px_24px_rgba(32,111,116,0.08)]
                transition-[transform,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(32,111,116,0.14)]
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#FFF3E0] text-[24px] text-[#E65100]">
                <i className="fa-solid fa-recycle" />
              </div>

              <div className="flex flex-col">
                <div>
                  <span
                    id="counter-recycle"
                    className="[font-family:var(--fonte-titulo)] text-[26px] font-bold leading-none text-[var(--cor-azul-escuro)]"
                  >
                    68.200
                  </span>
                  <span className="ml-1 text-[14px] font-semibold text-[var(--cor-turquesa)]">
                    itens
                  </span>
                </div>

                <p className="m-0 mt-1 text-[13.5px] font-medium text-[#666]">
                  Resíduos reciclados
                </p>
              </div>
            </div>

            <div
              className="
                flex items-center gap-[18px]
                rounded-[18px]
                border border-[rgba(153,209,213,0.4)]
                bg-[var(--cor-branco)]
                px-5 py-6
                shadow-[0_8px_24px_rgba(32,111,116,0.08)]
                transition-[transform,box-shadow]
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(32,111,116,0.14)]
              "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-[#F3E5F5] text-[24px] text-[#7B1FA2]">
                <i className="fa-solid fa-tree" />
              </div>

              <div className="flex flex-col">
                <div>
                  <span
                    id="counter-trees"
                    className="[font-family:var(--fonte-titulo)] text-[26px] font-bold leading-none text-[var(--cor-azul-escuro)]"
                  >
                    2.140
                  </span>
                  <span className="ml-1 text-[14px] font-semibold text-[var(--cor-turquesa)]">
                    mudas
                  </span>
                </div>

                <p className="m-0 mt-1 text-[13.5px] font-medium text-[#666]">
                  Árvores salvas equivalente
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PILARES TECNOLÓGICOS ==================== */}
      <section className="relative w-full py-5">
        <div className={wrapClass}>
          <div className={sectionHeadClass}>
            <div className="mb-4 flex justify-center">
              <Tag texto="nossa tecnologia" />
            </div>

            <h2 className={sectionTitleClass}>
              Pilares de Confiança e Inovação
            </h2>

            <p className={sectionTextClass}>
              Garantimos que cada atitude seja auditada com transparência e
              justiça.
            </p>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[25px]">
            {[
              {
                icon: "fa-eye",
                title: "Visão Computacional",
                text: "Nossa IA de imagens reconhece garrafas PET, latas, eletrônicos e modos de transporte sustentáveis através de redes neurais profundas de altíssima precisão.",
              },
              {
                icon: "fa-shield-halved",
                title: "Filtros Antifraude",
                text: "Cruzamento inteligente de metadados EXIF, geolocalização por GPS e validação temporal imediata para barrar envios duplicados ou imagens da internet.",
              },
              {
                icon: "fa-coins",
                title: "Economia Gamificada",
                text: "Conversão direta de ações em SoulTokens. Suba no ranking global, desbloqueie vouchers de desconto e prêmios com marcas parceiras engajadas.",
              },
              {
                icon: "fa-chart-line",
                title: "Impacto Rastreável",
                text: "Dashboard completo que mensura a pegada de carbono reduzida por cada usuário, permitindo compartilhar suas conquistas com a comunidade.",
              },
            ].map((pillar) => (
              <article
                key={pillar.title}
                className="
                  group flex flex-col items-center
                  rounded-[20px]
                  border border-[var(--cor-creme-destaque)]
                  border-b-4 border-b-[var(--cor-ciano-2)]
                  bg-[var(--cor-branco)]
                  px-6 py-8 text-center
                  shadow-[0_6px_20px_rgba(0,0,0,0.04)]
                  transition-all duration-300
                  hover:-translate-y-[6px]
                  hover:border-b-[var(--cor-coral)]
                  hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]
                "
              >
                <div
                  className="
                    mb-5 flex h-[68px] w-[68px]
                    items-center justify-center
                    rounded-full bg-[#E8F7F7]
                    text-[28px] text-[var(--cor-azul)]
                    transition-[transform,background,color]
                    duration-300
                    group-hover:rotate-[4deg]
                    group-hover:scale-110
                    group-hover:bg-[#FFE9E4]
                    group-hover:text-[var(--cor-coral-escuro)]
                  "
                >
                  <i className={`fa-solid ${pillar.icon}`} />
                </div>

                <h3 className="m-0 mb-3 [font-family:var(--fonte-titulo)] text-[20px] font-semibold text-[var(--cor-azul-escuro)]">
                  {pillar.title}
                </h3>

                <p className="m-0 text-[14.5px] leading-[1.6] text-[#555]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CALCULADORA ==================== */}
      <section id="calculadora" className="relative w-full py-[10px]">
        <div className={wrapClass}>
          <div
            className="
              rounded-[28px]
              border border-[var(--cor-creme-destaque)]
              border-l-[8px] border-l-[var(--cor-ciano-2)]
              bg-[var(--cor-branco)]
              p-10
              shadow-[0_12px_40px_rgba(32,111,116,0.1)]
              max-[700px]:p-6
            "
          >
            <div
              className="
                mb-[35px] flex flex-wrap
                items-end justify-between
                gap-5
                border-b border-[#EAEAEA]
                pb-[25px]
              "
            >
              <div className="max-w-[650px]">
                <div className="mb-4">
                  <Tag texto="quanto mais você faz, mais você ganha" />
                </div>

                <h2
                  className="
                    m-0 mb-[10px]
                    [font-family:var(--fonte-titulo)]
                    text-[clamp(24px,3vw,32px)]
                    text-[var(--cor-azul-escuro)]
                    [&_i]:text-[var(--cor-coral)]
                    font-bold
                  "
                >
                  <i className="fa-solid fa-calculator mr-5" /> Calculadora Interativa
                  de Eco-Impacto
                </h2>

                <p className="m-0 text-[15px] leading-[1.5] text-[#666]">
                  Simule a quantidade de pontos e a redução de carbono gerada
                  pelas suas escolhas sustentáveis da semana. Ajuste os sliders
                  ou use os atalhos por Tier abaixo!
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-[10px]">
                <span className="[font-family:var(--fonte-titulo)] text-[13.5px] font-semibold text-[var(--cor-azul-escuro)]">
                  Simular por Tier:
                </span>

                <button
                  type="button"
                  id="preset-verde"
                  onClick={() => aplicarTier("verde")}
                  className={`${presetButtonClass} ${
                    tierAtivo === "verde"
                      ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(19,150,159,0.22)]"
                      : ""
                  }`}
                >
                  <i className="fa-solid fa-seedling" /> Nível Verde
                </button>

                <button
                  type="button"
                  id="preset-prata"
                  onClick={() => aplicarTier("prata")}
                  className={`${presetButtonClass} ${
                    tierAtivo === "prata"
                      ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(19,150,159,0.22)]"
                      : ""
                  }`}
                >
                  <i className="fa-solid fa-shield-halved" /> Nível Prata
                </button>

                <button
                  type="button"
                  id="preset-ouro"
                  onClick={() => aplicarTier("ouro")}
                  className={`${presetButtonClass} ${
                    tierAtivo === "ouro"
                      ? "border-[var(--cor-coral)] bg-[var(--cor-coral)] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(255,107,87,0.25)]"
                      : ""
                  }`}
                >
                  <i className="fa-solid fa-crown" /> Nível Ouro
                </button>
              </div>
            </div>

            <div className="grid grid-cols-[1.25fr_1fr] items-start gap-10 max-[900px]:grid-cols-1">
              <div className="flex flex-col gap-6">
                <div className={calcGroupClass}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <label htmlFor="input-distance" className={calcLabelClass}>
                      <i className="fa-solid fa-person-biking" />
                      Mobilidade Sustentável (Bike, Caminhada, Patinete)
                    </label>

                    <span id="badge-distance" className={calcBadgeClass}>
                      {distancia} km/semana
                    </span>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <input
                      id="input-distance"
                      type="range"
                      min="0"
                      max="100"
                      value={distancia}
                      onChange={(event) =>
                        alterarValor(setDistancia, event.target.value)
                      }
                      className={rangeClass}
                    />
                    <div className={rangeLimitsClass}>
                      <span>0 km</span>
                      <span>50 km</span>
                      <span>100 km</span>
                    </div>
                  </div>
                </div>

                <div className={calcGroupClass}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <label htmlFor="input-pet" className={calcLabelClass}>
                      <i className="fa-solid fa-recycle" />
                      Reciclagem PET e Embalagens Plásticas
                    </label>

                    <span id="badge-pet" className={calcBadgeClass}>
                      {pet} unidades/semana
                    </span>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <input
                      id="input-pet"
                      type="range"
                      min="0"
                      max="150"
                      value={pet}
                      onChange={(event) =>
                        alterarValor(setPet, event.target.value)
                      }
                      className={rangeClass}
                    />
                    <div className={rangeLimitsClass}>
                      <span>0 unid.</span>
                      <span>75 unid.</span>
                      <span>150 unid.</span>
                    </div>
                  </div>
                </div>

                <div className={calcGroupClass}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <label htmlFor="input-alum" className={calcLabelClass}>
                      <i className="fa-solid fa-bottle-water" />
                      Reciclagem de Alumínio e Vidro
                    </label>

                    <span id="badge-alum" className={calcBadgeClass}>
                      {aluminio} unidades/semana
                    </span>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <input
                      id="input-alum"
                      type="range"
                      min="0"
                      max="150"
                      value={aluminio}
                      onChange={(event) =>
                        alterarValor(setAluminio, event.target.value)
                      }
                      className={rangeClass}
                    />
                    <div className={rangeLimitsClass}>
                      <span>0 unid.</span>
                      <span>75 unid.</span>
                      <span>150 unid.</span>
                    </div>
                  </div>
                </div>

                <div className={calcGroupClass}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <label htmlFor="input-energy" className={calcLabelClass}>
                      <i className="fa-solid fa-bolt" />
                      Economia de Energia / Painel Solar
                    </label>

                    <span id="badge-energy" className={calcBadgeClass}>
                      {energia} kWh/mês
                    </span>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <input
                      id="input-energy"
                      type="range"
                      min="0"
                      max="300"
                      value={energia}
                      onChange={(event) =>
                        alterarValor(setEnergia, event.target.value)
                      }
                      className={rangeClass}
                    />
                    <div className={rangeLimitsClass}>
                      <span>0 kWh</span>
                      <span>150 kWh</span>
                      <span>300 kWh</span>
                    </div>
                  </div>
                </div>

                <div className={calcGroupClass}>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <label htmlFor="input-food" className={calcLabelClass}>
                      <i className="fa-solid fa-leaf" />
                      Refeições Plant-Based / Orgânicos
                    </label>

                    <span id="badge-food" className={calcBadgeClass}>
                      {refeicoes} refeições/semana
                    </span>
                  </div>

                  <div className="flex flex-col gap-[6px]">
                    <input
                      id="input-food"
                      type="range"
                      min="0"
                      max="21"
                      value={refeicoes}
                      onChange={(event) =>
                        alterarValor(setRefeicoes, event.target.value)
                      }
                      className={rangeClass}
                    />
                    <div className={rangeLimitsClass}>
                      <span>0 ref.</span>
                      <span>10 ref.</span>
                      <span>21 ref.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="
                  sticky top-[90px]
                  flex flex-col gap-[22px]
                  rounded-[24px]
                  border-2 border-[var(--cor-azul-bebe)]
                  bg-[linear-gradient(145deg,#F0FBFB_0%,#E2F5F4_100%)]
                  px-6 py-[30px]
                  max-[900px]:static
                "
              >
                <div
                  className="
                    rounded-[18px]
                    bg-[var(--cor-branco)]
                    px-5 py-6
                    text-center
                    shadow-[0_4px_15px_rgba(32,111,116,0.08)]
                  "
                >
                  <span className="mb-[6px] block [font-family:var(--fonte-titulo)] text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--cor-turquesa)]">
                    Pontuação Estimada SoulUp
                  </span>

                  <div
                    id="calc-points"
                    className="
                      flex items-center justify-center gap-[10px]
                      [font-family:var(--fonte-titulo)]
                      text-[44px] font-bold
                      text-[var(--cor-azul-escuro)]
                      [&_i]:text-[38px]
                      [&_i]:text-[var(--cor-coral)]
                      [&_small]:text-[20px]
                      [&_small]:text-[var(--cor-turquesa)]
                    "
                  >
                    <i className="fa-solid fa-coins" />
                    <span id="val-points">{pontos.toLocaleString("pt-BR")}</span>
                    <small>pts</small>
                  </div>

                  <p className="m-0 mt-2 text-[13px] text-[#666]">
                    Pontos iniciais do seu perfil + simulação de atitudes!
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-[10px]">
                  <div className={miniMetricClass}>
                    <span className="mb-[6px] text-[20px] text-[var(--cor-azul)]">
                      <i className="fa-solid fa-smog" />
                    </span>
                    <span
                      id="calc-co2"
                      className="block [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]"
                    >
                      {co2.toFixed(2).replace(".", ",")} kg
                    </span>
                    <span className="text-[11.5px] font-medium text-[#777]">
                      CO₂ Evitado
                    </span>
                  </div>

                  <div className={miniMetricClass}>
                    <span className="mb-[6px] text-[20px] text-[var(--cor-azul)]">
                      <i className="fa-solid fa-droplet" />
                    </span>
                    <span
                      id="calc-water"
                      className="block [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]"
                    >
                      {Math.round(agua).toLocaleString("pt-BR")} L
                    </span>
                    <span className="text-[11.5px] font-medium text-[#777]">
                      Água Salva
                    </span>
                  </div>

                  <div className={miniMetricClass}>
                    <span className="mb-[6px] text-[20px] text-[var(--cor-azul)]">
                      <i className="fa-solid fa-tree" />
                    </span>
                    <span
                      id="calc-trees"
                      className="block [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]"
                    >
                      {arvores.toFixed(1).replace(".", ",")} mudas
                    </span>
                    <span className="text-[11.5px] font-medium text-[#777]">
                      Árvores Equiv.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RECOMPENSAS ==================== */}
      <section className="relative w-full py-5">
        <div className={wrapClass}>
          <div className={sectionHeadClass}>
            <div className="mb-4 flex justify-center">
              <Tag texto="atitude vira recompensa" />
            </div>

            <h2 className={sectionTitleClass}>
              O que os seus pontos podem resgatar?
            </h2>

            <p className={sectionTextClass}>
              Veja os prêmios que você desbloquearia com a pontuação simulada
              acima!
            </p>
          </div>

          <div
            id="rewards-container"
            className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5"
          >
            {recompensas.map((recompensa) => {
              const desbloqueada = pontos >= recompensa.custo;
              const progresso = Math.min(
                100,
                Math.round((pontos / recompensa.custo) * 100),
              );

              return (
                <article
                  key={recompensa.nome}
                  className="
                    relative flex flex-col overflow-hidden
                    rounded-[20px]
                    border border-[var(--cor-creme-destaque)]
                    bg-[var(--cor-branco)]
                    p-6
                    shadow-[0_6px_18px_rgba(0,0,0,0.04)]
                    transition-[transform,box-shadow]
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]
                  "
                >
                  <span
                    className={`
                      absolute right-4 top-4
                      rounded-full px-[10px] py-1
                      [font-family:var(--fonte-titulo)]
                      text-[11.5px] font-semibold
                      ${
                        desbloqueada
                          ? "bg-[#E8F5E9] text-[#2E7D32]"
                          : "bg-[#FFEBEE] text-[#C62828]"
                      }
                    `}
                  >
                    {desbloqueada ? "desbloqueado" : "bloqueado"}
                  </span>

                  <div
                    className="
                      mb-4 flex h-[52px] w-[52px]
                      items-center justify-center
                      rounded-[14px]
                      bg-[#F0FBFB]
                      text-[22px]
                      text-[var(--cor-azul)]
                    "
                  >
                    <i className={`fa-solid ${recompensa.icone}`} />
                  </div>

                  <h3 className="m-0 mb-2 [font-family:var(--fonte-titulo)] text-[18px] font-semibold text-[var(--cor-azul-escuro)]">
                    {recompensa.nome}
                  </h3>

                  <p className="m-0 mb-[18px] flex-1 text-[13.5px] leading-[1.5] text-[#666]">
                    {recompensa.descricao}
                  </p>

                  <div className="mb-3 flex items-center gap-[6px] [font-family:var(--fonte-titulo)] text-[14px] font-bold text-[var(--cor-coral)]">
                    <i className="fa-solid fa-coins" />
                    {recompensa.custo.toLocaleString("pt-BR")} pontos
                  </div>

                  <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#EEE]">
                    <div
                      className="
                        h-full rounded-full
                        bg-[var(--cor-ciano-2)]
                        transition-[width] duration-300
                      "
                      style={{ width: `${progresso}%` }}
                    />
                  </div>

                  <span className="mt-2 text-[11.5px] font-medium text-[#777]">
                    {desbloqueada
                      ? "Você já pode resgatar."
                      : `Faltam ${(recompensa.custo - pontos).toLocaleString("pt-BR")} pontos.`}
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== RANKING ==================== */}
      <section id="ranking" className="relative w-full py-5">
        <div className={wrapClass}>
          <div className={sectionHeadClass}>
            <div className="mb-4 flex justify-center">
              <Tag texto="ranking mensal" />
            </div>

            <h2 className={sectionTitleClass}>
              Ranking Mensal de Pontos Acumulados
            </h2>

            <p className={sectionTextClass}>
              Acumule pontos através das suas atitudes sustentáveis durante o
              mês.{" "}
              <strong>
                Atenção: O ranking é resetado no início de todo mês!
              </strong>
            </p>
          </div>

          <div
            className="
              rounded-[28px]
              border border-[var(--cor-creme-destaque)]
              bg-[var(--cor-branco)]
              p-[35px]
              shadow-[0_10px_35px_rgba(0,0,0,0.05)]
              max-[700px]:p-5
            "
          >
            <div
              className="
                mb-6 flex items-center gap-3
                rounded-[14px]
                border border-[var(--cor-azul-bebe)]
                bg-[#EAF8F8]
                px-5 py-[14px]
                text-[14px]
                text-[var(--cor-azul-escuro)]
                [&_i]:shrink-0
                [&_i]:text-[20px]
                [&_i]:text-[var(--cor-coral)]
              "
            >
              <i className="fa-solid fa-arrows-rotate" />

              <span>
                O ranking é acumulativo pelo mês corrente e é resetado a cada
                novo mês.
                <br />
                Tiers: <strong>Verde 🌱</strong> (0 a 2.999 pts) |{" "}
                <strong>Prata 🛡️</strong> (3.000 pts) |{" "}
                <strong>Ouro 👑</strong> (5.500 pts).
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr
                    className="
                      [&_th]:border-b-2
                      [&_th]:border-[#EFEFEF]
                      [&_th]:px-4
                      [&_th]:py-[14px]
                      [&_th]:[font-family:var(--fonte-titulo)]
                      [&_th]:text-[13px]
                      [&_th]:font-semibold
                      [&_th]:uppercase
                      [&_th]:tracking-[0.05em]
                      [&_th]:text-[var(--cor-turquesa)]
                    "
                  >
                    <th>Posição</th>
                    <th>Usuário</th>
                    <th>Ações Validadas</th>
                    <th>CO₂ Reduzido</th>
                    <th>Pontos no Mês</th>
                    <th>Tier</th>
                  </tr>
                </thead>

                <tbody
                  id="leaderboard-tbody"
                  className="
                    [&_td]:border-b
                    [&_td]:border-[#F6F6F6]
                    [&_td]:p-4
                    [&_td]:text-[14.5px]
                    [&_td]:text-[var(--cor-azul-escuro)]
                    [&_td]:align-middle
                    [&_tr:hover_td]:bg-[#F9FDFD]
                  "
                >
                  {ranking.map((usuario, index) => (
                    <tr key={usuario.nome}>
                      <td>
                        <span
                          className={`
                            inline-flex h-8 w-8 items-center justify-center
                            rounded-full
                            [font-family:var(--fonte-titulo)]
                            text-[16px] font-bold
                            ${
                              index === 0
                                ? "bg-[#FFF8E1] text-[#F57F17]"
                                : index === 1
                                  ? "bg-[#ECEFF1] text-[#546E7A]"
                                  : index === 2
                                    ? "bg-[#EFEBE9] text-[#6D4C41]"
                                    : "text-[#777]"
                            }
                          `}
                        >
                          {index + 1}
                        </span>
                      </td>

                      <td>
                        <div className="flex items-center gap-3 font-semibold">
                          <span
                            className="
                              flex h-9 w-9 items-center justify-center
                              rounded-full
                              bg-[var(--cor-azul-bebe)]
                              text-[15px]
                              text-[var(--cor-azul-escuro)]
                            "
                          >
                            {usuario.iniciais}
                          </span>
                          {usuario.nome}
                        </div>
                      </td>

                      <td>{usuario.acoes}</td>
                      <td>{usuario.co2}</td>
                      <td className="[font-family:var(--fonte-titulo)] font-bold">
                        {usuario.pontos.toLocaleString("pt-BR")}
                      </td>

                      <td>
                        <span
                          className={`
                            rounded-full border px-3 py-1
                            [font-family:var(--fonte-titulo)]
                            text-[12px] font-semibold
                            ${
                              usuario.tier.includes("Ouro")
                                ? "border-[#FFECB3] bg-[#FFF8E1] text-[#F57F17]"
                                : usuario.tier.includes("Prata")
                                  ? "border-[#CFD8DC] bg-[#ECEFF1] text-[#455A64]"
                                  : "border-[#C8E6C9] bg-[#E8F5E9] text-[#2E7D32]"
                            }
                          `}
                        >
                          {usuario.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative w-full py-5">
        <div className={wrapClass}>
          <div
            className="
              rounded-[28px]
              bg-[linear-gradient(135deg,var(--cor-azul)_0%,var(--cor-azul-escuro)_100%)]
              px-10 py-[60px]
              text-center
              text-[var(--cor-branco)]
              shadow-[0_14px_40px_rgba(19,150,159,0.25)]
              max-[700px]:px-6
            "
          >
            <div className="mb-4 flex justify-center">
              <Tag texto="faça a diferença hoje"></Tag>
            </div>

            <h2
              className="
                m-0 mb-4
                [font-family:var(--fonte-titulo)]
                text-[clamp(26px,3.5vw,38px)]
                text-[var(--cor-branco)]
                font-bold
              "
            >
              Pronto para transformar seus hábitos em conquistas de verdade?
            </h2>

            <p
              className="
                mx-auto m-0 mb-[30px]
                max-w-[600px]
                text-[17px] leading-[1.6]
                text-[rgba(255,255,255,0.9)]
              "
            >
              Crie sua conta gratuitamente e comece a registrar suas atitudes
              ecológicas agora mesmo.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/pagina-login"
                className="
                  rounded-full
                  bg-[var(--cor-coral)]
                  px-8 py-[14px]
                  [font-family:var(--fonte-titulo)]
                  text-[16px] font-semibold
                  text-[var(--cor-branco)]
                  no-underline
                  shadow-[0_4px_14px_rgba(255,107,87,0.4)]
                  transition-[transform,background]
                  duration-200
                  hover:-translate-y-[2px]
                  hover:bg-[var(--cor-coral-escuro)]
                "
              >
                Cadastrar-se
              </Link>

              <Link
                to="/pagina-sobre"
                className="
                  rounded-full border-2
                  border-[rgba(255,255,255,0.4)]
                  bg-transparent
                  px-8 py-[14px]
                  [font-family:var(--fonte-titulo)]
                  text-[16px] font-semibold
                  text-[var(--cor-branco)]
                  no-underline
                  transition-[border-color,background]
                  duration-200
                  hover:border-[var(--cor-branco)]
                  hover:bg-[rgba(255,255,255,0.1)]
                "
              >
                Conhecer nossa solução
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
