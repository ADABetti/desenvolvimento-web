export const somar = (n1, n2) => {
  return n1 + n2;
}

export const subtrair = (n1, n2) => {
  return n1 - n2;
}

export const dividir = (n1, n2) => {
  if (n2 == 0){
    return "Erro! Número não pode ser dividido por 0.";
  } else {
    return n1 / n2
  }
}

export const multiplicar = (n1, n2) => {
  return n1 * n2;
}

export default {  
  somar,
  subtrair,
  dividir,
  multiplicar
}