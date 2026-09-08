export default function Footer() {
  return (
    <footer
      className="
        relative
        left-1/2
        w-screen
        max-w-none
        -translate-x-1/2

        box-border
        m-0
        mt-auto
        overflow-x-hidden

        border-t
        border-[var(--cor-creme-destaque)]
        bg-[var(--cor-creme)]

        px-[54px]
        py-[32px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1180px]
          flex-wrap
          items-center
          justify-between
          gap-[16px]
        "
      >
        {/* Marca */}
        <p
          className="
            m-0
            inline-flex
            items-center
            gap-[8px]

            [font-family:var(--fonte-titulo)]
            text-[17px]
            font-semibold
            text-[var(--cor-azul-escuro)]
          "
        >
          <strong>soul</strong>

          <span
            className="
              inline-flex
              h-[26px]
              w-[26px]
              items-center
              justify-center

              rounded-[58%_42%_63%_37%/45%_58%_42%_55%]

              bg-[var(--cor-ciano-2)]

              [font-family:var(--fonte-titulo)]
              text-[9.5px]
              font-semibold
              text-[var(--cor-branco)]
            "
          >
            <strong>UP</strong>
          </span>
        </p>

        {/* Copyright */}
        <p
          className="
            m-0

            [font-family:var(--fonte-texto)]
            text-[12.5px]
            font-semibold
            text-[var(--cor-turquesa)]
          "
        >
          <strong>soul up · atitude vira recompensa · © 2026</strong>
        </p>
      </div>
    </footer>
  );
}