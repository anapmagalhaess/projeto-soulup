import Tag from "../components/Tag/Tag";
import TeamCard from "../components/TeamCard/TeamCard";

export default function QuemSomos() {
  const wrapClass =
    "mx-auto w-full max-w-[1180px] px-10 max-[768px]:px-6 max-[480px]:px-5";

  const integrantes = [
    {
      nome: "Ana Clara Pereira de Magalhães",
      rm: "560871",
      turma: "1TDSPF",
      foto: "https://github.com/anapmagalhaess.png",
      github: "https://github.com/anapmagalhaess",
      linkedin: "https://www.linkedin.com/in/anaclmagalhaes/",
    },
    {
      nome: "Luis Felipe Fernandes Esteves",
      rm: "569064",
      turma: "1TDSPF",
      foto: "https://github.com/dev-luisfernandes.png",
      github: "https://github.com/dev-luisfernandes",
      linkedin: "https://www.linkedin.com/in/luis-f-b2a3983b3/",
    },
    {
      nome: "Larissa Koprowski Ferreira",
      rm: "572983",
      turma: "1TDSPF",
      foto: "https://github.com/lkoprowskif.png",
      github: "https://github.com/lkoprowskif",
      linkedin: "https://www.linkedin.com/in/larissa-koprowski-111b3a357/",
    },
    {
      nome: "Pedro Henrique De Lima Reis",
      rm: "569178",
      turma: "1TDSPF",
      foto: "https://github.com/pedrolimeisdev.png",
      github: "https://github.com/pedrolimeisdev",
      linkedin: "https://www.linkedin.com/in/pedrolimeis/",
    },
  ];

  return (
    <main
      className="
        m-0 min-h-screen w-full max-w-none
        overflow-x-hidden
        bg-[var(--cor-creme)]
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
          max-[768px]:pt-[58px]
          max-[768px]:pb-[56px]
          max-[480px]:pt-[44px]
          max-[480px]:pb-[44px]
        "
      >
        <div
          className="
            pointer-events-none
            absolute left-[-60px] top-[-100px]
            h-[260px] w-[260px]
            rounded-full
            bg-[rgba(65,198,196,0.28)]
            max-[480px]:h-[190px]
            max-[480px]:w-[190px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute bottom-[-70px] right-[6%]
            h-[180px] w-[180px]
            rounded-full
            bg-[rgba(153,209,213,0.4)]
            max-[480px]:h-[130px]
            max-[480px]:w-[130px]
          "
        />

        <div className="relative z-[2] mx-auto w-full max-w-[680px] px-10 max-[768px]:px-6 max-[480px]:px-5">
          <div className="mb-5 flex justify-center">
            <Tag texto="desenvolvedores" />
          </div>

          <h1
            className="
              m-0 mb-4
              [font-family:var(--fonte-titulo)]
              text-[clamp(32px,4.2vw,46px)]
              font-semibold leading-[1.18]
              tracking-[-0.01em]
              text-[var(--cor-azul-escuro)]
              max-[480px]:text-[clamp(28px,9vw,38px)]
            "
          >
            quem somos
          </h1>

          <p
            className="
              mx-auto m-0 max-w-[52ch]
              text-[16px] font-medium
              leading-[1.65]
              text-[var(--cor-turquesa)]
              max-[480px]:text-[14.5px]
            "
          >
            o time por trás da solução gamificada para a soul up — construindo
            tecnologia pra transformar atitude sustentável em recompensa de
            verdade.
          </p>
        </div>
      </section>

      {/* ==================== TIME ==================== */}
      <section className="relative w-full pt-16 pb-24 max-[768px]:pt-12 max-[768px]:pb-16 max-[480px]:pt-10 max-[480px]:pb-14">
        <div className={wrapClass}>
          <div
            className="
              mx-auto grid max-w-[860px]
              grid-cols-2 gap-8
              max-[768px]:gap-6
              max-[700px]:grid-cols-1
              max-[480px]:gap-5
            "
          >
            {integrantes.map((integrante) => (
              <TeamCard
                key={integrante.rm}
                nome={integrante.nome}
                rm={integrante.rm}
                turma={integrante.turma}
                foto={integrante.foto}
                github={integrante.github}
                linkedin={integrante.linkedin}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
