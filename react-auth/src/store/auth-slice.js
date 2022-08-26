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
      console.log(state)
      console.log(1);
      state.token = null;
      state.isLoggedIn = false;
      window.localStorage.removeItem('tokenId');
    }
  }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const loginActionHandler = data => {
  return async (dispatch) => {
    dispatch(authActions.login(data.id))
    setTimeout(() => dispatch(authActions.logout()), data.expiresIn * 1000)
  }

}
