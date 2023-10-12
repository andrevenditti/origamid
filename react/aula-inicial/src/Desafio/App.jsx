// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
import React from 'react';
import Home from './Home/Home';
import Header from './components/Header';
import Produtos from './components/Produtos';

function App() {
  const {pathname} = window.location 
  return(
    <section>
      <Header />
      {
        pathname === "/produtos" ? <Produtos /> : <Home />
      }
    </section>
  )
}

export default App