import { create } from "zustand";
import { ZustandStoreProps } from "./type";

export const useZustandStore = create<ZustandStoreProps>((set, get) => ({
  first: 0,
  second: 0,
  third: 0,
  forth: 0,

  increaseFirstHandler: () => {
    set(() => ({ first: get().first + 1 }));
  },
  decreaseFirstHandler: () => {
    set(() => ({ first: get().first - 1 }));
  },
  increaseSecondHandler: () => {
    set(() => ({ second: get().second + 1 }));
  },
  decreaseSecondHandler: () => {
    set(() => ({ second: get().second - 1 }));
  },
  increaseThirdHandler: () => {
    set(() => ({ third: get().third + 1 }));
  },
  decreaseThirdHandler: () => {
    set(() => ({ third: get().third - 1 }));
  },
  increaseForthHandler: () => {
    set(() => ({ forth: get().forth + 1 }));
  },
  decreaseForthHandler: () => {
    set(() => ({ forth: get().forth - 1 }));
  },
}));
