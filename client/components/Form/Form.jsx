import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { arrVal, clickStateVal, commentVal, inputVal, outputVal } from '../../actions'
import { interpreter } from '../../compiler-function/interpreter '

export default function Form () {
  const priorInput = useSelector(state => state.inputReducer)
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    code: '',
    memory: 10
  })
  // const [val, setVal] = useState('Code output')

  // useEffect(() => {
  //   // console.log('val change: ', val)
  // }, [])

  function handleInput (e) {
    // console.log('input value: ', e.target.value)
    const value = e.target.value
    const name = e.target.name
    setInput({ ...input, [name]: value })
  }
  function handleSubmit (e) {
    e.preventDefault()
    console.log(input.memory)
    const interpretedVal = interpreter(input.code, input.memory)
    console.log(interpretedVal)
    console.log(input.code)

    dispatch(clickStateVal(true))
    dispatch(commentVal(interpretedVal.commentArr))
    dispatch(arrVal(interpretedVal.tape))
    dispatch(inputVal(input.code))

    dispatch(outputVal(interpretedVal.printedVal))
  }

  return (
    <>
      <div className='memory-div'>
        <div>
          <label htmlFor='memorySize'>Memory size: </label>
          <input id='memorySize' required='required' value={input.memory} name='memory' type='number' placeholder='memory size' onChange={handleInput}/>
        </div>
      </div>

      <div className='form'>
        <div className='textArea'>
          <textarea placeholder='bf code' value={input.code} name='code' onChange={handleInput}></textarea>
        </div>
        <div className='btn-wrapper'>
          <button className='compile-btn' onClick={handleSubmit}>Compile</button>
        </div>
      </div>
    </>
  )
}
