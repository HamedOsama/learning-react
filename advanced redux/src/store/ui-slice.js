import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};
const uiSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    }
  }
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;