import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getStorageValue = <T>(key: string, defaultValue: T) => {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem(key);
    const initial = value ? JSON.parse(value) : null;
    return initial || defaultValue;
  }
};

export const useLocalStorage = <T>(
  key: string,
  initialData: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, initialData)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
