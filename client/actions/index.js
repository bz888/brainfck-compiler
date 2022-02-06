import { getData, getDataById } from '../api/api'

export const INPUT_VAL = 'INPUT_VAL'
export const OUTPUT_VAL = 'OUTPUT_VAL'
export const ARR_VAL = 'ARR_VAL'
export const COMMENT_ARR_VAL = 'COMMENT_ARR_VAL'
export const CLICK_STATE_VAL = 'CLICK_STATE_VAL'
export const MEMORY_VAL = 'MEMORY_VAL'

export const GET_PENDING = 'GET_PENDING'
export const GET_SUCCESS = 'GET_SUCCESS'

export const GET_ID_PENDING = 'GET_ID_PENDING'
export const GET_ID_SUCCESS = 'GET_ID_SUCCESS'

export function outputVal (output) {
  return {
    type: OUTPUT_VAL,
    output
  }
}
export function inputVal (storedInput) {
  return {
    type: INPUT_VAL,
    storedInput
  }
}

export function arrVal (returnedArr) {
  return {
    type: ARR_VAL,
    returnedArr
  }
}

export function commentVal (commentArr) {
  return {
    type: COMMENT_ARR_VAL,
    commentArr
  }
}

export function clickStateVal (toggle) {
  return {
    type: CLICK_STATE_VAL,
    toggle
  }
}

export function memoryVal (memorySize) {
  return {
    type: MEMORY_VAL,
    memorySize
  }
}

export function getIDPending () {
  return {
    type: GET_ID_PENDING
  }
}

export function getIDSuccess (data) {
  return {
    type: GET_ID_SUCCESS,
    data
  }
}

export function getDataIDAction (id) {
  return (dispatch) => {
    dispatch(getIDPending())
    return getDataById(id)
      .then((data) => {
        dispatch(getIDSuccess(data))
        return null
      })
      .catch(err => {
        console.error(err + 'getDataIDAction')
      })
  }
}

export function getPending () {
  return {
    type: GET_PENDING
  }
}

export function getSuccess (data) {
  return {
    type: GET_SUCCESS,
    data
  }
}

export function getDataAction () {
  return (dispatch) => {
    dispatch(getPending())
    return getData()
      .then(data => {
        dispatch(getSuccess(data))
        return null
      })
      .catch(err => {
        console.error(err + 'getDataAction')
      })
  }
}
