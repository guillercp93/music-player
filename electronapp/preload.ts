import { contextBridge } from 'electron';
import { getDefaultTheme } from './ipcRenderer';

contextBridge.exposeInMainWorld('electronAPI', {
  getDefaultTheme,
});
