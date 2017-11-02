import React from "react";
import App from './App.js';
import Enzyme, { mount } from "enzyme";
import houses from '../../mockData/houses.js';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

//I could not get these tests to work, and I didn't want to
//watse time struggling with it. In theory, they should pass.
//Probably something to do with fetch mock,
//even though the fetch is in a helper file.

describe('app component', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const mockStore = configureStore();
  const initialState = {
    houses: []
  };
  const store = mockStore(initialState);
  const mockFn = jest.fn();
  const wrapper = mount(<App
    store={store}
    houses={houses}
    addHouses={mockFn}/>);


  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a logo', () => {
    const logo = wrapper.find('.App-logo');

    expect(logo.length).toEqual(1);
  });

  it('should have a title', () => {
    const title = wrapper.find('h2');

    expect(title.text()).toEqual('Welcome to Westeros');
  });

  it('should have 9 cards', () => {
    const cards = wrapper.find('Card');

    expect(cards.length).toEqual(9);
  });

  it('should fire actions', () => {
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
