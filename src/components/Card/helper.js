const fetchSwornMembers = (url) => {
  return fetch('http://localhost:3001/api/v1/character', {
    method: 'POST',
    body: JSON.stringify({ url: url }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default fetchSwornMembers;
