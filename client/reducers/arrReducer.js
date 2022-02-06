import { ARR_VAL } from '../actions/index'

export default function arrReducer (state = [], action) {
  switch (action.type) {
    case ARR_VAL:
      return action.returnedArr
    default:
      return state
  }
}
