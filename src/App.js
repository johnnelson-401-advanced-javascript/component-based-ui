import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ListItems from './components/List/List';
import characters from '../src/data';

const App = () => (
  <React.Fragment>
    <Header />
    <ListItems characters={characters}/>
    <Footer />
  </React.Fragment>
);

export default App;
