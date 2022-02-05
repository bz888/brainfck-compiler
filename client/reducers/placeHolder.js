import { PLACE_HOLDER } from '../actions/placerHolder'

export default function placeHolderReducer (state = '', action) {
  switch (action.type) {
    case PLACE_HOLDER:
      return action
    default:
      return state
  }
}
