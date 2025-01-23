import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Produtos from './Produtos'
import Contato from './Contato'
import DetalheProduto from './DetalheProduto'
import Header from './Header'
import Footer from './Footer'

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
