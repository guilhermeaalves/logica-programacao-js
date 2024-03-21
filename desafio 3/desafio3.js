/* Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).
*/

function converteTemperatura(){

    const
    valorTemperatura = parseFloat(window.prompt(`Valor da temperatura`)),
    CF = (valorTemperatura * 9/5) + 32,
    CK = valorTemperatura + 273.15,
    FC = (valorTemperatura - 32) * 5/9,
    FK = (valorTemperatura + 459.67) * 5/9,
    KC = (valorTemperatura - 273.15),
    KF = (valorTemperatura * 9/5) - 459.67;
    
    if (!isNaN (valorTemperatura)){
        
        const
        atual = window.prompt(`Digite a temperatura atual "C, F ou K"`).toLowerCase(),
        conversao = window.prompt(`Informe para qual escala você deseja converter "C, F ou K"`).toLowerCase();
         
        if (atual == 'c' && conversao == 'f'){
            window.alert(`Temperatura: ${CF.toFixed(2)}°F`)
        }
        else if (atual == 'c' && conversao == 'k'){
            window.alert(`Temperatura: ${CK.toFixed(2)}`)
        }
        else if (atual == 'f' && conversao == 'c'){
            window.alert(`Temperatura: ${FC.toFixed(2)}°`)
        }
        else if (atual == 'f' && conversao == 'k')
        {
            window.alert(`Temperatura: ${FK.toFixed(2)}`)
        }
        else if (atual == 'k' && conversao == 'c'){
            window.alert(`Temperatura: ${KC.toFixed(2)}°`)
        }
        else if (atual == 'k' && conversao == 'f'){
            window.alert(`Temperatura: ${KF.toFixed(2)}°F`)
        }
        
    }else{
            window.alert(`Temperatura digitada não é um número válido ou você é um . Atualize a página!`)
        }

}
