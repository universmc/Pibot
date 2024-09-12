document.getElementById('fetchMessage').addEventListener('click', async () => {
    const message = await window.api.fetchMessage();
    document.getElementById('message').innerText = `Message : ${message}`;
  });