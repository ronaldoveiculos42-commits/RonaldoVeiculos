document.getElementById('ano').textContent = new Date().getFullYear();
const busca = document.getElementById('busca');
const cards = [...document.querySelectorAll('.carro')];
busca.addEventListener('input', () => {
  const q = busca.value.toLowerCase().trim();
  cards.forEach(card => {
    card.style.display = card.dataset.search.includes(q) ? '' : 'none';
  });
});

const principal = document.querySelector('.foto-principal img');
const miniaturas = [...document.querySelectorAll('.miniaturas button')];
const modal = document.getElementById('modal-foto');
const imagemModal = modal.querySelector('img');
miniaturas[0]?.classList.add('ativa');
miniaturas.forEach(botao => botao.addEventListener('click', () => {
  principal.src = botao.dataset.foto;
  miniaturas.forEach(item => item.classList.remove('ativa'));
  botao.classList.add('ativa');
}));
document.querySelector('.foto-principal')?.addEventListener('click', () => {
  imagemModal.src = principal.src;
  modal.showModal();
});
modal.querySelector('.fechar').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
