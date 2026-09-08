import type { ReactNode } from "react";

type FaqItemProps = {
  pergunta: string;
  resposta: ReactNode;
  icone: string;
  aberto: boolean;
  aoClicar: () => void;
};

export default function FaqItem({
  pergunta,
  resposta,
  icone,
  aberto,
  aoClicar,
}: FaqItemProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-[20px]
        border
        bg-[var(--cor-branco)]
        transition-[border-color,box-shadow]
        duration-200
        ease-out

        ${
          aberto
            ? "border-[var(--cor-azul-bebe)] shadow-[0_18px_34px_-24px_rgba(32,111,116,0.35)]"
            : "border-[var(--cor-creme-destaque)]"
        }
      `}
    >
      <button
        type="button"
        onClick={aoClicar}
        aria-expanded={aberto}
        className="
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          gap-4
          border-0
          bg-transparent
          px-6
          py-5
          text-left
          [font-family:var(--fonte-titulo)]
          text-[16px]
          font-semibold
          text-[var(--cor-azul-escuro)]
        "
      >
        <p className="m-0 flex items-center gap-[14px]">
          <span
            className={`
              flex
              h-[38px]
              w-[38px]
              shrink-0
              items-center
              justify-center
              rounded-[12px]
              text-[15px]
              transition-[background,color]
              duration-200

              ${
                aberto
                  ? "bg-[var(--cor-azul)] text-[var(--cor-branco)]"
                  : "bg-[#E3F6F5] text-[var(--cor-azul)]"
              }
            `}
          >
            <i className={`fa-solid ${icone}`} />
          </span>

          {pergunta}
        </p>

        <span
          className={`
            flex
            h-[30px]
            w-[30px]
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[12px]
            transition-[transform,background,color]
            duration-[250ms]
            ease-out

            ${
              aberto
                ? "rotate-180 bg-[var(--cor-azul)] text-[var(--cor-branco)]"
                : "rotate-0 bg-[#F5FDFD] text-[var(--cor-azul)]"
            }
          `}
        >
          <i className="fa-solid fa-chevron-down" />
        </span>
      </button>

      <div
        className={`
          grid
          transition-[grid-template-rows]
          duration-300
          ease-out

          ${
            aberto
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              pb-6
              pl-[76px]
              pr-6
              text-[14.5px]
              font-medium
              leading-[1.7]
              text-[var(--cor-turquesa)]

              [&_p]:m-0

              [&_strong]:font-bold
              [&_strong]:text-[var(--cor-azul-escuro)]

              [&_ul]:mt-[10px]
              [&_ul]:mb-0
              [&_ul]:pl-[18px]

              [&_li]:mb-1
            "
          >
            {resposta}
          </div>
        </div>
      </div>
    </div>
  );
}