import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalItems: 0,
}
// totalPrice: 0


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalItems = action.payload.totalItems;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      const newItem = action.payload;
      // console.log(newItem)
      const existingItem = state.items.find(el => el.id === newItem.id)
      if (!existingItem)
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price
        })
      else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price
      }
      state.totalItems++;
      // const totalItems = state.items.reduce((acc, cur) => {
      //   return acc += cur.quantity
      // }, 0)
      // state.totalItems = totalItems
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find(el => el.id === itemId);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(el => el.id !== itemId)
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price
      }
      state.totalItems--;
    }
  }
})

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartState = state => state.cart;