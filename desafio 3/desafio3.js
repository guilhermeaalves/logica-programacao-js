/* Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).
*/

function converteTemperatura(valorTemperatura, escalaAtual, escalaConvertida) {
    let resultado;

    if (!isNaN(valorTemperatura)) {


        if (escalaAtual === 'c') {

            if (escalaConvertida === 'k') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${(valorTemperatura + 273.15).toFixed(2)}`);
            }

            else if (escalaConvertida === 'f') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${(valorTemperatura * 9 / 5 + 32).toFixed(2)}°F`);
            }

            else if (escalaConvertida === 'c') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }

        } else if (escalaAtual === 'f') {

            if (escalaConvertida === 'k') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${(valorTemperatura + 459.67) * 5 / 9 .toFixed(2)}`)
            }

            else if (escalaConvertida === 'c') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${((valorTemperatura - 32) * 5 / 9 .toFixed(2))}`);
            }

            else if (escalaConvertida === 'f') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }
        else if (escalaAtual === 'k') {

            if (escalaConvertida === 'f') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${(valorTemperatura * 9 / 5 - 459.67.toFixed(2))}`);
            }

            else if (escalaConvertida === 'c') {
                resultado = (`${valorTemperatura} em ${escalaAtual} -> ${(valorTemperatura - 273.15.toFixed(2))}`);
            }

            else if (escalaConvertida === 'k') {
                resultado = (`ERRO escala selecionada: ${escalaConvertida}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }
        else {
            msgErro = 'ERRO: O número digitado para conversão não é um número válido.';
        }
    }

    return resultado;
}
