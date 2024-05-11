const links = [
    {"rel": "stylesheet", "href": "/src/css/reset.css"},
    {"rel": "stylesheet", "href": "/src/css/geral.css"},
    {"rel": "stylesheet", "href": "/src/css/responsividadeGeral.css"}
];

links.forEach(link => {
    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l); 
});