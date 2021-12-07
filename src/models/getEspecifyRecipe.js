const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
  const db = await connection();
  return db.collection('recipes').findOne({ _id: ObjectId(id) });
};
