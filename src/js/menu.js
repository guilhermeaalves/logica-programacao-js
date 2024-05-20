const hamburger = document.querySelector(".hamburger");
const menubar = document.querySelector(".logo-menu");

hamburger.addEventListener("click", () => menubar.classList.toggle("active"));