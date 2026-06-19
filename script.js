// Mostra o ano atual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Saudação ao clicar no botão
const botao = document.getElementById("saudacao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Olá! Seu site já está funcionando. 🎉";
});
