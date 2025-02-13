function calcularPontuacao() {
    let pontuacao = 0;


    // Respostas corretas
    const respostasCorretas = {
        q1: 'b',  // Brasília
        q2: 'c',  // Ásia
        q3: 'a',  // África
        q4: 'b',  // Oceano Pacífico
        q5: 'c'   // Rússia
    };


    // Verificar se as respostas estão corretas
    for (let i = 1; i <= 5; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta && resposta.value === respostasCorretas[`q${i}`]) {
            pontuacao++;
        }
    }


    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Você acertou ${pontuacao} de 5 perguntas!`;
}