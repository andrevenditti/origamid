import React from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import '../public/Header.css'

const Header = () => {
  const location = useLocation()

  //cada vez que muda a rota esse efeito funciona
  //porque esta em todas as paginas
  React.useEffect(() => {
    console.log('mudou a rota')
  }, [location])

  return (
    <header>
      <nav>
        <NavLink to={'/'}>Home</NavLink> |{' '}
        <NavLink to={'/login'}>Login</NavLink> |
        <NavLink to={'/sobre'}>Sobre</NavLink>
      </nav>
    </header>
  )
}

export default Header
