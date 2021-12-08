const connection = require('./connection');

module.exports = async (name, ingredients, preparation, userId) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('recipes').insertOne({
    name, ingredients, preparation, userId,
  });
  return { recipe: { name, ingredients, preparation, userId, _id } };
};
