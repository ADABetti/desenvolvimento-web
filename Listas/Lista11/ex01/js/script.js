let inputSalarioBruto = document.getElementById('input-salario-bruto');
let inputTaxaIr = document.getElementById('input-taxa-ir');
let btnCalcular = document.getElementById('btn-calcular');
let inputSalarioLiquido = document.getElementById('input-salario-liquido');

let calcularIR = (salarioBruto) => {
  return salarioBruto*0.15;
}

let calcularSalarioLiquido = (salarioBruto, taxaIr) => {
  return (salarioBruto - taxaIr);
}

// O input da taxa Ir muda conforme o input do salário bruto é preenchido:
inputSalarioBruto.addEventListener('input', () => {
  let valorSalarioBruto = Number(inputSalarioBruto.value);
  // Mostrar valor na tela:
  inputTaxaIr.value = calcularIR(valorSalarioBruto);
})

// O input do salário bruto muda quando o botão for clicado:
btnCalcular.addEventListener("click", () => {

  // Adicionando animação no botão:
  btnCalcular.classList.add ('anima-botao');
  setTimeout(() => {
    btnCalcular.classList.remove('anima-botao');
  }, 4000);


  let valorSalarioBruto = Number(inputSalarioBruto.value);
  let taxaIr = calcularIR(valorSalarioBruto);
  // Mostrar o valor na tela (input)
  inputSalarioLiquido.value = calcularSalarioLiquido(valorSalarioBruto, taxaIr);
}
)




