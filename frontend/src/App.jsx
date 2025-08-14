import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import ContactUsPage from './pages/ContactUsPage'
import AboutUsPage from './pages/AboutUsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProductPage from './pages/ProductPage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import CartPage from './pages/CartPage'

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
          <Route path='/product' element={<ProductPage />} />
          <Route path="/product/2" element={<ProductDetailsPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        
      <Footer />
    </>
  )
}

export default App
