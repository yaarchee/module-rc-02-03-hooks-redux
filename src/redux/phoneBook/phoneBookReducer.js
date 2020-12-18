import { ADD_CONTACT, DELETE_CONTACT, FIND_CONTACT } from './phoneBookTypes';
import { combineReducers } from 'redux';

const initState = {
  items: JSON.parse(localStorage.getItem('contactsh')) || [],
};
const changeLocalStorage = (arr) =>
  localStorage.setItem('contactsh', JSON.stringify(arr));

const contact = (state = initState.items, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const resAdd = [action.payload, ...state];
      changeLocalStorage(resAdd);
      return resAdd;

    case DELETE_CONTACT:
      const resDel = state.filter((contact) => contact.id !== action.payload);
      changeLocalStorage(resDel);
      return resDel;

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  switch (action.type) {
    case FIND_CONTACT:
      return action.payload;

    default:
      return state;
  }
};

const phoneBookReducer = combineReducers({
  contact,
  filter,
});

export default phoneBookReducer;
