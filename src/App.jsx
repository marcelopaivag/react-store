import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { ShoppingCart } from './pages/ShoppingCart'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Product } from './pages/Product'
import { AuthForm } from './components/AuthForm'
import { UserProvider } from './context/UserContext'

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
          <Route path="/react-store/login" element={<AuthForm />} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  )
}

export default App
