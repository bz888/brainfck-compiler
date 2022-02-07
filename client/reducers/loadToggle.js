import { LOAD_TOGGLE } from '../actions'

export default function loadToggleReducer (state = false, action) {
  switch (action.type) {
    case LOAD_TOGGLE:
      return action.toggle
    default:
      return state
  }
}
