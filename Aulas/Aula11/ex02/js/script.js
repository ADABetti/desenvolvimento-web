let inputValorBruto = document.getElementById('valor-bruto');
let inputValorLiquido = document.getElementById('valor-liquido');
let btnCalcular = document.getElementById('calcular');
let taxa = 200;

//Evento com input:
inputValorBruto.addEventListener('input', () => {
  let valorBruto = Number(inputValorBruto.value);
  inputValorLiquido.value = valorBruto - taxa;
})

