// Arrow functions:

const somar = (numero1, numero2) => {
  console.log ( numero1 + numero2);
}

const subtrair = (numero1, numero2) => {
  console.log ( numero1 - numero2);
}

const multiplicar = (numero1, numero2) => {
  console.log ( numero1 * numero2);
}

const dividir = (numero1, numero2) => {
  if (numero2 === 0){
    console.log ("Erro: Não é possível dividir por 0");
  } else {
    console.log ( numero1 / numero2);
  }
}

module.exports = {
  somar, subtrair, multiplicar, dividir
}

