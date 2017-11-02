import React, { Component } from 'react';
import { shape } from 'prop-types';
import './Card.css';
import fetchSwornMembers from './helper.js';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      swornMembers: []
    };
  }
  handleClick = () => {
    const { swornMembers } = this.state;
    if (swornMembers.length >= 1) {
      this.setState({ swornMembers: [] });
      return;
    }
    const members = this.props.house.swornMembers.map(url => {
      return fetchSwornMembers(url)
        .then(res => res.json())
        .then(res => res.name);
    });
    Promise.all(members)
      .then(res => this.setState({ swornMembers: res }));
  }

  renderSwornMembers = () => {
    return this.state.swornMembers.map(member => <p key={member}>{member}</p>);
  }

  render() {
    const {
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words,
      swornMembers
    } = this.props.house;

    const foundedInfo = founded.length ? founded : 'N/A';
    const titlesInfo = titles.length ?
      titles.map(title => <p
        className='title'
        key={title}>{`Title: ${title}`}
      </p>)
      : null;

    return (
      <div onClick={this.handleClick} className='Card'>
        <p className='name'>{name}</p>
        {words.length ? <p className='words'>{words}</p> : null}
        <p className='founded'>{`Founded: ${foundedInfo}`}</p>
        <p className='seats'>{`Seats: ${seats}`}</p>
        {titlesInfo}
        <p className='weapons'>{`Ancestral Weapons: ${ancestralWeapons}`}</p>
        <p className='coat'>{`Coat of Arms: ${coatOfArms}`}</p>
        {this.state.swornMembers.length === swornMembers.length ?
          <div className='members'>
            <p>Sworn Members:</p>
            {this.renderSwornMembers()}
          </div>
          : null}
      </div>
    );
  }
}

Card.propTypes = {
  house: shape.isRequired
};

export default Card;
