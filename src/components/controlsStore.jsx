import { create } from 'zustand'

export const ZONAS = {
  sobre: [-6, 1, -2],
  projetos: [4.5, 1, -1.5],
  contato: [2, 1, 7],
}

export const useControlsStore = create((set) => ({
  forward: false,
  backward: false,
  left: false,
  right: false,

  muted: false,
  teleport: null,

  setControls: (controls) => set(controls),
  teleportTo: (zona) => set({ teleport: ZONAS[zona] }),
  toggleMute: () => set((s) => ({ muted: !s.muted })),
}))
