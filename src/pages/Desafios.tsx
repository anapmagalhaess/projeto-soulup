import { useEffect, useState, type FormEvent } from "react";
import Tag from "../components/Tag/Tag";
import ChallengeCard from "../components/ChallengeCard/ChallengeCard";
import { useNavigate, useParams } from "react-router-dom";

const desafios = [
    {
      id: "pet-recycling",
      categoria: "reciclagem",
      categoriaLabel: "reciclagem",
      dificuldade: "fácil" as const,
      titulo: "Coleta de garrafas PET",
      descricao:
        "Separe e envie a foto de pelo menos 5 garrafas PET descartadas corretamente em um coletor seletivo da sua casa ou bairro.",
      pontos: 5,
    },
    {
      id: "eco-walk",
      categoria: "mobilidade",
      categoriaLabel: "mobilidade",
      dificuldade: "médio" as const,
      titulo: "Caminhada ecológica",
      descricao:
        "Reduza as emissões de carbono! Faça um percurso a pé de pelo menos 4 km em um dia e envie a captura de tela do seu app de corrida ou mapas.",
      pontos: 20,
    },
    {
      id: "natural-light",
      categoria: "consumo",
      categoriaLabel: "consumo",
      dificuldade: "fácil" as const,
      titulo: "Luz natural no estudo",
      descricao:
        "Desligue as lâmpadas artificiais do seu quarto ou local de estudo por pelo menos 4 horas e aproveite a luz solar natural.",
      pontos: 5,
    },
    {
      id: "e-waste",
      categoria: "reciclagem",
      categoriaLabel: "reciclagem",
      dificuldade: "médio" as const,
      titulo: "Descarte de lixo eletrônico",
      descricao:
        "Leve pilhas, baterias, cabos ou aparelhos quebrados a um posto credenciado de e-lixo e envie uma foto do descarte sustentável.",
      pontos: 20,
    },
    {
      id: "energy-save",
      categoria: "consumo",
      categoriaLabel: "consumo",
      dificuldade: "difícil" as const,
      titulo: "Corte de 10% na conta",
      descricao:
        "Economize eletricidade de verdade! Envie a foto da sua fatura mostrando redução de pelo menos 10% no consumo (kWh) comparado ao mês passado.",
      pontos: 25,
    },
    {
      id: "bike-ride",
      categoria: "mobilidade",
      categoriaLabel: "mobilidade",
      dificuldade: "fácil" as const,
      titulo: "Pedalada sustentável",
      descricao:
        "Substitua o carro ou transporte público por uma pedalada de pelo menos 5 km para ir e voltar das suas tarefas diárias.",
      pontos: 10,
    },
    {
      id: "compostagem",
      categoria: "reciclagem",
      categoriaLabel: "reciclagem",
      dificuldade: "médio" as const,
      titulo: "Compostagem doméstica",
      descricao:
        "Separe seus resíduos orgânicos e monte uma composteira caseira. Envie uma foto mostrando o processo funcionando.",
      pontos: 15,
    },
    {
      id: "carona-solidaria",
      categoria: "mobilidade",
      categoriaLabel: "mobilidade",
      dificuldade: "médio" as const,
      titulo: "Carona solidária",
      descricao:
        "Compartilhe uma carona ou use transporte coletivo em vez de ir sozinho de carro. Envie um print do trajeto feito.",
      pontos: 15,
    },
    {
      id: "chuveiro-rapido",
      categoria: "consumo",
      categoriaLabel: "consumo",
      dificuldade: "fácil" as const,
      titulo: "Chuveiro rápido",
      descricao:
        "Reduza o tempo de banho para no máximo 5 minutos por 3 dias seguidos. Registre com um cronômetro ou timer do celular.",
      pontos: 8,
    },
    {
      id: "doacao-roupas",
      categoria: "doacao",
      categoriaLabel: "doação",
      dificuldade: "fácil" as const,
      titulo: "Doação de roupas",
      descricao:
        "Doe peças de roupa em bom estado para uma instituição ou brechó solidário. Envie uma foto no momento da doação.",
      pontos: 15,
    },
    {
      id: "doacao-alimentos",
      categoria: "doacao",
      categoriaLabel: "doação",
      dificuldade: "médio" as const,
      titulo: "Doação de alimentos",
      descricao:
        "Contribua com uma cesta básica ou alimentos não perecíveis para uma instituição de apoio. Envie o comprovante da doação.",
      pontos: 20,
    },
    {
      id: "doacao-sangue",
      categoria: "doacao",
      categoriaLabel: "doação",
      dificuldade: "difícil" as const,
      titulo: "Doação de sangue",
      descricao:
        "Realize uma doação de sangue em um banco de sangue credenciado e envie o comprovante da doação.",
      pontos: 40,
    },
];

export default function Desafios() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("all");
  const [desafioSelecionado, setDesafioSelecionado] = useState("");
  const [nomeArquivo, setNomeArquivo] = useState("");
  const [statusAnalise, setStatusAnalise] = useState<"idle" | "loading" | "success">("idle");
  const [progresso, setProgresso] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [arquivoKey, setArquivoKey] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const pontosPorDesafio: Record<string, number> = {
    "pet-recycling": 5,
    "eco-walk": 20,
    "natural-light": 5,
    "e-waste": 20,
    "energy-save": 25,
    "bike-ride": 10,
    "compostagem": 15,
    "carona-solidaria": 15,
    "chuveiro-rapido": 8,
    "doacao-roupas": 15,
    "doacao-alimentos": 20,
    "doacao-sangue": 40,
  };

  const pontosGanhos = pontosPorDesafio[desafioSelecionado] ?? 0;



  useEffect(() => {
    if (!id) return;

    const desafioEncontrado = desafios.find(
      (desafio) => desafio.id === id,
    );

    if (!desafioEncontrado) return;

    const timer = window.setTimeout(() => {
      setDesafioSelecionado(desafioEncontrado.id);
      setCategoriaAtiva(desafioEncontrado.categoria);

      document
        .getElementById("simulator")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (statusAnalise !== "loading") return;

    const intervalo = window.setInterval(() => {
      setProgresso((atual) => Math.min(atual + 5, 95));
    }, 120);

    const finalizar = window.setTimeout(() => {
      window.clearInterval(intervalo);
      setProgresso(100);
      setStatusAnalise("success");
      setModalAberto(true);
    }, 2600);

    return () => {
      window.clearInterval(intervalo);
      window.clearTimeout(finalizar);
    };
  }, [statusAnalise]);

  const enviarParaAnalise = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!desafioSelecionado || !nomeArquivo) return;

    setProgresso(0);
    setStatusAnalise("loading");
  };

  const resetarSimulador = () => {
    setDesafioSelecionado("");
    setNomeArquivo("");
    setStatusAnalise("idle");
    setProgresso(0);
    setModalAberto(false);
    setArquivoKey((atual) => atual + 1);
    navigate("/pagina-desafio");
  };

  const mostrarCard = (categoria: string) =>
    categoriaAtiva === "all" || categoriaAtiva === categoria;

  const irParaSimulador = (idDesafio: string) => {
    navigate(`/pagina-desafio/${idDesafio}`);
    setDesafioSelecionado(idDesafio);

    window.setTimeout(() => {
      document
        .getElementById("simulator")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const wrapClass = "mx-auto w-full max-w-[1180px] px-[30px] max-[768px]:px-6 max-[480px]:px-5";

  const filterBase = `
    inline-flex items-center gap-2 rounded-full border-[1.5px]
    border-x bg-[var(--cor-branco)]
    px-[22px] py-[11px]
    [font-family:var(--fonte-titulo)] text-[13.5px] font-semibold
    max-[600px]:px-4 max-[600px]:py-[10px]
    max-[480px]:text-[12.5px]
    text-[var(--cor-azul-escuro)]
    cursor-pointer
    transition-[background,color,transform,border-color] duration-150 ease-out
    hover:-translate-y-[2px] hover:border-[var(--cor-azul)]
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[var(--cor-azul-escuro)]
  `;

  return (
    <main
      className="
        m-0 flex min-h-screen w-full max-w-none flex-1 flex-col gap-10
        overflow-x-hidden bg-[var(--cor-creme)] pb-[60px] p-0
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
          pt-[72px] pb-16 text-center
          max-[768px]:pt-[56px] max-[768px]:pb-[52px]
          max-[480px]:pt-[44px] max-[480px]:pb-[42px]
        "
      >
        <div
          className="
            pointer-events-none absolute left-[-60px] top-[-60px]
            h-[260px] w-[260px] rounded-full
            bg-[rgba(65,198,196,0.28)]
            opacity-50 blur-[40px]
          "
        />

        <div
          className="
            pointer-events-none absolute bottom-[-50px] right-[5%]
            h-[200px] w-[200px] rounded-full
            bg-[rgba(153,209,213,0.4)]
            opacity-50 blur-[40px]
          "
        />

        <div className="relative z-[2] mx-auto w-full max-w-[750px] px-[30px] max-[768px]:px-6 max-[480px]:px-5">
          <div className="mb-5 flex justify-center">
            <Tag texto="bora se desafiar?" />
          </div>

          <h1
            className="
              m-0 mb-[18px]
              [font-family:var(--fonte-titulo)]
              text-[clamp(30px,4vw,46px)] font-semibold
              max-[480px]:text-[clamp(28px,9vw,38px)]
              leading-[1.2] tracking-[-0.01em]
              text-[var(--cor-azul-escuro)]
            "
          >
            desafie-se diariamente.
            <br />
            ganhe pontos{" "}
            <span
              className="
                relative whitespace-nowrap font-bold
                before:absolute before:bottom-[6px]
                before:left-[-6px] before:right-[-6px]
                before:z-[1] before:h-[0.42em]
                before:rotate-[-1.5deg]
                before:rounded-[3px]
                before:bg-x
                before:content-['']
              "
            >
              <span className="relative z-[2] text-[var(--cor-azul-escuro)]">
                reais
              </span>
            </span>{" "}
            pelo planeta.
          </h1>

          <p
            className="
              mx-auto m-0 max-w-[62ch]
              text-[16.5px] font-medium leading-[1.65]
              max-[480px]:text-[14.5px]
              text-[var(--cor-turquesa)]
              [&_strong]:text-[var(--cor-azul-escuro)]
            "
          >
            Nosso ecossistema transforma atitudes sustentáveis em economia no
            mundo real. Escolha um desafio, comprove o impacto enviando uma foto
            para a nossa IA e acumule <strong>pontos soul</strong> para trocar
            por descontos e prêmios incríveis!
          </p>
        </div>
      </section>

      {/* ==================== FILTROS ==================== */}
      <section className="relative w-full pt-[30px] pb-[10px] max-[480px]:pt-6">
        <div className={wrapClass}>
          <div className="flex flex-wrap justify-center gap-3 max-[480px]:gap-2">
            <button
              type="button"
              data-category="all"
              onClick={() => setCategoriaAtiva("all")}
              className={`
                ${filterBase}
                ${
                  categoriaAtiva === "all"
                    ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] shadow-[0_4px_12px_rgba(19,150,159,0.25)]"
                    : ""
                }
              `}
            >
              <i className="fa-solid fa-leaf" /> todos
            </button>

            <button
              type="button"
              data-category="mobilidade"
              onClick={() => setCategoriaAtiva("mobilidade")}
              className={`${filterBase} ${categoriaAtiva === "mobilidade" ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] shadow-[0_4px_12px_rgba(19,150,159,0.25)]" : ""}`}
            >
              <i className="fa-solid fa-person-hiking" /> mobilidade
            </button>

            <button
              type="button"
              data-category="reciclagem"
              onClick={() => setCategoriaAtiva("reciclagem")}
              className={`${filterBase} ${categoriaAtiva === "reciclagem" ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] shadow-[0_4px_12px_rgba(19,150,159,0.25)]" : ""}`}
            >
              <i className="fa-solid fa-recycle" /> reciclagem
            </button>

            <button
              type="button"
              data-category="consumo"
              onClick={() => setCategoriaAtiva("consumo")}
              className={`${filterBase} ${categoriaAtiva === "consumo" ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] shadow-[0_4px_12px_rgba(19,150,159,0.25)]" : ""}`}
            >
              <i className="fa-solid fa-bolt" /> consumo consciente
            </button>

            <button
              type="button"
              data-category="doacao"
              onClick={() => setCategoriaAtiva("doacao")}
              className={`${filterBase} ${categoriaAtiva === "doacao" ? "border-[var(--cor-azul)] bg-[var(--cor-azul)] shadow-[0_4px_12px_rgba(19,150,159,0.25)]" : ""}`}
            >
              <i className="fa-solid fa-hand-holding-heart" /> doação
            </button>
          </div>
        </div>
      </section>

      {/* ==================== CARDS DE DESAFIO ==================== */}
      <section className="relative w-full pt-5 pb-[60px] max-[480px]:pb-[48px]">
        <div className={wrapClass}>
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[620px]:grid-cols-1 max-[480px]:gap-5">
            {desafios
              .filter((desafio) => mostrarCard(desafio.categoria))
              .map((desafio) => (
                <ChallengeCard
                  key={desafio.id}
                  id={desafio.id}
                  categoria={desafio.categoria}
                  categoriaLabel={desafio.categoriaLabel}
                  dificuldade={desafio.dificuldade}
                  titulo={desafio.titulo}
                  descricao={desafio.descricao}
                  pontos={desafio.pontos}
                  onIniciar={irParaSimulador}
                />
              ))}
          </div>
        </div>
      </section>

      {/* ==================== SIMULADOR IA ==================== */}
      <section id="simulator" className="relative w-full pt-5 pb-20 max-[768px]:pb-16 max-[480px]:pb-14">
        <div className={wrapClass}>
          <div className="mx-auto mb-10 max-w-[680px] text-center max-[480px]:mb-8">
            <div className="mb-5 flex justify-center">
              <Tag texto="inteligência artificial auditora" />
            </div>

            <h2
              className="
                m-0 mb-3 [font-family:var(--fonte-titulo)]
                text-[clamp(26px,3vw,36px)] font-semibold
                max-[480px]:text-[clamp(24px,8vw,32px)]
                text-[var(--cor-azul-escuro)]
              "
            >
              Simulador de Validação por IA
            </h2>

            <p className="m-0 text-[15px] font-medium leading-[1.6] text-[var(--cor-turquesa)] max-[480px]:text-[14px]">
              Depois de realizar seu desafio no mundo físico, você registra uma
              foto e envia no app. Experimente o simulador e veja como a IA da
              Soul Up valida sua imagem automaticamente, em tempo real.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1050px] grid-cols-2 gap-[30px] max-[850px]:grid-cols-1 max-[480px]:gap-5">
            <form
              id="simulator-form"
              onSubmit={enviarParaAnalise}
              className="
                flex flex-col gap-[22px]
                rounded-[24px] border border-[var(--cor-creme-destaque)]
                bg-[var(--cor-branco)] px-7 py-8
                shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                max-[480px]:rounded-[20px]
                max-[480px]:px-5
                max-[480px]:py-6
                max-[480px]:gap-[18px]
              "
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="challenge-select"
                  className="[font-family:var(--fonte-titulo)] text-[13.5px] font-semibold text-[var(--cor-azul-escuro)]"
                >
                  1. Escolha o desafio realizado
                </label>

                <select
                  id="challenge-select"
                  required
                  value={desafioSelecionado}
                  onChange={(event) => {
                      const novoId = event.target.value;

                      setDesafioSelecionado(novoId);

                      const desafio = desafios.find(
                        (item) => item.id === novoId,
                      );

                      if (desafio) {
                        setCategoriaAtiva(desafio.categoria);
                      }

                      navigate(`/pagina-desafio/${novoId}`);
                    }}
                  disabled={statusAnalise === "loading"}
                  className="
                    rounded-[12px] border-[1.5px] border-[var(--cor-azul-bebe)]
                    bg-[var(--cor-creme)] px-4 py-3
                    [font-family:var(--fonte-texto)] text-[14px]
                    max-[480px]:text-[13px]
                    text-[var(--cor-azul-escuro)] outline-none
                    transition-[border-color] duration-150
                    focus:border-[var(--cor-azul)] disabled:cursor-not-allowed disabled:opacity-60
                  "
                >
                  <option value="" disabled>-- Selecione o desafio --</option>
                  <option value="pet-recycling">Coleta de garrafas PET (+5 pontos)</option>
                  <option value="eco-walk">Caminhada ecológica (+20 pontos)</option>
                  <option value="natural-light">Luz natural no estudo (+5 pontos)</option>
                  <option value="e-waste">Descarte de lixo eletrônico (+20 pontos)</option>
                  <option value="energy-save">Corte de 10% na conta (+25 pontos)</option>
                  <option value="bike-ride">Pedalada sustentável (+10 pontos)</option>
                  <option value="compostagem">Compostagem doméstica (+15 pontos)</option>
                  <option value="carona-solidaria">Carona solidária (+15 pontos)</option>
                  <option value="chuveiro-rapido">Chuveiro rápido (+8 pontos)</option>
                  <option value="doacao-roupas">Doação de roupas (+15 pontos)</option>
                  <option value="doacao-alimentos">Doação de alimentos (+20 pontos)</option>
                  <option value="doacao-sangue">Doação de sangue (+40 pontos)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="[font-family:var(--fonte-titulo)] text-[13.5px] font-semibold text-[var(--cor-azul-escuro)]">
                  2. Carregue a imagem de comprovação
                </label>

                <div className="relative">
                  <input
                    key={arquivoKey}
                    className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                    type="file"
                    id="action-file"
                    accept="image/*"
                    required
                    disabled={statusAnalise === "loading"}
                    onChange={(event) => {
                      const arquivo = event.target.files?.[0];
                      setNomeArquivo(arquivo?.name ?? "");
                    }}
                  />

                  <label
                    htmlFor="action-file"
                    className="
                      flex flex-col items-center justify-center gap-[6px]
                      rounded-[16px] border-2 border-dashed border-[var(--cor-azul-bebe)]
                      bg-[#F5FDFD] px-4 py-7 text-center
                      text-[13.5px] font-semibold
                      max-[480px]:px-3
                      max-[480px]:py-6
                      max-[480px]:text-[12.5px] text-[var(--cor-turquesa)]
                      transition-[border-color,background] duration-150
                      [&_i]:mb-1 [&_i]:text-[24px] [&_i]:text-[var(--cor-azul)]
                      [&_span]:text-[11.5px] [&_span]:font-medium
                    "
                  >
                    <i className={nomeArquivo ? "fa-solid fa-file-image" : "fa-solid fa-cloud-arrow-up"} />
                    {nomeArquivo || "Tire uma foto ou envie uma imagem"}
                    <span>
                      {nomeArquivo ? "imagem selecionada" : "(Formatos aceitos: JPG, PNG)"}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={statusAnalise === "loading"}
                className="
                  inline-flex cursor-pointer items-center justify-center gap-2
                  rounded-[14px] border-0 bg-[var(--cor-coral)]
                  px-5 py-[15px] [font-family:var(--fonte-titulo)]
                  text-[15px] font-semibold text-[var(--cor-branco)]
                  shadow-[0_5px_0_var(--cor-coral-escuro)]
                  transition-[transform,box-shadow,opacity] duration-[120ms]
                  hover:-translate-y-[2px]
                  hover:shadow-[0_7px_0_var(--cor-coral-escuro)]
                  disabled:cursor-not-allowed disabled:opacity-60
                  disabled:transform-none disabled:shadow-none
                  max-[480px]:w-full
                  max-[480px]:px-4
                  max-[480px]:text-[14px]
                "
              >
                <i className={statusAnalise === "loading" ? "fa-solid fa-spinner fa-spin" : "fa-solid fa-circle-check"} />
                {statusAnalise === "loading" ? "Analisando imagem..." : "Validar Atitude Verde"}
              </button>
            </form>

            <div
              className="
                flex min-h-[340px] flex-col rounded-[24px]
                bg-[#0F2A2C] p-6 text-[#CFEFEA]
                max-[480px]:min-h-[300px]
                max-[480px]:rounded-[20px]
                max-[480px]:p-5
                [font-family:'JetBrains_Mono',monospace]
                shadow-[0_10px_30px_rgba(15,42,44,0.3)]
              "
            >
              <div className="mb-[18px] border-b border-[rgba(255,255,255,0.12)] pb-3 text-[11px] font-medium tracking-[0.04em] text-[var(--cor-ciano)] max-[480px]:text-[10px]">
                SOULUP VISION AI v1.0.4 — TERMINAL AUDITOR
              </div>

              <div className="flex flex-1 flex-col justify-center">
                {statusAnalise === "idle" && (
                  <div>
                    <p className="m-0 mb-2 text-[12.5px] font-medium leading-[1.8] text-[var(--cor-ciano)]">
                      &gt; STATUS: AGUARDANDO ENVIO...
                    </p>
                    <p className="m-0 mb-2 text-[12.5px] leading-[1.8] text-[rgba(207,239,234,0.75)]">
                      &gt; Selecione um desafio ao lado e envie a imagem de comprovação.
                    </p>
                    <p className="m-0 mb-2 text-[12.5px] leading-[1.8] text-[rgba(207,239,234,0.75)]">
                      &gt; A inteligência artificial vai decodificar os padrões visuais e creditar seus pontos Soul instantaneamente.
                    </p>
                  </div>
                )}

                {statusAnalise === "loading" && (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-[rgba(65,198,196,0.25)] border-t-[var(--cor-ciano)]" />

                    <span className="min-h-9 text-[12px] text-[var(--cor-ciano)]">
                      {progresso < 35
                        ? "Iniciando análise de imagem..."
                        : progresso < 70
                          ? "Identificando evidências sustentáveis..."
                          : "Validando impacto ambiental..."}
                    </span>

                    <div className="h-[6px] w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.12)]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--cor-ciano),var(--cor-azul-bebe))] transition-[width] duration-100"
                        style={{ width: `${progresso}%` }}
                      />
                    </div>

                    <p className="m-0 text-[11px] text-[rgba(207,239,234,0.65)]">
                      {progresso}% concluído
                    </p>
                  </div>
                )}

                {statusAnalise === "success" && (
                  <div className="flex flex-col items-center gap-[10px] text-center">
                    <i className="fa-solid fa-circle-check mb-1 text-[38px] text-[var(--cor-ciano)]" />

                    <h4 className="m-0 [font-family:var(--fonte-titulo)] text-[16px] font-semibold text-[var(--cor-branco)]">
                      Análise concluída
                    </h4>

                    <p className="m-0 max-w-[32ch] text-[12.5px] leading-[1.5] text-[rgba(255,255,255,0.75)]">
                      Atitude aprovada. Abrindo resultado...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MODAL DE SUCESSO ==================== */}
      {modalAberto && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-[rgba(15,42,44,0.42)]
            px-5
            backdrop-blur-[3px]
            max-[480px]:px-4
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-modal-sucesso"
        >
          <div
            className="
              relative
              flex w-full max-w-[760px]
              items-center justify-between
              gap-8
              overflow-hidden
              rounded-[24px]
              border border-[var(--cor-azul-bebe)]
              bg-[var(--cor-branco)]
              px-9 py-8
              shadow-[0_26px_70px_rgba(15,42,44,0.24)]
              max-[680px]:flex-col
              max-[680px]:items-stretch
              max-[680px]:gap-5
              max-[680px]:text-center
              max-[480px]:rounded-[20px]
              max-[480px]:px-5
              max-[480px]:py-6
            "
          >
            <div
              className="
                pointer-events-none
                absolute -right-[55px] -top-[70px]
                h-[190px] w-[190px]
                rounded-full
                bg-[var(--cor-ciano)]
                opacity-20
              "
            />

            <div
              className="
                relative z-[1]
                flex min-w-0 flex-1 items-center gap-5
                max-[680px]:flex-col
              "
            >
              <div
                className="
                  flex h-[68px] w-[68px]
                  shrink-0 items-center justify-center
                  max-[480px]:h-[58px]
                  max-[480px]:w-[58px]
                  rounded-[20px]
                  bg-[var(--cor-azul-bebe)]
                  text-[32px]
                  text-[var(--cor-azul)]
                  shadow-[inset_0_0_0_1px_rgba(29,139,90,0.10)]
                "
              >
                <i className="fa-solid fa-circle-check" />
              </div>

              <div className="min-w-0">
                <p
                  className="
                    m-0 mb-1
                    [font-family:var(--fonte-titulo)]
                    text-[11.5px] font-bold
                    uppercase tracking-[0.08em]
                    text-[var(--cor-azul)]
                  "
                >
                  ação aprovada
                </p>

                <h3
                  id="titulo-modal-sucesso"
                  className="
                    m-0
                    [font-family:var(--fonte-titulo)]
                    text-[23px] font-semibold
                    max-[480px]:text-[20px]
                    leading-[1.2]
                    text-[var(--cor-azul-escuro)]
                  "
                >
                  atitude verde validada com sucesso!
                </h3>

                <p
                  className="
                    m-0 mt-2
                    max-w-[48ch]
                    text-[13.5px] font-medium
                    leading-[1.55]
                    text-[var(--cor-turquesa)]
                  "
                >
                  sua comprovação foi aprovada e você ganhou{" "}
                  <strong className="font-bold text-[var(--cor-azul-escuro)]">
                    +{pontosGanhos} pontos soul
                  </strong>
                  .
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={resetarSimulador}
              className="
                relative z-[1]
                inline-flex shrink-0
                cursor-pointer items-center justify-center
                gap-2
                rounded-[14px]
                border-0
                bg-[var(--cor-coral)]
                px-7 py-[13px]
                [font-family:var(--fonte-titulo)]
                text-[14px] font-semibold
                text-white
                shadow-[0_5px_0_var(--cor-coral-escuro)]
                transition-[transform,box-shadow,background]
                duration-[120ms]
                hover:-translate-y-[2px]
                hover:bg-[var(--cor-coral-escuro)]
                hover:shadow-[0_7px_0_var(--cor-coral-escuro)]
                active:translate-y-[2px]
                active:shadow-[0_2px_0_var(--cor-coral-escuro)]
                max-[680px]:w-full
                max-[480px]:px-5
              "
            >
              <i className="fa-solid fa-check" />
              confirmar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
