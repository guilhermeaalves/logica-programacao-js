# logica-programacao-js

Treinando a lógica de programação com JavaScript

## op-aritmeticos.js

```js
const numero1 = 40;
const numero2 = 20;
```

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuídas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtração dos números é ${numero1 - numero2}`);
console.log(`A multiplicação dos números é ${numero1 * numero2}`);
console.log(`A divisão dos números é ${numero1 / numero2}`);
console.log(`O resto da divisão dos números é ${numero1 % numero2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto da divisão
* `**` -> potênciação

## op-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a variável `número` usando a palavra `let`, pois essa variável será **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição.

~~~js
console.log(`O número é inicialmente igual a ${numero}`);
console.log(`Após atribuir somando o número 10: ${numero += 10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incrementando o número em 1: ${++numero}`);
console.log(`Decrementando o número em 1: ${--numero}`);
console.log(`O número final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> atribuição com soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero ++` (pós-incremento) ou `++ numero` (pré-incremento).
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado). Ex: `numero --` (pós-decremento) ou (pré-decremento) `-- numero`

## op-comparacao.js

Neste arquivo conhecemos os operadores de comparação e a estrutura da lógica de decisão **if-else**.

~~~js
const a = '52', b = 52;
const condicao = a == b;
~~~

A palavra `const` é utilizada para declaração de variáveis que não vão ser reatribuídas (não permite reatribuição).

Aqui declaramos duas condições que serão são exibidas no console como `True` (verdadeiro) ou `False` (falso). A condição armazena o resultado da **comparação entre duas variáveis**

~~~js
if (condicao)
    {
    console.log('VERDADEIRO');
}

else {
    console.log('FALSO');
}
~~~

Operadores de comparação:

* `===` -> é estritamente igual, (valor e tipo)
* `==` -> é igual
* `!==` -> não é estritamente igual, (valor ou tipo)
* `>` -> maior que
* `<` -> menor que
* `>=`-> maior OU igual
* `<=` -> menor OU igual

<h4 align="center"><a href="https://guilhermeaalves.github.io/logica-programacao-js/">Veja meu projeto aqui</a></h4>
