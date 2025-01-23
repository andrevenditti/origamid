import React from 'react'

function App() {
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')

  function handleChange({ target }) {
    setProduto(target.value)
  }

  return (
    <>
      <h2>Cor</h2>
      <form>
        <label>
          <input
            type="radio"
            value="azul"
            checked={cor === 'azul'}
            onChange={({ target }) => setCor(target.value)}
          />
          Azul Caneta
        </label>
        <label>
          <input
            type="radio"
            value="vermelho"
            checked={cor === 'vermelho'}
            onChange={({ target }) => setCor(target.value)}
          />
          Vermelho
        </label>
      </form>
      <h2>Podutos</h2>
      <form>
        <label>
          <input
            type="radio"
            value="smartphone"
            checked={produto === 'smartphone'}
            onChange={handleChange}
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            value="notebook"
            checked={produto === 'notebook'}
            onChange={handleChange}
          />
          Notebook
        </label>
      </form>
    </>
  )
}

export default App
