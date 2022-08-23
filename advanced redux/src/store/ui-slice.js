import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
  notification: null
};
const uiSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    },
    setNotification(state, value) {
      state.notification = {
        title: value.payload.title,
        status: value.payload.status,
        message: value.payload.message,
      }
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;