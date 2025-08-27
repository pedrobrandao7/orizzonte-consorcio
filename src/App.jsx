import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Produtos from './pages/Produtos'
import Simule from './pages/Simule'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/simule" element={<Simule />} />
          </Routes >
      </BrowserRouter>
      
    </>
  
};

export default App
