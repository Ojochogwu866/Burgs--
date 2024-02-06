import Navigation from './components/Navigation'
import Landing from './components/Landing'
import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types'


function App() {
  const [selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Menu);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Menu);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  })
  return (
    <>
      <Navigation
      isTopOfPage = {isTopOfPage}
      selectedPage = {selectedPage} 
      setSelectedPage = {setSelectedPage} />
      <Landing/>
    </>
  )
}

export default App
