/* Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).
*/

function converteTemperatura() {
let mensagem;

    if (!isNaN(valorTemperatura)) {


        if (atual === 'c') {

            if (conversao === 'k') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${(valorTemperatura + 273.15).toFixed(2)}`);
            }

            else if (conversao === 'f') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${(valorTemperatura * 9 / 5 + 32).toFixed(2)}°F`);
            }

            else if (conversao === 'c') {
                mensagem = (`Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        } else if (atual === 'f') {

            if (conversao === 'k') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${(valorTemperatura + 459.67) * 5 / 9 .toFixed(2)}`)
            }

            else if (conversao === 'c') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${((valorTemperatura - 32) * 5 / 9 .toFixed(2))}`);
            }

            else if (conversao === 'f') {
                mensagem = (`Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }
        else if (atual === 'k') {

            if (conversao === 'f') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${(valorTemperatura * 9 / 5 - 459.67.toFixed(2))}`);
            }

            else if (conversao === 'c') {
                mensagem = (`${valorTemperatura} em ${atual} -> ${(valorTemperatura - 273.15.toFixed(2))}`);
            }

            else if (conversao === 'f') {
                mensagem = (`Escala selecionada: ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
            }
        }

    }
}
