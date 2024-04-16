let nomes = [];

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {

        evento.preventDefault();

        if (nomes.length < 10) {

            document.querySelector('#btClass').click();
        } else {

            document.querySelector('#btPesquisar').click();
        }
    }
});


document.querySelector('#btClass').addEventListener('click', () => {

    nomes.push(document.querySelector('#nome').value);

    if (nomes.length === 10) {

        document.querySelector('label[for="nome"]').innerHTML = 'Nome para pesquisar:';

        document.querySelector('#btPesquisar').classList.remove('oculto');

        document.querySelector('#btClass').classList.add('oculto');

    }

});

document.querySelector('#btPesquisar').addEventListener('click', () => {

    const nomeBuscado = document.querySelector('#nome').value;

    if (nomes.includes(nomeBuscado)) {

        document.querySelector('#resultado').innerHTML = 'ACHEIIIIIIIIIIIIIIIIIIIIIII';

    } else {

        document.querySelector('#resultado').innerHTML = 'NÃO ACHEIIII';

    }

});
