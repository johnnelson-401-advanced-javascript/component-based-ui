import React from 'react';
import Header from './components/Header/Header';
import Footer from '../src/components/Footer';
import ListItems from './components/List/List';
import characters from './assets/data';

const App = () => (
  <React.Fragment>
    <Header />
    <ListItems characters={characters}/>
    <Footer />
  </React.Fragment>
);

export default App;
