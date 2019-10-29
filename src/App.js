import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Character from '../src/components/Character';


const App = () => (
  <React.Fragment>
    <Header />
    <Character
      image= 'https://rickandmortyapi.com/api/character/avatar/252.jpeg'
      name= 'Noob-Noob'
      species= 'Poopybutthole'/>
    <Footer />
  </React.Fragment>
);

export default App;


let character = [
  {
    'id': 252,
    'name': 'Noob-Noob',
    'status': 'Alive',
    'species': 'Poopybutthole',
    'type': '',
    'gender': 'Male',
    'origin': {
      'name': 'unknown',
      'url': ''
    },
    'location': {
      'name': 'Vindicator\'s Base',
      'url': 'https://rickandmortyapi.com/api/location/54'
    },
    'image': 'https://rickandmortyapi.com/api/character/avatar/252.jpeg',
    'episode': [
      'https://rickandmortyapi.com/api/episode/25'
    ],
    'url': 'https://rickandmortyapi.com/api/character/252',
    'created': '2017-12-31T12:57:37.849Z'
  },
  {
    'id': 63,
    'name': 'Centaur',
    'status': 'Alive',
    'species': 'Humanoid',
    'type': 'Centaur',
    'gender': 'Male',
    'origin': {
      'name': 'unknown',
      'url': ''
    },
    'location': {
      'name': 'Mr. Goldenfold\'s dream',
      'url': 'https://rickandmortyapi.com/api/location/18'
    },
    'image': 'https://rickandmortyapi.com/api/character/avatar/63.jpeg',
    'episode': [
      'https://rickandmortyapi.com/api/episode/2'
    ],
    'url': 'https://rickandmortyapi.com/api/character/63',
    'created': '2017-11-05T12:22:17.848Z'
  },
  {
    'id': 32,
    'name': 'Bearded Lady',
    'status': 'Dead',
    'species': 'Alien',
    'type': 'Parasite',
    'gender': 'Female',
    'origin': {
      'name': 'unknown',
      'url': ''
    },
    'location': {
      'name': 'Earth (Replacement Dimension)',
      'url': 'https://rickandmortyapi.com/api/location/20'
    },
    'image': 'https://rickandmortyapi.com/api/character/avatar/32.jpeg',
    'episode': [
      'https://rickandmortyapi.com/api/episode/15'
    ],
    'url': 'https://rickandmortyapi.com/api/character/32',
    'created': '2017-11-05T09:18:04.184Z'
  },
  {
    'id': 37,
    'name': 'Beth Sanchez',
    'status': 'Alive',
    'species': 'Human',
    'type': '',
    'gender': 'Female',
    'origin': {
      'name': 'Earth (C-500A)',
      'url': 'https://rickandmortyapi.com/api/location/23'
    },
    'location': {
      'name': 'Earth (C-500A)',
      'url': 'https://rickandmortyapi.com/api/location/23'
    },
    'image': 'https://rickandmortyapi.com/api/character/avatar/37.jpeg',
    'episode': [
      'https://rickandmortyapi.com/api/episode/8'
    ],
    'url': 'https://rickandmortyapi.com/api/character/37',
    'created': '2017-11-05T09:38:22.960Z'
  },
  {
    'id': 265,
    'name': 'Pickle Rick',
    'status': 'Alive',
    'species': 'unknown',
    'type': 'Pickle',
    'gender': 'Male',
    'origin': {
      'name': 'Earth (C-137)',
      'url': 'https://rickandmortyapi.com/api/location/1'
    },
    'location': {
      'name': 'Earth (Replacement Dimension)',
      'url': 'https://rickandmortyapi.com/api/location/20'
    },
    'image': 'https://rickandmortyapi.com/api/character/avatar/265.jpeg',
    'episode': [
      'https://rickandmortyapi.com/api/episode/24'
    ],
    'url': 'https://rickandmortyapi.com/api/character/265',
    'created': '2017-12-31T13:47:10.617Z'
  },

];

