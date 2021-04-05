import axios from 'axios';

export function getAuthToken() {
  let token = localStorage.getItem('auth-token');
  if (token == null) {
    localStorage.setItem('auth-token', '');
    token = '';
  }
  return token;
}

export async function validateToken(token) {
  let data;
  try {
    data = await axios.post('users/tokenIsValid', null, {
      headers: {
        'X-Auth-Token': token,
      },
    });
  } catch (err) {
    throw err;
  }
  return data;
}

export async function GET(url, options) {
  let data;
  try {
    data = await axios.get(url, options);
  } catch (err) {
    throw err;
  }
  return data;
}

export async function POST(url, body, options) {
  let data;
  try {
    data = await axios.post(url, body, options);
  } catch (err) {
    throw err;
  }
  return data;
}
