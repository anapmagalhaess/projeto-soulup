import { useState } from "react";
import { Link } from "react-router-dom";

import Tag from "../components/Tag/Tag";
import FaqItem from "../components/Faq-Item/Faq-Item";

export default function FAQ() {
  const [faqAberta, setFaqAberta] = useState<number | null>(0);

  const alternarFaq = (indice: number) => {
    setFaqAberta((atual) => (atual === indice ? null : indice));
  };

  return (
    <main
      className="
        m-0
        min-h-screen
        w-full
        max-w-none
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
          relative
          w-full
          overflow-hidden
          pt-[50px]
          pb-[50px]
          text-center
          bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)]
        "
      >

        <div className="relative z-[2] mx-auto w-full max-w-[680px] px-10">
          <div className="mb-5 flex justify-center">
            <Tag texto="tá com dúvida?" />
          </div>

          <h1
            className="
              m-0
              mb-4
              [font-family:var(--fonte-titulo)]
              text-[clamp(32px,4.2vw,46px)]
              font-semibold
              leading-[1.18]
              tracking-[-0.01em]
              text-[var(--cor-azul-escuro)]
            "
          >
            perguntas frequentes
          </h1>

          <p
            className="
              mx-auto
              m-0
              max-w-[52ch]
              text-[16px]
              font-medium
              leading-[1.65]
              text-[var(--cor-turquesa)]
            "
          >
            tudo que você precisa saber sobre nossa solução gamificada
            — direto ao ponto.
          </p>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="relative w-full pt-16 pb-24">
        <div className="mx-auto w-full max-w-[1180px] px-10">
          <div
            id="faqList"
            className="
              mx-auto
              flex
              max-w-[780px]
              flex-col
              gap-[14px]
            "
          >
            <FaqItem
              pergunta="o que são pontos soul?"
              icone="fa-circle-question"
              aberto={faqAberta === 0}
              aoClicar={() => alternarFaq(0)}
              resposta={
                <p>
                  <strong>pontos soul</strong> são recompensas acumuladas ao
                  realizar ações sustentáveis, como caminhar, reciclar ou usar
                  energia renovável.
                </p>
              }
            />

            <FaqItem
              pergunta="como posso conseguir pontos soul?"
              icone="fa-coins"
              aberto={faqAberta === 1}
              aoClicar={() => alternarFaq(1)}
              resposta={
                <p>
                  você ganha pontos participando de ações sustentáveis. escolha
                  uma das <strong>missões semanais</strong> disponibilizadas pela
                  plataforma, tire uma foto ou grave um vídeo realizando essa
                  ação e envie para nossa <strong>IA</strong>. ela vai validar o
                  registro e calcular a pontuação com base no impacto ambiental
                  gerado. a pontuação final é acumulada diretamente na sua
                  carteira digital.
                </p>
              }
            />

            <FaqItem
              pergunta="posso usar meus pontos soul?"
              icone="fa-gift"
              aberto={faqAberta === 2}
              aoClicar={() => alternarFaq(2)}
              resposta={
                <>
                  <p>
                    os pontos podem ser usados em recompensas digitais, como:
                  </p>

                  <ul>
                    <li>- desconto na sua conta de luz</li>
                    <li>- desconto em produtos de empresas parceiras</li>
                    <li>- dinheiro direto na sua conta via pix</li>
                  </ul>

                  <p className="mt-[10px]">
                    também temos recompensas tangíveis para resgate, como
                    ecobags, canudos reutilizáveis e outros brindes. confira no
                    nosso aplicativo todos os detalhes sobre as recompensas
                    disponíveis no momento.
                  </p>
                </>
              }
            />

            <FaqItem
              pergunta="como funciona o ranking?"
              icone="fa-ranking-star"
              aberto={faqAberta === 3}
              aoClicar={() => alternarFaq(3)}
              resposta={
                <p>
                  nosso ranking é baseado na quantidade de pontos acumulados
                  pelo usuário ao longo do tempo — quanto mais pontos você tiver,
                  melhor a sua posição. o usuário que alcançar o{" "}
                  <strong>número 1 do ranking global</strong> garante uma conta
                  com benefícios superiores e tem sua conta de luz paga
                  integralmente por nós. (o reset do ranking ocorre mensalmente)
                </p>
              }
            />

          </div>

          {/* call to action */}
          <div
            className="
              mx-auto
              mt-12
              flex
              max-w-[780px]
              flex-wrap
              items-center
              justify-between
              gap-[18px]
              rounded-[22px]
              bg-[linear-gradient(135deg,var(--cor-ciano)_0%,var(--cor-azul)_100%)]
              px-8
              py-[30px]
              text-[var(--cor-branco)]
            "
          >
            <div>
              <h3
                className="
                  m-0
                  mb-1
                  [font-family:var(--fonte-titulo)]
                  text-[17px]
                  font-semibold
                "
              >
                ainda ficou com dúvida?
              </h3>

              <p className="m-0 text-[13.5px] font-medium text-[rgba(255,255,255,0.85)]">
                fala com a gente — a equipe soul up responde rapidinho.
              </p>
            </div>

            <Link
              to="/pagina-contato"
              className="
                inline-block
                cursor-pointer
                rounded-[14px]
                border-0
                bg-[var(--cor-branco)]
                px-[22px]
                py-[13px]
                [font-family:var(--fonte-titulo)]
                text-[14px]
                font-semibold
                text-[var(--cor-azul-escuro)]
                no-underline
                shadow-[0_5px_0_rgba(255,255,255,0.35)]
                transition-[transform,box-shadow]
                duration-[120ms]
                ease-out
                hover:-translate-y-[2px]
                hover:shadow-[0_7px_0_rgba(255,255,255,0.35)]
              "
            >
              falar com a gente
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}