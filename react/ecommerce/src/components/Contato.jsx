import React from 'react'
import Head from './Head'
import perfil from '../assets/perfil.jpeg'
import styles from '../css/Contato.module.css'

const Contato = () => {
  return (
    <div className={styles.container}>
      <Head
        title="Contato"
        description="Entre em contato com o densenvolvedor"
      />
      <img src={perfil} alt="Foto Andre" />
      <div>
        <h3>Entre em contato</h3>
        <p>am7venditti@gmail.com</p>
        <p>15 98175-4974</p>
        <p>Sorocaba, SP</p>
      </div>
    </div>
  )
}

export default Contato
