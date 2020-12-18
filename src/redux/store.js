import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counterReducer';
import phoneBookReducer from './phoneBook/phoneBookReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
