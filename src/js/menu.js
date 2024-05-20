document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.logo-menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuHamburguer.classList.toggle('menuActive');
    });
});