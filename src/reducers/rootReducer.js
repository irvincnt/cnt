import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { messageReducer } from './messageReducer'

import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  msg: messageReducer
})
