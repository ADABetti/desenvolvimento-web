function imprimirNome (nome, fcb1, fcb2){
  console.log(nome);
  fcb1();
  fcb2(imprimirSobrenome);
}

function imprimirSobrenome (sobrenome){
  console.log(sobrenome);
}

// imprimirNome ('fulano', imprimirSobrenome)

imprimirNome ('miguel',
  () => {
    console.log("Ribeiro")
  }, function (cb) {
    cb("Teste")
  }
)

// =====================

let valor = 10;
let taxa = 0.5;
let ir = 0.38;

let calcularValor = (
  valor,
  taxa,
  ir) => {
    return valor + taxa + ir;
}

var resultadoOperacao = (cb) => {
  let resultado = cb(valor, taxa, ir);

  console.log(resultado);
}

resultadoOperacao(calcularValor);