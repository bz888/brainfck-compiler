import React, { useState, useEffect } from 'react'
import { compiler } from '../../compiler-function/compiler'

export default function Form () {
  const [input, setInput] = useState('')
  const [val, setVal] = useState('')

  useEffect(() => {
    console.log('val change: ', val)
  }, [val])

  function handleInput (e) {
    console.log('input value: ', e.target.value)
    setInput(e.target.value)
  }
  function handleSubmit (e) {
    e.preventDefault()
    const compiledVal = compiler(input)
    setVal(compiledVal)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='textArea'>
          <textarea value={input} onChange={handleInput}></textarea>
        </div>
        <div className='btn-wrapper'>
          <button className='compile-btn' onClick={handleSubmit}>Compile</button>
        </div>
        <div className='outPut'>
          <p>{val}</p>
        </div>
      </div>
    </>
  )
}
