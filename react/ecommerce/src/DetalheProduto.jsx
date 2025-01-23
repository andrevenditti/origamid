import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import styles from './css/DetalhesProduto.module.css'
import Head from './Head'

const DetalheProduto = () => {
  let params = useParams()
  const { data, error, request, loading } = useFetch()
  const [productDetail, setProductDetail] = React.useState({})

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      )
      setProductDetail(json)
    }
    fetchData()
  }, [request, params.id])

  if (loading) return <div>Carregando...</div>
  if (error) return <div>Erro: {error}</div>

  return (
    <div className={styles.container}>
      {productDetail && (
        <div className={styles['product-detail']}>
          <Head
            title={productDetail.nome}
            description={productDetail.descricao}
          />
          {productDetail.fotos?.map((foto) => (
            <img
              key={foto.src}
              src={foto.src}
              alt={foto.titulo}
              className={styles['product-image']}
            />
          ))}
          <div className={styles['product-description']}>
            <h3>{productDetail.nome}</h3>
            <span className={styles.price}>{`R$${productDetail.preco}`}</span>
            <p>{productDetail.descricao}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetalheProduto
