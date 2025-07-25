document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.language-list button');
  const sections = document.querySelectorAll('.menu-section');
  const backBtns = document.querySelectorAll('.back-btn');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      // Nasconde lista lingue e titolo
      document.querySelector('.language-list').style.display = 'none';
      document.querySelector('h1').style.display = 'none';
      // Mostra sezione menù selezionata
      document.getElementById(`menu-${lang}`).classList.add('active');
    });
  });

  backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Nasconde tutte le sezioni menù
      sections.forEach(sec => sec.classList.remove('active'));
      // Ripristina lista lingue e titolo
      document.querySelector('.language-list').style.display = '';
      document.querySelector('h1').style.display = '';
    });
  });
});
