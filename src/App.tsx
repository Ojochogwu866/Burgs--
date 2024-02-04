import Navigation from './components/Navigation'
// import Home from '@/scenes/home'
// import Footer from '@/scenes/footer'
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
      {/* <Home />
      <Footer/> */}
    </>
  )
}

export default App
