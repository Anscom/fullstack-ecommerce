import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Routes>
        
      <Footer />
    </>
  )
}

export default App
