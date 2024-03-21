/* Escreva um código em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter as 3 notas de um aluno, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. Nãe é necessário ler as notas, você pode defini-las com variáveis. */

const n1 = 8, n2 = 10, n3 = 5;
const media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    console.log(`Aprovado com nota ${media.toFixed(1)}`);
} else if (media >= 5) {
    console.log(`Exame com nota ${media.toFixed(1)}`);
} else {
    console.log(`Reprovado ${media.toFixed(1)}`);
}