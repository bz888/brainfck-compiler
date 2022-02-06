import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAction, getDataIDAction } from '../../../actions'
import SelectOption from './SelectOption'
export default function SelectMenu () {
  const dbData = useSelector(state => state.dbReducer)
  const dispatch = useDispatch()

  function handleChange (e) {
    e.preventDefault()
    console.log(e.target.value)
    const idVal = e.target.value
    idVal !== 'none' && idVal !== undefined
      ? dispatch(getDataIDAction(idVal))
      : console.log('invalid selection')
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
