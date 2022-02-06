import React from 'react'
import { useSelector } from 'react-redux'

export default function Output () {
  const outPutVal = useSelector(state => state.outputReducer)
  return (
    <div className='outPut'>
      <div>
        <p className='outPutVal' >{outPutVal}</p>
      </div>
    </div>
  )
}
