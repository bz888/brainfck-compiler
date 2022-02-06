import { combineReducers } from 'redux'

import outputReducer from './outputReducer'
import arrReducer from './arrReducer'
import commentReducer from './commentReducer'
import toggleReducer from './toggleReducer'
import inputReducer from './inputReducer'

export default combineReducers({
  outputReducer,
  arrReducer,
  commentReducer,
  toggleReducer,
  inputReducer
})
