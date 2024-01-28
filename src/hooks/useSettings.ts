import { useLocalStorage } from "usehooks-ts";

export const DEFAULT_STARTING_LIFE_TOTAL = 20;
export const DEFAULT_MATCH_TIME_LIMIT = 50 * 60 * 1000; // 50 minutes in ms

type Settings = {
  startingLifeTotal: number;
  matchTimeLimit: number;
};

export function useSettings() {
  return useLocalStorage<Settings>("settings", {
    startingLifeTotal: DEFAULT_STARTING_LIFE_TOTAL,
    matchTimeLimit: DEFAULT_MATCH_TIME_LIMIT,
  });
}
