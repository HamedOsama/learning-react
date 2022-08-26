import { createSlice } from "@reduxjs/toolkit";

let logoutTimer;

const calculateRemainingTime = expireTime => {
  const currentTime = new Date().getTime();
  const adjustedExpireTime = new Date(expireTime).getTime();

  const remainingTime = adjustedExpireTime - currentTime;
  return remainingTime;
}

const retrieveStoredToken = () => {
  const expireTime = window.localStorage.getItem('expireTime');
  const remainingTime = calculateRemainingTime(expireTime);
  if (remainingTime <= 300000) {
    window.localStorage.removeItem('tokenId');
    window.localStorage.removeItem('expireTime');
  }
}
retrieveStoredToken();
const initialState = {
  token: window.localStorage.getItem('tokenId'),
  isLoggedIn: window.localStorage.getItem('tokenId') ? true : false
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.id;
      state.isLoggedIn = true;
      window.localStorage.setItem('tokenId', action.payload.id);
      window.localStorage.setItem('expireTime', action.payload.expireTime);
    },
    logout: state => {
      state.token = null;
      state.isLoggedIn = false;
      window.localStorage.removeItem('tokenId');
      window.localStorage.removeItem('expireTime');
      if (logoutTimer)
        clearTimeout(logoutTimer);
    }
  }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const loginActionHandler = data => {
  return async (dispatch) => {
    dispatch(authActions.login(data));
    const remainingTime = calculateRemainingTime(data.expireTime);
    logoutTimer = setTimeout(() => dispatch(authActions.logout()), remainingTime);
  }
}

export const setLogoutTimeHandler = () => {
  return (dispatch) => {
    const expireTime = window.localStorage.getItem('expireTime');
    if (!expireTime)
      return;
    const remainingTime = calculateRemainingTime(expireTime);
    logoutTimer = setTimeout(() => dispatch(authActions.logout()), remainingTime);
  }
}
