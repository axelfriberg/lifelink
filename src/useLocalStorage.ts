import { useState, useEffect } from "react";

type LocalStorageKey = "setting_starting_life_total";

export function useLocalStorage<T>(
  key: LocalStorageKey,
  initialValue: unknown,
) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
