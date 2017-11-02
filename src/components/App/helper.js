const fetchHouses = () => {
  return fetch('http://localhost:3001/api/v1/houses');
};

export default fetchHouses;
