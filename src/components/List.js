import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';

export default function ListItems({ characters })  {
  const listItems = characters.map((character) => (
    <li key={character.name}>
      <Character 
        name={character.name}
        image={character.image}
        species={character.species}
      />
    </li>
  )
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
ListItems.propTypes = {
  characters: PropTypes.array
};
