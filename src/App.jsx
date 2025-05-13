import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Cart from "./pages/cart/Cart"
import { Routes, Route } from "react-router-dom"

import ProductDetails from "./pages/ProductDetails"

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  )
}

export default App