const replyButton = document.querySelector('#replyButton');

replyButton.addEventListener('click', () => {
  replyButton.innerHTML = 'I\u2019M LISTENING <span>\u2193</span>';
  document.querySelector('.prompt-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
