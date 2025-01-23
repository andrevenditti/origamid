import React from 'react'

function App() {
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
        <label>
          <input
            type="checkbox"
            value="azul"
            onChange={handleChange}
            checked={checkColor('azul')}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            onChange={handleChange}
            checked={checkColor('vermelho')}
          />
          Vermelho
        </label>
      </form>
    </>
  )
}

export default App
