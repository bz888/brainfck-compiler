import React, { useEffect, useState } from 'react'
import { getData, getDataById } from '../../../api/api'
import { useGlobalStateVal } from '../../../context/useContext'
import SelectOption from './SelectOption'
export default function SelectMenu () {
  const { setCommentVal, setInput, input, placeHoldingComments } = useGlobalStateVal()
  const [dbData, setDbData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  function fetchData () {
    return getData()
      .then(data => {
        setDbData(data)
        return null
      })
      .catch(err => {
        console.error('FETCH FUNC: ' + err.message)
      })
  }
  function fetchById (id) {
    return getDataById(id)
      .then(idData => {
        setCommentVal(idData.comments)
        setInput({ ...input, code: idData.bfcode, memory: idData.memory })
        return null
      })
      .catch(err => console.error('FETCH ID' + err.message))
  }

  function handleChange (e) {
    e.preventDefault()
    const idVal = e.target.value
    if (idVal === 'none') {
      setInput({ ...input, code: '', memory: 30 })
      setCommentVal(placeHoldingComments)
    } else {
      fetchById(idVal)
    }
  }

  return (
    <>
      <label htmlFor='preload-menu'>Load </label>
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
