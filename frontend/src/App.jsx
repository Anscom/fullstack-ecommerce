import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
        </Routes>
        
      <Footer />
    </>
  )
}

export default App
