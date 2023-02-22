import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: ``,
  };

  render() {
    return (
      <>
        <Phonebook />
      </>
    );
  }
}
