const connection = require('./connection');

module.exports = async (name, ingredients, preparation) => {
  const db = await connection();
  const { insertedId: _id } = await db.collection('users').insertOne({
    name, ingredients, preparation,
  });
  return { recipe: { name, ingredients, preparation, _id } };
};
