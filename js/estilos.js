const links = [
    {"rel": "stylesheet", "href": "/src/reset.css"},
    {"rel": "stylesheet", "href": "/src/geral.css"},
    {"rel": "stylesheet", "href": "/src/responsividadeGeral.css"}
];

links.forEach(link => {
    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l); 
});