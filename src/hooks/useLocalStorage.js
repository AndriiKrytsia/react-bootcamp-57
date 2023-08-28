import { useEffect, useState } from 'react';
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null
        ? defaultValue
        : JSON.parse(serializedState);
    } catch (error) {
      return defaultValue;
    }
  });
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }, [key, value]);

  return [value, setValue];
};
