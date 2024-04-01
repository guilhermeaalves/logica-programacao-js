function DescontoFuncionario(valor, tipoComprador) {
    const funcionario = tipoComprador;
    let resultado;

    if (!isNaN(valor)){

        if (tipoComprador === funcionario) {
            resultado = valor + 10/100;
        }
    
        else if (tipoComprador === vip) {
            resultado = valor * 5 / 100;
        }
    
        else {
            resultado = valor
        }
    }

    return resultado;
}