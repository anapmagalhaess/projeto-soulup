type ChallengeCardProps = {
  id: string;
  categoria: string;
  categoriaLabel: string;
  dificuldade: "fácil" | "médio" | "difícil";
  titulo: string;
  descricao: string;
  pontos: number;
  onIniciar: (id: string) => void;
};

export default function ChallengeCard({
  id,
  categoria,
  categoriaLabel,
  dificuldade,
  titulo,
  descricao,
  pontos,
  onIniciar,
}: ChallengeCardProps) {
  const dificuldadeClass = {
    fácil: "bg-[#E3F6F5] text-[var(--cor-azul-escuro)]",
    médio: "bg-[#FDECD1] text-[#9A6712]",
    difícil: "bg-[#FFE1DC] text-[var(--cor-coral-escuro)]",
  };

  return (
    <article
      data-category={categoria}
      data-id={id}
      className="
        flex flex-col gap-[14px]
        rounded-[22px]
        border border-[var(--cor-creme-destaque)]
        bg-[var(--cor-branco)]
        px-6 py-[26px]
        shadow-[0_6px_18px_rgba(0,0,0,0.03)]
        transition-[opacity,transform,box-shadow]
        duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-[0_12px_28px_rgba(32,111,116,0.1)]
      "
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="
            rounded-full
            bg-[#E3F6F5]
            px-3 py-1
            [font-family:var(--fonte-titulo)]
            text-[11.5px]
            font-bold
            tracking-[0.02em]
            text-[var(--cor-azul-escuro)]
          "
        >
          {categoriaLabel}
        </span>

        <span
          className={`
            rounded-full
            px-3 py-1
            [font-family:var(--fonte-titulo)]
            text-[11.5px]
            font-bold
            ${dificuldadeClass[dificuldade]}
          `}
        >
          {dificuldade}
        </span>
      </div>

      <h3
        className="
          m-0
          [font-family:var(--fonte-titulo)]
          text-[18px]
          font-semibold
          text-[var(--cor-azul-escuro)]
        "
      >
        {titulo}
      </h3>

      <p
        className="
          m-0
          flex-1
          text-[13.5px]
          font-medium
          leading-[1.6]
          text-[var(--cor-turquesa)]
        "
      >
        {descricao}
      </p>

      <div
        className="
          mt-[6px]
          flex items-center justify-between
          gap-3
          border-t border-[#F6F6F6]
          pt-3
        "
      >
        <span
          className="
            inline-flex items-center gap-[6px]
            [font-family:var(--fonte-titulo)]
            text-[14px]
            font-bold
            text-[var(--cor-azul)]
          "
        >
          <i className="fa-solid fa-coins" />
          +{pontos} pontos
        </span>

        <button
          type="button"
          onClick={() => onIniciar(id)}
          className="
            cursor-pointer
            rounded-full
            border-0
            bg-[var(--cor-azul)]
            px-[18px] py-[9px]
            [font-family:var(--fonte-titulo)]
            text-[13px]
            font-semibold
            text-[var(--cor-branco)]
            transition-[background,transform]
            duration-150 ease-out
            hover:-translate-y-[2px]
            hover:bg-[var(--cor-azul-escuro)]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[var(--cor-azul-escuro)]
          "
        >
          iniciar desafio
        </button>
      </div>
    </article>
  );
}
