import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { arrVal, inputVal } from '../../actions'
// import { compiler } from '../../compiler-function/compiler'
import { interpreter } from '../../compiler-function/interpreter '
import Comment from '../commentTreament/comment'

export default function Form () {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    code: '',
    memory: 100
  })
  const [val, setVal] = useState('Code output')
  const [commentVal, setCommentVal] = useState(['Only: + - , . [ ] < > are are acceptable', 'All other input will be treated as a comment'])

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
    dispatch(arrVal(interpretedVal.tape))
    dispatch(inputVal(input.code))
    // console.log(interpretedVal)
  }

  return (
    <>
      <div className='wrapper'>

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

        <div className='info-div'>
          <div>
            <span>Please be nice, this is a really simple interpreter and is not optimized for juice brainfuck</span>
          </div>
        </div>

        <div className='outPut'>
          <div>
            <p className='outPutVal' >{val}</p>
          </div>
        </div>

        <div className='comment-div'>
          <div>
            {commentVal && commentVal.map((inputComment, idx) => {
              return (
                <Comment
                  key={idx}
                  commentVal={inputComment}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
