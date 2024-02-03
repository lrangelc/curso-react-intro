import React, { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [storedValue, setStoredValue] = useState(initialValue);

  // Initialize the state with data from localStorage or the provided initial value
  React.useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      const newValue = item ? JSON.parse(item) : initialValue;
      setTimeout(() => {
        console.log('Delayed for 1 second.');
        setStoredValue(newValue);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }, []);

  // Listen for changes in the storedValue and update localStorage accordingly
  useEffect(() => {
    try {
      const valueToStore = storedValue instanceof Function ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, key]);

  return { storedValue, setStoredValue, loading, error };
}

export { useLocalStorage };
