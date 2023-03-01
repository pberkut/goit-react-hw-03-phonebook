import { Component } from 'react';
import { GlobalStyle } from './GlobalStyles';
import { Notify } from 'notiflix';
import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { getFilteredArray } from 'utils/getFilteredArray';
import { Wrapper } from './Wrapper';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  addContact = newContact => {
    const { contacts } = this.state;

    const isUniqueContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isUniqueContact) {
      Notify.failure(`${newContact.name} is already in contacts.`);
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    return true;
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    const { contacts, filter } = this.state;
    // const filteredContacts = this.getVisibleContacts();
    const filteredContacts = getFilteredArray(contacts, filter);
    return (
      <>
        <GlobalStyle />
        <Container>
          <Wrapper>
            <Section title="Phonebook">
              <ContactForm onSave={this.addContact} />
            </Section>
            <Section title="Search">
              <Filter value={filter} onChange={this.setFilter} />
            </Section>
            <Section title="Contacts">
              <ContactList
                contacts={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            </Section>
          </Wrapper>
        </Container>
      </>
    );
  }
}
