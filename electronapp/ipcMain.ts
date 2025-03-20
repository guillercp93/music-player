import { ipcMain, nativeTheme } from 'electron';

export function setupIpcMain() {
  // Example IPC handler
  ipcMain.handle('get-default-theme', async () => {
    // Get current theme of PC
    const systemTheme = nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
    console.log(`System theme: ${systemTheme}`);
    return systemTheme;
  });
}
