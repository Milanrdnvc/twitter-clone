import axios from 'axios';

export function getAuthToken() {
  let token = localStorage.getItem('auth-token');
  if (token == null) {
    localStorage.setItem('auth-token', '');
    token = '';
  }
  return token;
}

export function addSocketListener(socket, name, callback) {
  socket.on(name, callback);
}

export async function validateToken(token) {
  let data;
  try {
    data = await axios.post('/users/tokenIsValid', null, {
      headers: {
        'X-Auth-Token': token,
      },
    });
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function GET(url, options) {
  let data;
  try {
    data = await axios.get(url, options);
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function POST(url, body, options) {
  let data;
  try {
    data = await axios.post(url, body, options);
  } catch (err) {
    data = err.response;
    console.error(err);
  }
  return data;
}

export async function uploadImage(base64EncodedImage, token) {
  const data = await POST(
    '/uploadImage',
    JSON.stringify({ data: base64EncodedImage }),
    {
      headers: {
        'X-Auth-Token': token,
        'Content-Type': 'application/json',
      },
    }
  );
  return data;
}
