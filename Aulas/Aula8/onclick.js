var numero1 = document.getElementById('n1');
var numero2 = document.getElementById('n2');

function compararValores(){
  if (Number(numero1.value) === Number(numero2.value)){
    console.log(true);
    window.alert(true);
  } else {
    console.log(false);
    window.alert(false);
  }
}

function somarValores(){
  var resultado = Number(numero1.value) + Number(numero2.value);
  var resultadoContainer = document.getElementById("resultado");
  resultadoContainer.textContent = resultado;

}