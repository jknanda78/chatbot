import 'isomorphic-fetch';

const Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function callAPI(url, method = 'GET', headers = Headers, payload = {}) {
  const body = JSON.stringify(payload);
  let Url = url;

  if (!url) {
    return false;
  }

  if (process.env.NODE_ENV === 'development') {
    Url = `${process.env.API_HOSTNAME}${url}`;
  }

  return fetch(
    Url,
    {
      method,
      headers,
      body
    }
  )
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

export default callAPI;
