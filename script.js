const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  button.setAttribute('aria-expanded', open);
  button.textContent = open ? '×' : '☰';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = '☰';
}));

document.querySelector('#year').textContent = new Date().getFullYear();
