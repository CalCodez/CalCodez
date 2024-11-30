//!!Modals Controls
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Function to Open Modal
openModal.forEach((elm) =>
	elm.addEventListener('click', () => {
		const modalId = elm.dataset.open;
		document.getElementById(modalId).classList.add(isVisible);
	})
);

// Function to Close Modal
closeModal.forEach((elm) =>
	elm.addEventListener('click', () => {
		elm.parentElement.parentElement.parentElement.classList.remove(isVisible);
	})
);

// Function to Close Modal on click outside or escape key
document.addEventListener('click', (e) => {
	if (e.target === document.querySelector('.modal.is-visible')) {
		document.querySelector('.modal.is-visible').classList.remove(isVisible);
	}
});

document.addEventListener('keyup', (e) => {
	if (e.key === 'Escape') {
		document.querySelector('.modal.is-visible').classList.remove(isVisible);
	}
});

console.log(exitButton);
