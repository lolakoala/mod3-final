import housesReducer from './houses.js';
import houses from '../mockData/houses.js';

describe('houses reducer', () => {
  it('should have default state', () => {
    expect(housesReducer(undefined, {})).toEqual([]);
  });

  it('should give an array of houses when passed info', () => {
    const action = { type: 'ADD_HOUSES', houses: houses };
    expect(housesReducer(undefined, action)).toEqual(houses);
  });
});
