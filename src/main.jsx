import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import './styles/producto.css'
import './styles/header.css'
import './styles/carrito.css'
import './styles/botones.css'
import './styles/cajas.css'
import './styles/footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
