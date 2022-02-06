import { GET_SUCCESS } from '../actions/index'

export default function dbReducer (state = [], action) {
  switch (action.type) {
    case GET_SUCCESS:
      return action.data
    default:
      return state
  }
}
