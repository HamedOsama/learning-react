import { useSelector, useDispatch } from 'react-redux';

import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { cartState } from '../../store/cart-slice';
const CartButton = (props) => {
  const cart = useSelector(cartState);
  console.log(cart)
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.totalItems}</span>
    </button>
  );
};

export default CartButton;
