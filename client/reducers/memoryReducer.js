import { MEMORY_VAL } from '../actions/index'

export default function memoryReducer (state = 30, action) {
  switch (action.type) {
    case MEMORY_VAL:
      return action.memorySize
    default:
      return state
  }
}
