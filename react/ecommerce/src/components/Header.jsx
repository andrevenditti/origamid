import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../css/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={styles.link} end>
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={styles.link}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
