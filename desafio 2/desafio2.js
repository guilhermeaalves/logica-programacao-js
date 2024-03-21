function calculaIMC(peso, altura) {
    
    const
    calculaIMC = (peso / altura **2);
    let mensagem;

    if (calculaIMC <= 18.5){
        mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Abaixo do peso `;
        } else if(calculaIMC <= 24.9){
            mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Peso normal`;
        } else if(calculaIMC <= 29.9){
            mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Sobrepeso`;
        } else if(calculaIMC <= 34.9){
            mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau I`;
        } else if (calculaIMC <= 39.9){
            mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau II`;
        } else {
            mensagem = `IMC: ${calculaIMC.toFixed(1)} --> Obesidade grau III`;
    }
    
    return mensagem;
}
