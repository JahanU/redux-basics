// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const name = 'counter';
const initialState = { counter: 0, showCounter: true };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'TOGGLE_COUNTER':
//             return { counter: state.counter, showCounter: !state.showCounter };
//         case 'INCREMENT':
//             return { counter: state.counter + 1, showCounter: state.showCounter };
//         case 'DECREMENT':
//             return { counter: state.counter - 1, showCounter: state.showCounter }
//         case 'INCREASE':
//             return { counter: state.counter + action.payload, showCounter: state.showCounter }
//         default:
//             return state
//     }
// }

// const store = createStore(reducer);

const counterSlice = createSlice({
    name,
    initialState,
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


const store = configureStore({
    reducer: counterSlice.reducer,
});

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         // other reducers/slices    },
//     }
// });

export const counterActions = counterSlice.actions;




export default store;
