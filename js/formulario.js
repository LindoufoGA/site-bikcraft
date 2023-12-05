const formulario = document.querySelector("form");

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";
}

addEventListener("submit", enviarFormulario());
