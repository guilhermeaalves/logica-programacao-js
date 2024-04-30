document.querySelector('#btClass').addEventListener('click', ()=>{

    taxa = document.querySelector('#taxa').value.toLowerCase();
    nascimentos = parseFloat(document.querySelector('#nascimentos').value);
    habitantes = parseFloat(document.querySelector('#habitantes').value);
    const resultado = taxaMouN(nascimentos, taxa, habitantes);

    document.querySelector('#resultado').innerHTML = resultado.toFixed(2);

    function taxaMouN(nascimentos, taxa, habitantes){

        if(taxa === 'n'){
            return nascimentos * 1000 / habitantes;
        }
        else if(taxa === 'm'){
            return nascimentos * 1000 / habitantes;
        }
        else{
            return 'Comando digitado não existe, digite M ou N para escolher entre taxa de Mortalidade e taxa de Natalidade.'
        }

    }
});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});