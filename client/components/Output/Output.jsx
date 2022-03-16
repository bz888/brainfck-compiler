import React from 'react'
import { useGlobalStateVal } from '../../context/useContext'
// import { useSelector } from 'react-redux'

export default function Output () {
  const { outputVal } = useGlobalStateVal()
  const placerHolderVal = 'No readable content'
  return (
    <div className='outPut'>
      <div>
        <p className='outPutVal' >{outputVal.length === 0 ? placerHolderVal : outputVal}</p>
      </div>
    </div>
  )
}
