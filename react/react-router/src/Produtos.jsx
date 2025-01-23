import React from 'react'
import { NavLink, useLocation, useParams, Outlet } from 'react-router-dom'

const Produto = () => {
  //os params servem para buscar os valores na rota
  //nesse caso produto e smartphone
  ///produto/smartphone?m=verde&v=amarelo
  const { id } = useParams()
  const location = useLocation()

  //aqui utilizamos o location para saber das queries de busca
  //?m=verde&v=amarelo <-
  //nesse caso o que retorna de valor e 'amarelo'
  const search = new URLSearchParams(location.search)

  return (
    <div>
      <h1>Produto: {id}</h1>
      <nav>
        <NavLink to="">Descricao</NavLink> |{' '}
        <NavLink to="avaliacao">Avaliacao</NavLink> |{' '}
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Produto
