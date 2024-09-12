document.getElementById('submitID').addEventListener('click', async () => {
    const promptID = document.getElementById('promptID').value;
    const message = await window.electronAPI.generateChatCompletionID(promptID);
    document.getElementById('outputID').innerText = message;
  });