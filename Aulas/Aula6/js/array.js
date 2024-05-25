// arrays / lista / vetores:

var nome = "Um Nome"; // varíavel simples
var nomes = ["Almeida", "Berton", "Cassis"]; // variável composta  (array)
var idades = [10, 11, 12];


console.log(nomes[0]); // acessa posição 0 - Almeida
console.log(nomes[1]); // Acessa posição 1 - Berton
console.log(nomes[2]); // Acessa posição 2 - Cassis
console.log(idades);

nomes.push("Donabella"); // adiciona um item ao final da lista
console.log(nomes);

console.log(nomes.length); // tamanho do array

console.log(nomes.pop()); // Exclui o último item da lista
console.log(nomes);

console.log(nomes.reverse()); // inverte array

console.log(nomes.shift()); // exclui primeiro item do array

console.log(nomes.sort()); // organiza o array

var posicaoBerton = nomes.indexOf("Berton");
console.log (nomes.splice(posicaoBerton,1)); // 1ºparametro (index), 2º parametro (qtd a ser removida)
console.log(nomes);