import { ADD_CONTACT, DELETE_CONTACT, FIND_CONTACT } from './phoneBookTypes';

const addContact = (name, tel) => ({
  type: ADD_CONTACT,
  payload: {
    name: name,
    tel: tel,
    id: tel + name,
  },
});

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

const findContact = (valueQuery) => ({
  type: FIND_CONTACT,
  payload: valueQuery,
});

const actionsBook = {
  addContact,
  deleteContact,
  findContact,
};

export default actionsBook;
