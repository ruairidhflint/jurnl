import { useState } from 'react'

const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName)

      if (value) {
        if (keyName === 'text' && !JSON.parse(value).length) {
          return '\n\n'
        }
        return JSON.parse(value)
      }
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
      return defaultValue
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = (newValue: string): void => {
    window.localStorage.setItem(keyName, JSON.stringify(newValue))
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
