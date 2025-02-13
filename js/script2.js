function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc = 0;
    let classificacao = "";


    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }


    imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }


document.getElementById('resultado').innerHTML = `IMC: ${imc.toFixed(2)}<br>Classificação: ${classificacao}`;
}