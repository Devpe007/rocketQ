import Modal from './modal.js';

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// Pegar todos os botões que exitem com a classe check;
const checkButtons = document.querySelectorAll('.actions a.check');

function handleClick(event, check = true) {
  event.preventDefault();

  const text = check ? 'Marcar como lida' : 'Excluir pergunta';
  const slug = check ? 'check' : 'delete';

  const roomId = document.querySelector('#room-id').dataset.id;
  const questionId = event.target.dataset.id;

  const form = document.querySelector('.modal form');
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);

  modalTitle.innerHTML = text;
  modalDescription.innerHTML = `Tem, certeza que você deseja ${text.toLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;

  check ? modalButton.classList.remove('red') : modalButton.classList.add('red');

  modal.open();
};

checkButtons.forEach((button) => {
  // adicionar a escuta;
  button.addEventListener('click', handleClick);
});

// Quando o botão delete for clicado ele abre a modal;
const deleteButton = document.querySelectorAll('.actions a.delete');

deleteButton.forEach((button) => {
  button.addEventListener('click', (event) => handleClick(event, false));
});
