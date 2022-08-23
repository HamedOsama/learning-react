import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiActions } from './store/ui-slice';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsShown = useSelector(state => state.ui.isShown)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const updateCart = async () => {
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
        // const responseData = await response.json();

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
    updateCart();
  }, [cart, dispatch])
  return (
    <Fragment>
      {notification &&
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />}
      <Layout>
        {cartIsShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
