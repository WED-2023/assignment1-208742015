const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
})
const likeButtons = document.querySelectorAll('.like-btn');
// dsfsd
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const likeText = button.querySelector('.like-text');
    const likeCount = parseInt(likeText.textContent.split('(')[1].slice(0, -1));
    likeText.textContent = `Give me a Like  (${likeCount + 1})`;
  });
}); 