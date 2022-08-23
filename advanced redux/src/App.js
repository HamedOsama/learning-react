import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = {
  dataRetrieved: false,
  firstTime: true,
};
function App() {
  const dispatch = useDispatch();
  const cartIsShown = useSelector(state => state.ui.isShown)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    if (isInitial.firstTime) {
      dispatch(fetchCartData());
      isInitial.firstTime = false;
      return;
    }
    if (!isInitial.dataRetrieved) {
      isInitial.dataRetrieved = true;
      return;
    }
    dispatch(sendCartData(cart))
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
