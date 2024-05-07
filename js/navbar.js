const ancoras = [
    { "url": "/index.html", "texto": "Home" },
    { "url": "/exercícios/ex1.html", "texto": "Exerc. 1" },
    { "url": "/exercícios/ex2.html", "texto": "Exerc. 2" },
    { "url": "/exercícios/ex3.html", "texto": "Exerc. 3" },
    { "url": "/exercícios/ex4.html", "texto": "Exerc. 4" },
    { "url": "/exercícios/ex5.html", "texto": "Exerc. 5" },
    { "url": "/exercícios/ex6.html", "texto": "Exerc. 6" },
    { "url": "/exercícios/ex7.html", "texto": "Exerc. 7" }
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

// <nav> do menu
const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

// Aqui segue de acordo com a solução do professor...

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

// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);


// ** Estilos do Navbar **
const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/css/navbar.css');

document.querySelector('[href= "/src/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);
