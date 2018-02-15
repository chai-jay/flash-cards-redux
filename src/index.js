import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import appReducer from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

// TODO: DELETE BELOW TEST CODE
// eslint-disable-next-line import/first
import {
  activeCardSelect,
  activeCardFlip,
  cardAdd,
  cardDelete,
  cardEdit,
} from './actions';

// Log the initial state
console.log('Initial state:');
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions
console.log('ACTIVE_CARD_SELECT 2:');
store.dispatch(activeCardSelect({ id: 2 }));

console.log('ACTIVE_CARD_FLIP:');
store.dispatch(activeCardFlip());

console.log('CARD_ADD "cat":');
store.dispatch(cardAdd({ word: 'cat', definition: 'A medium mammal that meows.' }));

console.log('CARD_EDIT 3:');
store.dispatch(cardEdit({ id: 3, word: 'cats', definition: 'Medium mammals that meow.' }));

console.log('CARD_DELETE 3:');
store.dispatch(cardDelete({ id: 3 }));

// Stop listening to state updates
unsubscribe();

// TODO: DELETE ABOVE TEST CODE

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
