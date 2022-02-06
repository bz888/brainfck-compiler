import { OUTPUT_VAL } from '../actions/index'

export default function outputReducer (state = ['Code output'], action) {
  switch (action.type) {
    case OUTPUT_VAL:
      return action.output
    default:
      return state
  }
}
