class Pessoa {
  nome;
  idade;

  constructor (nome,idade){
    this.nome = nome;
    this.idade = idade;
  }
}

var pessoa = new Pessoa ("Laura", 34);
console.log (pessoa);

var produto = {
  nome: "Tesoura",
  preco: 23.50,
  fornecedores: ["mara", "maara", "maarate"],
  modelos: [
    {
    marca: "Tramontina",
    tamanho: 20
    },
    
    {
      marca: "Cis",
      tamanho: 27
    }
  ]
}

produto["peso"] = 200;// adicionar atributo ao objeto

console.log(produto)