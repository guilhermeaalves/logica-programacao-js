document.querySelector('#btClass').addEventListener('click', function () {

    litros = parseFloat(document.querySelector('#litros').value);
    tipoCombustivel = document.querySelector('#combustivel').value.toLowerCase();
    const valorFinal = descontoCombustivel(tipoCombustivel, litros);

    document.querySelector('#resultado').innerHTML = valorFinal.toFixed(2);

    function descontoCombustivel(tipoCombustivel, litros) {

        if (tipoCombustivel === 'g') {

            if (litros <= 20) {
                return litros * 5.19 - (litros * 5.19 * 0.04);
            }
            else if (litros > 55) {
                return "Quantidade máxima de litros atingida, por favor digite um número menor que 55L."
            }
            else if (litros < 1){
                return "Quantidade mínima de litros não foi atingida, favor digitar um número maior que 1L."
            }
            else {
                return litros * 5.19 - (litros * 5.19 * 0.06);
            }
        }

        if (tipoCombustivel === 'a') {

            if (litros <= 20) {
                return litros * 2.89 - (litros * 2.89 * 0.03);
            }
            else if (litros > 55) {
                return "Quantidade máxima de litros atingida, por favor digite um número menor que 55L."
            }
            else if (litros < 0){
                return "Quantidade mínima de litros não foi atingida, favor digitar um número maior que 1L."
            }
            else {
                return litros * 2.89 - (litros * 2.89 * 0.05);
            }
        }

        if (tipoCombustivel != "a" || "g") {
            return "Tipo de combustível indisponível, favor digitar A ou G para escolher entre Álcool e Gasolina.";
        }

    }

});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});