import ContactListItem from 'components/ContactListItem/ContactListItem';
import React from 'react';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'features/selectors';

function ContactList() {
  const toCapitalize = phrase => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const filteredContacts = useSelector(selectFilteredContacts); 
  // const filterContacts = () => {
  //   return contacts.filter(
  //     contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
  //       contact.phone.includes(filter)
  //   );
  // };

  // const filteredContacts = filterContacts();
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          toCapitalize={toCapitalize}
          contact={contact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
