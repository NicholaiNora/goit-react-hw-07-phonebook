// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'features/operations';

function ContactListItem({ contact, toCapitalize }) {

  const dispatch = useDispatch();
  
  return (
    <li className={css.contact}>
      <span className={css.contactItemSpan}>
        {toCapitalize(contact.name)}: {contact.phone}
      </span>
      <button
        className={css.contactItemButton}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  toCapitalize: PropTypes.func.isRequired,
};

export default ContactListItem;

