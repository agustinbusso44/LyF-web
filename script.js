const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

if (button && navigation) {
  button.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    button.textContent = open ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menú');
      button.textContent = '☰';
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
