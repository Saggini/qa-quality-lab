const apiURL = "http://localhost:3000/api/bugs";

const listaBugs = document.getElementById('lista-bugs');
const form = document.getElementById('bugForm');

async function carregarBugs() {
  listaBugs.innerHTML = '';
  const res = await fetch(apiURL);
  const bugs = await res.json();

  bugs.forEach(bug => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${bug.titulo}</strong> - ${bug.status} (${bug.prioridade})<br>${bug.descricao}`;
    listaBugs.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const status = document.getElementById('status').value;
  const prioridade = document.getElementById('prioridade').value;

  await fetch(apiURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, descricao, status, prioridade })
  });

  form.reset();
  carregarBugs();
});

carregarBugs();