import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAction } from '../actions'
import ArrDisplay from './arrDisplay/ArrDisplay'
import CommentSection from './commentTreament/CommentSection'
import Form from './Form/Form'
import InfoText from './InfoText/InfoText'
import Output from './Output/Output'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataAction())
  }, [])
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
