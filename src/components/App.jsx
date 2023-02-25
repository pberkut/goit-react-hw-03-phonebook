import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Petro', number: '234-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(2),
      name: newContact.name,
      number: newContact.number,
    };

    const isExistsContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    this.setState(({ contacts }) =>
      isExistsContact
        ? Notify.failure(`${newContact.name} is already in contacts.`)
        : { contacts: [contact, ...contacts] }
    );
  };

  deleteContact = () => {};

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <GlobalStyle />
        <Container>
          <Section title="Phonebook">
            <ContactForm onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList contacts={visibleContacts} />
          </Section>
        </Container>
      </>
    );
  }
}
