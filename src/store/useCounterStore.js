//import create zustand
import { create } from "zustand";

//(2) => Counter
export const useCounterStore = create((set) => ({
  token: null,

  counter: 0,
  inCreament: () => {
    set((state) => ({ counter: state.counter + 1 }));
  },
}));
