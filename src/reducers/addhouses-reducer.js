export const houses = (state = [], action) => {
  switch (action.type) {
  case 'ADD_HOUSES':
    return action.houses;
  default:
    return state;
  }
};
