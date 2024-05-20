const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const selectedEmoji = document.getElementById('emoji-list').value;

  const subject = `Message from ${name}`;
  const body = `${message}\n\nEmoji: ${selectedEmoji}`;

  const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const likeText = button.querySelector('.like-text');
    const likeCount = parseInt(likeText.textContent.split('(')[1].slice(0, -1));
    likeText.textContent = `Give me a Like  (${likeCount + 1})`;
  });
});

const emojiList = document.getElementById('emoji-list');
const messageTextarea = document.getElementById('message');

// Add a change event listener to the emoji list
emojiList.addEventListener('change', () => {
  // Get the selected emoji value
  const selectedEmoji = emojiList.value;

  // Append the selected emoji to the message textarea's value
  messageTextarea.value += selectedEmoji;
});
