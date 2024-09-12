document.getElementById('submit2').addEventListener('click', async () => {
  const prompt2 = document.getElementById('prompt').value;
  const message = await window.electronAPI.generateChatCompletion(prompt2);
  document.getElementById('output2').innerText = message;
});