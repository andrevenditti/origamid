import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    //serve para mudar o titulo da pagina e a descricao
    //na meta, que e a descricao da pagina nas meta tags
    document.title = props.title
    document
      .querySelector('meta[name = "description"]')
      .setAttribute('content', props.description)
  }, [props])

  return <></>
}

export default Head
