import React, { Component } from 'react';
import { func, array } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import wolf from '../../images/wolf.gif';
import Card from '../Card/Card.js';
import fetchHouses from './helper.js';

//I have the right number of houses... not sure why all my cards won't render.

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount = async () => {
    const { addHouses } = this.props;
    await fetchHouses()
      .then(res => res.json())
      .then(jsonRes => addHouses(jsonRes))
      .then(() => this.setState({ houses: this.props.houses, loading: false }));
  }

  renderHouses = () => {
    const { houses } = this.state;
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
