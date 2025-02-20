let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clique(){
    console.log('O botão Console foi clicado')
};
function cliqueAlert(){
    console.log('Eu amo js')
};
function cliquePrompt(){
    let cidade = prompt('Qual é o nome da cidade? ');
    alert(`Estive na cidade ${cidade} e lembrei de você!`)
};
function cliqueSoma(){
    let numeroA = parseInt(prompt('Digite o primeiro número: '));
    let numeroB = parseInt(prompt('Digite o segundo número: '));
    let soma = numeroA + numeroB
    alert(`A soma do número ${numeroA} com o número ${numeroB} é igual à ${soma}`)
}