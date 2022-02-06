import React from 'react'
import { useSelector } from 'react-redux'
import ArrDisplay from './arrDisplay/ArrDisplay'
import CommentSection from './commentTreament/CommentSection'
import Form from './Form/Form'
import InfoText from './InfoText/InfoText'
import Output from './Output/Output'

function App () {
  const toggleState = useSelector(state => state.toggleReducer)
  return (
    <>
      <React.StrictMode>
        <h1 className='title'>Brainfuck Interpreter</h1>
        <div className='wrapper'>
          {toggleState ? <ArrDisplay/> : <Form/>}
          <InfoText/>
          <CommentSection/>
          <Output/>
        </div>
      </React.StrictMode>
    </>
  )
}

export default App
