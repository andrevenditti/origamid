import Input from './components/input'
import useForm from './hooks/useForm'

function App() {
  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm(false)
  const sobrenome = useForm()

  function handleSubmit(event) {
    event.preventDefault()
    if (cep.validate() && email.validate() && nome.validate())
      console.log('enviado')
    else console.log('nao enviar')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" id="nome" type="text" {...nome} />
        <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          {...cep}
        />
        <Input
          label="Email"
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          {...email}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
