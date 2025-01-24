import React from 'react'
import useFetch from '../hooks/useFetch'
import styles from '../css/Produto.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Head from './Head'

const Produtos = () => {
  const { data, error, request, loading } = useFetch()
  const [products, setProducts] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto'
      )
      setProducts(json)
    }
    fetchData()
  }, [request])

  if (loading) return <div className="loading"></div>
  if (error) return <div>Erro: {error}</div>

  return (
    <section className={`${styles.container} animeLeft`}>
      <Head title="Produtos" description="Produtos disponiveis pra compra" />
      {products &&
        products.map((produto) => (
          <div
            key={produto.id}
            className={styles.card}
            onClick={(e) => {
              navigate(`/detalhe/${e.target.id}`)
            }}
            {...produto}
          >
            <img src={produto.fotos[0].src} alt="" id={produto.id} />
            <h3>{produto.nome}</h3>
          </div>
        ))}
    </section>
  )
}

export default Produtos
