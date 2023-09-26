import { createContext, useState } from 'react'

export const AppContext = createContext()
const GlobalContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleDarkTheme = () => {
    setIsDarkTheme((isDarkTheme) => {
      const body = document.querySelector('body')
      if (!isDarkTheme) {
        body.classList.add('dark-theme')
      } else {
        body.classList.remove('dark-theme')
      }
      return !isDarkTheme
    })
  }
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  )
}
export default GlobalContext
