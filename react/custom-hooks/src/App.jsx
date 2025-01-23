import useLocalStorage from "./useLocalStorage"
import useFetch from "./useFetch"
import React from "react";
function App() {
  const [produto, setProduto] = useLocalStorage('produto', '')
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/')
      console.log(response, json);
    }
    fetchData()
  }, [request])

  const handleClick = ({ target }) => {
    setProduto(target.innerText)
  }
  if (error) return <p>{error}</p>
  if (loading) return <p>Carregando...</p>
  if (data)
    return (
      <div>
        <h3>Produto preferido : {produto}</h3>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        {data.map((product) => (
          <div key={product.id}>
            <h1>{product.nome}</h1>
          </div>
        ))}
      </div>
    )
  else return null
}

export default App
