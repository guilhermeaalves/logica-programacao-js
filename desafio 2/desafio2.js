function calculaIMC() {
    
    const
        inf = window.alert(`Lembrando, que o cáculo de imc, não leva em consideração diversos fatores, como gênero, biotipo, saúde, se você pratica ou não esportes, por via das dúvidas consulte um médico.`),
        peso = window.prompt(`Informe seu peso`),
        altura = window.prompt(`Informe sua altura`),
        imc= (peso / altura **2);
    
    if (imc <= 18.5){
        window.alert(`IMC: ${imc.toFixed(1)} --> Abaixo do peso `);
        } else if(imc <= 24.9){
            window.alert(`IMC: ${imc.toFixed(1)} --> Peso normal`);
        } else if(imc <= 29.9){
            window.alert(`IMC: ${imc.toFixed(1)} --> Sobrepeso`);
        } else if(imc <= 34.9){
            window.alert(`IMC: ${imc.toFixed(1)} --> Obesidade grau I`);
        } else if (imc <= 39.9){
            window.alert (`IMC: ${imc.toFixed(1)} --> Obesidade grau II`);
        } else {
            window.alert (`IMC: ${imc.toFixed(1)} --> Obesidade grau III`);
    }
    
}
