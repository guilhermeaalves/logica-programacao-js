document.querySelector('#btCalcImc').addEventListener('click', function () {
    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);
    const imc = calculaIMC(peso, altura);
    document.querySelector('#resultadoIMC').innerHTML = imc;
});
document.querySelector('#Btreset').addEventListener('click', function () {
    document.querySelector('#resultadoIMC').innerHTML = "";
});

function calculaIMC(peso, altura) {

    const
        calculaIMC = (peso / altura ** 2);

    if (!isNaN(peso || altura)) {

        if (calculaIMC <= 18.5) {
            return `IMC: ${calculaIMC.toFixed(1)} --> Abaixo do peso `;
        } else if (calculaIMC <= 24.9) {
            return `IMC: ${calculaIMC.toFixed(1)} --> Peso normal`;
        } else if (calculaIMC <= 29.9) {
            return `IMC: ${calculaIMC.toFixed(1)} --> Sobrepeso`;
        } else if (calculaIMC <= 34.9) {
            return `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau I`;
        } else if (calculaIMC <= 39.9) {
            return `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau II`;
        } else {
            return `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau III`;
        }

    } else {
        return 'ERRO: O número digitado para conversão não é um número válido.';
    }

}