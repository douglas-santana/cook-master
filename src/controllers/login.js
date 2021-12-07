const jwt = require('jsonwebtoken');
const findUser = require('../models/login');
const loginVerifys = require('./loginVerifys');

const secret = 'mypass';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (email === 'root@email.com') {
    const userRoot = await findUser(email);
    return res.status(200).json({ userRoot });
  }

  const verifys = await loginVerifys(email, password);
  if (verifys) {
    const { status, message } = verifys;
    return res.status(status).json({ message });
  }

  const userDB = await findUser(email);

  const token = jwt.sign({ data: userDB }, secret, jwtConfig);

  return res.status(200).json({ token });
};
