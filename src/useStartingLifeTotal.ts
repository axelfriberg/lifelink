import { useLocalStorage } from "./useLocalStorage";

export const DEFAULT_STARTING_LIFE_TOTAL = 20;

export function useStartingLifeTotal() {
  return useLocalStorage<number>(
    "setting_starting_life_total",
    DEFAULT_STARTING_LIFE_TOTAL,
  );
}
