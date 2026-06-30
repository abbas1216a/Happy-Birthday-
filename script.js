const wishButton = document.getElementById('wishButton');
const wishText = document.getElementById('wishText');

wishButton.addEventListener('click', () => {
  wishText.textContent = 'May your birthday be as wonderful and bright as you are, and may your year ahead overflow with happiness!';
  wishText.classList.add('visible');
  wishButton.textContent = 'Wish Delivered!';
  wishButton.disabled = true;
});
