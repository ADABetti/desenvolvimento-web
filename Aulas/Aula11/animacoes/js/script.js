let botao = document.getElementById('btn-login');

botao.addEventListener('click', () => {
  // Adicionar classe CSS para o botão:
  botao.classList.add('anima-botao');
  setTimeout(() => {
    botao.classList.remove('anima-botao');
  },4000)
  
})