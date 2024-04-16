document.getElementById('btClass').addEventListener('click', function () {

    valor = parseFloat(document.getElementById('valor').value);
    tipoComprador = document.getElementById('tipoComprador').value;
    const valorFinal = DescontoFuncionario(valor, tipoComprador);

    document.getElementById('resultado').innerHTML = valorFinal;
});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});

function DescontoFuncionario(valor, tipoComprador) {


    if (tipoComprador === "vip") {
        resultado = valor - (valor * 0.05);
    }
    else if (tipoComprador === "funcionario") {
        resultado = valor - (valor * 0.1);
    }
    else {
        resultado = valor;
    }

    return resultado;
}