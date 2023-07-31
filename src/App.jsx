import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </>
  )
}

export default App
