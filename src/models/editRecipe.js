const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (userId, name, ingredients, preparation) => {
  const db = await connection();
  db.collection('recipes').updateOne(
    { _id: ObjectId(userId) },
    { $set: { name, ingredients, preparation } },
  );
  return { name, ingredients, preparation, userId };
};
