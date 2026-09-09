import { Link } from "react-router-dom";
import Tag from "../components/Tag/Tag";

export default function Sobre() {

  const flowStepClass = `
    relative min-w-0 flex-1 min-h-[205px]
    rounded-[22px]
    border border-[var(--cor-creme-destaque)]
    bg-[#F5FDFD]
    px-[18px] pt-[30px] pb-[24px]
    text-center
    max-[768px]:min-h-0
    max-[480px]:px-5
    max-[480px]:pt-8
    max-[480px]:pb-6
  `;

  const flowNumberClass = `
    absolute left-1/2 top-[-14px]
    flex h-[28px] w-[28px]
    -translate-x-1/2
    items-center justify-center
    rounded-full
    bg-[var(--cor-azul-escuro)]
    [font-family:var(--fonte-titulo)]
    text-[13px] font-semibold
    text-[var(--cor-azul-bebe)]
  `;

  const flowIconClass = `
    mx-auto mt-[6px] mb-4
    flex h-[56px] w-[56px]
    items-center justify-center
    rounded-full
    border-[1.5px] border-[var(--cor-azul-bebe)]
    bg-[var(--cor-branco)]
  `;

  const flowTitleClass = `
    m-0 mb-2
    [font-family:var(--fonte-titulo)]
    text-[15.5px] font-semibold leading-[1.3]
    text-[var(--cor-azul-escuro)]
  `;

  const flowTextClass = `
    m-0
    text-[12.5px] font-medium leading-[1.55]
    text-[var(--cor-turquesa)]
  `;

  const showcaseItemClass = `
    group flex flex-col items-center
    rounded-[24px]
    border border-[#E2E8F0]
    bg-[#F8FAFC]
    px-[26px] pt-[34px] pb-[28px]
    max-[480px]:px-5
    max-[480px]:pt-7
    max-[480px]:pb-6
    text-center
    transition-[transform,box-shadow,border-color,background]
    duration-[220ms] ease-out
    hover:-translate-y-[5px]
    hover:border-[var(--cor-azul-bebe)]
    hover:bg-[var(--cor-branco)]
    hover:shadow-[0_16px_32px_-10px_rgba(32,111,116,0.16)]
  `;

  const storeCardClass = `
    group flex flex-col
    rounded-[24px]
    border border-[var(--cor-creme-destaque)]
    bg-[var(--cor-branco)]
    px-[28px] py-[30px]
    max-[480px]:px-5
    max-[480px]:py-6
    shadow-[0_10px_28px_-14px_rgba(32,111,116,0.16)]
    transition-[transform,box-shadow,border-color]
    duration-[220ms] ease-out
    hover:-translate-y-[6px]
    hover:border-[var(--cor-azul-bebe)]
    hover:shadow-[0_20px_40px_-15px_rgba(32,111,116,0.18)]
  `;

  return (
    <main
      className="
        relative
        w-full
        max-w-none
        box-border
        m-0
        min-h-screen
        overflow-x-hidden
        bg-[var(--cor-creme)]
        p-0
        text-[var(--cor-azul-escuro)]
        [font-family:var(--fonte-texto)]
        antialiased
        select-none
      "
    >
      {/* ==================== HERO ==================== */}
      <section
        className="
          relative w-full overflow-hidden
          bg-[linear-gradient(180deg,#F1FCFC_0%,#DFF4F5_100%)]
          pt-[76px] pb-[84px]
          text-center
          max-[768px]:pt-[58px]
          max-[768px]:pb-[64px]
          max-[480px]:pt-[46px]
          max-[480px]:pb-[52px]
        "
      >
        <div className="absolute left-[-80px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[rgba(65,198,196,0.28)] blur-[2px] max-[480px]:h-[220px] max-[480px]:w-[220px]" />
        <div className="absolute bottom-[-80px] right-[5%] h-[220px] w-[220px] rounded-full bg-[rgba(153,209,213,0.4)] blur-[1px] max-[480px]:h-[150px] max-[480px]:w-[150px]" />

        <div className="relative z-[2] mx-auto max-w-[720px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <Tag texto="sobre o projeto" />

          <h1
            className="
              m-0 mb-5
              [font-family:var(--fonte-titulo)]
              text-[clamp(32px,4.2vw,48px)]
              font-semibold leading-[1.18] tracking-[-0.01em]
              max-[480px]:text-[clamp(29px,9vw,38px)]
              text-[var(--cor-azul-escuro)]
            "
          >
            a soul up transforma sua{" "}
            <span className="relative whitespace-nowrap font-bold before:absolute before:bottom-[6px] before:left-[-6px] before:right-[-6px] before:z-[1] before:h-[0.42em] before:rotate-[-1.5deg] before:rounded-[3px] before:bg-[var(--cor-ciano)] before:content-['']">
              <span className="relative z-[2] text-[var(--cor-azul-escuro)]">atitude</span>
            </span>{" "}
            em{" "}
            <span className="relative whitespace-nowrap font-bold before:absolute before:bottom-[6px] before:left-[-6px] before:right-[-6px] before:z-[1] before:h-[0.42em] before:rotate-[1.2deg] before:rounded-[3px] before:bg-[var(--cor-azul-bebe)] before:content-['']">
              <span className="relative z-[2] text-[var(--cor-azul-escuro)]">resultado real</span>
            </span>
            .
          </h1>

          <p className="mx-auto m-0 max-w-[54ch] text-[16.5px] font-medium leading-[1.7] text-[var(--cor-turquesa)] max-[480px]:text-[15px]">
            criamos um ciclo simples, transparente e verificado por IA — pra
            ninguém ficar na dúvida se o esforço sustentável do dia a dia
            realmente virou alguma coisa.
          </p>
        </div>
      </section>

      {/* ==================== FLUXO ==================== */}
      <section className="relative w-full pt-[90px] pb-[96px] max-[768px]:pt-[68px] max-[768px]:pb-[72px] max-[480px]:pt-[56px] max-[480px]:pb-[60px]">
        <div className="mx-auto w-full max-w-[1180px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <div className="mx-auto mb-[60px] max-w-[580px] text-center max-[480px]:mb-10">
            <Tag texto="o ciclo da nossa solução" />

            <h2 className="m-0 mb-3 [font-family:var(--fonte-titulo)] text-[clamp(28px,3vw,38px)] font-semibold tracking-[-0.01em] text-[var(--cor-azul-escuro)]">
              da ação até a recompensa
            </h2>

            <p className="m-0 text-[15.5px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
              cada etapa existe pra garantir que o que você faz de bom pelo
              planeta vire retorno justo e mensurável.
            </p>
          </div>

          <div className="flex flex-row items-stretch gap-[6px] max-[900px]:flex-col max-[900px]:gap-4">
            <div className={flowStepClass}>
              <span className={flowNumberClass}>1</span>
              <div className={flowIconClass}><i className="fa-solid fa-shield" /></div>
              <h3 className={flowTitleClass}>ação feita</h3>
              <p className={flowTextClass}>você registra uma atitude sustentável real do seu dia a dia.</p>
            </div>

            <div className="flex w-[30px] flex-none items-center justify-center self-center rotate-0 text-[var(--cor-azul)] max-[900px]:h-[22px] max-[900px]:w-full max-[900px]:rotate-90">
              <i className="fa-solid fa-arrow-right-long" />
            </div>

            <div className={flowStepClass}>
              <span className={flowNumberClass}>2</span>
              <div className={flowIconClass}><i className="fa-solid fa-robot" /></div>
              <h3 className={flowTitleClass}>validação da IA</h3>
              <p className={flowTextClass}>nossa inteligência artificial confere se a ação registrada é consistente e verdadeira.</p>
            </div>

            <div className="flex w-[30px] flex-none items-center justify-center self-center rotate-0 text-[var(--cor-azul)] max-[900px]:h-[22px] max-[900px]:w-full max-[900px]:rotate-90">
              <i className="fa-solid fa-arrow-right-long" />
            </div>

            <div className={flowStepClass}>
              <span className={flowNumberClass}>3</span>
              <div className={flowIconClass}><i className="fa-solid fa-wallet" /></div>
              <h3 className={flowTitleClass}>pontos na carteira</h3>
              <p className={flowTextClass}>os pontos entram na sua carteira com valor proporcional ao esforço medido da ação.</p>
            </div>

            <div className="flex w-[30px] flex-none items-center justify-center self-center rotate-0 text-[var(--cor-azul)] max-[900px]:h-[22px] max-[900px]:w-full max-[900px]:rotate-90">
              <i className="fa-solid fa-arrow-right-long" />
            </div>

            <div className={flowStepClass}>
              <span className={flowNumberClass}>4</span>
              <div className={flowIconClass}><i className="fa-solid fa-ranking-star" /></div>
              <h3 className={flowTitleClass}>sobe no ranking global</h3>
              <p className={flowTextClass}>sua pontuação te posiciona entre os usuários mais engajados do planeta.</p>
            </div>

            <div className="flex w-[30px] flex-none items-center justify-center self-center rotate-0 text-[var(--cor-azul)] max-[900px]:h-[22px] max-[900px]:w-full max-[900px]:rotate-90">
              <i className="fa-solid fa-arrow-right-long" />
            </div>

            <div className={flowStepClass}>
              <span className={flowNumberClass}>5</span>
              <div className={flowIconClass}><i className="fa-solid fa-award" /></div>
              <h3 className={flowTitleClass}>resgate por recompensas</h3>
              <p className={flowTextClass}>troque seus pontos por benefícios reais em marcas parceiras — sem pegadinha.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VITRINE ==================== */}
      <section className="relative w-full pb-[60px] max-[480px]:pb-[48px]">
        <div className="mx-auto w-full max-w-[1180px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <div className="rounded-[32px] border border-[var(--cor-creme-destaque)] bg-[var(--cor-branco)] px-[44px] pt-[48px] pb-[44px] text-center shadow-[0_24px_50px_-30px_rgba(32,111,116,0.18)] max-[768px]:px-6 max-[768px]:py-8 max-[480px]:rounded-[24px] max-[480px]:px-5 max-[480px]:py-7">
            <Tag texto="ganhe pontos soul" />

            <h2 className="m-0 mb-3 [font-family:var(--fonte-titulo)] text-[clamp(24px,2.6vw,32px)] font-semibold text-[var(--cor-azul-escuro)]">
              suas atitudes verdes valem muito!
            </h2>

            <p className="mx-auto mt-0 mb-9 max-w-[58ch] text-[15.5px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
              na soul up, cada ação sustentável que você realiza é recompensada
              com <strong>pontos soul</strong>. veja exemplos do que pontua na nossa plataforma:
            </p>

            <div className="grid grid-cols-4 gap-[22px] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
              <div className={showcaseItemClass}>
                <div className="mb-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#DCFCE7] text-[24px] text-[#15803D] transition-transform duration-200 group-hover:scale-[1.08]">
                  <i className="fa-solid fa-bicycle" />
                </div>
                <h3 className="m-0 mb-[12px] [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]">mobilidade limpa</h3>
                <p className="m-0 mb-[24px] flex-1 text-[13px] font-medium leading-[1.55] text-[var(--cor-turquesa)]">vá de bicicleta, patinete elétrico ou transporte público. reduza a pegada de carbono do seu trajeto diário.</p>
                <span className="inline-block rounded-full bg-[var(--cor-ciano-2)] px-[20px] py-[9px] [font-family:var(--fonte-titulo)] text-[12.5px] font-bold tracking-[0.02em] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(65,198,196,0.3)]">+50 pontos soul</span>
              </div>

              <div className={showcaseItemClass}>
                <div className="mb-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFF0ED] text-[24px] text-[var(--cor-coral)] transition-transform duration-200 group-hover:scale-[1.08]">
                  <i className="fa-solid fa-hand-holding-heart" />
                </div>
                <h3 className="m-0 mb-[12px] [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]">doação & reuso</h3>
                <p className="m-0 mb-[24px] flex-1 text-[13px] font-medium leading-[1.55] text-[var(--cor-turquesa)]">repasse roupas, livros e móveis pra quem precisa em vez de descartar no lixo comum.</p>
                <span className="inline-block rounded-full bg-[var(--cor-ciano-2)] px-[20px] py-[9px] [font-family:var(--fonte-titulo)] text-[12.5px] font-bold tracking-[0.02em] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(65,198,196,0.3)]">+30 pontos soul</span>
              </div>

              <div className={showcaseItemClass}>
                <div className="mb-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FEF9C3] text-[24px] text-[#CA8A04] transition-transform duration-200 group-hover:scale-[1.08]">
                  <i className="fa-solid fa-lightbulb" />
                </div>
                <h3 className="m-0 mb-[12px] [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]">consumo consciente</h3>
                <p className="m-0 mb-[24px] flex-1 text-[13px] font-medium leading-[1.55] text-[var(--cor-turquesa)]">economia de água e energia elétrica residencial comprovada com hábitos inteligentes.</p>
                <span className="inline-block rounded-full bg-[var(--cor-ciano-2)] px-[20px] py-[9px] [font-family:var(--fonte-titulo)] text-[12.5px] font-bold tracking-[0.02em] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(65,198,196,0.3)]">+40 pontos soul</span>
              </div>

              <div className={showcaseItemClass}>
                <div className="mb-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E0F2FE] text-[24px] text-[#0369A1] transition-transform duration-200 group-hover:scale-[1.08]">
                  <i className="fa-solid fa-recycle" />
                </div>
                <h3 className="m-0 mb-[12px] [font-family:var(--fonte-titulo)] text-[16px] font-bold text-[var(--cor-azul-escuro)]">reciclagem correta</h3>
                <p className="m-0 mb-[24px] flex-1 text-[13px] font-medium leading-[1.55] text-[var(--cor-turquesa)]">separação de resíduos orgânicos e recicláveis entregues em pontos de coleta seletiva.</p>
                <span className="inline-block rounded-full bg-[var(--cor-ciano-2)] px-[20px] py-[9px] [font-family:var(--fonte-titulo)] text-[12.5px] font-bold tracking-[0.02em] text-[var(--cor-branco)] shadow-[0_4px_12px_rgba(65,198,196,0.3)]">+35 pontos soul</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IA ==================== */}
      <section className="relative w-full pb-[88px] max-[768px]:pb-[68px] max-[480px]:pb-[56px]">
        <div className="mx-auto w-full max-w-[1180px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <div className="mx-auto mb-[34px] max-w-[580px] text-center">
            <Tag texto="validação por ia" />
          </div>

          <div className="relative grid grid-cols-[1.1fr_0.9fr] items-center gap-12 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0F525F_0%,#206F74_60%,#154D55_100%)] p-[52px] shadow-[0_24px_60px_-20px_rgba(15,82,95,0.4)] before:pointer-events-none before:absolute before:right-[-100px] before:top-[-100px] before:h-[300px] before:w-[300px] before:rounded-full before:bg-[rgba(65,198,196,0.15)] before:blur-[40px] before:content-[''] max-[1024px]:grid-cols-1 max-[1024px]:gap-8 max-[1024px]:p-9 max-[480px]:rounded-[24px] max-[480px]:p-6">
            <div className="relative z-[1]">
              <span className="mb-[18px] inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.15)] px-[14px] py-[6px] [font-family:var(--fonte-titulo)] text-[12px] font-bold text-[var(--cor-azul-bebe)]">
                🤖 IA Transparente & Verificada
              </span>

              <h2 className="m-0 mb-[18px] [font-family:var(--fonte-titulo)] text-[clamp(24px,2.6vw,32px)] font-semibold leading-[1.25] text-[var(--cor-branco)]">
                inteligência artificial a favor do planeta
              </h2>

              <p className="m-0 mb-[14px] text-[14.5px] font-medium leading-[1.7] text-[rgba(255,255,255,0.88)]">
                nossa plataforma utiliza <strong className="font-bold text-[var(--cor-branco)]">inteligência artificial avançada</strong> para validar cada ação sustentável enviada por você.
              </p>

              <p className="m-0 mb-[14px] text-[14.5px] font-medium leading-[1.7] text-[rgba(255,255,255,0.88)]">
                a IA avalia a autenticidade e o impacto ambiental real de cada atitude, distribuindo a pontuação de forma justa e transparente. quanto maior o benefício gerado para o meio ambiente, mais <strong className="font-bold text-[var(--cor-branco)]">pontos soul</strong> você ganha!
              </p>
            </div>

            <div className="relative z-[1] grid grid-cols-2 gap-[20px] max-[640px]:grid-cols-1">
              {[
                ["fa-eye", "análise e validação", "verificação inteligente de fotos e dados enviados."],
                ["fa-earth-americas", "cálculo de impacto", "medição aproximada do CO₂ evitado por ação."],
                ["fa-scale-balanced", "pontuação justa", "algoritmo transparente proporcional ao esforço."],
                ["fa-shield-halved", "anti-fraude", "proteção para garantir a integridade da comunidade."],
              ].map(([icon, title, description]) => (
                <div key={title} className="flex min-h-[168px] flex-col items-start justify-center gap-[12px] rounded-[22px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.10)] px-[22px] py-[22px] text-left text-[var(--cor-branco)] backdrop-blur-[8px] transition-[transform,background] duration-200 hover:-translate-y-[3px] hover:bg-[rgba(255,255,255,0.16)]">
                  <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center self-start rounded-[13px] bg-[var(--cor-branco)] text-[18px] text-[var(--cor-azul)] shadow-[0_7px_16px_rgba(0,0,0,0.13)]">
                    <i className={`fa-solid ${icon}`} />
                  </div>
                  <div className="flex w-full flex-col items-start text-left">
                    <h4 className="m-0 mb-[5px] [font-family:var(--fonte-titulo)] text-[14.5px] font-bold text-[var(--cor-branco)]">{title}</h4>
                    <p className="m-0 max-w-[26ch] text-[12.5px] leading-[1.5] text-[rgba(255,255,255,0.82)]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MINI LOJA ==================== */}
      <section className="relative w-full pb-[96px] max-[768px]:pb-[72px] max-[480px]:pb-[60px]">
        <div className="mx-auto w-full max-w-[1180px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <div className="mx-auto mb-[60px] max-w-[580px] text-center max-[480px]:mb-10">
            <Tag texto="mini loja de recompensas" />

            <h2 className="m-0 mb-3 [font-family:var(--fonte-titulo)] text-[clamp(28px,3vw,38px)] font-semibold tracking-[-0.01em] text-[var(--cor-azul-escuro)]">
              troque suas atitudes por benefícios reais
            </h2>

            <p className="m-0 text-[15.5px] font-medium leading-[1.6] text-[var(--cor-turquesa)]">
              veja uma prévia do que você pode resgatar na loja soul up com os pontos acumulados nas suas missões do dia a dia.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-[30px] max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 max-[480px]:mt-9">
            {[
              {
                tag: "energia limpa", tagClass: "bg-[#FEF9C3] text-[#854D0E]", pts: "500 pts",
                icon: "fa-bolt", iconClass: "bg-[#FEF9C3] text-[#CA8A04]",
                title: "desconto na conta de luz",
                text: "até 15% de desconto na fatura de energia em parcerias com distribuidoras de energia solar e eólica.",
                partner: "parceiro oficial"
              },
              {
                tag: "voucher r$ 50", tagClass: "bg-[#F3E8FF] text-[#6B21A8]", pts: "300 pts",
                icon: "fa-ticket", iconClass: "bg-[#F3E8FF] text-[#9333EA]",
                title: "cupom de empresa parceira",
                text: "vale-compras de R$ 50 para usar em marcas parceiras de alimentos orgânicos, cosméticos veganos e e-commerce eco.",
                partner: "marcas verdes"
              },
              {
                tag: "produto físico", tagClass: "bg-[#E0F2FE] text-[#0369A1]", pts: "250 pts",
                icon: "fa-bag-shopping", iconClass: "bg-[#DCFCE7] text-[#16A34A]",
                title: "ecobag soul up",
                text: "sacola reutilizável feita com 100% de algodão orgânico trançado, entregue diretamente na sua residência.",
                partner: "item exclusivo"
              },
              {
                tag: "produto físico", tagClass: "bg-[#E0F2FE] text-[#0369A1]", pts: "400 pts",
                icon: "fa-bottle-water", iconClass: "bg-[#E0F2FE] text-[#0284C7]",
                title: "garrafa térmica inox",
                text: "garrafa de aço inoxidável livre de BPA, conserva bebidas geladas por até 24h para você eliminar o plástico de uso único.",
                partner: "item exclusivo"
              },
              {
                tag: "impacto ambiental", tagClass: "bg-[#DCFCE7] text-[#15803D]", pts: "150 pts",
                icon: "fa-tree", iconClass: "bg-[#D1FAE5] text-[#059669]",
                title: "plantio de uma árvore",
                text: "financie o plantio de uma muda nativa em projetos de restauração florestal com certificado digital no seu nome.",
                partner: "causa socioambiental"
              },
              {
                tag: "mobilidade urbana", tagClass: "bg-[#FFEDD5] text-[#C2410C]", pts: "350 pts",
                icon: "fa-bicycle", iconClass: "bg-[#FFEDD5] text-[#EA580C]",
                title: "passe mensal de bike",
                text: "passe livre mensal em redes parceiras de bicicletas e patinetes elétricos nas principais capitais.",
                partner: "parceiro urbano"
              }
            ].map((item) => (
              <div key={`${item.title}-${item.pts}`} className={storeCardClass}>
                <div className="mb-[24px] flex items-center justify-between gap-3 max-[480px]:flex-wrap">
                  <span
                    className={`rounded-full px-[14px] py-[7px] [font-family:var(--fonte-titulo)] text-[11.5px] font-bold uppercase tracking-[0.04em] ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>

                  <span className="flex items-center gap-[5px] rounded-full bg-[#E3F6F5] px-[14px] py-[7px] [font-family:var(--fonte-titulo)] text-[13.5px] font-bold text-[var(--cor-azul)]">
                    <i className="fa-solid fa-coins" /> {item.pts}
                  </span>
                </div>

                <div
                  className={`mb-[20px] flex h-[56px] w-[56px] items-center justify-center rounded-[18px] text-[22px] transition-transform duration-200 group-hover:scale-[1.08] ${item.iconClass}`}
                >
                  <i className={`fa-solid ${item.icon}`} />
                </div>

                <h3 className="m-0 mb-[12px] [font-family:var(--fonte-titulo)] text-[17px] font-bold leading-[1.3] text-[var(--cor-azul-escuro)]">
                  {item.title}
                </h3>

                <p className="m-0 mb-[26px] flex-1 text-[13px] font-medium leading-[1.55] text-[var(--cor-turquesa)]">
                  {item.text}
                </p>

                <div className="flex items-center justify-between gap-[10px] border-t border-[#F1F5F9] pt-[18px] max-[480px]:flex-col max-[480px]:items-stretch">
                  <span className="text-[11.5px] font-semibold text-[#64748B]">{item.partner}</span>
                  <span className="rounded-full bg-[#E3F6F5] px-[14px] py-[6px] [font-family:var(--fonte-titulo)] text-[12.5px] font-bold text-[var(--cor-azul)] transition-all duration-200 group-hover:bg-[var(--cor-azul)] group-hover:text-[var(--cor-branco)] max-[480px]:text-center">
                    resgatar prévia
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[88px] flex flex-row items-center justify-between gap-6 rounded-[28px] border border-[rgba(255,139,122,0.3)] bg-[linear-gradient(135deg,#FFF0ED_0%,#FFE5E0_100%)] px-[44px] py-9 text-left shadow-[0_12px_30px_-15px_rgba(255,139,122,0.25)] max-[768px]:mt-[64px] max-[768px]:flex-col max-[768px]:px-6 max-[768px]:py-7 max-[768px]:text-center max-[480px]:mt-[52px] max-[480px]:rounded-[22px] max-[480px]:px-5">
            <div>
              <h3 className="m-0 mb-[6px] [font-family:var(--fonte-titulo)] text-[20px] font-bold text-[var(--cor-azul-escuro)]">
                quer começar a acumular pontos e resgatar essas recompensas?
              </h3>
              <p className="m-0 text-[14px] font-medium text-[var(--cor-turquesa)]">
                crie sua conta gratuita na soul up em menos de 1 minuto e faça parte da comunidade sustentável!
              </p>
            </div>

            <Link
              to="/pagina-login"
              className="
                inline-flex whitespace-nowrap items-center gap-[10px]
                rounded-full
                bg-[var(--cor-coral)]
                px-[30px] py-[16px]
                [font-family:var(--fonte-titulo)]
                text-[14.5px] font-bold
                text-[var(--cor-branco)]
                no-underline
                shadow-[0_8px_20px_-5px_rgba(255,139,122,0.5)]
                transition-[transform,background]
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[var(--cor-coral-escuro)]
                max-[480px]:w-full
                max-[480px]:justify-center
              "
            >
              começar agora <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
