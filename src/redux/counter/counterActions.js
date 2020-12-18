import { INCREMENT, DECREMENT } from './counterTypes';

const inc = (value) => ({
  type: INCREMENT,
  payload: value,
});
const dec = (value) => ({
  type: DECREMENT,
  payload: value,
});

const actions = {
  inc,
  dec,
};

export default actions;
