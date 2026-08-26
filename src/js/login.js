//Altera qualquer texto do HTML
function alterarTexto(id, texto) {
    let objeto = document.getElementById(id); //Resgata o campo para alterar
    if (objeto) { //verifica se o elemento existe
        objeto.innerHTML = texto; //altera o campo com texto novo
    }
}

const form = document.getElementById('form-login');
const modal = document.getElementById('popup-modal');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        //Resgatando respostas do usuário
        const pais = document.getElementById('pais').value;
        const doc = document.getElementById('doc').value;
        const nome = document.getElementById('nome').value;
        const dataNasc = document.getElementById('nasc').value;
        const cel = document.getElementById('cel').value;
        const email = document.getElementById('email').value;
        const terms = document.getElementById('terms').checked;
        
        //validação de campos vazios
        if (pais.trim() === '' || doc.trim() === '' || nome.trim() === '' || dataNasc === '' || cel.trim() === '' || email.trim() === '') {
            alterarTexto('modal-title', "Atenção!");
            alterarTexto('modal-message', "Preencha todos os campos obrigatórios.");
            modal.classList.add('modal--active');
            return;
        } 

        if (!terms) {
            alterarTexto('modal-title', "Atenção!");
            alterarTexto('modal-message', "Você precisa aceitar os termos e condições para criar a conta.");
            modal.classList.add('modal--active');
            return;
        }

        //Cálculo da idade com base no mes atual < mes de aniversario
        const hoje = new Date(); //Objeto com data exata de agora
        const nascimento = new Date(dataNasc);

        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth(); 

        //Verifica se o mês do aniversário do usuário já passou
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--; // mes < 0 = aniversario ainda nao chegou, logo decrementa a idade
        }

        //Validação de idade (-14 não podem acessar o app)
        if (idade < 14) {
            alterarTexto('modal-title', "Idade inválida!");
            alterarTexto('modal-message', "A idade inserida é inferior à permitida para acessar o aplicativo.");
            modal.classList.add('modal--active'); //altera visibilidade
            return;
        }

        //Caso tudo estiver correto
        sessionStorage.setItem('usuarioLogado', 'true'); //Armazena dados por sessao
        sessionStorage.setItem('nomeUsuario', nome.split(' ')[0]); //Resgata o primeiro nome
        window.location.href = "../../index.html"; //Leva o usuário para página inicial
    });
}