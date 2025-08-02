document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.language-list button');
    const sections = document.querySelectorAll('.menu-section');
    const backBtns = document.querySelectorAll('.back-btn');

    // Gestione della selezione della lingua
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            document.querySelector('.language-list').style.display = 'none';
            document.querySelector('h1').style.display = 'none';

            // Nascondi tutte le sezioni
            sections.forEach(sec => sec.classList.remove('active'));

            // Mostra la sezione della lingua selezionata
            const menuSection = document.getElementById(`menu-${lang}`);
            if (menuSection) menuSection.classList.add('active');
        });
    });

    // Gestione dei bottoni del menu a tendina
    document.querySelectorAll('.menu-dropdown button').forEach(btn => {
        btn.addEventListener('click', function () {
            const parentSection = btn.closest('.menu-section');

            // Trova la categoria corrispondente al bottone
            const catClass = btn.className.replace('btn-', 'category-');
            const catDiv = parentSection.querySelector('.' + catClass);

            // Alterna la classe active (mostra/nascondi)
            if (catDiv) {
                catDiv.classList.toggle('active');
            }
        });
    });

    // Gestione del bottone "Torna indietro"
    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Nascondi tutte le sezioni
            sections.forEach(sec => sec.classList.remove('active'));

            // Ripristina lista lingue e titolo
            document.querySelector('.language-list').style.display = '';
            document.querySelector('h1').style.display = '';
        });
    });
});
