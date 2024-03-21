function CalculadoraDeMedia() {

    
    const
        nomeDoAluno = window.prompt(`Digite o nome do aluno`),
        primeiraNota = parseFloat(window.prompt(`Digite a primeira nota`)),
        segundaNota = parseFloat(window.prompt(`Digite a segunda nota`)),
        terceiraNota = parseFloat(window.prompt(`Digite a terceira nota`));
    
    if (!isNaN (primeiraNota) && !isNaN (segundaNota) && !isNaN (terceiraNota)){
    
        const
        media = ((primeiraNota + segundaNota + terceiraNota) / 3);
    
        if(media >= 7){
            window.alert(`O aluno ${nomeDoAluno} foi aprovado, com a nota: ${media.toFixed(2)} Parabéns !`)
        }
        else if(media >= 5){
            window.alert(`O aluno ${nomeDoAluno} está de recuperação, com a nota: ${media.toFixed(2)}`)
        }
        else{
            window.alert(`O aluno ${nomeDoAluno} foi reprovado, com a nota: ${media.toFixed(2)}`)
        }
    }else{
        window.alert(`Algum valor que foi digitado na parte das notas, não é um número. Recarrege à página e refaça.`)
    }


}