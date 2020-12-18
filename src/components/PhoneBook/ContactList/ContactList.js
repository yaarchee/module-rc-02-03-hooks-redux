import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import actionsBook from '../../../redux/phoneBook/phoneBookActions';

function ContactList({ items, removeContact }) {
  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, tel }) => (
        <ListItem
          key={id}
          name={name}
          phone={tel}
          onRemove={() => removeContact(id)}
        />
      ))}
    </ul>
  );
}

const mapStateToProps = ({ phoneBook: { contact, filter } }) => ({
  items: contact.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  ),
});

const mapDispatchToProps = (dispatch) => ({
  removeContact: (id) => dispatch(actionsBook.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
