import { shallow } from 'enzyme';
import ListItems from './List';

describe('List.js', () => {
  it('Renders a List of Characters', () => {
    const characters = [{
      'name': 'Noob-Noob',
      'status': 'Alive',
      'species': 'Poopybutthole',
      'image': 'https://rickandmortyapi.com/api/character/avatar/252.jpeg'
    },
    {
      'name': 'Noob-Noob',
      'status': 'Alive',
      'species': 'Poopybutthole',
      'image': 'https://rickandmortyapi.com/api/character/avatar/252.jpeg'
    }];
    let wrapper = shallow(ListItems({ characters }));
    expect(wrapper).toMatchSnapshot();
  });
  
});
