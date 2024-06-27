import { somar, subtrair, multiplicar, dividir } from "./operacoes_web.js";

let btnCalcular = document.getElementById("btn-calcular");
let resultado = document.getElementById("resultado");


btnCalcular.addEventListener("click", () =>{

  // Pegar o valor(value) do input preenchido e tranformar em número:
let number1 = Number(document.getElementById('n1').value);
let number2 = Number(document.getElementById('n2').value);

  // criar variáveis que guardam o retorno das funções com os números do usuário passados como parÂmetros.
let calculoSoma = somar(number1, number2);
let calculoSub = subtrair(number1, number2);
let calculoDiv = dividir(number1, number2);
let calculoMult = multiplicar(number1, number2);

resultado.innerHTML = `Soma: ${calculoSoma}
  <br>
  Subtração: ${calculoSub}
  <br>
  Divisão: ${calculoDiv}
  <br>
  Multiplicação: ${calculoMult}`
})

