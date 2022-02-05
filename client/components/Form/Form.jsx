import React, { useState, useEffect } from 'react'
// import { compiler } from '../../compiler-function/compiler'
import { interpreter } from '../../compiler-function/interpreter '
import Comment from '../commentTreament/comment'

export default function Form () {
  const [input, setInput] = useState({
    code: '',
    memory: 100
  })
  const [val, setVal] = useState('')
  const [commentVal, setCommentVal] = useState([])

  useEffect(() => {
    console.log('val change: ', val)
  }, [val])

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
    setVal(interpretedVal.outPutVal)
    setCommentVal(interpretedVal.commentArr)
    console.log(interpretedVal)
  }

  return (
    <>
      <div className='wrapper'>

        {/* <form> */}
        <label htmlFor='memorySize'>memory size: </label>
        <input id='memorySize' required='required' value={input.memory} name='memory' type='number' placeholder='memory size' onChange={handleInput}/>
        <div className='textArea'>
          <textarea placeholder='bf code' value={input.code} name='code' onChange={handleInput}></textarea>
        </div>
        <div className='btn-wrapper'>
          <button className='compile-btn' onClick={handleSubmit}>Compile</button>
        </div>
        {/* </form> */}

        <div className='outPut'>
          <p className='outPutVal' >{val}</p>
          {/* {commentVal && commentVal.map((inputComment, idx) => {
            return (
              <Comment
                key={idx}
                commentVal={inputComment}
              /> */}
          {/* ) */}
          {/* })} */}
        </div>
      </div>
    </>
  )
}
