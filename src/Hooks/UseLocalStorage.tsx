import React, { useEffect, useState } from "react";

function getDefaultValue<T>(key: string, initialValue: T): T {
  const storedValue: string | null = localStorage.getItem(key);
  if (storedValue) {
    return JSON.parse(storedValue);
  }
  if (initialValue instanceof Function) {
    initialValue();
  }
  return initialValue;
}

export function useLocalStorage<T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(getDefaultValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return [value, setValue];
}
