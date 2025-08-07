import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/about' element={<AboutUsPage />} />
        </Routes>
        
      <Footer />
    </>
  )
}

export default App
