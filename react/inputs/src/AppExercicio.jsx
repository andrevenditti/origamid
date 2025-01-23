import React from 'react'
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  })
  const [response, setResponse] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(form)

    // Essa é a função utilizado para realizar o POST
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => setResponse(response))
    console.log(response)
  }

  function handleChange({ target }) {
    const { id, value } = target
    setForm({ ...form, [id]: value })
  }

  return (
    <>
      <h1>Exercicio de formulario</h1>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={form.nome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />
        <label htmlFor="cep">CEP</label>
        <input type="text" id="cep" value={form.cep} onChange={handleChange} />
        <label htmlFor="numero">Numero</label>
        <input
          type="text"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />
        {response && response.ok && <p>Usuario criado</p>}
        <button>Enviar</button>
      </form>
    </>
  )
}

export default App
