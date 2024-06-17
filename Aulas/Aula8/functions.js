// Função sem parâmetro:
function imprimirNome (){
  console.log("Fulano Inho");
}

// Função com parâmetros:
function somarValores(n1, n2){
  var soma = n1 + n2;
  console.log(soma);
}

function compararValores (n1, n2){
  if (n1 === n2){
    console.log(true);
  } else {
    console.log(false);
  }
}

//Invocando funções:
imprimirNome();
somarValores(8,6);
compararValores(9, "9");