const createAdmin = require('../models/createAdmin');

module.exports = async (role, name, email, password) => {
  if (role === 'admin') {
    const adminCreated = await createAdmin(name, email, password);
  return adminCreated;
  }
  return { status: 403, message: 'Only admins can register new admins' };
};
