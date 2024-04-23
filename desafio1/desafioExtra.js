function CalculadoraDeMedia() {

    if (!isNaN(primeiraNota) && !isNaN(segundaNota) && !isNaN(terceiraNota)) {

        const
            media = ((primeiraNota + segundaNota + terceiraNota) / 3);

        if (media >= 7) {
            (`O(a) aluno(a) ${nomeDoAluno} foi aprovado, com a nota: ${media.toFixed(2)} Parabéns !`)
        }
        else if (media >= 5) {
            (`O(a) aluno(a) ${nomeDoAluno} está de recuperação, com a nota: ${media.toFixed(2)}`)
        }
        else {
            (`O(a) aluno(a) ${nomeDoAluno} foi reprovado, com a nota: ${media.toFixed(2)}`)
        }
    } else {
        (`Algum valor que foi digitado na parte das notas, não é um número. Recarrege à página e refaça.`)
    }


}