import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true }
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_COUNTER':
            return { counter: state.counter, showCounter: !state.showCounter };
        case 'INCREMENT':
            return { counter: state.counter + 1, showCounter: state.showCounter };
        case 'DECREMENT':
            return { counter: state.counter - 1, showCounter: state.showCounter }
        case 'INCREASE':
            return { counter: state.counter + action.payload, showCounter: state.showCounter }
        default:
            return state
    }
}

const store = createStore(reducer);


export default store;