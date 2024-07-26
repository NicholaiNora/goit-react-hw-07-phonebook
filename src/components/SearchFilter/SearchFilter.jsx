// import React, { Component } from 'react';
import React from 'react';
// import PropTypes from 'prop-types';
import css from './SearchFilter.module.css';
import { setFilter } from 'features/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectStatusFilter } from 'features/selectors';

function SearchFilter() {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch()
  
  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  
  return (
    <div className={css.filterContainer}>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
        required
        value={filter}
        onChange={handleChange}
        className={css.filterInput}
      />
    </div>
  );
}

export default SearchFilter;