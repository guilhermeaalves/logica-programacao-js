document.getElementById('btClass').addEventListener('click', function () {

    valor = parseFloat(document.querySelector('#valor').value);
    tipoComprador = document.querySelector('#tipoComprador').value;
    const valorFinal = DescontoFuncionario(valor, tipoComprador);

    document.querySelector('#resultado').innerHTML = valorFinal.toFixed(2);
});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
    document.querySelector('#tipoComprador').innerHTML = "";
    document.querySelector('#valor').innerHTML = "";
});

function DescontoFuncionario(valor, tipoComprador) {


    if (tipoComprador === "vip") {
        resultado = valor - (valor * 0.05);
    }
    else if (tipoComprador === "Funcionário") {
        resultado = valor - (valor * 0.1);
    }
    else if (tipoComprador === "Cliente comum"){
        resultado = valor;
    }
    else {
        resultado = valor;
    }

    return resultado;
}