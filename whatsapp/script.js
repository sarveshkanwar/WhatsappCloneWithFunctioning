document.addEventListener('DOMContentLoaded', function() {
  const messageBoxes = document.querySelectorAll('.message-box');

  // Loop through each message box
  messageBoxes.forEach(messageBox => {
    const messageText = messageBox.querySelector('p');
    
    // Check if the message is from the sender (my-message class)
    if (messageBox.classList.contains('my-message')) {
      // Create a delete icon element
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash-alt delete-icon';
      // Add the delete icon to the message box
      messageBox.appendChild(deleteIcon);

      // Add a click event listener to the delete icon
      deleteIcon.addEventListener('click', function() {
        // Add the deleted-message class to hide the message
        messageBox.classList.add('deleted-message');
      });
    }

    // Add a click event listener to each message text
    messageText.addEventListener('click', function() {
      // Toggle the deleted-message class to hide/show the message
      messageBox.classList.toggle('deleted-message');
    });
  });

  const sendButtons = document.querySelectorAll('.chatbox-input i.fa-paper-plane');

  // Loop through each send button
  sendButtons.forEach(button => {
    button.addEventListener('click', function() {
      const messageInput = button.previousElementSibling;
      const messageText = messageInput.value.trim();

      if (messageText !== '') {
        // Create a new message box element
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box my-message';
        messageBox.innerHTML = `<p>${messageText}<br><span>${getCurrentTime()}</span></p>`;
        // Add the delete icon to the new message box
        messageBox.innerHTML += '<i class="fas fa-trash-alt delete-icon"></i>';

        // Clear the input field
        messageInput.value = '';

        // Add the new message box to the chat container
        const chatContainer = document.querySelector('.chat-container');
        chatContainer.appendChild(messageBox);

        // Add a click event listener to the delete icon in the new message box
        const deleteIcon = messageBox.querySelector('.delete-icon');
        deleteIcon.addEventListener('click', function() {
          // Add the deleted-message class to hide the message
          messageBox.classList.add('deleted-message');
        });
      }
    });
  });

  // Function to get the current time in HH:MM format
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
});
