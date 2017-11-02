import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import './Card.css';

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

    const foundedInfo = founded.length ? founded : 'N/A';
    const titlesInfo = titles.length ?
      titles.map(title => <p
        className='title'
        key={title}>{`Title: ${title}`}
      </p>)
      : null;

    return (
      <div>
        <p className='name'>{name}</p>
        {words.length ? <p className='words'>{words}</p> : null}
        <p className='founded'>{`Founded: ${foundedInfo}`}</p>
        <p className='seats'>{`Seats: ${seats}`}</p>
        {titlesInfo}
        <p className='weapons'>{`Ancestral Weapons: ${ancestralWeapons}`}</p>
        <p className='coat'>{`Coat of Arms: ${coatOfArms}`}</p>
      </div>
    );
  }
}

Card.propTypes = {
  house: shape.isRequired
};

export default Card;
