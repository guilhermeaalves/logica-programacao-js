/* Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).
*/
document.querySelector('#btCalcTemp').addEventListener('click', function () {
    const valorTemperatura = document.querySelector('#valorTemperatura').value;
    const escalaAtual = document.querySelector('#escalaAtual').value;
    const escalaConvertida = document.querySelector('#escalaConvertida').value;
    const resultado = converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida);
    console.log(resultado);
    document.querySelector('#resultadoTemp').innerHTML = resultado;
});

document.querySelector('#btResetTemp').addEventListener('click', function () {
    document.querySelector('#resultadoTemp').innerHTML = "";
});

function converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida) {
    let resultado;

    if (!isNaN(valorTemperatura)) {


        if (escalaAtual === 'c') {

            if (escalaConvertida === 'k') {
                resultado = escalaAtual + 273.15;
            }

            else if (escalaConvertida === 'f') {
                resultado = valorTemperatura * 9 / 5 + 32;
            }

            else if (escalaConvertida === 'c') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }

        } else if (escalaAtual === 'f') {

            if (escalaConvertida === 'k') {
                resultado = (valorTemperatura - 32) * 5 / 9 + 273.15;
            }

            else if (escalaConvertida === 'c') {
                resultado = (valorTemperatura - 32) * 5 / 9 ;
            }

            else if (escalaConvertida === 'f') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }
        else if (escalaAtual === 'k') {

            if (escalaConvertida === 'f') {
                resultado = valorTemperatura * 9 / 5 - 459.67;
            }

            else if (escalaConvertida === 'c') {
                resultado = valorTemperatura - 273.15;
            }

            else if (escalaConvertida === 'k') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }
        else {
            msgErro = 'ERRO: O número digitado para conversão não é um número válido.';
        }
    }

    return resultado.toFixed(2);
}


