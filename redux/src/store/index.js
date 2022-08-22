import { createSlice, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter'

const initialAuthState = {
  isAuthenticated: false
}
const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationSlice.reducer
  }
})


export const authActions = authenticationSlice.actions
export default store;