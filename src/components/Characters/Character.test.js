import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character.js', () => {
  it('renders a Character', () => {
    const character = {
      'name': 'Noob-Noob',
      'status': 'Alive',
      'species': 'Poopybutthole',
      'image': 'https://rickandmortyapi.com/api/character/avatar/252.jpeg'
    };
    let wrapper = shallow(<Character 
      name={character.name}
      image={character.image}
      species={character.species}
    />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
