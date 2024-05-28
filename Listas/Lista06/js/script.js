  var pix = {
    chave: "1198778900",
    valorTransferencia: 34.6,
    dataTransacao: new Date(),
    pagador: {
      nome: "George",
      documento: "1212121212",
    },
    recebedor: {
      nome: "Lila",
      documento: "3434343434",
    },
    transacoes: [
      {
        data: "14/04/2024",
        valor: 500,
        descricao: "Conta de água",
      },
      {
        data: "13/05/2024",
        valor: 540,
        descricao: "Conta de água",
      }
    ]
  }

  console.log(pix);

  // pergunta: Ao usar object literals, eu não posso deixar os campos em branco e usar setters?