const ancoras = [
    { "url": "/index.html", "texto": "Home" },
    { "url": "/src/html/classifica-triangulo.html", "texto": "Exerc. 1" },
    { "url": "/src/html/desconto-funcionario.html", "texto": "Exerc. 2" },
    { "url": "/src/html/calcula-placar.html", "texto": "Exerc. 3" },
    { "url": "/src/html/busca-nomes.html", "texto": "Exerc. 4" },
    { "url": "/src/html/posto-gasosa.html", "texto": "Exerc. 5" },
    { "url": "/src/html/produtos-desconto.html", "texto": "Exerc. 6" },
    { "url": "/src/html/taxa-natal-mortal.html", "texto": "Exerc. 7" }
];

function criaAncora(url, texto) {
    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;
    return ancora;
}

function criaLi(ancora) {
    const li = document.createElement('li');
    li.appendChild(ancora);
    return li;
}

function criaUlNav(ancoras) {
    const ul = document.createElement('ul');
    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);
    });
    return ul;
}

function criaBotaoComClasse(classe) {
    const btn = document.createElement('button');
    btn.classList.add(classe);
    return btn;
}

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');

// Adicionar o botão ao nav, acima da ul
const botaoHamburguer = criaBotaoComClasse('hamburguer');
nav.appendChild(botaoHamburguer);

nav.appendChild(criaUlNav(ancoras));

// <span>Desafios & Exercícios</span>
const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'LogicLab';

// <div class="logo">
const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);

// <div class="logo-menu">
const divLogoMenu = document.createElement('div');
divLogoMenu.classList.add('logo-menu');
divLogoMenu.append(divLogo, nav);

// <header>
const header = document.createElement('header');
header.appendChild(divLogoMenu);

document.body.insertAdjacentElement('afterbegin', header);

// ** Estilos do Navbar **
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.querySelector('[href= "/src/css/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);
