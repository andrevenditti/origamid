import React from 'react'
import Input from './components/input'

function App() {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCep(value) {
    const regex = /^\d{5}-?\d{3}$/
    if (value.length === 0) {
      setError('Prencha um valor')
      return false
    } else if (!regex.test(value)) {
      setError('CEP invalido, preencha corretamente')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value)
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (validateCep(cep)) console.log('enviado')
    else console.log('nao enviar')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          value={cep}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </form>
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </>
  )
}

export default App
