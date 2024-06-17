let calculadora = document.getElementById('calculadora');
let resultado = document.getElementById('result')
let numeroDigitado = "";


for (let indiceNumero = 0; indiceNumero < 10; indiceNumero++){

  let botao = document.createElement('button');
  botao.textContent = indiceNumero;
  botao.value = indiceNumero;
  botao.id = `btn-${indiceNumero}`;

  if (indiceNumero % 2 == 0){
    botao.className = "btn-par btn";
  } else {
    botao.className = "btn-impar btn"
  }

  botao.addEventListener('click', (evento) => {
    numeroDigitado += evento.target.value
    resultado.textContent = numeroDigitado;
  })

  calculadora.appendChild(botao);
}

// (arrow) função para criar botão
let criarBotao = (id, valor) => {
  let botao = document.createElement('button');
  botao.id = id;
  botao.className = "btn-calculo btn"
  botao.value = valor;
  botao.textContent = valor;

  calculadora.appendChild(botao);
}

criarBotao('btn-ponto', '.');
criarBotao('btn-soma', '+');
criarBotao('btn-subtracao', '-');
criarBotao('btn-multiplicacao', '*');
criarBotao('btn-divisao', '/');
criarBotao('btn-igual', '=');

document.getElementById('btn-ponto').addEventListener('click', (evento) => {
  numeroDigitado += evento.target.value;
  resultado.textContent = numeroDigitado;
})

document.getElementById ('btn-soma').addEventListener('click', (evento)=> {
  numeroDigitado += evento.target.value;
  resultado.textContent = numeroDigitado;
})

document.getElementById ('btn-subtracao').addEventListener('click', (evento) => {
  numeroDigitado += evento.target.value;
  resultado.textContent = numeroDigitado;
})

document.getElementById('btn-multiplicacao').addEventListener('click', (evento) => {
  numeroDigitado += evento.target.value;
  resultado.textContent = numeroDigitado;
})

document.getElementById('btn-divisao').addEventListener('click', (evento) => {
  numeroDigitado += evento.target.value;
  resultado = numeroDigitado;
})

document.getElementById('btn-igual').addEventListener('click', () =>{
  resultado.textContent = eval(numeroDigitado);
  numeroDigitado = 0;
})

document.getElementById('limpar').addEventListener('click', () => {
  resultado.textContent = "";
  numeroDigitado = "";
})