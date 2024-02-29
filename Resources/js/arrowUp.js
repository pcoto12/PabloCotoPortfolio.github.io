const arrowUpBtn = document.getElementById('arrowUpBtn');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    arrowUpBtn.style.display = 'block';
  } else {
    arrowUpBtn.style.display = 'none';
  }
});

arrowUpBtn.addEventListener('click', () => {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
});
