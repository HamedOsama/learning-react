import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  isLoggedIn: false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    logout: state => {
      state.token = null;

    }
  }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;