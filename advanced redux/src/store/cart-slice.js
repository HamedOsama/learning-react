import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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




export const sendCartData = cart => {
  return async dispatch => {
    try {
      dispatch(uiActions.setNotification({
        title: 'Sending...',
        status: 'pending',
        message: 'sending cart data.',
      }))
      const response = await fetch('https://first-hearth-357105-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      dispatch(uiActions.setNotification({
        title: 'Success!',
        status: 'success',
        message: 'Cart data sent successfully.',
      }))
    } catch (error) {
      console.log(error.message)
      dispatch(uiActions.setNotification({
        title: 'Error!',
        status: 'error',
        message: error.message,
      }))
    }
  }
}


export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const cartState = state => state.cart;