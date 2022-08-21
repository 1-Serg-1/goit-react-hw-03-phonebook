import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  render() {
    return (
      <>
        <Phonebook />
        <GlobalStyle />
      </>
    );
  }
}
