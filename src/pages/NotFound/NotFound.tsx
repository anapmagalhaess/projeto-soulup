    import { useEffect } from "react";
    import { Link } from "react-router-dom";

    export default function NotFound() {
    // Garante que a página não tenha rolagem (horizontal nem vertical) enquanto o 404 estiver na tela
        useEffect(() => {
            const { body, documentElement: html } = document;
            const prevBody = body.style.overflow;
            const prevHtml = html.style.overflow;
            body.style.overflow = "hidden";
            html.style.overflow = "hidden";
            return () => {
                body.style.overflow = prevBody;
                html.style.overflow = prevHtml;
            };
        }, []);

        return (
            <section className="fixed inset-0 z-[50] flex items-center justify-center overflow-hidden bg-[linear-gradient(70deg,#f0ffff_40%,#b3dadb)] p-[clamp(0.75rem,3vmin,3rem)]">
            {/*bolhas BG estilização */}
            <div className="absolute rounded-full w-[34vmin] h-[34vmin] top-[6%] left-[4%] bg-[rgba(65,198,196,0.30)]"></div>
            <div className="absolute rounded-full w-[22vmin] h-[22vmin] bottom-[8%] right-[6%] bg-[rgba(153,209,213,0.45)]"></div>
            <div className="absolute rounded-full w-[14vmin] h-[14vmin] top-[18%] right-[14%] bg-[rgba(255,107,87,0.18)]"></div>
            <div className="absolute rounded-full w-[10vmin] h-[10vmin] bottom-[16%] left-[12%] bg-[rgba(153,209,213,0.55)]"></div>

            {/* 404 BG estilização */}
            <span
                aria-hidden="true"
                className="absolute select-none pointer-events-none font-[family-name:var(--fonte-titulo)] font-semibold leading-[1] text-[clamp(8rem,48vmin,48rem)] text-[var(--cor-azul-escuro)] opacity-[0.06]">404</span>

            {/* ==== CARD CENTRAL ==== */}
            <div className="relative z-[1] flex flex-col items-center text-center w-fit max-w-full gap-[clamp(1rem,3vmin,3.5rem)] p-[clamp(1.25rem,4vmin,5rem)] bg-white/60 border border-white/80 backdrop-blur-[12px] rounded-[clamp(1.5rem,4vmin,3.5rem)] shadow-[0_30px_60px_-20px_rgba(32,111,116,0.30)] [@media(max-height:480px)]:flex-row [@media(max-height:480px)]:text-left">
            {/* ==== CARINHA TRISTE ==== */}
            <div className="shrink-0 w-[clamp(7rem,22vmin,24rem)] -rotate-[6deg] drop-shadow-[0_20px_30px_rgba(32,111,116,0.25)] [@media(max-height:480px)]:w-[clamp(5rem,30vh,9rem)]">
                <svg
                    className="w-full h-auto"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <defs>
                        <linearGradient id="soulSadFaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" className="[stop-color:var(--cor-ciano)]" />
                            <stop offset="100%" className="[stop-color:var(--cor-azul)]" />
                        </linearGradient>
                    </defs>

                    {/* rosto */}
                    <circle cx="100" cy="100" r="92" fill="url(#soulSadFaceGrad)" />
                    <ellipse
                        cx="68"
                        cy="44"
                        rx="34"
                        ry="16"
                        transform="rotate(-20 68 44)"
                        className="fill-[var(--cor-branco)] opacity-[0.18]"/>

                    {/* bochechas */}
                    <ellipse cx="40" cy="124" rx="13" ry="8" className="fill-[var(--cor-coral)] opacity-[0.35]" />
                    <ellipse cx="160" cy="124" rx="13" ry="8" className="fill-[var(--cor-coral)] opacity-[0.35]" />

                    {/* sobrancelhas */}
                    <path
                        d="M48 66 L82 54"
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="stroke-[var(--cor-azul-escuro)]"/>
                    <path
                        d="M152 66 L118 54"
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round"
                        className="stroke-[var(--cor-azul-escuro)]"/>

                    {/* olhos */}
                    <ellipse cx="70" cy="88" rx="15" ry="17" className="fill-[var(--cor-branco)]" />
                    <ellipse cx="130" cy="88" rx="15" ry="17" className="fill-[var(--cor-branco)]" />
                    <circle cx="68" cy="94" r="8" className="fill-[var(--cor-azul-escuro)]" />
                    <circle cx="128" cy="94" r="8" className="fill-[var(--cor-azul-escuro)]" />
                    <circle cx="65" cy="90" r="3" className="fill-[var(--cor-branco)]" />
                    <circle cx="125" cy="90" r="3" className="fill-[var(--cor-branco)]" />

                    {/* lagrima */}
                    <path
                        d="M70 108 C70 108 60 122 60 128 a10 10 0 0 0 20 0 C80 122 70 108 70 108 Z"
                        strokeWidth="1.5"
                        className="fill-[var(--cor-azul-bebe)] stroke-[var(--cor-branco)]"/>

                    {/* boca tristonha */}
                    <path
                        d="M72 150 Q100 124 128 150"
                        fill="none"
                        strokeWidth="7"
                        strokeLinecap="round"
                        className="stroke-[var(--cor-azul-escuro)]"/>
                </svg>
            </div>

            {/* textinho e botao*/}
            <div className="flex flex-col items-center gap-[clamp(0.5rem,1.6vmin,1.75rem)] [@media(max-height:480px)]:items-start">
                <h1 className="font-[family-name:var(--fonte-titulo)] m-[0] font-semibold text-[clamp(2.25rem,7vmin,9rem)] leading-[1.1] tracking-[-0.01em] text-[var(--cor-azul-escuro)]">Erro {" "}
                    <span className="relative whitespace-nowrap font-bold before:content-[''] before:absolute before:left-[-0.12em] before:right-[-0.12em] before:bottom-[0.08em] before:h-[0.32em] before:bg-[var(--cor-azul-bebe)] before:rounded-[3px] before:rotate-[1.2deg] before:z-[1]">
                        <span className="relative z-[2]">404</span>
                    </span>
                </h1>
                <h2 className="font-[family-name:var(--fonte-titulo)] m-[0] font-semibold text-[clamp(1.25rem,3.6vmin,4.5rem)] leading-[1.2] text-[var(--cor-coral-escuro)]">Página não encontrada</h2>
                <p className="m-[0] max-w-[34ch] text-[clamp(0.95rem,1.9vmin,2.5rem)] leading-[1.6] font-medium text-[var(--cor-turquesa)]">O endereço que você tentou acessar não existe.</p>

                <Link to="/" className="inline-block mt-[clamp(0.25rem,1vmin,1.5rem)] no-underline py-[0.95em] px-[1.7em] rounded-[1.07em] border-0 bg-[var(--cor-coral)] text-[var(--cor-branco)] font-[family-name:var(--fonte-titulo)] font-semibold text-[clamp(0.95rem,1.8vmin,2.25rem)] leading-[1.2] shadow-[0_0.4em_0_var(--cor-coral-escuro)] cursor-pointer transition-all duration-[150ms] ease-out hover:-translate-y-[0.13em] hover:shadow-[0_0.53em_0_var(--cor-coral-escuro)] active:translate-y-[0.13em] active:shadow-[0_0.2em_0_var(--cor-coral-escuro)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[color:var(--cor-azul-escuro)] focus-visible:outline-offset-[3px]">
                Voltar para página inicial.</Link>
            </div>
            </div>
            </section>
        );
    }