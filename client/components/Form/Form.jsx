import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { arrVal, clickStateVal, commentVal, getDataAction, inputVal, memoryVal, outputVal } from '../../actions'
import { interpreter } from '../../compiler-function/interpreter '
import SelectMenu from './selectMenu/SelectMenu'

export default function Form () {
  const priorInput = useSelector(state => state.inputReducer)
  const priorMemorySize = useSelector(state => state.memoryReducer)
  const dbIDdata = useSelector(state => state.dbIDReducer)

  const dispatch = useDispatch()
  const [input, setInput] = useState({
    code: priorInput,
    memory: priorMemorySize
  })
  useEffect(() => {
    dispatch(getDataAction())
  }, [])

  useEffect(() => {
    renderDBdata()
  }, [dbIDdata])

  function renderDBdata () {
    if (!isNaN(dbIDdata)) {
      console.log('invalid data')
    } else {
      setInput(() => ({ ...input, code: dbIDdata.bfcode, memory: dbIDdata.memory }))
      dispatch(commentVal(dbIDdata.comments))
    }
  }

  const placeHoldingComments = ['Only: + - , . [ ] < > are acceptable', 'All other input will be treated as a comment']

  function handleInput (e) {
    const value = e.target.value
    const name = e.target.name
    setInput({ ...input, [name]: value })
  }
  function handleSubmit (e) {
    e.preventDefault()
    // console.log(parseInt(input.memory))
    const interpretedVal = interpreter(input.code, input.memory)
    console.log(interpretedVal)
    console.log(input.code)

    dispatch(clickStateVal(true))
    dispatch(commentVal(interpretedVal.commentArr.length === 0 ? placeHoldingComments : interpretedVal.commentArr))
    dispatch(arrVal(interpretedVal.tape))
    dispatch(inputVal(input.code))

    dispatch(memoryVal(input.memory))

    dispatch(outputVal(interpretedVal.printedVal))
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
