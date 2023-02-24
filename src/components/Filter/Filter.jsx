import { Component } from 'react';

export class Filter extends Component {
  state = {};

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input type="text" />
      </div>
    );
  }
}
