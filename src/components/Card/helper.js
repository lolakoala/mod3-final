const fetchSwornMembers = (url) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ url: url })
  });
};

export default fetchSwornMembers;
