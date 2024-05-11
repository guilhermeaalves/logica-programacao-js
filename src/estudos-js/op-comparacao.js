const a = 'cinquenta e dois', b = 'cinquenta e dois';
const condicao = a == b;

// Estrutura ID-ElSE

// === é estritamente igual, (compara os tipos)
// == é igual
// !== não é estritamente igual, (valor ou tipo)
// ! não é igual
// > maior que
// < menor que
// >= maior OU igual
// <= menor OU igual
// true -> Palavra reservada para o valor "verdadeiro"
// false -> Palavra reservada para o valor "falso"

if (condicao) //expressão para ser avaliada 
    {
    console.log('VERDADEIRO');
} //código que será executado se a expressão for verdadeira

else {
    console.log('FALSO');
}