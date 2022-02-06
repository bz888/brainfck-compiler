import React from 'react'
import { useSelector } from 'react-redux'

export default function Output () {
  const outPutVal = useSelector(state => state.outputReducer)
  const placerHolderVal = "You've entered nothing?"
  return (
    <div className='outPut'>
      <div>
        <p className='outPutVal' >{outPutVal.length === 0 ? placerHolderVal : outPutVal}</p>
      </div>
    </div>
  )
}
