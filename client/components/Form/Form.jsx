import React from 'react'
import { interpreter } from '../../compiler-function/interpreter '
import { useGlobalStateVal } from '../../context/useContext'
import SelectMenu from './selectMenu/SelectMenu'

export default function Form () {
  const {
    setToggle,
    setArrDisplay,
    input,
    setInput,
    setCommentVal,
    placeHoldingComments,
    setOutputVal
  } = useGlobalStateVal()

  function handleInput (e) {
    const value = e.target.value
    const name = e.target.name
    setInput({ ...input, [name]: value })
  }
  function handleSubmit (e) {
    e.preventDefault()
    const interpretedVal = interpreter(input.code, input.memory)

    setOutputVal(interpretedVal.printedVal)
    setCommentVal(interpretedVal.commentArr.length === 0 ? placeHoldingComments : interpretedVal.commentArr)
    setArrDisplay(interpretedVal.tape)
    setToggle(true)
  }

  return (
    <>
      <div className='memory-div'>
        <div>
          <label htmlFor='memorySize'>Memory size: </label>
          <input id='memorySize' required='required' value={input.memory} name='memory' type='number' placeholder='memory size' onChange={handleInput}/>
          <SelectMenu/>
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
