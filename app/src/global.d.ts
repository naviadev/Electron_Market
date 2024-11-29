export interface ElectronAPI {
  send: (channel: string, data: unknown) => void;
  receive: (channel: string, callback: (data: unknown) => void) => void;
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}


/// <reference types="svelte" />