const connection = require('./connection');

module.exports = async () => {
  const db = await connection();
  return db.collection('recipes').find().toArray();
};
