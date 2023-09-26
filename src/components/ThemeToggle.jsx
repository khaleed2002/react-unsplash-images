import { useContext } from 'react'
import { AppContext } from '../context/GlobalContext'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(AppContext)
  return (
    <nav>
      <div className="nav-container">
        <button onClick={toggleDarkTheme} className="dark-theme-btn">
          {isDarkTheme ? (
            <BsFillMoonFill className="dark-theme-icon moon" />
          ) : (
            <BsFillSunFill className="dark-theme-icon" />
          )}
        </button>
      </div>
    </nav>
  )
}
export default ThemeToggle
