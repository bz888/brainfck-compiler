import { combineReducers } from 'redux'

import inputReducer from './inputReducer'
import arrReducer from './arrReducer'

export default combineReducers({
  inputReducer,
  arrReducer
})
