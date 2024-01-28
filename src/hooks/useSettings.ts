import { useLocalStorage } from "usehooks-ts";

export const DEFAULT_STARTING_LIFE_TOTAL = 20;

type Settings = {
  startingLifeTotal: number;
};

export function useSettings() {
  return useLocalStorage<Settings>("settings", {
    startingLifeTotal: DEFAULT_STARTING_LIFE_TOTAL,
  });
}
