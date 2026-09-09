type ContatoCardProps = {
  icone: string;
  label: string;
  valor: string;
  href?: string;
};

export default function ContatoCard({
  icone,
  label,
  valor,
  href,
}: ContatoCardProps) {
  const valueClass = `
    break-words
    [font-family:var(--fonte-titulo)]
    text-[14.5px] font-semibold
    text-[var(--cor-azul-escuro)]
  `;

  return (
    <div
      className="
        rounded-[22px]
        border border-[var(--cor-creme-destaque)]
        bg-[var(--cor-branco)]
        px-[22px] py-7
        text-center
        transition-[transform,box-shadow]
        duration-150 ease-out
        hover:-translate-y-[3px]
        hover:shadow-[0_18px_32px_-22px_rgba(32,111,116,0.35)]
      "
    >
      <div
        className="
          mx-auto mb-4
          flex h-12 w-12 items-center justify-center
          rounded-full
          bg-[#E3F6F5]
          text-[18px] text-[var(--cor-azul)]
        "
      >
        <i className={icone} />
      </div>

      <p
        className="
          m-0 mb-[6px]
          text-[11.5px] font-bold
          uppercase tracking-[0.03em]
          text-[var(--cor-turquesa)]
        "
      >
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className={`
            ${valueClass}
            no-underline
            transition-colors duration-150
            hover:text-[var(--cor-azul)]
          `}
        >
          {valor}
        </a>
      ) : (
        <p className={`m-0 ${valueClass}`}>{valor}</p>
      )}
    </div>
  );
}
