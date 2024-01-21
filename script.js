document.addEventListener('DOMContentLoaded', () => {
    // Restaura o estado da fila ao carregar a página
    restoreState();

    document.querySelectorAll('.fila ul li').forEach(item => {
        item.addEventListener('click', (event) => {
            const filaId = item.closest('.fila').id;
            setActiveConsultant(filaId, item.dataset.consultor);
        });
    });
});

function setActiveConsultant(filaId, consultor) {
    // Remove a classe 'ativo' de todos os itens
    const fila = document.getElementById(filaId);
    fila.querySelectorAll('li').forEach(li => li.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao item clicado e salva no localStorage
    const itemToActivate = fila.querySelector(`li[data-consultor="${consultor}"]`);
    itemToActivate.classList.add('ativo');
    localStorage.setItem(filaId, consultor);
}

function restoreState() {
    document.querySelectorAll('.fila').forEach(fila => {
        const filaId = fila.id;
        const activeConsultor = localStorage.getItem(filaId);
        if (activeConsultor) {
            setActiveConsultant(filaId, activeConsultor);
        }
    });
}