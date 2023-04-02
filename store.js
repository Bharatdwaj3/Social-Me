const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
const messagesList = document.querySelector('.messages-list');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();

  if (messageText !== '') {
    const message = document.createElement('li');
    message.classList.add('message');
    message.innerHTML = `<span class="message-author">You:</span> ${messageText}`;
    messagesList.appendChild(message);
    messageInput.value = '';
  }
});

messageInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});
