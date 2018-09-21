import { createStore } from 'redux';

/* eslint-disable-next-line */
const reducer = (state, action) => {
  return action.type === 'INC' ? state + 1 : state;
};

const initialState = 0;

const store = createStore(reducer, initialState);

/* eslint-disable-next-line */
store.subscribe(() => document.getElementById('counter').innerText = store.getState());

setInterval(() => store.dispatch({ type: 'INC' }), 1000);

console.log('Redux started');
