import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ArrContent from './ArrContent'

export default function ArrDisplay () {
  const arrData = useSelector(state => state.arrReducer)
  const [arrState, setArrState] = useState([])

  useEffect(() => {
    console.log(arrData)
  }, [arrData])

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th>index</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          {arrData && arrData.map((val, idx) => {
            return (
              <ArrContent
                key={idx + 1}
                index={idx}
                val={val}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
