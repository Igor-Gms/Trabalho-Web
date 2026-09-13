const botoes = document.querySelectorAll(".botao-plano");
const campoPlano = document.querySelector("#plano");
const formulario = document.querySelector("#form-inscricao");
const mensagem = document.querySelector("#mensagem-inscricao");

botoes.forEach(function (botao) {
    botao.addEventListener("click", function (){
        campoPlano.value = botao.dataset.plano;
        mensagem.textContent = "";
    });
});

formulario.addEventListener("submit", function (evento){
    evento.preventDefault();
    mensagem.textContent = 
    "Teste concluído ! Dados não foram salvos nem enviados."
});