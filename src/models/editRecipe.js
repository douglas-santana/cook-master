const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async ({ id, name, ingredients, preparation, _id }) => {
  const db = await connection();
  db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, ingredients, preparation } },
  );
  return { _id: ObjectId(id), userId: _id, name, ingredients, preparation };
};
