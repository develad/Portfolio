import Navbar from './components/NavBar/Navbar'
import MobileNavbar from './components/NavBar/MobileNavBar'
import Home from './components/Home/Home'
import Protfolio from './components/Protfolio/Protfolio'
import Contact from './components/Contact/Contact'
import GlobalStyles from './Globalstyles'
import { DarkModeProvider } from './components/store/Dark.Mode.Store'
import { ScrollingPageProvider } from './components/store/Scrolling.Page.Store'

function App() {
    
  return (
    <>
    <DarkModeProvider>
        <ScrollingPageProvider>
          <Navbar/>
          <MobileNavbar/>
        </ScrollingPageProvider>
          <Home/>
          <Protfolio/>
          <Contact/>
    </DarkModeProvider>
    <GlobalStyles/>
    </>
  );
}

export default App;
