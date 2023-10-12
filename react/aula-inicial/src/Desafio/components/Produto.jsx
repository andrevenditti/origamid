import React from 'react'

function Produto({nome, propriedades}) {
  return (
    <div style={{border: "1px solid black", margin: "1rem 0", padding: "1rem"}}>
      {nome}
      <ul>
        {propriedades.map((props) => (
          <li key={props}>{props}</li>
        ))}
      </ul>
    </div>

  )
}

export default Produto