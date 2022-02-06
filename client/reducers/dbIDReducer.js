import { GET_ID_SUCCESS } from '../actions/index'

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
      console.log(action.data)
      return action.data
    default:
      return state
  }
}
