import React from 'react';
import Character from '../Characters/Character';
import PropTypes from 'prop-types';
import styles from './List.css';

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
    <ul className="listDisplay" >
      {listItems}
    </ul>
  );
}
ListItems.propTypes = {
  characters: PropTypes.array
};
