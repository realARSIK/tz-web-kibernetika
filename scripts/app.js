let openModal = document.getElementById('openModal');
let modal = document.getElementById('modal');
let closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modal.showModal()
})

closeModal.addEventListener('click', () => {
  modal.close()
})

modal.addEventListener('click', (e) => {
  const modal = e.currentTarget;
  const isClickOnBackDrop = e.target === modal;

  if (isClickOnBackDrop) {
    modal.close()
  }
})