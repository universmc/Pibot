const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 987,
    height: 610,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Assurez-vous que le chemin est correct
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
