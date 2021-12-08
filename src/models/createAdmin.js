const connection = require('./connection');

module.exports = async (name, email, password) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('users').insertOne({
    name, email, password,
  });
  return { user: { name, email, role: 'admin', _id } };
};
