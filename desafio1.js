// Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Nãe é necessário ler as notas, você pode defini-las com variáveis.

const nota1 = 5, nota2 = 5, nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;


if (media >= 7) {
    console.log(`aprovado`)
}

else if (media >= 5){
    console.log(`exame`)
}

else {
    console.log(`reprovado`)
}
