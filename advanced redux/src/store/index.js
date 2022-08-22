import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from './ui-slice';

const store = configureStore({
  reducer: {
    cart: uiReducer,
  }
})

export default store;