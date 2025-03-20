import { app, BrowserWindow, screen } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { setupIpcMain } from './ipcMain.js';

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow: BrowserWindow | null = null;

const createWindow = (): void => {
  const { width, height } = screen.getPrimaryDisplay().size;
  mainWindow = new BrowserWindow({
    width: width/3,
    height,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // In development, load the URL served by Vite (adjust URL if needed)
    mainWindow.loadURL('http://localhost:4173/public/index.html');
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built index.html file from the renderer output folder
    const indexPath = path.join(__dirname, '../dist-renderer/public/index.html');
    mainWindow.loadFile(indexPath);

    mainWindow?.webContents.on('did-fail-load', () => {
      mainWindow?.loadURL(`file://${path.join(__dirname, '../dist-renderer/public/index.html')}`);
    });
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(() => {
  setupIpcMain();
  createWindow();

  app.on('activate', () => {
    // On macOS, re-create a window if none are open
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // On macOS it's common for applications to remain open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
