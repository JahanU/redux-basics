// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthState = { isAuthenticated: false, user: null };

const counterSlice = createSlice({
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


const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    }
});

const store = configureStore({
    reducer: {
        counterStore: counterSlice.reducer,
        authStore: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
