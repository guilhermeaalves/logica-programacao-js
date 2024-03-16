const peso = window.prompt(`Informe seu peso`)
const altura = window.prompt(`Informe sua altura`)

const imc= (peso / altura **2);

if(imc <= 18.5){
    window.alert(`Abaixo do peso`);
    } else if(imc <= 24.9){
        window.alert(`Peso normal`);
    } else if(imc <= 29.9){
        window.alert(`Sobrepeso`);
    } else if(imc <= 34.9){
        window.alert(`Obesidade grau I`);
    } else if (imc <= 39.9){
        window.alert (`Obesidade grau II`);
    } else {
    window.alert (`Obesidade grau III`);
}