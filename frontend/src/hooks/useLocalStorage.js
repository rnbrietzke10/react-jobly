import { useState, useEffect } from 'react';

function getLocalStorageValue(key, initialValue) {
  // Get key's value from local storage
  const storedValue = JSON.parse(localStorage.getItem(key));
  if (storedValue) return storedValue;

  // if no stored value check if initial value is a function and call if instance of Func
  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  // Use function notation because don't want to call everytime the component is rendered.
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
}
