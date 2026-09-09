import Tag from "../components/Tag/Tag";
import ContatoCard from "../components/Contato-Card/Contato-Card";

export default function Contato() {
  const wrapClass = "mx-auto w-full max-w-[1180px] px-10";

  const socialLinkClass = `
    flex h-11 w-11 items-center justify-center
    rounded-full
    border border-[var(--cor-creme-destaque)]
    bg-[var(--cor-branco)]
    text-[16px] text-[var(--cor-azul)]
    transition-[background,color,transform]
    duration-150 ease-out
    hover:-translate-y-[2px]
    hover:bg-[var(--cor-azul)]
    hover:text-[var(--cor-branco)]
  `;

  const contatos = [
    {
      icone: "fa-solid fa-envelope",
      label: "e-mail",
      valor: "nextgen.solucoestech@gmail.com",
      href: "mailto:nextgen.solucoestech@gmail.com",
    },
    {
      icone: "fa-brands fa-whatsapp",
      label: "whatsapp",
      valor: "(11) 91234-5678",
      href: "#",
    },
    {
      icone: "fa-solid fa-phone",
      label: "telefone",
      valor: "(11) 4002-8922",
      href: "tel:+551140028922",
    },
    {
      icone: "fa-solid fa-location-dot",
      label: "endereço",
      valor: "av. das nações, 850 · são paulo, sp",
    },
  ];

  return (
    <main
      className="
        m-0 min-h-screen w-full max-w-none
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
          relative w-full overflow-hidden
          bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)]
          pt-[76px] pb-[72px]
          text-center
        "
      >
        <div
          className="
            pointer-events-none
            absolute left-[-60px] top-[-100px]
            h-[260px] w-[260px]
            rounded-full
            bg-[rgba(65,198,196,0.28)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-[-70px] right-[6%]
            h-[180px] w-[180px]
            rounded-full
            bg-[rgba(153,209,213,0.4)]
          "
        />

        <div className="relative z-[2] mx-auto w-full max-w-[680px] px-10">
          <div className="mb-5 flex justify-center">
            <Tag texto="fala com a gente" />
          </div>

          <h1
            className="
              m-0 mb-4
              [font-family:var(--fonte-titulo)]
              text-[clamp(32px,4.2vw,46px)]
              font-semibold leading-[1.18]
              tracking-[-0.01em]
              text-[var(--cor-azul-escuro)]
            "
          >
            contato
          </h1>

          <p
            className="
              mx-auto m-0 max-w-[52ch]
              text-[16px] font-medium
              leading-[1.65]
              text-[var(--cor-turquesa)]
            "
          >
            tem alguma dúvida, sugestão ou proposta de parceria? escolhe o canal
            que for melhor pra você.
          </p>
        </div>
      </section>

      {/* ==================== CANAIS DE CONTATO ==================== */}
      <section className="relative w-full pt-16 pb-10">
        <div className={wrapClass}>
          <div
            className="
              mx-auto grid max-w-[1000px]
              grid-cols-4 gap-5
              max-[900px]:grid-cols-2
              max-[560px]:grid-cols-1
            "
          >
            {contatos.map((contato) => (
              <ContatoCard
                key={contato.label}
                icone={contato.icone}
                label={contato.label}
                valor={contato.valor}
                href={contato.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BANNER DE DÚVIDA ==================== */}
      <section className="relative w-full pt-6 pb-[88px]">
        <div className={wrapClass}>
          <div
            className="
              relative mx-auto
              flex max-w-[1000px]
              flex-wrap items-center justify-between
              gap-6 overflow-hidden
              rounded-[28px]
              bg-[linear-gradient(135deg,var(--cor-ciano)_0%,var(--cor-azul)_100%)]
              p-11
              max-[700px]:p-7
            "
          >
            <div
              className="
                pointer-events-none
                absolute right-[-50px] top-[-70px]
                h-[200px] w-[200px]
                rounded-full
                bg-[rgba(255,255,255,0.16)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute bottom-[-60px] left-[8%]
                h-[140px] w-[140px]
                rounded-full
                bg-[rgba(255,255,255,0.16)]
              "
            />

            <div className="relative z-[2] max-w-[520px]">
              <h2
                className="
                  m-0 mb-2
                  [font-family:var(--fonte-titulo)]
                  text-[clamp(22px,2.4vw,28px)]
                  font-semibold
                  text-[var(--cor-branco)]
                "
              >
                tá com alguma dúvida?
              </h2>

              <p
                className="
                  m-0
                  text-[14.5px] font-medium
                  text-[rgba(255,255,255,0.86)]
                "
              >
                abre uma issue e nossa equipe te responde o quanto antes!
              </p>
            </div>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/anapmagalhaess/projeto-soulup/issues"
              className="
                relative z-[2]
                inline-flex cursor-pointer
                items-center gap-2
                rounded-[16px]
                border-0
                bg-[var(--cor-branco)]
                px-[26px] py-[15px]
                [font-family:var(--fonte-titulo)]
                text-[15px] font-semibold
                text-[var(--cor-azul-escuro)]
                no-underline
                shadow-[0_6px_0_rgba(255,255,255,0.35)]
                transition-[transform,box-shadow]
                duration-[120ms] ease-out
                hover:-translate-y-[2px]
                hover:shadow-[0_8px_0_rgba(255,255,255,0.35)]
              "
            >
              <i className="fa-solid fa-headset" />
              abrir issue
            </a>
          </div>
        </div>
      </section>

      {/* ==================== REDES SOCIAIS ==================== */}
      <section className="relative w-full pb-24 text-center">
        <div className={wrapClass}>
          <p
            className="
              m-0 mb-4
              text-[13.5px] font-semibold
              text-[var(--cor-turquesa)]
            "
          >
            ou nos encontre nas redes sociais
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Soul Up"
              className={socialLinkClass}
            >
              <i className="fa-brands fa-instagram" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da Soul Up"
              className={socialLinkClass}
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok da Soul Up"
              className={socialLinkClass}
            >
              <i className="fa-brands fa-tiktok" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) da Soul Up"
              className={socialLinkClass}
            >
              <i className="fa-brands fa-x-twitter" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
