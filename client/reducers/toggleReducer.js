import { CLICK_STATE_VAL } from '../actions/index'

export default function toggleReducer (state = false, action) {
  switch (action.type) {
    case CLICK_STATE_VAL:
      return action.toggle
    default:
      return state
  }
}
