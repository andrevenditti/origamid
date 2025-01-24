import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Produtos from './components/Produtos'
import Contato from './components/Contato'
import DetalheProduto from './components/DetalheProduto'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/App.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div
          style={{
            margin: '0 auto',
            maxWidth: '700px',
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/detalhe/:id" element={<DetalheProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
