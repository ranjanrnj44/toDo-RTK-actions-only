import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store';
import { decreaseBy, decrement, increaseBy, increment, reset } from '../../slices/counter/counterSlice';

const Counter = () => {
    const countValue = useAppSelector((state: RootState) => state.counter.countValue);
    const dispatch = useAppDispatch();
  return (
    <>
    <h2>Counter Component</h2>
    <h4>Cont Value is: {countValue}</h4>
    <br />
    <button type="button" onClick={() => dispatch(increment())}>increment</button>
    <button type="button" onClick={() => dispatch(decrement())}>decrement</button>
    <button type="button" onClick={() => dispatch(increaseBy(3))}>increaseBy</button>
    <button type="button" onClick={() => dispatch(decreaseBy({num: 2}))}>decreaseBy</button>
    <button type="button" onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default Counter