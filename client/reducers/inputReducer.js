import { INPUT_VAL } from '../actions/index'

export default function inputReducer (state = '', action) {
  switch (action.type) {
    case INPUT_VAL:
      return action.storedInput
    default:
      return state
  }
}
