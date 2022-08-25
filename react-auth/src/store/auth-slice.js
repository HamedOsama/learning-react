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
      console.log(action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: state => {
      state.token = null;
      state.isLoggedIn = false;

    }
  }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;