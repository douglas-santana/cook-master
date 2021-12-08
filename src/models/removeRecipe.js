const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
  const db = await connection();
  if (!ObjectId.isValid(id)) return null;
  return db.collection('products').deleteOne({ _id: ObjectId(id) });
};
