import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: window.localStorage.getItem('tokenId'),
  isLoggedIn: window.localStorage.getItem('tokenId') ? true : false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
      window.localStorage.setItem('tokenId', action.payload);
    },
    logout: state => {
      state.token = null;
      state.isLoggedIn = false;
      window.localStorage.removeItem('tokenId');
    }
  }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;