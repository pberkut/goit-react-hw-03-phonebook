import { Component } from 'react';
import { Contacts } from './Contacts';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyles';
import { Form } from './Form';
import { Section } from './Section';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: ``,
    number: '',
    filter: '',
  };

  addContact = contactData => {
    const contact = {
      id: nanoid(2),
      name: contactData.name,
      number: contactData.number,
    };

    this.setState(({ contacts, name }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = () => {};

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Section title="Phonebook">
            <Form onSubmit={this.addContact} />
          </Section>
          <Section title="Contacts">
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <Contacts contacts={this.state.contacts} />
          </Section>
        </Container>
      </>
    );
  }
}
