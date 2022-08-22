import { configureStore } from '@reduxjs/toolkit'
import { authenticationReducer } from './authentication';
import { counterReducer } from './counter'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  }
})

export default store;