import houses from '../mockData/houses.js';
import * as actions from './index.js';

describe('actions', () => {
  const expectedAction = { type: 'ADD_HOUSES', houses: houses };

  expect(actions.addHouses(houses)).toEqual(expectedAction);
});
