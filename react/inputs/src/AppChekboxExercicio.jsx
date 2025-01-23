import React from 'react'

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza']
function App() {
  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  const [cores, setCores] = React.useState([])

  function handleChange({ target }) {
    if (target.checked) setCores([...cores, target.value])
    else
      setCores(
        cores.filter((cor) => {
          return cor !== target.value
        })
      )
  }

  function checkColor(cor) {
    return cores.includes(cor)
  }

  return (
    <>
      <form>
        {coresArray.map((cor, index) => (
          <label key={index} style={{ textTransform: 'capitalize' }}>
            <input
              type="checkbox"
              value={cor}
              onChange={handleChange}
              checked={checkColor(cor)}
            />
            {cor}
          </label>
        ))}
      </form>
    </>
  )
}

export default App
