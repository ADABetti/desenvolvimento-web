var produtos = [
  {
    nome: "Produto1",
    descricao: "Descrição produto 1",
    preco: 40,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto2",
    descricao: "Descrição produto 2",
    preco: 60,
    imagem: "https://placehold.jp/150x150.png" 
  },
  {
    nome: "Produto3",
    descricao: "Descrição produto 3",
    preco: 20,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto4",
    descricao: "Descrição produto 4",
    preco: 40,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto5",
    descricao: "Descrição produto 5",
    preco: 30,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto6",
    descricao: "Descrição produto 6",
    preco: 40,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto6",
    descricao: "Descrição produto 6",
    preco: 40,
    imagem: "https://placehold.jp/150x150.png" 

  },
  {
    nome: "Produto6",
    descricao: "Descrição produto 6",
    preco: 40,
    imagem: "https://placehold.jp/150x150.png" 

  },
]

var container = document.getElementById("container");

for (var produto of produtos){
  var conteudoProduto = document.createElement('div');
  conteudoProduto.className = "produto-container";
  container.appendChild(conteudoProduto);

  
  var imagemProduto = document.createElement('img');
  imagemProduto.src = produto.imagem;
  conteudoProduto.appendChild(imagemProduto);

  var nomeProduto = document.createElement('h2');
  nomeProduto.textContent = produto.nome;
  conteudoProduto.appendChild(nomeProduto);

  var descricaoProduto = document.createElement('p');
  descricaoProduto.textContent = produto.descricao;
  conteudoProduto.appendChild(descricaoProduto);

  var precoProduto = document.createElement('p');
  precoProduto.textContent = `R$ ${produto.preco}`;
  conteudoProduto.appendChild(precoProduto);

  var buttons = document.createElement('div');
  buttons.className = "btn";
  conteudoProduto.appendChild(buttons);

  var btnVender = document.createElement('button');
  btnVender.textContent = "Vender";
  btnVender.className = "btn-vender";
  buttons.appendChild(btnVender);

  var btnDetalhes = document.createElement('button');
  btnDetalhes.textContent = "Detalhes";
  btnDetalhes.className = "btn-detalhes";
  buttons.appendChild(btnDetalhes);
}
