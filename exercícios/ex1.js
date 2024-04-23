document.querySelector('#btClass').addEventListener('click', function () {

    // casting -> definir um tipo diferente

    const ladoA = Number(document.querySelector('#ladoA').value);
    const ladoB = Number(document.querySelector('#ladoB').value);
    const ladoC = Number(document.querySelector('#ladoC').value);

    const classificacao = classificaTriangulo(ladoA, ladoB, ladoC);

    document.querySelector('#resultado').innerHTML = classificacao;

});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});



function classificaTriangulo(ladoA, ladoB, ladoC) {

    let mensagemErro, tipoTriangulo;
    if (!isNaN(ladoA || ladoB || ladoC)) {

        if ((ladoA < (ladoB + ladoC)) && (ladoB < (ladoA + ladoC)) && (ladoC < (ladoA + ladoB))) {

            if (ladoA === ladoB && ladoB === ladoC) {
                tipoTriangulo = 'Equilátero';
            }
            else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
                tipoTriangulo = 'Isóceles'
            }
            else {
                tipoTriangulo = 'Escaleno'
            }
        } else {
            mensagemErro = 'A forma não é um triângulo';
        }

        return tipoTriangulo ?? mensagemErro;
        
    } else {
        return 'ERRO: O número digitado para classificação, não é um número válido.';
    }


    // ?? => operador de coalescência, pega o primeiro valor válido.
}