import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavHeader from "./components/organisms/NavHeader.jsx"
import ProductCard from './components/organisms/ProductCard.jsx'
import Inicio from './pages/Inicio.jsx'
import Products from './pages/Products.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Login from './pages/Login.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import NotFound from './pages/NotFound.jsx'
import Pago from './pages/Pago.jsx'
import Carrito from './pages/Carrito.jsx'
import Admin from './pages/Admin.jsx'



function App() {
  return (
    <>
      <NavHeader/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/pago' element={<Pago />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;