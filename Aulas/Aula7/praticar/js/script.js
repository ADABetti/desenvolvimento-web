var bancoDeDados = [
  {
    nome: "Bolo de limão",
    descricao: "Redondo",
    preco: 20,
    imagem: "https://placehold.jp/300x200.png" 
  },
  {
    nome: "Bolo de cenoura",
    descricao: "Redondo",
    preco: 15,
    imagem: "https://placehold.jp/300x200.png" 
  },
  {
    nome: "Bolo de acerola",
    descricao: "quadrado",
    preco: 40,
    imagem: "https://placehold.jp/300x200.png" 
  }
]

var conteudoPrincipal = document.getElementById("conteudo-principal");

for (var produto of bancoDeDados){
  var conteudoProduto = document.createElement('div')
  conteudoProduto.className = "conteudo-produto";
  conteudoPrincipal.appendChild(conteudoProduto);

  var imagem = document.createElement('img');
  imagem.src = produto.imagem;
  conteudoProduto.appendChild(imagem);

  var nomeProduto = document.createElement('h2');
  nomeProduto.textContent = produto.nome;
  conteudoProduto.appendChild(nomeProduto);

  var descricaoProduto = document.createElement('p');
  descricaoProduto.textContent = produto.descricao;
  conteudoProduto.appendChild(descricaoProduto);

  var precoProduto = document.createElement('p');
  precoProduto.textContent = `R$ ${produto.preco}`;
  conteudoProduto.appendChild(precoProduto);

  var botoes = document.createElement('div');
  botoes.className = "btn";

  var botaoComprar = document.createElement('button');
  botaoComprar.textContent = "Comprar";
  botoes.appendChild(botaoComprar);

  var botaoInfo = document.createElement('button');
  botaoInfo.textContent = "Informações";
  botoes.appendChild(botaoInfo);

  conteudoProduto.appendChild(botoes);
}

