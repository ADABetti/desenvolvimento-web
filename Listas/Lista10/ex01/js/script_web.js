import { dividir, multiplicar, somar, subtrair } from '../js/operacoes_web.js'

// buscar elemento do btn de cada operação:
// usar o addEventListener para que ao clicar a função de executarOperacao seja chamada de acordo com o btn apertado:
document.getElementById('btn-somar').addEventListener('click', () => {
  executarOperacao(somar);
});
document.getElementById('btn-sub').addEventListener('click', () => {
  executarOperacao(subtrair);
})
document.getElementById('btn-multiplicar').addEventListener('click', () => {
  executarOperacao(multiplicar);
})
document.getElementById('btn-dividir').addEventListener('click', () => {
  executarOperacao(dividir);
})

// Função guarda os valores dos números digitados pelo usuário.
// Cria a variável resultado que passa o nome da operação com os números digitados como parâmetros.
// A operacao() está invocando a função que está sendo importada de outro arquivo.
function executarOperacao (operacao) {
let numero1 = Number(document.getElementById('n1').value);
let numero2 = Number(document.getElementById('n2').value);

let resultado = operacao(numero1,numero2);
alert(`O resultado da operação é ${resultado}`);

}