//carrega o html primeiro p garantir que o elemento existe na pagina
document.addEventListener('DOMContentLoaded', () => {
    const btnResgatar = document.querySelectorAll('.btn-resgatar'); //busca tds elementos da pagina q tem essa class
//ao clicar, botao troca de estilo
    btnResgatar.forEach(btn => { //percorrer um por um e aplicar a mesma regra a cada um deles individualmente
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('resgatado')) {
                btn.classList.add('resgatado');
                btn.innerHTML = '✔ Resgatado';
            }
        });
    });
});
