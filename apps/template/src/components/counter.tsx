import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../store/localSlices/counterSlice'; // Adjust path

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value); // Replace `any` with `RootState` if using TypeScript

  return (
    <div>
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
