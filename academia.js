const botoes = document.querySelectorAll(".botao-plano");
const campoPlano = document.querySelectorAll("#plano");
const formulario = document.querySelectorAll("#form-inscricao");
const mensagem = document.querySelectorAll("#mensagem-inscricao");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function (){
        campoPlano.value = botao.dataset.plano;
        mensagem.textContent = "";
    });
});

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    mensagem.textContent = 
    "Formulário enviado!!"
});