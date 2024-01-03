import { useLocalStorage } from "./useLocalStorage";

export function useStartingLifeTotal() {
  return useLocalStorage<number>("setting_starting_life_total", 20);
}
