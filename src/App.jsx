import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import ProductDetails from "./pages/ProductDetails"

const App = () => {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
    </div>
  )
}

export default App