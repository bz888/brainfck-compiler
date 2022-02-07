import { combineReducers } from 'redux'

import outputReducer from './outputReducer'
import arrReducer from './arrReducer'
import commentReducer from './commentReducer'
import toggleReducer from './toggleReducer'
import inputReducer from './inputReducer'
import memoryReducer from './memoryReducer'
import dbReducer from './dbReducer'
import dbIDReducer from './dbIDReducer'
import loadToggleReducer from './loadToggle'

export default combineReducers({
  outputReducer,
  arrReducer,
  commentReducer,
  toggleReducer,
  inputReducer,
  memoryReducer,
  dbReducer,
  dbIDReducer,
  loadToggleReducer
})
