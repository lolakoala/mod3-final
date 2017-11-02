import React from "react";
import Card from './Card.js';
import Enzyme, { shallow } from "enzyme";
import houses from '../../mockData/houses.js';
import Adapter from 'enzyme-adapter-react-16';

describe('card component', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const wrapper = shallow(<Card house={houses[5]}/>);

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a name', () => {
    const name = wrapper.find('.name');

    expect(name.text()).toEqual(houses[5].name);
  });

  it('should have words', () => {
    const words = wrapper.find('.words');

    expect(words.text()).toEqual(houses[5].words);
  });

  it('should have founded info', () => {
    const founded = wrapper.find('.founded');

    expect(founded.text()).toEqual(`Founded: ${houses[5].founded}`);
  });

  it('should have seats', () => {
    const seats = wrapper.find('.seats');

    expect(seats.text()).toEqual(`Seats: ${houses[5].seats}`);
  });

  it('should have titles', () => {
    const titles = wrapper.find('.title');

    expect(titles.length).toEqual(houses[5].titles.length);
  });

  it('should have weapons', () => {
    const weapons = wrapper.find('.weapons');

    expect(weapons.text())
      .toEqual(`Ancestral Weapons: ${houses[5].ancestralWeapons}`);
  });

  it('should have a coat', () => {
    const coat = wrapper.find('.coat');

    expect(coat.text()).toEqual(`Coat of Arms: ${houses[5].coatOfArms}`);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
