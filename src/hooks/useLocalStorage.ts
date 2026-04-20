import { useState } from 'react'

const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T,
): [T, (v: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName)
      if (value !== null) {
        return JSON.parse(value) as T
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
      return defaultValue
    } catch {
      return defaultValue
    }
  })

  const setValue = (newValue: T): void => {
    window.localStorage.setItem(keyName, JSON.stringify(newValue))
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
