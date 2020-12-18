import React, { useState } from 'react';
import { connect } from 'react-redux';
import actionsBook from '../../../redux/phoneBook/phoneBookActions';

function Filter({ onSetFilter }) {
  const [filterValue, setFilterValue] = useState('');

  const onFilterChange = ({ target }) => {
    onSetFilter(target.value);
    setFilterValue(target.value);
  };

  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={filterValue}
        onChange={(e) => onFilterChange(e)}
      />
    </label>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSetFilter: (value) => dispatch(actionsBook.findContact(value)),
});

export default connect(null, mapDispatchToProps)(Filter);
