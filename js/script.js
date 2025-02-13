function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;


    if (operacao === "+") {
        resultado = num1 + num2;
    } else if (operacao === "-") {
        resultado = num1 - num2;
    } else if (operacao === "*") {
    resultado = num1 * num2;
    } else if (operacao === "/") {
        resultado = num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
    }

document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
