import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavHeader from "./components/organisms/NavHeader.jsx"
import ProductCard from './components/organisms/ProductCard.jsx'
import Inicio from './pages/Inicio.jsx'
import Products from './pages/Products.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Login from './pages/Login.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <>
      <NavHeader/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;