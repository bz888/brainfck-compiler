import React from 'react'

export default function Form () {
  function handleChange (e) {

  }
  return (
    <>
      <div className='wrapper'>
        <div className='textArea'>
          <textarea></textarea>
        </div>
        <div className='btn-wrapper'>
          <button className='compile-btn' onChange={handleChange}>Compile</button>
        </div>
        <div className='outPut'>
          <p>place holding text</p>
        </div>
      </div>
    </>
  )
}
