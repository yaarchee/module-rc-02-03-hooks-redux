import { INCREMENT, DECREMENT } from './counterTypes';
import { combineReducers } from 'redux';

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      console.log(action.type);
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = 5, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
