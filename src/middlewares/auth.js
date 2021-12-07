const jwt = require('jsonwebtoken');
const findUser = require('../models/login');

const secret = 'mypass';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const decoded = jwt.verify(authorization, secret);
    const user = await findUser(decoded.data.email);
    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: 'erro ao autenticar usuario' });
  }
};
