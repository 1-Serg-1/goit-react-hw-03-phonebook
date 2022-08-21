import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContainerPhonebook, SearchMessage } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleChangeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  createFilter = () => {
    const { filter, contacts } = this.state;
    const normalizedContactName = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedContactName)
    );
    return filteredContacts;
  };
  handleChangeContactDelete = id => {
    const filteredContactsDelete = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: filteredContactsDelete });
  };
  render() {
    const {
      state,
      handleChange,
      handleChangeFilter,
      handleChangeContactDelete,
    } = this;
    const filtered = this.createFilter();
    return (
      <ContainerPhonebook>
        <h1>Phonebook</h1>
        <ContactForm contacts={state.contacts} onAddContact={handleChange} />
        {state.contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              state={state.contacts}
              onFilterContact={handleChangeFilter}
            />
            {this.state.filter === '' ? (
              <ContactList
                state={state.contacts}
                onDeleteContact={handleChangeContactDelete}
              />
            ) : filtered.length === 0 ? (
              <SearchMessage>Contact not found</SearchMessage>
            ) : (
              <ContactList
                state={filtered}
                onDeleteContact={handleChangeContactDelete}
              />
            )}
          </>
        )}
      </ContainerPhonebook>
    );
  }
}
