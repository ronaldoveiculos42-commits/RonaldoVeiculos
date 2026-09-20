document.getElementById('ano').textContent = new Date().getFullYear();
const busca = document.getElementById('busca');
const cards = [...document.querySelectorAll('.carro')];
busca.addEventListener('input', () => {
  const q = busca.value.toLowerCase().trim();
  cards.forEach(card => {
    card.style.display = card.dataset.search.includes(q) ? '' : 'none';
  });
});