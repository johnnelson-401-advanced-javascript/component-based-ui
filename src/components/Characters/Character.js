import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './characters.css';

export default class Character extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    species: PropTypes.string
  };

  render() {
    const { image, name, species } = this.props;
    return (
      <dl className={styles.characterDisplay}>
        <img src={image}></img>
  
        <dt>Name</dt>
        <dd>{name}</dd>
  
        <dt>Species</dt>
        <dd>{species}</dd>
      </dl>
    );
  }
}
