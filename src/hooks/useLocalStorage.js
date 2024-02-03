import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Initialize the state with data from localStorage or the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Listen for changes in the storedValue and update localStorage accordingly
  useEffect(() => {
    try {
      const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
