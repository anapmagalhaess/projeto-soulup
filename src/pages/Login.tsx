import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type CadastroForm = {
  pais: string;
  documento: string;
  nome: string;
  username: string;
  nascimento: string;
  celular: string;
  email: string;
  termos: boolean;
};

export default function Login() {
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalMensagem, setModalMensagem] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CadastroForm>({
    defaultValues: {
      pais: "",
      documento: "",
      nome: "",
      username: "",
      nascimento: "",
      celular: "",
      email: "",
      termos: false,
    },
  });

  useEffect(() => {
    if (!modalAberto) return;

    const timer = window.setTimeout(() => {
      setModalAberto(false);
      navigate("/");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [modalAberto, navigate]);

  const cadastrarUsuario = (dados: CadastroForm) => {
    sessionStorage.setItem("usuarioLogado", "true");
    sessionStorage.setItem("nomeUsuario", dados.nome);

    const usernameFormatado = dados.username.startsWith("@")
      ? dados.username
      : `@${dados.username}`;

    sessionStorage.setItem("userUsuario", usernameFormatado);

    // Atualiza componentes que permanecem montados, como a Navbar/Layout.
    window.dispatchEvent(new Event("auth-change"));

    setModalTitulo("Cadastro realizado!");
    setModalMensagem(
      "Sua conta Soul Up foi criada com sucesso. Você será redirecionado para o início em instantes.",
    );

    setModalAberto(true);
    reset();
  };

  const fieldClass = `
    flex flex-col gap-[6px]
  `;

  const labelClass = `
    text-[12.5px] font-bold
    tracking-[0.01em]
    text-[#0A8F6C]
  `;

  const inputClass = `
    w-full appearance-none
    rounded-[16px]
    border-2 border-[var(--cor-creme-destaque)]
    bg-[var(--cor-branco)]
    px-4 py-[10px]
    text-[14.5px]
    outline-none
    transition-[border-color,box-shadow,transform]
    duration-150 ease-out
    placeholder:text-[#A9BDB5]
    focus:border-[#9FDE35]
    focus:shadow-[0_0_0_4px_rgba(159,222,53,0.25)]
  `;

  const errorClass = `
    text-[12px] font-semibold
    text-[var(--cor-coral-escuro)]
  `;

  return (
    <>
      <main
        className="
          h-[calc(100dvh-145px)] min-h-0 w-full
          overflow-hidden
          bg-[var(--cor-creme)]
          [font-family:'Plus_Jakarta_Sans',sans-serif]
          antialiased
          max-[950px]:h-auto
          max-[950px]:min-h-[calc(100dvh-75px)]
          max-[950px]:overflow-visible
        "
      >
        <div
          className="
            grid h-full min-h-0
            grid-cols-[minmax(340px,43%)_1fr]
            max-[950px]:h-auto
            max-[950px]:grid-cols-1
          "
        >
          {/* ==================== PAINEL ESQUERDO ==================== */}
          <section
            className="
              relative flex min-h-0 flex-col
              overflow-hidden
              bg-[var(--cor-creme)]
              px-[48px] py-[26px]
              max-[950px]:overflow-visible
              max-[700px]:px-6
            "
          >
            <div className="my-auto w-full">
              <div className="mb-4">
                <span
                  className="
                    mb-[14px] inline-flex items-center gap-[6px]
                    rounded-full
                    bg-[#FFE9E4]
                    px-3 py-[5px]
                    [font-family:var(--fonte-titulo)]
                    text-[12.5px] font-semibold
                    tracking-[0.02em]
                    text-[var(--cor-coral-escuro)]
                  "
                >
                  ✦ cadastro rapidinho
                </span>

                <h1
                  className="
                    m-0 mb-3
                    [font-family:var(--fonte-titulo)]
                    text-[30px] font-semibold
                    leading-[1.14]
                    tracking-[-0.01em]
                    text-[var(--cor-azul-escuro)]
                  "
                >
                  bora criar sua
                  <br />
                  conta soul up?
                </h1>

                <p
                  className="
                    m-0 max-w-[42ch]
                    text-[13.5px] leading-[1.5]
                    text-[#5C7A70]
                  "
                >
                  2 minutos e você já pode começar a trocar atitude sustentável
                  por recompensa de verdade.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(cadastrarUsuario)}
                noValidate
                className="mt-4 flex flex-col gap-[10px]"
              >
                <div className={fieldClass}>
                  <label htmlFor="pais" className={labelClass}>
                    País
                    <span className="ml-[5px] text-[brown]">*</span>
                  </label>

                  <select
                    id="pais"
                    className={`${inputClass} pr-10`}
                    {...register("pais", {
                      required: "Selecione um país.",
                    })}
                  >
                    <option value="">Selecione</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Outro">Outro</option>
                  </select>

                  {errors.pais && (
                    <span className={errorClass}>{errors.pais.message}</span>
                  )}
                </div>

                <div className={fieldClass}>
                  <label htmlFor="documento" className={labelClass}>
                    Documento
                    <span className="ml-[5px] text-[brown]">*</span>
                  </label>

                  <input
                    id="documento"
                    type="text"
                    placeholder="CPF ou documento de identificação"
                    className={inputClass}
                    {...register("documento", {
                      required: "Informe seu documento.",
                      minLength: {
                        value: 8,
                        message:
                          "O documento deve possuir pelo menos 8 caracteres.",
                      },
                      maxLength: {
                        value: 15,
                        message:
                          "O documento deve possuir no máximo 15 caracteres.",
                      },
                    })}
                  />

                  {errors.documento && (
                    <span className={errorClass}>
                      {errors.documento.message}
                    </span>
                  )}
                </div>

                <div className={fieldClass}>
                  <label htmlFor="nome" className={labelClass}>
                    Nome completo
                    <span className="ml-[5px] text-[brown]">*</span>
                  </label>

                  <input
                    id="nome"
                    type="text"
                    placeholder="Como podemos te chamar"
                    className={inputClass}
                    {...register("nome", {
                      required: "Informe seu nome completo.",
                      minLength: {
                        value: 2,
                        message:
                          "O nome deve possuir pelo menos 2 caracteres.",
                      },
                      maxLength: {
                        value: 120,
                        message:
                          "O nome deve possuir no máximo 120 caracteres.",
                      },
                    })}
                  />

                  {errors.nome && (
                    <span className={errorClass}>{errors.nome.message}</span>
                  )}
                </div>

                <div className={fieldClass}>
                  <label htmlFor="username" className={labelClass}>
                    Nome de Usuário
                    <span className="ml-[5px] text-[brown]">*</span>
                  </label>

                  <input
                    id="username"
                    type="text"
                    placeholder="@Usuário"
                    className={inputClass}
                    {...register("username", {
                      required: "Informe um nome de usuário.",
                      minLength: {
                        value: 3,
                        message:
                          "O nome de usuário deve possuir pelo menos 3 caracteres.",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "O nome de usuário deve possuir no máximo 30 caracteres.",
                      },
                    })}
                  />

                  {errors.username && (
                    <span className={errorClass}>
                      {errors.username.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-[10px] max-[620px]:grid-cols-1">
                  <div className={fieldClass}>
                    <label htmlFor="nascimento" className={labelClass}>
                      Data de nascimento
                      <span className="ml-[5px] text-[brown]">*</span>
                    </label>

                    <input
                      id="nascimento"
                      type="date"
                      className={inputClass}
                      {...register("nascimento", {
                        required: "Informe sua data de nascimento.",
                        validate: (valor) => {
                          const hoje = new Date();
                          const nascimento = new Date(`${valor}T00:00:00`);

                          let idade =
                            hoje.getFullYear() - nascimento.getFullYear();

                          const diferencaMes =
                            hoje.getMonth() - nascimento.getMonth();

                          if (
                            diferencaMes < 0 ||
                            (diferencaMes === 0 &&
                              hoje.getDate() < nascimento.getDate())
                          ) {
                            idade--;
                          }

                          return (
                            idade >= 14 ||
                            "A idade mínima para acessar o aplicativo é 14 anos."
                          );
                        },
                      })}
                    />

                    {errors.nascimento && (
                      <span className={errorClass}>
                        {errors.nascimento.message}
                      </span>
                    )}
                  </div>

                  <div className={fieldClass}>
                    <label htmlFor="celular" className={labelClass}>
                      Celular
                      <span className="ml-[5px] text-[brown]">*</span>
                    </label>

                    <input
                      id="celular"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className={inputClass}
                      {...register("celular", {
                        required: "Informe seu celular.",
                        minLength: {
                          value: 11,
                          message:
                            "O celular deve possuir pelo menos 11 caracteres.",
                        },
                        maxLength: {
                          value: 15,
                          message:
                            "O celular deve possuir no máximo 15 caracteres.",
                        },
                      })}
                    />

                    {errors.celular && (
                      <span className={errorClass}>
                        {errors.celular.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className={fieldClass}>
                  <label htmlFor="email" className={labelClass}>
                    E-mail
                    <span className="ml-[5px] text-[brown]">*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="seuemail@email.com"
                    className={inputClass}
                    {...register("email", {
                      required: "Informe seu e-mail.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Digite um e-mail válido.",
                      },
                      maxLength: {
                        value: 100,
                        message:
                          "O e-mail deve possuir no máximo 100 caracteres.",
                      },
                    })}
                  />

                  {errors.email && (
                    <span className={errorClass}>{errors.email.message}</span>
                  )}
                </div>

                <label
                  className="
                    mt-1 flex items-start gap-[10px]
                    text-[13px] leading-[1.55]
                    text-[#5C7A70]
                  "
                >
                  <input
                    type="checkbox"
                    className="
                      relative mt-[1px]
                      h-[19px] w-[19px] min-w-[19px]
                      cursor-pointer appearance-none
                      rounded-[7px]
                      border-2 border-[var(--cor-creme-destaque)]
                      bg-[var(--cor-branco)]
                      transition-[background,border-color]
                      duration-150
                      checked:border-[var(--cor-coral)]
                      checked:bg-[var(--cor-coral)]
                      after:absolute
                      after:left-[5.5px]
                      after:top-[2px]
                      after:hidden
                      after:h-[9px]
                      after:w-[5px]
                      after:rotate-45
                      after:border-b-[2.2px]
                      after:border-r-[2.2px]
                      after:border-[var(--cor-branco)]
                      after:content-['']
                      checked:after:block
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[var(--cor-coral-escuro)]
                    "
                    {...register("termos", {
                      required:
                        "Você precisa aceitar os termos e condições.",
                    })}
                  />

                  <span>
                    Li e aceito os{" "}
                    <a
                      href="#"
                      className="
                        font-bold text-[#0A8F6C]
                        no-underline
                        hover:underline
                      "
                    >
                      termos e condições
                    </a>{" "}
                    do Programa Soul Up.
                  </span>
                </label>

                {errors.termos && (
                  <span className={errorClass}>{errors.termos.message}</span>
                )}

                <button
                  type="submit"
                  className="
                    mt-2 w-full cursor-pointer
                    rounded-[16px]
                    border-0
                    bg-[var(--cor-coral)]
                    px-5 py-[12px]
                    [font-family:var(--fonte-titulo)]
                    text-[15.5px] font-semibold
                    tracking-[0.01em]
                    text-[var(--cor-branco)]
                    shadow-[0_6px_0_var(--cor-coral-escuro)]
                    transition-[transform,box-shadow]
                    duration-[120ms]
                    hover:-translate-y-[2px]
                    hover:shadow-[0_8px_0_var(--cor-coral-escuro)]
                    active:translate-y-[2px]
                    active:shadow-[0_3px_0_var(--cor-coral-escuro)]
                    focus-visible:outline-2
                    focus-visible:outline-offset-[3px]
                  "
                >
                  criar minha conta
                </button>
              </form>
            </div>
          </section>

          {/* ==================== PAINEL DIREITO ==================== */}
          <section
            className="
              relative flex h-full min-h-0 flex-col
              items-start justify-center
              gap-8 overflow-hidden
              px-[54px] py-[34px]
              text-left
              text-[var(--cor-creme)]
              [background:radial-gradient(120%_130%_at_18%_0%,var(--cor-ciano)_0%,transparent_55%),linear-gradient(160deg,var(--cor-azul)_0%,var(--cor-ciano-2)_55%,var(--cor-azul-escuro)_100%)]
              max-[950px]:min-h-[520px]
              max-[700px]:px-6
              max-[700px]:py-12
            "
          >
            <div className="relative z-[2] w-full max-w-[650px]">
              <span
                className="
                  mb-[22px] inline-flex items-center gap-2
                  rotate-[-2deg]
                  rounded-full
                  bg-[rgba(255,255,255,0.88)]
                  px-[14px] py-[6px]
                  [font-family:var(--fonte-titulo)]
                  text-[12.5px] font-semibold
                  tracking-[0.04em]
                  text-[var(--cor-azul-escuro)]
                "
              >
                ✦ programa soul up
              </span>

              <h2
                className="
                  m-0 mb-4
                  [font-family:var(--fonte-titulo)]
                  text-[clamp(32px,4vw,50px)]
                  font-semibold leading-[1.12]
                  tracking-[-0.01em]
                  text-[var(--cor-creme)]
                "
              >
                seu clique é{" "}
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
                    before:bg-[var(--cor-azul)]
                    before:content-['']
                  "
                >
                  <span className="relative z-[2]">digital</span>
                </span>
                ,
                <br />
                mas o impacto é{" "}
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
                    before:bg-[var(--cor-azul)]
                    before:content-['']
                  "
                >
                  <span className="relative z-[2] text-[var(--cor-branco)]">
                    real
                  </span>
                </span>
                .
              </h2>

              <p
                className="
                  m-0 max-w-[46ch]
                  text-[14.5px] font-medium
                  leading-[1.65]
                  text-[rgba(255,255,255,0.68)]
                "
              >
                curtiu, participou, mudou de hábito? isso conta ponto. e ponto
                aqui vira recompensa de verdade — sem enrolação.
              </p>
            </div>

            <div className="relative z-[2] flex flex-wrap justify-start gap-[14px] max-[560px]:flex-col">
              <div
                className="
                  flex rotate-[-1.5deg] flex-col gap-[2px]
                  rounded-[18px]
                  border border-[rgba(255,255,255,0.16)]
                  bg-[rgba(255,255,255,0.08)]
                  px-4 py-[10px]
                "
              >
                <span
                  className="
                    [font-family:var(--fonte-titulo)]
                    text-[20px] font-semibold
                    text-[var(--cor-creme)]
                  "
                >
                  12k+
                </span>

                <span className="text-[11.5px] font-bold text-[rgba(255,255,255,0.6)]">
                  ações registradas
                </span>
              </div>

              <div
                className="
                  flex rotate-[2deg] flex-col gap-[2px]
                  rounded-[18px]
                  border border-[rgba(255,255,255,0.16)]
                  bg-[rgba(255,255,255,0.08)]
                  px-4 py-[10px]
                "
              >
                <span
                  className="
                    [font-family:var(--fonte-titulo)]
                    text-[20px] font-semibold
                    text-[var(--cor-creme)]
                  "
                >
                  3,8k
                </span>

                <span className="text-[11.5px] font-bold text-[rgba(255,255,255,0.6)]">
                  recompensas resgatadas
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ==================== MODAL ==================== */}
      {modalAberto && (
        <div
          className="
            fixed inset-0 z-[1000]
            flex items-center justify-center
            bg-[rgba(0,0,0,0.38)]
            px-5
            backdrop-blur-[3px]
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="
              w-full max-w-[440px]
              rounded-[24px]
              border border-[var(--cor-azul-bebe)]
              bg-[var(--cor-creme)]
              px-9 py-10
              text-center
              shadow-[0_18px_50px_rgba(15,42,44,0.2)]
            "
          >
            <div
              className="
                mx-auto mb-5
                flex h-14 w-14 items-center justify-center
                rounded-full
                bg-[#E3F6F5]
                text-[26px]
                text-[var(--cor-azul)]
              "
            >
              <i className="fa-solid fa-circle-check" />
            </div>

            <h2
              id="modal-title"
              className="
                m-0 mb-3
                [font-family:var(--fonte-titulo)]
                text-[24px] font-bold
                text-[var(--cor-azul-escuro)]
              "
            >
              {modalTitulo}
            </h2>

            <p
              className="
                mx-auto m-0 max-w-[34ch]
                text-[14.5px] leading-[1.6]
                text-[var(--cor-turquesa)]
              "
            >
              {modalMensagem}
            </p>

            <div className="mt-6 flex items-center justify-center gap-[6px]">
              <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--cor-ciano)] [animation-delay:-0.3s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--cor-azul)] [animation-delay:-0.15s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-[var(--cor-coral)]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
