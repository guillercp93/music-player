import { ipcRenderer } from 'electron';

export async function getDefaultTheme(): Promise<string> {
  return await ipcRenderer.invoke('get-default-theme');
}
