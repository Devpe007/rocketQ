export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper');

  function open() {
    modalWrapper.classList.add('active');
  };

  function close() {
    modalWrapper.classList.remove('active');
  };

  const cancelButton = document.querySelector('.button.cancel');

  cancelButton.addEventListener('click', close);

  return {
    open,
    close,
  };
};
