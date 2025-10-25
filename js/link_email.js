document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('contato');

    // Verifica se o link já foi clicado antes
    if (localStorage.getItem('linkContatoClicado')) {
        link.classList.add('visited');
    }

    // Ao clicar, marca como "visitado"
    link.addEventListener('click', () => {
        localStorage.setItem('linkContatoClicado', 'true');
        link.classList.add('visited');
    });
});
