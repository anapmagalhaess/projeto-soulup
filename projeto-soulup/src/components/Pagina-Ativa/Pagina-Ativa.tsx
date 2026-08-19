//Utilização do useEffect para o código rodar após renderização do React (Quando DOM estiver disponível)
import { useEffect } from 'react';

export default function PaginaAtiva(){
    useEffect(() => {
    //Caminho da Página atual no navegador.
    const paginaAtual = window.location.pathname;
            
    //Resgata os links da navbar.
    const links = document.querySelectorAll('nav__menu a');

    //Busca link correspondente e adiciona a classe 'active'.
    links.forEach((link) => {
        const href = link.getAttribute('href')

        //Verifica se o link analisado corresponde à página de acesso. & Trata possiveis diferenças de formatação.
        if (href && paginaAtual.endsWith(href.replace('./', ''))) {
            //Busca link correspondente e adiciona a classe 'active'.
            link.classList.add('nav__link--active')
        }
        });
    }, [])
        // O array vazio garante que a aplicação roda apenas uma vez ao carregar a tela.
    return null;
}