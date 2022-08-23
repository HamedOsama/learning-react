import { uiActions } from "./ui-slice";

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