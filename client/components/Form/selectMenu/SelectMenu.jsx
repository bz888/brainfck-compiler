import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { commentVal, getDataIDAction } from '../../../actions'
import SelectOption from './SelectOption'
export default function SelectMenu () {
  const dbData = useSelector(state => state.dbReducer)
  // const dbIDdata = useSelector(state => state.dbIDReducer)
  const dispatch = useDispatch()

  // const [localToggle, setLocalToggle] = useState(false)
  // const [idValState, setIdValState] = useState('')

  // useEffect(() => {
  //   if (idValState !== '' && idValState !== 'none') {
  //     dispatch(commentVal(dbIDdata.comments))
  //     console.log(dbIDdata.comments)
  //   }
  // }, [localToggle])

  function handleChange (e) {
    e.preventDefault()
    console.log(e.target.value)
    const idVal = e.target.value
    // setIdValState(idVal)
    if (idVal !== 'none' && idVal !== undefined) {
      dispatch(getDataIDAction(idVal))
      // setLocalToggle(!localToggle)
    } else {
      console.log('invalid selection')
    }
  }

  return (
    <>
      <label htmlFor='preload-menu'>Load</label>
      <select id='preload-menu' onChange={handleChange}>
        <option value='none'>None</option>
        {dbData && dbData.map((ele, idx) => {
          return (
            <SelectOption
              key={idx}
              name={ele.name}
              val={ele.id}
            />
          )
        })}

      </select>
    </>
  )
}
