import React, { Component } from 'react';
import PropTypes, { shape, func, string, array } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import wolf from '../../images/wolf.gif';

class App extends Component {

  componentDidMount() {
    const { addHouses } = this.props;
    fetch('http://localhost:3001/api/v1/houses')
      .then(res => res.json())
      .then(jsonRes => addHouses(jsonRes));
  }

  render() {
    const { houses } = this.props;

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          {houses.length <= 0 ? <img src={wolf} alt='wolf'/> : null}
        </div>
        <div className='Display-info'>
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
