import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Head from './Head'

const Home = () => {
  return (
    <div>
      <Head title="Home" description="Ta em casa" />
      <h1>Home</h1>
      <p>Pipi vagina</p>
      <Link to={'produto/notebook'}>Notebook</Link>{' '}
      <Link to={'produto/smartphone'}>Smartphone</Link>
    </div>
  )
}

export default Home
