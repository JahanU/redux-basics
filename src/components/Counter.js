import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch(); // Dispatch similar to in useReducer
  const counter = useSelector(state => state.counter); // useState
  const showCounter = useSelector(state => state.showCounter);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const incrementByFive = () => {
    dispatch({ type: 'INCREASE', payload: 5 });
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementByFive}>Increment By 5</button>
        <button onClick={decrement}>Decrement</button>
      </div>

    </main>
  );
};

export default Counter;
