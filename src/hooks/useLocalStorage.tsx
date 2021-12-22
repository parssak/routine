import { useState } from "react";

export default function useLocalStorage<T>(key: string) {
  const actualKey = `routine-${key}`;

  const [value, setValue] = useState<T>(() => {
    try {
      if (!window) return;
      const item = window.localStorage.getItem(actualKey);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      // console.error(error);
      return undefined;
    }
  });

  const setItem = (item: any) => {
    try {
      if (!window) return;
      window.localStorage.setItem(actualKey, JSON.stringify(item));
      setValue(item);
    } catch (error) {
      // console.error(error);
    }
  };

  return [value, setItem] as [T, (item: T) => void];
}
