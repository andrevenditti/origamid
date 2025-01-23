import React from 'react'
import Radio from './components/radio'

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
]

function App() {
  const [resposta, setResposta] = React.useState('')
  const [respostaCerta, setRespostaCerta] = React.useState(0)
  const [contador, setContador] = React.useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    const acerto = resposta === perguntas[contador].resposta
    if (acerto) setRespostaCerta(respostaCerta + 1)
    setContador(contador + 1)
  }

  function handleTryAgain() {
    setContador(0)
    setRespostaCerta(0)
  }

  return (
    <>
      {contador < 4 ? (
        <form onSubmit={handleSubmit}>
          <h1>{perguntas[contador].pergunta}</h1>
          <Radio
            options={perguntas[contador].options}
            setValue={setResposta}
            value={resposta}
          />
          <button>Proxima</button>
        </form>
      ) : (
        <>
          <p>Voce acertou {respostaCerta} de 4 respostas</p>
          <button onClick={handleTryAgain}>Tentar novamente</button>
        </>
      )}
    </>
  )
}

export default App
