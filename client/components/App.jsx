import React from 'react'
import ArrDisplay from './arrDisplay/ArrDisplay'
import Form from './Form/Form'

function App () {
  return (
    <>
      <h1 className='title'>Brainfuck Interpreter</h1>
      <Form/>
      <ArrDisplay/>
    </>
  )
}

export default App
