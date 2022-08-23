import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartState } from '../../store/cart-slice';
const Cart = (props) => {
  const cart = useSelector(cartState);
  const cartItems = cart.items;
  const cartItemsModal = cartItems.map(item => {
    return <CartItem
      item={{
        title: item.title,
        quantity: item.quantity,
        total: item.totalPrice,
        price: item.price,
        id: item.id
      }}
      key={item.id}
    />
  })
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemsModal}
        {/* <CartItem */}
        {/* // item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }} */}
        {/* /> */}
      </ul>
    </Card>
  );
};

export default Cart;
