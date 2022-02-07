import { GET_ID_SUCCESS, GET_ID_RESET } from '../actions/index'

const initialState = {
  id: '',
  name: '',
  bfcode: '',
  comments: '',
  memory: ''
}

export default function dbIDReducer (state = initialState, action) {
  switch (action.type) {
    case GET_ID_SUCCESS:
      return action.data
    case GET_ID_RESET:
      return action.initState
    default:
      return state
  }
}
