import React from 'react'
import { useGlobalStateVal } from '../../context/useContext'
import ArrContent from './ArrContent'

export default function ArrDisplay () {
  const { arrDisplay, input, setToggle } = useGlobalStateVal()

  function handleSubmit () {
    setToggle(false)
  }

  return (
    <>
      <div className='memory-div'>
        <div>
          <label htmlFor='memorySize'>Memory size: </label>
          <span>{input.memory}</span>
        </div>
      </div>
      <div className='arrDisplay-div'>
        <div className='table-div'>
          <table>
            <thead>
              <tr>
                <th>Address</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {arrDisplay && arrDisplay.map((val, idx) => {
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

        <div className='btn-wrapper'>
          <button className='edit-btn' onClick={handleSubmit}>Compile</button>
        </div>
      </div>
    </>
  )
}
