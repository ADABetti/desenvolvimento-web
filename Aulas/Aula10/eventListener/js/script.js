let imagem = document.getElementById('img');

// Posso usar setTimeout(), assim posso considerar quanto tempo
// o usuário está olhando tal produto, para enviar um email personalizado. 
imagem.addEventListener("mouseenter", () => {
  console.log("Enviando email para usuario.")
})