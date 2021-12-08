const jwt = require('jsonwebtoken');

const secret = 'mypass';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decoded = jwt.verify(authorization, secret);
    req.user = decoded.data;
    next();
  } catch (err) {
    if (err.message === 'jwt malformed') return res.status(401).json({ message: 'jwt malformed' });
    if (err.message === 'jwt must be provided') {
      return res.status(401).json({ message: 'missing auth token' });
    }
    return res.status(500).json({ message: 'erro ao decodificar' });
  }
};
