// Menu
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar');

openMenu.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !openMenu.contains(e.target)) {
        sidebar.classList.remove('show');
    }
});

// Devocionais diários
const devocionais = [
    {
        versiculo: '"O Senhor é o meu pastor, nada me faltará." — Salmo 23:1',
        reflexao: 'Deus cuida de cada detalhe da sua vida. Confie na provisão dEle.'
    },
    {
        versiculo: '"Lâmpada para os meus pés é a tua palavra." — Salmo 119:105',
        reflexao: 'A Palavra de Deus guia nosso caminho. Leia, medite, viva.'
    },
    {
        versiculo: '"Entrega o teu caminho ao Senhor; confia nele, e ele o fará." — Salmo 37:5',
        reflexao: 'Não tente controlar tudo. Entregue e descanse em Deus.'
    },
    {
        versiculo: '"Tudo posso naquele que me fortalece." — Filipenses 4:13',
        reflexao: 'Você pode enfrentar qualquer coisa com a força que vem do Senhor.'
    },
    {
        versiculo: '"Não temas, porque eu sou contigo." — Isaías 41:10',
        reflexao: 'Mesmo nos dias difíceis, Deus está ao seu lado.'
    },
    {
        versiculo: '"Bem-aventurados os que choram, porque serão consolados." — Mateus 5:4',
        reflexao: 'A dor pode durar uma noite, mas a alegria vem pela manhã.'
    },
    {
        versiculo: '"Buscai primeiro o Reino de Deus." — Mateus 6:33',
        reflexao: 'Priorize o espiritual. O resto será acrescentado.'
    }
];

// Escolhe devocional com base no dia da semana
const dia = new Date().getDay(); // 0 = domingo, 1 = segunda...
document.getElementById('versiculo-dia').textContent = devocionais[dia].versiculo;
document.getElementById('reflexao-dia').textContent = devocionais[dia].reflexao;
