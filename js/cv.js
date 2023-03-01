const h2s = document.querySelectorAll('.contenido section h2');

h2s.forEach(h2 => {
  const ul = h2.nextElementSibling;
  ul.style.display = 'none';
  h2.addEventListener('click', () => {
    ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
  });
});






