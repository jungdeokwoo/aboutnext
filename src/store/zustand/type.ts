export interface ZustandStoreProps {
  first: number;
  second: number;
  third: number;
  forth: number;

  increaseFirstHandler: () => void;
  decreaseFirstHandler: () => void;
  increaseSecondHandler: () => void;
  decreaseSecondHandler: () => void;
  increaseThirdHandler: () => void;
  decreaseThirdHandler: () => void;
  increaseForthHandler: () => void;
  decreaseForthHandler: () => void;
}
