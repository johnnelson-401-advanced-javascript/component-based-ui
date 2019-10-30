import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ image, name, species }) {
  return (
    <dl>
      <img src={image}></img>

      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Species</dt>
      <dd>{species}</dd>
    </dl>
  );
}

Character.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  species: PropTypes.string
};
