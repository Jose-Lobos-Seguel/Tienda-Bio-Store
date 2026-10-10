import { useState } from 'react'
import NavHeader from "./components/organisms/NavHeader.jsx"
import ProductCard from './components/organisms/ProductCard.jsx'
import Products from './data/Products.jsx'
import './App.css'

function App() {
  return (
    <div>
      <NavHeader/>
      <div>
        {Products.map((item) => (
        <h2>key={item.id} product={item.name}</h2>
        ))}
      </div>
    </div>
  )
}

export default App;