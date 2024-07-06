const filmes = [
    "O Show de Truman",
    "Clube da Luta",
    "Pobres Criaturas",
    "La La Land",
    "Interestelar",
    "Amor a Toda Prova",
    "Duna",
    "O Lobo de Wall Street",
    "Seven",
    "Your Name",
    "Close",
    "A Mulher Rei",
    "Tudo em Família",
    "Cães de Aluguel",
    "Grande Hotel",
    "Jackie Brown",
    "Kill Bill - Volume 1",
    "Kill Bill - Volume 2",
    "Sin City - A Cidade do Pecado",
    "À Prova de Morte",
    "Os Oito Odiados",
    "Era uma Vez em... Hollywood",
    "um lugar silencioso dia um",
];

const comidas = [
    "Pizza",
    "Hambúrguer",
    "Sushi",
    "Tacos",
    "Massa",
    "Salada",
    "Churrasco",
    "Sanduíche",
    "Íscas de Frango",
    "Íscas de Peixe",
    "Crepes",
    "Guacamole",
    "Lasanha",
    "Risoto",
    "Pipoca",
    "Sorvete",
    "Açaí",
    "Brigadeiro",
    "Espetinho",
    "Fondue de Queijo",
    "Fondue de Chocolate",
    "Burrito",
    "Poke",
];

const bebidas = [
    "Água",
    "Refrigerante",
    "Suco",
    "Cerveja",
    "Vinho",
    "Chá Gelado",
    "Café",
    "Milkshake",
    "Coquetel",
    "Caipirinha",
    "Margarita",
    "Moster de Manga",
    "Champagne",
    "Licor",
    "Gin",
    "Mojito",
    "Smoothie de Frutas",
];

const botaoSorteioFilme = document.getElementById('botao-sorteio-filme');
const botaoSorteioComida = document.getElementById('botao-sorteio-comida');
const botaoSorteioBebida = document.getElementById('botao-sorteio-bebida');
const filmeSorteadoTexto = document.getElementById('filme-sorteado-texto');
const comidaSorteadaTexto = document.getElementById('comida-sorteada-texto');
const bebidaSorteadaTexto = document.getElementById('bebida-sorteada-texto');

botaoSorteioFilme.addEventListener('click', () => {
    const indiceSorteado = Math.floor(Math.random() * filmes.length);
    filmeSorteadoTexto.textContent = filmes[indiceSorteado];
});

botaoSorteioComida.addEventListener('click', () => {
    const indiceSorteado = Math.floor(Math.random() * comidas.length);
    comidaSorteadaTexto.textContent = comidas[indiceSorteado];
});

botaoSorteioBebida.addEventListener('click', () => {
    const indiceSorteado = Math.floor(Math.random() * bebidas.length);
    bebidaSorteadaTexto.textContent = bebidas[indiceSorteado];
});