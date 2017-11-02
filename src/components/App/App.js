import React, { Component } from 'react';
import PropTypes, { shape, func, string, array } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import wolf from '../../images/wolf.gif';
import Card from '../Card/Card.js';
import fetchHouses from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { addHouses } = this.props;
    fetchHouses()
      .then(res => res.json())
      .then(jsonRes => addHouses(jsonRes))
      .then(() => this.setState({ loading: false }));
  }

  renderHouses = () => {
    const { houses } = this.props;
    return houses.map(house => {
      //I could not get all cards to load without having
      //this console log for a time buffer. it would only load 3-4 of them.
      console.log(house)
      return <Card house={house} key={Date.now()}/>;
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {!this.state.loading ?
            this.renderHouses()
            : <img src={wolf} alt='wolf'/>}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  houses: array,
  addHouses: func.isRequired
};

const mapStateToProps = ({ houses }) => ({ houses });
const mapDispatchToProps = dispatch => ({ addHouses:
  houses => dispatch(addHouses(houses))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
