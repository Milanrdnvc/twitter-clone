import axios from 'axios';

export function getAuthToken() {
  let token = localStorage.getItem('auth-token');
  if (token == null) {
    localStorage.setItem('auth-token', '');
    token = '';
  }
  return token;
}

export function validateToken() {
    return await axios.post('users/tokenIsValid', null, {
        headers: {
            'X-Auth-Token': getAuthToken(),
        }
    });
}

export function GET(url, options) {
    return (await axios.get(url, options));
}

export function POST(url, body, options) {
    return (await axios.post(url, body, options));
}