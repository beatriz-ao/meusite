// Gera um número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;


function verificarPalpite() {
    let palpite = parseInt(document.getElementById("guess").value);
    let mensagem = document.getElementById("message");


    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.innerHTML = "Por favor, digite um número entre 1 e 100.";
        return;
    }


    tentativas++;


    // Verifica se o usuário acertou
    if (palpite === numeroSecreto) {
        mensagem.innerHTML = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        mensagem.style.color = "green";
    } else if (palpite < numeroSecreto) {
        mensagem.innerHTML = "🔼 Tente um número maior!";
        mensagem.style.color = "blue";
    } else {
        mensagem.innerHTML = "🔽 Tente um número menor!";
        mensagem.style.color = "red";
    }
}