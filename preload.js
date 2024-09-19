const { contextBridge, ipcRenderer } = require('electron');
const { spawn } = require('child_process');

// Lancer le serveur PHP en arrière-plan
const phpServer = spawn('npm', ['run', 'php']);

// Afficher la sortie standard du serveur PHP dans la console de Node.js
phpServer.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Afficher les erreurs du serveur PHP dans la console de Node.js
phpServer.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Lorsque le serveur PHP s'arrête, afficher le code de sortie
phpServer.on('close', (code) => {
  console.log(`Serveur PHP arrêté avec le code : ${code}`);
});


// Expose une API sécurisée au contexte de la page web
contextBridge.exposeInMainWorld('electronAPI', {
  generateChatCompletion: async (prompt) => {
    try {
      const response = await fetch('http://localhost:3045/groq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      return data.message || 'Erreur lors de la génération de la réponse.';
    } catch (error) {
      console.error('Erreur lors de la requête de complétion de chat:', error);
      return 'Erreur de communication avec le serveur.';
    }
  },
  generateChatCompletionID: async (promptID) => {
    try {
      const response = await fetch('http://localhost:3045/Pibot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ promptID })
      });

      const data = await response.json();
      return data.message || 'Erreur lors de la génération de la réponse.';
    } catch (error) {
      console.error('Erreur lors de la requête de complétion de chat:', error);
      return 'Erreur de communication avec le serveur.';
    }
  }
});