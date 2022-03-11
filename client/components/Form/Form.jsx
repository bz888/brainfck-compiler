import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { arrVal, clickStateVal, commentVal, inputVal, loadToggle, memoryVal, outputVal } from '../../actions'
import { interpreter } from '../../compiler-function/interpreter '
import { useGlobalStateVal } from '../../context/useContext'
import SelectMenu from './selectMenu/SelectMenu'

export default function Form () {
  const { setToggle, setLoading, loading } = useGlobalStateVal()
  // const priorInput = useSelector(state => state.inputReducer)
  // const priorMemorySize = useSelector(state => state.memoryReducer)
  // const dbIDdata = useSelector(state => state.dbIDReducer)
  // const loadToggleVal = useSelector(state => state.loadToggleReducer)

  const dispatch = useDispatch()
  const [input, setInput] = useState({
    code: priorInput,
    memory: 30
  })

  useEffect(() => {
    // console.log(priorInput)
    // console.log(dbIDdata.bfcode)
    // if (priorInput === dbIDdata.bfcode && loadToggleVal) {
    //   setInput(() => ({ ...input, code: dbIDdata.bfcode, memory: dbIDdata.memory }))
    // } else {
    //   setInput(() => ({ ...input, code: priorInput, memory: priorMemorySize }))
    // }
    // console.log(input)
  }, [loadToggleVal])

  const placeHoldingComments = ['Only: + - , . [ ] < > are acceptable', 'All other input will be treated as a comment']

  function handleInput (e) {
    const value = e.target.value
    const name = e.target.name
    // console.log(e.target.value)
    setInput({ ...input, [name]: value })
  }
  function handleSubmit (e) {
    e.preventDefault()
    // console.log(parseInt(input.memory))
    const interpretedVal = interpreter(input.code, input.memory)
    // console.log(interpretedVal)
    console.log(input.code)

    dispatch(clickStateVal(true))
    dispatch(commentVal(interpretedVal.commentArr.length === 0 ? placeHoldingComments : interpretedVal.commentArr))
    dispatch(arrVal(interpretedVal.tape))
    dispatch(inputVal(input.code))

    dispatch(memoryVal(input.memory))

    dispatch(outputVal(interpretedVal.printedVal))
    // dispatch(loadToggle(false))

    // render ArrDisplay component
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
