import { Component } from 'react';
import { Contacts } from './Contacts';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyles';
import { Phonebook } from './Phonebook/Phonebook';
import { Section } from './Section';

export class App extends Component {
  state = {
    contacts: [],
    name: ``,
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Section title="Phonebook">
            <Phonebook />
          </Section>
          <Section title="Contacts">
            <Contacts />
          </Section>
        </Container>
      </>
    );
  }
}
