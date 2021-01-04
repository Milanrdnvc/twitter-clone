const jwt = require('jwt');

function auth(req, res, next) {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No authentication token' });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
      return res.status(401).json({ msg: 'Token verification failed' });
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ errro: err.message });
  }
}

module.exports = auth;
