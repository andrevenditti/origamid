import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Sobre from './Sobre'
import NotFound from './NotFound'
import Login from './Login'
import Produto from './Produtos'
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoCustomizado from './ProdutoCustomizado'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="login" element={<Login />} />
          <Route path="/produto/:id" element={<Produto />}>
            {/*
              Nested Routes, isso serve para termos interacao
              com as rotas que pertencem a outras, ou seja,
              Rotas Aninhadas
            */}
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
