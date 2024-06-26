// Arrow functions:

export const somar = (numero1, numero2) => {
  return ( numero1 + numero2);
}

export const subtrair = (numero1, numero2) => {
  return ( numero1 - numero2);
}

export const multiplicar = (numero1, numero2) => {
  return ( numero1 * numero2);
}

export const dividir = (numero1, numero2) => {
  if (numero2 === 0){
    return "Erro: Não é possível dividir por 0";
  } else {
    return ( numero1 / numero2);
  }
}
