
document.querySelector('#btClass').addEventListener('click', () => {

    const codigoProduto = Number(document.querySelector('#codigoProduto').value);

    const qtDeProduto = Number(document.querySelector('#qtDeProduto').value);

    const produto = calculaDesconto(codigoProduto, qtDeProduto);

    const pDescricao = document.createElement('p');
    pDescricao.innerHTML = produto.descricao;
    pDescricao.setAttribute('data-produto', produto.codigo);
    
    const pValorFinal = document.createElement('p');
    pValorFinal.innerHTML = produto.valorFinal.toFixed(2);
    pValorFinal.classList.add('monetario');

    document.querySelector('#resultado').append(pDescricao, pValorFinal);
    
});


const produtos = [
    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado"
    },
    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers"
    }
];

function calculaDesconto(codigoProduto, qtDeProduto) {

    let preco;
    let desconto;
    let valorFinal;

    for (let i = 0; i < produtos.length; i++) {

        if (produtos[i].codigo === codigoProduto) {

            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }
    }

    if (qtDeProduto >= 3 && qtDeProduto <= 5) {

        desconto = 0.02;

    } else if (qtDeProduto >= 6 && qtDeProduto <= 10) {

        desconto = 0.03;

    } else if (qtDeProduto > 10) {

        desconto = 0.05;

    } else {

        desconto = 0;
    }

    valorFinal = (preco * qtDeProduto) - (preco * qtDeProduto * desconto);

    return {
        codigo: codigoProduto,
        preco: preco,
        descricao: descricao,
        valorFinal: valorFinal
    };

}

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});