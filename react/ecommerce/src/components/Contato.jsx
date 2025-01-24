import React from 'react'
import Head from './Head'
import perfil from '../assets/perfil.jpeg'
import styles from '../css/Contato.module.css'

const Contato = () => {
  return (
    <div className={`${styles.container} animeLeft`}>
      <Head
        title="Contato"
        description="Entre em contato com o densenvolvedor"
      />
      <img src={perfil} alt="Foto Andre" />
      <div>
        <h3>Entre em contato</h3>
        <ul>
          <li>am7venditti@gmail.com</li>
          <li>15 98175-4974</li>
          <li>Sorocaba, SP</li>
        </ul>
      </div>
    </div>
  )
}

export default Contato
