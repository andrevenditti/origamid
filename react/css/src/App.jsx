import React from 'react'

import Slide from './Slide'
const App = () => {
  const slides = [
    {
      id: 'slide 1',
      text: 'slide1',
    },
    {
      id: 'slide 2',
      text: 'slide2',
    },
    {
      id: 'slide 3',
      text: 'slide3',
    },
  ]

  return (
    <>
      <Slide slides={slides} />
    </>
  )
}

export default App
