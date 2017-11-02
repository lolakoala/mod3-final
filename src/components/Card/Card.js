import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import './Card.css';

name, founded, seats, titles, coatOfArms, ancestralWeapons, words

class Card extends Component {
  render() {
    const {
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words
    } = this.props.house;

    return (
      <div>
        <p className='name'>{`Name`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  house: shape.isRequired
};

export default Card;
