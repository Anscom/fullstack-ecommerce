import { useState } from 'react'
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <HomePage />
      
    <Footer />
    </>
  )
}

export default App
