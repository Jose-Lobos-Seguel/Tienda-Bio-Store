import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavHeader from "./components/organisms/NavHeader.jsx"
import ProductCard from './components/organisms/ProductCard.jsx'
import Inicio from './pages/Inicio.jsx'
import Products from './pages/Products.jsx'

function App() {
  return (
    <>
      <NavHeader/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </>
  );
}

export default App;