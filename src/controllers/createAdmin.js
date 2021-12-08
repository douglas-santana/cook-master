const createAdmin = require('../services/createAdmin');

module.exports = async (req, res) => {
  const { role } = req.user;
  const { name, email, password } = req.body;
  const adminCreated = await createAdmin(role, name, email, password);
  if (!adminCreated.message) return res.status(201).json(adminCreated);
  const { status, message } = adminCreated;
  return res.status(status).json({ message });
};
