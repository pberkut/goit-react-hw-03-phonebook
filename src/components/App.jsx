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
    contacts: [],
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

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

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
    const { filter } = this.state;
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
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        </Container>
      </>
    );
  }
}
