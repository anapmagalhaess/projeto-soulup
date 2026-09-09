type TeamCardProps = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  github: string;
  linkedin: string;
};

export default function TeamCard({
  nome,
  rm,
  turma,
  foto,
  github,
  linkedin,
}: TeamCardProps) {
  const teamLinkClass = `
    flex h-[38px] w-[38px] items-center justify-center
    rounded-full
    border border-[var(--cor-creme-destaque)]
    bg-[#F5FDFD]
    text-[15px] text-[var(--cor-azul)]
    transition-[background,color,transform]
    duration-150 ease-out
    hover:-translate-y-[2px]
    hover:bg-[var(--cor-azul)]
    hover:text-[var(--cor-branco)]
    focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-[var(--cor-azul-escuro)]
  `;

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-[28px]
        border border-[var(--cor-creme-destaque)]
        bg-[var(--cor-branco)]
        px-9 pt-[42px] pb-9
        text-center
        transition-[transform,box-shadow]
        duration-[220ms] ease-out
        before:absolute
        before:left-1/2
        before:top-0
        before:h-1
        before:w-full
        before:-translate-x-1/2
        before:scale-x-0
        before:rounded-b-[4px]
        before:bg-[linear-gradient(90deg,var(--cor-coral)_0%,var(--cor-coral-escuro)_100%)]
        before:origin-center
        before:transition-transform
        before:duration-[350ms]
        before:[transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]
        hover:-translate-y-[5px]
        hover:shadow-[0_28px_48px_-20px_rgba(32,111,116,0.32)]
        hover:before:scale-x-100
      "
    >
      <div
        className="
          mx-auto mb-[22px]
          h-[130px] w-[130px]
          rounded-full
          bg-[linear-gradient(135deg,var(--cor-ciano)_0%,var(--cor-azul)_100%)]
          p-1
          transition-transform duration-[220ms]
          group-hover:scale-[1.06]
        "
      >
        <img
          src={foto}
          alt={`Foto de perfil de ${nome}`}
          className="
            block h-full w-full
            rounded-full
            border-[3px] border-[var(--cor-branco)]
            object-cover
          "
        />
      </div>

      <h3
        className="
          m-0 mb-2
          [font-family:var(--fonte-titulo)]
          text-[18px] font-semibold
          leading-[1.3]
          text-[var(--cor-azul-escuro)]
        "
      >
        {nome}
      </h3>

      <span
        className="
          mb-[22px] inline-flex items-center gap-[6px]
          rounded-full bg-[#FFE9E4]
          px-[14px] py-[5px]
          text-[12.5px] font-bold
          text-[var(--cor-coral-escuro)]
        "
      >
        ✦ RM {rm} · {turma}
      </span>

      <div className="flex items-center justify-center gap-[10px]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub de ${nome}`}
          className={teamLinkClass}
        >
          <i className="fa-brands fa-github" />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn de ${nome}`}
          className={teamLinkClass}
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
      </div>
    </article>
  );
}
