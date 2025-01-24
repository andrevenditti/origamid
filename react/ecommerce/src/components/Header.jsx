import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../css/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.link}>
        Produtos
      </NavLink>
      <NavLink to="/contato" className={styles.link}>
        Contato
      </NavLink>
    </header>
  )
}

export default Header
