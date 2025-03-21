import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

// @ts-ignore
const invoke = window.__TAURI__.core.invoke;

interface Store {
  _7th_dialogs: Dialogs | null;
  _8th_dialogs: Dialogs | null;
  _9th_dialogs: Dialogs | null;
  // i love this type system
  fetch_dialogs_error: string | unknown;
  fetchDialogs: () => Promise<void>;
}

type Dialogs = Array<object>

export const useStore = create<Store>((set) => ({
  // i dont care for ugly, i want a persistent cache
  // in theory this is cached, right?
  _7th_dialogs: null,
  _8th_dialogs: null,
  _9th_dialogs: null,
  fetch_dialogs_error: null,
  fetchDialogs: async () => {
    try {
      const grades = [7,8,9];
      for (const grade of grades) {
        const response = await invoke('get_dialogs', { grade });
        // dont judge me, i just hate javascript
        if (grade == 7) {
          set({ _7th_dialogs: JSON.parse(response) });
        }
        if (grade == 8) {
          set({ _8th_dialogs: JSON.parse(response) });
        }
        if (grade == 9) {
          set({ _9th_dialogs: JSON.parse(response) });
        }
      }
    } catch (error) {
      // we just hope things dont go south
      set({ fetch_dialogs_error: error })
    }
    shallow
  }
  
}));
