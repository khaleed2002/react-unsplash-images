import ThemeToggle from './components/ThemeToggle'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import { useState } from 'react'
const App = () => {
  const [searchText, setSearchText] = useState('cat')
  const getImages = (text) => {
    if (text === searchText || text === '') {
      return
    }
    setSearchText(text)
  }
  return (
    <div className="container">
      <ThemeToggle />
      <SearchForm getImages={getImages} />
      <Gallery searchText={searchText} />
    </div>
  )
}
export default App
