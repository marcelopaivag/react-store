import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { ShoppingCart } from './pages/ShoppingCart'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Product } from './pages/Product'
import { UserProvider } from './context/UserContext'
import { LogIn } from './pages/LogIn'
import { Contact } from './pages/Contact'

function App() {

  return (
    <>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/react-store/" element={<Home />} />
          <Route path="/react-store/products" element={<Products />} />
          <Route path="/react-store/products/:sku" element={<Product />} />
          <Route path="/react-store/shoppingcart" element={<ShoppingCart />} />
          <Route path="/react-store/contact" element={<Contact />} />
          <Route path="/react-store/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
