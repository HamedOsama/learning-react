// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment())
    // dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
    // dispatch({ type: 'decrement' })
  }
  const increaseByFiveHandler = () => {
    dispatch(counterActions.increase(5))
    // dispatch({
    //   type: 'increase',
    //   value: 5
    // })
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())

    // dispatch({
    //   type: 'toggle_counter'
    // })
  };
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  console.log(showCounter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByFiveHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counterr extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   }
//   decrementHandler = () => {
//     this.props.decrement();
//   }
//   toggleCounterHandler = () => { };
//   render() {

//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counterr);
