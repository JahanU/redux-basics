import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counter = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++; // allowed to mutate the state. toolkit clones the states under the hood, allowing us to mutate the state
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload || 5;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

export const counterActions = counter.actions;

export default counter;