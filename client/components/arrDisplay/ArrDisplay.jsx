import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickStateVal, outputVal } from '../../actions'
import ArrContent from './ArrContent'

export default function ArrDisplay () {
  const arrData = useSelector(state => state.arrReducer)
  const inputData = useSelector(state => state.outputReducer)
  const dispatch = useDispatch()
  // const [arrState, setArrState] = useState([])

  useEffect(() => {
    console.log(arrData)
  }, [arrData])

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(clickStateVal(false))
    dispatch(outputVal(inputData))
  }

  return (
    <>
      <div className='memory-div'>
        <div>
          <label htmlFor='memorySize'>Memory size: </label>
          <span>100</span>
        </div>
      </div>
      <div className='arrDisplay-div'>
        <div className='table-div'>
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

        <div className='btn-wrapper'>
          <button className='edit-btn' onClick={handleSubmit}>Compile</button>
        </div>
      </div>
    </>
  )
}
