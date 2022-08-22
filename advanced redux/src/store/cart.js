import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;