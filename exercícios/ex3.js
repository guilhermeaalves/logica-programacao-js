document.getElementById('btClass').addEventListener('click', function () {

    time1 = parseFloat(document.getElementById('time1').value);
    time2 = parseFloat(document.getElementById('time2').value);
    const valorFinal = Placar(time1, time2);

    document.getElementById('resultado').innerHTML = valorFinal;
});

document.querySelector('#btlimpa').addEventListener('click', function () {
    document.querySelector('#resultado').innerHTML = "";
});

function Placar(time1, time2) {

    if (time1 > time2) {
        return 'Vitória do primeiro time';
    }

    else if (time2 > time1) {
        return 'Vitória do segundo time';
    }

    else {
        return 'Empate';
    }

}