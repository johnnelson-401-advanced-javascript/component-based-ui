import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer';
import ListItems from './components/List/List';
import characters from './assets/data';

export default class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <ListItems characters={characters}/>
        <Footer />
      </React.Fragment>
    );
  }
} 

